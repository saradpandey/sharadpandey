import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

import "./Contact.css";

export default function Contact() {
  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "pandeysharad9719@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+977 9749781949",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Kathmandu, Nepal",
    },
    {
      icon: <FaBriefcase />,
      title: "Availability",
      value: "Available For Work",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.trim().length < 3) {
      setStatus({ type: "error", message: "Name must be at least 3 characters." });
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Enter a valid email." });
      return false;
    }

    if (formData.phone.trim().length < 8) {
      setStatus({ type: "error", message: "Enter a valid phone number." });
      return false;
    }

    if (formData.subject.trim().length < 5) {
      setStatus({ type: "error", message: "Subject must be at least 5 characters." });
      return false;
    }

    if (formData.message.trim().length < 20) {
      setStatus({ type: "error", message: "Message must be at least 20 characters." });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/xdavwqbj", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data?.error || "Failed to send message.",
        });
      }
    } catch (error) {
      console.log(error);
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">
          {/* LEFT SIDE */}
          <div className="contact-info-col">
            {contactDetails.map((item, index) => (
              <div className="contact-detail-card" key={index}>
                <div className="det-icon">{item.icon}</div>
                <div>
                  <span className="det-label">{item.title}</span>
                  <p className="det-val">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form-col">
            <form className="c-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* STATUS */}
              {status.message && (
                <div className={`status-message ${status.type}`}>
                  {status.type === "success" && <FaCheckCircle />}
                  {status.type === "error" && <FaTimesCircle />}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}