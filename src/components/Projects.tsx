import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profileData, type Project } from '../data/profile';

function ProjectCard({ project, index }: {
  project: Project;
  index: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 hover:bg-primary-50/30 dark:hover:bg-gray-900/20 transition-colors duration-300"
    >
      <div className="p-6 lg:p-8 relative">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium text-sm lg:text-base">
              {project.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>

        <div className="pt-6 flex flex-wrap gap-4">
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-blue-500 hover:opacity-90 px-5 py-2.5 rounded-full transition-opacity"
          >
            View Case Study <ArrowRight size={16} />
          </Link>

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
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Research & Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16 max-w-xl mx-auto">
          Each project now has a dedicated case-study page. Open any project to view full details and videos.
        </p>
        
        <div className="flex flex-col gap-6">
          {profileData.projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}