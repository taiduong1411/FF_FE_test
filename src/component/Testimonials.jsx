import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      name: "Nguyễn Thị Anh",
      role: "Khách hàng thân thiết",
      content:
        "Sản phẩm của FF Premium thực sự tuyệt vời! Hương vị tự nhiên và tươi mới, giúp tôi cảm thấy sảng khoái mỗi ngày. Tôi đặc biệt thích Blue Shyness với hương vị thanh mát.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Trần Văn Bình",
      role: "Doanh nhân",
      content:
        "Là một người bận rộn, tôi cần những sản phẩm tốt cho sức khỏe. FF Premium đã trở thành lựa chọn hàng đầu của tôi. Chất lượng premium và hương vị đặc biệt.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "Lê Thị Cẩm",
      role: "Yoga Instructor",
      content:
        "Là một giáo viên yoga, tôi rất chú trọng đến sức khỏe. FF Premium không chỉ ngon mà còn mang lại nhiều lợi ích sức khỏe. Mintgo là sản phẩm yêu thích của tôi.",
      rating: 5,
      avatar: "🧘‍♀️",
    },
    {
      name: "Phạm Hoàng Dũng",
      role: "Fitness Trainer",
      content:
        "Sau mỗi buổi tập, tôi thường uống FF Premium để phục hồi năng lượng. Sản phẩm giúp tôi cảm thấy tươi mới và tràn đầy sức sống. Chất lượng thực sự đáng tin cậy.",
      rating: 5,
      avatar: "💪",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
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
            Khách hàng nói gì
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Những đánh giá chân thực từ khách hàng đã trải nghiệm sản phẩm của
            chúng tôi
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div
            ref={carouselRef}
            className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="p-12"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}>
                <div className="text-center">
                  {/* Quote Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-8"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}>
                    <Quote size={24} className="text-white" />
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p
                    className="text-xl text-slate-600 leading-relaxed mb-8 italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}>
                    "{testimonials[currentSlide].content}"
                  </motion.p>

                  {/* Rating */}
                  <motion.div
                    className="flex justify-center space-x-1 mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}>
                    {[...Array(testimonials[currentSlide].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="text-yellow-500 fill-current"
                        />
                      )
                    )}
                  </motion.div>

                  {/* Author Info */}
                  <motion.div
                    className="flex items-center justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}>
                    <div className="text-4xl">
                      {testimonials[currentSlide].avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-slate-600">
                        {testimonials[currentSlide].role}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <ChevronLeft size={20} className="text-slate-900" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <ChevronRight size={20} className="text-slate-900" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-slate-900 scale-125"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}>
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-slate-900 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.1 }}>
              10K+
            </motion.div>
            <p className="text-slate-600">Khách hàng hài lòng</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-slate-900 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}>
              4.9
            </motion.div>
            <p className="text-slate-600">Đánh giá trung bình</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-slate-900 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.1 }}>
              50+
            </motion.div>
            <p className="text-slate-600">Cửa hàng trên toàn quốc</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
