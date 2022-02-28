import React, { useState } from "react";
import "./styles.scss";

const HoverAround = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const [ax, setAX] = useState();
  const [ay, setAY] = useState();

  const onMouseMove = (e) => {
    setAX(-(width / 2 - e.pageX) / 20);
    setAY((height / 2 - e.pageY) / 10);
  };
  return (
    <div onMouseMove={onMouseMove} className="root">
      <div
        className="card"
        style={{ transform: `rotateY(${ax}deg) rotateX(${ay}deg)` }}
      >
        <div className="card-content">
          <h1>Just hover around</h1>
          <p>
            <small>
              by{" "}
              <a
                href="https://www.fiverr.com/share/vLevr"
                target="_blank"
                rel="noreferrer"
              >
                Ariona, Rian
              </a>
            </small>
          </p>
          <p className="related">
            <strong>See also: </strong>
            <a
              href="https://codepen.io/ariona/details/LVZLGP/"
              target="_blank"
              rel="noreferrer"
            >
              Staged dropdown animation
            </a>
          </p>
        </div>
      </div>

      <div className="iklan">
        <p>Need PSD to HTML & CSS service?</p>
        <a
          href="https://www.fiverr.com/share/vLevr"
          target="_blank"
          rel="noreferrer"
        >
          Start from <strong>$50</strong>
        </a>
      </div>
    </div>
  );
};
export default HoverAround;
