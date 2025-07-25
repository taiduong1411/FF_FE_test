import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Heart,
  Share2,
  Leaf,
} from "lucide-react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tất cả", count: 6 },
    { id: "health", name: "Sức khỏe", count: 2 },
    { id: "lifestyle", name: "Lối sống", count: 2 },
    { id: "recipes", name: "Công thức", count: 2 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Lợi ích sức khỏe của FF Premium",
      excerpt:
        "Khám phá những lợi ích tuyệt vời mà FF Premium mang lại cho sức khỏe của bạn, từ cải thiện tiêu hóa đến tăng cường miễn dịch.",
      image: "/SOURCE/menu_detail/ICE-BLEND/AMAZING MANGO.png",
      category: "health",
      author: "Dr. Nguyễn Thị Anh",
      date: "2024-01-15",
      readTime: "5 phút",
      likes: 128,
      tags: ["Sức khỏe", "FF Premium", "Miễn dịch"],
      featured: true,
    },
    {
      id: 2,
      title: "Cách pha chế FF Premium tại nhà đơn giản",
      excerpt:
        "Hướng dẫn chi tiết cách tự pha chế FF Premium tại nhà với những nguyên liệu tự nhiên và quy trình đơn giản.",
      image: "/SOURCE/menu_detail/ICE-BLEND/APPLES FURY.png",
      category: "recipes",
      author: "Chef Trần Văn Bình",
      date: "2024-01-12",
      readTime: "8 phút",
      likes: 95,
      tags: ["Công thức", "Tự làm", "Nguyên liệu"],
      featured: false,
    },
    {
      id: 3,
      title: "Lối sống lành mạnh với FF Premium",
      excerpt:
        "Tìm hiểu cách tích hợp FF Premium vào lối sống hàng ngày để có một cuộc sống khỏe mạnh và cân bằng hơn.",
      image: "/SOURCE/menu_detail/ICE-BLEND/BLUE SHYNESS.png",
      category: "lifestyle",
      author: "Wellness Coach Lê Thị Cẩm",
      date: "2024-01-10",
      readTime: "6 phút",
      likes: 156,
      tags: ["Lối sống", "Wellness", "Cân bằng"],
      featured: false,
    },
    {
      id: 4,
      title: "So sánh FF Premium với các loại đồ uống khác",
      excerpt:
        "Phân tích chi tiết về lợi ích của FF Premium so với các loại đồ uống khác và tại sao nên chọn FF Premium.",
      image: "/SOURCE/menu_detail/ICE-BLEND/KONG HUSTLE.png",
      category: "health",
      author: "Nutritionist Phạm Hoàng Dũng",
      date: "2024-01-08",
      readTime: "7 phút",
      likes: 203,
      tags: ["So sánh", "Dinh dưỡng", "Lựa chọn"],
      featured: false,
    },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section
      id="blog"
      className="py-24 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img_component/bg3_component.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <motion.div
            className="inline-flex items-center justify-center space-x-2 bg-[#1B4F27] text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <Leaf size={16} />
            <span>Blog & Tin tức</span>
          </motion.div>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Khám phá những bài viết mới nhất về sức khỏe, lối sống và công thức
            chế biến với FF FF Premium
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200"
              }`}>
              {category.name}
              <span className="ml-2 text-sm opacity-70">
                ({category.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}>
                {/* Post Image */}
                <div className="relative h-58 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find((c) => c.id === post.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>
                          {new Date(post.date).toLocaleDateString("vi-VN")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight hover:text-slate-700 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button className="flex items-center space-x-1 text-slate-500 hover:text-emerald-500 transition-colors duration-300">
                        <Heart size={14} />
                        <span className="text-xs">{post.likes}</span>
                      </button>
                      <button className="text-slate-500 hover:text-emerald-500 transition-colors duration-300">
                        <Share2 size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Read More Button - Always at bottom */}
                  <motion.button
                    className="w-full flex items-center justify-center space-x-2 bg-[#1B4F27] text-white py-3 rounded-lg hover:bg-[#153d1f] transition-colors duration-300 mt-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <span>Đọc thêm</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.article>
            ))}
        </div>

        {/* Nút Xem tất cả - bên phải phía dưới */}
        <div className="flex justify-end mt-12">
          <motion.button
            className="flex items-center space-x-2 bg-[#1B4F27] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#153d1f] transition-all duration-300 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <span>Xem tất cả bài viết</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
