import React from "react";
import "./Skills.css";

function Skills() {

  const skills = [
    "Java",
    "JavaScript",
    "React JS",
    "Node JS",
    "MySQL",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
