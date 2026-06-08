import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Hi, I'm Hemnath P</h1>
      <h2>Full Stack Developer</h2>

      <p>
        I build modern responsive web applications.
      </p>

      <a
        href="https://github.com/hemnath-hub"
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        GitHub
      </a>
    </section>
  );
}

export default Hero;
