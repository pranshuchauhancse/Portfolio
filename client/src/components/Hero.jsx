import React from "react";
import { motion } from "framer-motion";
import portrait from "../assets/portrait.jpg";
import { Link } from "../router";

function Hero() {
  return (
    <section id="home" className="hero hero-landing">
      <div className="section-shell hero-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Pranshu Chauhan</p>
            <h1>Building AI-powered and full-stack applications that solve real problems.</h1>
            <p className="hero-summary">
              I create polished products with modern interfaces, reliable backend systems, and AI-aware features designed for internships,
              freelance engagements, and fast-moving teams.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/projects">
                View Projects
              </Link>
              <a className="btn btn-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
                Download Resume
              </a>
              <Link className="btn btn-ghost" to="/contact">
                Contact Me
              </Link>
            </div>

            <div className="hero-stat-blocks">
              <div className="hero-stat">
                <span className="hero-stat-value">AI & Product</span>
                <span className="hero-stat-label">Hybrid engineering focus</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">Internship ready</span>
                <span className="hero-stat-label">Reliable, reviewable build quality</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">Fast delivery</span>
                <span className="hero-stat-label">From prototype to launch-ready</span>
              </div>
            </div>
          </div>

          <motion.div className="hero-media" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="hero-media-frame">
              <img className="hero-portrait" src={portrait} alt="Portrait of Pranshu Chauhan" loading="lazy" />
              <div className="hero-badge">Open to internships, freelance work, and startup collaborations.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
