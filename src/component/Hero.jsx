import React from "react";
import { motion } from "framer-motion";
import { Leaf, Sparkles, Star, Droplets } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50">
      {/* Nature-inspired background */}
      <div className="absolute inset-0">
        {/* Nature component as background */}
        <div className="absolute inset-0">
          <img
            src="/img_component/nature_component.png"
            alt="Nature Background"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
      </div>

      {/* Fruit component overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* All fruit component as background */}
        {/* <div className="absolute  h-24 md:top-20 md:right-10 md:w-32 md:h-32 lg:w-52 lg:h-52">
          <img
            src="/img_component/all_fruit_component.png"
            alt="All Fruit Component Background"
            className="w-full h-full object-contain"
          />
        </div> */}

        {/* Fruit component */}
        <div className="absolute top-16 right-4 w-24 h-24 md:top-20 md:right-10 md:w-32 md:h-32 lg:w-52 lg:h-52">
          <img
            src="/img_component/fruit_component.png"
            alt="Fruit Component"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Banana component */}
        <div className="absolute bottom-16 right-4 w-24 h-24 md:bottom-20 md:right-20 md:w-32 md:h-32 lg:w-52 lg:h-52">
          <img
            src="/img_component/banana_component.png"
            alt="Banana Component"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Lemon component */}
        <div className="absolute top-1/2 left-4 w-24 h-24 md:top-1/3 md:left-20 md:w-32 md:h-32 lg:w-52 lg:h-52">
          <img
            src="/img_component/lemon_component.png"
            alt="Lemon Component"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-[#1B4F27] text-white px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <Leaf size={16} />
              <span>Premium</span>
            </motion.div>

            {/* Title */}
            <motion.div
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                Discover
                <br />
                <span className="bg-gradient-to-r from-[#1B4F27] to-emerald-600 bg-clip-text text-transparent">
                  Natural
                </span>
                <br />
                <span className="text-[#1B4F27]">Excellence</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                Trải nghiệm hương vị tự nhiên tuyệt hảo với những sản phẩm được
                chế biến từ nguyên liệu chất lượng cao, mang lại lợi ích sức
                khỏe tối ưu cho cuộc sống hiện đại.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}>
              <motion.button
                className="bg-[#1B4F27] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1B4F27]/90 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Khám Phá Ngay
              </motion.button>
              <motion.button
                className="border-2 border-[#1B4F27] text-[#1B4F27] px-8 py-4 rounded-full font-semibold hover:bg-[#1B4F27] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Tìm Hiểu Thêm
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#1B4F27]/10 rounded-full flex items-center justify-center">
                  <Sparkles size={16} className="text-[#1B4F27]" />
                </div>
                <span className="text-slate-700 font-medium">
                  100% Tự Nhiên
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#1B4F27]/10 rounded-full flex items-center justify-center">
                  <Star size={16} className="text-[#1B4F27]" />
                </div>
                <span className="text-slate-700 font-medium">
                  Chất Lượng Cao
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#1B4F27]/10 rounded-full flex items-center justify-center">
                  <Droplets size={16} className="text-[#1B4F27]" />
                </div>
                <span className="text-slate-700 font-medium">
                  Tốt Cho Sức Khỏe
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#1B4F27]/10 rounded-full flex items-center justify-center">
                  <Leaf size={16} className="text-[#1B4F27]" />
                </div>
                <span className="text-slate-700 font-medium">
                  Hương Vị Độc Đáo
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Product Display */}
          <div className="relative">
            {/* Main Product */}
            <motion.div
              className="relative main-product"
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}>
              <div className="relative">
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.img
                    src="/menu_convert/BLUE SHYNESS_clipped_rev_1.png"
                    alt="Blue Shyness"
                    className="w-80 h-80 object-contain drop-shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Premium badge */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-[#1B4F27] rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}>
                    <Star size={20} className="text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Side Products */}

            <motion.div
              className="absolute side-product"
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}>
              <div>
                <img
                  src="/menu_convert/RASPMERRY_clipped_rev_1.png"
                  alt="Raspmerry"
                  className="w-36 h-36 object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-10 -right-10 side-product"
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}>
              <div>
                <img
                  src="/menu_convert/KITAMINT_clipped_rev_1.png"
                  alt="Kitamint"
                  className="w-36 h-36 object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-5 side-product"
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}>
              <div>
                <img
                  src="/menu_convert/MINTGO_clipped_rev_1.png"
                  alt="Mintgo"
                  className="w-36 h-36 object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
