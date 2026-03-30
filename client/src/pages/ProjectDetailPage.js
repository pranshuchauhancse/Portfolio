import React from "react";
import { motion } from "framer-motion";
import { getProjectBySlug } from "../data/projects";
import { Link } from "../router";

// Small animation settings for the page title.
const headingMotionProps = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

function ProjectDetailPage({ params }) {
  // Find the project using the slug from the URL: `/projects/:slug`.
  const project = getProjectBySlug(params.slug);
  const liveUrl = project?.links?.demo && project.links.demo !== "#" ? project.links.demo : project?.links?.github;
  if (!project) {
    return (
      <section className="section section-shell">
        <h2>Project not found</h2>
        <p className="lead">That project page does not exist.</p>
        <Link className="btn btn-ghost" to="/projects">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="section section-shell">
      <div className="detail-top">
        <Link className="btn btn-ghost" to="/projects">
          ← Back
        </Link>
      </div>

      <motion.h2 {...headingMotionProps}>
        {project.title}
      </motion.h2>
      <p className="lead">{project.desc}</p>

      <div className="page-split">
        <article className="card">
          <h3>Highlights</h3>
          <ul className="bullets">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h3>Stack</h3>
          <div className="pill-row">
            {project.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
          <div className="project-links">
            <a href={project.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={liveUrl} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProjectDetailPage;
