import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">404 - Page Not Found</h1>
            <p className="text-secondary-600 mb-6">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="text-primary-600 hover:underline">Go back to Home</Link>
        </div>
    );
};

export default NotFound;
