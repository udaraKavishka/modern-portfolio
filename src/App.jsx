import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar scrolled={scrolled} />
      
      <Routes>
        {/* Home Page Sections */}
        <Route
          path="/"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <section id="home"><Hero /></section>
              <section id="about" className="section-padding"><About /></section>
              <section id="projects" className="section-padding bg-white"><Projects /></section>
              <section id="contact" className="section-padding"><Contact /></section>
              <Footer />
            </motion.div>
          }
        />

        {/* Blog Pages */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-50">
        <button
          onClick={() => window.scrollTo(0, 0)} // Scroll to top on click
          className={`transition-all duration-500 ease-in-out 
          ${scrolled ? 'opacity-90 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-3'}
          bg-secondary-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl 
          hover:scale-110 hover:bg-secondary-700`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </Router>
  );
}

export default App;
