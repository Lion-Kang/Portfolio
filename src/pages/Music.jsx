import React from "react";
import { NavLink, Link } from "react-router-dom";
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
      <div className="soundcloud-link">
        <a href="#">SoundCloud (link icon)</a>
      </div>
      <div className="software-hardware-container">
        <div className="software-hardware-item">
          <h3>Software</h3>
          <p>Ableton Live 11</p>
          <p>Splice</p>
        </div>
        <div className="software-hardware-item">
          <h3>Hardware</h3>
          <p>Volt</p>
          <p>Roland JD-Xi</p>
        </div>
      </div>
      <div className="music-outer-container">
        <div className="music-container">
          <div className="music-item">
            <h3>Electronic Dance Music (EDM)</h3>
            <p>House, Drum and Bass, Dubstep</p>
          </div>
          <br />
          <div className="music-item">
            <h3>Non-EDM</h3>
            <p>R&B, Hip Hop, Pop</p>
          </div>
          <br />
        </div>
        <div className="music-container">
          <div className="music-item">
            <h3>Festivals I've attended</h3>
            <p>Electric Daisy Carnival (EDC)</p>
            <p>Bass Canyon</p>
            <p>Thunderdome</p>
            <p>Lost Lands</p>
            <p>Ever After</p>
          </div>
          <br />
          <div className="music-item">
            <h3>Want to attend</h3>
            <p>Shambala</p>
            <p>Electric Forest</p>
            <p>Paradise Blue</p>
            <p>Ultra Miami</p>
          </div>
        </div>
      </div>
      <h3>Hobbies</h3>
      <p>Basketball</p>
      <p>Skateboarding</p>
      <p>Snowboarding</p>
      <p>Martial Arts</p>
      <h3>Bucket List</h3>
      <p>Hot Air Balloon ride</p>
      <p>Skydiving</p>
      <p>Yacht/Cruise Ship</p>
      <div className="top-button">
        <a href="#">Back to top</a>
      </div>
    </div>
  );
}

export default Music;
