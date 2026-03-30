import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

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

function Testimonials({ testimonials }) {
  return (
    <motion.div
      className="testimonials-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="testimonial-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <div className="testimonial-stars">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.image}</div>
              <div className="author-info">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-role">{testimonial.role}</p>
                <p className="author-company">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials;
