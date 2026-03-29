import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";

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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="footer-section">
      <motion.div
        className="newsletter-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="newsletter-content">
          <h3>Stay Updated</h3>
          <p>Subscribe to get updates on my latest projects and articles</p>
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              <FaPaperPlane /> Subscribe
            </button>
          </form>
          {subscribed && (
            <motion.p
              className="success-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✓ Thanks for subscribing!
            </motion.p>
          )}
        </div>
      </motion.div>

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
    </div>
  );
}

export default Footer;
