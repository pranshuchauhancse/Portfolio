import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";

const stats = [
  { value: `${projects.length}+`, label: "Projects" },
  { value: "100+", label: "Commits" },
  { value: `${certifications.length}`, label: "Certificates" }
];

function Stats() {
  return (
    <section className="stats section-shell" aria-label="Portfolio stats">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          className="stat"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </motion.div>
      ))}
    </section>
  );
}

export default Stats;
