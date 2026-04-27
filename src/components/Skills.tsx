import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { profileData } from '../data/profile';

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-primary-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const categories = Object.entries(profileData.skills);

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            I've worked with a variety of technologies to build modern, scalable applications
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-6 text-primary-400">{category}</h3>
                {skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}