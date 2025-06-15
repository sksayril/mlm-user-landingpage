import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Users, 
  Network, 
  Calendar, 
  TrendingUp, 
  Trophy,
  ArrowRight 
} from 'lucide-react';

const IncomePlans = () => {
  const incomeTypes = [
    {
      icon: User,
      title: 'Self Income',
      description: 'Earn from your own activities and investments',
      amount: '₹500 - ₹5,000',
      color: 'from-green-500 to-emerald-500',
      features: ['Personal Trading', 'Drop Shipping Profits', 'Platform Bonuses']
    },
    {
      icon: Users,
      title: 'Direct Referral Income',
      description: 'Earn ₹20 for every direct member you refer',
      amount: '₹20 per member',
      color: 'from-blue-500 to-cyan-500',
      features: ['Instant Rewards', 'Unlimited Referrals', 'Passive Income']
    },
    {
      icon: Network,
      title: 'Matrix Level Income',
      description: 'Earn from 7 levels deep in your matrix network',
      amount: '₹50 → ₹2,34,875',
      color: 'from-purple-500 to-pink-500',
      features: ['7 Level Deep', 'Exponential Growth', 'Team Building Rewards']
    },
    {
      icon: Calendar,
      title: 'Daily Team Income',
      description: 'Get daily bonuses based on team performance',
      amount: '₹5 → ₹2 per level daily',
      color: 'from-orange-500 to-red-500',
      features: ['Daily Payouts', 'Team Based', 'Consistent Income']
    },
    {
      icon: TrendingUp,
      title: 'FX Trading Income',
      description: 'Professional FX trading with guaranteed returns',
      amount: '₹5,999 → ₹15,000',
      color: 'from-indigo-500 to-purple-500',
      features: ['35 Days ROI', 'Expert Guidance', 'Risk Management']
    },
    {
      icon: Trophy,
      title: 'Rank Rewards',
      description: 'Achieve ranks and unlock exclusive rewards',
      amount: '₹500 to ₹60,000',
      color: 'from-yellow-500 to-orange-500',
      features: ['Bikes & Tours', 'Cash Rewards', 'Recognition']
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0zM40 40h40v40H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
            Income{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Plans
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple income streams to maximize your earning potential with our comprehensive platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {incomeTypes.map((income, index) => (
            <motion.div
              key={income.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${income.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              
              <motion.div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${income.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 5 }}
              >
                <income.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                {income.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {income.description}
              </p>

              <div className={`text-2xl font-bold bg-gradient-to-r ${income.color} bg-clip-text text-transparent mb-6`}>
                {income.amount}
              </div>

              <div className="space-y-2 mb-6">
                {income.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${income.color}`} />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                className={`w-full bg-gradient-to-r ${income.color} text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 group-hover:shadow-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Matrix Level Income Breakdown - Enhanced Version */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-b from-blue-700 to-blue-900 rounded-t-2xl py-8 px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Matrix Level Income Breakdown
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              See how your income grows exponentially through our powerful 7-level matrix structure
            </p>
          </div>
          
          {/* Desktop View Table */}
          <div className="bg-white shadow-xl rounded-b-2xl p-4 md:p-8 overflow-hidden hidden md:block">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-blue-100">
                    <th className="py-4 px-6 font-bold text-blue-800 rounded-l-lg">Level</th>
                    <th className="py-4 px-6 font-bold text-blue-800">Members</th>
                    <th className="py-4 px-6 font-bold text-blue-800">Income per Member</th>
                    <th className="py-4 px-6 font-bold text-blue-800 rounded-r-lg">Total Income</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { level: 1, members: 2, income: 50, total: 100 },
                    { level: 2, members: 4, income: 25, total: 100 },
                    { level: 3, members: 8, income: 75, total: 600 },
                    { level: 4, members: 16, income: 125, total: 2000 },
                    { level: 5, members: 32, income: 250, total: 8000 },
                    { level: 6, members: 64, income: 500, total: 32000 },
                    { level: 7, members: 128, income: 1500, total: 192000 }
                  ].map((row, index) => (
                    <motion.tr
                      key={row.level}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'} hover:bg-blue-100/30 transition-colors duration-300`}
                    >
                      <td className="py-5 px-6">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold mr-3 shadow-md">
                            {row.level}
                          </div>
                          <span className="font-semibold text-gray-800">Level {row.level}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <div className="font-medium text-gray-700">{row.members.toLocaleString()}</div>
                        <div className="text-xs text-blue-600">{row.level > 1 ? `${row.members / 2}× previous level` : 'Direct referrals'}</div>
                      </td>
                      <td className="py-5 px-6">
                        <div className="font-medium text-gray-700">₹{row.income.toLocaleString()}</div>
                      </td>
                      <td className="py-5 px-6">
                        <div className="text-lg font-bold text-emerald-600">₹{row.total.toLocaleString()}</div>
                        <motion.div 
                          className="h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mt-1.5"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min(100, (row.total / 192000) * 100)}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                        />
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl">
              <div>
                <div className="text-lg font-bold text-gray-700">Total Potential Earnings</div>
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700 mt-1">
                  ₹2,34,875
                </div>
              </div>
              
              <motion.button
                className="mt-4 md:mt-0 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg flex items-center space-x-2 hover:shadow-emerald-200 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Earning Today</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
          
          {/* Mobile View Cards */}
          <div className="md:hidden bg-white rounded-b-2xl overflow-hidden">
            {[
              { level: 1, members: 2, income: 50, total: 100 },
              { level: 2, members: 4, income: 25, total: 100 },
              { level: 3, members: 8, income: 75, total: 600 },
              { level: 4, members: 16, income: 125, total: 2000 },
              { level: 5, members: 32, income: 250, total: 8000 },
              { level: 6, members: 64, income: 500, total: 32000 },
              { level: 7, members: 128, income: 1500, total: 192000 }
            ].map((row, index) => (
              <motion.div
                key={row.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 border-b border-blue-100 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}`}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold mr-3 shadow-md">
                    {row.level}
                  </div>
                  <span className="font-bold text-gray-800 text-lg">Level {row.level}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs uppercase text-gray-500 font-medium">Members</div>
                    <div className="text-lg font-medium text-gray-700">{row.members}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs uppercase text-gray-500 font-medium">Per Member</div>
                    <div className="text-lg font-medium text-gray-700">₹{row.income}</div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="text-xs uppercase text-gray-500 font-medium">Total Income</div>
                  <div className="text-xl font-bold text-emerald-600">₹{row.total.toLocaleString()}</div>
                  <motion.div 
                    className="h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mt-1.5"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(100, (row.total / 192000) * 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
            
            <div className="p-6 bg-gradient-to-r from-emerald-100 to-emerald-200">
              <div className="text-lg font-bold text-gray-700 text-center">Total Potential Earnings</div>
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700 text-center mt-2">
                ₹2,34,875
              </div>
              
              <motion.button
                className="mt-4 w-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Earning Today</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center text-blue-800 text-sm">
            Based on complete matrix filling. Start with just 2 referrals and watch your team grow exponentially!
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IncomePlans;