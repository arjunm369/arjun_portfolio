import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { profileData } from '../data/profile';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="glass rounded-2xl p-8 md:p-10">
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {profileData.about}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-700">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-400 mt-1">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text">3</div>
                <div className="text-gray-400 mt-1">Internships</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold gradient-text">7+</div>
                <div className="text-gray-400 mt-1">Certifications</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}