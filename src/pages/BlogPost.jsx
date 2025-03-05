import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import postsData from '../data/posts.json';

const BlogPost = () => {
    const { id } = useParams();
    console.log(id)
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
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-10 h-10 rounded-full"
                            />
                            <span>{post.author.name}</span>
                            <span>•</span>
                            <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto prose prose-lg">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogPost;