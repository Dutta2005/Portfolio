import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg px-4 sm:px-16 py-10 sm:py-20">
        {/* Text Section */}
        <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col-reverse sm:flex-row items-center sm:items-start sm:justify-between sm:gap-40">
          <div className="sm:mt-1 mt-6 text-center sm:text-left sm:space-y-6">
            <motion.h2
              className="text-3xl font-bold sm:text-5xl leading-tight mt-4 sm:mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Hi, 👋 I am <span className="text-orange-700">Raj Dutta</span>
            </motion.h2>
            <motion.p
              className="text-lg sm:text-2xl text-gray-900 mt-4 font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            >
              A passionate MERN stack developer
            </motion.p>
            <motion.p
              className="text-lg sm:text-2xl text-gray-900 mt-4 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
            >
              "Life is a divine algorithm, intricately coded by the universe, yet yours to rewrite and optimize."
            </motion.p>
            {/* Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1IyMQvpWm8IKYuKJcSX_JWacKcQuOvbmD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-orange-700 text-white font-semibold rounded-lg shadow-md hover:bg-orange-800 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
            >
              View My Resume
            </motion.a>
          </div>
          
          {/* Image Section with Circular Shape */}
          <motion.div
            className="w-64 sm:w-96 mx-auto sm:ml-10 flex-shrink-0 relative p-4 mb-4 sm:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          >
            <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-50"></div>
            <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Illustration of Remote2"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </aside>
    </div>
  );
}