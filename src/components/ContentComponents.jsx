import React from 'react';

// Paragraph component
const Paragraph = ({ children }) => (
    <p className="text-lg text-gray-800 mb-4">{children}</p>
);

// Heading components
const Heading = ({ level, children }) => {
    switch (level) {
        case 1:
            return <h1 className="text-4xl font-bold text-gray-900 mb-6">{children}</h1>;
        case 2:
            return <h2 className="text-3xl font-semibold text-gray-900 mb-4">{children}</h2>;
        case 3:
            return <h3 className="text-2xl font-medium text-gray-800 mb-4">{children}</h3>;
        default:
            return <h4 className="text-xl font-medium text-gray-700 mb-3">{children}</h4>;
    }
};

// List component
const List = ({ items }) => (
    <ul className="list-disc list-inside pl-6 mb-4">
        {items.map((item, index) => (
            <li key={index} className="text-lg text-gray-800">{item}</li>
        ))}
    </ul>
);

// BlogImage component for the main cover or content images
const BlogImage = ({ src, alt }) => (
    <img src={src} alt={alt} className="w-full h-auto rounded-lg shadow-lg my-6" />
);

// ImageComponent for images used in content with custom styling
const ImageComponent = ({ src, alt, className = '', style = {} }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`w-full h-auto rounded-lg shadow-lg ${className}`} // Add additional styling as needed
            style={style}
        />
    );
};

export { BlogImage, Paragraph, Heading, List, ImageComponent };
