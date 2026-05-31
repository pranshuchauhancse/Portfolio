import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((project) => project.category || "Other")));
    return ["All", ...unique];
  }, []);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const categoryMatch = activeCategory === "All" || project.category === activeCategory;
      if (!categoryMatch) return false;
      if (!normalizedQuery) return true;

      return [project.title, project.desc, project.problem, ...(project.stack || [])]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  return (
    <section className="section section-shell projects-page">
      <Seo
        title="Projects | Pranshu Chauhan"
        description="Explore high-impact projects demonstrating AI, full-stack development, and open-source experimentation from Pranshu's portfolio."
      />

      <div className="page-header">
        <p className="eyebrow">Projects</p>
        <h2>Featured work with product and technical depth.</h2>
        <p className="lead">Filter by category, search by technology, and explore detailed case studies for each project.</p>
      </div>

      <div className="filters">
        <label className="filter">
          <span className="filter-label">Search</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by product, technology, or result"
            aria-label="Search projects"
          />
        </label>

        <div className="tags" role="tablist" aria-label="Project categories">
          {categories.map((category) => {
            const selected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                className={`tag ${selected ? "tag-active" : ""}`}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={selected}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)
        ) : (
          <div className="empty-state">
            <h3>No projects match your search.</h3>
            <p>Try another keyword or select a broader category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsPage;
