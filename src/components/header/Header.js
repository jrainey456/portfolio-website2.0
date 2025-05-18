import React from "react";
import "./Header.css";
import rain from "../../assets/mp4/bridge.mp4";
import Resume from "../../assets/misc/Resume.pdf";

export default function Header() {
  return (
    <section className="header-container" id="home">
      <div className="scroll-background">
        <video autoPlay muted loop>
          <source src={rain} type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <h5>Hello I'm</h5>
        <h1>John Rainey</h1>
        <h5>Fullstack Developer</h5>
        <div className="header-button-container">
          <a href="#projects" className="btn">
            PROJECTS
          </a>
          <a href="#about" className="btn">
            ABOUT
          </a>
          <a href={Resume} download className="btn">
            RESUME
          </a>
        </div>
      </div>
    </section>
  );
}
