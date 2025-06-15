import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is For Life Trading India?',
      answer: 'For Life Trading India is a comprehensive platform that combines drop shipping business opportunities with FX trading income. We provide multiple income streams including referral bonuses, matrix level income, daily team bonuses, and rank rewards. Our platform is designed to help individuals build sustainable online income starting with just ₹499.'
    },
    {
      question: 'Is this legal in India?',
      answer: 'Yes, For Life Trading India operates completely within the legal framework of India. We are a registered company following all necessary compliance requirements. Our business model is based on legitimate drop shipping and FX trading activities, and all our income programs are structured according to Indian financial regulations.'
    },
    {
      question: 'How much can I earn daily?',
      answer: 'Your daily earnings depend on your activity level and team performance. Members typically earn between ₹150-₹2,000 daily through various income streams: Direct referrals (₹20 each), daily team bonuses (₹5-₹50 per level), matrix income, and FX trading returns. Top performers earn ₹5,000+ daily.'
    },
    {
      question: 'How do I withdraw money?',
      answer: 'Withdrawals are processed instantly once you reach the minimum threshold of ₹150. You can withdraw your earnings directly to your bank account through our secure payment gateway. We support all major Indian banks and UPI payments. There are no hidden charges or withdrawal fees.'
    },
    {
      question: 'Is there any joining fee?',
      answer: 'Yes, there is a one-time activation fee of ₹499 to join For Life Trading India. This fee activates your account and gives you access to all income opportunities including drop shipping business, FX trading, referral program, and rank reward system. This is the only fee required - no monthly charges or hidden costs.'
    },
    {
      question: 'How do I refer others?',
      answer: 'Once you join, you will receive a unique referral link and ID. Share this link with friends, family, and your network through social media, WhatsApp, or direct messaging. When someone joins using your link, you earn ₹20 immediately and they become part of your team for ongoing bonuses.'
    },
    {
      question: 'What is the Matrix Income System?',
      answer: 'Our matrix system allows you to earn from 7 levels deep. When your referrals bring in new members, you earn from their activities too. Level 1: ₹50 per member, Level 2: ₹25 per member, and so on up to Level 7. This creates a passive income stream that can generate ₹2,34,875+ when your matrix is complete.'
    },
    {
      question: 'How does FX Trading work?',
      answer: 'Our FX trading program requires a ₹5,999 investment and provides ₹15,000 returns over 35 days. This is managed by our expert trading team using proven strategies. You don\'t need any trading knowledge - our professionals handle everything while you earn guaranteed returns.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-12 w-12 text-sky-500 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Questions
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about For Life Trading India
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.div
                className={`bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden ${
                  openIndex === index ? 'ring-2 ring-sky-500/20' : ''
                }`}
                whileHover={{ scale: 1.01 }}
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-6 w-6 text-sky-500" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sky-100">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-sky-100 mb-6">
              Our support team is here to help you 24/7. Contact us for personalized assistance.
            </p>
            <motion.button
              className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;