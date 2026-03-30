import React from "react";
import { motion } from "framer-motion";

const achievementItems = ["Hackathon Winner", "Top 5 Coding Contest", "1000+ GitHub Commits"];

function Achievements() {
  return (
    <section id="achievements" className="section section-shell">
      <h2>Achievements</h2>
      <div className="achievements-grid">
        {achievementItems.map((item, index) => (
          <motion.div
            key={item}
            className="achievement-card"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
