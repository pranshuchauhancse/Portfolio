import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import { Link, usePathname } from "../router";
import { NAVIGATION_ITEMS } from "../config/sections";
import { contact } from "../data/contact";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

  const getNavLinkClassName = (href) =>
    pathname === href ? "nav-link nav-link-active" : "nav-link";

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      role="navigation"
      aria-label="Main navigation"
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
      </ul>

      <div className="nav-actions">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon-button"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

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
        <div className="nav-drawer-panel" role="dialog" aria-label="Mobile navigation">
          <div className="nav-drawer-header">
            <span className="logo">Pranshu Chauhan</span>
            <button className="nav-toggle" type="button" aria-label="Close menu" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <ul className="nav-drawer-links">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.label}>
                <Link className={getNavLinkClassName(item.href)} to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
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
