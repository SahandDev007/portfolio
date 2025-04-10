import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.scss";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.div
      className="theme-toggle"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onClick={() => setDarkMode(!darkMode)}
      title={`Switch to ${darkMode ? "Light" : "Dark"} mode`}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </motion.div>
  );
};

export default ThemeToggle;
