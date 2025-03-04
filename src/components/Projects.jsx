import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Efficient Campus Navigation',
      description: 'A Smarter Way to Find Your Path at University of Vavuniya',
      tags: ['Python', 'Tkinter', 'PIL (Pillow)', 'ImageTk','Machine Learning','heapq','pandas','numpy'],
      image: '/public/assets/Projects/p01.jpg',
      link: 'https://github.com/DilmyPerera/Efficient-Campus-Navigation',
    },
    {
      id: 2,
      title: 'Taskflow Task Management System',
      description: 'askflow is an efficient and user-friendly task management system designed to help individuals and teams organize, track, and manage their tasks seamlessly.',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Redux', 'Material UI', 'JWT',],
      image: '/public/assets/Projects/p02.png',
      link: 'https://github.com/udaraKavishka/IT22242024taskflow',
    },
    {
      id: 3,
      title: 'Titanic Survival Prediction',
      description: 'Predicting Titanic passengers survival using Logistic Regression, covering data collection, preparation, visualization, model training, and evaluation.',
      tags: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'Jupyter Notebook'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: 'https://github.com/udaraKavishka/titanic-survival-prediction',
    },
    {
      id: 4,
      title: 'Movie Rating Prediction',
      description: 'Movie Rating Prediction model using Python, leveraging libraries like Pandas, NumPy, and Scikit-learn to process data, train models, and predict user ratings based on movie and user features.',
      tags: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'Jupyter Notebook'],
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      link: ' https://github.com/udaraKavishka/movie_rating_prediction',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container mx-auto px-4" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-secondary-900">My Projects</h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        <p className="text-secondary-600 mt-4 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project represents a unique challenge and solution.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="project-card"
          >
            <div className="h-60 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-secondary-900">{project.title}</h3>
              <p className="text-secondary-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300 inline-flex items-center"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;