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
        <h2>A modern engineer building products with clarity, speed, and technical depth.</h2>
        <p className="lead">My career is defined by software that is easy to use, reliable to maintain, and strong enough to support early-stage product decisions.</p>
      </div>

      <div className="about-grid">
        <article className="card about-card">
          <h3>How I started</h3>
          <p>
            I began by building projects for friends and school clubs, then moved into full-stack work that combined user-facing interfaces with backend systems.
            That early curiosity has grown into a focus on engineering work that recruiters recognize as product-ready and execution-focused.
          </p>
        </article>

        <article className="card about-card">
          <h3>Why I build</h3>
          <p>
            I build software to make complex workflows feel intuitive. I enjoy taking the noise out of technical problems and shipping reliable solutions that people can trust.
          </p>
        </article>

        <article className="card about-card">
          <h3>What excites me</h3>
          <ul className="bullets">
            <li>AI-powered interfaces that reduce friction and improve decision-making.</li>
            <li>Full-stack products with clear user journeys and clean operational behavior.</li>
            <li>Engineering systems that are easy to maintain, extend, and ship quickly.</li>
          </ul>
        </article>

        <article className="card about-card">
          <h3>Career goals</h3>
          <ul className="bullets">
            <li>Join teams where I can deliver internship and freelance projects with strong product outcomes.</li>
            <li>Work on AI-integrated applications that feel polished and practical.</li>
            <li>Build professional full-stack systems that scale from MVP to production-ready.</li>
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
