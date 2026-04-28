import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { profileData } from '../data/profile';

const SkillPill = ({ name, delay }: { name: string; delay: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      className="glass px-4 py-2 rounded-full border border-gray-700/50 flex items-center justify-center bg-gray-800/30 hover:bg-gray-800/60 transition-colors"
    >
      <span className="text-gray-300 font-medium text-sm">{name}</span>
    </motion.div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const categories = Object.entries(profileData.skills);

  return (
    <section id="skills" className="min-h-screen py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            Tools and technologies I use to build scalable, modern applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1 }}
                className="glass rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-800 pb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill: any, skillIndex: number) => (
                    <SkillPill
                      key={skill.name}
                      name={skill.name}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}