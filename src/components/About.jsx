import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const dataAnalysis = [
    'NumPy', 'Pandas', 'Python', 'Matplotlib', 'Power BI', 'Google Colab'
  ];

  const programmingLanguages = [
    'Java', 'JavaScript', 'Python', 'HTML5', 'C++', 'Shell Script','TypeScript', 'Php'
  ];

  const frontendTechnology = [
    'React.js', 'Next.js', 'Html', 'Tailwind CSS', 'ReactNative Mobile', 'Bootstrap', 'Material UI'
  ];

  const backendTechnology = [
    'Node.js', 'Express.js', 'Python', 'Java'
  ];

  const databases = [
    'MySQL', 'MongoDB','Firebase'
  ];

  const toolsAndTechnologies = [
    'Git','Github', 'NPM', 'Postman', 'VS Code', 'Jira', 'Huly','Trello','Jupyter Notebook'
  ];

  const designTools = [
    'Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop', 'Adobe Lightroom Classic', 'Canva', 'Figma', 'Axure RP','Adobe Premiere Pro', 'Adobe After Effects'
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
    },
    {
      degree: 'Certificate Course in Applied Information Technology',
      institution: 'Sri Lanka Telecom',
      year: '2018'
    }
  ];

  const clubsAndSocieties = [
    {
      name: 'Interact: Rotary Sponsored Club',
      role: 'Member',
      description: 'Participating in community service projects and events during the School years.'
    },
    {
      name: 'General Knowledge Club of St Josephs College',
      role: 'Board Member',
      description: 'Contributing to organizing and hosting general knowledge competitions and events.'
    },
    {
      name: 'Commerce Union of St Josephs College',
      role: 'Member',
      description: 'Participating in business-related activities and initiatives to foster commerce education.'
    },
    {
      name: 'ZeroPlastic Movement of University of Vavuniya',
      role: 'Member',
      description: 'Promoting sustainability and environmental awareness by reducing plastic waste on campus.'
    },
    {
      name: 'IEEE Student Branch of University of Vavuniya',
      role: 'Member',
      description: 'Engaging in tech-related activities, workshops, and events organized by IEEE for students.'
    },
    {
      name: 'ITCS | Information Technology & Computing Society',
      role: 'Member',
      description: 'Participating in tech events, hackathons, and projects aimed at improving IT skills and knowledge.'
    },
    {
      name: 'Sri Lanka University Catholic Students Movement (SLUCSM)',
      role: 'Committee Member',
      description: 'Involved in organizing faith-based activities and providing a supportive community for Catholic students.'
    },
    {
      name: 'AIESEC in University of Vavuniya',
      role: 'Committee Member',
      description: 'Contributing to leadership development programs and international exchange opportunities for students.'
    },
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
    'Member of the university Basketball sports team',
    'Photography and content creation',
    'Designing posts and other creative materials',
    'Participating in hackathons and coding competitions',

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

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-secondary-900">Who I Am</h3>
        <p className="text-secondary-700 mb-6">
          I'm Udara Kavishka Nalawansa, a dedicated student currently pursuing a Bachelor of Science in Information Technology at the University of Jaffna. Previously, I studied at St. Joseph's College, Colombo 10, where I built a strong academic foundation and a passion for continuous learning.
        </p>
        <p className="text-secondary-700 mb-6">
          My focus lies in data analytics and data science, where I'm expanding my skills in database management, programming, and statistical analysis.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-secondary-900">My Skills Based on Proficiency</h3>
        {/* Skills Sections */}
        {[
          { title: 'Data Analytics & Visualization', skills: dataAnalysis },
          { title: 'Programming Languages', skills: programmingLanguages },
          { title: 'Frontend Technologies', skills: frontendTechnology },
          { title: 'Backend Technologies', skills: backendTechnology },
          { title: 'Databases', skills: databases },
          { title: 'Tools & Technologies', skills: toolsAndTechnologies },
          { title: 'Design Tools', skills: designTools }
        ].map((section, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-semibold text-secondary-800 mb-2">{section.title}</h4>
            <div className="flex flex-wrap gap-2">
              {section.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

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
            <div
              key={index}
              className="bg-primary-50 p-4 rounded-lg shadow-md"
            >
              <span className="font-semibold text-secondary-900 block">{edu.degree}</span>
              <span className="text-secondary-700 block">{edu.institution}</span>
              <span className="text-secondary-500">{edu.year}</span>
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
            <div
              key={index}
              className="bg-primary-50 p-4 rounded-lg shadow-md"
            >
              <span className="font-semibold text-secondary-900 block">{club.name}</span>
              <span className="text-secondary-700 block">{club.role}</span>
              <span className="text-secondary-500">{club.description}</span>
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