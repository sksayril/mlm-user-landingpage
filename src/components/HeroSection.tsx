import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroImages = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Professional Trading',
      subtitle: 'Expert FX Trading with Guaranteed Returns'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Team Success',
      subtitle: 'Build Your Network & Earn Together'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Financial Freedom',
      subtitle: 'Multiple Income Streams for Life'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Digital Success',
      subtitle: 'Drop Shipping & Online Business'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600">
        <div className="absolute inset-0 bg-black/20" />
        {/* Animated Background Circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-white text-sm font-medium">Start Your Journey Today</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Start Making Money{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                Online Today!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-8 max-w-2xl"
            >
              Grow with India's fastest drop-shipping & FX trading platform. 
              Earn income through referrals, daily team bonuses, rank rewards, and more — all starting at just ₹499.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Join Now</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">12K+</div>
                <div className="text-white/70 text-sm">Active Users</div>
              </div>
              <div className="text-center">                <div className="text-2xl font-bold text-white">₹24L+ ($27.9K+)</div>
                <div className="text-white/70 text-sm">Paid Out</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20 overflow-hidden">
              {/* Image Carousel */}
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={heroImages[currentSlide].image}
                      alt={heroImages[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Image Overlay Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-6 left-6 right-6 text-white"
                    >
                      <h3 className="text-xl font-bold mb-2">{heroImages[currentSlide].title}</h3>
                      <p className="text-white/90">{heroImages[currentSlide].subtitle}</p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setCurrentSlide(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide 
                          ? 'bg-white w-6' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>

              {/* Trading Dashboard Mockup */}
              <motion.div
                className="mt-4 space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="font-semibold text-gray-800 text-sm">Live Earnings</span>
                    </div>
                    <div className="text-green-500 font-bold text-sm">+24.5%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-600">Today</div>
                      <div className="text-lg font-bold text-green-600">₹210925 - $2,450</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-600">Team Bonus</div>
                      <div className="text-lg font-bold text-blue-600"> ₹103310 - $1,200</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-2 rounded-full text-sm font-bold shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >                ₹499 ($5.80) Only!
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-3 py-2 rounded-full text-sm font-bold shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                High Returns
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;