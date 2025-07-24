import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Hero from "../../component/Hero";
import Navigation from "../../component/Navigation";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const LandingPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    // Initial page animation
    gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Smooth scrolling setup
    gsap.set("html, body", { scrollBehavior: "smooth" });

    return () => {
      // Cleanup ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={pageRef} className="landing-page">
      <Navigation />
      <Hero />
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
