import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingInput = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  required = false,
  className = '',
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setHasValue(!!inputRef.current?.value);
  };

  const handleChange = (e) => {
    setHasValue(!!e.target.value);
    if (onChange) onChange(e);
  };

  const isActive = isFocused || hasValue;

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.02 }}
      >
        <motion.input
          ref={inputRef}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          className="w-full px-4 pt-6 pb-2 bg-gray-800/50 dark:bg-gray-700/50 border border-gray-700 dark:border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 peer"
          {...props}
        />
        
        <motion.label
          htmlFor={name}
          className="absolute left-4 text-gray-400 pointer-events-none transition-all duration-300 origin-left"
          animate={{
            y: isActive ? -8 : 16,
            scale: isActive ? 0.85 : 1,
            color: isActive ? '#06b6d4' : '#9ca3af',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </motion.label>

        {/* Animated border glow */}
        <AnimatePresence>
          {isFocused && (
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                boxShadow: '0 0 0 2px rgba(6, 182, 212, 0.3)',
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FloatingInput;
