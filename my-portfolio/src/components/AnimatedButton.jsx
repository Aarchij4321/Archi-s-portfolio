import { motion } from 'framer-motion';
import { useState } from 'react';

const AnimatedButton = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className = '', 
  download, 
  type, 
  disabled,
  withRipple = true 
}) => {
  const [ripples, setRipples] = useState([]);

  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70',
    secondary: 'bg-gray-800/50 dark:bg-gray-700/50 backdrop-blur-sm text-white border border-cyan-500/50 hover:border-cyan-400 hover:bg-gray-800/70 dark:hover:bg-gray-700/70',
    outline: 'bg-transparent text-cyan-400 border-2 border-cyan-500 hover:bg-cyan-500/10',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const handleClick = (e) => {
    if (disabled) return;
    
    if (withRipple) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { x, y, id: Date.now() };
      setRipples([...ripples, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    }
    
    if (onClick) onClick(e);
  };

  const buttonContent = (
    <motion.button
      type={type || 'button'}
      className={`${baseClasses} ${variants[variant]} ${disabledClasses} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {/* Animated gradient border effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.5) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
          animate={{
            width: 200,
            height: 200,
            x: -100,
            y: -100,
            opacity: [0.5, 0],
          }}
          transition={{ duration: 0.6 }}
        />
      ))}
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        className={`${baseClasses} ${variants[variant]} ${className} inline-block text-center`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
      >
        {children}
      </motion.a>
    );
  }

  return buttonContent;
};

export default AnimatedButton;
