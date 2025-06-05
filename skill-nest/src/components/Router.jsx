import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import NotFound from './NotFound';
import OtpVerification from '../components/OtpVerification.jsx';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard.jsx';
import ForgottenPassword from './ForgottenPassword.jsx';
import AnotherHero from '../pages/AnotherHero.jsx';
import Landing from '../pages/Landing.jsx';
import AboutSection from '../components/AboutSection.jsx'
import Footer from '../components/Footer.jsx'
import PasswordReset from '../pages/PasswordReset.jsx';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<LandingPage />} />
                <Route path="/about" element={<Landing />} />
                <Route path="/services" element={<AboutSection />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/password-reset" element={<PasswordReset/>}/>
                <Route path="/otp-verification" element={<OtpVerification/>}/>
                <Route path="/forgotten-password" element={<ForgottenPassword />} />
                <Route path="/another-hero-page" element={<AnotherHero />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/contact" element={<Footer/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;