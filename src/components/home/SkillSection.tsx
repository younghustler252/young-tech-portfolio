"use client";

import { Monitor, Server, Wrench } from "lucide-react";
import Link from "next/link";

type Skill = {
	title: string;
	description: string;
	techStack: string[];
	icon: React.ReactNode;
};

export default function SkillsSection() {
	const skills: Skill[] = [
		{
			title: "Frontend Web Development",
			description:
				"Building modern, responsive, and accessible interfaces with a strong focus on performance and clean design.",
			techStack: ["React", "Next.js", "Tailwind", "TypeScript", "CSS"],
			icon: <Monitor className="h-6 w-6" />,
		},
		{
			title: "Backend Web Development",
			description:
				"Creating scalable backend systems, secure APIs, and efficient data handling for web applications.",
			techStack: ["Node.js", "Express", "MongoDB", "Redis", "BullMQ"],
			icon: <Server className="h-6 w-6" />,
		},
		{
			title: "Tools & DevOps",
			description:
				"Using industry-standard tools to streamline development, version control, and deployments.",
			techStack: ["Git", "GitHub", "Render", "VS Code"],
			icon: <Wrench className="h-6 w-6" />,
		},
	];

	return (
		<section className="relative min-h-screen bg-black px-6 py-24 md:px-20">
			<h2 className="mb-16 text-center text-4xl font-extrabold tracking-tight text-white md:text-5xl">
				My Skills
			</h2>

			<div className="grid gap-8 md:grid-cols-3">
				{skills.map((skill) => (
					<div
						key={skill.title}
						className="
							group relative flex flex-col rounded-xl
							bg-white/5 backdrop-blur-md border border-white/10
							p-8 transition-all duration-300 hover:-translate-y-2
							hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
						"
					>
						{/* Neon Glow Card */}
						<div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none">
							<div className="absolute inset-0 rounded-xl bg-blue-400/10 blur-md" />
						</div>

						<div className="relative z-10 flex flex-col h-full">
							{/* Icon */}
							<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400 transition group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.6)]">
								{skill.icon}
							</div>

							{/* Title */}
							<h3 className="text-xl font-semibold text-white mb-3">
								{skill.title}
							</h3>

							{/* Tech Stack */}
							<div className="mt-2 flex flex-wrap gap-2">
								{skill.techStack.map((tech) => (
									<span
										key={tech}
										className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-200 transition hover:border-blue-400 hover:shadow-[0_0_8px_rgba(59,130,246,0.4)]"
									>
										{tech}
									</span>
								))}
							</div>

							{/* Description */}
							<p className="mt-5 text-sm leading-relaxed text-gray-300 flex-1">
								{skill.description}
							</p>
						</div>
					</div>
				))}
			</div>

			<Link
				href="/contact"
				className="
					mx-auto mt-16 inline-flex items-center justify-center rounded-lg
					px-8 py-3 font-semibold text-white border border-blue-400
					hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
					transition-all duration-300
				"
			>
				Learn More About My Skills
			</Link>
		</section>
	);
}
