import React, { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSkeleton from "./components/LoadingSkeleton";
import { matchPath, usePathname } from "./router";
import { motion } from "framer-motion";
import {
  ONE_PAGE_ROUTE_TO_SECTION_ID,
  ONE_PAGE_SECTION_ORDER,
} from "./config/sections";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CertificationsPage = lazy(() => import("./pages/CertificationsPage"));
const CoCurricularPage = lazy(() => import("./pages/CoCurricularPage"));
const TimelinePage = lazy(() => import("./pages/TimelinePage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const CaseStudyDetailPage = lazy(() => import("./pages/CaseStudyDetailPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const sectionComponents = {
  about: AboutPage,
  skills: SkillsPage,
  projects: ProjectsPage,
  resume: ResumePage,
  timeline: TimelinePage,
  certifications: CertificationsPage,
  cocurricular: CoCurricularPage,
  testimonials: TestimonialsPage,
  "case-studies": CaseStudiesPage,
  contact: ContactPage,
};

function OnePagePortfolio({ pathname }) {
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "").trim();
    const mappedSectionId = ONE_PAGE_ROUTE_TO_SECTION_ID[pathname];
    const targetId = hash || mappedSectionId;

    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    // Wait one frame to ensure lazy section content is mounted before scrolling.
    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname]);

  return (
    <>
      <HomePage />
      {ONE_PAGE_SECTION_ORDER.map((sectionId) => {
        const SectionComponent = sectionComponents[sectionId];
        if (!SectionComponent) return null;

        return (
          <div key={sectionId} id={sectionId} className="scroll-section">
            <SectionComponent />
          </div>
        );
      })}
    </>
  );
}

function resolveView(pathname) {
  const projectMatch = matchPath("/projects/:slug", pathname);
  if (projectMatch) {
    return {
      title: "Project",
      render: <ProjectDetailPage params={projectMatch.params} />,
    };
  }

  const caseStudyMatch = matchPath("/case-studies/:slug", pathname);
  if (caseStudyMatch) {
    return { title: "Case Study", render: <CaseStudyDetailPage /> };
  }

  if (pathname in ONE_PAGE_ROUTE_TO_SECTION_ID) {
    return { title: "Home", render: <OnePagePortfolio pathname={pathname} /> };
  }

  return { title: "Not Found", render: <NotFoundPage /> };
}

function App() {
  const pathname = usePathname();
  const view = resolveView(pathname);

  useEffect(() => {
    document.title = `${view.title} - Pranshu Chauhan Portfolio`;
  }, [view.title]);

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
