import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Facebook, 
  Youtube, 
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Plans', href: '#plans' },
    { name: 'Rewards', href: '#rewards' },
    { name: 'Teams', href: '#team' },
    { name: 'FAQ', href: '#faq' }
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Refund Policy', href: '#refund' },
    { name: 'Disclaimer', href: '#disclaimer' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' },
    { icon: MessageCircle, href: '#', color: 'hover:text-green-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.div 
                className="flex items-center space-x-2 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">For Life Trading India</span>
              </motion.div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                India's fastest growing drop-shipping & FX trading platform. 
                Build your financial future with multiple income streams starting at just ₹499 - $20 .
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all hover:bg-white/20`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group"
                    >
                      <motion.span
                        className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <motion.li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-sky-400 transition-colors flex items-center group"
                    >
                      <motion.span
                        className="w-2 h-2 bg-sky-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>Mumbai, Maharastra , AHMEDNAGAR  </p>
                    <p>India - 414001</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-sky-400 flex-shrink-0" />
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-sky-400 transition-colors">
                    +91-9876543210
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-sky-400 flex-shrink-0" />
                  <a href="mailto:support@forlifetredingindia.life" className="text-gray-300 hover:text-sky-400 transition-colors">
                    support@forlifetredingindia.life
                  </a>
                </div>
                
                 <div className="flex items-center space-x-3">
                      <a href="tel:+919876543210" className="text-gray-300 hover:text-sky-400 transition-colors">
                   C/O Sabita Khatun & Md Maminur Islam
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Stay Updated</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-sky-400"
                  />
                  <motion.button
                    className="bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 rounded-r-lg hover:from-sky-600 hover:to-blue-700 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2025 For Life Trading India Pvt. Ltd. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                Made with ❤️ CCT
              </p>
              
              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
    </footer>
  );
};

export default Footer;