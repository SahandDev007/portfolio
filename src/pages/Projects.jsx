import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../utils/project";
import "./Projects.scss";

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="projects-page">
      <Fade direction="up" triggerOnce>
        <h1 className="section-title">
          🚀 Projects <span className="glow-badge">20+ Built</span>
        </h1>
      </Fade>

      <div className="project-grid">
        {projects.map((project, index) => {
          const showMore = project.description.length > 110;
          const isExpanded = expanded[index];

          return (
            <Fade
              key={index}
              cascade
              damping={0.1}
              direction="up"
              duration={400}
              triggerOnce
              fraction={0.2} // Triggers earlier
            >
              <div className="project-card">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p
                    className={`project-description ${
                      isExpanded ? "expanded" : ""
                    }`}
                  >
                    {project.description}
                  </p>
                  {showMore && (
                    <button
                      className="show-more-btn"
                      onClick={() => toggleExpand(index)}
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  )}

                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Source Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
