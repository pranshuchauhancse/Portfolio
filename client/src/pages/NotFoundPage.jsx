import React from "react";
import { motion } from "framer-motion";
import { Link } from "../router";

function NotFoundPage() {
  return (
    <motion.section
      className="section section-404"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="not-found-container">
        <motion.div
          className="not-found-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="error-code"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            404
          </motion.h1>

          <motion.div
            className="error-emoji"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🔍
          </motion.div>

          <h2>Page Not Found</h2>
          <p className="lead">
            Oops! It seems you've wandered into the digital void. The page you're looking for doesn't exist.
          </p>

          <div className="not-found-suggestions">
            <p>Here are some helpful links instead:</p>
            <ul>
              <li><Link to="/">🏠 Home</Link></li>
              <li><Link to="/projects">🚀 Projects</Link></li>
              <li><Link to="/about">ℹ️ About Me</Link></li>
              <li><Link to="/contact">📧 Contact</Link></li>
            </ul>
          </div>

          <Link className="btn btn-primary" to="/">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default NotFoundPage;
