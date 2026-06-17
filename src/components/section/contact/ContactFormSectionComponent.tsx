import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Download } from "lucide-react";

import { triggerResumeDownload } from "@/components/utils/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactFormSectionComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as keyof FormData;
    if (!formData[name].trim()) {
      toast.error(`${name} is required`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
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
        localStorage.setItem("emailSent", "true");
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
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left column - Image */}
      <div className="space-y-4">
        <img
          src="/images/contact.jpg"
          alt="Contact"
          className="w-full h-auto object-cover rounded-xl border border-white/10"
        />
      </div>

      {/* Right column - Form */}
      <div>
        <h1 className="lg:text-5xl text-4xl text-white font-extrabold mb-6">
          Let's Have A Chat
        </h1>

        {!emailSent && (
          <p className="text-gray-400 mb-8">
            Please send a message to enable the{" "}
            <span className="text-gold capitalize">download resume</span>{" "}
            button. This ensures that you have the latest version of my resume.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-white text-sm font-medium"
            >
              Your Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-white text-sm font-medium"
            >
              Your Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-white text-sm font-medium"
            >
              Your Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell me about your project..."
            />
          </div>

          <Button
            type="submit"
            variant="outline"
            disabled={sending}
            title={sending ? "Sending Message..." : "Send Message"}
          >
            {sending ? "Sending Message..." : "Send Message"}
          </Button>

          <ToastContainer theme="dark" />
        </form>

        {emailSent && (
          <Button className="mt-5" onClick={triggerResumeDownload}>
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        )}
      </div>
    </div>
  );
};

export default ContactFormSectionComponent;
