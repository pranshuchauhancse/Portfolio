import React from "react";
import { motion } from "framer-motion";
import portrait from "../assets/portrait.jpg";
import { Link } from "../router";

const kickerMotionProps = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" },
};

const taglineMotionProps = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.15, duration: 0.55, ease: "easeOut" },
};

const buttonsMotionProps = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.3, duration: 0.55, ease: "easeOut" },
};

const mediaMotionProps = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { delay: 0.2, duration: 0.65, ease: "easeOut" },
};

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="section-shell hero-shell">
        <div className="hero-card" role="banner" aria-label="Intro">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-status">Open to internships, freelance projects, and collaborations</p>

              <motion.p className="hero-kicker" {...kickerMotionProps}>
                Hello, I am <span className="hero-kicker-strong">Pranshu Chauhan</span>
              </motion.p>

              <motion.p className="hero-tagline" {...taglineMotionProps}>
                <span className="hero-highlight"><span>Software Engineer and Full Stack Developer</span></span>
              </motion.p>
              <p>
                I design and build practical digital products with React, Node.js, and MongoDB.
                My focus is simple: fast interfaces, clean architecture, and features that solve real user problems.
              </p>

              <motion.div className="hero-buttons" {...buttonsMotionProps}>
                <Link className="btn btn-ghost" to="#about">
                  About Me
                </Link>
                <Link className="btn btn-primary" to="#projects">
                  View My Work
                </Link>
              </motion.div>

              <p>
                <strong>
                  Currently focused on modern frontend systems, API-first backends, and reliable deployment workflows.
                </strong>
              </p>
            </div>

            <motion.div className="hero-media" tabIndex={0} {...mediaMotionProps}>
              <img className="hero-portrait" src={portrait} alt="Portrait" />
              <div className="hero-media-scrim" aria-hidden="true" />
              <div className="hero-media-caption" aria-label="Profile details">
                <h4>Pranshu Chauhan</h4>
                <p>Student</p>
                <p>GLA University</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
