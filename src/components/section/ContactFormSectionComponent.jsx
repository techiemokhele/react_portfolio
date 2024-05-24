import React, { useState } from "react";
import ButtonComponent from "../common/ButtonComponent";

const ContactFormSectionComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState({});

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

    // If there are errors, set the state to highlight the missing fields
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(true);
    } else {
      // Handle form submission
      console.log("Form submitted successfully!");
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left column - Form */}
      <div>
        <h1 className="text-6xl text-white font-bold mb-10">
          Send Me A Message
        </h1>
        <form onSubmit={handleSubmit} method="POST">
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
                  ? "border-red-600"
                  : focused.email
                  ? "border-white"
                  : "border-transparent"
              } rounded-lg py-2 px-3 focus:outline-none`}
            />
            {submitted && errors.email && (
              <p className="text-gold text-sm mt-1">{errors.email}</p>
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
              <p className="text-gold text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <ButtonComponent
            type={"submit"}
            blank={false}
            href={"#"}
            normal={true}
            text={"Send Message"}
          />
        </form>
      </div>

      {/* Right column - Contact Information */}
      <div className="space-y-4">
        <img
          src="https://images.pngnice.com/download/2116/Zoom-Meeting-PNG-Isolated-Image.png"
          alt="Contact"
          className="hidden md:block w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default ContactFormSectionComponent;
