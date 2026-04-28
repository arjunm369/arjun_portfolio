import React, { Suspense } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';

// Lazy load components below the fold
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Experience = React.lazy(() => import('./components/Experience'));
const Contact = React.lazy(() => import('./components/Contact'));

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="noise-overlay"></div>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-primary-500">Loading...</div>}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Arjun M. All rights reserved.</p>
      </footer>
    </div>
  );
}