import React from "react";
import { motion } from "framer-motion";

const skillItems = [
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Express", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "HTML5", level: "Advanced" },
  { name: "CSS3", level: "Advanced" },
  { name: "Git", level: "Advanced" },
  { name: "GitHub", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "Java", level: "Intermediate" },
  { name: "Data Structures and Algorithms", level: "Intermediate" },
  { name: "Object-Oriented Programming", level: "Intermediate" },
  { name: "Problem Solving", level: "Advanced" },
];

function SkillsPage() {
  return (
    <section className="section section-shell">
      <h2>Skills</h2>
      <p className="lead">
        A practical snapshot of the tools and engineering fundamentals I use most in day-to-day development.
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
