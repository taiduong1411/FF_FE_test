import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Content animation
    gsap.fromTo(
      contentRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stats animation
    const stats = statsRef.current.children;
    gsap.fromTo(
      stats,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 ref={titleRef} className="section-title">
            Our Story
          </h2>

          <div ref={contentRef} className="about-text">
            <p>
              Founded with a passion for authentic fermentation and wellness,
              Ciao Kombucha began as a small family recipe passed down through
              generations. Today, we continue to honor those traditions while
              embracing modern techniques to create the perfect balance of taste
              and health benefits.
            </p>

            <p>
              Each batch is carefully crafted using organic ingredients and our
              proprietary SCOBY culture, ensuring every bottle delivers the
              authentic kombucha experience with a contemporary twist that
              appeals to modern palates.
            </p>
          </div>
        </div>

        <div ref={statsRef} className="about-stats">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">8</div>
            <div className="stat-label">Unique Flavors</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Organic</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
