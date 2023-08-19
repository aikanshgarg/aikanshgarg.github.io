import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { images } from "../../constants";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const form = document.querySelector(".app__footer-form");

    if (form.reportValidity()) {
      setLoading(true);

      const contact = {
        _type: "contact",
        name: name,
        email: email,
        message: message,
      };

      client.create(contact).then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
    }
  };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: "contact",
  //     name: name,
  //     email: email,
  //     message: message,
  //   };

  //   client.create(contact).then(() => {
  //     setLoading(false);
  //     setIsFormSubmitted(true);
  //   });
  // };

  return (
    <>
      <p className="head-text head-text-small">get in touch</p>
      <h2 className="head-text head-text-dark">Coffee & let's talk</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:aikanshgarg0303@gmail.com" className="p-text">
            aikanshgarg0303@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel: +91 9818-194721" className="p-text">
            +91 9818-194721
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required // Add this attribute for required field validation
              pattern="[A-Za-z\s.]+" // Add a regular expression pattern for allowed characters
              title="Please enter alphabets, dots, spaces only" // Add a custom error message for pattern validation
            />
          </div>
          <div className="app__flex">
            <input
              type="email" // Use "email" type for email input
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required // Required field validation
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" // Email format pattern
              title="Please enter a valid email address" // Custom error message for pattern validation
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
              required // Required field validation
              minLength={20} // Minimum length requirement
              maxLength={500} // Maximum length restriction
              title="Please enter a message between 20 and 500 characters" // Custom error message
            />
          </div>
          <button
            type="submit"
            className="p-text"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div className="thankyou-msg">
          <p>
            Hey <span>{name}</span>, thank you for connecting! I'll reach out
            shortly.. ✌🏼
          </p>
          <br />
          <p>
            Meanwhile, you can check out some of the handcrafted articles on{" "}
            <a
              href="https://dev-dive.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              devDive: a blog for developers, designers, & techies.
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
