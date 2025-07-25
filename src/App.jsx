import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LenisContext } from "./contexts/LenisContext";
import LandingPage from "./page/LandingPage/LandingPage";
import Survey from "./page/Survey/Survey";
import Dashboard from "./page/Admin/Dashboard";
import Theme from "./page/Admin/Theme/Theme";
import "./App.css";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8, // Giảm để ít lag hơn
      smoothTouch: false,
      touchMultiplier: 1.5, // Giảm để ít lag hơn
      infinite: false,
      lerp: 0.1, // Thêm lerp để mượt hơn
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/survey" element={<Survey />} />
          {/* <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/theme" element={<Theme />} /> */}
        </Routes>
      </Router>
    </LenisContext.Provider>
  );
}

export default App;
