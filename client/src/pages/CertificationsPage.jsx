import React from "react";
import { motion } from "framer-motion";
import Certifications from "../components/Certifications";
import { certifications } from "../data/certifications";

function CertificationsPage() {
  return (
    <motion.div
      className="page certifications-page"
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
          <h1>Certifications & Credentials</h1>
          <p>Professional certifications and courses I've completed to enhance my skills</p>
        </motion.div>

        <Certifications certifications={certifications} />
      </div>
    </motion.div>
  );
}

export default CertificationsPage;
