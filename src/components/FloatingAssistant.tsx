import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import type { Group } from 'three';

// --- 3D Avatar Component ---
const AvatarModel = ({ hovered }: { hovered: boolean }) => {
  const group = useRef<Group>(null);
  
  // Assumes the 3D model is placed at public/models/avatar.glb
  const { scene } = useGLTF('/models/avatar.glb');

  // Idle animation (floating & breathing)
  useFrame((state) => {
    if (group.current) {
      // Smooth floating up and down
      group.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1 - 0.2; // Raised the base Y
      
      // Look towards cursor (slight rotation tracking)
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      group.current.rotation.y += 0.05 * (targetX - group.current.rotation.y);
      group.current.rotation.x += 0.05 * (-targetY - group.current.rotation.x);

      // Smooth scale transition on hover
      const targetScale = hovered ? 1.1 : 1;
      group.current.scale.setScalar(
        group.current.scale.x + (targetScale - group.current.scale.x) * 0.1
      );
    }
  });

  return (
    <group ref={group}>
      {/* Increased scale slightly for better visibility depending on standard GLB sizes */}
      {/* 
        Model rotated 90 degrees to face forward
      */}
      <primitive object={scene} scale={6} position={[0, -3, 0]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
};

// --- Main Floating Component ---
export default function FloatingAssistant() {
  const [hovered, setHovered] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Click interaction state
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Ensure voices are loaded (Chrome quirk)
  React.useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  // Speech Helper
  const speak = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel(); // Prevent overlapping speech
    console.log(`[AI Assistant] Speaking: "${text}"`);
    
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05; // Slightly faster for a generic young adult energy
      utterance.pitch = 0.95; // Lower pitch, sounding closer to a normal ~22yo guy
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      const voices = window.speechSynthesis.getVoices();
      // Try to grab a young, natural English male voice over the generic robot ones
      // Looking for Google US English Male or Microsoft Guy / Mark
      const preferredVoice = voices.find(v => 
        (v.lang.includes('en-') && v.name.includes('Google') && v.name.includes('Male')) || 
        v.name.includes('Guy') || 
        v.name.includes('Mark') ||
        (v.name.includes('Google US English') && !v.name.includes('Female'))
      ) || voices.find(v => v.lang.includes('en-US'));
      
      if (preferredVoice) utterance.voice = preferredVoice;

      window.speechSynthesis.speak(utterance);
    }, 250); // 200-300ms delay for natural feel
  };

  const handleAvatarClick = () => {
    // Track rapid clicks
    clickCountRef.current += 1;
    const count = clickCountRef.current;
    
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }
    
    // Reset counter after 3 seconds
    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 3000);

    // --- CHANGE WHAT THE BOT SPEAKS HERE ---
    // You can edit the text inside the quotes below:
    if (count === 6) {
      speak("Alright alright, I'm working! No need to spam ");
    } else if (count === 3) {
      speak("Hey  no need to click me that much!");
    } else if (count === 1) {
      speak("Hi, I am Arjun's AI assistant.");
    }
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 pointer-events-none flex flex-col items-end">
      {/* Avatar Container */}
      <div
        className={`w-72 h-[26rem] cursor-pointer pointer-events-auto relative drop-shadow-2xl transition-all duration-300 delay-75 ${
          isSpeaking ? 'drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] scale-105' : ''
        }`}
        onClick={handleAvatarClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {hovered && !isSpeaking && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap animate-bounce font-medium tracking-wide">
            Click to interact!
          </div>
        )}
        
        {/* 3D Canvas */}
        <Canvas camera={{ position: [0, 0.5, 5], fov: 45 }} className="!w-full !h-full">
          {/* Subtle Lighting */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 5, 2]} intensity={2.5} castShadow />
          <hemisphereLight groundColor="#000000" intensity={0.5} />
          
          <Suspense fallback={null}>
            <AvatarModel hovered={hovered} />
          </Suspense>

          {/* Controls: Prevents zooming/panning off-center, limits rotation */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minAzimuthAngle={-Math.PI / 4} // Limit horizontal rotation
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 2.5}  // Restrict vertical looking
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  );
}

// Preload the model to prevent UI freezing/late popping when first rendered
useGLTF.preload('/models/avatar.glb');
