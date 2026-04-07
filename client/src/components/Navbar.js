import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, usePathname } from "../router";
import { NAVIGATION_ITEMS } from "../config/sections";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
