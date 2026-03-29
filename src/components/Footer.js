import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/pranshuchauhancse", Icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pranshu-chauhan-731265290/",
    Icon: FaLinkedin,
  },
  { label: "Twitter", href: "https://x.com/pranshu121005", Icon: FaTwitter },
];

function Footer() {
  return (
    <footer className="footer section-shell">
      <p>© 2026 Pranshu Chauhan Portfolio</p>
      <div className="social">
        {socialLinks.map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
