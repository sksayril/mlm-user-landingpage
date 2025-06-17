import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  CreditCard, 
  Users, 
  Banknote, 
  Wallet 
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Register your account with basic details and get started in minutes',
      step: '1'
    },
    {
      icon: CreditCard,
      title: 'Pay ₹499 - $20',
      description: 'Make your one-time investment of just ₹499 - $20 to activate your account',
      step: '2'
    },
    {
      icon: Users,
      title: 'Refer Friends',
      description: 'Share your referral link and build your network of earning partners',
      step: '3'
    },
    {
      icon: Banknote,
      title: 'Earn Daily Income',
      description: 'Start earning through multiple income streams - referrals, trading, and bonuses',
      step: '4'
    },
    {
      icon: Wallet,
      title: 'Withdraw ₹150 + $1.74',
      description: 'Withdraw your earnings instantly once you reach the minimum threshold',
      step: '5'
    }
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
            How It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in just 5 simple steps and begin your journey to financial freedom
          </p>
        </motion.div>

        {/* Desktop View - Horizontal Stepper */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-200 to-blue-300 transform -translate-y-1/2 z-0" />
            <motion.div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-sky-500 to-blue-600 transform -translate-y-1/2 z-10"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            <div className="relative z-20 grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto border-4 border-sky-100">
                      <step.icon className="h-8 w-8 text-sky-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Stepper */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <motion.div
                className="relative flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-sky-100">
                  <step.icon className="h-6 w-6 text-sky-600" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {step.step}
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-16 left-1/2 w-0.5 h-12 bg-gradient-to-b from-sky-200 to-blue-300 transform -translate-x-1/2" />
                )}
              </motion.div>
              
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now - Only ₹499 - $20
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;