import React from "react";
import classes from "./MapAndJoin.module.css";
const MapAndJoin = () => {
  return (
    <div className={classes.mapAndJoin}>
      <iframe
        title="gmap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59343.24694810053!2d72.97817052760382!3d21.626757603795273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023c4bdb37025%3A0x3412fc29e488a375!2sAnkleshwar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1682659077161!5m2!1sen!2sin"
        width="600px"
        height="450px"
        style={{
          border: 0,
          width: "100vw",
          height: "35vh",
          margin: 0,
          overflow: "hidden",
        }}
        loading="lazy"
      ></iframe>
      <div className={classes.joinContainer}>
        <h1 data-aos="zoom-in" data-aos-duration="1500">Join the Club</h1>
        <h3>
          Join our email list and get access to specials deals exclusive to our
          subscribers.
        </h3>
        <form>
          <input
            type="email"
            placeholder="Enter your email here*"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="2000"
          />
          <button
            type="submit"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="2000"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default MapAndJoin;
