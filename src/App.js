import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { RouteView, usePathname } from "./router";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const appRoutes = [
  { path: "/", title: "Home", component: HomePage },
  { path: "/about", title: "About", component: AboutPage },
  { path: "/skills", title: "Skills", component: SkillsPage },
  { path: "/projects", title: "Projects", component: ProjectsPage },
  { path: "/projects/:slug", title: "Project", component: ProjectDetailPage },
  { path: "/resume", title: "Resume", component: ResumePage },
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
            <RouteView pathname={pathname} routes={appRoutes} />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
