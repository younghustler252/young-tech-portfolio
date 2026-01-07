"use client";

import { GraduationCap, Laptop, Star } from "lucide-react";

const certificates = [
	{
		title: "Self-Taught Full-Stack Web Developer",
		org: "Education",
		year: "2024",
		icon: <GraduationCap size={20} />,
	},
	{
		title: "Frontend & Backend Mastery",
		org: "Coding Achievement",
		year: "2023",
		icon: <Laptop size={20} />,
	},
	{
		title: "Project Portfolio Showcase",
		org: "Recognition",
		year: "2024",
		icon: <Star size={20} />,
	},
];

export default function CertificatesPanel() {
	return (
		<div className="max-w-4xl mx-auto">

			{/* Big Glass Box */}
			<div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md shadow-blue-500/10">

				<p className="text-gray-300 mb-6">
					A timeline of my educational milestones, coding achievements, and notable projects.
				</p>

				<div className="relative pl-12 space-y-10">
					{/* Vertical Line */}
					<div className="absolute left-6 top-6 bottom-6 w-[2px] bg-blue-400/50" />

					{certificates.map((cert, index) => (
						<div key={index} className="flex items-start gap-4 relative z-10">

							{/* Icon Circle */}
							<div className="flex-shrink-0 bg-blue-400 p-2 rounded-full shadow-lg shadow-blue-400/30">
								{cert.icon}
							</div>

							{/* Text */}
							<div>
								<h4 className="text-white font-semibold text-lg">
									{cert.title}
								</h4>
								<p className="text-gray-400 text-sm">
									{cert.org} • {cert.year}
								</p>
							</div>

						</div>
					))}
				</div>

			</div>
		</div>
	);
}
