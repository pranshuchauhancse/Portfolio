import React from "react";
import { motion } from "framer-motion";
import { getProjectBySlug } from "../data/projects";
import { Link } from "../router";
import Seo from "../components/Seo";
import ImageGallery from "../components/ImageGallery";

function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);
  const liveUrl = project?.links?.demo?.trim();

  if (!project) {
    return (
      <section className="section section-shell">
        <h2>Project not found</h2>
        <p className="lead">The requested project page is unavailable.</p>
        <Link className="btn btn-primary" to="/projects">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="section section-shell project-detail-page">
      <Seo
        title={`${project.title} | Pranshu Chauhan`}
        description={project.desc}
        keywords={[...project.stack, project.category, "project case study"]}
      />

      <div className="project-detail-hero">
        <div>
          <p className="eyebrow">Project case study</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.desc}</p>
        </div>
        <div className="project-detail-meta">
          <span>{project.category}</span>
          <span>{project.role}</span>
          <span>{project.timeline}</span>
        </div>
      </div>

      <div className="project-detail-grid">
        <article className="project-detail-card">
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </article>

        <article className="project-detail-card">
          <h2>Problem</h2>
          <p>{project.problem}</p>
        </article>

        <article className="project-detail-card">
          <h2>Research</h2>
          <p>{project.research}</p>
        </article>

        <article className="project-detail-card">
          <h2>Solution</h2>
          <p>{project.solution}</p>
        </article>
      </div>

      <ImageGallery images={project.screenshots} />

      <div className="project-detail-block">
        <h2>Architecture</h2>
        <div className="architecture-diagram-placeholder">
          <span>Architecture diagram placeholder</span>
        </div>
        <p>{project.architecture}</p>
      </div>

      <div className="project-detail-grid">
        <article className="project-detail-card">
          <h2>Technical decisions</h2>
          <ul className="bullets">
            {project.technicalDecisions?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="project-detail-card">
          <h2>Challenges</h2>
          <ul className="bullets">
            {project.challenges?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="project-detail-grid">
        <article className="project-detail-card project-detail-results">
          <h2>Results</h2>
          <ul className="bullets">
            {project.results?.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </article>

        <article className="project-detail-card">
          <h2>Lessons learned</h2>
          <ul className="bullets">
            {project.lessonsLearned?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="project-detail-block">
        <h2>Future improvements</h2>
        <ul className="bullets">
          {project.futureImprovements?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="detail-actions">
        <Link className="btn btn-primary" to="/projects">
          Back to projects
        </Link>
        <div className="project-links">
          <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link">
            View GitHub
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="project-link">
              Visit live demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailPage;
