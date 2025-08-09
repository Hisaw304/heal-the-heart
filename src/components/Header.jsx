import React, { useState } from "react";
import { Link } from "react-router-dom";
import heartIcon from "../assets/yellow-heart.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Our Founder", path: "/ourfounder" },
  { name: "Projects", path: "/projects" },
  { name: "Donate", path: "/donate" },
  { name: "Crypto", path: "/crypto" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black shadow-lg shadow-yellow-500/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo & Text */}
        <Link to="/" className="flex items-center">
          <p className="text-white text-lg md:text-xl font-serif font-semibold me-3">
            <span className="text-yellow-400 text-3xl font-extrabold">H</span>
            eal the Heart Foundation
          </p>
          <img
            src={heartIcon}
            alt="Heal the Heart Logo"
            className="h-10 w-auto animate-pulse hover:animate-ping transition duration-500"
          />
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white hover:text-yellow-400 transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="block h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Nav with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black px-4 pb-4 space-y-2 border-t border-gray-700 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-yellow-400 transition duration-200"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
