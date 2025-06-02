import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Features = () => {
    const features = [
        {
            title: 'Smart Job Matching',
            description: 'Our MatchingEngine pairs JobSeekers with jobs based on skills, availability, and location.',
            icon: '🔍',
        },
        {
            title: 'Secure Payments',
            description: 'Safe transactions with Wallet, Payment, and PriceNegotiation features ensure trust.',
            icon: '💳',
        },
        {
            title: 'Verified Skills',
            description: 'JobSeekers take AptitudeTests and upload VerificationDocuments to prove expertise.',
            icon: '✅',
        },
        {
            title: 'Seamless Communication',
            description: 'Messages, video calls, and Notifications keep everyone connected.',
            icon: '💬',
        },
        {
            title: 'Learning Resources',
            description: 'Access LearningResources to upskill and stay competitive.',
            icon: '📚',
        },
        {
            title: 'Job Alerts & Reviews',
            description: 'Set JobAlerts for opportunities and leave Reviews to build reputation.',
            icon: '🔔',
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    Why Choose SkillNest?
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            variants={fadeIn}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;