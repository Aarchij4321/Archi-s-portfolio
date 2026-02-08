import { motion } from 'framer-motion';
import { scaleIn } from '../animations/variants';

const Card = ({ children, className = '', delay = 0, hoverEffect = true }) => {
  return (
    <motion.div
      className={`glass rounded-xl p-6 border border-gray-700/50 dark:border-gray-300/20 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden ${className}`}
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={hoverEffect ? { 
        scale: 1.02,
        y: -4,
        boxShadow: '0 20px 60px rgba(6, 182, 212, 0.3)',
      } : {}}
    >
      {/* Subtle gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 pointer-events-none"
        whileHover={{ opacity: 0.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
