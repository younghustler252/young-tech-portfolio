"use client"

import { useState } from "react"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "@/data/projects"
import GlassCard from "@/components/GlassCard"

export default function ProjectsSection() {
	const [currentImage, setCurrentImage] = useState<Record<number, number>>({})

	const handleNextImage = (projectIndex: number) => {
		setCurrentImage(prev => ({
			...prev,
			[projectIndex]:
				((prev[projectIndex] ?? 0) + 1) %
				projects[projectIndex].images.length,
		}))
	}

	const handlePrevImage = (projectIndex: number) => {
		setCurrentImage(prev => ({
			...prev,
			[projectIndex]:
				(prev[projectIndex] ?? 0) === 0
					? projects[projectIndex].images.length - 1
					: (prev[projectIndex] ?? 0) - 1,
		}))
	}

	return (
		<section className="px-4 sm:px-6 md:px-10 py-16 md:py-20 max-w-6xl mx-auto space-y-24">
			{/* Page Title */}
			<div className="text-center">
				<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
					Selected Projects
				</h1>
				<p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
					A showcase of modern, detailed, and unique web applications I’ve built,
					highlighting challenges, solutions, and the tech used.
				</p>
			</div>

			{/* Projects */}
			{projects.map((project, index) => {
				const imageIndex = currentImage[index] ?? 0

				return (
					<div
						key={index}
						className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
					>
						{/* Image Panel */}
						<div className="relative col-span-1 md:col-span-5 h-56 md:h-[320px] lg:h-[360px] rounded-xl overflow-hidden shadow-xl">
							<img
								src={project.images[imageIndex]}
								alt={project.title}
								className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
							/>

							{/* Carousel Controls */}
							{project.images.length > 1 && (
								<>
									<button
										onClick={() => handlePrevImage(index)}
										className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 rounded-full hover:bg-black/70 transition"
									>
										<ChevronLeft size={22} color="white" />
									</button>
									<button
										onClick={() => handleNextImage(index)}
										className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 rounded-full hover:bg-black/70 transition"
									>
										<ChevronRight size={22} color="white" />
									</button>
								</>
							)}
						</div>

						{/* Content Panel */}
						<GlassCard className="col-span-1 md:col-span-7 flex flex-col gap-6 p-8 md:p-10 lg:p-12">
							<h2 className="text-3xl md:text-4xl font-bold text-white">
								{project.title}
							</h2>

							<p className="text-gray-300 text-lg leading-relaxed">
								{project.description}
							</p>

							{/* Challenges */}
							{(project.challenge ?? []).length > 0 && (
								<div>
									<h3 className="text-lg font-semibold text-cyan-400 mb-2">
										Challenges
									</h3>
									<ul className="space-y-2">
										{project.challenge?.map((item, i) => (
											<li
												key={i}
												className="text-gray-300 flex items-start gap-2"
											>
												<span className="w-2 h-2 mt-1 rounded-full bg-cyan-400 animate-pulse" />
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Solutions */}
							{(project.solution ?? []).length > 0 && (
								<div>
									<h3 className="text-lg font-semibold text-green-400 mb-2">
										Solutions
									</h3>
									<ul className="space-y-3">
										{project.solution?.map((item, i) => (
											<li
												key={i}
												className="text-gray-300 flex items-start gap-3"
											>
												<span className="w-3 h-3 mt-1 rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
												<span className="text-gray-200">{item}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Tech Stack */}
							<div className="flex flex-wrap gap-3 pt-2">
								{project.techStacks.map((tech, i) => (
									<span
										key={i}
										className="px-3 py-1 text-sm rounded-full border border-white/30 text-white/90 backdrop-blur-sm hover:border-cyan-400 hover:text-cyan-400 transition"
									>
										{tech}
									</span>
								))}
							</div>

							{/* Links */}
							<div className="flex flex-wrap gap-6 pt-4">
								<a
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-white/90 hover:text-cyan-400 transition font-medium"
								>
									<Github size={20} /> Code
								</a>

								{project.liveDemoLink && (
									<a
										href={project.liveDemoLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-white/90 hover:text-green-400 transition font-medium"
									>
										<ExternalLink size={20} /> Live
									</a>
								)}
							</div>
						</GlassCard>
					</div>
				)
			})}
		</section>
	)
}
