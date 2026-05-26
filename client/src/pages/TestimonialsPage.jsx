import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials";
import { testimonials } from "../data/testimonials";

function TestimonialsPage() {
  return (
    <motion.div
      className="page testimonials-page"
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
          <h1>What People Say</h1>
          <p>Testimonials from clients and colleagues</p>
        </motion.div>

        <Testimonials testimonials={testimonials} />
      </div>
    </motion.div>
  );
}

export default TestimonialsPage;
