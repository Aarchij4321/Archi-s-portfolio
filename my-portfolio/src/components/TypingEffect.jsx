import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingEffect = ({ words, typingSpeed = 100, deletingSpeed = 50, delay = 1000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isPaused) {
      const timeout = setTimeout(() => {
        if (!isDeleting && currentText === word) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, delay);
        } else if (isDeleting && currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setCurrentText((prev) => {
            if (isDeleting) {
              return prev.slice(0, -1);
            } else {
              return word.slice(0, prev.length + 1);
            }
          });
        }
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delay, isPaused]);

  return (
    <span className="inline-block">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 align-middle"
      />
    </span>
  );
};

export default TypingEffect;
