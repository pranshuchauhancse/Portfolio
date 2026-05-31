import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function CertificationCard({ certification }) {
  const formattedDate = certification.date
    ? new Date(certification.date).toLocaleDateString(undefined, {
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <article className="certification-card">
      <div className="certification-head">
        <div className="certification-icon">{certification.icon || "🎓"}</div>
        <div>
          <h3>{certification.title}</h3>
          <p className="certification-issuer">{certification.issuer}</p>
        </div>
      </div>

      <p className="certification-date">{formattedDate}</p>

      {certification.link ? (
        <a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-link"
        >
          Verify credential <FaExternalLinkAlt className="icon-inline" />
        </a>
      ) : (
        <span className="certification-tag">Verification pending</span>
      )}
    </article>
  );
}

export default CertificationCard;
