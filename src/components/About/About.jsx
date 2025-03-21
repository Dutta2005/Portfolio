import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiC, SiTailwindcss, SiExpress, SiTypescript, SiNextdotjs } from 'react-icons/si'; // C++ and MongoDB icons from react-icons
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-16 min-h-screen bg-gray-900">
      <div className="container mx-auto px-6 text-gray-300 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          {/* Image Section */}
          <div className="md:w-5/12 lg:w-5/12">
            <motion.img
              src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About me illustration"
              className="rounded-lg shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>

          {/* Text and Skills Section */}
          <div className="md:w-7/12 lg:w-6/12">
            {/* Title */}
            <motion.h2
              className="text-2xl text-white font-bold md:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Passionate about Full Stack Development and Coding
            </motion.h2>

            {/* Description */}
            <motion.p
              className="mt-6 text-gray-300 text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              I am a passionate developer skilled in various programming languages and technologies.
              Below are the tools and frameworks I work with:
            </motion.p>

            {/* Skills Icons */}
            <motion.div
              className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {[
                { icon: <SiC className="text-4xl text-blue-400" />, name: 'C' },
                { icon: <SiCplusplus className="text-4xl text-blue-400" />, name: 'C++' },
                { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: 'HTML5' },
                { icon: <FaCss3Alt className="text-4xl text-blue-400" />, name: 'CSS3' },
                { icon: <FaJs className="text-4xl text-yellow-300" />, name: 'JavaScript' },
                { icon: <SiTypescript className="text-4xl text-blue-400" />, name: 'TypeScript' },
                { icon: <FaReact className="text-4xl text-blue-400" />, name: 'React' },
                { icon: <SiTailwindcss className="text-4xl text-blue-400" />, name: 'Tailwind CSS' },
                { icon: <FaNodeJs className="text-4xl text-green-400" />, name: 'Node.js' },
                { icon: <SiExpress className="text-4xl text-green-400" />, name: 'Express' },
                { icon: <SiMongodb className="text-4xl text-green-500" />, name: 'MongoDB' },
                { icon: <SiNextdotjs className="text-4xl text-gray-300" />, name: 'Next.js' },
                { icon: <FaGitAlt className="text-4xl text-orange-500" />, name: 'Git' },
                { icon: <FaGithub className="text-4xl text-gray-300" />, name: 'GitHub' },
              ].map(({ icon, name }, index) => (
                <motion.div
                  className="flex flex-col items-center"
                  key={index}
                  whileHover={{
                    scale: 1.2,
                    y: -10,
                    transition: { duration: 0.3 },
                  }} // Hover effect
                >
                  <motion.div
                    className="text-4xl"
                    whileHover={{ color: '#FF5722' }} // Change color on hover
                  >
                    {icon}
                  </motion.div>
                  <p className="text-gray-300 text-sm md:text-lg mt-2">{name}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Closing Statement */}
            <motion.p
              className="mt-6 text-gray-300 text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              I'm always excited to learn new technologies and contribute to meaningful projects.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}