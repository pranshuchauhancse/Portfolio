import React from "react";
import { motion } from "framer-motion";
import CoCurricular from "../components/CoCurricular";
import { coCurricularActivities } from "../data/coCurricular";

function CoCurricularPage() {
  return (
    <motion.div
      className="page cocurricular-page"
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
          <h1>Co-Curricular Activities</h1>
          <p>Extracurricular engagement, volunteering, and community involvement</p>
        </motion.div>

        <CoCurricular activities={coCurricularActivities} />
      </div>
    </motion.div>
  );
}

export default CoCurricularPage;
