import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current page is a blog page
  const isBlogPage = location.pathname.startsWith('/blog');

  // Navbar links configuration
  const navLinks = isBlogPage
    ? [
        { name: 'Home', to: 'home', route: '/' },
        { name: 'Blog', to: '/blog', route: '/blog' },
      ]
    : [
        { name: 'Home', to: 'home', route: '/' },
        { name: 'About', to: 'about', route: '/about' },
        { name: 'Projects', to: 'projects', route: '/projects' },
        { name: 'Contact', to: 'contact', route: '/contact' },
        { name: 'Blog', to: '/blog', route: '/blog' },
      ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="cursor-pointer">
          <h1 className="text-2xl font-bold text-primary-600">Portfolio</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) =>
            link.route.startsWith('/') ? (
              <Link
                key={link.name}
                to={link.route}
                className="nav-link cursor-pointer"
              >
                {link.name}
              </Link>
            ) : (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            )
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-secondary-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
