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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

function CaseStudies({ studies }) {
  return (
    <motion.section
      className="case-studies-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-labelledby="case-studies-heading"
    >
      <h2 id="case-studies-heading" className="section-title">
        Featured case studies
      </h2>
      <div className="case-studies-list">
        {studies.map((study, index) => (
          <motion.article
            key={study.id}
            className={`case-study-item ${index % 2 === 1 ? "reverse" : ""}`}
            variants={itemVariants}
          >
            <div className="study-summary">
              <div className="study-icon" aria-hidden="true">{study.image}</div>
              <div>
                <p className="study-category">{study.category}</p>
                <h3>{study.title}</h3>
              </div>
            </div>

            <div className="study-meta">
              <span>{study.client}</span>
              <span>{study.duration}</span>
            </div>

            <div className="study-section">
              <h4>Challenge</h4>
              <p>{study.problem}</p>
            </div>

            <div className="study-section">
              <h4>Solution</h4>
              <p>{study.solution}</p>
            </div>

            <div className="study-results">
              {Object.entries(study.results).map(([key, value]) => (
                <div key={key} className="result-item">
                  <span className="result-value">{value}</span>
                  <span className="result-label">{key}</span>
                </div>
              ))}
            </div>

            <div className="study-tags">
              {study.technologies.map((tech) => (
                <span key={tech} className="pill tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            <Link className="btn btn-ghost" to={`/case-studies/${study.slug}`}>
              Read full case study
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default CaseStudies;
