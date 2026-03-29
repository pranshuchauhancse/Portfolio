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
          I am a <strong>motivated</strong> and <strong>curious Software Engineer</strong> with a strong passion for <strong>learning new skills</strong> and transforming ideas into <strong>impactful, real-world projects</strong>. I specialize in <strong>modern web development</strong>, where I enjoy turning <strong>complex challenges</strong> into <strong>simple, elegant solutions</strong>.
        </p>

        <p>
          With hands-on experience in building <strong>Web applications</strong> using the <strong>MERN stack</strong> and developing <strong>basic ML models projects</strong>, I focus on writing <strong>clean</strong>, <strong>maintainable code</strong> and delivering <strong>high-performance</strong>, <strong>scalable websites</strong>.
        </p>

        <p>
          I am deeply committed to <strong>continuous learning</strong>, constantly exploring <strong>new technologies</strong> and <strong>best practices</strong> to stay up-to-date in an <strong>ever-evolving field</strong>.
        </p>

        <p>
          Driven by <strong>problem-solving</strong> and <strong>creativity</strong>, I strive to create <strong>meaningful digital experiences</strong> while growing <strong>professionally</strong> with every project I undertake. I believe in <strong>dedication</strong>, <strong>innovation</strong>, and <strong>consistent improvement</strong> as the foundation for <strong>long-term success</strong>.
        </p>
      </motion.div>
      <div className="page-split">
        <article className="card">
          <h3>What I do</h3>
          <ul className="bullets">
            <li>UI engineering with React</li>
            <li>Component systems + design tokens</li>
            <li>Performance audits and fixes</li>
          </ul>
        </article>
        <article className="card">
          <h3>What you get</h3>
          <ul className="bullets">
            <li>Responsive, accessible layouts</li>
            <li>Clean, maintainable code</li>
            <li>Animations that feel premium</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default AboutPage;
