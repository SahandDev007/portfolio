import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom"; 
import { FaDownload, FaArrowRight } from "react-icons/fa";
import "./Resume.scss";

const Resume = () => {
  return (
    <div className="resume-page">
      <Fade direction="up" triggerOnce>
        <h1 className="section-title">📄 Resume</h1>
      </Fade>

      <Fade direction="up" delay={100} triggerOnce>
        <p className="intro">
          I'm currently open to exciting frontend opportunities! <br />
          Download my latest resume below and explore some quick highlights.
        </p>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <a href="/resume.pdf" download className="resume-download">
          <FaDownload /> Download Resume
        </a>
      </Fade>

      <Fade direction="up" delay={300} triggerOnce>
        <div className="skills-glance">
          <h2>Skills at a Glance</h2>
          <ul>
            <li>⚛️ React.js, Next.js, Redux, Redux-Observable</li>
            <li>🎯 Pixel-Perfect UI from Figma & Handoff-Ready Designs</li>
            <li>💅 SCSS, Tailwind, Styled-components</li>
            <li>📊 amCharts, Recharts, Chart.js, D3 (Learning)</li>
            <li>🛠️ Git, Postman, Chrome DevTools, Jira</li>
            <li>🎞️ Framer Motion, Animation Systems & Component Reuse</li>
          </ul>
        </div>
      </Fade>

      <Fade direction="up" delay={400} triggerOnce>
        <p className="cta">
          Wanna see what I’ve built? Head over to{" "}
          <Link to="/projects">
            {" "}
            Projects <FaArrowRight />
          </Link>
        </p>
      </Fade>
    </div>
  );
};

export default Resume;
