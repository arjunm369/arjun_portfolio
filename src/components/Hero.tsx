import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, MapPin } from 'lucide-react';
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-white to-white dark:from-primary-900/20 dark:via-dark-bg dark:to-dark-bg transition-colors duration-500" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 dark:bg-primary-500/10 rounded-full blur-3xl transition-opacity" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl transition-opacity" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10 px-4"
      >
        <motion.div className="overflow-hidden mb-4">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="text-primary-400 font-medium tracking-widest uppercase text-sm"
          >
            Hello, I'm
          </motion.p>
        </motion.div>
        
        <div className="overflow-hidden mb-4">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
          >
            <span className="gradient-text">{profileData.name}</span>
          </motion.h1>
        </div>
        
        <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2 h-8">
          <span className="gradient-text">{displayText}</span>
          <span className="animate-pulse">|</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-6 text-lg relative z-10">
          {profileData.tagline}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-gray-500 text-sm">
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-primary-500 dark:text-primary-400" />
            <span className="text-gray-600 dark:text-gray-400">{profileData.location}</span>
          </span>
          <span className="flex items-center gap-2">
            <Mail size={16} className="text-primary-500 dark:text-primary-400" />
            <span className="text-gray-600 dark:text-gray-400">{profileData.email}</span>
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToProjects}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full font-semibold text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className="px-8 py-3 glass rounded-full font-semibold text-gray-900 dark:text-white border border-gray-300 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center gap-2"
          >
            Contact Me
            <ExternalLink size={18} />
          </motion.button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10"
      >
        <div className="w-[30px] h-[50px] border-2 border-gray-500 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 bg-gray-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}