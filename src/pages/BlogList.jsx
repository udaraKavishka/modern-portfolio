import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

const BlogList = () => {
    // This would typically come from your backend/CMS
    const blogPosts = [
        {
            id: 1,
            slug: 'getting-started-with-react',
            title: 'Getting Started with React: A Beginners Guide',
            excerpt: 'Learn the fundamentals of React and start building modern web applications.',
            coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            date: '2023-10-15',
            readTime: '5 min read'
        },
        {
            id: 2,
            slug: 'mastering-css-grid',
            title: 'Mastering CSS Grid: Modern Layout Techniques',
            excerpt: 'Deep dive into CSS Grid and learn how to create complex layouts with ease.',
            coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            date: '2023-10-10',
            readTime: '7 min read'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900">Blog</h1>
                <p className="text-secondary-600 max-w-2xl mx-auto">
                    Thoughts, tutorials, and insights about web development and design.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <Link to={`/blog/${post.slug}`} className="block">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-secondary-500 mb-2">
                                    <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className="text-xl font-bold text-secondary-900 mb-2 hover:text-primary-600 transition-colors duration-300">
                                    {post.title}
                                </h2>
                                <p className="text-secondary-600">
                                    {post.excerpt}
                                </p>
                                <div className="mt-4 flex items-center text-primary-600 font-medium">
                                    Read more
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </motion.article>
                ))}
            </div>
        </div>
    );
};

export default BlogList;