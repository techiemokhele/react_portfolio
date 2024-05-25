import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactFormSectionComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleFocus = (e) => {
    setFocused({ ...focused, [e.target.name]: true });
  };

  const handleBlur = (e) => {
    setFocused({ ...focused, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_USER_ID;

    // Validate form fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Neo Mokhele",
      message: formData.message,
    };

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(true);
    } else {
      // Handle form submission with EmailJS
      setSending(true);
      console.log("Sending email with EmailJS");

      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSending(true);
          setSuccess(true);
          setSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => {
          console.log("FAILED...", err);
          setSending(false);
          setSuccess(false);
        })
        .finally(() => {
          setSending(false);
          setSuccess(true);
          setSubmitted(true);

          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        });
    }
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
        <h1 className="text-6xl text-white font-bold mb-10">
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
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`w-full text-white border bg-gold ${
                errors.name
                  ? "border-red-500"
                  : focused.name
                  ? "border-white"
                  : "border-transparent"
              } rounded-lg py-2 px-3 focus:outline-none`}
            />
            {submitted && errors.name && (
              <p className="text-gold text-sm mt-1">{errors.name}</p>
            )}
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
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`w-full text-white border bg-gold ${
                errors.email
                  ? "border-red-500"
                  : focused.email
                  ? "border-white"
                  : "border-transparent"
              } rounded-lg py-2 px-3 focus:outline-none`}
            />
            {submitted && errors.name && (
              <p className="text-gold text-sm mt-1">{errors.name}</p>
            )}
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
              onFocus={handleFocus}
              onBlur={handleBlur}
              rows="5"
              className={`w-full text-white border bg-gold ${
                errors.message
                  ? "border-red-500"
                  : focused.message
                  ? "border-white"
                  : "border-transparent"
              } rounded-lg py-2 px-3 focus:outline-none`}
            ></textarea>
            {submitted && errors.message && (
              <p className="text-white mt-4 p-2 bg-red-700 rounded-t-xl rounded-s-lg">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="border cursor-pointer border-gold text-white capitalize px-6 py-3 rounded-full hover:bg-gold"
            title={sending ? "Sending Message..." : "Send Message"}
          >
            {sending ? "Sending Message..." : "Send Message"}
          </button>

          {success && (
            <p className="text-white mt-10 p-4 bg-green-700 rounded-t-xl rounded-s-lg">
              Message sent successfully! Please try later.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactFormSectionComponent;
