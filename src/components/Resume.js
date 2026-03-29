import React from "react";

const timelineItems = [
  "Frontend Developer Intern - 2025",
  "BSc Computer Science",
  "3+ Professional Certifications",
];

function Resume() {
  return (
    <section id="resume" className="section section-shell">
      <h2>Resume / Experience</h2>
      <ul className="timeline-list">
        {timelineItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a className="btn btn-primary" href="/resume.pdf">
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
