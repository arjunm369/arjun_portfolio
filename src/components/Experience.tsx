import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { profileData } from '../data/profile';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            My professional journey and academic background
          </p>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500" />
            
            {profileData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-8 h-8 absolute left-0 md:left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center z-10`}>
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                
                <div className={`ml-12 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="glass rounded-xl p-5">
                    <span className="text-primary-400 text-sm">{exp.period}</span>
                    <h3 className="text-lg font-semibold mt-1">{exp.role}</h3>
                    <p className="text-gray-400 text-sm">{exp.company}</p>
                    <p className="text-gray-500 text-xs mt-2">{exp.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="gradient-text">Education</span>
              </h3>
              
              {profileData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass rounded-xl p-5 mb-4"
                >
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{edu.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}