import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./Home.scss";
import { personalData } from "./PersonalData";
import { homeData } from "./HomeData";

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
          {`${personalData.firstName} ${personalData.lastName}`}
        </motion.h1>

        <TypeAnimation
          sequence={[
            ...homeData.title
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
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="btn-outline"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
