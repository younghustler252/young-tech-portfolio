"use client";

interface TechItem {
	name: string;
	icon: string;
}

const techStack: TechItem[] = [
	{
		name: "React",
		icon: "https://cdn.simpleicons.org/react/61DAFB",
	},
	{
		name: "Next.js",
		icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",
	},
	{
		name: "JavaScript",
		icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
	},
	{
		name: "TypeScript",
		icon: "https://cdn.simpleicons.org/typescript/3178C6",
	},
	{
		name: "Node.js",
		icon: "https://cdn.simpleicons.org/nodedotjs/339933",
	},
	{
		name: "Express",
		icon: "https://cdn.simpleicons.org/express/ffffff",
	},
	{
		name: "MongoDB",
		icon: "https://cdn.simpleicons.org/mongodb/47A248",
	},
];

export default function TechStack() {
	return (
		<div className="mt-2 flex justify-center">
			<div className="flex flex-wrap justify-center gap-4 max-w-4xl">
				{techStack.map((tech) => (
					<div
						key={tech.name}
						className="
							flex items-center gap-2 px-3 py-1.5
							border border-blue-400/30
							text-gray-300 text-sm
							transition-all duration-300
							hover:text-white
							hover:border-blue-400
							hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]
						"
					>
						<img
							src={tech.icon}
							alt={tech.name}
							className="w-4 h-4"
						/>
						<span>{tech.name}</span>
					</div>
				))}
			</div>
		</div>
	);
}
