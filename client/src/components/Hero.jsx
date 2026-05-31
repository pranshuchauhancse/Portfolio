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
            <p className="hero-subheading">GLA University, Mathura — B.Tech Computer Science & Engineering</p>
            <h1>Software engineering and AI work that is polished, practical, and recruiter-ready.</h1>
            <p className="hero-summary">
              I build product-focused web applications with clean frontend execution, robust backend flows, and AI-aware features that support real outcomes.
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
                <span className="hero-stat-value">Product-ready builds</span>
                <span className="hero-stat-label">Strong UX and clean code</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">AI integration</span>
                <span className="hero-stat-label">Practical automation and assistant features</span>
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
              <div className="hero-media-caption">
                <h4>Pranshu Chauhan</h4>
                <p>GLA University, Mathura</p>
              </div>
              <div className="hero-badge">Open to internships, freelance work, and product engineering collaborations.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
