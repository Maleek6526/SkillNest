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

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John D.',
            role: 'Carpenter',
            quote: 'SkillNest helped me find steady work and get paid securely. The skill verification process boosted my credibility!',
        },
        {
            name: 'Sarah M.',
            role: 'Employer',
            quote: 'Posting jobs and finding reliable workers was so easy. The communication tools kept everything on track.',
        },
        {
            name: 'Mike L.',
            role: 'Plumber',
            quote: 'The JobAlerts feature ensures I never miss a gig. Plus, the learning resources helped me upskill.',
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
                    What Our Users Say
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow-md"
                            variants={fadeIn}
                            whileHover={{ scale: 1.05 }}
                        >
                            <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-gray-500">{testimonial.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;