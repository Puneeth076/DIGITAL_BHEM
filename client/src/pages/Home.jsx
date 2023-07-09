import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import HomeCircles from "../components/HomeCircles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { message } from "antd";
import axios from "axios";
const Home = () => {
  const navigator = useNavigate();
  const [userdata, setUserData] = useState({});
  const getUserData = async () => {
    const res = await axios.post(
      "/api/v1/users/getUserData",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    console.log(res.data.data);
    setUserData(res.data.data);
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigator("/");
    } else {
      navigator("/");
    }
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <HomeCircles />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
