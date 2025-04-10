import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./Home.scss";

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: 0 },
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 80 },
            color: { value: "#00ffae" },
            size: { value: 2 },
            move: { enable: true, speed: 0.6 },
            links: {
              enable: true,
              distance: 140,
              color: "#00ffae",
              opacity: 0.3,
              width: 1,
            },
          },
        }}
      />

      <div className="hero">
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Harshal Tribhuvan
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Frontend Engineer 👨‍💻",
            1500,
            "React.js + Redux Specialist ⚛️",
            1500,
            "Built Dashboards That Handle Millions 📊",
            1500,
            "UI/UX Enthusiast ✨ Pixel-Perfect Delivery",
            1500,
            "Data Visualization Wizard 🧙‍♂️",
            1500,
            "Performance Optimizer ⚡ 60% Faster Dashboards",
            1500,
            "SCSS + Styled-Components Master 🎨",
            1500,
            "Modern Web Interfaces. Built Right. 🔥",
            1500,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="typed-text"
        />

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <Link to="/projects" className="btn-glow">
            View Projects
          </Link>
          <a href="/resume.pdf" download className="btn-outline">
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
