import React from "react";
import { motion } from "framer-motion";

const headingMotionProps = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
};

const contentMotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.1, duration: 0.4 },
};

function AboutPage() {
  return (
    <section className="section section-shell">
      <motion.h2 {...headingMotionProps}>
        About Me
      </motion.h2>
      <motion.div {...contentMotionProps}>
        <p>
          I am a software engineer who enjoys building dependable web products from end to end.
          I like taking a feature from idea to release, from planning the data model to polishing the final user flow.
        </p>

        <p>
          My core stack is React, Node.js, Express, and MongoDB.
          I care about readable code, maintainable structure, and interfaces that are simple for users but robust under real usage.
        </p>

        <p>
          Beyond coding, I invest time in continuous learning, open-source contribution, and peer collaboration.
          Each project helps me sharpen both technical depth and communication.
        </p>

        <p>
          If you are looking for someone who combines execution speed with thoughtful engineering decisions,
          I would love to connect and build something valuable together.
        </p>
      </motion.div>
      <div className="page-split">
        <article className="card">
          <h3>What I Build</h3>
          <ul className="bullets">
            <li>Responsive frontend applications with React</li>
            <li>REST APIs and backend services with Node.js</li>
            <li>Portfolio, dashboard, and productivity web apps</li>
          </ul>
        </article>
        <article className="card">
          <h3>How I Work</h3>
          <ul className="bullets">
            <li>Clear communication and milestone-based delivery</li>
            <li>Readable code with practical documentation</li>
            <li>Performance, accessibility, and maintainability in focus</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default AboutPage;
