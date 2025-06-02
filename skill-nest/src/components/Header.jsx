import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            className="bg-blue-600 text-white sticky top-0 z-50 shadow-md"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">SkillNest</h1>
                <nav className="space-x-4">
                    <Link to="/login" className="hover:underline">Login</Link>
                    <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">Sign Up</Link>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;