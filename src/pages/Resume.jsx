import { NavLink, Link } from "react-router-dom";
import React from "react";
import resume from "../assets/resume.pdf";
import reactlogo from "../images/icons/react.png";
import createreactlogo from "../images/icons/create-react-app.png";
import css3 from "../images/icons/css3.png";
import github from "../images/icons/github.png";
import html5 from "../images/icons/html5.png";
import javascript from "../images/icons/javascript.png";
import netlify from "../images/icons/netlify.png";
import nodejs from "../images/icons/nodejs.png";
import sass from "../images/icons/sass.png";
import vite from "../images/icons/vite.png";

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <nav className="link-layout">
        <Link to="/" className="inactive">
          Home
        </Link>
        <NavLink to="/projects" className="inactive">
          Projects
        </NavLink>
        <NavLink to="/resume" className="active">
          Resume
        </NavLink>
        <NavLink to="/music" className="inactive">
          Music
        </NavLink>
      </nav>
      <h2>Tech Stack</h2>
      <div className="tech-stack-outer-container">
        <div className="tech-stack-container">
          <div className="tech-stack-item">
            <h4 className="tech-stack-heading">JavaScript UI</h4>
            <div className="tech-text-container">
              <p className="tech-text">
                <img className="icon-size" src={reactlogo} alt="React Logo" />
                React
              </p>
              <p className="tech-text">
                <img className="icon-size" src={vite} alt="React Logo" />
                Vite
              </p>
            </div>
          </div>
          <div className="tech-stack-item">
            <h4 className="tech-stack-heading">Frameworks</h4>
            <div className="tech-text-container">
              <p className="tech-text">
                <img className="icon-size" src={nodejs} alt="React Logo" />
                Node.js
              </p>
            </div>
          </div>
        </div>
        <div className="tech-stack-container">
          <div className="tech-stack-item">
            <h4 className="tech-stack-heading">Static Web Hosting</h4>
            <div className="tech-text-container">
              <p className="tech-text">
                <img className="icon-size" src={netlify} alt="React Logo" />
                Netlify
              </p>
              <p className="tech-text">
                <img className="icon-size" src={github} alt="React Logo" />
                Github
              </p>
            </div>
          </div>
          <div className="tech-stack-item">
            <h4 className="tech-stack-heading">Version Control</h4>
            <div className="tech-text-container">
              <p className="tech-text">
                <img className="icon-size" src={github} alt="React Logo" />
                Github
              </p>
            </div>
          </div>
        </div>
        <div className="tech-stack-container">
          <div className="tech-stack-item">
            <h4 className="tech-stack-heading">Languages</h4>
            <div className="tech-text-container">
              <p className="tech-text">
                <img className="icon-size" src={javascript} alt="React Logo" />
                JavaScript
              </p>
              <p className="tech-text">
                <img className="icon-size" src={html5} alt="React Logo" />
                HTML
              </p>
              <p className="tech-text">
                <img className="icon-size" src={css3} alt="React Logo" />
                CSS
              </p>
            </div>
          </div>
          <div className="tech-stack-item">
            <h4 className="tech-stack-heading">CSS Pre-processors</h4>
            <div className="tech-text-container">
              <p className="tech-text">
                <img className="icon-size" src={sass} alt="React Logo" />
                Sass
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="embed-container">
        <object data={resume} height="1000px" width="100%"></object>
      </div>

      <div className="top-button">
        <a href="#">Back to top</a>
      </div>
    </div>
  );
}

export default Resume;
