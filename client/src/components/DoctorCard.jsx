import "../styles/doctorcard.css";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DoctorCard = ({ ele }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const navigate = useNavigate();
  const handleModal = () => {
    if (!localStorage.getItem("token")) {
      toast.error("first you login to book appointment", {
        className: "bg-dark text-light",
      });
      navigate("/login");
    } else {
      navigate("/apply-doctors");
    }
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`card`}
    >
      <div className={`card-img flex-center`}>
        <img
          src={
            ele.pic ||
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="profile"
        />
      </div>
      <h3 className="card-name">Dr. {ele.firstname + " " + ele.lastname}</h3>
      <p className="specialization">
        <strong>Specialization: </strong>
        {ele?.specialization}
      </p>
      <p className="experience">
        <strong>Experience: </strong>
        {ele?.experience}yrs
      </p>
      <p className="fees">
        <strong>Fees per consultation: </strong>Rs {ele?.fees}
      </p>
      <p className="phone">
        <strong>Phone: </strong>
        {ele?.mobile}
      </p>
      <motion.button
        whileHover={{ scale: 1.2 }}
        className="btn appointment-btn"
        onClick={handleModal}
      >
        Book Appointment
      </motion.button>
      <Toaster />
    </motion.div>
  );
};

export default DoctorCard;
