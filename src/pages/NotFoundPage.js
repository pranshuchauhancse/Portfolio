import React from "react";
import { Link } from "../router";

const HOME_PATH = "/";

function NotFoundPage() {
  return (
    <section className="section section-shell">
      <h2>404</h2>
      <p className="lead">That page doesn’t exist.</p>
      <Link className="btn btn-primary" to={HOME_PATH}>
        Go Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
