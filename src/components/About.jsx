import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programmingLanguages = [
    'C++', 'Java', 'JavaScript', 'Python', 'PHP', 'Shell Script', 'HTML5', 'CSS3'
  ];

  const frameworksAndLibraries = [
    'React', 'Node.js', 'Express.js', 'Tailwind CSS', 'NumPy', 'Pandas', 'Matplotlib', 'Plotly'
  ];

  const databases = [
    'MySQL', 'MongoDB', 'Oracle'
  ];

  const toolsAndTechnologies = [
    'Git', 'NPM', 'Postman', 'Power Bi', 'JWT', 'Nodemon', 'Apache'
  ];

  const designTools = [
    'Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop', 'Adobe Lightroom Classic', 'Canva'
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'University of Jaffna',
      year: 'Ongoing'
    },
    {
      degree: 'Advanced Level in Information Technology',
      institution: 'St. Joseph\'s College, Colombo 10',
      year: '2019'
    }
  ];

  const clubsAndSocieties = [
    {
      name: 'Christian Society',
      role: 'President',
      description: 'Leading and coordinating activities and events for the society at the University of Vavuniya.'
    },
    {
      name: 'Gavel Club',
      role: 'Member',
      description: 'Engaging in public speaking and leadership training sessions.'
    }
  ];

  const extracurricularActivities = [
    'Volunteer at local community events',
    'Member of the university sports team',
    'Photography and content creation'
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

      <div className="flex flex-col items-center md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <h3 className="text-2xl font-bold mb-4 text-secondary-900">Who I Am</h3>
          <p className="text-secondary-700 mb-6">
            I'm Udara Kavishka Nalawansa, a dedicated student currently pursuing a Bachelor of Science in Information Technology at the University of Jaffna. Previously, I studied at St. Joseph's College, Colombo 10, where I built a strong academic foundation and a passion for continuous learning.
          </p>
          <p className="text-secondary-700 mb-6">
            My focus lies in data analytics and data science, where I'm expanding my skills in database management, programming, and statistical analysis.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-secondary-900">My Skills</h3>
          {/* Programming Languages */}
          <h4 className="text-xl font-semibold text-secondary-800 mb-2">Programming Languages</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {programmingLanguages.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

          {/* Frameworks & Libraries */}
          <h4 className="text-xl font-semibold text-secondary-800 mb-2">Frameworks & Libraries</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {frameworksAndLibraries.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

          {/* Databases */}
          <h4 className="text-xl font-semibold text-secondary-800 mb-2">Databases</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {databases.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

          {/* Tools & Technologies */}
          <h4 className="text-xl font-semibold text-secondary-800 mb-2">Tools & Technologies</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {toolsAndTechnologies.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

          {/* Design Tools */}
          <h4 className="text-xl font-semibold text-secondary-800 mb-2">Design Tools</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {designTools.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-4 items-center md:w-1/2"
        >
          <div className="w-full md:w-80 h-80 bg-secondary-200 rounded-lg overflow-hidden">
            <img src="/src/assets/profile.jpg" alt="Your Image" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-80 h-80 bg-secondary-200 rounded-lg overflow-hidden">
            <img src="/src/assets/anotherImage.jpg" alt="Another Image" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold mb-4 text-secondary-900">Education</h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-start bg-primary-50 p-4 rounded-lg shadow-md">
              <div className="flex flex-col">
                <span className="font-semibold text-secondary-900">{edu.degree}</span>
                <span className="text-secondary-700">{edu.institution}</span>
                <span className="text-secondary-500">{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Clubs and Societies Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold mb-4 text-secondary-900">Clubs and Societies</h3>
        <div className="space-y-4">
          {clubsAndSocieties.map((club, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-start bg-primary-50 p-4 rounded-lg shadow-md">
              <div className="flex flex-col">
                <span className="font-semibold text-secondary-900">{club.name}</span>
                <span className="text-secondary-700">{club.role}</span>
                <span className="text-secondary-500">{club.description}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Extracurricular Activities Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold mb-4 text-secondary-900">Extracurricular Activities</h3>
        <ul className="list-disc pl-6 space-y-2 text-secondary-700">
          {extracurricularActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
