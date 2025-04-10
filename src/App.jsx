// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Cursor from "./components/Cursor";
import AppRoutes from "./router";
import { AnimatePresence, motion } from "framer-motion";

import "./styles/themes.scss";
import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === "light" ? false : true;
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="app-layout">
      <Cursor />
      <Navbar />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <ScrollToTop />

      <main className="content">
        <AnimatePresence exitBeforeEnter>
          <AppRoutes />
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
