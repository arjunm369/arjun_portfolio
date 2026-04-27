import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FolderOpen, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Some of the projects I've built to solve real-world problems
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="p-6">
                  <div className="mb-3">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-gray-800 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {(project.github || project.link) && (
                    <div className="flex gap-4 pt-4 border-t border-gray-700">
                      {project.github && (
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm"
                        >
                          <FolderOpen size={18} />
                          Code
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm"
                        >
                          <ExternalLink size={18} />
                          Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}