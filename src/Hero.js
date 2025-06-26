import React, { useState } from "react";
import { useViewportScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import "./Hero.css";

const PARALLAX_IMAGES = [
  "http://www.ivang-design.com/svg-load/parallax/parallax-0.png",
  "http://www.ivang-design.com/svg-load/parallax/parallax-01.png",
];
const CASE_STUDIES = [
  {
    name: "light",
    img: "http://www.ivang-design.com/svg-load/parallax/light.jpg",
    title: "graphic design, interaction",
    number: "01",
  },
  {
    name: "flare",
    img: "http://www.ivang-design.com/svg-load/parallax/flare.jpg",
    title: "advertising, art direction",
    number: "02",
  },
  {
    name: "nature",
    img: "http://www.ivang-design.com/svg-load/parallax/nature.jpg",
    title: "photography, retouching",
    number: "03",
  },
  {
    name: "fire",
    img: "http://www.ivang-design.com/svg-load/parallax/fire.jpg",
    title: "photography, advertising",
    number: "04",
  },
];

const Hero = ({ setCursorHover, active }) => {
  const { scrollY } = useViewportScroll();
  // Parallax transforms
  const parallax00Y = useTransform(scrollY, [0, 400], [0, -400 / 3.5]);
  const parallax01Y = useTransform(scrollY, [0, 400], [0, -400 / 2.8]);
  const shadowTitleY = useTransform(scrollY, [0, 400], [0, -400 / 2]);

  // Scroll-to-top arrow
  const [showArrow, setShowArrow] = useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      setShowArrow(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Case study hover
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="hero scroll-snap-section">
      {/* Scroll to top arrow */}
      <div
        className={`scroll-to-top hover-target${
          showArrow ? " active-arrow" : ""
        }`}
        onClick={scrollToTop}
        onMouseEnter={() => setCursorHover && setCursorHover(true)}
        onMouseLeave={() => setCursorHover && setCursorHover(false)}
      ></div>
      {/* Shadow Title */}
      <motion.div
        className="shadow-title parallax-top-shadow"
        style={{ transform: `translateY(${shadowTitleY.get()}px)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        work
      </motion.div>
      {/* Parallax Background Layers */}
      <div
        className="section-parallax parallax-00"
        style={{
          backgroundImage: `url(${PARALLAX_IMAGES[0]})`,
          transform: `translateY(${parallax00Y.get()}px)`,
        }}
      />
      <div
        className="section-parallax parallax-01"
        style={{
          backgroundImage: `url(${PARALLAX_IMAGES[1]})`,
          transform: `translateY(${parallax01Y.get()}px)`,
        }}
      />
      {/* Hero Content */}
      <div className="section full-height z-bigger">
        <div className="section-title-wrap">
          <div className="container">
            <div className="row">
              <div
                className="col-12 text-center parallax-fade-top"
                style={{ position: "relative" }}
              >
                <h1 className="hero-title">
                  Hi, I'm <span className="highlight">Yash Suman</span>
                </h1>
                <h2 className="hero-subtitle">Web & App Developer</h2>
                <p className="hero-desc">
                  I build modern, responsive, and engaging web and mobile
                  applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Swipe Up Arrow - animated with CSS */}
      <div className="swipe-up">
        <span>Swipe up</span>
        <div className="arrow swipe-up-animate">↓</div>
      </div>
      {/* Case Study Showcase (hidden for now, can be re-enabled if needed) */}
      {/* <div className="section full-height z-bigger">
        ...
      </div> */}
    </section>
  );
};

export default Hero;
