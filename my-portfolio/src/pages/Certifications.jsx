import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations/variants';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';

const Certifications = () => {
  const certifications = [
    {
      title: 'React - The Complete Guide',
      platform: 'Udemy',
      year: '2024',
      credential: '#',
      description: 'Comprehensive React development course covering hooks, context, and advanced patterns',
    },
    {
      title: 'Node.js and Express.js',
      platform: 'Coursera',
      year: '2024',
      credential: '#',
      description: 'Backend development with Node.js, Express, and RESTful API design',
    },
    {
      title: 'MongoDB Certified Developer',
      platform: 'MongoDB University',
      year: '2023',
      credential: '#',
      description: 'Database design and development with MongoDB',
    },
    {
      title: 'AWS Cloud Practitioner',
      platform: 'AWS',
      year: '2024',
      credential: '#',
      description: 'Fundamentals of cloud computing and AWS services',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      platform: 'freeCodeCamp',
      year: '2023',
      credential: '#',
      description: 'Problem-solving and algorithm implementation in JavaScript',
    },
    {
      title: 'Responsive Web Design',
      platform: 'freeCodeCamp',
      year: '2023',
      credential: '#',
      description: 'Modern responsive design principles and CSS frameworks',
    },
  ];

  return (
    <SectionWrapper id="certifications" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 60px rgba(6, 182, 212, 0.3)',
                  }}
                >
                  <Card>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                        <p className="text-cyan-400 text-sm mb-1">{cert.platform}</p>
                        <p className="text-gray-400 text-xs">{cert.year}</p>
                      </div>
                      <motion.div
                        className="text-3xl"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        🏆
                      </motion.div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                    <motion.a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      View Credential
                      <span>→</span>
                    </motion.a>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
