import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { FlowDiagram } from "@/components/ui/flow-diagram"
import { TreeDiagram } from "./tree-diagram"
import type { Project } from "@/config/projects"

type ProjectCardProps = {
	project: Project
	index: number
}

export function ProjectCard({
	project,
	index,
}: ProjectCardProps) {
	const flip = index % 2 === 1

	return (
		<article className="surface-card group relative overflow-hidden rounded-2xl transition-colors hover:border-border-strong">
			<div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
				{/* Project information */}

				<div
					className={
						flip
							? "p-6 sm:p-9 lg:order-2"
							: "p-6 sm:p-9"
					}
				>
					<div className="flex flex-wrap items-center gap-2">
						<Badge tone="accent">
							{project.category}
						</Badge>

						{project.status ? (
							<Badge tone="outline">
								{project.status}
							</Badge>
						) : null}
					</div>

					<h3 className="mt-5 text-2xl font-semibold sm:text-3xl">
						{project.name}
					</h3>

					<p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
						{project.short}
					</p>

					<dl className="mt-6 space-y-4 border-t border-border pt-6">
						<div>
							<dt className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
								Role
							</dt>

							<dd className="mt-1.5 text-sm text-foreground/90">
								{project.role}
							</dd>
						</div>

						<div>
							<dt className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
								Key engineering challenge
							</dt>

							<dd className="mt-1.5 text-sm text-foreground/90">
								{project.challenge}
							</dd>
						</div>
					</dl>

					<ul className="mt-6 flex flex-wrap gap-1.5">
						{project.stack.map((technology) => (
							<li key={technology}>
								<Badge>{technology}</Badge>
							</li>
						))}
					</ul>

					<Link
						href={`/work/${project.slug}`}
						className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-all hover:gap-3"
					>
						Explore case study

						<ArrowUpRight
							className="size-4"
							aria-hidden
						/>
					</Link>
				</div>

				{/* Architecture */}

				<div
					className={`relative flex items-center border-border bg-surface-2/30 p-6 sm:p-9 ${
						flip
							? "lg:order-1 lg:border-r"
							: "lg:border-l"
					} border-t lg:border-t-0`}
				>
					<div
						className="grid-lines pointer-events-none absolute inset-0 opacity-40"
						aria-hidden
					/>

					<div className="relative w-full">
						{project.diagram.kind === "flow" ? (
							<FlowDiagram
								nodes={project.diagram.nodes}
								title="Architecture"
								compact
							/>
						) : (
							<TreeDiagram
								root={project.diagram.root}
								branches={project.diagram.branches}
								title="Architecture"
							/>
						)}
					</div>
				</div>
			</div>
		</article>
	)
}