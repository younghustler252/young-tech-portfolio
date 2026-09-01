
export const capabilities = [
	{
		icon: "layout",
		title: "Product & UI",
		body: "Turning requirements into responsive, usable interfaces.",
	},
	{
		icon: "code",
		title: "Frontend Engineering",
		body: "React, Next.js, TypeScript, state management, forms and API integration.",
	},
	{
		icon: "server",
		title: "Backend Engineering",
		body: "Node.js, Express.js, REST APIs and business logic.",
	},
	{
		icon: "database",
		title: "Data",
		body: "MongoDB, PostgreSQL, Prisma and database architecture.",
	},
	{
		icon: "shield",
		title: "Security",
		body: "Authentication, authorization, validation, protected resources and secure API design.",
	},
	{
		icon: "network",
		title: "Infrastructure",
		body: "Linux, VPS deployment, networking, MikroTik and WireGuard.",
	},
] as const;



export const layers = [
	{
		number: "01",
		title: "Product & UI",
		body: "Responsive interfaces, dashboards, user experiences and mobile interfaces.",
	},
	{
		number: "02",
		title: "Frontend",
		body: "React, Next.js, TypeScript, Tailwind CSS, React Query, Zustand and modern frontend architecture.",
	},
	{
		number: "03",
		title: "Backend",
		body: "Node.js, Express.js, REST APIs, business logic and integrations.",
	},
	{
		number: "04",
		title: "Data",
		body: "MongoDB, PostgreSQL, Prisma ORM, schema design and data relationships.",
	},
	{
		number: "05",
		title: "Authentication & Security",
		body: "JWT authentication, authorization, protected routes, roles, permissions, validation and secure API design.",
	},
	{
		number: "06",
		title: "Infrastructure",
		body: "Linux, VPS, Git, deployment, networking, WireGuard and MikroTik integration.",
	},
];


export const journeySteps = [
  { label: "Frontend", detail: "Where it started — interfaces, layout, interaction." },
  { label: "React / Next.js", detail: "Component architecture and rendering models." },
  { label: "Backend", detail: "The question of what happens after the request leaves." },
  { label: "Node.js / Express", detail: "Routes, controllers, services, middleware." },
  { label: "Databases", detail: "Where state actually lives." },
  { label: "MongoDB / PostgreSQL", detail: "Documents, relations, and choosing between them." },
  { label: "APIs & Integrations", detail: "Making separate systems agree with each other." },
  { label: "Authentication & Security", detail: "Who is allowed to do what, and proving it." },
  { label: "Infrastructure", detail: "Linux, VPS, networking, deployment, tunnels." },
  { label: "Mobile", detail: "The current direction — React Native, on top of everything above." },
];
