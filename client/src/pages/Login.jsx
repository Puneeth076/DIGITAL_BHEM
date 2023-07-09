import React, { useRef, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { showLoding, hideLoding } from "../store/features/alertSlice";
import "./pages.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { loginToaster } from "../components/Toaster";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef();
  const pwdRef = useRef();

  const handleData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (loginToaster(userData.email, userData.password)) {
      try {
        dispatch(showLoding());
        axios
          .post("/api/v1/users/login", {
            email: userData.email,
            password: userData.password,
          })
          .then((res) => {
            dispatch(hideLoding());
            if (res.data.status) {
              toast.success("Register successfully", {
                position: "top-center",
                className: "bg-dark text-light",
              });
              localStorage.setItem("token", res.data.token);
              console.log(res.data.message);
              message.success("login succesfully");
              navigator("/");
            } else {
              toast.error(res.data.message, {
                position: "top-center",
                className: "bg-dark text-light",
              });
            }
          });
      } catch (error) {
        dispatch(hideLoding());
        console.log(error);
        toast.error("Something went wrong", {
          position: "top-center",
          className: "bg-dark text-light",
        });
      }
      emailRef.current.value = "";
      pwdRef.current.value = "";
    }
  };

  return (
    <div className="image">
      <Navbar />
      <motion.div
        initial={{ x: "500" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, stiffness: 2 }}
        className="wrapper login"
      >
        <div className="text-center mt-4 name">Smile</div>
        <div className="p-3 mt-3">
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
              ref={pwdRef}
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
            whileHover={{ scale: 1.1 }}
            className="btn mt-3"
          >
            Sign in
          </motion.button>
        </div>
        <div className="text-center fs-6">
          Don't have an account ?<Link to="/register">Sign up</Link>
        </div>
      </motion.div>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Login;
