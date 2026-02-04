import { motion } from 'framer-motion';
import { scaleIn } from '../animations/variants';

const Card = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 ${className}`}
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 40px rgba(6, 182, 212, 0.2)',
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
