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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

function Timeline({ items }) {
  const getPrefix = (listType) => (listType === "checklist" ? "✓ " : "• ");

  return (
    <motion.div
      className="timeline-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="section-title">My Journey</h2>
      <div className="timeline-line">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="timeline-item"
            variants={itemVariants}
          >
            <div className="timeline-marker">
              <div className="timeline-icon">{item.icon}</div>
            </div>
            <motion.div
              className="timeline-content"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-company">
                {item.company} | {item.duration}
              </p>
              {item.stream && <p className="timeline-stream">Stream: {item.stream}</p>}
              <p className="timeline-desc">{item.description}</p>

              {item.sections &&
                item.sections.map((section, sectionIndex) => (
                  <div
                    className="timeline-section"
                    key={`${item.id}-section-${sectionIndex}`}
                  >
                    <p className="timeline-section-title">{section.title}</p>
                    <ul className="timeline-section-list">
                      {section.items.map((sectionItem, sectionItemIndex) => (
                        <li
                          key={`${item.id}-section-${sectionIndex}-item-${sectionItemIndex}`}
                        >
                          {getPrefix(section.listType)}
                          {sectionItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              {item.achievements && (
                <>
                  <p className="timeline-section-title">Key Highlights:</p>
                  <ul className="timeline-achievements">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>✓ {achievement}</li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Timeline;
