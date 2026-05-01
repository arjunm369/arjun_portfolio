import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Users, TrendingUp } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { profileData } from '../data/profile';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = profileData.projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="pt-32 pb-24 px-4 relative min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 mb-8"
        >
          <ArrowLeft size={16} /> Back To Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-6 lg:p-10 border border-gray-200 dark:border-white/5"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
            Case Study
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-primary-600 dark:text-primary-400 font-medium text-base lg:text-lg mb-8">
            {project.subtitle}
          </p>

          {project.video && (
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-black mb-8">
              <video
                src={project.video}
                controls
                preload="metadata"
                playsInline
                className="w-full h-auto"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {!project.video && (
            <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/40 p-6 mb-8 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Video demo coming soon.
              </p>
            </div>
          )}

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-500 uppercase mb-3">
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-500 uppercase mb-3">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.features && (
                <div>
                  <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-500 uppercase mb-4">
                    <CheckCircle2 size={16} className="text-primary-500" />
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-3">
                        <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-8">
                {project.targetUsers && (
                  <div>
                    <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-500 uppercase mb-3">
                      <Users size={16} className="text-blue-500" />
                      Target Audience
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {project.targetUsers.join(' • ')}
                    </p>
                  </div>
                )}

                {project.impact && (
                  <div>
                    <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-600 dark:text-gray-500 uppercase mb-3">
                      <TrendingUp size={16} className="text-green-500" />
                      Impact & Results
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {(project.github || project.link) && (
              <div className="pt-2 flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-900 bg-gray-200 hover:bg-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 px-5 py-2.5 rounded-full transition-colors"
                  >
                    <Github size={18} /> Source Code
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-purple-500 hover:opacity-90 px-5 py-2.5 rounded-full transition-opacity"
                  >
                    <ExternalLink size={18} /> View Live
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
