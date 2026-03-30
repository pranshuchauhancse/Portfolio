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
        Resume and Experience
      </motion.h2>

      <p className="lead">
        A concise summary of my current focus, project experience, and technical strengths.
      </p>

      <ul className="timeline-list">
        <li>Built full-stack portfolio and product-style projects using the MERN stack</li>
        <li>Strong foundation in React-based UI architecture and reusable component design</li>
        <li>Hands-on backend development with Express APIs and MongoDB data modeling</li>
        <li>Active learner with certifications and consistent project-based practice</li>
      </ul>

      <a
        className="btn btn-primary"
        href="mailto:pranshuchauhan121005@gmail.com?subject=Resume%20Request&body=Hi%20Pranshu%2C%20please%20share%20your%20latest%20resume."
      >
        Request Resume by Email
      </a>
    </section>
  );
}

export default ResumePage;
