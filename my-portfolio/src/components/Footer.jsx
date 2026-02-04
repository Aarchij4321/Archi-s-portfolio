import { motion } from 'framer-motion';
import { fadeIn } from '../animations/variants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50 py-8"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Aarchi. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
