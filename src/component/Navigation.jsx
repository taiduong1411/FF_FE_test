import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;

    // Initial animation
    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Scroll effect
    const handleScroll = () => {
      if (window.scrollY > 100) {
        gsap.to(nav, {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
          duration: 0.3,
        });
      } else {
        gsap.to(nav, {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          boxShadow: "none",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="nav-logo">
          <h2 className="text-2xl font-bold text-primary-800 cursor-pointer">
            FF
          </h2>
        </div>

        <div className={`hidden md:flex space-x-8 ${isMenuOpen ? "flex" : ""}`}>
          <a
            onClick={() => scrollToSection("hero")}
            className="text-gray-800 hover:text-primary-500 font-medium transition-colors duration-300 cursor-pointer">
            Home
          </a>
          <a
            onClick={() => scrollToSection("about")}
            className="text-gray-800 hover:text-primary-500 font-medium transition-colors duration-300 cursor-pointer">
            About
          </a>
          <a
            onClick={() => scrollToSection("products")}
            className="text-gray-800 hover:text-primary-500 font-medium transition-colors duration-300 cursor-pointer">
            Products
          </a>
          <a
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-800 hover:text-primary-500 font-medium transition-colors duration-300 cursor-pointer">
            Reviews
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="text-gray-800 hover:text-primary-500 font-medium transition-colors duration-300 cursor-pointer">
            Contact
          </a>
          <Link
            to="/survey"
            className="text-gray-800 hover:text-primary-500 font-medium transition-colors duration-300 cursor-pointer">
            Survey
          </Link>
        </div>

        <div
          className={`md:hidden flex flex-col cursor-pointer gap-1 ${
            isMenuOpen ? "active" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
