import React from "react";
import { motion } from "framer-motion";

const skillItems = [
  { name: "Java", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React.js", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
  { name: "GitHub", level: "Advanced" },
  { name: "Visual Code", level: "Advanced" },
  { name: "Canva", level: "Intermediate" },
  { name: "Data Structure and Algorithms (DSA)", level: "Basic" },
  { name: "OOPs", level: "Intermediate" },
];

function SkillsPage() {
  return (
    <section className="section section-shell">
      <h2>Skills</h2>
      <p className="lead">
        A quick snapshot of the tools I use most often. I prefer pragmatic choices and clean implementation details.
      </p>
      <div className="cards-grid">
        {skillItems.map((skill, index) => (
          <motion.article
            key={skill.name}
            className="card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
          >
            <h3>{skill.name}</h3>
            <p className="muted">{skill.level}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default SkillsPage;
