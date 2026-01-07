"use client";

const frontendSkills = [
	{ name: "React", level: 85 },
	{ name: "Next.js", level: 75 },
	{ name: "TypeScript", level: 80 },
	{ name: "Tailwind CSS", level: 90 },
];

const backendSkills = [
	{ name: "Node.js", level: 75 },
	{ name: "Express", level: 70 },
	{ name: "MongoDB", level: 70 },
];

export default function SkillsPanel() {
	return (
		<div className="grid md:grid-cols-2 gap-16">
			
			<SkillGroup title="Frontend" skills={frontendSkills} />
			<SkillGroup title="Backend" skills={backendSkills} />

		</div>
	);
}

function SkillGroup({
	title,
	skills,
}: {
	title: string;
	skills: { name: string; level: number }[];
}) {
	return (
		<div>
			<h3 className="mb-8 text-sm uppercase tracking-[0.2em] text-gray-400">
				{title}
			</h3>

			<div className="space-y-6">
				{skills.map((skill) => (
					<SkillBar key={skill.name} {...skill} />
				))}
			</div>
		</div>
	);
}

function SkillBar({ name, level }: { name: string; level: number }) {
	return (
		<div className="group">
			
			{/* Header */}
			<div className="flex justify-between items-center mb-2">
				<span className="text-sm text-gray-200">
					{name}
				</span>
				<span className="text-xs text-gray-400">
					{level}%
				</span>
			</div>

			{/* Bar */}
			<div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
				
				{/* Accent Glow (subtle) */}
				<div
					className="
						absolute inset-y-0 left-0
						bg-cyan-400/20
						blur-md
						transition-all duration-700 ease-out
					"
					style={{ width: `${level}%` }}
				/>

				{/* Primary Bar */}
				<div
					className="
						relative h-full
						bg-blue-400
						transition-all duration-700 ease-out
					"
					style={{ width: `${level}%` }}
				/>
			</div>
		</div>
	);
}
