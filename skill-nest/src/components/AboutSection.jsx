import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Driver from '../assets/driver.jpg';
import Welther from '../assets/welther.jpg';
import Mechanics from '../assets/mechanics.jpg';
import Bricklayer from '../assets/bricklayer.jpg';
import Bricklayer2 from '../assets/bricklayer2.jpg';
import WorkingBricklayer from '../assets/15470a8df0b8a7e4b67f0e2d662cedc1.mp4';
import Cook from '../assets/addf75c606c7416e3bb7d7823274fd01.mp4';
import Garri from '../assets/13624819_2160_3840_30fps.mp4';
import Tricycle from '../assets/4dca03d96aab3e96aae543a8a706402a.mp4'
import Carpenter from '../assets/360c5a2abff6d9d563ba2c1d00119d52.mp4'

const AboutSection = () => {
  const mediaItems = [
    { type: 'image', src: Driver, alt: 'Pick-up Driver in Nigeria' },
    { type: 'image', src: Welther, alt: 'Welther in Nigeria' },
    { type: 'image', src: Mechanics, alt: 'Mechanic in Nigeria' },
    { type: 'image', src: Bricklayer, alt: 'Bricklayer in Nigeria' },
    { type: 'image', src: Bricklayer2, alt: 'Constructor in Nigeria' },
    { type: 'video', src: WorkingBricklayer, alt: 'Working Bricklayer Worker Video' },
    { type: 'video', src: Garri, alt: 'Garri Seller Video' },
    { type: 'video', src: Cook, alt: 'Cooking Video' },
    { type: 'video', src: Tricycle, alt: 'Tricycle Video' },
    { type: 'video', src: Carpenter, alt: 'Working Capenter Video' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [mediaItems.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <section className="py-16 bg-blue-800 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[450px] mx-auto aspect-[4/3] rounded-lg shadow-lg overflow-hidden"
          >
            {mediaItems[currentIndex].type === 'image' ? (
              <img
                src={mediaItems[currentIndex].src}
                alt={mediaItems[currentIndex].alt}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <video
                src={mediaItems[currentIndex].src}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </motion.div>
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            >
              →
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Supporting Nigeria's Blue-Collar Workforce</h2>
          <p className="mb-4 text-lg">
            SkillNest is designed to empower blue-collar workers in Nigeria by connecting them with secure job opportunities. From construction to tailoring, our app verifies skills through aptitude tests and documentation, ensuring trust between job seekers and employers.
          </p>
          <p className="mb-4 text-lg">
            Experience seamless job matching based on your skills, availability, and location, with safe payment options and real-time communication tools. Join a community that values your expertise!
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Your Short Experience</h3>
          <p className="text-lg">
            Sign up, verify your skills, and get matched with jobs in minutes. Communicate with employers, track payments, and grow your reputation with reviews—all in one app!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;