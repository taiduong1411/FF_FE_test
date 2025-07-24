import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiMenu,
  FiX,
  FiFileText,
  FiChevronsLeft,
  FiChevronRight,
  FiBookOpen,
  FiEdit3,
  FiLogOut,
  FiMessageCircle,
  FiDroplet,
  FiImage,
  FiGrid,
  FiEye,
  FiGlobe,
  FiBarChart2,
} from "react-icons/fi";

const menuItems = [
  {
    path: "/admin/dashboard",
    icon: <FiHome className="w-5 h-5" />,
    title: "Dashboard",
    description: "Tổng quan hệ thống",
  },
  {
    path: "/admin/pages",
    icon: <FiGrid className="w-5 h-5" />,
    title: "Quản lý trang",
    description: "Tạo & chỉnh sửa trang",
    children: [
      {
        path: "/admin/pages/layout",
        icon: <FiGrid className="w-4 h-4" />,
        title: "Bố cục trang",
        description: "Tạo & chỉnh sửa layout",
      },
      {
        path: "/admin/pages/themes",
        icon: <FiDroplet className="w-4 h-4" />,
        title: "Giao diện",
        description: "Quản lý theme & màu sắc",
      },
      {
        path: "/admin/pages/components",
        icon: <FiEdit3 className="w-4 h-4" />,
        title: "Components",
        description: "Thư viện components",
      },
      {
        path: "/admin/pages/media",
        icon: <FiImage className="w-4 h-4" />,
        title: "Media",
        description: "Quản lý hình ảnh & file",
      },
      {
        path: "/admin/pages/content",
        icon: <FiBookOpen className="w-4 h-4" />,
        title: "Nội dung",
        description: "Bài viết & trang tĩnh",
      },
    ],
  },
  {
    path: "/admin/users",
    icon: <FiUsers className="w-5 h-5" />,
    title: "Người dùng",
    description: "Quản lý tài khoản",
  },
  {
    path: "/admin/analytics",
    icon: <FiBarChart2 className="w-5 h-5" />,
    title: "Thống kê",
    description: "Báo cáo & phân tích",
  },
  {
    path: "/admin/contact",
    icon: <FiMessageCircle className="w-5 h-5" />,
    title: "Liên hệ",
    description: "Quản lý tin nhắn",
  },
  {
    path: "/admin/settings",
    icon: <FiSettings className="w-5 h-5" />,
    title: "Cài đặt",
    description: "Cấu hình hệ thống",
  },
];

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    return saved ? JSON.parse(saved) : false;
  });
  const [expandedItems, setExpandedItems] = useState(new Set());
  const location = useLocation();

  // const { userData } = useContext(UserContext);
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleExpanded = (itemPath) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemPath)) {
        newSet.delete(itemPath);
      } else {
        newSet.add(itemPath);
      }
      return newSet;
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const handlePreview = () => {
    window.open("/", "_blank");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-3 rounded-xl bg-slate-800 border border-slate-600 shadow-xl hover:bg-slate-700 transition-all duration-200 backdrop-blur-sm"
        onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FiX className="w-6 h-6 text-slate-300 hover:text-white" />
        ) : (
          <FiMenu className="w-6 h-6 text-slate-300 hover:text-white" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`lg:sticky fixed lg:top-0 top-0 left-0 h-screen bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl transition-all duration-300 ease-in-out z-40 flex flex-col
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 ${isCollapsed ? "lg:w-16" : "lg:w-64"}`}>
        {/* Logo Section */}
        <div className="p-4 border-b border-slate-700/50 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <FiGlobe className="w-5 h-5 text-white" />
              </div>
              <div
                className={`transition-all duration-300 ${
                  isCollapsed
                    ? "opacity-0 scale-95 hidden lg:hidden"
                    : "opacity-100 scale-100"
                }`}>
                <h1 className="text-base font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent whitespace-nowrap">
                  FF CMS
                </h1>
                <p className="text-xs text-slate-400 whitespace-nowrap">
                  Premium Kombucha
                </p>
              </div>
            </div>

            {/* Desktop Collapse Button */}
            <button
              className="hidden lg:flex p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition-all duration-200 items-center justify-center"
              onClick={toggleCollapse}>
              <FiChevronsLeft
                className={`w-4 h-4 text-slate-300 hover:text-white transition-all duration-300 ${
                  isCollapsed ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <nav className="flex-1 p-3 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
            {menuItems.map((item, index) => (
              <div key={index}>
                {/* Parent Menu Item */}
                <div
                  className={`group relative flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                    location.pathname === item.path ||
                    location.pathname.startsWith(item.path + "/")
                      ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white border border-green-500/30 shadow-lg"
                      : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                  }`}
                  onClick={() => {
                    if (item.children) {
                      toggleExpanded(item.path);
                    } else {
                      window.location.href = item.path;
                    }
                  }}>
                  <div
                    className={`flex-shrink-0 transition-all duration-200 ${
                      location.pathname === item.path ||
                      location.pathname.startsWith(item.path + "/")
                        ? "text-green-400 scale-110"
                        : "group-hover:text-green-400 group-hover:scale-105"
                    }`}>
                    {item.icon}
                  </div>
                  <div
                    className={`transition-all duration-300 flex-1 ${
                      isCollapsed
                        ? "opacity-0 scale-95 hidden lg:hidden"
                        : "opacity-100 scale-100"
                    }`}>
                    <div className="font-medium text-sm leading-tight">
                      {item.title}
                    </div>
                    <div
                      className={`text-xs transition-colors duration-200 ${
                        location.pathname === item.path ||
                        location.pathname.startsWith(item.path + "/")
                          ? "text-green-300"
                          : "text-slate-400 group-hover:text-slate-300"
                      }`}>
                      {item.description}
                    </div>
                  </div>

                  {/* Expand/Collapse arrow for items with children */}
                  {item.children && !isCollapsed && (
                    <div
                      className={`transition-transform duration-200 ${
                        expandedItems.has(item.path) ? "rotate-90" : ""
                      }`}>
                      <FiChevronRight className="w-4 h-4" />
                    </div>
                  )}

                  {/* Active indicator */}
                  {(location.pathname === item.path ||
                    location.pathname.startsWith(item.path + "/")) && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-400 rounded-r-full" />
                  )}

                  {/* Collapsed tooltip */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 border border-slate-600 shadow-xl">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-slate-400">
                        {item.description}
                      </div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 border-l border-b border-slate-600 rotate-45" />
                    </div>
                  )}
                </div>

                {/* Child Menu Items */}
                {item.children &&
                  expandedItems.has(item.path) &&
                  !isCollapsed && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.path}
                          className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                            location.pathname === child.path
                              ? "bg-gradient-to-r from-green-500/15 to-emerald-500/15 text-white border border-green-500/20 shadow-md"
                              : "text-slate-300 hover:bg-slate-700/30 hover:text-white"
                          }`}>
                          <div
                            className={`flex-shrink-0 transition-all duration-200 ${
                              location.pathname === child.path
                                ? "text-green-400 scale-105"
                                : "group-hover:text-green-400 group-hover:scale-105"
                            }`}>
                            {child.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm leading-tight">
                              {child.title}
                            </div>
                            <div
                              className={`text-xs transition-colors duration-200 ${
                                location.pathname === child.path
                                  ? "text-green-300"
                                  : "text-slate-400 group-hover:text-slate-300"
                              }`}>
                              {child.description}
                            </div>
                          </div>

                          {/* Active indicator for child */}
                          {location.pathname === child.path && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-emerald-400 rounded-r-full" />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </nav>
        </div>

        {/* User Profile Section */}
        <div className="mt-auto p-3 border-t border-slate-700/50 bg-slate-800/50 backdrop-blur-sm flex-shrink-0">
          {/* Expanded State */}
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img
                  src={"https://via.placeholder.com/40"}
                  alt="User"
                  className="w-10 h-10 rounded-xl object-cover border-2 border-slate-600 shadow-lg"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800 shadow-sm"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">
                  {"Marketing Team"}
                </p>
                <p className="text-xs text-slate-400 truncate">
                  {"admin@ffkombucha.com"}
                </p>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={handlePreview}
                  className="p-2 hover:bg-green-600 rounded-lg transition-all duration-200 text-slate-400 hover:text-white"
                  title="Xem website">
                  <FiEye className="w-4 h-4" />
                </button>
                <button
                  className="p-2 hover:bg-slate-700 rounded-lg transition-all duration-200 text-slate-400 hover:text-white"
                  title="Cài đặt">
                  <FiSettings className="w-4 h-4" />
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 hover:bg-red-600 rounded-lg transition-all duration-200 text-slate-400 hover:text-white"
                  title="Đăng xuất">
                  <FiLogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Collapsed State */}
          {isCollapsed && (
            <div className="hidden lg:flex flex-col items-center gap-3">
              {/* Avatar */}
              <div className="relative group">
                <img
                  src={"https://via.placeholder.com/32"}
                  alt="User"
                  className="w-8 h-8 rounded-lg object-cover border-2 border-slate-600 shadow-lg"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800 shadow-sm"></div>

                {/* Avatar tooltip */}
                <div className="absolute left-full ml-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 border border-slate-600 shadow-xl">
                  <div className="font-medium">{"Marketing Team"}</div>
                  <div className="text-xs text-slate-400">
                    {"admin@ffkombucha.com"}
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 border-l border-b border-slate-600 rotate-45" />
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-1">
                <button
                  onClick={handlePreview}
                  className="p-2 hover:bg-green-600 rounded-lg transition-all duration-200 text-slate-400 hover:text-white relative group"
                  title="Xem website">
                  <FiEye className="w-4 h-4" />
                  <div className="absolute left-full ml-3 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 border border-slate-600">
                    Xem website
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 border-l border-b border-slate-600 rotate-45" />
                  </div>
                </button>
                <button
                  className="p-2 hover:bg-slate-700 rounded-lg transition-all duration-200 text-slate-400 hover:text-white relative group"
                  title="Cài đặt">
                  <FiSettings className="w-4 h-4" />
                  <div className="absolute left-full ml-3 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 border border-slate-600">
                    Cài đặt
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 border-l border-b border-slate-600 rotate-45" />
                  </div>
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 hover:bg-red-600 rounded-lg transition-all duration-200 text-slate-400 hover:text-white relative group"
                  title="Đăng xuất">
                  <FiLogOut className="w-4 h-4" />
                  <div className="absolute left-full ml-3 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 border border-slate-600">
                    Đăng xuất
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 border-l border-b border-slate-600 rotate-45" />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Sidebar;
