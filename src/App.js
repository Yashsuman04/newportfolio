import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
// import Footer from "./Footer";

function App() {
  // Custom cursor hover state
  const [hover, setHover] = useState(false);
  // Cursor refs
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);
  const cursor3Ref = useRef(null);

  // Track active section
  const [activeSection, setActiveSection] = useState("hero");
  const sectionIds = ["hero", "about", "skills", "projects", "contact"];
  const sectionRefs = useRef(sectionIds.map(() => React.createRef()));

  useEffect(() => {
    const handleScroll = () => {
      let minDiff = Infinity;
      let current = "hero";
      sectionRefs.current.forEach((ref, idx) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const diff = Math.abs(rect.top);
          if (diff < minDiff && rect.top < window.innerHeight) {
            minDiff = diff;
            current = sectionIds[idx];
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse move for cursor (direct DOM for smoothness)
  useEffect(() => {
    const move = (e) => {
      const x = e.clientX + "px";
      const y = e.clientY + "px";
      if (cursorRef.current) {
        cursorRef.current.style.left = x;
        cursorRef.current.style.top = y;
      }
      if (cursor2Ref.current) {
        cursor2Ref.current.style.left = x;
        cursor2Ref.current.style.top = y;
      }
      if (cursor3Ref.current) {
        cursor3Ref.current.style.left = x;
        cursor3Ref.current.style.top = y;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Custom Cursor (always on top) */}
      <div id="cursor" className="cursor" ref={cursorRef} />
      <div
        id="cursor2"
        className={`cursor2${hover ? " hover" : ""}`}
        ref={cursor2Ref}
      />
      <div
        id="cursor3"
        className={`cursor3${hover ? " hover" : ""}`}
        ref={cursor3Ref}
      />
      <div className="App scroll-snap-container">
        <div ref={sectionRefs.current[0]} id="hero-section">
          <Hero setCursorHover={setHover} active={activeSection === "hero"} />
        </div>
        <div ref={sectionRefs.current[1]} id="about-section">
          <About active={activeSection === "about"} />
        </div>
        <div ref={sectionRefs.current[2]} id="skills-section">
          <Skills
            setCursorHover={setHover}
            active={activeSection === "skills"}
          />
        </div>
        <div ref={sectionRefs.current[3]} id="projects-section">
          <Projects
            setCursorHover={setHover}
            active={activeSection === "projects"}
          />
        </div>
        <div ref={sectionRefs.current[4]} id="contact-section">
          <Contact
            setCursorHover={setHover}
            active={activeSection === "contact"}
          />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
