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
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

function Testimonials({ testimonials }) {
  return (
    <motion.section
      className="testimonials-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="section-title">
        What collaborators say
      </h2>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <motion.article
            key={item.id}
            className="testimonial-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
              {[...Array(item.rating)].map((_, index) => (
                <FaStar key={index} className="star" aria-hidden="true" />
              ))}
            </div>
            <p className="testimonial-text">“{item.testimonial}”</p>
            <div className="testimonial-author">
              <div className="author-avatar" aria-hidden="true">
                {item.image || "👤"}
              </div>
              <div>
                <h3 className="author-name">{item.name}</h3>
                <p className="author-role">{item.role} · {item.company}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Testimonials;
