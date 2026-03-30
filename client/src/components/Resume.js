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
      <a
        className="btn btn-primary"
        href="mailto:pranshuchauhan121005@gmail.com?subject=Resume%20Request&body=Hi%20Pranshu%2C%20please%20share%20your%20latest%20resume."
      >
        Request Resume by Email
      </a>
    </section>
  );
}

export default Resume;
