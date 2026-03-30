import React from "react";

function LoadingSkeleton() {
  return (
    <section className="section section-shell">
      <div className="skeleton-wrapper" aria-hidden="true">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line short" />
        <div className="skeleton-grid">
          <div className="skeleton skeleton-card" />
          <div className="skeleton skeleton-card" />
          <div className="skeleton skeleton-card" />
        </div>
      </div>
    </section>
  );
}

export default LoadingSkeleton;
