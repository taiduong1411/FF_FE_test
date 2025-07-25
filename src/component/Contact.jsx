import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-slate-300 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-slate-300 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-slate-300 rounded-lg transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-slate-300 rounded-lg transform -rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hãy để lại thông tin và chúng tôi sẽ liên hệ lại với bạn trong thời
            gian sớm nhất
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Thông tin liên hệ
              </h3>
              <p className="text-slate-600 mb-8">
                Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn về các sản phẩm
                premium của chúng tôi.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}>
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                  <p className="text-slate-600">info@ffpremium.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}>
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Điện thoại</h4>
                  <p className="text-slate-600">+84 123 456 789</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}>
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Địa chỉ</h4>
                  <p className="text-slate-600">TP.HCM, Việt Nam</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}>
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Giờ làm việc</h4>
                  <p className="text-slate-600">Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Gửi tin nhắn
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300"
                    placeholder="Nhập họ và tên"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300"
                    placeholder="Nhập email"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300"
                  placeholder="Nhập tiêu đề"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nội dung
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Nhập nội dung tin nhắn"></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 flex items-center justify-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                <Send size={18} />
                <span>Gửi tin nhắn</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
