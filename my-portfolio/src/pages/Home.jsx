import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { staggerContainer, fadeInUp, floatAnimation, glowAnimation } from '../animations/variants';
import AnimatedButton from '../components/AnimatedButton';
import SectionWrapper from '../components/SectionWrapper';
import TypingEffect from '../components/TypingEffect';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const profileRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e) => {
    if (!profileRef.current) return;
    const rect = profileRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/yourprofile' },
    { name: 'GitHub', icon: '💻', href: 'https://github.com/yourusername' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/yourusername' },
    { name: 'Email', icon: '📧', href: 'mailto:your.email@example.com' },
  ];

  const roles = ['Full Stack Developer', 'React Specialist', 'Node.js Enthusiast', 'Problem Solver'];

  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 gradient-mesh"></div>
      
      {/* Animated Radial Gradients */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.15),transparent_50%)]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_50%)]"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full blur-sm"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

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

            <motion.div
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 mb-4 min-h-[2rem]"
            >
              <span className="text-gray-400">I'm a </span>
              <TypingEffect words={roles} typingSpeed={100} deletingSpeed={50} delay={2000} />
            </motion.div>

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
              <AnimatedButton variant="primary" href="#contact">
                Hire Me
              </AnimatedButton>
              <AnimatedButton variant="secondary" href="#contact">
                Contact Me
              </AnimatedButton>
              <AnimatedButton variant="outline" href="/resume.pdf" download>
                Download CV
              </AnimatedButton>
            </motion.div>

            {/* Social Links with Enhanced Animations */}
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
                  className="relative w-12 h-12 rounded-full glass border border-gray-700/50 dark:border-gray-300/20 flex items-center justify-center text-xl hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 group"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -8,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20, rotate: -180 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ 
                    delay: 0.5 + index * 0.1,
                    rotate: { type: 'spring', stiffness: 200, damping: 10 },
                  }}
                >
                  <span className="relative z-10">{social.icon}</span>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Tooltip */}
                  <motion.span
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                    initial={{ y: 5, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {social.name}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with Parallax */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center md:justify-end relative"
          >
            <motion.div
              ref={profileRef}
              className="relative"
              variants={floatAnimation}
              animate="animate"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Animated Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl"
                variants={glowAnimation}
                animate="animate"
                style={{
                  transform: 'translateZ(0)',
                }}
              />
              
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-cyan-500/20"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              />
              
              {/* Profile Image Container with 3D Effect */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 dark:border-cyan-400/50 shadow-2xl shadow-cyan-500/30"
                initial={{ scale: 0, opacity: 0, rotateY: -180 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 100 }}
                style={{
                  transform: 'translateZ(50px)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center text-8xl backdrop-blur-sm">
                  👨‍💻
                </div>
                
                {/* Shine overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>

              {/* Floating Orbital Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-cyan-400/40 rounded-full blur-sm"
                  style={{
                    transform: `translateZ(${i * 20}px)`,
                  }}
                  animate={{
                    rotate: 360,
                    x: [0, Math.cos((i * 120) * Math.PI / 180) * 120],
                    y: [0, Math.sin((i * 120) * Math.PI / 180) * 120],
                  }}
                  transition={{
                    rotate: {
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    x: {
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                    y: {
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
