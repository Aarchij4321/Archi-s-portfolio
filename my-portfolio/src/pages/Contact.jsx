import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations/variants';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import AnimatedButton from '../components/AnimatedButton';
import FloatingInput from '../components/FloatingInput';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/yourprofile', color: 'from-blue-500 to-blue-600' },
    { name: 'GitHub', icon: '💻', href: 'https://github.com/yourusername', color: 'from-gray-700 to-gray-800' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/yourusername', color: 'from-sky-500 to-sky-600' },
    { name: 'Email', icon: '📧', href: 'mailto:your.email@example.com', color: 'from-cyan-500 to-blue-500' },
  ];

  return (
    <SectionWrapper id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Send me a message and I'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card>
                <h3 className="text-2xl font-bold text-cyan-400 dark:text-cyan-500 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FloatingInput
                    label="Your Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <FloatingInput
                    label="Your Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <div className="relative">
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 pt-6 pb-2 bg-gray-800/50 dark:bg-gray-700/50 border border-gray-700 dark:border-gray-600 rounded-lg text-white dark:text-gray-900 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all duration-300 resize-none peer"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.label
                      htmlFor="message"
                      className="absolute left-4 text-gray-400 dark:text-gray-600 pointer-events-none transition-all duration-300 origin-left"
                      animate={{
                        y: formData.message ? -8 : 16,
                        scale: formData.message ? 0.85 : 1,
                        color: formData.message ? '#06b6d4' : '#9ca3af',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                      Your Message
                      <span className="text-red-400 ml-1">*</span>
                    </motion.label>
                  </div>

                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="w-full"
                      >
                        <AnimatedButton
                          type="button"
                          variant="primary"
                          className="w-full bg-green-500 hover:bg-green-400"
                          disabled
                        >
                          <span className="flex items-center justify-center gap-2">
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: [0, 1.2, 1] }}
                              transition={{ duration: 0.5 }}
                            >
                              ✓
                            </motion.span>
                            Message Sent Successfully!
                          </span>
                        </AnimatedButton>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="submit"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="w-full"
                      >
                        <AnimatedButton
                          type="submit"
                          variant="primary"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                ⏳
                              </motion.span>
                              Sending...
                            </span>
                          ) : (
                            'Send Message'
                          )}
                        </AnimatedButton>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </Card>
            </motion.div>

            {/* Social Links & Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card>
                <h3 className="text-2xl font-bold text-cyan-400 dark:text-cyan-500 mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-lg bg-gradient-to-br ${social.color} border border-gray-700/50 dark:border-gray-300/20 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 group relative overflow-hidden`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5, rotate: [0, -2, 2, -2, 0] }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Hover glow */}
                      <motion.div
                        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span
                        className="text-3xl relative z-10"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {social.icon}
                      </motion.span>
                      <span className="text-white dark:text-gray-900 font-medium text-sm relative z-10">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-cyan-400 dark:text-cyan-500 mb-4">Quick Info</h3>
                <div className="space-y-3 text-gray-300 dark:text-gray-700">
                  {[
                    { icon: '📍', text: 'Available for remote work' },
                    { icon: '⏰', text: 'Response time: Within 24 hours' },
                    { icon: '💼', text: 'Open to freelance projects' },
                  ].map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="text-cyan-400 dark:text-cyan-500"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {info.icon}
                      </motion.span>
                      <span>{info.text}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
