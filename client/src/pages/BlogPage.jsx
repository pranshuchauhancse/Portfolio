import React from "react";
import Seo from "../components/Seo";
import { blogPosts } from "../data/blog";
import { Link } from "../router";

function BlogPage() {
  return (
    <section className="section section-shell blog-page">
      <Seo
        title="Blog | Pranshu Chauhan"
        description="Insights on product engineering, portfolio design, and full-stack delivery from Pranshu Chauhan."
      />

      <div className="page-header">
        <p className="eyebrow">Blog</p>
        <h2>Insights for product-minded engineering and portfolio growth.</h2>
        <p className="lead">Short posts on how I build recruiter-facing digital products and engineer modern web experiences.</p>
      </div>

      <div className="cards-grid blog-list">
        {blogPosts.map((post) => (
          <article key={post.slug} className="card card-preview">
            <div className="card-content">
              <p className="eyebrow">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <div className="card-footer">
              <Link to={`/blog/${post.slug}`} className="btn btn-ghost">
                Read article
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogPage;
