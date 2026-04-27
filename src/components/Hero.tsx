import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Mail, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';

const roles = [
  "Full-Stack Developer",
  "React Enthusiast", 
  "UI/UX Designer",
  "Problem Solver",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < roles[currentRole].length) {
          setDisplayText(roles[currentRole].slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-bg to-dark-bg" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10 px-4"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-primary-400 font-medium mb-4 tracking-widest uppercase text-sm"
        >
          Hello, I'm
        </motion.p>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">{profileData.name}</span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-400 mb-2 h-8">
          <span className="gradient-text">{displayText}</span>
          <span className="animate-pulse">|</span>
        </div>
        
        <p className="text-gray-400 max-w-xl mx-auto mt-6 text-lg">
          {profileData.tagline}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-gray-500 text-sm">
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-primary-400" />
            {profileData.location}
          </span>
          <span className="flex items-center gap-2">
            <Mail size={16} className="text-primary-400" />
            {profileData.email}
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full font-semibold text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-3 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all flex items-center gap-2"
          >
            Contact Me
            <ExternalLink size={18} />
          </motion.button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <ChevronDown className="text-gray-500" size={32} />
      </motion.div>
    </section>
  );
}