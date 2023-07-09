import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { message } from "antd";
import { showLoding, hideLoding } from "../store/features/alertSlice";
import toast, { Toaster } from "react-hot-toast";
import { BsFillCalendarCheckFill, BsAlarmFill } from "react-icons/bs";
import "./pages.css";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const [details, setDetails] = useState({ date: "", time: "" });
  const [showBtn, setShowBtn] = useState(false);
  const [showAvailabolity, setShowAvailability] = useState(false);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const Availability = [
    {
      id: 1,
      date: details.date,
      time: "12:00",
    },
    {
      id: 2,
      date: details.date,
      time: "14:00",
    },
    {
      id: 3,
      date: details.date,
      time: "16:00",
    },
  ];

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const tostOption = {
    position: "top-center",
    duration: 4000,
    className: "bg-dark text-light",
  };
  const handleSubmit = () => {
    setShowAvailability(true);
  };
  const names = ["Puneeth", "Kumar", "Priyanka"];
  const random = Math.floor(Math.random() * names.length);
  const handleAvailability = async () => {
    try {
      dispatch(showLoding());
      await axios
        .post("/api/v1/appointments/", {
          name: names[random],
          date: details.date,
          time: details.time,
        })
        .then((res) => {
          dispatch(hideLoding());
          if (res.data.status) {
            message.success("Appointment booked successfully");
            navigator("/appointments");
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
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Book your appointment</h1>
        <div className="d-flex flex-column">
          <div className="register-form d-flex flex-column">
            <input
              type="date"
              name="date"
              className="form-input"
              value={details.date}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="time"
              name="time"
              className="form-input"
              value={details.time}
              onChange={(e) => {
                handleChange(e);
                setShowBtn(true);
              }}
            />
            {showBtn && (
              <button
                type="submit"
                className="btn form-btn"
                onClick={handleSubmit}
              >
                Check availability
              </button>
            )}
          </div>
        </div>
      </div>
      {showAvailabolity && (
        <>
          <h1 className="text-center m-5">Availabilities</h1>
          <div className="container d-flex flex-row">
            {Availability.map((avail) => {
              return (
                <div className="">
                  <div className="register-form">
                    <h1>Available At</h1>
                    <h3>
                      <BsFillCalendarCheckFill />
                      {avail.date}
                    </h3>
                    <h3>
                      <BsAlarmFill />
                      {avail.time}
                    </h3>

                    <button
                      className="cssbuttons-io-button"
                      onClick={handleAvailability}
                    >
                      {" "}
                      Book Appoitment
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
      <Toaster />
      <Footer />
    </>
  );
};
export default Appointments;
