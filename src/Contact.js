import React, { useState } from "react";
import "./Contact.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const PARALLAX_IMG =
  "http://www.ivang-design.com/svg-load/parallax/parallax-01.png";

const Contact = ({ setCursorHover, active }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const { scrollY } = useViewportScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -60]);
  const shadowTitleY = useTransform(scrollY, [0, 400], [0, -40]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="contact scroll-snap-section"
      id="contact"
      style={{ height: "100vh", minHeight: "100vh" }}
    >
      {/* Parallax Background */}
      <motion.div
        className="contact-parallax-bg"
        style={{ backgroundImage: `url(${PARALLAX_IMG})`, y: parallaxY }}
      />
      {/* Shadow Title */}
      <motion.div
        className="contact-shadow-title"
        style={{ y: shadowTitleY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        CONTACT
      </motion.div>
      <div className="contact-content-center">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        {submitted ? (
          <motion.div
            className="thank-you"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Thank you for reaching out!
          </motion.div>
        ) : (
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="hover-target"
              onMouseEnter={() => setCursorHover && setCursorHover(true)}
              onMouseLeave={() => setCursorHover && setCursorHover(false)}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="hover-target"
              onMouseEnter={() => setCursorHover && setCursorHover(true)}
              onMouseLeave={() => setCursorHover && setCursorHover(false)}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="hover-target"
              onMouseEnter={() => setCursorHover && setCursorHover(true)}
              onMouseLeave={() => setCursorHover && setCursorHover(false)}
            />
            <button
              type="submit"
              className="hover-target"
              onMouseEnter={() => setCursorHover && setCursorHover(true)}
              onMouseLeave={() => setCursorHover && setCursorHover(false)}
            >
              Send Message
            </button>
          </motion.form>
        )}
      </div>
      {/* Footer content at the bottom of the contact section */}
      <footer className="footer-in-contact">
        <div className="footer-content">
          <span>
            © {new Date().getFullYear()} Yash Suman. All rights reserved.
          </span>
          <div className="footer-icons">
            <a
              href="https://github.com/yashsuman04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target"
              onMouseEnter={() => setCursorHover && setCursorHover(true)}
              onMouseLeave={() => setCursorHover && setCursorHover(false)}
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yashsuman04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target"
              onMouseEnter={() => setCursorHover && setCursorHover(true)}
              onMouseLeave={() => setCursorHover && setCursorHover(false)}
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:yashsuman412@gmail.com"
              className="hover-target"
              onMouseEnter={() => setCursorHover && setCursorHover(true)}
              onMouseLeave={() => setCursorHover && setCursorHover(false)}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
