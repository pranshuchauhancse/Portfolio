import React from "react";
import { motion } from "framer-motion";
import { Link, usePathname, matchPath } from "../router";
import { getCaseStudyBySlug } from "../data/caseStudies";

function CaseStudyDetailPage() {
  const pathname = usePathname();
  const match = matchPath("/case-studies/:slug", pathname);
  const study = getCaseStudyBySlug(match?.params?.slug || "");

  if (!study) {
    return (
      <section className="section section-shell">
        <h2>Case Study Not Found</h2>
        <p className="lead">The case study you are looking for does not exist.</p>
        <Link className="btn btn-primary" to="/case-studies">
          Back to Case Studies
        </Link>
      </section>
    );
  }

  return (
    <section className="section section-shell">
      <motion.article
        className="case-study-detail"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className="detail-kicker">Case Study</p>
        <h2>{study.title}</h2>
        <p className="lead">{study.details}</p>

        <div className="detail-meta">
          <p><strong>Client:</strong> {study.client}</p>
          <p><strong>Duration:</strong> {study.duration}</p>
          <p><strong>Category:</strong> {study.category}</p>
        </div>

        <div className="detail-block">
          <h3>Challenge</h3>
          <p>{study.problem}</p>
        </div>

        <div className="detail-block">
          <h3>Solution</h3>
          <p>{study.solution}</p>
        </div>

        <div className="detail-block">
          <h3>Results</h3>
          <div className="results-grid">
            {Object.entries(study.results).map(([key, value]) => (
              <div key={key} className="result-item">
                <span className="result-value">{value}</span>
                <span className="result-label">{key.replace(/([A-Z])/g, " $1").toLowerCase()}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="detail-block">
          <h3>Technologies</h3>
          <div className="tech-tags">
            {study.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Link className="btn btn-primary" to="/case-studies">
          Back to Case Studies
        </Link>
      </motion.article>
    </section>
  );
}

export default CaseStudyDetailPage;
