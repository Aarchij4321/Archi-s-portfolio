import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, href, className = '', download, type, disabled }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/50',
    secondary: 'bg-gray-800/50 backdrop-blur-sm text-white border border-cyan-500/50 hover:border-cyan-400 hover:bg-gray-800/70',
    outline: 'bg-transparent text-cyan-400 border-2 border-cyan-500 hover:bg-cyan-500/10',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const buttonContent = (
    <motion.button
      type={type || 'button'}
      className={`${baseClasses} ${variants[variant]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        className={`${baseClasses} ${variants[variant]} ${className} inline-block text-center`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return buttonContent;
};

export default Button;
