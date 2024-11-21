import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Text Summarizer",
            description: "A web application using HTML, CSS, and JavaScript with ChatGPT-4 API which summarizes text.",
            imageUrl: "https://images.pexels.com/photos/29448394/pexels-photo-29448394/free-photo-of-close-up-of-an-open-book-with-text.jpeg?auto=compress&cs=tinysrgb&w=600",
            projectLink: "https://github.com/Dutta2005/text-summarizer",
        },
        {
            title: "Ninja Quiz",
            description: "A quiz game built with HTML, CSS, and JavaScript.",
            imageUrl: "https://images.pexels.com/photos/28311384/pexels-photo-28311384/free-photo-of-scrabble-board-with-letters-and-numbers-on-it.jpeg?auto=compress&cs=tinysrgb&w=600",
            projectLink: "https://github.com/Dutta2005/ninja-quiz",
        },
        {
            title: "Note App",
            description: "A web application using HTML, CSS, and JavaScript that allows users to create and manage notes.",
            imageUrl: "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=600",
            projectLink: "https://github.com/Dutta2005/noteApp",
        },
        {
            title: "Selection Sort Visualization",
            description: "A C++ program that visualizes the selection sort algorithm.",
            imageUrl: "https://images.pexels.com/photos/7947750/pexels-photo-7947750.jpeg?auto=compress&cs=tinysrgb&w=600",
            projectLink: "https://github.com/Dutta2005/Selection-Sort-Visualisation",
        },
        {
            title: "Weather App",
            description: "A web application using HTML, CSS, and JavaScript that allows users to search for weather information of any city.",
            imageUrl: "https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=600",
            projectLink: "https://github.com/Dutta2005/WeatherApp",
        },
    ];

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="text-center">
                    <motion.h2
                        className="text-4xl font-bold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        My Projects
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-lg text-gray-900 md:text-2xl"
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
                            <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-40 transition duration-500 rounded-lg blur-lg"></div>

                            {/* Card */}
                            <motion.div
                                className="relative bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-500"
                                whileHover={{
                                    scale: 1.05,
                                    y: -8,
                                    transition: { duration: 0.1, ease: "easeInOut" },
                                }}
                            >
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                    <p className="mt-2 text-gray-700">{project.description}</p>
                                    <a
                                        href={project.projectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-block bg-orange-700 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
