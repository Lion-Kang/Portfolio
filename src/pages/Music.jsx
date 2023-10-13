import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import "../App.css";

function Music() {
  return (
    <div>
      <h1>Music</h1>
      <nav className="link-layout">
        <Link to="/" className="inactive">
          Home
        </Link>
        <NavLink to="/projects" className="inactive">
          Projects
        </NavLink>
        <NavLink to="/resume" className="inactive">
          Resume
        </NavLink>
        <NavLink to="/music" className="active">
          Music
        </NavLink>
      </nav>
    </div>
  );
}

export default Music;
