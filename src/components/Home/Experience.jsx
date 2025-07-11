import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Rocket, 
  Code, 
  Globe,
  Star,
  Zap,
  Building
} from 'lucide-react';


const Experience = () => {
  const [mounted, setMounted] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);
  
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "Neuxa Global",
      duration: "May 2025 - Present",
      type: "Internship",
      description: "Embarking on a stellar journey in full-stack development, crafting responsive web applications using modern technologies. Building scalable RESTful APIs and integrating cutting-edge databases to push the boundaries of user experience.",
      technologies: ["Next.js", "Node.js", "Supabase", "Prisma", "TypeScript"],
      icon: <Building className="w-6 h-6 text-white" />,
      isRemote: true,
      orbital: <Globe className="w-12 h-12 text-orange-400" />
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "NeuroNexus Innovations",
      duration: "April 2025 - May 2025",
      type: "Internship",
      description: "Navigating through the cosmos of MERN stack development, creating dynamic user interfaces and seamless backend integrations. Contributing to innovative projects that connect users across the digital galaxy.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      icon: <Code className="w-6 h-6 text-white" />,
      isRemote: true,
      orbital: <Rocket className="w-12 h-12 text-orange-400" />
    }
  ];

  useEffect(() => {
    setMounted(true);
    
    // Generate floating space elements
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 18 + 12,
      x: Math.random() * 100,
      y: Math.random() * 70 + 15,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 2,
      icon: ['rocket', 'star', 'zap'][Math.floor(Math.random() * 3)]
    }));
    
    setFloatingElements(elements);
  }, []);

  if (!mounted) return null;

  const renderFloatingIcon = (icon) => {
    const iconProps = { 
      className: "w-full h-full text-orange-400 opacity-20", 
      style: { filter: "drop-shadow(0 0 6px #f97316)" }
    };
    
    switch (icon) {
      case 'rocket':
        return <Rocket {...iconProps} />;
      case 'star':
        return <Star {...iconProps} />;
      case 'zap':
        return <Zap {...iconProps} />;
      default:
        return <Star {...iconProps} />;
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-20 px-4 md:px-12 bg-gray-900">
      {/* Floating space elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute z-10"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.25, 0],
            scale: [0.3, 1, 0.3],
            rotate: [0, 180, 360],
            x: [0, Math.random() * 80 - 40],
            y: [0, Math.random() * 80 - 40],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          {renderFloatingIcon(element.icon)}
        </motion.div>
      ))}

      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 text-orange-500" />
              Experience
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Crafting digital experiences across the development universe. 
            Here's my professional journey through code and innovation.
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mt-6"></div>
        </motion.div>

        {/* Work Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 bg-gradient-to-b from-orange-500/40 via-orange-400/30 to-orange-500/40" />

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-30 border-4 border-gray-900 bg-gradient-to-r from-orange-500 to-orange-400 shadow-lg shadow-orange-500/50" />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  className="p-8 rounded-2xl backdrop-blur-md border bg-gradient-to-r from-gray-800/90 to-gray-700/60 border-gray-600/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-orange-500/50"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.25)"
                  }}
                >
                  {/* Company Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xl font-semibold text-orange-400 mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <div className="p-3 rounded-full bg-orange-900/30 border border-orange-500/20">
                      {exp.icon}
                    </div>
                  </div>

                  {/* Duration and Location */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-400" />
                      <span className="text-sm text-gray-300">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span className="text-sm text-gray-300">
                        {exp.isRemote ? 'Remote' : 'Onsite'}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                        {exp.isRemote ? 'Remote' : 'Onsite'}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-relaxed mb-6 text-gray-300">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-orange-400/20 text-orange-300 rounded-lg text-sm font-medium border border-orange-500/30 hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-orange-400/30 transition-all cursor-default"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)" 
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Orbital Decoration */}
              <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <motion.div
                  className="relative w-32 h-32 mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="absolute inset-0 rounded-full border-2 border-dashed opacity-30 border-orange-400" />
                  <motion.div
                    className="absolute top-0 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-orange-400 shadow-lg shadow-orange-500/50"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {exp.orbital}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300">
            Ready to build something amazing together? 
            <span className="font-semibold text-orange-400 ml-2">
              Let's create the next big thing! 🚀
            </span>
          </p>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-5 z-0 from-orange-900 via-transparent to-red-900" />
    </section>
  );
};

export default Experience;