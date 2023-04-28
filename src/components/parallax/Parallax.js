import React from "react";
import classes from "./Parallax.module.css";
const Parallax = () => {
  return (
    <div className={classes.ParallaxVideo}>
      <video autoPlay muted loop>
        <source
          src="https://video.wixstatic.com/video/11062b_9c77d10fbe6d4bdfbffe3f7ff1cabd03/1080p/mp4/file.mp4"
          type="video/mp4"
        ></source>
      </video>
      <div className={classes.parallaxText}>
        <h1>India Discards more than 200 Million coffee cups a year</h1>
        <h3>
          Join us in our mission towards reducing our Carbon Footprint and
          making India a Zero-waste Circular Economy
        </h3>
      </div>
    </div>
  );
};

export default Parallax;
