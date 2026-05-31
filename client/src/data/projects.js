export const projects = [
  {
    slug: "cash-craft",
    title: "Cash Craft – Personal Finance Management System",
    desc: "A MERN-based finance dashboard that helps users track spending, manage budgets, and visualize cash flow.",
    category: "Full Stack",
    timeline: "2024",
    role: "Full-stack developer",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Chakra UI"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "JWT", "CSS"],
    links: {
      github: "https://github.com/pranshuchauhancse/Cash-Craft-The-Smart-Budget-System",
      demo: ""
    },
    highlights: [
      "Designed responsive budgeting and spending tracking flows",
      "Built a React dashboard with charts for daily and monthly performance",
      "Implemented secure backend APIs for transaction management",
      "Delivered a polished application for personal finance planning",
    ],
    problem: "Users needed one place to organize budgets, review transactions, and compare spending across categories.",
    solution: "Created a modern MERN app with authentication, dynamic expense categories, and visual spending insights.",
    architecture: "React client communicates with an Express API, storing user transactions and budgets in MongoDB.",
    results: [
      "Reduced manual spreadsheet work by centralizing transaction tracking",
      "Enabled category-level budget visibility with interactive charts",
      "Built a reusable full-stack portfolio app showcasing both frontend and backend skills",
    ],
    achievements: [
      "Delivered a complete finance workflow from signup to reporting",
      "Enabled real-time updates across dashboard and transaction screens",
      "Refined UI with clear status indicators and mobile-friendly design",
    ],
  },
  {
    slug: "nyay-ai",
    title: "Nyay-AI – AI Legal Assistance System",
    desc: "An AI assistant for legal questions that interprets natural language and returns contextual guidance.",
    category: "AI",
    timeline: "2024",
    role: "AI integration engineer",
    tags: ["Python", "NLP", "OpenAI API", "Flask"],
    stack: ["Python", "Flask", "OpenAI", "spaCy", "HTML", "CSS"],
    links: {
      github: "https://github.com/pranshuchauhancse/Nyay-AI-AI-Legal-Assistance-System",
      demo: ""
    },
    highlights: [
      "Built a natural language interface for legal guidance",
      "Integrated OpenAI to interpret and respond to user queries",
      "Processed meaning from text using NLP techniques",
    ],
    problem: "Legal research is complex and technical, making it hard for everyday users to understand next steps.",
    solution: "Developed an AI-powered chat assistant that translates user questions into helpful legal direction.",
    architecture: "A Flask backend processes requests, uses OpenAI for reasoning, and returns concise answers in the UI.",
    results: [
      "Created a practical proof of concept for AI-assisted legal guidance",
      "Simplified legal language with prompt engineering and contextual responses",
      "Demonstrated AI integration without exposing private data or sensitive details",
    ],
    achievements: [
      "Built a production-ready OpenAI workflow with prompt and response handling",
      "Delivered a web experience that makes legal topics approachable",
      "Used NLP to improve query intent and answer relevance",
    ],
  },
];

export function getProjectBySlug(projectSlug) {
  return projects.find((project) => project.slug === projectSlug) || null;
}
