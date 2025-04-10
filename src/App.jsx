// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Cursor from "./components/Cursor";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./router";

import "./styles/themes.scss";
import "./App.scss";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="app-layout">
      <Cursor />
      <Navbar />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="content">
        <ScrollToTop />
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
};

export default App;
