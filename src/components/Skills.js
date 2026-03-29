import React, { useState } from "react";
import { motion } from "framer-motion";

const skillCategories = {
  "Frontend": ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Tailwind", "Bootstrap"],
  "Backend": ["Node.js", "Express", "Python", "Django", "REST APIs"],
  "Database": ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  "Tools & Others": ["Git", "Docker", "AWS", "Figma", "Firebase"]
};

const allSkills = Object.values(skillCategories).flat();

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSkills = selectedCategory === "All"
    ? allSkills
    : skillCategories[selectedCategory] || [];

  const displayedSkills = filteredSkills.filter(skill =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="skills" className="section section-shell">
      <h2>Skills</h2>

      <motion.div
        className="skills-filter-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <input
          type="text"
          placeholder="Search skills..."
          className="skills-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="skills-categories">
          <button
            className={`category-btn ${selectedCategory === "All" ? "active" : ""}`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="skills-grid">
        {displayedSkills.length > 0 ? (
          displayedSkills.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ delay: index * 0.05 }}
            >
              {skill}
            </motion.div>
          ))
        ) : (
          <motion.p
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No skills match your search
          </motion.p>
        )}
      </div>
    </section>
  );
}

export default Skills;
