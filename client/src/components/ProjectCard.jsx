import React from "react";
import { motion } from "framer-motion";
import { Link } from "../router";

function ProjectCard({ project }) {
  const hasDemo = Boolean(project.links.demo && project.links.demo.trim());
  const screenshotLabel = project.preview?.label || "Project preview";

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className={`project-card-visual ${project.preview?.variant || "default"}`}>
        <span>{screenshotLabel}</span>
      </div>

      <div className="project-card-content">
        <div className="project-card-header">
          <span className="project-badge">{project.category || "Product"}</span>
          <span className="project-timeline">{project.timeline}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-card-description">{project.desc}</p>

        <ul className="project-key-points">
          {project.highlights?.slice(0, 3).map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="pill-row project-stack-row">
          {project.stack?.slice(0, 5).map((tech) => (
            <span key={tech} className="pill project-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        <Link className="btn btn-ghost" to={`/projects/${project.slug}`}>
          View details
        </Link>
        <div className="project-links">
          <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link">
            GitHub
          </a>
          {hasDemo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="project-link">
              Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
