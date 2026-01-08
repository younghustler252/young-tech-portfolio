"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"

export default function ProjectSection() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [prevIndex, setPrevIndex] = useState<number | null>(null)

	// Slide carousel interval (runs once)
	useEffect(() => {
		const interval = setInterval(() => {
			setPrevIndex(currentIndex)
			setCurrentIndex((prev) => (prev + 1) % projects.length)
		}, 5000)

		return () => clearInterval(interval)
	}, [currentIndex])

	return (
		<section className="py-28 px-6 max-w-7xl mx-auto overflow-hidden">
			<h2 className="text-5xl font-bold mb-6 text-center tracking-tight text-white">
				Selected Work
			</h2>

			<p className="text-center text-gray-400 mb-16">
				View some of my recent work and projects
			</p>

			<div className="relative h-[520px] md:h-[480px] rounded-2xl overflow-hidden">
				{projects.map((project, index) => {
					// Render only current + previous slide for performance
					if (index !== currentIndex && index !== prevIndex) return null

					let position = "translate-x-full opacity-0 z-0" // hidden right
					if (index === currentIndex) position = "translate-x-0 opacity-100 z-20" // center
					else if (index === prevIndex) position = "-translate-x-full opacity-0 z-10" // slide out left

					return (
						<div
							key={index}
							className={`absolute inset-0 transition-transform transition-opacity duration-[1000ms] ease-in-out ${position}`}
						>
							<div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
								<img
									src={project.images[0]}
									alt={project.title}
									className="w-full h-full object-cover brightness-90"
									loading="lazy"
								/>

								<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

								<div className="absolute bottom-8 left-8 max-w-xl p-6 rounded-lg bg-black/30 backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-300 hover:translate-x-1 hover:translate-y-1">
									<h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
									<p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.techStacks.map((tech, i) => (
											<span
												key={i}
												className="px-3 py-1 text-xs rounded-full border border-white/30 text-white/90 backdrop-blur-sm hover:border-cyan-400 hover:text-cyan-400 transition"
											>
												{tech}
											</span>
										))}
									</div>

									<div className="flex items-center gap-4 mt-2">
										<a
											href={project.githubLink}
											target="_blank"
											className="flex items-center gap-2 text-white/90 hover:text-cyan-400 transition"
										>
											<Github size={18} />
											Code
										</a>

										{project.liveDemoLink && (
											<a
												href={project.liveDemoLink}
												target="_blank"
												className="flex items-center gap-2 text-white/90 hover:text-cyan-400 transition"
											>
												<ExternalLink size={18} />
												Live
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>

			{/* Carousel Dots */}
			<div className="flex justify-center gap-3 mt-8">
				{projects.map((_, i) => (
					<button
						key={i}
						onClick={() => {
							setPrevIndex(currentIndex)
							setCurrentIndex(i)
						}}
						className={`h-2 rounded-full transition-all duration-500 ${
							i === currentIndex ? "w-10 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" : "w-4 bg-gray-500"
						}`}
					/>
				))}
			</div>
		</section>
	)
}
