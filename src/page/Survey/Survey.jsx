import React, { useState } from "react";
import StickyBox from "react-sticky-box";
import Navigation from "../../component/Navigation";

const Survey = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    review: "",
  });

  const products = [
    {
      name: "Blue Shyness",
      image: "/menu_convert/BLUE SHYNESS_clipped_rev_1.png",
      batchNumber: "FF-2024-001",
      productionDate: "2024-01-15",
      expiryDate: "2024-07-15",
      description:
        "Blue Shyness là sản phẩm cao cấp với hương vị độc đáo từ quả việt quất và hoa oải hương. Sản phẩm được lên men tự nhiên trong 14 ngày, tạo ra hương vị chua ngọt cân bằng hoàn hảo. Với hàm lượng probiotics cao và không chứa chất bảo quản, Blue Shyness giúp hỗ trợ hệ tiêu hóa và tăng cường sức khỏe tổng thể.",
    },
  ];

  const [selectedProduct] = useState(products[0]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Survey submitted:", {
      product: selectedProduct,
      customer: formData,
    });
    alert("Cảm ơn bạn đã tham gia khảo sát! Chúng tôi sẽ liên hệ sớm nhất.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-emerald-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6 shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            Khảo Sát Sản Phẩm
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chia sẻ trải nghiệm của bạn về sản phẩm FF Premium để chúng tôi có
            thể cải thiện chất lượng phục vụ tốt hơn
          </p>
        </div>

        {/* Main Content - 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          <div className="lg:w-1/2">
            <StickyBox offsetTop={32} offsetBottom={32}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </span>
                  Đánh Giá Sản Phẩm
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Tên khách hàng */}
                  <div>
                    <label
                      htmlFor="customerName"
                      className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <span className="w-5 h-5 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mr-2">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      Họ và tên <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <span className="w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-2">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      Email <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* Số điện thoại */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <span className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-2">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </span>
                      Số điện thoại <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="0123456789"
                    />
                  </div>

                  {/* Nội dung đánh giá */}
                  <div>
                    <label
                      htmlFor="review"
                      className="block text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <span className="w-5 h-5 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mr-2">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </span>
                      Nội dung đánh giá{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      id="review"
                      name="review"
                      value={formData.review}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                      placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm (hương vị, chất lượng, bao bì, v.v.)"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white font-bold py-4 px-8 rounded-2xl hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg">
                    ✨ Gửi Đánh Giá
                  </button>
                </form>

                {/* Additional Info */}
                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl border border-emerald-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">
                      <span className="font-bold">Lưu ý:</span> Thông tin của
                      bạn sẽ được bảo mật và chỉ sử dụng để cải thiện chất lượng
                      sản phẩm.
                    </p>
                  </div>
                </div>
              </div>
            </StickyBox>
          </div>
          {/* Left Column - Product Information */}
          <div className="lg:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                Xuất xứ
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 px-4 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl border border-emerald-100">
                  <span className="font-semibold text-gray-700">
                    Tên sản phẩm:
                  </span>
                  <span className="text-gray-900 font-bold">
                    {selectedProduct.name}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <span className="font-semibold text-gray-700">Số lô:</span>
                  <span className="text-gray-900 font-mono font-bold">
                    {selectedProduct.batchNumber}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 px-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                  <span className="font-semibold text-gray-700">
                    Ngày sản xuất:
                  </span>
                  <span className="text-gray-900 font-bold">
                    {selectedProduct.productionDate}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 px-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-100">
                  <span className="font-semibold text-gray-700">
                    Hạn sử dụng:
                  </span>
                  <span className="text-gray-900 font-bold">
                    {selectedProduct.expiryDate}
                  </span>
                </div>
              </div>

              {/* Product Image */}
              <div className="mt-8 text-center">
                <div className="relative inline-block">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-48 h-auto mx-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Additional Product Info */}
              <div className="mt-8 space-y-4">
                <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-4 border border-emerald-100">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-5 h-5 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mr-2">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    Thông tin bổ sung
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">Thể tích: 330ml</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">Calories: 45</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">Sugar: 8g</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">Protein: 2g</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-2">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    Đặc điểm nổi bật
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">
                        Lên men tự nhiên 14 ngày
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Survey Form */}
        </div>

        {/* Bottom Section - Product Details */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            Chi Tiết Sản Phẩm
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Description */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Mô tả sản phẩm
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {selectedProduct.description}
              </p>

              {/* Product Features */}
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-xl">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Lên men tự nhiên
                    </p>
                    <p className="text-sm text-gray-600">14 ngày lên men</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Không chất bảo quản
                    </p>
                    <p className="text-sm text-gray-600">100% tự nhiên</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Probiotics cao
                    </p>
                    <p className="text-sm text-gray-600">Tốt cho tiêu hóa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nutritional Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-6 border border-emerald-100">
                <h3 className="font-bold text-gray-800 mb-4">
                  Thành phần dinh dưỡng
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-emerald-200">
                    <span className="text-gray-700">Calories</span>
                    <span className="font-bold text-gray-900">45 kcal</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-emerald-200">
                    <span className="text-gray-700">Protein</span>
                    <span className="font-bold text-gray-900">2g</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-emerald-200">
                    <span className="text-gray-700">Carbohydrate</span>
                    <span className="font-bold text-gray-900">8g</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-emerald-200">
                    <span className="text-gray-700">Sugar</span>
                    <span className="font-bold text-gray-900">6g</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Probiotics</span>
                    <span className="font-bold text-gray-900">1 tỷ CFU</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-gray-800 mb-4">
                  Hướng dẫn sử dụng
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Uống 1-2 chai mỗi ngày
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Bảo quản trong tủ lạnh sau khi mở
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Sử dụng trong vòng 7 ngày sau khi mở
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Lắc nhẹ trước khi uống
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
