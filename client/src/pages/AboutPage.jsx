import React from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Timeline from "../components/Timeline";
import { timeline } from "../data/timeline";

function AboutPage() {
  return (
    <section className="section section-shell about-page">
      <Seo
        title="About | Pranshu Chauhan"
        description="Discover Pranshu Chauhan's engineering journey, what he builds, and the goals that drive his work in full-stack and AI-enabled products."
      />

      <div className="page-header">
        <p className="eyebrow">About</p>
        <h2>An engineer who builds product-ready software with clear technical execution.</h2>
        <p className="lead">My work is grounded in clean architecture, reliable delivery, and practical AI integration for real user workflows.</p>
      </div>

      <div className="about-grid">
        <article className="card about-card">
          <h3>How I started</h3>
          <p>
            I began by building tools for student groups and academic projects, then expanded into full-stack systems that use modern frontend frameworks and API design.
            Today I focus on engineering work that signals both practical delivery and technical reliability.
          </p>
        </article>

        <article className="card about-card">
          <h3>Why I build</h3>
          <p>
            I solve problems where user-facing clarity meets backend stability. I enjoy turning technical complexity into interfaces and APIs that teams can trust.
          </p>
        </article>

        <article className="card about-card">
          <h3>What I focus on</h3>
          <ul className="bullets">
            <li>AI-aware product flows that improve decision-making and reduce friction.</li>
            <li>Full-stack systems with predictable behavior and practical integration points.</li>
            <li>Components and data structures that are easy to test, extend, and maintain.</li>
          </ul>
        </article>

        <article className="card about-card">
          <h3>Career goals</h3>
          <ul className="bullets">
            <li>Contribute to teams that ship internships, MVPs, and early-stage products fast.</li>
            <li>Build web applications with strong engineering practices and measurable outcomes.</li>
            <li>Grow as a developer who can bridge product thinking and technical delivery.</li>
          </ul>
        </article>
      </div>

      <section className="timeline-section">
        <div className="section-intro">
          <p className="eyebrow">Growth timeline</p>
          <h2>Career milestones and technical progress.</h2>
          <p className="lead">A concise view of the work, education, and product builds that shape my portfolio today.</p>
        </div>
        <Timeline items={timeline} />
      </section>
    </section>
  );
}

export default AboutPage;
