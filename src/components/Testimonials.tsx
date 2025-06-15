import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Surat, Gujarat',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'I earned ₹30K in just 45 days! This platform changed my life completely. The team support is amazing and the income is consistent.',
      income: '₹30,000',
      timeframe: '45 days'
    },
    {
      id: 2,
      name: 'Pooja Sharma',
      location: 'Delhi, India',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Best side income ever! I can work from home and still earn more than my regular job. Highly recommend For Life Trading India.',
      income: '₹25,000',
      timeframe: '2 months'
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Mumbai, Maharashtra',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The FX trading income is incredible. I never thought I could make this much money online. The training provided is top-notch.',
      income: '₹45,000',
      timeframe: '3 months'
    },
    {
      id: 4,
      name: 'Sunita Devi',
      location: 'Jaipur, Rajasthan',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'From housewife to entrepreneur! The matrix income system is brilliant. I achieved Silver rank in just 2 months.',
      income: '₹20,000',
      timeframe: '2 months'
    },
    {
      id: 5,
      name: 'Vikash Singh',
      location: 'Pune, Maharashtra',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The daily team bonuses are consistent and the rank rewards are amazing. I just received my Gold rank reward!',
      income: '₹35,000',
      timeframe: '4 months'
    },
    {
      id: 6,
      name: 'Neha Gupta',
      location: 'Bangalore, Karnataka',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Professional platform with genuine opportunities. The drop shipping business model works perfectly for students like me.',
      income: '₹18,000',
      timeframe: '1.5 months'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];
  const visibleTestimonials = [
    testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length],
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-sky-200/30 rounded-full blur-2xl"
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
          className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200/30 rounded-full blur-2xl"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Members Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who have transformed their lives with For Life Trading India
          </p>
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop View */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === 1 
                    ? 'scale-110 z-20' 
                    : 'scale-90 opacity-60 z-10'
                }`}
                whileHover={{ scale: index === 1 ? 1.15 : 0.95 }}
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  isActive={index === 1}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard 
                  testimonial={currentTestimonial} 
                  isActive={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-white z-30"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-white z-30"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-sky-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { label: 'Happy Members', value: '12,000+', icon: '😊' },
            { label: 'Success Stories', value: '5,000+', icon: '🎉' },
            { label: 'Average Monthly Earning', value: '₹25,000', icon: '💰' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 max-w-md mx-auto border border-gray-100 relative overflow-hidden ${
        isActive ? 'ring-2 ring-sky-500/20' : ''
      }`}
      whileHover={{ y: -5 }}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-sky-200">
        <Quote className="h-8 w-8" />
      </div>

      {/* Profile */}
      <div className="flex items-center mb-6">
        <motion.img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-sky-100"
          whileHover={{ scale: 1.1 }}
        />
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.location}</p>
          
          {/* Stars */}
          <div className="flex mt-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        "{testimonial.text}"
      </p>

      {/* Income Badge */}
      <div className="flex items-center justify-between">
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full">
          <span className="text-green-700 font-bold">{testimonial.income}</span>
          <span className="text-green-600 text-sm ml-1">earned</span>
        </div>
        <div className="text-gray-500 text-sm">
          in {testimonial.timeframe}
        </div>
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

export default Testimonials;