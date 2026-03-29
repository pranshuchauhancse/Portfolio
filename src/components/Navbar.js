import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link, usePathname } from "../router";

const navigationItems = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Timeline", href: "/timeline" },
  { label: "Certifications", href: "/certifications" },
  { label: "Co-Curricular", href: "/cocurricular" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" }
];

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/pranshuchauhancse", label: "GitHub" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/pranshu-chauhan-731265290/", label: "LinkedIn" },
  { icon: FaTwitter, url: "https://x.com/pranshu121005", label: "Twitter" },
  { icon: FaEnvelope, url: "mailto:pranshuchauhan121005@gmail.com", label: "Email" }
];

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
        Pranshu Chauhan Portfolio
      </Link>

      <ul className="nav-links">
        {navigationItems.map((item) => (
          <li key={item.label}>
            <Link className={getNavLinkClassName(item.href)} to={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <div className="nav-socials">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-link"
              title={social.label}
            >
              <social.icon />
            </a>
          ))}
        </div>
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
        <div className="nav-drawer-panel" role="dialog" aria-label="Navigation menu">
          <div className="nav-drawer-header">
            <span className="logo">Pranshu Portfolio</span>
            <button className="nav-toggle" type="button" aria-label="Close menu" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <ul className="nav-drawer-links">
            {navigationItems.map((item) => (
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
