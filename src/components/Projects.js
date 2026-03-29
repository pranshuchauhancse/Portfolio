import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section section-shell">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const liveUrl = project.links.demo && project.links.demo !== "#" ? project.links.demo : project.links.github;

          return (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-links">
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

export default Projects;
