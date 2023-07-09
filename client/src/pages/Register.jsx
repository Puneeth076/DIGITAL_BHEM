import React, { useRef, useState } from "react";
import "./pages.css";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { showLoding, hideLoding } from "../store/features/alertSlice";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { registertoaster } from "../components/Toaster";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleData = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    if (registertoaster(userData.email, userData.name, userData.password)) {
      try {
        dispatch(showLoding());
        await axios
          .post("/api/v1/users/register", {
            name: userData.name,
            email: userData.email,
            password: userData.password,
          })
          .then((res) => {
            dispatch(hideLoding());
            if (res.data.status) {
              message.success("Register successfully");
              navigator("/login");
            } else {
              dispatch(hideLoding());
              toast.error(res.data.message, {
                position: "top-center",
                className: "bg-dark text-light",
              });
            }
          });
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong", {
          position: "top-center",
          className: "bg-dark text-light",
        });
      }

      // console.log(userData);
      nameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  return (
    <div className="image">
      <Navbar />
      <motion.div
        initial={{ x: "-500" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, stiffness: 2 }}
        className="wrapper register"
      >
        <div className="text-center mt-4 name">Smile</div>
        <div className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              ref={nameRef}
              onChange={(e) => handleData(e)}
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              autoComplete="false"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              ref={emailRef}
              onChange={(e) => handleData(e)}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="false"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              ref={passwordRef}
              onChange={(e) => handleData(e)}
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              autoComplete="false"
            />
          </div>
          <motion.button
            onClick={() => handleSubmit()}
            whileHover={{ scale: 1.2 }}
            className="btn mt-3"
          >
            Sign up
          </motion.button>
        </div>
        <div className="text-center fs-6">
          Have you account already ?<Link to="/login">Sign in</Link>
        </div>
      </motion.div>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Register;
