import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations/variants';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';

const About = () => {
  const education = {
    degree: 'Master of Computer Applications (MCA)',
    university: 'Your University Name',
    period: '2023 - 2025',
    coursework: [
      'Data Structures & Algorithms',
      'Web Development',
      'Cloud Computing',
      'Artificial Intelligence & Machine Learning',
      'Database Management Systems',
      'Software Engineering',
    ],
  };

  const goals = [
    { text: 'Become a full-stack developer specializing in modern web technologies', icon: '🚀' },
    { text: 'Contribute to open-source projects and build innovative solutions', icon: '💡' },
    { text: 'Master cloud computing and DevOps practices', icon: '☁️' },
    { text: 'Explore AI/ML integration in web applications', icon: '🤖' },
  ];

  return (
    <SectionWrapper id="about" className="py-20 bg-gray-900/50 dark:bg-gray-100/50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-400 dark:text-gray-600 max-w-2xl mx-auto">
              Learn more about my journey, education, and career aspirations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Personal Description */}
            <motion.div variants={fadeInUp}>
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    className="text-3xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    👨‍💻
                  </motion.span>
                  <h3 className="text-2xl font-bold text-cyan-400 dark:text-cyan-500">Who I Am</h3>
                </div>
                <p className="text-gray-300 dark:text-gray-700 leading-relaxed mb-4">
                  I'm a passionate MCA student with a deep interest in web development and modern 
                  software engineering. I love building applications that solve real-world problems 
                  and provide exceptional user experiences.
                </p>
                <p className="text-gray-300 dark:text-gray-700 leading-relaxed">
                  My journey in tech started with curiosity about how websites work, and it has 
                  evolved into a passion for creating scalable, performant, and beautiful web 
                  applications using cutting-edge technologies.
                </p>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeInUp}>
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    className="text-3xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎓
                  </motion.span>
                  <h3 className="text-2xl font-bold text-cyan-400 dark:text-cyan-500">Education</h3>
                </div>
                <h4 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">{education.degree}</h4>
                <p className="text-gray-300 dark:text-gray-700 mb-2">{education.university}</p>
                <p className="text-cyan-400 dark:text-cyan-600 text-sm mb-4 font-medium">{education.period}</p>
                <div>
                  <p className="text-gray-400 dark:text-gray-600 text-sm mb-2 font-medium">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 dark:bg-gray-200/50 rounded-full text-xs text-gray-300 dark:text-gray-700 border border-gray-600/50 dark:border-gray-300/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Career Goals */}
          <motion.div variants={fadeInUp}>
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎯
                </motion.span>
                <h3 className="text-2xl font-bold text-cyan-400 dark:text-cyan-500">Career Goals</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {goals.map((goal, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-800/30 dark:bg-gray-200/30 rounded-lg border border-gray-700/30 dark:border-gray-300/30 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4, x: 5 }}
                  >
                    <motion.span
                      className="text-2xl"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {goal.icon}
                    </motion.span>
                    <p className="text-gray-300 dark:text-gray-700 group-hover:text-cyan-400 dark:group-hover:text-cyan-500 transition-colors">
                      {goal.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
