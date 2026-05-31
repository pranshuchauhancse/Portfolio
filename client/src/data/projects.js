export const projects = [
  {
    slug: "cash-craft",
    title: "Cash Craft — Personal Finance Management System",
    desc: "Full-stack budgeting and transaction analytics with a responsive dashboard and secure backend.",
    category: "Full Stack",
    timeline: "2024",
    role: "Full-stack engineer",
    featured: true,
    preview: { label: "Budget dashboard preview", variant: "finance" },
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT", "CSS"],
    links: {
      github: "https://github.com/pranshuchauhancse/Cash-Craft-The-Smart-Budget-System",
      demo: ""
    },
    highlights: [
      "Built a budget tracking dashboard with chart-based spending insights",
      "Implemented authenticated expense workflows and category-level analytics",
      "Delivered a reusable MERN architecture with clear product flows",
    ],
    problem: "Personal finance information was fragmented, making it hard to compare budgets and spending in one place.",
    solution: "Created a centralized MERN application that combines transaction logging, budget planning, and cash-flow visualization.",
    architecture: "React communicates with Express APIs while MongoDB stores budgets, expenses, and category metadata. JWT secures user sessions with protected transaction endpoints.",
    overview: "Cash Craft is a product-ready personal finance tool built to help users track budgets, log expenses, and measure spending behavior across categories.",
    research: "I focused on common personal finance pain points and prioritized fast entry, clear analytics, and an intuitive dashboard for non-technical users.",
    technicalDecisions: [
      "Used React for responsive dashboards and state-driven metric updates",
      "Designed Express API routes for secure CRUD operations and budget aggregation",
      "Modeled MongoDB collections to support categories, transactions, and user profiles",
      "Leveraged Chart.js for interactive spending visuals and summary charts",
    ],
    challenges: [
      "Keeping dashboard metrics in sync after transaction updates",
      "Balancing mobile-first design with rich analytics views",
      "Protecting user data while preserving a lightweight auth flow",
    ],
    lessonsLearned: [
      "Clear backend contracts reduce frontend complexity",
      "Sight-lines matter: good dashboards make it easy to compare totals and trends",
      "Reusable form components accelerate feature delivery.",
    ],
    futureImprovements: [
      "Add CSV import/export for transaction history",
      "Introduce programmable budget alerts and recommendations",
      "Extend reporting with trend comparisons and goal tracking",
    ],
    screenshots: [
      {
        title: "Budget dashboard",
        description: "Interactive spending charts with category filters and balance summaries.",
      },
      {
        title: "Transaction flow",
        description: "Secure logging, filtering, and review of expense entries with category tags.",
      },
    ],
    results: [
      "Centralized budget tracking into a single reliable full-stack workflow",
      "Built a recruiter-ready case study with both frontend polish and backend depth",
      "Delivered faster transaction review and clearer spending signals",
    ],
  },
  {
    slug: "nyay-ai",
    title: "Nyay-AI — AI Legal Assistance Prototype",
    desc: "A Flask-backed conversational assistant that translates legal questions into actionable guidance.",
    category: "AI",
    timeline: "2024",
    role: "AI integration engineer",
    featured: true,
    preview: { label: "Legal AI assistant preview", variant: "ai" },
    tags: ["Python", "Flask", "OpenAI", "NLP"],
    stack: ["Python", "Flask", "OpenAI", "spaCy", "HTML", "CSS"],
    links: {
      github: "https://github.com/pranshuchauhancse/Nyay-AI-AI-Legal-Assistance-System",
      demo: ""
    },
    highlights: [
      "Built a legal question workflow with AI-powered summarization",
      "Integrated OpenAI API for intent-aware responses and guidance",
      "Delivered an accessible UI for non-expert users to explore legal topics",
    ],
    problem: "Legal information is often hard to navigate for people who need fast, practical guidance.",
    solution: "Structured an AI assistant that converts natural language prompts into concise, contextual recommendations.",
    architecture: "Flask handles requests and prompt preparation, while OpenAI returns contextual legal guidance that displays in the frontend UI.",
    overview: "Nyay-AI is a prototype that demonstrates how AI can make legal topics more approachable through conversational interfaces and structured feedback.",
    research: "I analyzed how users ask legal questions and then built a flow to reduce ambiguity, preserve context, and surface next steps clearly.",
    technicalDecisions: [
      "Separated prompt creation from response rendering to improve reliability",
      "Used spaCy for lightweight NLP preprocessing of user input",
      "Designed backend validation and error handling for AI response quality",
      "Built a mobile-friendly interface for quick question entry and answer review",
    ],
    challenges: [
      "Managing prompt quality while avoiding overreach in legal topics",
      "Handling AI response consistency and safe fallback messages",
      "Creating a clean UI that supports both guidance and next-step context",
    ],
    lessonsLearned: [
      "AI prototypes are strongest when they solve a real user workflow",
      "Reliable fallback behavior preserves trust in conversational interfaces",
      "Iterating on prompt structure quickly improves response relevance.",
    ],
    futureImprovements: [
      "Add session history and linked advice for repeated questions",
      "Support document or case upload for richer context",
      "Introduce user-specific guidance categories and follow-up prompts",
    ],
    screenshots: [
      {
        title: "AI query flow",
        description: "Natural language question entry with contextual answer presentation.",
      },
      {
        title: "Backend workflow",
        description: "Flask-powered request handling with OpenAI prompt enrichment.",
      },
    ],
    results: [
      "Created an AI-enabled prototype that simplifies legal question workflows",
      "Showcased engineering skill across backend, frontend, and prompt design",
      "Delivered a polished project narrative aligned with recruiter expectations",
    ],
  },
];

export function getProjectBySlug(projectSlug) {
  return projects.find((project) => project.slug === projectSlug) || null;
}
