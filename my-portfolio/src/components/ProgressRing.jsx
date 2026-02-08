import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const ProgressRing = ({ name, level, delay = 0, size = 120, strokeWidth = 8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-gray-800 dark:text-gray-200 opacity-20"
          />
          <defs>
            <linearGradient id={`gradient-${name.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#gradient-${name.replace(/\s+/g, '-')})`}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: level / 100 } : { pathLength: 0 }}
            transition={{
              duration: 1.5,
              delay,
              ease: 'easeOut',
            }}
            style={{
              filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.5))',
            }}
          />
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-2xl font-bold text-cyan-400 dark:text-cyan-500"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: delay + 0.5, type: 'spring', stiffness: 200 }}
          >
            {level}%
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mt-3 text-sm font-medium text-gray-300 dark:text-gray-700 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: delay + 0.7 }}
      >
        {name}
      </motion.p>
    </div>
  );
};

export default ProgressRing;
