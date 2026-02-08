import { motion } from 'framer-motion';
import { fadeIn } from '../animations/variants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const techStack = ['React', 'Tailwind CSS', 'Framer Motion'];

  return (
    <motion.footer
      className="glass-strong border-t border-gray-800/50 dark:border-gray-300/20 py-8 relative"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 dark:text-gray-600 text-sm mb-2">
            &copy; {currentYear} Aarchi. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-gray-500 dark:text-gray-500 text-sm">Built with</span>
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="text-cyan-400 dark:text-cyan-500 text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
                {index < techStack.length - 1 && <span className="text-gray-500 mx-1">•</span>}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
