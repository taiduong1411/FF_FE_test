import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLenis } from "../contexts/LenisContext";
import StickyBox from "react-sticky-box";
import {
  Leaf,
  Star,
  Sparkles,
  ShoppingBag,
  Heart,
  Award,
  Droplets,
  ArrowRight,
} from "lucide-react";

const Products = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lenisRef = useLenis();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!lenisRef?.current || !sectionRef.current) return;

    const updateScrollProgress = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate progress based on section visibility
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight))
      );

      setScrollProgress(progress);
      console.log("Scroll Progress:", progress); // Debug
    };

    // Subscribe to Lenis scroll events
    const unsubscribe = lenisRef.current.on("scroll", updateScrollProgress);

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [lenisRef]);

  // Calculate transforms based on scroll progress
  const backgroundY = `${scrollProgress * 50}%`;
  const titleY = scrollProgress < 0.5 ? `${scrollProgress * -200}%` : "-100%";
  const titleOpacity = scrollProgress < 0.5 ? 1 - scrollProgress * 2 : 0;

  const products = [
    {
      name: "Blue Shyness",
      description:
        "Hương vị thanh mát với hương thơm tự nhiên, mang lại cảm giác tươi mới và sảng khoái cho mọi khoảnh khắc. Sản phẩm được chế biến từ những nguyên liệu tự nhiên chất lượng cao, đảm bảo hương vị authentic và lợi ích sức khỏe tối ưu.",
      image: "/menu_convert/BLUE SHYNESS_clipped_rev_1.png",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      features: [
        "Thanh mát tự nhiên",
        "Hương thơm đặc trưng",
        "Sảng khoái tức thì",
      ],
      benefits: [
        "Tăng cường miễn dịch",
        "Cải thiện tiêu hóa",
        "Giải độc cơ thể",
      ],
      rating: 4.9,
      reviews: 128,
    },
    {
      name: "Raspmerry",
      description:
        "Sự kết hợp hoàn hảo giữa vị chua ngọt của quả mâm xôi và hương thơm đặc trưng, tạo nên một trải nghiệm hương vị độc đáo. Mỗi ngụm đều mang đến cảm giác tươi mới và năng lượng tích cực.",
      image: "/menu_convert/RASPMERRY_clipped_rev_1.png",
      color: "from-pink-500 to-rose-400",
      bgColor: "bg-pink-50",
      features: [
        "Chua ngọt cân bằng",
        "Hương thơm đặc trưng",
        "Năng lượng tích cực",
      ],
      benefits: ["Chống oxy hóa", "Tốt cho tim mạch", "Làm đẹp da"],
      rating: 4.8,
      reviews: 156,
    },
    {
      name: "Kitamint",
      description:
        "Hương vị bạc hà tươi mới với chút cay nồng, tạo cảm giác sảng khoái tức thì và làm mới hơi thở. Sản phẩm lý tưởng cho những ai yêu thích hương vị mạnh mẽ và tươi mát.",
      image: "/menu_convert/KITAMINT_clipped_rev_1.png",
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-green-50",
      features: ["Bạc hà tươi mới", "Cay nồng vừa phải", "Sảng khoái tức thì"],
      benefits: ["Làm mới hơi thở", "Giảm căng thẳng", "Tăng tập trung"],
      rating: 4.7,
      reviews: 142,
    },
    {
      name: "Mintgo",
      description:
        "Sự kết hợp độc đáo giữa bạc hà và các loại thảo mộc tự nhiên, mang lại hương vị đặc biệt và lợi ích sức khỏe toàn diện. Một sản phẩm premium dành cho những người am hiểu.",
      image: "/menu_convert/MINTGO_clipped_rev_1.png",
      color: "from-emerald-500 to-teal-400",
      bgColor: "bg-emerald-50",
      features: ["Thảo mộc tự nhiên", "Hương vị độc đáo", "Premium quality"],
      benefits: [
        "Thư giãn tinh thần",
        "Cải thiện giấc ngủ",
        "Tăng cường sức khỏe",
      ],
      rating: 4.9,
      reviews: 134,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img_component/bg_2_component.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Animated Background - Optimized with CSS */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        {/* Floating geometric shapes - Using CSS animations for better performance */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-slate-200 rounded-full opacity-30 animate-float"></div>
        <div
          className="absolute bottom-40 right-20 w-24 h-24 bg-slate-100 rounded-full opacity-40 animate-float"
          style={{ animationDelay: "1s" }}></div>
        <div
          className="absolute top-1/2 left-10 w-16 h-16 border border-slate-200 rounded-lg transform rotate-45 opacity-25 animate-float"
          style={{ animationDelay: "2s" }}></div>
        <div
          className="absolute bottom-1/3 right-10 w-20 h-20 bg-slate-100 rounded-lg transform -rotate-45 opacity-35 animate-float"
          style={{ animationDelay: "3s" }}></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          {/* Section Badge */}
          <div
            className="inline-flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}>
            <ShoppingBag size={16} />
            <span>Premium Collection</span>
          </div>

          {/* Title */}
          <div
            ref={titleRef}
            style={{
              transform: `translateY(${titleY})`,
              opacity: titleOpacity,
            }}>
            <h2
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}>
              Sản phẩm
              <br />
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                của chúng tôi
              </span>
            </h2>
            <div
              className="w-24 h-0.5 bg-slate-900 rounded-full mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>

          {/* Subtitle */}
          <p
            className="text-xl text-slate-600 mt-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}>
            Khám phá bộ sưu tập premium được chế biến từ nguyên liệu tự nhiên và
            chất lượng ngoại trừ
          </p>
        </div>

        {/* Products Showcase */}
        <div className="space-y-32">
          {products.map((product, index) => (
            <div
              key={index}
              className={`product-section ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              } flex flex-col lg:flex-row items-center gap-20`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}>
              {/* Product Image */}
              <div
                className="lg:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}>
                <div
                  className={`relative ${product.bgColor} rounded-3xl p-12`}
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    y: -5,
                  }}
                  transition={{ duration: 0.3 }}>
                  <div className="relative w-full h-96 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image w-80 h-80 object-contain drop-shadow-2xl"
                      whileHover={{
                        scale: 1.05,
                        rotate: [0, -2, 2, 0],
                      }}
                      transition={{
                        duration: 0.3,
                        rotate: { duration: 0.6, ease: "easeInOut" },
                      }}
                    />

                    {/* Premium badge */}
                    <div
                      className="absolute -top-4 -right-4 w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}>
                      <Star size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="lg:w-1/2">
                <StickyBox offsetTop={100} offsetBottom={100}>
                  <div
                    className="space-y-8"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}>
                    {/* Product Header */}
                    <div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}>
                      <div className="flex items-center justify-between mb-4">
                        <h3
                          className="text-4xl font-bold text-slate-900"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}>
                          {product.name}
                        </h3>
                        <div
                          className="flex items-center space-x-2 bg-yellow-50 px-3 py-2 rounded-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}>
                          <Star
                            size={16}
                            className="text-yellow-500 fill-current"
                          />
                          <span className="text-sm font-semibold text-slate-800">
                            {product.rating}
                          </span>
                        </div>
                      </div>

                      {/* Color accent line */}
                      <div
                        className={`w-16 h-0.5 bg-gradient-to-r ${product.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      />
                    </div>

                    {/* Description */}
                    <div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}>
                      <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                        <Sparkles size={18} className="text-slate-600" />
                        <span>Key Features</span>
                      </h4>
                      <div className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.8 + idx * 0.1,
                            }}>
                            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                            <span className="text-slate-700 font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}>
                      <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center space-x-2">
                        <Award size={18} className="text-slate-600" />
                        <span>Health Benefits</span>
                      </h4>
                      <div className="space-y-3">
                        {product.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.9 + idx * 0.1,
                            }}>
                            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                            <span className="text-slate-700 font-medium">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Reviews */}
                    <div
                      className="text-sm text-slate-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1.0 }}>
                      {product.reviews} reviews
                    </div>

                    {/* Premium indicator */}
                    <div
                      className="flex items-center space-x-2 text-slate-900 font-semibold"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1.1 }}
                      whileHover={{ scale: 1.02 }}>
                      <Heart
                        size={18}
                        className="fill-current text-slate-900"
                      />
                      <span>Premium Quality</span>
                    </div>
                  </div>
                </StickyBox>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <div
            className="inline-flex items-center space-x-8 bg-slate-900 text-white rounded-full px-8 py-4"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}>
            <span className="font-semibold">Premium Quality</span>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <span className="font-semibold">Natural Ingredients</span>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <span className="font-semibold">Handcrafted</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
