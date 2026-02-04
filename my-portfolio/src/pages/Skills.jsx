import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, fadeInUp } from '../animations/variants';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';

const SkillBar = ({ name, level, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-cyan-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillCard = ({ category, skills, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
    >
      <Card>
        <h3 className="text-xl font-bold text-cyan-400 mb-4">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50 hover:border-cyan-500/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + index * 0.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = {
    Frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript'],
    Backend: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'MongoDB', 'PostgreSQL'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Docker'],
  };

  const skillLevels = [
    { name: 'React', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 80 },
    { name: 'MongoDB', level: 70 },
    { name: 'Tailwind CSS', level: 88 },
  ];

  return (
    <SectionWrapper id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {Object.entries(skillCategories).map(([category, skills], index) => (
              <SkillCard
                key={category}
                category={category}
                skills={skills}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Skill Progress Bars */}
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <Card>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Proficiency Levels</h3>
              {skillLevels.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
