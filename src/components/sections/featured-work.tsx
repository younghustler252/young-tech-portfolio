import Link from "next/link"

import { ArrowUpRight } from "lucide-react"
import { Section } from "../layout/section"
import { SectionHeading } from "../layout/section"
import { ProjectCard } from "../ui/project-card"
import { projects } from "@/config/projects"

export function FeaturedWork() {
	return (
		<Section>
			<div className="flex flex-wrap items-end justify-between gap-6">
				<SectionHeading
					eyebrow="Work"
					title="Selected work"
					subtitle="Real products, real problems, real engineering decisions."
				/>

				<Link
					href="/work"
					className="group inline-flex items-center gap-2 text-sm text-accent transition-all hover:gap-3"
				>
					All projects
					<ArrowUpRight
						className="size-4"
						aria-hidden
					/>
				</Link>
			</div>

			<div className="mt-12 space-y-8">
				{projects.slice(0, 3).map((project, index) => (
					<ProjectCard
						key={project.slug}
						project={project}
						index={index}
					/>
				))}
			</div>
		</Section>
	)
}