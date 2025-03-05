import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="section-padding">
          <About />
        </section>

        <section id="projects" className="section-padding bg-white">
          <Projects />
        </section>

        <section id="contact" className="section-padding">
          <Contact />
        </section>

        <Footer />
      </motion.div>

      <div className="fixed bottom-4 right-2">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className={`fixed bottom-4 right-2 md:bottom-10 md:right-10 z-50 
    transition-all duration-500 ease-in-out 
    ${scrolled ? 'opacity-90 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-3'}
    bg-secondary-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl 
    hover:scale-110 hover:bg-secondary-700`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </ScrollLink>


      </div>
    </div>
  );
}

export default App;
