import React from "react";
import { Fade } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";
import "./About.scss";
import { aboutData } from "./AboutData.jsx";
import { personalData } from "./PersonalData.jsx";

const About = () => {
  return (
    <div className="about">
      <Fade direction="up" triggerOnce>
        <h1 className="section-title">About Me</h1>
      </Fade>

      <Fade direction="up" delay={100} triggerOnce>
        <p className="summary">{aboutData.description}</p>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <div className="section">
          <h2>Tech Stack</h2>
          <div className="tech-stack">
            {aboutData.techStack.map((item, index) => {
              return (
                <>
                  <h3>{item.kind}</h3>
                  <div className="tech-icons">
                    {item.skills.map((el, i) => {
                      return (
                        <Tilt
                          glareEnable={true}
                          glareMaxOpacity={0.15}
                          scale={1.05}
                          key={i}
                        >
                          {el}
                        </Tilt>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Fade>
      {aboutData.experienceList && (
        <Fade direction="up" delay={100} triggerOnce>
          <div className="section">
            <h2>Experience Snapshot</h2>
            <ul className="experience-list">
              {aboutData.experienceList.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </Fade>
      )}

      <Fade direction="up" delay={200} triggerOnce>
        <div className="section">
          <h2>Passion Projects</h2>
          {aboutData.passionProjects.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
          <p className="github-cta">
            👉 Check out all my open-source work on{" "}
            <a
              href={`https://github.com/${personalData.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default About;
