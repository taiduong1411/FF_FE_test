import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Products = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const productsRef = useRef(null);

  const products = [
    {
      name: "Classic Original",
      description:
        "Our signature blend with a perfect balance of sweet and tangy",
      color: "#8B4513",
      price: "$4.99",
    },
    {
      name: "Ginger Lemon",
      description: "Zesty ginger meets refreshing lemon for a bold kick",
      color: "#FFD700",
      price: "$5.49",
    },
    {
      name: "Berry Blast",
      description: "Mixed berries create a fruity explosion of flavors",
      color: "#FF69B4",
      price: "$5.49",
    },
    {
      name: "Mint Mojito",
      description: "Cool mint with a hint of lime for ultimate refreshment",
      color: "#98FB98",
      price: "$5.49",
    },
    {
      name: "Turmeric Golden",
      description: "Anti-inflammatory benefits with warm, earthy notes",
      color: "#FFA500",
      price: "$5.99",
    },
    {
      name: "Lavender Dream",
      description: "Calming lavender with subtle floral undertones",
      color: "#E6E6FA",
      price: "$5.99",
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

    // Products animation
    const productCards = productsRef.current.children;
    gsap.fromTo(
      productCards,
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Hover effects
    Array.from(productCards).forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="products" className="products">
      <div className="products-container">
        <h2 ref={titleRef} className="section-title">
          Our Flavors
        </h2>

        <div ref={productsRef} className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div
                className="product-bottle"
                style={{ backgroundColor: product.color }}>
                <div className="bottle-shine"></div>
                <div className="bottle-label">{product.name}</div>
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">{product.price}</div>
                <button className="btn-add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
