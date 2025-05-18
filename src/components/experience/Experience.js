import React from "react";
import "./Experience.css";
import { FaCode, FaNodeJs, FaReact } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import FadeInSection from "../fadeinsection/FadeInSection";

export default function Experience() {
  return (
    <section  id="experience">
    <FadeInSection>
            <div className="experience-container">
          <h1>Experience</h1>
          <div className="experience-card-container">
            <div className="experience-card">
              <div className="experience-card-header">
                <FaNodeJs />
                <h1>Node.js</h1>
                <h6>3+ years</h6>
              </div>
              <div className="experience-card-body">
                <p> Express API's </p>
                <p> Database Connections </p>
                <p> LDAP authentication</p>
                <p> RESTweb services</p>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-card-header">
                <FaReact />
                <h1>React</h1>
                <h6>3+ years</h6>
              </div>
              <div className="experience-card-body">
                <p> Live Dashboards </p>
                <p> Web Applications </p>
                <p> React Router </p>
                <p> React Bootstrap </p>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-card-header">
                <AiOutlineConsoleSql />
                <h1>SQL Database</h1>
                <h6>6+ years</h6>
              </div>
              <div className="experience-card-body">
                <p>Environment Setup</p>
                <p> Table Design </p>
                <p>Complex Queries</p>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-card-header">
                <FaCode />
                <h1>ASP.NET</h1>
                <h6>2+ years</h6>
              </div>
              <div className="experience-card-body">
                <p>Web Applications</p>
                <p>Console Applications</p>
                <p>Full Stack Development</p>
                <p>Frontend and Backend Intergration</p>
              </div>
            </div>
          </div>
          </div>
    </FadeInSection>
    </section>
  );
}
