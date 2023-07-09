import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import Empty from "../components/Empty";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [appointments, setAppointmnets] = useState([]);
  const [token, setToken] = useState(false);
  let number = 1;
  const navigator = useNavigate();
  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/appointments/");
      setAppointmnets(res.data.message);
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAppointments();
    const token = localStorage.getItem("token");
    if (!token) {
      setToken(true);
    }
  }, []);
  return (
    <>
      <Navbar />
      {token ? (
        <>
          <h1 className="text-center my-5">
            First you need to login or register{" "}
            <div className="container d-flex">
              <button
                className="btn btn-primary"
                onClick={() => navigator("/login")}
              >
                Login
              </button>
              <button
                className="btn btn-primary"
                onClick={() => navigator("/register")}
              >
                Register
              </button>
            </div>
          </h1>
        </>
      ) : (
        <div className="container">
          <h1>Appointments</h1>
          <table className="table" key={appointments._id}>
            <thead>
              <tr>
                <th scope="col">Sl.no</th>
                <th scope="col">Doctor</th>
                <th scope="col">date</th>
                <th scope="col">time</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <>
                  <tr key={appointment._id}>
                    <td>{number++}</td>
                    <td>{appointment.doctorName}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>
                      {appointment.status == false ? (
                        <p className="text-danger">Pending</p>
                      ) : (
                        <p className="text-sucess">Approved</p>
                      )}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Dashboard;
