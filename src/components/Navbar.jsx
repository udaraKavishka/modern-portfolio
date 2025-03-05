import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importing framer motion

const Navbar = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  // Check if the user is on a Blog Page
  const isBlogPage = location.pathname.startsWith('/blog');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <h1 className="text-2xl font-bold text-primary-600">Portfolio</h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {/* Always Show Home */}
          {isBlogPage ? (
            <Link to="/" className="nav-link">Home</Link>
          ) : (
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className={`nav-link cursor-pointer ${activeLink === 'home' ? 'text-primary-600' : 'text-gray-600'}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </ScrollLink>
          )}

          {/* Show Other Links Only on Home Page */}
          {!isBlogPage && (
            <>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className={`nav-link cursor-pointer ${activeLink === 'about' ? 'text-primary-600' : 'text-gray-600'}`}
                onClick={() => handleLinkClick('about')}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className={`nav-link cursor-pointer ${activeLink === 'projects' ? 'text-primary-600' : 'text-gray-600'}`}
                onClick={() => handleLinkClick('projects')}
              >
                Projects
              </ScrollLink>
            </>
          )}

          {/* Always Show Blog Link */}
          <Link
            to="/blog"
            className={`nav-link ${activeLink === 'blog' ? 'text-primary-600' : 'text-gray-600'}`}
            onClick={() => handleLinkClick('blog')}
          >
            Blog
          </Link>

          {/* Show Contact Only on Home Page */}
          {!isBlogPage && (
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className={`nav-link cursor-pointer ${activeLink === 'contact' ? 'text-primary-600' : 'text-gray-600'}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </ScrollLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-secondary-800 focus:outline-none">
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

      {/* Mobile Menu Items */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white py-4`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Always Show Home */}
        {isBlogPage ? (
          <Link
            to="/"
            className={`block px-4 py-2 ${activeLink === 'home' ? 'text-primary-600' : 'text-gray-600'}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
        ) : (
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className={`block px-4 py-2 ${activeLink === 'home' ? 'text-primary-600' : 'text-gray-600'}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </ScrollLink>
        )}

        {/* Show Other Links Only on Home Page */}
        {!isBlogPage && (
          <>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className={`block px-4 py-2 ${activeLink === 'about' ? 'text-primary-600' : 'text-gray-600'}`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className={`block px-4 py-2 ${activeLink === 'projects' ? 'text-primary-600' : 'text-gray-600'}`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </ScrollLink>
          </>
        )}

        {/* Always Show Blog Link */}
        <Link
          to="/blog"
          className={`block px-4 py-2 ${activeLink === 'blog' ? 'text-primary-600' : 'text-gray-600'}`}
          onClick={() => handleLinkClick('blog')}
        >
          Blog
        </Link>

        {/* Show Contact Only on Home Page */}
        {!isBlogPage && (
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={`block px-4 py-2 ${activeLink === 'contact' ? 'text-primary-600' : 'text-gray-600'}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </ScrollLink>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
