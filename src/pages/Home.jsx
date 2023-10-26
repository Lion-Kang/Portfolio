import { NavLink, Link } from "react-router-dom";
import React from "react";
import "../App.css";

function Home() {
  return (
    <div>
      <h1>Hi traveler, I'm Brice.</h1>

      <div className="link-container">
        <nav className="link-layout">
          <Link to="/" className="active">
            Home
          </Link>
          <NavLink to="/projects" className="inactive">
            Projects
          </NavLink>
          <NavLink to="/resume" className="inactive">
            Resume
          </NavLink>
          <NavLink to="/music" className="inactive">
            Music
          </NavLink>
        </nav>
      </div>
      <h3 className="home-text">
        I make websites.🖥️ <br />I make music.🎹
        <br /> Let's work.
      </h3>
    </div>
  );
}

export default Home;
