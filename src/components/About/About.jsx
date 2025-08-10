import React from 'react';
import { 
  Code, 
  FileCode, 
  Database, 
  Server, 
  Laptop, 
  Github, 
  GitBranch, 
  Layers,
  Terminal,
  GraduationCap,
  MoveRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [activeCategory, setActiveCategory] = useState("Frontend");

  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code size={24} className="text-orange-500" />,
      skills: [
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" }
      ]
    },
    {
      name: "Frontend",
      icon: <Laptop size={24} className="text-orange-500" />,
      skills: [
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
        { name: "Next.js", icon: "devicon-nextjs-plain" },
      ]
    },
    {
      name: "Backend",
      icon: <Server size={24} className="text-orange-500" />,
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain-wordmark colored" },
        { name: "Express", icon: "devicon-express-original" }
      ]
    },
    {
      name: "Database",
      icon: <Database size={24} className="text-orange-500" />,
      skills: [
        { name: "MongoDB" , icon: "devicon-mongodb-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "Prisma", icon: "devicon-prisma-original colored" }
      ]
    },
    {
      name: "Version Control",
      icon: <GitBranch size={24} className="text-orange-500" />,
      skills: [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-plain colored" }
      ]
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  const slideIn = {
    hidden: { x: -60, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100
      }
    }
  };

  return (
    <div className="py-16 min-h-screen bg-gray-900">
      <div className="container mx-auto px-6 text-gray-200 md:px-12 xl:px-6">
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            About <span className="text-orange-500">Me</span>
          </h2>
          <motion.div 
            className="mt-2 h-1 w-24 bg-orange-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>
        </motion.div>

        <div className="space-y-12 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-16">
          <motion.div 
            className="md:w-5/12 lg:w-5/12"
            initial="hidden"
            animate="visible"
            variants={slideIn}
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 opacity-75 blur"
                animate={{ 
                  opacity: [0.4, 0.7, 0.4], 
                }}
                transition={{ 
                  duration: 3, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
              ></motion.div>
              <motion.div 
                className="relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Developer"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Full Stack Developer
              </h3>
              <p className="text-gray-300 mb-4">
                I am a passionate developer with expertise in building modern web applications.
                I enjoy solving complex problems and creating intuitive, dynamic user experiences.
              </p>
              <motion.div 
                className="flex items-center text-orange-400 font-medium cursor-pointer group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="/projects">View my work</a>
                <MoveRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-7/12 lg:w-7/12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-6 flex items-center"
              variants={itemVariants}
            >
              <GraduationCap className="mr-3 text-orange-400" size={28} />
              My Technical Skills
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-8"
              variants={itemVariants}
            >
              Throughout my journey as a developer, I've gained experience with various technologies.
              Here's a breakdown of my technical expertise:
            </motion.p>

            {/* Category Navigation Buttons */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillCategories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.name
                      ? "bg-orange-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.cloneElement(category.icon, { 
                    size: 18, 
                    className: activeCategory === category.name ? "text-white" : "text-orange-400" 
                  })}
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </motion.div>

            <motion.div 
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.5,
                type: "spring"
              }}
            >
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className={`transition-opacity duration-300 ${
                    activeCategory === category.name ? "block" : "hidden"
                  }`}
                  initial="hidden"
                  animate={activeCategory === category.name ? "visible" : "hidden"}
                  variants={fadeIn}
                >
                  <motion.div 
                    className="flex items-center mb-6"
                    variants={itemVariants}
                  >
                    <motion.div 
                      className="p-3 bg-orange-500 bg-opacity-20 rounded-lg mr-4"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(249, 115, 22, 0.3)" 
                      }}
                    >
                      {React.cloneElement(category.icon, { size: 24, className: "text-orange-500" })}
                    </motion.div>
                    <h4 className="text-xl font-bold text-white">{category.name}</h4>
                  </motion.div>

                  <motion.div 
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    variants={containerVariants}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="flex items-center p-3 bg-gray-700 bg-opacity-50 rounded-lg hover:bg-gray-700 transition-colors duration-300 border border-gray-600 hover:border-orange-500 group"
                        variants={skillVariants}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                        }}
                      >
                        <motion.div 
                          className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-opacity-20 mr-3 group-hover:bg-opacity-30 transition-all duration-300"
                          whileHover={{ rotate: 10 }}
                        >
                           {skill.icon && (
                            <i className={`${skill.icon} text-4xl md:text-5xl`}></i>
                          )}
                        </motion.div>
                        <span className="text-gray-200">{skill.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-8 p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.7,
                type: "spring"
              }}
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5
              }}
            >
              <motion.h4 
                className="text-xl font-bold text-white mb-3 flex items-center"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Layers className="mr-2 text-orange-400" size={20} />
                Looking Forward
              </motion.h4>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                I'm always excited to learn new technologies and contribute to meaningful projects. 
                Currently exploring cloud technologies and serverless architectures.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}