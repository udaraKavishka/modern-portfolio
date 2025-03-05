import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import postsData from '../data/posts.json';

const BlogList = () => {
    const { posts } = postsData;

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
                {posts.map((post, index) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <Link to={`/blog/${post.id}`} className="block">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                    <img
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <p className="text-secondary-900 font-medium">{post.author.name}</p>
                                        <div className="flex items-center text-sm text-secondary-500">
                                            <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold text-secondary-900 mb-2 hover:text-primary-600 transition-colors duration-300">
                                    {post.title}
                                </h2>
                                <p className="text-secondary-600 mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center text-primary-600 font-medium">
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