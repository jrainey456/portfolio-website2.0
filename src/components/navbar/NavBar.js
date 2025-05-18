import React, { useState, useEffect } from "react";
import { FaCloudMoonRain } from "react-icons/fa";
import "./NavBar.css";

export default function NavBar() {
  const [navColor, setNavColor] = useState(false);
  const [active, setActive] = useState("#");

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id != "#") {
              setActive("#" + entry.target.id);
            } else {
              setActive(entry.target.id);
            }
          }
        });
      },
      { threshold: 1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  window.addEventListener("scroll", changeColor);

  return (
    <div className={navColor ? "nav nav-scroll" : "nav"}>
      <a className="logo-text" href="#" onClick={() => setActive("#")}>
        <FaCloudMoonRain size={30} />
        Rainy Day Development
      </a>
      <div className="nav-menu">
        <a
          href="#about"
          onClick={() => setActive("#about")}
          className={active === "#about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#experience"
          onClick={() => setActive("#experience")}
          className={active === "#experience" ? "active" : ""}
        >
          Experience
        </a>
        <a
          href="#projects"
          onClick={() => setActive("#projects")}
          className={active === "#projects" ? "active" : ""}
        >
          Projects
        </a>

        <a
          href="#contact"
          onClick={() => setActive("#contact")}
          className={active === "#contact" ? "active" : ""}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

/*
<a
          href="#contact"
          onClick={() => setActive("#contact")}
          className={active === "#contact" ? "active" : ""}
        >
          Contact
        </a>
*/
