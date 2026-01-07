// /data/skills.ts
export type SkillItem = {
	name: string            // e.g., React, Node.js
	level?: number           // optional, for progress bars (0-100)
	techStack?: string[]     // optional, detailed tech stack
	concepts?: string[]      // optional, for skills like REST, responsive design
}

export type SkillCategory = {
	category: string         // e.g., Frontend, Backend, Tools & Concepts
	items: SkillItem[]
}

export const skills: SkillCategory[] = [
	{
		category: "Frontend",
		items: [
			{
				name: "React",
				level: 85,
				concepts: ["Responsive Design", "Component Architecture", "State Management"],
			},
			{ 
				name: "Next.js", 
				level: 75, 
				concepts: ["Server-Side Rendering", "Static Site Generation"] 
			},
			{ name: "TypeScript", level: 80 },
			{ name: "Tailwind CSS", level: 90, concepts: ["Responsive Design", "Utility-First CSS"] },
		],
	},
	{
		category: "Backend",
		items: [
			{
				name: "Node.js",
				level: 75,
				concepts: ["Event-Driven Architecture", "RESTful API Development"]
			},
			{ name: "Express", level: 70, concepts: ["Middleware", "Routing", "Error Handling"] },
			{ name: "MongoDB", level: 70, concepts: ["Schema Design", "Aggregation", "Indexes"] },
			{ name: "Redis", level: 65, concepts: ["Caching", "Pub/Sub"] },
			{ name: "BullMQ", level: 60, concepts: ["Background Jobs", "Queue Management"] },
		],
	},
	{
		category: "Tools & DevOps",
		items: [
			{ name: "Git", techStack: ["GitHub", "GitLab"] },
			{ name: "Render", techStack: ["Hosting & Deployment"] },
			{ name: "VS Code" },
			{ name: "API Design", concepts: ["RESTful API", "Authentication & Authorization", "Versioning"] },
			{ name: "Best Practices", concepts: ["Clean Code", "Code Reviews", "Responsive Design", "Performance Optimization"] },
		],
	},
]
