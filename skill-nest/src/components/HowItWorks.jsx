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

const HowItWorks = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    How It Works
                </motion.h2>
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <motion.div
                        className="flex-1 mb-8 md:mb-0"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-center">For JobSeekers</h3>
                        {[
                            { step: 'Sign Up & Build Profile', desc: 'Register, add skills, and verify your expertise.' },
                            { step: 'Find Jobs', desc: 'Use JobAlerts and MatchingEngine to discover opportunities.' },
                            { step: 'Work & Get Paid', desc: 'Complete jobs, log progress, and receive secure payments.' },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="mb-6 p-4 bg-white rounded-lg shadow-sm"
                                variants={fadeIn}
                            >
                                <h4 className="text-lg font-semibold">{index + 1}. {step.step}</h4>
                                <p className="text-gray-600">{step.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="flex-1"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-center">For Employers</h3>
                        {[
                            { step: 'Post a Job', desc: 'Create a job listing with required skills and details.' },
                            { step: 'Hire Talent', desc: 'Search verified JobSeekers and negotiate terms.' },
                            { step: 'Manage & Pay', desc: 'Track progress and make secure payments upon completion.' },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="mb-6 p-4 bg-white rounded-lg shadow-sm"
                                variants={fadeIn}
                            >
                                <h4 className="text-lg font-semibold">{index + 1}. {step.step}</h4>
                                <p className="text-gray-600">{step.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;