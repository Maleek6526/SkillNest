import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CTA = () => {
    return (
        <section className="py-16 bg-blue-600 text-white">
            <motion.div
                className="container mx-auto px-4 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Whether you're a skilled worker or an employer, SkillNest makes it easy to connect and succeed.
                </p>
                <Link
                    to="/login"
                    className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
                >
                    Join Now
                </Link>
            </motion.div>
        </section>
    );
};

export default CTA;