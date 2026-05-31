import React from "react";

function SkillCategory({ title, skills }) {
  return (
    <section className="skill-category">
      <h3>{title}</h3>
      <div className="pill-row skill-pill-row">
        {skills.map((skill) => (
          <span key={skill} className="pill skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SkillCategory;
