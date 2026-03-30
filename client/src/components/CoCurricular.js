import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

function CoCurricular({ activities }) {
  return (
    <motion.div
      className="cocurricular-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="section-title">Co-Curricular Activities</h2>
      <div className="activities-list">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            className={`activity-card${activity.featured ? " activity-card-featured" : ""}`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-content">
              {activity.featured && (
                <span className="activity-badge">Lifetime Achievement</span>
              )}
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-org">{activity.organization}</p>
              <p className="activity-duration">{activity.duration}</p>
              <p className="activity-description">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default CoCurricular;
