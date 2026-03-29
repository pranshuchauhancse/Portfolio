import React, { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "../data/contact";
import { sendContactMessage } from "../utils/sendContactMessage";

const CONTACT_EMAIL = contact.email;
const HAS_CONTACT_ENDPOINT = Boolean(
  process.env.REACT_APP_CONTACT_ENDPOINT || process.env.REACT_APP_FORMSPREE_ENDPOINT
);

const toTelHref = (phoneNumber) => `tel:${String(phoneNumber).replace(/[^\d+]/g, "")}`;
const displayUrl = (url) => String(url || "").replace(/^https?:\/\//, "").replace(/\/$/, "");

const buildEmailPayload = ({ name, subject, message }) => {
  const resolvedSubject = subject?.trim()
    ? subject.trim()
    : `Portfolio Contact from ${name || "Someone"}`;
  const body = `Name: ${name}\n\n${message}`;
  return { subject: resolvedSubject, body };
};

const buildGmailComposeUrl = ({ to, subject, body }) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;

    if (!HAS_CONTACT_ENDPOINT) {
      const { subject, body } = buildEmailPayload(formData);
      window.open(buildGmailComposeUrl({ to: CONTACT_EMAIL, subject, body }), "_blank", "noopener,noreferrer");
      setStatus("Opening Gmail compose...");
      return;
    }

    setIsSending(true);
    setStatus("Sending...");

    try {
      const result = await sendContactMessage(formData);
      if (!result.ok) {
        setStatus(result.error || "Failed to send. Please try again.");
        return;
      }

      setStatus("Thanks! Your message has been sent.");
      setFormData({ name: "", subject: "", message: "" });
    } catch {
      setStatus("Failed to send. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="section section-shell">
      <motion.h2 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        Contact
      </motion.h2>
      <p className="lead">
        Have an internship opportunity, project idea, or collaboration in mind?
        Share a few details and I will get back to you as soon as possible.
      </p>

      <div className="page-split">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
          <input
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <div className="row">
            <button className="btn btn-primary" type="submit">
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
          {status ? <p className="form-status">{status}</p> : null}
        </form>

        <article className="card">
          <h3>Quick Info</h3>
          <ul className="bullets">
            <li>
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              Phone / WhatsApp: <a href={toTelHref(contact.phone)}>{contact.phone}</a>
            </li>
            <li>
              LinkedIn:{" "}
              <a href={contact.linkedIn} target="_blank" rel="noreferrer">
                {displayUrl(contact.linkedIn)}
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a href={contact.github} target="_blank" rel="noreferrer">
                {displayUrl(contact.github)}
              </a>
            </li>
          </ul>
          <p className="muted">
            Location: {contact.location} | Time zone: {contact.timezone}
          </p>
        </article>
      </div>
    </section>
  );
}

export default ContactPage;
