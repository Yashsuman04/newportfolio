import React from "react";
import "./Projects.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Modern Portfolio",
    description:
      "A responsive portfolio website built with React and modern CSS.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce application using MERN stack.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
  {
    title: "Chat Application",
    description: "A real-time chat app with socket.io and React.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "#",
  },
];

const PARALLAX_IMG =
  "http://www.ivang-design.com/svg-load/parallax/parallax-0.png";

const Projects = ({ setCursorHover, active }) => {
  const { scrollY } = useViewportScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -100]);
  const shadowTitleY = useTransform(scrollY, [0, 400], [0, -80]);

  return (
    <section
      className="projects scroll-snap-section"
      id="projects"
      style={{ height: "100vh", minHeight: "100vh" }}
    >
      {/* Parallax Background */}
      <motion.div
        className="projects-parallax-bg"
        style={{ backgroundImage: `url(${PARALLAX_IMG})`, y: parallaxY }}
      />
      {/* Shadow Title */}
      <motion.div
        className="projects-shadow-title"
        style={{ y: shadowTitleY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.div>
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.a
              className="project-card hover-target"
              href={project.link}
              key={project.title}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #00d8ff44" }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              onMouseEnter={() => setCursorHover && setCursorHover(true)}
              onMouseLeave={() => setCursorHover && setCursorHover(false)}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
