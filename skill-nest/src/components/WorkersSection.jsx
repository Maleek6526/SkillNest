import React from 'react';
import { motion } from 'framer-motion';

const WorkersSection = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Empowering Nigerian Blue-Collar Workers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Construction', 'Mechanics', 'Tailoring'].map((job, index) => (
            <motion.div
              key={job}
              className="bg-white text-blue-900 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">{job} Workers</h3>
              <p className="mb-4">Connect with verified {job.toLowerCase()} experts in Nigeria.</p>
              <motion.div
                className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <span className="text-white font-bold">{job[0]}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Why Trust SkillNest?</h3>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.div
              className="bg-green-100 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-green-800">Verified Skills with Aptitude Tests</p>
            </motion.div>
            <motion.div
              className="bg-green-100 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-green-800">Secure Payments with Wallet</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkersSection;