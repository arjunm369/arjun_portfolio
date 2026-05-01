import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import InteractiveBackground from './components/InteractiveBackground';
import MiniGame from './components/MiniGame';
import FloatingAssistant from './components/FloatingAssistant';

// Lazy load components below the fold
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Experience = React.lazy(() => import('./components/Experience'));
const Contact = React.lazy(() => import('./components/Contact'));
const ProjectDetailPage = React.lazy(() => import('./components/ProjectDetailPage'));

function HomePage() {
  return (
    <Suspense fallback={<div className="h-screen flex flex-col items-center justify-center text-primary-500 gap-4"><div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div><p className="text-sm font-medium tracking-widest uppercase">Loading Modules</p></div>}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Suspense>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) {
      return;
    }

    const sectionId = location.hash.replace('#', '');
    const timer = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-white transition-colors duration-500 relative">
      <InteractiveBackground />
      <div className="noise-overlay"></div>
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10 w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/projects/:slug"
            element={
              <Suspense fallback={<div className="h-screen flex flex-col items-center justify-center text-primary-500 gap-4"><div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div><p className="text-sm font-medium tracking-widest uppercase">Loading Case Study</p></div>}>
                <ProjectDetailPage />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <footer className="py-8 text-center text-gray-500 text-sm relative z-10 border-t border-white/5 bg-dark-bg/80 backdrop-blur-md">
        <p>&copy; {new Date().getFullYear()} Arjun M. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50 px-4">Built with React, Vite, Framer Motion, and Tailwind CSS.</p>
      </footer>

      {/* Hidden Easter Egg Game */}
      <MiniGame />

      {/* Floating 3D AI Assistant */}
      <FloatingAssistant />
    </div>
  );
}