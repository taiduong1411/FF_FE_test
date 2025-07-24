import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Wellness Coach",
      text: "Ciao Kombucha has become my daily ritual. The quality and taste are unmatched. My clients love it too!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Fitness Enthusiast",
      text: "After trying many kombucha brands, Ciao is by far the best. The Ginger Lemon flavor gives me the perfect energy boost.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Yoga Instructor",
      text: "The Lavender Dream flavor is my evening go-to. It's so calming and helps me unwind after a long day of teaching.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Chef",
      text: "As a chef, I'm very particular about flavors. Ciao Kombucha's complexity and balance are exceptional.",
      rating: 5,
    },
  ];

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

    // Initial carousel animation
    gsap.fromTo(
      carouselRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: carouselRef.current,
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

  const nextSlide = () => {
    const next = (currentSlide + 1) % testimonials.length;
    setCurrentSlide(next);

    gsap.to(carouselRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        gsap.to(carouselRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });
  };

  const prevSlide = () => {
    const prev =
      currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1;
    setCurrentSlide(prev);

    gsap.to(carouselRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        gsap.to(carouselRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });
  };

  return (
    <section ref={sectionRef} id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 ref={titleRef} className="section-title">
          What Our Customers Say
        </h2>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            ‹
          </button>

          <div ref={carouselRef} className="testimonial-card">
            <div className="testimonial-content">
              <div className="stars">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
              </div>

              <p className="testimonial-text">
                "{testimonials[currentSlide].text}"
              </p>

              <div className="testimonial-author">
                <h4 className="author-name">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="author-role">{testimonials[currentSlide].role}</p>
              </div>
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
