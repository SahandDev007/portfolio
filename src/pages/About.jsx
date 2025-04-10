import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaGithub,
  FaReact,
  FaJs,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import {
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiChartdotjs,
  SiPostman,
  SiJira,
} from "react-icons/si";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <Fade direction="up" triggerOnce>
        <h1 className="section-title">About Me</h1>
      </Fade>

      <Fade direction="up" delay={100} triggerOnce>
        <p className="summary">
          I’m a <strong>Frontend Engineer</strong> with{" "}
          <strong>3.4+ years</strong> of experience building scalable, data-rich
          interfaces for industrial platforms. From architecting complex
          dashboards to making every pixel match Figma, I care about code
          quality, performance, and user experience.
        </p>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <div className="section">
          <h2>Tech Stack</h2>
          <div className="tech-icons">
            <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.05}>
              <FaReact title="React.js" />
            </Tilt>

            <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.05}>
              <SiRedux title="Redux / Redux-saga" />
            </Tilt>

            <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.05}>
              <SiNextdotjs title="Next.js" />
            </Tilt>

            <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.05}>
              <FaJs title="JavaScript" />
            </Tilt>

            <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.05}>
              <FaSass title="SCSS" />
            </Tilt>

            <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.05}>
              <FaGithub title="Github" />
            </Tilt>

            <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.05}>
              <FaCss3Alt title="Css" />
            </Tilt>

            <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.05}>
              <SiTailwindcss title="Tailwind CSS" />
            </Tilt>

            <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.05}>
              <SiChartdotjs title="amCharts / Recharts" />
            </Tilt>

            <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.05}>
              <FaGitAlt title="Git" />
            </Tilt>

            <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.05}>
              <SiPostman title="Postman" />
            </Tilt>

            <Tilt glareEnable={true} glareMaxOpacity={0.15} scale={1.05}>
              <SiJira title="Jira" />
            </Tilt>
          </div>
        </div>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <div className="section">
          <h2>Experience Snapshot</h2>
          <ul className="experience-list">
            <li>
              Led frontend development for <strong>SmartSense</strong> – an
              AI/ML-powered IoT platform that ingests millions of data points
              daily.
            </li>
            <li>
              Built high-performance dashboards using{" "}
              <strong>React.js, Redux, amCharts, Recharts</strong>. Boosted
              performance by <strong>50–60%</strong> with memoization, lazy
              loading, and virtualization.
            </li>
            <li>
              Followed strict accessibility and design fidelity using{" "}
              <strong>WCAG, ARIA, Figma</strong>.
            </li>
            <li>
              Mentored peers on reusable component architecture and frontend
              best practices.
            </li>
            <li>
              Collaborated across product, QA, and deployment pipelines using{" "}
              <strong>Git, Jira, Postman</strong>.
            </li>
          </ul>
        </div>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <div className="section">
          <h2>Passion Projects</h2>
          <p>
            Over the past three years, I've embarked on over 35+ side project
            that serve as a testament to my commitment to frontend innovation.
            From developing an AI Resume Critic to crafting a snappy OTP
            component, each project reflects my dedication to enhancing user
            experience and interface design.
          </p>
          <p>
            Notably, I've built full-fledged clones of popular applications like
            Gmail and Snapchat, utilizing technologies such as React.js, Redux,
            Firebase, and Material-UI. These projects not only mirror the
            functionalities of their originals but also incorporate unique
            features that improve performance and usability.
          </p>
          <p>
            Beyond these, my portfolio includes a variety of projects ranging
            from animation-rich UI explorers to complex data visualization
            tools. Each endeavor underscores my passion for micro-interactions,
            performance optimization, and pixel-perfect design.
            <p className="github-cta">
              👉 Check out all my open-source work on{" "}
              <a
                href="https://github.com/harshaltribhuwan?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                GitHub
              </a>
              .
            </p>
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default About;
