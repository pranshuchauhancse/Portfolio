import React from "react";
import { motion } from "framer-motion";

const skillItems = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git", "Tailwind"];

function Skills() {
  return (
    <section id="skills" className="section section-shell">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillItems.map((skill, index) => (
          <motion.div
            key={skill}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
