// src/router.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animation
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  const location = useLocation(); // Get the current location for animations

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Home />
          </motion.div>
        }
      />
      <Route
        path="/about"
        element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
        }
      />
      <Route
        path="/projects"
        element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Projects />
          </motion.div>
        }
      />
      <Route
        path="/resume"
        element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Resume />
          </motion.div>
        }
      />
      <Route
        path="/contact"
        element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
