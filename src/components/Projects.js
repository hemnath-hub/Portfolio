import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="card">
        <h3>PEP-AI</h3>

        <p>
          Population data management dashboard using
          Java, Spring Boot and MySQL.
        </p>

        <a
          href="https://github.com/hemnath-hub/PEP-DashBoard"
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      </div>
    </section>
  );
}

export default Projects;
