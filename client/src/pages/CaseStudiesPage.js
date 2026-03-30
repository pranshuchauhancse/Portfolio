import React from "react";
import { motion } from "framer-motion";
import CaseStudies from "../components/CaseStudies";
import { caseStudies } from "../data/caseStudies";

function CaseStudiesPage() {
  return (
    <motion.div
      className="page case-studies-page"
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
          <h1>Case Studies</h1>
          <p>Deep dive into my featured projects and success stories</p>
        </motion.div>

        <CaseStudies studies={caseStudies} />
      </div>
    </motion.div>
  );
}

export default CaseStudiesPage;
