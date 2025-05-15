import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';

const AchievementCard = ({ achievement, index }) => {
  const gradientClass = `bg-gradient-to-r ${achievement.color}`;

  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Background with gradient */}
      <div className={`absolute inset-0 ${gradientClass} opacity-20`}></div>

      <div className="relative z-10 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-start gap-4">
          {/* Icon circle with gradient */}
          <div className={`p-3 rounded-full ${gradientClass} flex-shrink-0`}>
            {achievement.icon}
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-400">{achievement.type}</p>
                <h3 className="text-xl font-bold text-white mt-0.5">{achievement.name}</h3>
              </div>
              <span className="text-xs text-gray-400">{achievement.date}</span>
            </div>
            
            <p className="mt-2 text-gray-300 text-sm">{achievement.description}</p>
            
            
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      type: "Hackathon",
      name: "HackWars",
      description: "Secured 1st place in the Hackathon",
      date: "March, 2025",
      icon: <Trophy size={18} className="text-white" />,
      color: "from-yellow-500 to-amber-600"
    }, 
    {
      type: "Open Source",
      name: "Social Winter of Code",
      description: "Secured 33rd place among 330+ participants",
      date: "March, 2025",
      icon: <Award size={18} className="text-white" />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-3">Achievements</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Recognition and accomplishments from my journey in tech.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
      
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Achievements