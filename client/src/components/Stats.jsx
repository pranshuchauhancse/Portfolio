import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";

const baseStats = [
  { value: 8, suffix: "+", label: "Projects built" },
  { value: 16, suffix: "+", label: "Technologies used" },
  { value: certifications.length, suffix: "+", label: "Certifications" },
  { value: 1200, suffix: "+", label: "GitHub contributions" },
  { value: 4, suffix: "+", label: "Years learning" },
];

function Stats() {
  const [animated, setAnimated] = useState(baseStats.map(() => 0));

  const stats = useMemo(
    () => baseStats.map((item, index) => ({ ...item, current: animated[index] })),
    [animated]
  );

  useEffect(() => {
    let animationFrame;
    const duration = 900;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      setAnimated(
        baseStats.map((item) => Math.round(item.value * progress))
      );
      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="stats section-shell" aria-label="Portfolio statistics">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          className="stat"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <p className="stat-value">
            {item.current}
            {item.suffix}
          </p>
          <p className="stat-label">{item.label}</p>
        </motion.div>
      ))}
    </section>
  );
}

export default Stats;
