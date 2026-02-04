import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, floatAnimation, glowAnimation } from '../animations/variants';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';

const Home = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/yourprofile' },
    { name: 'GitHub', icon: '💻', href: 'https://github.com/yourusername' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/yourusername' },
    { name: 'Email', icon: '📧', href: 'mailto:your.email@example.com' },
  ];

  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <motion.div
              variants={fadeInUp}
              className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
            >
              <span className="text-cyan-400 text-sm font-medium">MCA Student & Developer</span>
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Aarchi
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              Building Modern Web Experiences
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-gray-400 mb-8 max-w-xl"
            >
              Passionate about creating innovative solutions with React, Node.js, and modern web technologies. 
              Currently pursuing MCA and exploring the endless possibilities of full-stack development.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button variant="primary" href="#contact">
                Hire Me
              </Button>
              <Button variant="secondary" href="#contact">
                Contact Me
              </Button>
              <Button variant="outline" href="/resume.pdf" download>
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-4 justify-center md:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center text-xl hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center md:justify-end relative"
          >
            <motion.div
              className="relative"
              variants={floatAnimation}
              animate="animate"
            >
              {/* Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl"
                variants={glowAnimation}
                animate="animate"
              />
              
              {/* Profile Image Container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
