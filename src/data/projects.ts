// /data/projects.ts
export type Project = {
  title: string
  description: string
  challenge?: string[]
  solution?: string[]
  techStacks: string[]
  githubLink: string
  liveDemoLink?: string
  images: string[]
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website designed to showcase projects, skills, and professional experience with a clean, modern, and responsive interface.",
    challenge: [
      "Needed a way to present my projects and technical skills professionally to potential clients and employers.",
      "Required a design that is fully responsive and visually engaging without compromising performance.",
    ],
    solution: [
      "Built a modular Next.js site with interactive project carousels and skill panels.",
      "Implemented smooth animations and responsive layouts using Tailwind CSS.",
      "Structured content with semantic HTML and accessibility in mind, ensuring an optimal experience across devices.",
    ],
    techStacks: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    githubLink: "https://github.com/younghustler252/young-tech-portfolio",
    liveDemoLink: "https://young-tech-portfolio.netlify.app",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    ],
  },
  {
    title: "EveryVoice Blog Platform",
    description:
      "A community-driven blogging platform with role-based access, secure authentication, and performance-focused architecture for content creators.",
    challenge: [
      "Users needed a secure and scalable way to create and manage blogs with role-based access control.",
      "Required efficient data fetching and caching to provide a seamless reading experience.",
    ],
    solution: [
      "Implemented React Query for efficient API caching and background data refetching.",
      "Designed modular frontend and backend architecture for long-term maintainability.",
      "Ensured secure authentication and authorization with protected routes for different user roles.",
      "Optimized performance with lazy loading and minimal data fetching overhead.",
    ],
    techStacks: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/younghustler252/young-news-hub",
    liveDemoLink: "https://everyvoice.netlify.app",
    images: [
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    ],
  },
  {
    title: "Young GadgetHub – E-Commerce Platform",
    description:
      "A modern, scalable eCommerce platform focusing on clean UX, product discovery, and efficient backend integration for dynamic product data.",
    challenge: [
      "Needed a fast, interactive online shopping experience with search, filtering, and pagination.",
      "Required a consistent, reusable frontend architecture for rapid feature expansion.",
    ],
    solution: [
      "Built a reusable React frontend integrated with Express APIs and MongoDB for dynamic product data.",
      "Implemented search, filtering, and pagination features for better product discovery.",
      "Developed reusable UI components to maintain design consistency across pages.",
      "Ensured smooth performance and a mobile-first responsive design.",
    ],
    techStacks: ["React", "Express", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/younghustler252/Young-Gadget-Hub-commercial-store",
    liveDemoLink: "https://young-gadget.netlify.app/",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    ],
  },
  {
    title: "Vendor Order Web App – Mobile-First",
    description:
      "A WhatsApp-powered ordering system enabling customers to place orders and vendors to receive them instantly, tailored for small vendors.",
    challenge: [
      "Small vendors needed an easy way to manage and receive orders online without complex setups.",
      "The system needed to be mobile-first for on-the-go vendor and customer use.",
      "Ensuring clarity and usability for users unfamiliar with digital ordering platforms.",
    ],
    solution: [
      "Designed a mobile-first ordering interface with React/Next.js, focusing on responsive design and usability.",
      "Integrated WhatsApp API for instant order notifications to vendors.",
      "Structured product and order views to reflect real inventory and ordering workflows.",
      "Prioritized scalability to support future backend integration and additional features.",
    ],
    techStacks: ["Next.js", "WhatsApp API", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/vendor-whatsapp-order-app",
    liveDemoLink: "https://vendor-order-appdemo.netlify.app",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    ],
  },
]
