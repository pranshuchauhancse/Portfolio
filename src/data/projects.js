export const projects = [
  {
    slug: "cash-craft",
    title: "Cash Craft – Personal Finance Management System",
    desc: "A MERN-based finance management application for budgeting and expense tracking.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
    links: {
      github: "https://github.com/pranshuchauhancse/Cash-Craft-The-Smart-Budget-System",
      demo: "https://github.com/pranshuchauhancse/Cash-Craft-The-Smart-Budget-System"
    },
    highlights: [
      "Built budgeting + expense tracking flows",
      "React dashboard to visualize transactions and daily spending",
      "CRUD to add, edit, delete, and categorize transactions",
      "Integrated authentication + backend APIs for secure storage",
    ],
  },
  {
    slug: "nyay-ai",
    title: "Nyay-AI – AI Legal Assistance System",
    desc: "An AI-powered legal assistance platform that provides guidance through natural language queries.",
    tags: ["Python", "NLP", "OpenAI API"],
    links: {
      github: "https://github.com/pranshuchauhancse/Nyay-AI-AI-Legal-Assistance-System",
      demo: "https://github.com/pranshuchauhancse/Nyay-AI-AI-Legal-Assistance-System"
    },
    highlights: [
      "Guidance via natural language queries",
      "Integrated OpenAI APIs with a custom legal dataset",
      "Backend processing with Python + NLP for query interpretation",
    ],
  },
];

export function getProjectBySlug(projectSlug) {
  return projects.find((project) => project.slug === projectSlug) || null;
}
