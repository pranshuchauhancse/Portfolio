import React, { useState } from "react";
import Seo from "../components/Seo";
import { contact } from "../data/contact";
import { sendContactMessage } from "../utils/sendContactMessage";

const CONTACT_EMAIL = contact.email;
const HAS_CONTACT_ENDPOINT = Boolean(
  import.meta.env.VITE_CONTACT_ENDPOINT || import.meta.env.VITE_FORMSPREE_ENDPOINT
);

const toTelHref = (phoneNumber) => `tel:${String(phoneNumber).replace(/[^\d+]/g, "")}`;
const displayUrl = (url) => String(url || "").replace(/^https?:\/\//, "").replace(/\/$/, "");

const buildEmailPayload = ({ name, email, subject, message }) => {
  const resolvedSubject = subject?.trim()
    ? subject.trim()
    : `Portfolio contact from ${name || "Someone"}`;
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  return { subject: resolvedSubject, body };
};

const buildGmailComposeUrl = ({ to, subject, body }) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) nextErrors.email = "Email is required.";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!formData.message.trim()) nextErrors.message = "Please share a short message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;
    if (!validate()) return;

    if (!HAS_CONTACT_ENDPOINT) {
      const { subject, body } = buildEmailPayload(formData);
      window.open(buildGmailComposeUrl({ to: CONTACT_EMAIL, subject, body }), "_blank", "noopener,noreferrer");
      setStatus("Opening your mail client to send the message.");
      return;
    }

    setIsSending(true);
    setStatus("Sending message...");

    try {
      const result = await sendContactMessage(formData);
      if (!result.ok) {
        setStatus(result.error || "Failed to send. Please try again.");
        return;
      }
      setStatus("Message sent successfully. I will reply shortly.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("Failed to send. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="section section-shell contact-page">
      <Seo
        title="Contact | Pranshu Chauhan"
        description="Contact Pranshu for internships, freelance work, and product engineering collaborations."
      />

      <div className="page-header">
        <p className="eyebrow">Contact</p>
        <h2>Let's connect on your next product or engineering opportunity.</h2>
        <p className="lead">Share a few details and I’ll get back to you with next steps and availability.</p>
      </div>

      <div className="page-split contact-grid">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>
            Name
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-invalid={Boolean(errors.name)}
              required
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              required
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </label>

          <label>
            Subject
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project, internship, or collaboration"
              aria-invalid={Boolean(errors.subject)}
              required
            />
            {errors.subject && <span className="form-error">{errors.subject}</span>}
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe the opportunity or question."
              rows="6"
              aria-invalid={Boolean(errors.message)}
              required
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </label>

          <button className="btn btn-primary" type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send message"}
          </button>

          {status && <p className="form-status" aria-live="polite">{status}</p>}
        </form>

        <aside className="contact-sidebar">
          <article className="contact-card">
            <h3>Contact details</h3>
            <p>Reach out directly via email, phone, or LinkedIn for faster responses.</p>
            <ul className="contact-list">
              <li>
                <strong>Email</strong>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <strong>Phone</strong>
                <a href={toTelHref(contact.phone)}>{contact.phone}</a>
              </li>
              <li>
                <strong>LinkedIn</strong>
                <a href={contact.linkedIn} target="_blank" rel="noreferrer">
                  {displayUrl(contact.linkedIn)}
                </a>
              </li>
              <li>
                <strong>GitHub</strong>
                <a href={contact.github} target="_blank" rel="noreferrer">
                  {displayUrl(contact.github)}
                </a>
              </li>
            </ul>
          </article>

          <article className="contact-card contact-availability">
            <h3>Availability</h3>
            <p>Open to internships, freelance engagements, and product-building collaborations with early-stage teams.</p>
          </article>
        </aside>
      </div>
    </section>
  );
}

export default ContactPage;
