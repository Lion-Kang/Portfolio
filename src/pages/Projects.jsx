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
        <h2>Tech Stack</h2>
        <div className="tech-stack-outer-container">
          <div className="tech-stack-container">
            <div className="tech-stack-item">
              <h4 className="project-text">JavaScript UI</h4>
              <p className="project-text">
                (icon)React, (icon)Create React App, (icon)Vite
              </p>
            </div>
            <div className="tech-stack-item">
              <h4 className="project-text">Frameworks</h4>
              <p className="project-text">(icon)Next.js, (icon)Node.js</p>
            </div>
            <div className="tech-stack-item">
              <h4 className="project-text">Static Web Hosting</h4>
              <p className="project-text">(icon)Netlify, (icon)Github</p>
            </div>
            <div className="tech-stack-item">
              <h4 className="project-text">Version Control</h4>
              <p className="project-text">(icon)Github</p>
            </div>
            <div className="tech-stack-item">
              <h4 className="project-text">Languages</h4>
              <p className="project-text">
                (icon)JavaScript, (icon)HTML, (icon)CSS, (icon)TypeScript
              </p>
            </div>
            <div className="tech-stack-item">
              <h4 className="project-text">CSS Pre-processors</h4>
              <p className="project-text">(icon)Sass</p>
            </div>
          </div>
        </div>
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
        <div className="project-item">
          <h3>Kim's Salon</h3>
          <p className="project-text">
            Beaverton, Oregon local hair stylist Kim has been in business for
            over 3 decades. All of her business has been through word-of-mouth
            and referral. Making a website to meet her online needs was a great
            learning process to solidify my understanding of HTML and CSS.
          </p>
          <p>(Image)</p>
          <img src="" />
        </div>
        <div className="project-item">
          <h3>Diamond Auto Repair</h3>
          <p className="project-text">
            Another Beaverton, Oregon local, Haider works on mechaincal issues
            for foreign and domestic vehicles. As his business gets larger, he
            needed a way to dominate his online presence. Using webflow, I was
            able to quickly produce a wireframe template. I want to eventually
            convert this website into a react app.
          </p>
          <p>(Image)</p>
          <img src="" />
        </div>
        <div className="project-item">
          <h3>StellarScape Technologies</h3>
          <p className="project-text">
            My most recent WordPress project, I created a custom child theme
            from an existing parent theme. I was able to enqueue custom
            JavaScript and CSS. I also organized the CSS using a stylesheet
            preprocessor called Sass. Using a program called Local, I was able
            to host this Wordpress project locally before testing it online.
            Local made it easy to transfer files from my desktop to laptop.
          </p>
          <p>(Image)</p>
          <img src="" />
        </div>
      </div>
      <div className="top-button">
        <a href="#">Back to top</a>
      </div>
    </div>
  );
}

export default Projects;
