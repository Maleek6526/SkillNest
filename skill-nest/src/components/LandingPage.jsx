import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';
import WorkersSection from './WorkersSection';
import AboutSection from './AboutSection';
import AnotherHero from '../pages/AnotherHero.jsx'; // Importing AnotherHero for demonstration

const LandingPage = () => {
    return (
        <>
            {/* <Header /> */}
            {/* <Hero /> */}
            <AnotherHero />
            <Features />
            <WorkersSection />
            <HowItWorks />
            <AboutSection />
            <Testimonials />
            <CTA />
            <Footer />
        </>
    );
};

export default LandingPage;