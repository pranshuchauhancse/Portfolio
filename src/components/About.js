import React from "react";
import { motion } from "framer-motion";

const headingMotionProps = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const paragraphMotionProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { delay: 0.15 },
};

function About() {
  return (
    <section id="about" className="section section-shell">
      <motion.h2 {...headingMotionProps}>
        About Me
      </motion.h2>
      <motion.p {...paragraphMotionProps}>
        I am a senior-level React developer focused on performance, clean architecture, and user-centered UI.
        I enjoy transforming ideas into production-ready products with thoughtful animation and strong code quality.
      </motion.p>
    </section>
  );
}

export default About;
