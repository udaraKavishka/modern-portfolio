import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import blogData from '../data/blogData.json';
import { Paragraph, Heading, List, BlogImage,ImageComponent } from '../components/ContentComponents';

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
            className="min-h-screen pt-16 bg-gray-50"
        >
            {/* Header with image and title */}
            <div className="relative h-96 bg-secondary-900">
                <BlogImage src={post.coverImage} alt={post.title} />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="container mx-auto px-4 text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                        <div className="flex items-center justify-center space-x-4">
                            <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto prose prose-lg text-gray-800">
                    {/* Dynamically render content */}
                    {post.content.map((section, index) => {
                        if (section.includes('<h2>')) {
                            return <Heading key={index} level={2}>{section.replace(/<h2>/, '').replace(/<\/h2>/, '')}</Heading>;
                        }
                        if (section.includes('<p>')) {
                            return <Paragraph key={index}>{section.replace(/<p>/, '').replace(/<\/p>/, '')}</Paragraph>;
                        }
                        if (section.includes('<ul>')) {
                            const listItems = section
                                .replace(/<ul>/, '')
                                .replace(/<\/ul>/, '')
                                .split('<li>')
                                .filter(item => item !== '')
                                .map(item => item.replace(/<\/li>/, ''));
                            return <List key={index} items={listItems} />;
                        }
                        if (section.includes('<img')) {
                            const srcMatch = section.match(/src="([^"]+)"/);
                            const altMatch = section.match(/alt="([^"]+)"/);
                            const src = srcMatch ? srcMatch[1] : '';
                            const alt = altMatch ? altMatch[1] : '';
                            return <ImageComponent key={index} src={src} alt={alt} />;
                        }
                        return <div key={index} dangerouslySetInnerHTML={{ __html: section }} />;
                    })}
                </div>
            </div>
        </motion.article>
    );
};

export default BlogPost;
