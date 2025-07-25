/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9f4",
          100: "#dcf2e3",
          200: "#bce5cc",
          300: "#8dd1a8",
          400: "#5bb57e",
          500: "#4a7c59",
          600: "#3d6a4d",
          700: "#345741",
          800: "#2c5530",
          900: "#1e3a21",
        },
        secondary: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#6c757d",
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#000000",
        },
      },
      fontFamily: {
        sans: ["Noto Sans", "Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite", // Optimized duration
        "bounce-slow": "bounce 3s infinite", // Optimized duration
        "fade-in": "fadeIn 0.3s ease-in-out", // Reduced duration
        "slide-up": "slideUp 0.6s ease-out", // Reduced duration
        "slide-down": "slideDown 0.6s ease-out", // Reduced duration
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(180deg)" }, // Reduced movement
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" }, // Reduced distance
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-50px)", opacity: "0" }, // Reduced distance
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
