import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LandingVideo from '../assets/18676762-uhd_3840_2160_24fps.mp4'
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
    return (
        <section className="relative bg-blue-700 text-white py-20 overflow-hidden">
            <video
                autoPlay    
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={LandingVideo}
                type="video/mp4"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-blue-700/60 z-10" />
            <motion.div
                className="container mx-auto px-4 text-center relative z-20"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Connect Skills with Opportunities</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    SkillNest empowers JobSeekers and Employers with verified skills, secure payments, and seamless communication for blue-collar jobs.
                </p>
                <div className="space-x-4">
                    <Link
                        to="/login"
                        className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
                    >
                        Join as JobSeeker
                    </Link>
                    <Link
                        to="/login"
                        className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Hire Talent
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;