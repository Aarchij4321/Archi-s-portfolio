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
    'Become a full-stack developer specializing in modern web technologies',
    'Contribute to open-source projects and build innovative solutions',
    'Master cloud computing and DevOps practices',
    'Explore AI/ML integration in web applications',
  ];

  return (
    <SectionWrapper id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Personal Description */}
            <motion.div variants={fadeInUp}>
              <Card>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate MCA student with a deep interest in web development and modern 
                  software engineering. I love building applications that solve real-world problems 
                  and provide exceptional user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My journey in tech started with curiosity about how websites work, and it has 
                  evolved into a passion for creating scalable, performant, and beautiful web 
                  applications using cutting-edge technologies.
                </p>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeInUp}>
              <Card>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Education</h3>
                <h4 className="text-xl font-semibold text-white mb-2">{education.degree}</h4>
                <p className="text-gray-300 mb-2">{education.university}</p>
                <p className="text-cyan-400 text-sm mb-4">{education.period}</p>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Career Goals */}
          <motion.div variants={fadeInUp}>
            <Card>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Career Goals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {goals.map((goal, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-500/30 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-cyan-400 text-xl">🎯</span>
                    <p className="text-gray-300">{goal}</p>
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
