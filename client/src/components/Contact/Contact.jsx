import React, { useState } from "react";
import contactImg from "../../assets/img/contact-img.svg";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.scss";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [btnText, setBtnText] = useState("Send")

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const formUpdated = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (
      !formDetails.email ||
      !formDetails.message ||
      !formDetails.phone ||
      !formDetails.name
    ) {
      toast.warning("Enter all fields", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const isValid = validateEmail(formDetails.email);
    if (!isValid) {
      toast.error("Email isn't correct form", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setBtnText("Sending...")
    axios
      .post("https://elmirguluzade-api.vercel.app/contact", formDetails)
      .then(() => {
        setFormDetails({ name: "", email: "", phone: "", message: "" });
        toast.success("Message sent. I will answer as soon as possible", {
          position: "top-right",
          autoClose: 800,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setBtnText("Send")
      })
      .catch(() => {
        toast.error("Error occured. Please try again.", {
          position: "top-right",
          autoClose: 800,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <section id="contact">
      <div className="contact">
        <div className="contact-img">
          <img src={contactImg} alt="contact" width={"100%"} />
        </div>
        <form onSubmit={submitForm}>
          <h2>Get In Touch</h2>
          <div className="input">
            <input
              type="text"
              value={formDetails.name}
              onChange={(e) => formUpdated("name", e.target.value)}
              placeholder="Full name"
            />
          </div>
          <div className="input">
            <input
              type="text"
              value={formDetails.email}
              onChange={(e) => formUpdated("email", e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="input input-fixer">
            <PhoneInput
              className="phoneInput"
              country={"az"}
              value={formDetails.phone}
              onChange={(e) => formUpdated("phone", "+" + e)}
              placeholder={"Phone number"}
            />
          </div>
          <div className="input">
            <textarea
              value={formDetails.message}
              onChange={(e) => formUpdated("message", e.target.value)}
              placeholder="Message"
            />
          </div>
          <button type="submit" 
          disabled={btnText === "Send" ? false : true} 
          style={{cursor: btnText === "Send" ? "pointer" :"not-allowed"}}>
          {btnText}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
