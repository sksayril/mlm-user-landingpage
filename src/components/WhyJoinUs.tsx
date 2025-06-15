import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  TrendingUp, 
  Users, 
  Gift, 
  Award, 
  Shield 
} from 'lucide-react';

const WhyJoinUs = () => {
  const features = [
    {
      icon: Package,
      title: 'Drop Shipping Business',
      description: 'Start your own drop shipping business with zero inventory. We handle everything from products to delivery.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'FX Trading Income',
      description: 'Earn through professional FX trading with expert guidance and proven strategies.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: '7-Level Matrix Income',
      description: 'Build your network and earn from 7 levels deep. Maximum earning potential with our matrix system.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Gift,
      title: 'Daily Team Bonuses',
      description: 'Get daily bonuses based on your team performance. Consistent daily income guaranteed.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      title: 'Rank Rewards',
      description: 'Achieve ranks from Bronze to King and unlock amazing rewards including bikes and international tours.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure INR Withdrawals',
      description: 'Withdraw your earnings securely in INR. Minimum withdrawal of ₹150 with instant processing.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Join{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              For Life Trading India?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover multiple income streams and build your financial future with our comprehensive platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group"
            >
              <motion.div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 5 }}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10`} />
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
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoinUs;