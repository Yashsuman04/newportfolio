import React from "react";
import "./About.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import avatar from "./avatar.png";

const PARALLAX_IMG =
  "http://www.ivang-design.com/svg-load/parallax/parallax-01.png";

const About = ({ active }) => {
  const { scrollY } = useViewportScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -60]);
  const shadowTitleY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <section className="about scroll-snap-section" id="about">
      {/* Parallax Background */}
      <motion.div
        className="about-parallax-bg"
        style={{ backgroundImage: `url(${PARALLAX_IMG})`, y: parallaxY }}
      />
      {/* Shadow Title */}
      <motion.div
        className="about-shadow-title"
        style={{ y: shadowTitleY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        ABOUT
      </motion.div>
      <div className="about-content-center">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.h3
          className="about-subtitle"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Web & App Developer | Problem Solver | Tech Enthusiast
        </motion.h3>
        <motion.p
          className="about-description"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Hi! I am a passionate developer with experience in building modern,
          responsive, and interactive applications. I love turning ideas into
          reality using code and always strive to learn new technologies.
        </motion.p>
        <motion.ul
          className="about-skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <li>⚡ React, Node.js, MongoDB</li>
          <li>⚡ Web and App Development</li>
          <li>⚡ REST APIs & Full Stack Apps</li>
          <li>⚡ Problem Solving & Teamwork</li>
        </motion.ul>
      </div>
    </section>
  );
};

export default About;
