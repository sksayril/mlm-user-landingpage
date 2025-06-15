import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Star, 
  Linkedin, 
  Twitter, 
  Mail,
  TrendingUp,
  Target,
  Heart
} from 'lucide-react';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: '15+ years in financial markets and e-commerce. Led multiple successful ventures.',
      achievements: ['₹100Cr+ Revenue Generated', '50K+ Lives Transformed', 'Industry Pioneer'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'rajesh@forlifetredingindia.life'
      },
      stats: {
        experience: '15+ Years',
        members: '25K+',
        success: '98%'
      }
    },
    {
      id: 2,
      name: 'Priya Patel',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Operations expert with MBA from IIM. Specializes in scaling business operations.',
      achievements: ['Operations Excellence Award', 'Team Leadership Expert', 'Process Optimization'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'priya@forlifetredingindia.life'
      },
      stats: {
        experience: '12+ Years',
        members: '18K+',
        success: '96%'
      }
    },
    {
      id: 3,
      name: 'Amit Kumar',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Tech visionary with expertise in fintech and blockchain. Former Google engineer.',
      achievements: ['Tech Innovation Award', 'Blockchain Expert', 'AI Implementation'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'amit@forlifetredingindia.life'
      },
      stats: {
        experience: '10+ Years',
        members: '15K+',
        success: '99%'
      }
    },
    {
      id: 4,
      name: 'Sunita Devi',
      position: 'Head of Training',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Expert trainer and mentor. Helped thousands achieve financial independence.',
      achievements: ['Master Trainer Certification', '10K+ Students Trained', 'Success Coach'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sunita@forlifetredingindia.life'
      },
      stats: {
        experience: '8+ Years',
        members: '12K+',
        success: '97%'
      }
    },
    {
      id: 5,
      name: 'Vikash Singh',
      position: 'FX Trading Head',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Professional forex trader with consistent profitable track record for 12+ years.',
      achievements: ['Certified FX Analyst', '₹50Cr+ Trading Volume', 'Risk Management Expert'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'vikash@forlifetredingindia.life'
      },
      stats: {
        experience: '12+ Years',
        members: '20K+',
        success: '95%'
      }
    },
    {
      id: 6,
      name: 'Neha Gupta',
      position: 'Customer Success Manager',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Customer experience specialist ensuring every member achieves their goals.',
      achievements: ['Customer Excellence Award', '24/7 Support Leader', 'Member Satisfaction 99%'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'neha@forlifetredingindia.life'
      },
      stats: {
        experience: '6+ Years',
        members: '30K+',
        success: '99%'
      }
    }
  ];

  const companyStats = [
    {
      icon: Users,
      label: 'Team Members',
      value: '50+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      label: 'Years Experience',
      value: '15+',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      label: 'Success Rate',
      value: '98%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      label: 'Happy Members',
      value: '50K+',
      color: 'from-red-500 to-orange-500'
    }
  ];

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
            <Users className="h-12 w-12 text-sky-500 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Expert Team
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team is dedicated to your success. With decades of combined experience 
            in finance, technology, and business development.
          </p>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 text-center border border-sky-100 shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4`}
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <stat.icon className="h-6 w-6 text-white" />
              </motion.div>
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                {/* Profile Image */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-sky-100 group-hover:ring-sky-200 transition-all">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white fill-current" />
                  </div>
                </motion.div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-sky-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sky-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="text-center bg-sky-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-sky-600">{member.stats.experience}</div>
                    <div className="text-xs text-gray-500">Experience</div>
                  </div>
                  <div className="text-center bg-green-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-green-600">{member.stats.members}</div>
                    <div className="text-xs text-gray-500">Members</div>
                  </div>
                  <div className="text-center bg-purple-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-purple-600">{member.stats.success}</div>
                    <div className="text-xs text-gray-500">Success</div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                        <span className="text-xs text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <motion.a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="h-4 w-4 text-blue-600" />
                  </motion.a>
                  <motion.a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-sky-100 hover:bg-sky-200 rounded-lg flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Twitter className="h-4 w-4 text-sky-600" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-4 w-4 text-gray-600" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white text-center"
        >
          <motion.div
            className="max-w-4xl mx-auto"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Commitment to Your Success</h3>
            <p className="text-xl text-sky-100 mb-6">
              "We believe in empowering every individual to achieve financial freedom. Our team works tirelessly 
              to provide you with the best tools, training, and support to succeed in your journey."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Our Mission</div>
                <div className="text-sky-200 text-sm">Transform Lives Through Financial Education</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;