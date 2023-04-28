import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.iconContainer}>
        <div className={`${classes.icons} ${classes.instagram}`}>
          <FaInstagram className={classes.icon} />
        </div>
        <div className={`${classes.icons} ${classes.facebook}`}>
          <FaFacebookF className={classes.icon} />
        </div>
        <div className={`${classes.icons} ${classes.twitter}`}>
          <FaTwitter className={classes.icon} />
        </div>
        <div className={`${classes.icons} ${classes.linkedIn}`}>
          <FaLinkedinIn className={classes.icon} />
        </div>
        <div className={`${classes.icons} ${classes.youTube}`}>
          <FaYoutube className={classes.icon} />
        </div>
      </div>
      <div>
        <p>@2022 earthly.ie</p>
      </div>
    </div>
  );
}

export default Footer;
