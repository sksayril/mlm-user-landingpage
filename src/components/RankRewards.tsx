import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Star, 
  Crown, 
  Gem, 
  Trophy, 
  Car,
  Users,
  Gift
} from 'lucide-react';

const RankRewards = () => {
  const ranks = [
    {
      icon: Award,
      name: 'Bronze',
      requirement: '20 Members',      reward: '₹500 ($5.81) + ID Card',
      color: 'from-amber-600 to-yellow-700',
      bgColor: 'from-amber-50 to-yellow-50',
      borderColor: 'border-amber-200'
    },
    {
      icon: Star,
      name: 'Silver',
      requirement: '50 Members',
      reward: '₹1,000 ($11.62) + Bag',
      color: 'from-gray-400 to-gray-600',
      bgColor: 'from-gray-50 to-slate-50',
      borderColor: 'border-gray-200'
    },
    {
      icon: Trophy,
      name: 'Gold',
      requirement: '100 Members',
      reward: '₹2,500 ($29.05) + Phone',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Gem,
      name: 'Ruby',
      requirement: '200 Members',
      reward: '₹10,000 ($116.20) Mobile Phone + Tour',
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200'
    },
    {
      icon: Crown,
      name: 'Diamond',
      requirement: '400 Members',      reward: '₹15,000 ($174.30) + India Tour',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Gem,
      name: 'Platinum',
      requirement: '800 Members',
      reward: '₹25,000 ($290.50) + INTERNATIONAL TOR',
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200'
    },
    {
      icon: Car,
      name: 'King',
      requirement: '1600 Members',
      reward: '₹60,000 ($697.20) + Bike + International Tour',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-sky-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 bg-blue-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7,
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
            Award{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              And Rewards
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Achieve higher ranks and unlock incredible rewards including cash prizes, gadgets, tours, and even vehicles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ranks.map((rank, index) => (
            <motion.div
              key={rank.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className={`bg-gradient-to-br ${rank.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 ${rank.borderColor} border-2 group relative overflow-hidden`}
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${rank.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${rank.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg`}
                  whileHover={{ rotate: 10 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <rank.icon className="h-10 w-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-sky-600 transition-colors">
                  {rank.name}
                </h3>
                
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-600 font-medium">{rank.requirement}</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <Gift className="h-5 w-5 text-gray-500" />
                    <span className={`font-bold text-lg bg-gradient-to-r ${rank.color} bg-clip-text text-transparent`}>
                      {rank.reward}
                    </span>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${rank.color}`}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${Math.min(100, (index + 1) * 15)}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 1 }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Rank Progress
                  </p>
                </div>

                {/* Special Effects for Higher Ranks */}
                {index >= 3 && (
                  <motion.div
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    PREMIUM
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Your Journey to Success
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-200 to-blue-300 transform -translate-x-1/2" />
            <motion.div
              className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-sky-500 to-blue-600 transform -translate-x-1/2"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />

            <div className="space-y-12">
              {ranks.map((rank, index) => (
                <motion.div
                  key={rank.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h4 className="text-lg font-bold text-gray-900">{rank.name} Rank</h4>
                    <p className="text-gray-600">{rank.requirement}</p>
                    <p className={`font-semibold bg-gradient-to-r ${rank.color} bg-clip-text text-transparent`}>
                      {rank.reward}
                    </p>
                  </div>
                  
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${rank.color} flex items-center justify-center z-10`}
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(59, 130, 246, 0.4)',
                        '0 0 0 10px rgba(59, 130, 246, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <rank.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

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
            Start Your Rank Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default RankRewards;