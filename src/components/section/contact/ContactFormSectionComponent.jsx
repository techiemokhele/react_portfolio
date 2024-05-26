// src/components/ContactFormSectionComponent.jsx

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { triggerResumeDownload } from "../../utils/utils";

const ContactFormSectionComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false); // Track email sent status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    if (!formData[e.target.name].trim()) {
      toast.error(`${e.target.name} is required`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("All fields are required");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Handle form submission with EmailJS
    setSending(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_USER_ID;

    const templateParams = {
      from_name: sanitizeInput(formData.name),
      from_email: sanitizeInput(formData.email),
      to_name: "Neo Mokhele",
      message: sanitizeInput(formData.message),
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!");
        setSending(false);
        setFormData({ name: "", email: "", message: "" });
        setEmailSent(true); // Set email sent status to true
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Failed to send message. Please try again later.");
        setSending(false);
      });
  };

  // Function to sanitize input
  const sanitizeInput = (input) => {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left column - Contact Information */}
      <div className="space-y-4">
        <img
          src="https://images.pngnice.com/download/2116/Zoom-Meeting-PNG-Isolated-Image.png"
          alt="Contact"
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* Right column - Form */}
      <div>
        <h1 className="lg:text-6xl text-[35px]  text-white font-bold mb-10">
          Send Me A Message
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-white font-thin">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full text-white border bg-yellow-700 border-transparent rounded-lg py-2 px-3 focus:outline-none focus:border-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-white font-thin">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full text-white border bg-yellow-700 border-transparent rounded-lg py-2 px-3 focus:outline-none focus:border-white"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block mb-2 text-white font-thin"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows="5"
              className="w-full text-white border bg-yellow-700 border-transparent rounded-lg py-2 px-3 focus:outline-none focus:border-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`bg-transparent border-yellow-700 border cursor-pointer text-white capitalize px-6 py-3 rounded-full ${
              sending
                ? "opacity-50 cursor-not-allowed bg-yellow-700"
                : "hover:bg-yellow-700"
            }`}
            disabled={sending}
            title={sending ? "Sending Message..." : "Send Message"}
          >
            {sending ? "Sending Message..." : "Send Message"}
          </button>

          <ToastContainer />
        </form>

        {/* Show download button if email is sent */}
        {emailSent && (
          <button
            className="mt-4 bg-yellow-700 border border-transparent text-white capitalize px-6 py-3 rounded-full hover:bg-yellow-600"
            onClick={triggerResumeDownload}
          >
            Download Resume
          </button>
        )}
      </div>
    </div>
  );
};

export default ContactFormSectionComponent;
