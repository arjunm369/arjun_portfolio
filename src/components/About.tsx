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
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="glass rounded-3xl p-8 lg:col-span-2 row-span-2 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Engineer. Designer. Problem Solver.</h3>
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {profileData.about}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="glass rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary-900/20 to-purple-900/20"
            >
              <div className="text-6xl font-bold gradient-text mb-2">5+</div>
              <div className="text-gray-300 font-medium">Projects Shipped</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="glass rounded-3xl p-8 flex flex-col items-center justify-center text-center"
            >
              <div className="text-6xl font-bold text-white mb-2">3</div>
              <div className="text-gray-400 font-medium">Internships</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass rounded-3xl p-8 flex flex-col items-center justify-center text-center lg:col-span-3"
            >
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <div className="text-gray-400 font-medium">{profileData.location}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}