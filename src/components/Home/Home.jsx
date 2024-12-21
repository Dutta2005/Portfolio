import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg px-4 sm:px-16 py-10 sm:py-20">
        {/* Text Section */}
        <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col-reverse sm:flex-row items-center sm:items-start sm:justify-between gap-40">
          <div className="sm:mt-1 mt-10 text-center sm:text-left sm:space-y-6">
            <motion.h2
              className="text-3xl font-bold sm:text-5xl leading-tight mt-16"
              initial={{ opacity: 0, y: 20 }} // Initial state (hidden and lower)
              animate={{ opacity: 1, y: 0 }} // Final state (visible and in position)
              transition={{ duration: 1, ease: 'easeOut' }} // Animation properties
            >
              Hi, 👋 I am <span className="text-orange-700">Raj Dutta</span>
            </motion.h2>
            <motion.p
              className="text-lg sm:text-2xl text-gray-900 mt-4 font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }} // Delayed animation
            >
              A passionate MERN stack developer
            </motion.p>
            <motion.p
              className="text-lg sm:text-2xl text-gray-900 mt-4 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }} // Delayed animation
            >
              "Life is a divine algorithm, intricately coded by the universe, yet yours to rewrite and optimize."
            </motion.p>
            {/* Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1IyMQvpWm8IKYuKJcSX_JWacKcQuOvbmD/view?usp=sharing" // Replace with actual resume file path or URL
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

          {/* Image Section */}
          <motion.div
            className="w-72 sm:w-96 mx-auto sm:ml-10 flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          >
            <img
              className="w-full"
              src="https://i.ibb.co/5BCcDYB/Remote2.png"
              alt="Illustration of Remote2"
              loading="lazy"
            />
          </motion.div>
        </div>
      </aside>
    </div>
  );
}
