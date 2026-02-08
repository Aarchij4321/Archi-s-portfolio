import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { staggerContainer, fadeInUp } from '../animations/variants';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';

const CertificationCard = ({ cert, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <motion.div
        className="h-full cursor-pointer"
        whileHover={{
          scale: 1.03,
          y: -8,
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Card className="h-full flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <motion.h3
                className="text-xl font-bold text-white dark:text-gray-900 mb-2"
                animate={{ color: isExpanded ? '#06b6d4' : undefined }}
              >
                {cert.title}
              </motion.h3>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-cyan-400 dark:text-cyan-600 text-sm font-medium">{cert.platform}</p>
                <span className="text-gray-500">•</span>
                <p className="text-gray-400 dark:text-gray-600 text-xs">{cert.year}</p>
              </div>
            </div>
            <motion.div
              className="text-3xl"
              whileHover={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: 1.2,
              }}
              transition={{ duration: 0.5 }}
            >
              🏆
            </motion.div>
          </div>
          
          <motion.p
            className="text-gray-300 dark:text-gray-700 text-sm mb-4 line-clamp-2"
            animate={{
              lineClamp: isExpanded ? 'none' : 2,
            }}
          >
            {cert.description}
          </motion.p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-gray-700/50 dark:border-gray-300/50"
              >
                <div className="space-y-2 text-sm text-gray-400 dark:text-gray-600">
                  <p><strong className="text-cyan-400 dark:text-cyan-600">Issued:</strong> {cert.year}</p>
                  <p><strong className="text-cyan-400 dark:text-cyan-600">Platform:</strong> {cert.platform}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={cert.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 dark:text-cyan-600 hover:text-cyan-300 dark:hover:text-cyan-500 text-sm font-medium inline-flex items-center gap-2 mt-auto"
            whileHover={{ x: 5 }}
            onClick={(e) => e.stopPropagation()}
          >
            View Credential
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 pointer-events-none"
            animate={{
              opacity: isExpanded ? 0.3 : 0,
            }}
          />
        </Card>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: 'React - The Complete Guide',
      platform: 'Udemy',
      year: '2024',
      credential: '#',
      description: 'Comprehensive React development course covering hooks, context, and advanced patterns. Mastered component lifecycle, state management, and modern React best practices.',
    },
    {
      title: 'Node.js and Express.js',
      platform: 'Coursera',
      year: '2024',
      credential: '#',
      description: 'Backend development with Node.js, Express, and RESTful API design. Built scalable server applications and integrated with various databases.',
    },
    {
      title: 'MongoDB Certified Developer',
      platform: 'MongoDB University',
      year: '2023',
      credential: '#',
      description: 'Database design and development with MongoDB. Learned schema design, aggregation pipelines, and performance optimization techniques.',
    },
    {
      title: 'AWS Cloud Practitioner',
      platform: 'AWS',
      year: '2024',
      credential: '#',
      description: 'Fundamentals of cloud computing and AWS services. Understanding of EC2, S3, Lambda, and cloud architecture patterns.',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      platform: 'freeCodeCamp',
      year: '2023',
      credential: '#',
      description: 'Problem-solving and algorithm implementation in JavaScript. Mastered data structures, algorithms, and coding interview techniques.',
    },
    {
      title: 'Responsive Web Design',
      platform: 'freeCodeCamp',
      year: '2023',
      credential: '#',
      description: 'Modern responsive design principles and CSS frameworks. Created beautiful, accessible, and mobile-first web interfaces.',
    },
  ];

  return (
    <SectionWrapper id="certifications" className="py-20 bg-gray-900/50 dark:bg-gray-100/50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-400 dark:text-gray-600 max-w-2xl mx-auto">
              Professional certifications and courses that validate my expertise
            </p>
          </motion.div>

          {/* Masonry-style grid layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                cert={cert}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
