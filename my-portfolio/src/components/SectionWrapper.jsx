import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
