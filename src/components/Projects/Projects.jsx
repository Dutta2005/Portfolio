import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Jeevan Verse",
            description: "A MERN stack web app where users can find symptoms, request blood, join discussions, and support health campaigns—all in one place.",
            techStack: ["MERN", "Tailwind CSS", "Socket.io", "Nodemailer"],
            imageUrl: "https://images.pexels.com/photos/31142323/pexels-photo-31142323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            projectLink: "https://github.com/Dutta2005/Jeevan-verse",
            liveLink: "https://jeevan-verse.vercel.app/",
        },
        {
            title: "Stremify",
            description: "A MERN stack web app enabling real-time chat, video calls, and cultural exchange with native speakers worldwide—built for seamless global communication.",
            techStack: ["MERN", "Tailwind CSS" ,"Tanstack-react-query","Stream"],
            imageUrl: "https://images.pexels.com/photos/32519561/pexels-photo-32519561.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            projectLink: "https://github.com/Dutta2005/stremify",
            liveLink: "https://stremify-tau.vercel.app",
        },
        {
            title: "PixelFlow",
            description: "A Next.js app to compress videos losslessly and resize images for social media, using Clerk, Cloudinary, Prisma, and NeonDB.",
            techStack: ["Next.js", "Clerk", "Cloudinary", "Prisma", "NeonDB"],
            imageUrl: "https://images.pexels.com/photos/32080007/pexels-photo-32080007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            projectLink: "https://github.com/Dutta2005/PixelFlow",
            liveLink: "https://www.aicloudinary.xyz/",
        },
        {
            title: "Medi-Track",
            description: "A React Native & Appwrite app for tracking health inventory, usage, and reminders with low stock & expiry alerts.",
            techStack: ["React Native", "Appwrite", "JavaScript", "Mobile"],
            imageUrl: "https://images.pexels.com/photos/31143682/pexels-photo-31143682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            projectLink: "https://github.com/Dutta2005/Medi-Track",
            liveLink: "https://github.com/Dutta2005/Medi-Track",
        },
        {
            title: "Code Editor",
            description: "A web application using ReactJS and Monaco Editor and chakra-ui that allows users to write and edit code in real-time.",
            techStack: ["React", "Tailwind CSS", "Monaco Editor", "Chakra UI"],
            imageUrl: "https://images.pexels.com/photos/6804613/pexels-photo-6804613.jpeg?auto=compress&cs=tinysrgb&w=600",
            projectLink: "https://github.com/Dutta2005/Code-Editor/",
            liveLink: "https://code-editor-mauve-iota.vercel.app/",
        },
        {
            title: "Sorting Visualizer",
            description: "A web application using ReactJS and sorting algorithms that visualizes the selection sort algorithm.",
            techStack: ["React", "JavaScript", "Tailwind CSS", "Algorithms"],
            imageUrl: "https://images.pexels.com/photos/7947750/pexels-photo-7947750.jpeg?auto=compress&cs=tinysrgb&w=600",
            projectLink: "https://github.com/Dutta2005/sorting-visualizer",
            liveLink: "https://sorting-visualizer-rho-seven.vercel.app",
        },
        {
            title: "Note App",
            description: "A web application using HTML, CSS, and JavaScript that allows users to create and manage notes.",
            techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
            imageUrl: "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=600",
            projectLink: "https://github.com/Dutta2005/noteApp",
            liveLink: "https://note-app-pi-pink.vercel.app", 
        },
        {
            title: "Weather App",
            description: "A web application using React and JavaScript with openweathermap API that allows users to search for weather information of any city.",
            techStack: ["React", "JavaScript", "API", "Tailwind CSS"],
            imageUrl: "https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=600",
            projectLink: "https://github.com/Dutta2005/weather",
            liveLink: "https://weather-tan-nu.vercel.app",
        }
    ];

    return (
        <div className="py-16 min-h-screen bg-gray-900">
            <div className="container mx-auto px-6 text-gray-300 md:px-12 xl:px-6">
                <div className="text-center">
                    <motion.h2
                        className="text-4xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        My Projects
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-lg text-gray-300 md:text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                    >
                        Here are some of the projects I have worked on.
                    </motion.p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 + index * 0.2, ease: "easeInOut" }}
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-40 transition duration-500 rounded-lg blur-lg"></div>

                            {/* Card */}
                            <motion.div
                                className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-500 border border-gray-700"
                                whileHover={{
                                    scale: 1.05,
                                    y: -8,
                                    transition: { duration: 0.1, ease: "easeInOut" },
                                }}
                            >
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                    
                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, techIndex) => (
                                            <motion.span
                                                key={techIndex}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ 
                                                    duration: 0.3, 
                                                    delay: 0.5 + index * 0.1 + techIndex * 0.05 
                                                }}
                                                whileHover={{ scale: 1.1 }}
                                                className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded-md text-xs font-medium border border-orange-500/30 hover:bg-orange-500/30 transition-colors cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                    
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    
                                    <div className="flex justify-between pt-2">
                                        <motion.a 
                                            href={project.projectLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Github size={16} />
                                            <span>Source Code</span>
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
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}