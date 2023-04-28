import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
// import { BsCart } from "react-icons/bs";

const rubicImage =
  "https://static.wixstatic.com/media/a3c153_b34adfbb2154432cb66b961db0c099b3~mv2.png/v1/fill/w_59,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a3c153_b34adfbb2154432cb66b961db0c099b3~mv2.png";
const hoverRubicImage =
  "https://static.wixstatic.com/media/a3c153_313e78e612ad43f993d87370745c5540~mv2.png/v1/fill/w_59,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a3c153_313e78e612ad43f993d87370745c5540~mv2.png";

const Responsive = () => {
  const [hover, setHover] = useState(false);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img
          src="https://static.wixstatic.com/media/ead566_2c378f27d33a419d8c532250cf2f0d51~mv2.png/v1/fill/w_79,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Earthly%20Logo_edited.png"
          alt="earth logo"
        />
      </div>
      <div className={classes.title}>
        <h1>earthly</h1>
        <p>Sustainable products at affordable prices</p>
      </div>
      <div
        className={classes.rubicCube}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <img src={!hover ? rubicImage : hoverRubicImage} alt="rubicCube" />
      </div>
      <input className={classes.menuBtn} type="checkbox" id="menu-btn" />
      <label className={classes.menuIcon} htmlFor="menu-btn">
        <span className={classes.navicon}></span>
      </label>
      <ul className={classes.menu}>
        <li>
          <Link to={{ pathname: "/" }}>
            <p className={classes.navItem}>Home</p>
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/shop" }}>
            <p className={classes.navItem}>Shop</p>
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/" }}>
            <p className={`${classes.navItem} ${classes.getInTouch}`}>Get In Touch</p>
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/benefits" }}>
            <p className={`${classes.navItem}`}>
              Benefits
            </p>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Responsive;
