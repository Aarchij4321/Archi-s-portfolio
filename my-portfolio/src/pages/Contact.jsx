import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations/variants';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import Button from '../components/Button';

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
    <SectionWrapper id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Send me a message and I'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full"
                      disabled={isSubmitting || isSubmitted}
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
                      ) : isSubmitted ? (
                        <span className="flex items-center justify-center gap-2">
                          ✓ Message Sent!
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Social Links & Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-lg bg-gradient-to-br ${social.color} border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-2`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-3xl">{social.icon}</span>
                      <span className="text-white font-medium text-sm">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Quick Info</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">📍</span>
                    <span>Available for remote work</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">⏰</span>
                    <span>Response time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">💼</span>
                    <span>Open to freelance projects</span>
                  </div>
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
