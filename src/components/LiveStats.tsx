import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Globe, TrendingUp } from 'lucide-react';

const LiveStats = () => {
  const [stats, setStats] = useState({
    users: 12304,
    paidOut: 2430000,
    activeCountries: 6,
    dailyEarnings: 45600
  });

  // Simulate live updates
  useEffect(() => {
    const intervals = [
      // Users increment
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          users: prev.users + Math.floor(Math.random() * 3) + 1
        }));
      }, 5000),
      
      // Payout increment
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          paidOut: prev.paidOut + Math.floor(Math.random() * 5000) + 1000
        }));
      }, 3000),
      
      // Daily earnings increment
      setInterval(() => {
        setStats(prev => ({
          ...prev,
          dailyEarnings: prev.dailyEarnings + Math.floor(Math.random() * 500) + 100
        }));
      }, 2000),
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  const statItems = [
    {
      icon: Users,
      label: 'Active Users',
      value: stats.users.toLocaleString(),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: DollarSign,
      label: 'Total Paid Out',
      value: `$${(stats.paidOut / 100000).toFixed(1)}L`,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Globe,
      label: 'Active Countries',
      value: `${stats.activeCountries}+`,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: TrendingUp,
      label: 'Daily Earnings',
      value: `$${(stats.dailyEarnings / 1000).toFixed(0)}K`,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M50 0l50 50-50 50L0 50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full px-6 py-3 mb-6"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sky-700 font-semibold">Live Stats</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real-Time{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Performance
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our platform's live performance and join thousands of successful members earning daily
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`bg-gradient-to-br ${stat.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group relative overflow-hidden`}
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  whileHover={{ rotate: 5 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <motion.div
                  className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  key={stat.value} // Force re-render on value change
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.value}
                </motion.div>
                
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>

                {/* Pulse Effect for Live Updates */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${stat.color} rounded-full opacity-60`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Update Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white"
        >
          <div className="text-center">
            <motion.h3
              className="text-2xl font-bold mb-4"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🎉 Join the Success Story!
            </motion.h3>
            <p className="text-xl mb-6">
              Over {stats.users.toLocaleString()} members are already earning daily. 
              Don't miss out on this incredible opportunity!
            </p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                💰 Last payout: ₹{Math.floor(Math.random() * 5000) + 500}
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                👥 New member joined 2 mins ago
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                🏆 Rank achieved: Gold Level
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveStats;