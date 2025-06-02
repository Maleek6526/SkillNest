import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Hammer,
  HardHat,
  Zap,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  MapPin,
  DollarSign,
  Clock,
  Award,
  Building,
  Truck,
  Settings,
  Shield,
  TrendingUp,
  UserCheck,
  Briefcase,
} from "lucide-react";

const Landing = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Marcus Johnson",
      role: "Master Electrician",
      company: "PowerTech Solutions",
      image: "⚡",
      quote:
        "SkillNest connected me with my dream job in just 2 weeks. The video interviews saved me time and the employers could see my real skills.",
      rating: 5,
    },
    {
      name: "Sarah Martinez",
      role: "Plumbing Supervisor",
      company: "AquaFlow Services",
      image: "🔧",
      quote:
        "Finally, a platform that understands skilled trades. I found a role that values my 15 years of experience and pays what I'm worth.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Construction Foreman",
      company: "BuildRight Corp",
      image: "🏗️",
      quote:
        "The skills verification feature helped me stand out. Employers can see I'm certified and experienced before we even meet.",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: UserCheck,
      title: "Skills-First Matching",
      description:
        "Get matched based on your actual skills and certifications, not just keywords.",
    },
    {
      icon: Play,
      title: "Video Interviews",
      description:
        "Show your skills in action with video interviews that work around your schedule.",
    },
    {
      icon: Award,
      title: "Certification Tracking",
      description:
        "Keep all your licenses and certifications in one place, always up to date.",
    },
    {
      icon: DollarSign,
      title: "Fair Pay Guarantee",
      description:
        "Transparent salary ranges and employers committed to paying skilled workers fairly.",
    },
  ];

  const industries = [
    { icon: Zap, name: "Electrical", jobs: "1,247" },
    { icon: Wrench, name: "Plumbing", jobs: "892" },
    { icon: HardHat, name: "Construction", jobs: "2,156" },
    { icon: Settings, name: "HVAC", jobs: "634" },
    { icon: Truck, name: "Transportation", jobs: "1,089" },
    { icon: Building, name: "Maintenance", jobs: "756" },
  ];

  const stats = [
    { number: "50K+", label: "Skilled Workers", icon: Users },
    { number: "15K+", label: "Active Jobs", icon: Briefcase },
    { number: "95%", label: "Match Success", icon: CheckCircle },
    { number: "$75K", label: "Avg Salary", icon: DollarSign },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center transform rotate-12">
                  <HardHat className="text-white" size={32} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                  Skill<span className="text-purple-600">Nest</span>
                </h1>
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Where <span className="text-purple-600">Skilled Hands</span>
              <br />
              Meet <span className="text-indigo-600">Great Opportunities</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The premier platform connecting skilled blue collar workers with
              employers who value experience, craftsmanship, and fair
              compensation. Your skills deserve recognition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/login">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center">
                  Find Your Next Job <ArrowRight className="ml-2" size={20} />
                </button>
              </Link>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all duration-300 flex items-center">
                <Play className="mr-2" size={20} /> Watch How It Works
              </button>
              <Link to="/">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <stat.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20" id="industries" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Every Trade, Every Skill,{" "}
              <span className="text-purple-600">Every Opportunity</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From electricians to welders, plumbers to heavy equipment
              operators - we connect skilled professionals across all
              industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 text-center shadow-lg border border-purple-100 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 ${
                  isVisible.industries
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {industry.name}
                </h4>
                <p className="text-purple-600 font-medium">
                  {industry.jobs} Jobs
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Built for <span className="text-purple-600">Real Workers</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges of skilled trades. That's why
              we built features that actually work for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-purple-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 ${
                  isVisible.features
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={20} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" id="testimonials" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Real Stories,{" "}
              <span className="text-purple-600">Real Success</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from skilled workers who found their perfect match through
              SkillNest.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-purple-100">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">
                  {testimonials[activeTestimonial].image}
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current"
                        size={20}
                      />
                    )
                  )}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-800 text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-purple-600 font-medium">
                    {testimonials[activeTestimonial].role}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-purple-600"
                      : "bg-purple-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Skills Are Valuable. Let's Prove It.
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of skilled workers who've found better opportunities,
            fair pay, and respect for their expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center">
                Get Started Today <ArrowRight className="ml-2" size={20} />
              </button>
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Talk to Our Team
            </button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-purple-100">
            <div className="flex items-center">
              <CheckCircle className="mr-2" size={20} />
              <span>Always Free for Workers</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2" size={20} />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2" size={20} />
              <span>Your Data is Protected</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Landing;
