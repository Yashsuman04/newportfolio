import React from "react";
import "./Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact color="#61dafb" />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" />, level: 85 },
  { name: "HTML5", icon: <FaHtml5 color="#e34c26" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt color="#264de4" />, level: 90 },
  { name: "JavaScript", icon: <FaJsSquare color="#f7df1e" />, level: 92 },
  { name: "Flutter", icon: <SiFlutter color="#02569B" />, level: 95 },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" />, level: 92 },
  { name: "MySQL", icon: <FaDatabase color="#00758F" />, level: 92 },
  { name: "Git", icon: <FaGitAlt color="#F05032" />, level: 92 },
  { name: "GitHub", icon: <FaGithub color="#181717" />, level: 92 },
  { name: "C", icon: <SiC color="#A8B9CC" />, level: 95 },
  { name: "C++", icon: <SiCplusplus color="#00599C" />, level: 90 },
];

const PARALLAX_IMG =
  "http://www.ivang-design.com/svg-load/parallax/parallax-01.png";

const Skills = ({ setCursorHover, active }) => {
  const { scrollY } = useViewportScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -80]);
  const shadowTitleY = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <section className="skills scroll-snap-section">
      {/* Parallax Background */}
      <motion.div
        className="skills-parallax-bg"
        style={{ backgroundImage: `url(${PARALLAX_IMG})`, y: parallaxY }}
      />
      {/* Shadow Title */}
      <motion.div
        className="skills-shadow-title"
        style={{ y: shadowTitleY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.div>
      <div className="skills-content">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, idx) => (
            <motion.div
              className="skill-card hover-target"
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px #00d8ff44" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setCursorHover && setCursorHover(true)}
              onMouseLeave={() => setCursorHover && setCursorHover(false)}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <span>{skill.name}</span>
                <div className="skill-bar-bg">
                  <motion.div
                    className="skill-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
