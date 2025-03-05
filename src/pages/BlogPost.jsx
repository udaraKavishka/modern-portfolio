import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import postsData from '../data/posts.json';
import '../markdown.css';

const BlogPost = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const post = postsData.posts.find(p => p.id === id);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`/posts/${id}.md`);
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error loading blog post:', error);
            }
        };

        if (post) {
            fetchContent();
        }
    }, [id]);

    if (!post) {
        return (
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-2xl font-bold">Post not found</h1>
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
            <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] bg-secondary-900">
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="container mx-auto px-4 text-center text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                        <div className="flex items-center justify-center space-x-4">
                            <span>•</span>
                            <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="markdown-content max-w-3xl mx-auto prose prose-lg">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogPost;
