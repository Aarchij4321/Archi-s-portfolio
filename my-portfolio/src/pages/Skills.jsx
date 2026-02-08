import { motion } from 'framer-motion';
import { useState } from 'react';
import { staggerContainer, fadeInUp } from '../animations/variants';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import SkillCard3D from '../components/SkillCard3D';
import ProgressRing from '../components/ProgressRing';

const SkillBar = ({ name, level, delay = 0 }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 dark:text-gray-700 font-medium">{name}</span>
        <motion.span
          className="text-cyan-400 dark:text-cyan-500 text-sm font-bold"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.5, type: 'spring', stiffness: 200 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-3 bg-gray-800 dark:bg-gray-200 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full relative overflow-hidden"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const skillCategories = {
    Frontend: {
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript', 'Next.js', 'Vue.js'],
      icon: '⚛️',
    },
    Backend: {
      skills: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Django'],
      icon: '🔧',
    },
    Tools: {
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Docker', 'AWS', 'Linux'],
      icon: '🛠️',
    },
  };

  const skillLevels = [
    { name: 'React', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 80 },
    { name: 'MongoDB', level: 70 },
    { name: 'Tailwind CSS', level: 88 },
  ];

  const filters = ['All', 'Frontend', 'Backend', 'Tools'];

  const filteredCategories = activeFilter === 'All' 
    ? Object.entries(skillCategories)
    : [[activeFilter, skillCategories[activeFilter]]].filter(Boolean);

  return (
    <SectionWrapper id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-400 dark:text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-gray-800/50 dark:bg-gray-200/50 text-gray-300 dark:text-gray-700 hover:bg-gray-800/70 dark:hover:bg-gray-200/70'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Skill Categories with 3D Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredCategories.map(([category, data], index) => (
              <SkillCard3D
                key={category}
                category={category}
                skills={data.skills}
                icon={data.icon}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {/* Progress Rings Section */}
          <motion.div
            variants={fadeInUp}
            className="mb-16"
          >
            <Card className="text-center">
              <h3 className="text-2xl font-bold text-cyan-400 dark:text-cyan-500 mb-8">Proficiency Levels</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {skillLevels.map((skill, index) => (
                  <ProgressRing
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Skill Progress Bars (Alternative View) */}
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <Card>
              <h3 className="text-2xl font-bold text-cyan-400 dark:text-cyan-500 mb-6">Detailed Skills</h3>
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
