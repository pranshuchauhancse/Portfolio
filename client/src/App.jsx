import React, { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSkeleton from "./components/LoadingSkeleton";
import { matchPath, usePathname } from "./router";
import { motion } from "framer-motion";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const CertificationsPage = lazy(() => import("./pages/CertificationsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const routeComponents = {
  "/": HomePage,
  "/about": AboutPage,
  "/projects": ProjectsPage,
  "/resume": ResumePage,
  "/certifications": CertificationsPage,
  "/blog": BlogPage,
  "/contact": ContactPage,
};

const routeTitles = {
  "/": "Portfolio",
  "/about": "About",
  "/projects": "Projects",
  "/resume": "Resume",
  "/certifications": "Certifications",
  "/blog": "Blog",
  "/contact": "Contact",
};

function resolveView(pathname) {
  const projectMatch = matchPath("/projects/:slug", pathname);
  if (projectMatch) {
    return {
      title: "Project",
      render: <ProjectDetailPage params={projectMatch.params} />,
    };
  }

  const blogMatch = matchPath("/blog/:slug", pathname);
  if (blogMatch) {
    return {
      title: "Blog",
      render: <BlogDetailPage params={blogMatch.params} />,
    };
  }

  const PageComponent = routeComponents[pathname];
  if (PageComponent) {
    return { title: routeTitles[pathname] || "Portfolio", render: <PageComponent /> };
  }

  return { title: "Not Found", render: <NotFoundPage /> };
}

function App() {
  const pathname = usePathname();
  const view = resolveView(pathname);

  useEffect(() => {
    document.title = pathname === "/" ? "Pranshu Chauhan — Portfolio" : `${view.title} — Pranshu Chauhan`;
  }, [pathname, view.title]);

  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <motion.div
          className="route-stage"
          key={pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<LoadingSkeleton />}>{view.render}</Suspense>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
