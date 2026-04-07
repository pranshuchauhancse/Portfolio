import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import { Link } from "../router";
import { HOME_EXPLORE_CARDS } from "../config/sections";

const focusAreas = [
  {
    title: "Frontend Craft",
    desc: "Readable component architecture, thoughtful micro-interactions, and responsive UI behavior."
  },
  {
    title: "Backend Reliability",
    desc: "Clean API contracts, validation-first inputs, and practical error handling patterns."
  },
  {
    title: "Delivery Mindset",
    desc: "Fast iteration, milestone-based development, and production-ready quality checks."
  }
];

function HomePage() {
  return (
    <>
      <Hero />

      <section className="section section-shell">
        <h2>Explore My Portfolio</h2>
        <p className="lead">
          Every section is designed to give recruiters and collaborators a clear picture of how I think, build, and deliver.
        </p>
        <div className="cards-grid">
          {HOME_EXPLORE_CARDS.map((item, index) => (
            <motion.article
              key={item.title}
              className="card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link className="card-link" to={item.to}>
                Open {item.title}
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section section-shell">
        <h2>What I Focus On</h2>
        <p className="lead">I prioritize quality over noise, and practical engineering over unnecessary complexity.</p>
        <div className="focus-grid">
          {focusAreas.map((item, index) => (
            <motion.article
              key={item.title}
              className="focus-card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <Stats />
    </>
  );
}

export default HomePage;
