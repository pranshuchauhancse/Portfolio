import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, usePathname } from "../router";
import {
  DEFAULT_SECTION_HASH,
  NAVIGATION_ITEMS,
  ONE_PAGE_ROUTE_TO_SECTION_ID,
} from "../config/sections";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || DEFAULT_SECTION_HASH);

  const isOnePageRoute = pathname in ONE_PAGE_ROUTE_TO_SECTION_ID;

  useEffect(() => {
    if (!isOnePageRoute) return;
    if (window.location.hash) return;

    const sectionId = ONE_PAGE_ROUTE_TO_SECTION_ID[pathname] || "home";
    const nextHash = `#${sectionId}`;
    setCurrentHash(nextHash);
    window.history.replaceState({}, "", `${window.location.pathname}${nextHash}`);
  }, [isOnePageRoute, pathname]);

  useEffect(() => {
    if (!isOnePageRoute) return;
    const getSections = () => Array.from(document.querySelectorAll(".scroll-section[id], #home"));
    const updateActiveSection = () => {
      const sections = getSections();
      if (!sections.length) return;

      const probeY = window.innerHeight * 0.28;
      let activeId = sections[0].id;
      let closest = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - probeY);
        if (distance < closest) {
          closest = distance;
          activeId = section.id;
        }
      }

      const nextHash = `#${activeId}`;
      setCurrentHash((previous) => {
        if (previous === nextHash) return previous;
        window.history.replaceState({}, "", `${window.location.pathname}${nextHash}`);
        return nextHash;
      });
    };

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isOnePageRoute, pathname]);

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash || DEFAULT_SECTION_HASH);
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, currentHash]);

  const getNavLinkClassName = (href) =>
    currentHash === href ? "nav-link nav-link-active" : "nav-link";
  const getDrawerLinkClassName = (href) =>
    currentHash === href ? "nav-drawer-link nav-link-active" : "nav-drawer-link";

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link className="logo" to="#home">
        Pranshu Chauhan
      </Link>

      <ul className="nav-links">
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.label}>
            <Link className={getNavLinkClassName(item.href)} to={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={isOpen ? "nav-drawer nav-drawer-open" : "nav-drawer"}>
        <div className="nav-drawer-panel" role="dialog" aria-label="Navigation menu">
          <div className="nav-drawer-header">
            <span className="logo">Pranshu Portfolio</span>
            <button className="nav-toggle" type="button" aria-label="Close menu" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <ul className="nav-drawer-links">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.label}>
                <Link className={getDrawerLinkClassName(item.href)} to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="nav-drawer-backdrop"
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </motion.nav>
  );
}

export default Navbar;
