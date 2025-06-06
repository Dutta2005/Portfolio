import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, X } from "lucide-react";
import {SiX} from "react-icons/si";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        message: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [formStatus, setFormStatus] = useState(null); // Track form status (success or error)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async () => {
        const json = JSON.stringify({
            ...formData,
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        });
    
        try {
            const res = await fetch(import.meta.env.VITE_WEB3FORMS_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });
    
            const response = await res.json();
    
            if (response.success) {
                setFormStatus({
                    type: "success",
                    message: "Form submitted successfully!",
                });
                setFormData({
                    name: "",
                    email: "",
                    tel: "",
                    message: "",
                });
                console.log("Form submitted successfully:", response);

            } else {
                setFormStatus({
                    type: "error",
                    message: "Failed to submit the form. Please try again.",
                });
                console.error("Form submission failed:", response);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setFormStatus({
                type: "error",
                message: "An error occurred. Please try again.",
            });
        }

        setTimeout(() => {
            setFormStatus(null);
        }, 5000);
    
        setShowModal(false);
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowModal(true); // Show confirmation modal
    };

    return (
        <div className="relative flex items-top justify-center min-h-screen bg-gray-900 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                    <motion.div
                            className="p-6 mr-2 bg-gray-800 sm:rounded-lg"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-300 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <motion.div
                                className="flex items-center mt-4 text-gray-300"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-orange-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 8918794465
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center mt-2 text-gray-300"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-orange-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    rdhack247@gmail.com
                                </div>
                            </motion.div>
                            <motion.div
                                className="flex items-center mt-2 text-gray-300"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.6 }}
                            >
                                <a href="https://github.com/Dutta2005" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-8 h-8 text-orange-500" />
                                </a>
                                <a href="https://www.linkedin.com/in/rajdutta062005/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-8 h-8 text-orange-500 ml-4" />
                                </a>
                                <a href="https://www.instagram.com/raj_rd_001/" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="w-8 h-8 text-orange-500 ml-4" />
                                </a>
                                <a href="https://x.com/RajDutta2005" target="_blank" rel="noopener noreferrer">
                                   <SiX className="w-8 h-8 text-orange-500 ml-4" /> 
                                </a>
                            </motion.div>

                        </motion.div>

                        <motion.form
                            onSubmit={handleSubmit}
                            className="p-6 flex flex-col justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white font-semibold focus:border-orange-500 focus:outline-none placeholder-gray-400"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white font-semibold focus:border-orange-500 focus:outline-none placeholder-gray-400"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    value={formData.tel}
                                    onChange={handleChange}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white font-semibold focus:border-orange-500 focus:outline-none placeholder-gray-400"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-700 border border-gray-600 text-white font-semibold focus:border-orange-500 focus:outline-none placeholder-gray-400"
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="md:w-32 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                Submit
                            </motion.button>
                        </motion.form>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-gray-800 rounded-lg p-6 shadow-lg w-96 border border-gray-700">
                        <h2 className="text-lg font-bold text-white">Confirm Submission</h2>
                        <p className="text-gray-300 mt-2">
                            Are you sure you want to submit this form?
                        </p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleFormSubmit}
                                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Form Submission Status */}
            {formStatus && (
    <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-16 left-1/2 transform -translate-x-1/2 w-72 p-3 rounded-lg shadow-lg bg-gray-700 flex flex-col items-start"
    >
        <div className="flex justify-between items-center w-full">
            <h3
                className={`text-sm font-semibold ${
                    formStatus.type === "success" ? "text-green-400" : "text-red-400"
                }`}
            >
                {formStatus.type === "success" ? "Success!" : "Error!"}
            </h3>
            <button
                onClick={() => setFormStatus(null)}
                className="text-gray-400 hover:text-gray-200 text-sm"
            >
                ✖
            </button>
        </div>
        <p className="mt-1 text-xs text-gray-300">{formStatus.message}</p>

        {/* Responsive Animated Progress Bar */}
        <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 4.5, ease: "linear" }}
            className={`h-1 mt-2 rounded-full ${
                formStatus.type === "success" ? "bg-green-400" : "bg-red-400"
            }`}
            style={{ width: "90%" }} // Slightly less width for mobile optimization
        />
    </motion.div>
)}

        </div>
    );
}