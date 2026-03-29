import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSkeleton from "./components/LoadingSkeleton";
import { RouteView, usePathname } from "./router";
import { AnimatePresence, motion } from "framer-motion";

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

const appRoutes = [
  { path: "/", title: "Home", component: HomePage },
  { path: "/about", title: "About", component: AboutPage },
  { path: "/skills", title: "Skills", component: SkillsPage },
  { path: "/projects", title: "Projects", component: ProjectsPage },
  { path: "/projects/:slug", title: "Project", component: ProjectDetailPage },
  { path: "/resume", title: "Resume", component: ResumePage },
  { path: "/timeline", title: "Timeline", component: TimelinePage },
  { path: "/certifications", title: "Certifications", component: CertificationsPage },
  { path: "/cocurricular", title: "Co-Curricular", component: CoCurricularPage },
  { path: "/testimonials", title: "Testimonials", component: TestimonialsPage },
  { path: "/case-studies", title: "Case Studies", component: CaseStudiesPage },
  { path: "/case-studies/:slug", title: "Case Study", component: CaseStudyDetailPage },
  { path: "/contact", title: "Contact", component: ContactPage },
  { path: "*", title: "Not Found", component: NotFoundPage },
];

function App() {
  const pathname = usePathname();

  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <AnimatePresence mode="wait">
          <motion.div
            className="route-stage"
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <Suspense fallback={<LoadingSkeleton />}>
              <RouteView pathname={pathname} routes={appRoutes} />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
