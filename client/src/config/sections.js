export const DEFAULT_SECTION_ID = "home";
export const DEFAULT_SECTION_HASH = "#home";

export const ONE_PAGE_ROUTE_TO_SECTION_ID = {
  "/": DEFAULT_SECTION_ID,
  "/about": "about",
  "/skills": "skills",
  "/projects": "projects",
  "/resume": "resume",
  "/timeline": "timeline",
  "/certifications": "certifications",
  "/cocurricular": "cocurricular",
  "/testimonials": "testimonials",
  "/case-studies": "case-studies",
  "/contact": "contact",
};

export const ONE_PAGE_SECTION_ORDER = [
  "about",
  "skills",
  "projects",
  "resume",
  "timeline",
  "certifications",
  "cocurricular",
  "testimonials",
  "case-studies",
  "contact",
];

export const NAVIGATION_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Timeline", href: "#timeline" },
  { label: "Certifications", href: "#certifications" },
  { label: "Co-Curricular", href: "#cocurricular" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export const HOME_EXPLORE_CARDS = [
  {
    title: "About",
    desc: "Get a quick overview of my background, work style, and strengths.",
    to: "#about",
  },
  {
    title: "Projects",
    desc: "Browse shipped projects with tech stack, details, and outcomes.",
    to: "#projects",
  },
  {
    title: "Case Studies",
    desc: "See how I approach problems from discovery to delivery.",
    to: "#case-studies",
  },
  {
    title: "Timeline",
    desc: "Follow my growth path through learning, building, and collaboration.",
    to: "#timeline",
  },
  {
    title: "Contact",
    desc: "Reach out for internships, freelance work, or collaboration.",
    to: "#contact",
  },
];
