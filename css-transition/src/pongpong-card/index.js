import React from "react";
import "./styles.css";

const PongPong = () => {
  return (
    <aside className="profile-card">
      <header>
        <a target="_blank" href="#">
          <img
            alt=""
            src="http://lorempixel.com/150/150/people/"
            className="hoverZoomLink"
          />
        </a>

        <h1>John Doe</h1>

        <h2>Better Visuals</h2>
      </header>

      <div className="profile-bio">
        <p>
          It takes monumental improvement for us to change how we live our
          lives. Design is the way we access that improvement.
        </p>
      </div>

      <ul className="profile-social-links">
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/creativedonut"
            rel="noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/dropyourbass"
            rel="noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/vipulsaxena"
            rel="noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.behance.net/vipulsaxena"
            rel="noreferrer"
          >
            <i className="fa fa-behance"></i>
          </a>
        </li>
      </ul>
    </aside>
  );
};
export default PongPong;
