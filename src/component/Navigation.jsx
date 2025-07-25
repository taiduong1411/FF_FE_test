import React, { useState, useRef, useEffect, useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useLenis } from "../contexts/LenisContext";
import {
  Home,
  Info,
  ShoppingBag,
  Star,
  Phone,
  ClipboardList,
  Sparkles,
  Leaf,
  Gem,
  Menu,
  X,
} from "lucide-react";

const Navigation = () => {
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lenisRef = useLenis();

  // Optimize scroll handler with useCallback
  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Optimize scroll to section with useCallback
  const scrollToSection = useCallback(
    (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element && lenisRef?.current) {
        lenisRef.current.scrollTo(element, { offset: 0, duration: 1 });
      }
      setIsMenuOpen(false);
    },
    [lenisRef]
  );

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="nav-logo">
            <div className="flex items-center space-x-2">
              <img
                src="/favicon_logo.png"
                alt="FF Premium Logo"
                className="w-12 h-12 lg:w-14 lg:h-14 object-contain"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              onClick={() => scrollToSection("hero")}
              className="text-gray-800 hover:text-[#1B4F27] font-medium transition-all duration-300 cursor-pointer relative group">
              Trang chủ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1B4F27] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              onClick={() => scrollToSection("products")}
              className="text-gray-800 hover:text-[#1B4F27] font-medium transition-all duration-300 cursor-pointer relative group">
              Sản phẩm
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1B4F27] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="text-gray-800 hover:text-[#1B4F27] font-medium transition-all duration-300 cursor-pointer relative group">
              Về chúng tôi
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1B4F27] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              onClick={() => scrollToSection("blog")}
              className="text-gray-800 hover:text-[#1B4F27] font-medium transition-all duration-300 cursor-pointer relative group">
              Tin tức
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1B4F27] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link
              to="/survey"
              className="bg-[#1B4F27] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-[#153d1f] hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2">
              <ClipboardList size={18} />
              <span>Khảo sát</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none">
              <span
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}></span>
              <span
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}></span>
              <span
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}></span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={toggleMenu}>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl">
              <div className="p-8 pt-20">
                <div className="space-y-6">
                  <motion.a
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => scrollToSection("hero")}
                    className="flex items-center space-x-4 text-xl font-semibold text-gray-800 hover:text-[#1B4F27] transition-colors duration-300 cursor-pointer py-3 border-b border-gray-100">
                    <div className="w-8 h-8 bg-[#1B4F27] rounded-lg flex items-center justify-center">
                      <Home size={18} className="text-white" />
                    </div>
                    <span>Trang chủ</span>
                  </motion.a>
                  <motion.a
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => scrollToSection("products")}
                    className="flex items-center space-x-4 text-xl font-semibold text-gray-800 hover:text-[#1B4F27] transition-colors duration-300 cursor-pointer py-3 border-b border-gray-100">
                    <div className="w-8 h-8 bg-[#1B4F27] rounded-lg flex items-center justify-center">
                      <ShoppingBag size={18} className="text-white" />
                    </div>
                    <span>Sản phẩm</span>
                  </motion.a>
                  <motion.a
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => scrollToSection("about")}
                    className="flex items-center space-x-4 text-xl font-semibold text-gray-800 hover:text-[#1B4F27] transition-colors duration-300 cursor-pointer py-3 border-b border-gray-100">
                    <div className="w-8 h-8 bg-[#1B4F27] rounded-lg flex items-center justify-center">
                      <Info size={18} className="text-white" />
                    </div>
                    <span>Về chúng tôi</span>
                  </motion.a>
                  <motion.a
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => scrollToSection("blog")}
                    className="flex items-center space-x-4 text-xl font-semibold text-gray-800 hover:text-[#1B4F27] transition-colors duration-300 cursor-pointer py-3 border-b border-gray-100">
                    <div className="w-8 h-8 bg-[#1B4F27] rounded-lg flex items-center justify-center">
                      <Leaf size={18} className="text-white" />
                    </div>
                    <span>Tin tức</span>
                  </motion.a>
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}>
                    <Link
                      to="/survey"
                      onClick={toggleMenu}
                      className="block w-full bg-[#1B4F27] text-white text-center py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#153d1f] hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                      <ClipboardList size={20} />
                      <span>Khảo sát</span>
                    </Link>
                  </motion.div>
                </div>

                {/* Mobile Menu Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-12 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-gray-600 text-sm mb-4">FF Premium</p>
                    <div className="flex justify-center space-x-4">
                      <div className="w-8 h-8 bg-[#1B4F27] rounded-full flex items-center justify-center">
                        <Sparkles size={14} className="text-white" />
                      </div>
                      <div className="w-8 h-8 bg-[#1B4F27] rounded-full flex items-center justify-center">
                        <Leaf size={14} className="text-white" />
                      </div>
                      <div className="w-8 h-8 bg-[#1B4F27] rounded-full flex items-center justify-center">
                        <Gem size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
