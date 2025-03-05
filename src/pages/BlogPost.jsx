import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import blogData from '../data/blogData.json';

const BlogPost = () => {
    const { slug } = useParams();

    // Find the blog post based on the slug
    const post = blogData.find((post) => post.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-bold">Blog post not found.</h2>
            </div>
        );
    }

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
                    {post.content.map((paragraph, index) => (
                        <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                </div>
            </div>
        </motion.article>
    );
};

export default BlogPost;
