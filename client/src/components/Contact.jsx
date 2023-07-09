import React, { useRef, useState } from "react";
import "../styles/contact.css";
import "../pages/pages.css";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleContact = async () => {
    await toast.success("Successfully send an email", {
      className: "bg-dark text-light",
    });
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  };

  return (
    <section
      className="register-section d-flex flex-column flex-center"
      id="contact"
    >
      <div className="contact-container flex-center contact mb-5">
        <h2 className="form-heading">Contact Us</h2>
        <div className="register-form d-flex flex-column ">
          <input
            type="text"
            name="name"
            className="form-input data"
            placeholder="Enter your name"
            ref={name}
            value={formDetails.name}
            onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input data"
            placeholder="Enter your email"
            value={formDetails.email}
            ref={email}
            onChange={inputChange}
          />
          <textarea
            type="text"
            name="message"
            className="form-input data"
            placeholder="Enter your message"
            ref={message}
            value={formDetails.message}
            onChange={inputChange}
            rows="8"
            cols="12"
          ></textarea>

          <button
            type="submit"
            className="btn form-btn"
            onClick={handleContact}
          >
            send
          </button>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
