import React from "react";
import { motion } from "framer-motion";
import Timeline from "../components/Timeline";
import { timeline } from "../data/timeline";

function TimelinePage() {
  return (
    <motion.div
      className="page timeline-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Timeline of Growth</h1>
          <p>Progression across education, product builds, and certifications.</p>
        </motion.div>

        <Timeline items={timeline} />
      </div>
    </motion.div>
  );
}

export default TimelinePage;
