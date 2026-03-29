import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import { Link } from "../router";

const exploreCards = [
  {
    title: "About",
    desc: "Learn more about who I am and what I create.",
    to: "/about"
  },
  {
    title: "Projects",
    desc: "Explore my work, projects, and practical implementations.",
    to: "/projects"
  },
  {
    title: "Contact",
    desc: "Get in touch or send me a message.",
    to: "/contact"
  }
];

function HomePage() {
  return (
    <>
      <Hero />
      <section className="section section-shell">
        <h2>Explore</h2>
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
