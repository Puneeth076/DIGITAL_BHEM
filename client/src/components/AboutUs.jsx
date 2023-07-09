import React from "react";
import image from "../assets/doctor.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <motion.img
              initial={{ x: -500 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
              A Doctor Appointment System has a qualifications and information
              of the doctors will be registered by the administrator. The doctor
              should keep track of all of his or her appointments that the
              patient has scheduled. The doctor can also see the patient’s
              details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
