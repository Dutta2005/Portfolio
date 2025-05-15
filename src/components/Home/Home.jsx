import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import AnimatedProjectsSection from './ProjectSection';
import Achievements from './Achievements';
import {TopSkillsIconCloud} from './TopSkills';

export default function Home() {
  return (
    <>
      <div className="w-full bg-gray-900 min-h-screen flex items-center">
        <div className="mx-auto w-full max-w-7xl">
          <aside className="relative overflow-hidden text-white px-4 sm:px-16 py-10 sm:py-20">
            <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col-reverse sm:flex-row items-center sm:items-start sm:justify-between sm:gap-40">
              <div className="sm:mt-1 mt-6 text-center sm:text-left sm:space-y-6">
                <motion.h2
                  className="text-3xl font-bold sm:text-5xl leading-tight mt-4 sm:mt-16 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  Hi, 👋 I am <span className="text-orange-500">Raj Dutta</span>
                </motion.h2>

                <motion.div
                  className="text-lg sm:text-2xl text-orange-400 mt-4 font-bold min-h-[32px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <span>
                    <Typewriter
                      words={['Full stack developer', 'Open Source Contributor']}
                      loop={Infinity}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </motion.div>

                <motion.p
                  className="text-lg sm:text-2xl text-gray-300 mt-4 font-mono animate-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
                >
                  "Life is a divine algorithm, intricately coded by the universe, yet yours to rewrite and optimize."
                </motion.p>

                <motion.a
                  href={import.meta.env.VITE_MY_RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Resume
                </motion.a>
              </div>

              <motion.div
                className="w-64 sm:w-96 mx-auto sm:ml-10 flex-shrink-0 relative p-4 mb-4 sm:mb-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-50"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
                <motion.div 
                  className="relative aspect-square rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="w-full h-full object-fill"
                    src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Illustration of Remote2"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="flex justify-center -mt-16 mb-4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 1 },
          y: { delay: 2, duration: 1.5, repeat: Infinity }
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-orange-400 flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-orange-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-900'>
            <div className="flex-grow">
              <TopSkillsIconCloud />
            
        </div>
        <div className="col-span-2 p-6 rounded-lg flex flex-col">
              <AnimatedProjectsSection />
        </div>
      </div>
      
      <div className="relative h-24 overflow-hidden bg-gray-900">
        <motion.div 
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent top-1/2 transform -translate-y-1/2"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
      </div>
      
      <Achievements />
    </>
  );
}