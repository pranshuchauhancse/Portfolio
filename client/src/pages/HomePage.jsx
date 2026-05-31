import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ProjectCard from "../components/ProjectCard";
import Seo from "../components/Seo";
import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";
import { Link } from "../router";

const focusCards = [
  {
    title: "Product-ready delivery",
    desc: "I build interfaces and APIs that are ready for recruiters and stakeholders to evaluate for impact and quality.",
  },
  {
    title: "AI-aware architecture",
    desc: "My work combines frontend clarity with backend reliability and AI-enhanced user experiences.",
  },
  {
    title: "Launch-ready systems",
    desc: "I prioritize execution speed, maintainability, and polished details across every project.",
  },
];

const spotlightCards = [
  {
    label: "Currently building",
    value: "AI legal research dashboard and intelligent UX patterns.",
  },
  {
    label: "Learning",
    value: "Prompt engineering, scalable APIs, and serverless deployment.",
  },
  {
    label: "Open source",
    value: "Cleanup and polish for reusable automation workflows.",
  },
  {
    label: "Future goals",
    value: "Deliver SaaS-grade experiences with measurable customer outcomes.",
  },
];

function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <Seo
        title="Pranshu Chauhan — Portfolio"
        description="A modern software engineering portfolio highlighting AI-enabled applications, full-stack systems, certifications, and product-focused work."
        keywords={["software engineer", "portfolio", "AI", "full stack", "React", "Node.js", "projects"]}
      />

      <Hero />

      <section className="section section-shell">
        <div className="section-intro">
          <p className="eyebrow">Impact summary</p>
          <h2>Engineering work built to impress recruiters and product teams.</h2>
          <p className="lead">The portfolio showcases work that balances polished user experience, clean architecture, and measurable outcomes.</p>
        </div>

        <div className="cards-grid">
          {focusCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="feature-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <Stats />

      <section className="section section-shell">
        <div className="section-intro">
          <p className="eyebrow">Featured projects</p>
          <h2>Recent work with product depth.</h2>
          <p className="lead">A selection of projects that demonstrate full-stack delivery, AI integration, and product clarity.</p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="section-actions">
          <Link className="btn btn-primary" to="/projects">
            Explore all projects
          </Link>
        </div>
      </section>

      <section className="section section-shell spotlight-blocks">
        {spotlightCards.map((item, index) => (
          <motion.article
            key={item.label}
            className="spotlight-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <p className="spotlight-label">{item.label}</p>
            <p>{item.value}</p>
          </motion.article>
        ))}
      </section>

      <section className="section section-shell">
        <div className="section-intro">
          <p className="eyebrow">Feedback</p>
          <h2>Trusted by collaborators.</h2>
          <p className="lead">Short reviews from project partners who saw the work through from idea to launch.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((item) => (
            <article key={item.id} className="testimonial-card">
              <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }, (_, index) => (
                  <span key={index} className="star" aria-hidden="true">★</span>
                ))}
              </div>
              <p className="testimonial-text">“{item.testimonial}”</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">{item.image}</span>
                <div>
                  <p className="testimonial-name">{item.name}</p>
                  <p className="testimonial-role">{item.role} · {item.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-shell contact-cta">
        <div className="contact-cta-card">
          <div>
            <p className="eyebrow">Ready to evaluate work?</p>
            <h2>Let’s make your next internship, freelance, or team project feel polished and production-ready.</h2>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
