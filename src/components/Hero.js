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
              <motion.p className="hero-kicker" {...kickerMotionProps}>
                Hi, I am <span className="hero-kicker-strong">Pranshu Chauhan</span>
                
              </motion.p>

              <motion.p className="hero-tagline" {...taglineMotionProps}>
                <span className="hero-highlight"><span>Software Engineer & Full Stack Developer</span></span>
                {" "}
                
              </motion.p>
              <p>I build scalable web applications and AI-powered solutions using the MERN stack, with a focus on performance, usability, and clean code.</p>

              <motion.div className="hero-buttons" {...buttonsMotionProps}>
                <Link className="btn btn-ghost" to="/about">
                  About Me
                </Link>
                <Link className="btn btn-primary" to="/projects">
                  View My Work
                </Link>
              </motion.div>
              <p><strong>Passionate about solving real-world problems through full-stack development and intelligent systems.</strong></p>
            
            </div>
            

            <motion.div className="hero-media" {...mediaMotionProps}>
              <img className="hero-portrait" src={portrait} alt="Portrait" />
              <div className="hero-media-scrim" aria-hidden="true" />
            </motion.div>
          </div>

          <Link className="hero-scroll" to="/about" aria-label="Go to About page">
            <span className="hero-scroll-icon" aria-hidden="true">
              ⌄
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
