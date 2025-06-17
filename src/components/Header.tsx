import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, TrendingUp } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Plans', path: '#plans' },
    { name: 'Rewards', path: '#rewards' },
    { name: 'Team', path: '#team' },
    { name: 'FAQ', path: '#faq' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              FOR LIFE TREDING INDIA PVT LTD
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  } ${location.hash === item.path ? 'font-bold text-sky-500' : ''}`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    style={{ display: 'inline-block' }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-sky-600' 
                  : 'text-white/90 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-gray-700 hover:text-sky-600 font-medium ${location.hash === item.path ? 'font-bold text-sky-500' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <button className="block w-full text-left text-gray-700 hover:text-sky-600 font-medium">
                  Login
                </button>
                <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium">
                  Join Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;