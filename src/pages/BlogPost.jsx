import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

const BlogPost = () => {
    const { slug } = useParams();

    // This would typically come from your backend/CMS
    const post = {
        slug: 'getting-started-with-react',
        title: 'Getting Started with React: A Beginners Guide',
        coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        date: '2023-10-15',
        readTime: '5 min read',
        content: `
      <h2>Introduction to React</h2>
      <p>React is a JavaScript library for building user interfaces. It was developed by Facebook and has become one of the most popular front-end libraries in the world.</p>
      
      <h3>Why React?</h3>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
      
      <h3>Getting Started</h3>
      <p>To start with React, you'll need to have Node.js installed on your computer. Once you have Node.js, you can create a new React project using Create React App:</p>
      
      <pre><code>npx create-react-app my-app
cd my-app
npm start</code></pre>
      
      <h3>Components</h3>
      <p>Components are the building blocks of any React application. A component is a self-contained module that renders some output. We can write interface elements like a button or an input field as a React component.</p>
      
      <h3>Conclusion</h3>
      <p>React is a powerful library that can help you build better web applications. With its component-based architecture and virtual DOM, it provides an efficient way to build user interfaces.</p>
    `
    };

    return (
        <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-16"
        >
            <div className="relative h-96 bg-secondary-900">
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                        <div className="flex items-center justify-center space-x-4">
                            
                            <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                            
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto prose prose-lg">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        </motion.article>
    );
};

export default BlogPost;