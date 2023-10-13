import { NavLink, Link, Outlet } from "react-router-dom";
import React from "react";
import "../App.css";
import tgk from "../../src/images/TGK Website.jpeg";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <nav className="link-layout">
        <Link to="/" className="inactive">
          Home
        </Link>
        <NavLink to="/projects" className="active">
          Projects
        </NavLink>
        <NavLink to="/resume" className="inactive">
          Resume
        </NavLink>
        <NavLink to="/music" className="inactive">
          Music
        </NavLink>
      </nav>
      <div className="projects-container">
        <div className="project-item">
          <h3>Cooking With TGK</h3>
          <p className="project-text">
            Private chef, Todd Gregory King, needed a website to showcase his
            work and gain new clients. Using react + node.js, I made a SPA to
            deliver a fast-working, minimal design. Our design process involved
            screen sharing meetings and updating his revisions in real-time for
            him to see live. This real-time pressure helped me act on his ideas
            as soon as he had them.
          </p>
          <p className="project-text">
            As this project continues to develop, I will implement a payment
            portal for his merch shop using Stripe. His contact form and email
            subscription newsletters will use Google Firebase.{" "}
          </p>
          <img src={tgk} />
        </div>
        <p>Kim's Salon</p>
        <p>Diamond Auto Repair</p>
        <p>StellarScape Technologies</p>
      </div>
    </div>
  );
}

export default Projects;
