import React, { useState } from "react";
import { contact } from "../data/contact";
import { sendContactMessage } from "../utils/sendContactMessage";

const CONTACT_EMAIL = contact.email;
const HAS_CONTACT_ENDPOINT = Boolean(
  process.env.REACT_APP_CONTACT_ENDPOINT || process.env.REACT_APP_FORMSPREE_ENDPOINT
);

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

function Contact() {
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

  const handleSubmit = (event) => {
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

    sendContactMessage(formData)
      .then((result) => {
        if (!result.ok) {
          setStatus(result.error || "Failed to send. Please try again.");
          return;
        }

        setStatus("Thanks! Your message has been sent.");
        setFormData({ name: "", subject: "", message: "" });
      })
      .catch(() => setStatus("Failed to send. Please try again."))
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="section section-shell">
      <h2>Contact Me</h2>
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
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          {isSending ? "Sending..." : "Send"}
        </button>
        {status ? <p className="form-status">{status}</p> : null}
      </form>
    </section>
  );
}

export default Contact;
