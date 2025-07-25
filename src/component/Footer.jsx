import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#1B4F27] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Brand */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img
                src="/favicon_logo.png"
                alt="FF Premium Logo"
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-2xl font-bold text-white">FF Premium</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Khám phá hương vị tự nhiên tuyệt hảo với những sản phẩm chất lượng
              cao, mang lại lợi ích sức khỏe tối ưu cho cuộc sống hiện đại.
            </p>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="text-lg font-semibold text-white mb-4">
              Liên Kết Nhanh
            </h4>
            <div className="space-y-2">
              <a
                href="#hero"
                className="block text-white/80 hover:text-white transition-colors duration-300 text-sm">
                Trang Chủ
              </a>
              <a
                href="#about"
                className="block text-white/80 hover:text-white transition-colors duration-300 text-sm">
                Về Chúng Tôi
              </a>
              <a
                href="#products"
                className="block text-white/80 hover:text-white transition-colors duration-300 text-sm">
                Sản Phẩm
              </a>
              <a
                href="#contact"
                className="block text-white/80 hover:text-white transition-colors duration-300 text-sm">
                Liên Hệ
              </a>
            </div>
          </motion.div>

          {/* Column 3 - Contact Info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-lg font-semibold text-white mb-4">
              Thông Tin Liên Hệ
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-white/70">📧</span>
                <span className="text-white/80 text-sm">
                  info@ffpremium.com
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-white/70">📱</span>
                <span className="text-white/80 text-sm">+84 123 456 789</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-white/70">📍</span>
                <span className="text-white/80 text-sm">TP.HCM, Việt Nam</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/20 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-white/70 text-sm">
              © 2024 FF Premium. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                Chính Sách Bảo Mật
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                Điều Khoản Sử Dụng
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
