import { useState } from "react";
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
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    if (!formData[e.target.name].trim()) {
      toast.error(`${e.target.name} is required`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission from Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setEmailSent(true);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left column - Contact Information */}
      <div className="space-y-4">
        <img
          src="/images/contact.jpg"
          alt="Contact"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Right column - Form */}
      <div>
        <h1 className="lg:text-6xl text-[38px] text-white font-bold lg:mb-10 mb-5">
          Let's Have A Chat
        </h1>

        {!emailSent && (
          <p className="text-white mb-10 text-center">
            Please send a message to enable the{" "}
            <span className="text-gold capitalize">download resume</span>{" "}
            button. This ensures that you have the latest version of my resume.
          </p>
        )}

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
