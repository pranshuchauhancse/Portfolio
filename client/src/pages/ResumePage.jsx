import React from "react";
import Seo from "../components/Seo";

const skills = [
  {
    category: "Frontend",
    items: [
      { label: "React", level: 88 },
      { label: "JavaScript", level: 92 },
      { label: "HTML & CSS", level: 90 },
      { label: "Framer Motion", level: 72 },
    ],
  },
  {
    category: "Backend",
    items: [
      { label: "Node.js", level: 86 },
      { label: "Express", level: 82 },
      { label: "APIs & Auth", level: 80 },
      { label: "Python", level: 74 },
    ],
  },
  {
    category: "Databases",
    items: [
      { label: "MongoDB", level: 80 },
      { label: "SQL", level: 72 },
      { label: "Firebase", level: 68 },
    ],
  },
  {
    category: "AI / Tools",
    items: [
      { label: "OpenAI", level: 70 },
      { label: "Prompt engineering", level: 72 },
      { label: "Git / GitHub", level: 88 },
    ],
  },
];

const experience = [
  {
    role: "Full-stack Product Engineer",
    company: "Personal projects & freelance",
    duration: "2024 — Present",
    details: [
      "Delivered full-stack applications with React, Node.js, and database integrations.",
      "Built production-ready project flows with authentication, reusable components, and responsive UX.",
      "Translated product requirements into clear engineering milestones and launch-ready deliverables.",
    ],
  },
  {
    role: "AI integration engineer",
    company: "Academic innovation work",
    duration: "2024 — 2025",
    details: [
      "Implemented AI-assisted application features using OpenAI and NLP design patterns.",
      "Designed user workflows that simplify complex domain knowledge through conversational UI.",
      "Focused on quality, fallback handling, and user experience for prototype solutions.",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Technology in Computer Science & Engineering",
    organization: "GLA University",
    period: "2023 — 2027 (ongoing)",
  },
  {
    title: "Full Stack Web Development",
    organization: "GLA University & Coding Blocks",
    period: "2025",
  },
];

const achievements = [
  "Constructed a polished portfolio experience for recruiter conversion.",
  "Led multiple full-stack applications from concept through deployment.",
  "Integrated AI and backend systems to support smarter product interactions.",
  "Built scalable UI patterns and reusable component architecture.",
];

function ResumePage() {
  return (
    <section className="section section-shell resume-page">
      <Seo
        title="Resume | Pranshu Chauhan"
        description="Recruiter-ready resume page featuring experience, skills, achievements, education, and certifications."
      />

      <div className="resume-hero">
        <div>
          <p className="eyebrow">Resume</p>
          <h1>Resume for internships, freelance work, and early-career product engineering roles.</h1>
          <p className="lead">A structured overview of my experience, technical skills, and achievements for recruiters who value delivery-focused work.</p>
        </div>
        <div className="resume-actions">
          <a className="btn btn-primary" href="mailto:pranshuchauhan121005@gmail.com?subject=Resume%20Request&body=Hi%20Pranshu%2C%20please%20share%20your%20latest%20resume.">
            Request resume
          </a>
          <a className="btn btn-ghost" href="/contact">
            Contact me
          </a>
        </div>
      </div>

      <div className="resume-grid">
        <article className="card resume-card">
          <h2>Experience</h2>
          {experience.map((item) => (
            <div key={item.role} className="resume-section">
              <div className="resume-section-heading">
                <h3>{item.role}</h3>
                <span>{item.duration}</span>
              </div>
              <p className="resume-company">{item.company}</p>
              <ul className="bullets">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>

        <article className="card resume-card">
          <h2>Skills</h2>
          {skills.map((group) => (
            <div key={group.category} className="skill-block">
              <h3>{group.category}</h3>
              {group.items.map((item) => (
                <div key={item.label} className="skill-line">
                  <span>{item.label}</span>
                  <div className="skill-meter">
                    <div className="skill-fill" style={{ width: `${item.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </article>
      </div>

      <div className="resume-grid">
        <article className="card resume-card">
          <h2>Education</h2>
          {education.map((item) => (
            <div key={item.title} className="resume-section">
              <div className="resume-section-heading">
                <h3>{item.title}</h3>
                <span>{item.period}</span>
              </div>
              <p className="resume-company">{item.organization}</p>
            </div>
          ))}
        </article>

        <article className="card resume-card">
          <h2>Achievements</h2>
          <ul className="bullets">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default ResumePage;
