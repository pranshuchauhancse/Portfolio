import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaGithub, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link, usePathname } from "../router";
import { NAVIGATION_ITEMS, MORE_NAVIGATION_ITEMS } from "../config/sections";
import { useTheme } from "../context/ThemeContext";
import { contact } from "../data/contact";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow || "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isMoreOpen) return undefined;

    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMoreOpen]);

  const getNavLinkClassName = (href) =>
    pathname === href ? "nav-link nav-link-active" : "nav-link";
  const getDrawerLinkClassName = (href) =>
    pathname === href ? "nav-drawer-link nav-link-active" : "nav-drawer-link";

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link className="logo" to="/">
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

        <li className="nav-dropdown" ref={moreRef}>
          <button
            type="button"
            className="nav-link nav-dropdown-trigger"
            aria-expanded={isMoreOpen}
            onClick={() => setIsMoreOpen((previous) => !previous)}
          >
            More
          </button>
          <div className={isMoreOpen ? "nav-dropdown-menu nav-dropdown-open" : "nav-dropdown-menu"}>
            {MORE_NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.label}
                className={getNavLinkClassName(item.href)}
                to={item.href}
                onClick={() => setIsMoreOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </li>

        <li className="nav-actions">
          <button type="button" className="nav-icon-button" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-button"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </li>
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
            {[...NAVIGATION_ITEMS, ...MORE_NAVIGATION_ITEMS].map((item) => (
              <li key={item.label}>
                <Link className={getDrawerLinkClassName(item.href)} to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="drawer-actions-row">
              <button type="button" className="nav-icon-button" onClick={toggleTheme}>
                {isDark ? <FaSun /> : <FaMoon />} Theme
              </button>
            </li>
            <li className="drawer-actions-row">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="nav-drawer-link">
                <FaGithub /> GitHub
              </a>
            </li>
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
