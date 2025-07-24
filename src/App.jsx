import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage/LandingPage";
import Dashboard from "./page/Admin/Dashboard";
import Theme from "./page/Admin/Theme/Theme";
import Survey from "./page/Survey/Survey";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/theme" element={<Theme />} />
      </Routes>
    </Router>
  );
}

export default App;
