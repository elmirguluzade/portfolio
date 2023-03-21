import React, { useState } from "react";
import contactImg from "../../assets/img/contact-img.svg";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.scss";

const Contact = () => {
  const formInitializeDetails = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [btnText, setBtnText] = useState("Send");
  const [formDetails, setFormDetails] = useState(formInitializeDetails);

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
    axios
      .post("http://localhost:4000/contact", formDetails)
      .then((response) => {
        console.log(response);
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
      }).catch(err => console.log(err))
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
          <div className="input">
            <input
              type="text"
              value={formDetails.phone}
              onChange={(e) => formUpdated("phone", e.target.value)}
              placeholder="Phone number"
            />
          </div>
          <div className="input">
            <textarea
              value={formDetails.message}
              onChange={(e) => formUpdated("message", e.target.value)}
              placeholder="Message"
            />
          </div>
          <button type="submit">{btnText}</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
