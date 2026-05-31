import { useEffect } from "react";

function updateMeta(name, content, attribute = "name") {
  if (!content) return;
  const selector = `${attribute}='${name}'`;
  let element = document.querySelector(`meta[${selector}]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function updateLink(rel, href) {
  if (!href) return;
  let element = document.querySelector(`link[rel='${rel}']`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function updateJsonLd(id, schema) {
  if (!schema) return;
  const existing = document.getElementById(id);
  const json = JSON.stringify(schema);
  if (existing) {
    existing.textContent = json;
    return;
  }
  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = json;
  document.head.appendChild(script);
}

function Seo({ title, description, url, image, keywords = [], type = "website", noIndex = false }) {
  useEffect(() => {
    const pageTitle = title || "Portfolio | Pranshu Chauhan";
    document.title = pageTitle;
    const pageUrl = url || window.location.href;

    updateMeta("description", description || "Software engineering portfolio showcasing projects, skills, and career-ready work.");
    updateMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");
    updateMeta("keywords", keywords.join(", "));
    updateMeta("og:title", pageTitle, "property");
    updateMeta("og:description", description || "Software engineering portfolio showcasing projects, skills, and career-ready work.", "property");
    updateMeta("og:type", type, "property");
    updateMeta("og:url", pageUrl, "property");
    if (image) updateMeta("og:image", image, "property");
    updateMeta("twitter:card", image ? "summary_large_image" : "summary");
    updateMeta("twitter:title", pageTitle, "name");
    updateMeta("twitter:description", description || "Software engineering portfolio showcasing projects, skills, and career-ready work.", "name");
    if (image) updateMeta("twitter:image", image, "name");
    updateLink("canonical", pageUrl);

    const schema = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "WebPage",
      name: pageTitle,
      description: description,
      url: pageUrl,
      author: {
        "@type": "Person",
        name: "Pranshu Chauhan",
      },
      publisher: {
        "@type": "Organization",
        name: "Pranshu Chauhan",
      },
    };
    updateJsonLd("seo-structured-data", schema);
  }, [title, description, url, image, keywords, type, noIndex]);

  return null;
}

export default Seo;
