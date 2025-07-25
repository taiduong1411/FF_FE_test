import React from "react";
import { motion } from "framer-motion";
import { Leaf, Sparkles, Star, Droplets, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
      {/* Video Background - Optimized */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata" // Optimize video loading
          className="w-full h-full object-cover opacity-20">
          <source src="/SOURCE/video/screen.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-cyan-100/30 to-blue-100/40"></div>
      </div>

      {/* Nature decorative elements - Simplified */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#1B4F27]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#1B4F27]/8 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-96 lg:h-[500px] object-cover">
                <source src="/SOURCE/video/screen.mp4" type="video/mp4" />
              </video>

              {/* Video overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            {/* Section Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-[#1B4F27] text-white px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}>
              <Leaf size={16} />
              <span>About Our Story</span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Crafting
                <br />
                <span className="text-[#1B4F27]">Natural Excellence</span>
              </h2>
              <motion.div
                className="w-20 h-1 bg-[#1B4F27] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}>
              <p className="text-lg text-slate-600 leading-relaxed">
                Chúng tôi tin rằng mỗi sản phẩm đều phải mang đến trải nghiệm
                hoàn hảo. Từ những nguyên liệu tự nhiên được chọn lọc kỹ lưỡng
                đến quy trình sản xuất thủ công, mỗi bước đều được thực hiện với
                sự tận tâm và chuyên nghiệp.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi tự hào mang
                đến những sản phẩm chất lượng cao, không chỉ tốt cho sức khỏe mà
                còn mang lại hương vị tuyệt vời cho mọi khoảnh khắc.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}>
                <div className="text-3xl font-bold text-[#1B4F27] mb-2">
                  10+
                </div>
                <div className="text-sm text-slate-600">Năm Kinh Nghiệm</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}>
                <div className="text-3xl font-bold text-[#1B4F27] mb-2">
                  50K+
                </div>
                <div className="text-sm text-slate-600">
                  Khách Hàng Hài Lòng
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}>
                <div className="text-3xl font-bold text-[#1B4F27] mb-2">
                  100%
                </div>
                <div className="text-sm text-slate-600">Tự Nhiên</div>
              </motion.div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}>
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}>
                <div className="w-8 h-8 bg-[#1B4F27]/10 rounded-full flex items-center justify-center">
                  <Sparkles size={16} className="text-[#1B4F27]" />
                </div>
                <span className="text-slate-700 font-medium">
                  Chất Lượng Cao
                </span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}>
                <div className="w-8 h-8 bg-[#1B4F27]/10 rounded-full flex items-center justify-center">
                  <Star size={16} className="text-[#1B4F27]" />
                </div>
                <span className="text-slate-700 font-medium">
                  Hương Vị Độc Đáo
                </span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.0 }}>
                <div className="w-8 h-8 bg-[#1B4F27]/10 rounded-full flex items-center justify-center">
                  <Droplets size={16} className="text-[#1B4F27]" />
                </div>
                <span className="text-slate-700 font-medium">
                  Tốt Cho Sức Khỏe
                </span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.1 }}>
                <div className="w-8 h-8 bg-[#1B4F27]/10 rounded-full flex items-center justify-center">
                  <Heart size={16} className="text-[#1B4F27]" />
                </div>
                <span className="text-slate-700 font-medium">
                  Được Yêu Thích
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
