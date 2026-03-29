import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import { Link } from "../router";

const exploreCards = [
  {
    title: "About",
    desc: "Get a quick overview of my background, work style, and strengths.",
    to: "/about"
  },
  {
    title: "Projects",
    desc: "Browse shipped projects with tech stack, details, and outcomes.",
    to: "/projects"
  },
  {
    title: "Case Studies",
    desc: "See how I approach problems from discovery to delivery.",
    to: "/case-studies"
  },
  {
    title: "Timeline",
    desc: "Follow my growth path through learning, building, and collaboration.",
    to: "/timeline"
  },
  {
    title: "Contact",
    desc: "Reach out for internships, freelance work, or collaboration.",
    to: "/contact"
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
          {exploreCards.map((item, index) => (
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
      <Stats />
    </>
  );
}

export default HomePage;
