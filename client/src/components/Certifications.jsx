import React from "react";
import { motion } from "framer-motion";
import CertificationCard from "./CertificationCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

function Certifications({ certifications }) {
  return (
    <motion.section
      className="certifications-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-labelledby="certifications-heading"
    >
      <h2 id="certifications-heading" className="section-title">
        Certifications and verification
      </h2>
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </motion.section>
  );
}

export default Certifications;
