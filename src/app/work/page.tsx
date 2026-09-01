import { projects } from "@/config/projects"

import { CTA } from "@/components/sections/cta"
import { ProjectCard } from "@/components/ui/project-card"
import { Section, SectionHeading } from "@/components/layout/section"

export const metadata = {
	title: "Selected Work — Young Tech",
	description:
		"Case studies from Young Tech: an ISP network platform, a multi-tenant school SaaS, e-commerce, BNPL fintech, a content platform and a logistics website.",
	openGraph: {
		title: "Selected Work — Young Tech",
		description:
			"Real products, real problems, real engineering decisions — full case studies for each project.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
	},
}

export default function WorkPage() {
	return (
		<div>
			<Section className="border-t-0 hero-glow">
				<SectionHeading
					eyebrow="Work"
					title="Selected work"
					subtitle="Real products, real problems, real engineering decisions. Each project below has a full case study covering architecture, data, security and the decisions behind them."
				/>
			</Section>

			<Section className="pt-0">
				<div className="space-y-8">
					{projects.map((project, index) => (
						<ProjectCard
							key={project.slug}
							project={project}
							index={index}
						/>
					))}
				</div>
			</Section>

			<CTA />
		</div>
	)
}