import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../components/Empty";

const Doctors = () => {
  const [doctors, setDoctors] = useState([
    {
      firstname: "Priyanka",
      lastname: "Gowda",
      specialization: "Dentist",
      experience: 15,
      fees: 1000,
      mobile: "6363926717",
      pic: "https://tse1.mm.bing.net/th?id=OIP.rzvJIIoK4rs7kpN44Q5YegHaE8&pid=Api&rs=1&c=1&qlt=95&w=159&h=106",
    },
    {
      firstname: "Puneeth",
      lastname: "Gowda",
      specialization: "Cardiologist",
      experience: 10,
      fees: 1000,
      mobile: "6363926717",
      pic: "https://tse1.mm.bing.net/th?id=OIP.8FFAylUNAwhQu7yQgbj9EgHaEl&pid=Api&rs=1&c=1&qlt=95&w=165&h=102",
    },
    {
      pic: "https://tse1.mm.bing.net/th?id=OIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8&pid=Api&rs=1&c=1&qlt=95&w=153&h=102",
      firstname: "Kumar",
      lastname: "Gowda",
      specialization: "Cardiologist",
      experience: 10,
      fees: 1000,
      mobile: "6363926717",
    },
    {
      pic: "https://tse1.mm.bing.net/th?id=OIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8&pid=Api&rs=1&c=1&qlt=95&w=153&h=102",
      firstname: "Kumar",
      lastname: "Gowda",
      specialization: "Cardiologist",
      experience: 10,
      fees: 1000,
      mobile: "6363926717",
    },
    {
      pic: "https://tse1.mm.bing.net/th?id=OIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8&pid=Api&rs=1&c=1&qlt=95&w=153&h=102",
      firstname: "Kumar",
      lastname: "Gowda",
      specialization: "Cardiologist",
      experience: 10,
      fees: 1000,
      mobile: "6363926717",
    },
    {
      pic: "https://tse1.mm.bing.net/th?id=OIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8&pid=Api&rs=1&c=1&qlt=95&w=153&h=102",
      firstname: "Kumar",
      lastname: "Gowda",
      specialization: "Cardiologist",
      experience: 10,
      fees: 1000,
      mobile: "6363926717",
    },
    {
      pic: "https://tse1.mm.bing.net/th?id=OIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8&pid=Api&rs=1&c=1&qlt=95&w=153&h=102",
      firstname: "Kumar",
      lastname: "Gowda",
      specialization: "Cardiologist",
      experience: 10,
      fees: 1000,
      mobile: "6363926717",
    },
    {
      pic: "https://tse1.mm.bing.net/th?id=OIP.Unwzw3FJ3-gpe-ydfkSJmgHaE8&pid=Api&rs=1&c=1&qlt=95&w=153&h=102",
      firstname: "Kumar",
      lastname: "Gowda",
      specialization: "Cardiologist",
      experience: 10,
      fees: 1000,
      mobile: "6363926717",
    },
  ]);

  return (
    <>
      <Navbar />(
      <section className="container doctors">
        <h2 className="page-heading">Our Doctors</h2>
        {doctors.length > 0 ? (
          <div className="doctors-card-container">
            {doctors.map((ele) => {
              return <DoctorCard ele={ele} key={ele._id} />;
            })}
          </div>
        ) : (
          <Empty />
        )}
      </section>
      )
      <Footer />
    </>
  );
};

export default Doctors;
