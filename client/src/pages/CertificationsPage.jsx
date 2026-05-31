import React from "react";
import Seo from "../components/Seo";
import Certifications from "../components/Certifications";
import { certifications } from "../data/certifications";

function CertificationsPage() {
  return (
    <section className="section section-shell certifications-page">
      <Seo
        title="Certifications | Pranshu Chauhan"
        description="Verified certifications and credentials that support Pranshu's full-stack and AI engineering expertise."
      />

      <div className="page-header">
        <p className="eyebrow">Certifications</p>
        <h2>Verified credentials that strengthen my technical profile.</h2>
        <p className="lead">A collection of certifications, training courses, and verified skills relevant for recruiters and hiring managers.</p>
      </div>

      <Certifications certifications={certifications} />
    </section>
  );
}

export default CertificationsPage;
