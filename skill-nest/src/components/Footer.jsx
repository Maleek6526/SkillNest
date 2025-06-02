import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">SkillNest</h3>
                        <p className="text-gray-400">Connecting skilled workers with opportunities, securely and efficiently.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400">Email: africa.skillnest@gmail.com</p>
                        <p className="text-gray-400">Phone: (+234) 70-252-846-21</p>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    © 2025 SkillNest. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;