import React from "react";
import { motion } from "framer-motion";

const headingMotionProps = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
};

function ResumePage() {
  return (
    <section className="section section-shell">
      <motion.h2 {...headingMotionProps}>
        Resume / Experience
      </motion.h2>
      <p className="lead">A short timeline. Download the full PDF if you want the complete details.</p>
      <ul className="timeline-list">
        <li>Frontend Developer Intern — 2025</li>
        <li>BSc Computer Science</li>
        <li>3+ Professional Certifications</li>
      </ul>
      <a className="btn btn-primary" href="/resume.pdf">
        Download Resume
      </a>
    </section>
  );
}

export default ResumePage;
