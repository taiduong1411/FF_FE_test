import React from "react";
import { motion } from "framer-motion";
import Hero from "../../component/Hero";
import Navigation from "../../component/Navigation";
import About from "../../component/About";
import Products from "../../component/Products";
import Footer from "../../component/Footer";
import Blog from "../../component/Blog";
const LandingPage = () => {
  return (
    <motion.div
      className="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}>
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Blog />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;
