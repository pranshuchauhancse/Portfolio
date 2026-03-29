import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Link } from "../router";

const ALL_TAG = "All";

function ProjectsPage() {
  // Search text entered by the user.
  const [query, setQuery] = useState("");

  // Selected tag filter ("All" means show everything).
  const [activeTag, setActiveTag] = useState(ALL_TAG);

  // Build the tag list from the project data.
  // Keep "All" first, and sort the rest alphabetically.
  const tags = [ALL_TAG];
  for (const project of projects) {
    for (const tag of project.tags) {
      if (!tags.includes(tag)) tags.push(tag);
    }
  }
  const sortedTags = [tags[0], ...tags.slice(1).sort((a, b) => a.localeCompare(b))];

  // Filter projects based on the current search query + active tag.
  const filtered = [];
  const normalizedQuery = query.trim().toLowerCase();
  for (const project of projects) {
    const tagMatches = activeTag === ALL_TAG ? true : project.tags.includes(activeTag);
    if (!tagMatches) continue;

    if (!normalizedQuery) {
      filtered.push(project);
      continue;
    }

    const searchableText = `${project.title} ${project.desc} ${project.tags.join(" ")}`.toLowerCase();
    if (searchableText.includes(normalizedQuery)) filtered.push(project);
  }

  return (
    <section className="section section-shell">
      <h2>Projects</h2>
      <p className="lead">Search, filter, and open a project page for more detail.</p>

      <div className="filters">
        <label className="filter">
          <span className="filter-label">Search</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type to filter..." />
        </label>
        <div className="tags" role="tablist" aria-label="Project tags">
          {sortedTags.map((tag) => {
            const isActive = tag === activeTag;
            return (
              <button
                key={tag}
                type="button"
                className={`tag ${isActive ? "tag-active" : ""}`}
                onClick={() => setActiveTag(tag)}
                role="tab"
                aria-selected={isActive}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <div className="projects-grid-wide">
        {filtered.map((project, index) => {
          const liveUrl = project.links.demo && project.links.demo !== "#" ? project.links.demo : project.links.github;

          return (
            <motion.article
              key={project.slug}
              className="project-card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="pill-row" aria-label="Project tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <Link to={`/projects/${project.slug}`}>Details</Link>
                <a href={project.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsPage;
