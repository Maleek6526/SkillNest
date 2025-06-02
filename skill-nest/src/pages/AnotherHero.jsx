import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image (2).jpg";
import Picture1 from "../assets/picture1.jpg";
import Picture2 from "../assets/picture2.jpg";
import Driver from "../assets/driver.jpg";
import Welther from "../assets/welther.jpg";
import Mechanics from "../assets/mechanics.jpg";
import Bricklayer from "../assets/bricklayer.jpg";
import Bricklayer2 from "../assets/bricklayer2.jpg";
import WorkingBricklayer from "../assets/15470a8df0b8a7e4b67f0e2d662cedc1.mp4";
import Cook from "../assets/addf75c606c7416e3bb7d7823274fd01.mp4";
import Garri from "../assets/13624819_2160_3840_30fps.mp4";
import Tricycle from "../assets/4dca03d96aab3e96aae543a8a706402a.mp4";
import Carpenter from "../assets/360c5a2abff6d9d563ba2c1d00119d52.mp4";
import Area from '../assets/18676762-uhd_3840_2160_24fps.mp4'

const AnotherHero = () => {
  const heroImages = [
    { type: "image", src: Picture1 },
    { type: "image", src: Picture2 },
    { type: "image", src: Driver },
    { type: "image", src: Welther },
    { type: "image", src: Mechanics },
    { type: "image", src: Bricklayer },
    { type: "image", src: Bricklayer2 },
    { type: "video", src: WorkingBricklayer },
    { type: "video", src: Cook },
    { type: "video", src: Garri },
    { type: "video", src: Tricycle },
    { type: "video", src: Carpenter },
    { type: "video", src: Area },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Images/Videos */}
      <div className="absolute inset-0">
        {heroImages.map((media, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {media.type === "image" ? (
              <img
                src={media.src}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            ) : (
              <video
                src={media.src}
                className="w-full h-full object-cover object-center"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6">
        <div
          className={`transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <Link to='/'>
          <img
            src={Logo}
            alt="Brand Logo"
            className="h-8 sm:h-10 w-auto"
            loading="lazy"
          />
          </Link>
        </div>
        <button
          className="md:hidden text-white z-30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen
              ? "flex flex-col absolute top-14 left-0 right-0 bg-black/95 p-4 gap-4"
              : "hidden md:flex space-x-8"
          } transform transition-all duration-1000 delay-200 ${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-white/90 hover:text-white transition-colors duration-300 font-medium tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-8 -mt-16 sm:-mt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight transform transition-all duration-1000 delay-300 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            Connect Skills with Opportunities
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              SkillNest
            </span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            SkillNest empowers JobSeekers and Employers with verified skills,
            secure payments, and seamless communication for blue-collar jobs.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transform transition-all duration-1000 delay-700 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <Link to="/login">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 w-full sm:w-auto">
                <span className="relative z-10">Get Started</span>

                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            <Link to="/about">
              <button className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-ping hidden sm:block"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce hidden sm:block"></div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-4 sm:right-8 flex flex-col items-center text-white/60 animate-bounce">
        <span className="text-xs sm:text-sm mb-2 rotate-90 origin-center">
          Scroll
        </span>
        <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </div>
  );
};

export default AnotherHero;
