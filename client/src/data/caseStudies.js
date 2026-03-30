export const caseStudies = [
  {
    id: 1,
    title: "Cash Craft Expense Tracker",
    slug: "cash-craft-expense-tracker",
    category: "React",
    client: "Personal Product Build",
    duration: "10 weeks",
    image: "🛒",
    problem: "Users needed a simple way to track daily expenses and monthly budgets without complex setup.",
    solution: "Built an intuitive dashboard with category tracking, quick-add transactions, and monthly summaries.",
    results: {
      activeUsage: "Daily",
      majorFeatures: "12",
      avgLoadTime: "<1.8s"
    },
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    details: "This project focused on reducing friction in personal finance tracking. The key decisions were around simple form UX, meaningful data visualization, and stable API responses."
  },
  {
    id: 2,
    title: "Nyay-AI Legal Assistant",
    slug: "nyay-ai-legal-assistant",
    category: "Full Stack",
    client: "Academic Innovation Project",
    duration: "8 weeks",
    image: "📊",
    problem: "Students and citizens often struggle to understand legal procedures due to dense legal language.",
    solution: "Created a query interface that turns plain-language prompts into concise legal guidance with structured responses.",
    results: {
      prototypeCompletion: "100%",
      testedScenarios: "50+",
      responseTime: "<2.5s"
    },
    technologies: ["Python", "NLP", "React", "Node.js"],
    details: "The main challenge was balancing response speed with meaningful explanation quality. Prompt design, structured output formatting, and fallback handling were key parts of the implementation."
  },
  {
    id: 3,
    title: "Portfolio Platform v2",
    slug: "portfolio-platform-v2",
    category: "Frontend Engineering",
    client: "Personal Brand Project",
    duration: "6 weeks",
    image: "✅",
    problem: "A static portfolio did not clearly communicate project depth, growth timeline, and contact pathways.",
    solution: "Redesigned the portfolio with route-based sections, content organization, and visual storytelling components.",
    results: {
      pagesAdded: "10+",
      uxConsistency: "Improved",
      mobileReadability: "High"
    },
    technologies: ["React", "Framer Motion", "CSS", "Custom Router"],
    details: "This case study was about content clarity and user flow. Navigation hierarchy, page-level messaging, and responsive behavior were all redesigned to make information easier to consume."
  }
];

export function getCaseStudyBySlug(caseStudySlug) {
  return caseStudies.find((study) => study.slug === caseStudySlug) || null;
}
