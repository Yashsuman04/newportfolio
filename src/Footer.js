import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} Yash Suman. All rights reserved.</span>
      <div className="footer-icons">
        <a
          href="https://github.com/yashsuman04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yashsuman04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:yashsuman412@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
