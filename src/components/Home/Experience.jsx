import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Code, Briefcase} from 'lucide-react';
import intern1 from '../../assets/intern1.png';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer Intern",
      company: "NeuroNexus Innovations",
      duration: "April 2025 - May 2025",
      type: "Internship",
      description: "Built scalable web applications using the MERN stack with focus on performance and user experience. Developed responsive UIs with React and Tailwind CSS, implemented RESTful APIs with Node.js/Express, and managed data with MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "REST APIs", "Git"],
      keyPoints: [
        "Developed dynamic UIs ensuring cross-device responsiveness",
        "Built RESTful APIs for seamless client-server communication", 
        "Integrated MongoDB with Mongoose for efficient data handling",
        "Collaborated with teams to translate wireframes into functional components"
      ],
      companyLogo: (
        <img src={intern1} alt="NeuroNexus Innovations" className="w-full h-full rounded-full" />
      ), 
      isRemote: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-gradient-to-br bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-3xl font-bold text-white">
              Professional <span className="text-orange-500">Experience</span>
            </h2>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here's a glimpse of my professional journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mt-6"></div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Timeline line (for multiple experiences) */}
              {/* {experiences.length > 1 && index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-orange-500 to-transparent opacity-30"></div>
              )} */}
              
              {/* Experience Card */}
              <div className="relative bg-gradient-to-r from-gray-800/80 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-600/30 hover:border-orange-500/50 transition-all duration-500 group-hover:shadow-orange-500/10 group-hover:shadow-2xl">
                
                {/* Company Logo & Badge */}
                <div className="absolute -left-3 top-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {exp.companyLogo}
                  </div>
                </div>

                <div className="ml-6">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-orange-300 transition-colors">
                          {exp.title}
                        </h3>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-300">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                          <span className="font-medium text-orange-400">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-sm pr-2">{exp.duration}</span>
                          <span className='text-sm px-3 py-1 rounded-full bg-orange-500/20 text-orange-300'>{exp.isRemote ? 'Remote' : 'Onsite'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-300 mb-8 leading-relaxed text-lg"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {exp.description}
                  </motion.p>

                  {/* Key Points & Technologies Grid */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Key Points */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-orange-400" />
                        Key Contributions
                      </h4>
                      <ul className="space-y-3">
                        {exp.keyPoints.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * pointIndex }}
                            viewport={{ once: true }}
                            className="flex items-start text-gray-300 group/item hover:text-white transition-colors"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                            <span className="leading-relaxed">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <div className="w-5 h-5 mr-2 text-orange-400">⚡</div>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.05 * techIndex }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.1, 
                              boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)" 
                            }}
                            className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-400/20 text-orange-300 rounded-xl text-sm font-medium border border-orange-500/30 hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-orange-400/30 hover:border-orange-400/50 transition-all cursor-default backdrop-blur-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;