import React from "react";
import classes from "./Poster.module.css";
const Poster = () => {
  return (
    <div className={classes.posterContainer}>
      <video
        className={classes.posterVideo}
        src="https://video.wixstatic.com/video/11062b_864e63fd5a644da3bdfcf6e164da1efb/1080p/mp4/file.mp4"
        autoPlay
        loop
        muted
      />
      <div className={classes.posterContent}>
        <h1>EARTHLY IS PLANT-BASED AND MADE FROM:</h1>
        <div className={classes.posterContentContainer}>
          <div
            className={classes.textBox}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="2000"
          >
            <h1>BAMBOO AND WHEAT FIBRE</h1>
            <p>
              Sourced from local farmers, plant residue from Wheat, Barley, and
              Bamboo is molded into durable cups using our proprietary
              technology.
            </p>
          </div>
          <div
            className={classes.imageBox}
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-duration="2000"
          >
            <img
              className={classes.rectangular}
              src="https://static.wixstatic.com/media/ead566_972d942e7fcb48e6bc1ecc0ab5afd598~mv2.png/v1/fill/w_797,h_486,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ead566_972d942e7fcb48e6bc1ecc0ab5afd598~mv2.png"
              alt="bamboo fibre"
            />
          </div>
          <div
            className={classes.imageBox}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="2000"
          >
            <img
              className={classes.rectangular}
              src="https://static.wixstatic.com/media/ead566_715f1190768b47d6b438a68d903211ec~mv2.png/v1/fill/w_797,h_532,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ead566_715f1190768b47d6b438a68d903211ec~mv2.png"
              alt="orange fibre"
            />
          </div>
          <div
            className={classes.textBox}
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-duration="2000"
          >
            <h1>ORANGE FIBRE</h1>
            <p>
              Made from Orange peels and other organic matter left behind after
              Orange is harvested.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
