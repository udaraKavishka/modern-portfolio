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

      <div className="fixed bottom-8 right-8">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className={`${
            scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } bg-primary-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </ScrollLink>
      </div>
    </div>
  );
}

export default App;
