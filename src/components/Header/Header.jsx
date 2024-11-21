import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="https://st4.depositphotos.com/22052918/29741/v/450/depositphotos_297416846-stock-illustration-letter-rd-simple-geometric-line.jpg" alt="Logo" className="mr-3 h-16 sm:h-16" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
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
            className={`${
              menuOpen ? 'block' : 'hidden'
            } lg:flex lg:w-auto lg:order-1 w-full`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:bg-transparent">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/projects', label: 'Projects' },
                { path: '/contact', label: 'Contact' },
              ].map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 lg:p-0 duration-200 ${
                        isActive ? 'text-orange-700' : 'text-gray-900'
                      } hover:text-orange-700`
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
