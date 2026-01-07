"use client";

const experiences = [
	{
		company: "Wifispace Unlimited Networks",
		role: "Full-Stack Web Developer",
		type: "Contract / Production Project",
		period: "2024 – Present",
		points: [
			"Developed and maintained backend services using Node.js and Express, following scalable REST API design principles.",
			"Implemented Redis caching to reduce repeated database queries and improve application responsiveness.",
			"Designed and managed background job processing using BullMQ for asynchronous tasks and system workflows.",
			"Applied secure authentication and authorization practices to protect application data and endpoints.",
			"Collaborated on system architecture decisions and integrated backend services with frontend applications.",
			"Contributed to building a production-oriented system with real-world usage requirements.",
		],
	},
	{
		company: "Financial Ecosystem",
		role: "Frontend Web Developer",
		type: "Gig / Contract",
		period: "2023 – 2024",
		points: [
			"Built a responsive company website using React and Tailwind CSS.",
			"Implemented interactive UI components and smooth animations for better UX.",
			"Integrated frontend with backend APIs for dynamic content updates.",
			"Focused on SEO, accessibility, and cross-browser performance.",
			"Delivered the project on time, with scalable structure for future updates.",
		],
	},
];

export default function ExperiencePanel() {
	return (
		<div className="max-w-4xl space-y-8">

			<p className="text-gray-300 leading-relaxed">
				Here’s a snapshot of my professional and freelance experience
				building modern web applications with a focus on frontend
				and full-stack development.
			</p>

			<div className="space-y-8">
				{experiences.map((exp, index) => (
					<div
						key={index}
						className="
							relative p-6 rounded-xl
							bg-white/5 backdrop-blur-md border border-white/10
							shadow-md shadow-blue-500/10
							transition-transform duration-300 hover:scale-[1.02]
						"
					>
						{/* Header */}
						<div className="mb-4">
							<h3 className="text-white font-semibold text-lg">
								{exp.role}
							</h3>
							<p className="text-sm text-gray-400">
								{exp.company} • {exp.type}
							</p>
							<p className="text-xs text-gray-500 mt-1">
								{exp.period}
							</p>
						</div>

						{/* Highlights */}
						<ul className="space-y-3 relative pl-5">
							{/* Accent Line */}
							<div className="absolute left-2 top-2 bottom-2 w-[2px] bg-blue-400/50" />
							{exp.points.map((point, i) => (
								<li key={i} className="flex items-start gap-3 relative z-10">
									<span className="mt-2 w-2 h-2 rounded-full bg-blue-400" />
									<p className="text-gray-300 leading-relaxed">{point}</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
