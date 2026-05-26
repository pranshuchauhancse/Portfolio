import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["JavaScript", "React", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    label: "Languages",
    skills: ["Python", "Java"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub"],
  },
  {
    label: "CS Fundamentals",
    skills: ["Data Structures & Algorithms", "OOP", "Problem Solving"],
  },
];

function SkillsPage() {
  return (
    <section className="section section-shell">
      <h2>Skills</h2>
      <p className="lead">
        A practical snapshot of the tools and engineering fundamentals I use most in day-to-day development.
      </p>
      <div className="skill-groups">
        {skillGroups.map((group, index) => (
          <motion.section
            key={group.label}
            className="skill-category"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <h3>{group.label}</h3>
            <div className="pill-row">
              {group.skills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </section>
  );
}

export default SkillsPage;
