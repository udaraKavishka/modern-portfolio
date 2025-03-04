import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 
    'Tailwind CSS', 'UI/UX Design', 'Responsive Design',
    'Git', 'Figma'
  ];

  return (
    <div className="container mx-auto px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-secondary-900">About Me</h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <div className="relative">
            <div className="w-full h-80 md:h-96 bg-secondary-200 rounded-lg relative overflow-hidden">
              {/* Replace with your actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-secondary-600 text-xl">
                About Me Image
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-8 border-primary-500 rounded-lg z-0"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-1/2"
        >
          <h3 className="text-2xl font-bold mb-4 text-secondary-900">Who I Am</h3>
          <p className="text-secondary-700 mb-6">
            I'm a passionate web developer with a strong focus on creating intuitive and engaging user experiences. With over 5 years of experience in the field, I've worked on a variety of projects ranging from small business websites to complex web applications.
          </p>
          <p className="text-secondary-700 mb-6">
            My approach combines technical expertise with creative problem-solving to deliver solutions that not only look great but also perform exceptionally well. I believe in clean, efficient code and staying up-to-date with the latest industry trends and technologies.
          </p>
          
          <h3 className="text-2xl font-bold mb-4 text-secondary-900">My Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;