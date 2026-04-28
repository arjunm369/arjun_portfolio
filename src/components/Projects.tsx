import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronDown, CheckCircle2, Users, TrendingUp } from 'lucide-react';
import { profileData } from '../data/profile';

function ProjectCard({ project, isExpanded, onToggle, index }: { 
  project: any;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass rounded-3xl overflow-hidden transition-colors duration-300 ${isExpanded ? 'border-primary-500/50 bg-primary-50/50 dark:bg-gray-900/40' : 'border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 hover:bg-primary-50/30 dark:hover:bg-gray-900/20'}`}
    >
      <div 
        className="p-6 lg:p-8 cursor-pointer relative"
        onClick={onToggle}
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium text-sm lg:text-base">
              {project.subtitle}
            </p>
          </div>
          
          <motion.div 
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center flex-shrink-0 text-gray-500 dark:text-gray-400"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 lg:p-8 pt-0 border-t border-gray-200 dark:border-gray-800 space-y-8 mt-4">
              
              {/* Core Description */}
              <div>
                <h4 className="text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-500 uppercase mb-3">Project Overview</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Features */}
                {project.features && (
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-500 uppercase mb-4">
                      <CheckCircle2 size={16} className="text-primary-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature: string, i: number) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-3">
                          <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-8">
                  {/* Target Audience */}
                  {project.targetUsers && (
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-500 uppercase mb-3">
                        <Users size={16} className="text-purple-500" />
                        Target Audience
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {project.targetUsers.join(" • ")}
                      </p>
                    </div>
                  )}

                  {/* Impact / Results */}
                  {project.impact && (
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-500 uppercase mb-3">
                        <TrendingUp size={16} className="text-green-500" />
                        Impact & Results
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  )}

                  {/* Links */}
                  {(project.github || project.link) && (
                    <div className="pt-4 flex flex-wrap gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-gray-900 bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 px-5 py-2.5 rounded-full transition-colors">
                          <Github size={18} /> Source Code
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-purple-500 hover:opacity-90 px-5 py-2.5 rounded-full transition-opacity">
                          <ExternalLink size={18} /> View Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Research & Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-xl mx-auto">
          Deep dives into complex systems, algorithms, and full-stack solutions. Click to explore case studies.
        </p>
        
        <div className="flex flex-col gap-6">
          {profileData.projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}