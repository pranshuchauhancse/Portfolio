import React from "react";
import Seo from "../components/Seo";
import { blogPosts } from "../data/blog";
import { Link } from "../router";

function BlogDetailPage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return (
      <section className="section section-shell blog-detail-page">
        <Seo title="Blog article not found" description="The requested blog article could not be found." />
        <div className="page-header">
          <p className="eyebrow">Blog</p>
          <h2>Article not found</h2>
          <p className="lead">The article you requested does not exist. Browse other posts below.</p>
        </div>
        <Link to="/blog" className="btn btn-primary">
          Back to blog
        </Link>
      </section>
    );
  }

  return (
    <section className="section section-shell blog-detail-page">
      <Seo
        title={`${post.title} | Blog | Pranshu Chauhan`}
        description={post.excerpt}
      />

      <div className="page-header">
        <p className="eyebrow">Blog</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <div className="tag-row">
          <span>{post.date}</span>
          {post.tags.map((tag) => (
            <span key={tag} className="pill">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <article className="content-card">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>

      <div className="blog-detail-actions">
        <Link to="/blog" className="btn btn-ghost">
          Back to blog
        </Link>
      </div>
    </section>
  );
}

export default BlogDetailPage;
