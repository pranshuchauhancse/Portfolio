import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

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

function Certifications({ certifications }) {
  return (
    <motion.div
      className="certifications-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="section-title">My Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="certification-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
          >
            <div className="cert-icon">{cert.icon}</div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{new Date(cert.date).toLocaleDateString()}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Certificate <FaExternalLinkAlt />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Certifications;
