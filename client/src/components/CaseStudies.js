import React from "react";
import { motion } from "framer-motion";
import { Link } from "../router";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function CaseStudies({ studies }) {
  return (
    <motion.div
      className="case-studies-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="section-title">Case Studies</h2>
      <div className="case-studies-list">
        {studies.map((study, index) => (
          <motion.div
            key={study.id}
            className={`case-study-item ${index % 2 === 1 ? "reverse" : ""}`}
            variants={itemVariants}
          >
            <div className="study-image">{study.image}</div>
            <div className="study-content">
              <h3 className="study-title">{study.title}</h3>
              <p className="study-client">
                <strong>Client:</strong> {study.client}
              </p>
              <p className="study-duration">
                <strong>Duration:</strong> {study.duration}
              </p>
              
              <div className="study-section">
                <h4>Challenge</h4>
                <p>{study.problem}</p>
              </div>

              <div className="study-section">
                <h4>Solution</h4>
                <p>{study.solution}</p>
              </div>

              <div className="study-results">
                <h4>Results</h4>
                <div className="results-grid">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="result-item">
                      <span className="result-value">{value}</span>
                      <span className="result-label">
                        {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="study-tech">
                <h4>Technologies</h4>
                <div className="tech-tags">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link to={`/case-studies/${study.slug}`} className="study-link">
                View Full Case Study →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default CaseStudies;
