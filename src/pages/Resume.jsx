import { NavLink, Link, Outlet } from "react-router-dom";
import React from "react";
import resume from "../assets/resume.pdf";

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
