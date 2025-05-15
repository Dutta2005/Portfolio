import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  const navbarStyle = scrolled 
    ? "bg-gray-900/70 backdrop-blur-md border-b border-white/10"
    : "bg-gray-900";
  
  const mobileMenuStyle = scrolled
    ? "bg-gray-900/70 backdrop-blur-md border-b border-white/10"
    : "bg-gray-900";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    setMounted(true);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: index => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        delay: 0.1 + index * 0.1 
      }
    })
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const navItems = [
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/projects", label: "Projects" },
                { path: "/contact", label: "Contact" },
              ]

  return (
    <header className="sticky z-50 top-0">
      <motion.nav 
        className={`${navbarStyle} px-4 lg:px-6 h-16 flex items-center`}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              duration: 0.5,
              staggerChildren: 0.1
            }
          }
        }}
      >
        <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
          >
            <Link to="/" className="h-full flex items-center">
              <img
                src={logo}
                className="h-28 sm:h-28 object-contain"
                alt="Logo"
              />
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            className="inline-flex items-center p-2 text-sm text-gray-300 rounded-lg lg:hidden hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Open main menu</span>
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:block lg:w-auto">
            <ul className="flex flex-row lg:space-x-8 font-medium">
              {navItems.map(({ path, label }, index) => (
                <motion.li 
                  key={path}
                  custom={index}
                  variants={navItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 px-4 lg:border-0 lg:p-0 duration-200 ${
                        isActive ? "text-orange-400" : "text-gray-300"
                      } hover:text-orange-300`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className={`lg:hidden absolute top-full left-0 w-full ${mobileMenuStyle}`}
                id="mobile-menu"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
              >
                <ul className="flex flex-col font-medium p-4">
                  {navItems.map(({ path, label }, index) => (
                    <motion.li 
                      key={path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: 0.1 * index }
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          `block py-2 px-4 border-b border-gray-700/30 duration-200 ${
                            isActive ? "text-orange-400" : "text-gray-300"
                          } hover:text-orange-300`
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
}

export default Header;