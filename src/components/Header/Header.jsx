import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-gray-900 border-gray-700 px-4 lg:px-6 h-16 flex items-center">
        <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
          {/* Logo */}
          <Link to="/" className="h-full flex items-center">
            <img
              src={logo}
              className="h-28 sm:h-28 object-contain"
              alt="Logo"
            />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="inline-flex items-center p-2 text-sm text-gray-300 rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 transform transition-all duration-300 ${
                menuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
            </svg>
          </button>

          {/* Navigation Menu */}
          <div
            className={`lg:flex lg:w-auto lg:order-1 absolute lg:relative top-full left-0 w-full bg-gray-900 lg:bg-transparent transition-all duration-300 ${
              menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            } lg:opacity-100 lg:scale-100 lg:pointer-events-auto`}
            id="mobile-menu"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 font-medium lg:mt-0">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/projects", label: "Projects" },
                { path: "/contact", label: "Contact" },
              ].map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 px-4 border-b border-gray-700 lg:border-0 lg:p-0 duration-200 ${
                        isActive ? "text-orange-400" : "text-gray-300"
                      } hover:text-orange-300`
                    }
                    onClick={() => setMenuOpen(false)} // Close menu on link click
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
