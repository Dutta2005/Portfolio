
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const AnimatedProjectsSection = () => {
  const projects = [
        {
            title: "Jeevan Verse",
            description: "A MERN stack web app where users can find symptoms, request blood, join discussions, and support health campaigns—all in one place.",
            imageUrl: "https://images.pexels.com/photos/32957343/pexels-photo-32957343.jpeg",
            projectLink: "https://github.com/Dutta2005/Jeevan-verse",
            liveLink: "https://jeevan-verse.vercel.app/",
        },
        {
            title: "Stremify",
            description: "A MERN stack web app enabling real-time chat, video calls, and cultural exchange with native speakers worldwide—built for seamless global communication.",
            imageUrl: "https://images.pexels.com/photos/32957313/pexels-photo-32957313.jpeg",
            projectLink: "https://github.com/Dutta2005/stremify",
            liveLink: "https://stremify-tau.vercel.app",
        },
        {
            title: "ReadmeEasy",
            description: "A web application using Nextjs and OPENAI API that generate comprehensive README.md files in seconds",
            techStack: ["Next.js", "Shadcn UI", "OpenAI API"],
            imageUrl: "https://images.pexels.com/photos/33381355/pexels-photo-33381355.jpeg",
            projectLink: "https://github.com/Dutta2005/ReadmeEasy",
            liveLink: "https://readme-easy.vercel.app",
        },
        {
            title: "Droply",
            description: "A Next.js app which a simple and secure cloud app to store, view, and manage your image files",
            imageUrl: "https://images.pexels.com/photos/32957326/pexels-photo-32957326.jpeg",
            projectLink: "https://github.com/Dutta2005/Droply",
            liveLink: "https://droply-ten.vercel.app/",
        },
        {
          title: "PixelFlow",
          description: "A Next.js app to compress videos losslessly and resize images for social media, using Clerk, Cloudinary, Prisma, and NeonDB.",
          imageUrl: "https://images.pexels.com/photos/32957365/pexels-photo-32957365.jpeg",
          projectLink: "https://github.com/Dutta2005/PixelFlow",
          liveLink: "https://www.aicloudinary.xyz/",
        },
        {
            title: "Code Editor",
            description: "A web application using ReactJS and Monaco Editor and chakra-ui that allows users to write and edit code in real-time.",
            imageUrl: "https://images.pexels.com/photos/32957366/pexels-photo-32957366.jpeg",
            projectLink: "https://github.com/Dutta2005/Code-Editor/",
            liveLink: "https://code-editor-mauve-iota.vercel.app/",
        },
    ];

 
  const allProjects = [...projects, ...projects];
  
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId;
    let scrollPosition = 0;
    const speed = 0.5; 
    
    const scroll = () => {
      if (isHovered) {
        animationId = requestAnimationFrame(scroll);
        return;
      }
      
      scrollPosition += speed;
  
      if (scrollPosition >= scrollContainer.children[0].offsetWidth * projects.length) {
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered, projects.length]);
  
  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-white mb-3">Featured Projects</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Check out some of my recent work and personal projects.</p>
        </motion.div>
      </div>
      
      <div 
        className="overflow-hidden py-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          ref={scrollRef} 
          className="flex gap-6 transition-transform"
          style={{ width: "max-content" }}
        >
          {allProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a 
          href="https://github.com/Dutta2005" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          <Github size={18} />
          <span>View More on GitHub</span>
        </a>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg w-80 h-60 group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
    >
      {/* Image and title */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        
        {/* Title that shows by default */}
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white transition-opacity duration-300 group-hover:opacity-0">
          {project.title}
        </h3>
      </div>
      
 
      <motion.div 
        className="absolute inset-0 bg-black/80 p-6 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-auto">{project.description}</p>
        
        <div className="flex justify-between mt-4">
          <motion.a 
            href={project.projectLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            <span>Source</span>
          </motion.a>
          
          <motion.a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedProjectsSection;