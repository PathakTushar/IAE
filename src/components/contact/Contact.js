import React from "react";
import classes from "./Contact.module.css";
import { FaInstagram } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import FormWrapper from "./FormWrapper";
function Contact() {
  return (
    <div className={classes.contactDiv}>
      <div className={classes.contactContainer} data-aos="flip-left" data-aos-duration="2000">
        <div className={classes.contactWrapper}>
          <h1>CONTACT US</h1>
          <p>Surat, Gujarat</p>
          <p>India</p>
          <p>tusharph1@gmail.com</p>
          <p>7667448297</p>
          <div>
            <MdLocationPin className={classes.locationIcon} />
            <FaInstagram className={classes.instaIcon} />
          </div>
          <FormWrapper />
        </div>
        <div className={classes.imageWrapper}>
          <img
            src="https://static.wixstatic.com/media/85f2dda759fc4c3ea3d758c583418515.jpg/v1/fill/w_487,h_844,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/85f2dda759fc4c3ea3d758c583418515.jpg"
            alt="contact"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
/*<div className={classes.contactContainer}>
        <div className={classes.contactWrapper}>
          <h1>CONTACT US</h1>
          <p>16 Liffey Ave, Liffey Valley Park, Lucan, Co. Dublin, K78 HW50</p>
          <p>Ireland</p>
          <p>hello@earthly.ie</p>
          <p>+353 1552 4908</p>
          <div>
            <MdLocationPin className={classes.locationIcon} />
            <FaInstagram className={classes.instaIcon} />
          </div>
          <FormWrapper />
        </div>
        <div className={classes.imageWrapper}>
          <img
            src="https://static.wixstatic.com/media/85f2dda759fc4c3ea3d758c583418515.jpg/v1/fill/w_487,h_844,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/85f2dda759fc4c3ea3d758c583418515.jpg"
            alt="contact"
          />
        </div>
      </div> */