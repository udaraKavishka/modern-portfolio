import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary-400 mb-2">Portfolio</h2>
            <p className="text-secondary-400 max-w-md">
              Showcasing my passion for technology, innovation, and problem-solving through impactful projects.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {[
                { href: 'https://web.facebook.com/udara.nalawansa/', icon: 'facebook' },
                { href: 'https://www.linkedin.com/in/udaranalawansa/', icon: 'linkedin' },
                { href: 'https://github.com/udaraKavishka', icon: 'github' },
                { href: 'https://instagram.com/_udara27', icon: 'instagram' }
              ].map(({ href, icon }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <i className={`fab fa-${icon} text-xl`}></i>
                </a>
              ))}
            </div>

            <div className="flex space-x-6 mb-4">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              ))}
            </div>

            <p className="text-secondary-500">&copy; {currentYear} Udara Nalawansa. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
