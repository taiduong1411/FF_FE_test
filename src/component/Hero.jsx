import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Simple fade in animation
    gsap.fromTo(
      ".product-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    // Gentle floating animation
    gsap.to(".product-card", {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.4,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Simple background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50/50 via-white to-blue-50/50"></div>
      </div>

      {/* Product Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Top Row */}
        <div className="flex justify-center items-center gap-8 lg:gap-16 mb-8">
          <div className="product-card">
            <img
              src="/menu_convert/RASPMERRY_clipped_rev_1.png"
              alt="Raspmerry Kombucha"
              className="w-48 h-auto object-contain drop-shadow-lg"
            />
          </div>

          <div className="product-card">
            <img
              src="/menu_convert/KITAMINT_clipped_rev_1.png"
              alt="Kitamint Kombucha"
              className="w-48 h-auto object-contain drop-shadow-lg"
            />
          </div>

          <div className="product-card">
            <img
              src="/menu_convert/MINTGO_clipped_rev_1.png"
              alt="Mintgo Kombucha"
              className="w-48 h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Row - Main Product */}
        <div className="flex justify-center">
          <div className="product-card main-product">
            <img
              src="/menu_convert/BLUE SHYNESS_clipped_rev_1.png"
              alt="Blue Shyness Kombucha"
              className="w-64 h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Simple floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-300 rounded-full animate-pulse opacity-40"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-300 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "1s" }}></div>
        <div
          className="absolute top-1/2 left-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-pulse opacity-30"
          style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Subtle text overlay */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Premium Kombucha Collection
        </h2>
        <p className="text-gray-600">Discover our handcrafted flavors</p>
      </div>
    </section>
  );
};

export default Hero;
