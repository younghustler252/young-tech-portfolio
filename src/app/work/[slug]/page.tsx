import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

import { getProject, projects } from "@/config/projects"

import { CTA } from "@/components/sections/cta"
import { FlowDiagram } from "@/components/ui/flow-diagram"
import { TreeDiagram } from "@/components/ui/tree-diagram"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/layout/section"

type PageProps = {
	params: Promise<{
		slug: string
	}>
}

export async function generateMetadata({ params }: PageProps) {
	const { slug } = await params
	const project = getProject(slug)

	if (!project) {
		return {
			title: "Case study not found — Young Tech",
			robots: {
				index: false,
			},
		}
	}

	const title = `${project.name} — Case Study | Young Tech`

	return {
		title,
		description: project.short,
		openGraph: {
			title,
			description: project.short,
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
		},
	}
}

export async function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}))
}

function Block({
	label,
	children,
}: {
	label: string
	children: React.ReactNode
}) {
	return (
		<section className="grid gap-4 border-t border-border py-10 md:grid-cols-[220px_1fr] md:gap-10">
			<h2 className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase md:pt-1">
				{label}
			</h2>

			<div className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
				{children}
			</div>
		</section>
	)
}

export default async function CaseStudyPage({ params }: PageProps) {
	const { slug } = await params
	const project = getProject(slug)

	if (!project) {
		notFound()
	}

	const cs = project.caseStudy

	const others = projects
		.filter((item) => item.slug !== project.slug)
		.slice(0, 3)

	return (
		<article>
			{/* Hero */}
			<Section className="hero-glow border-t-0 pb-12">
				<Link
					href="/work"
					className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
				>
					<ArrowLeft className="size-4" aria-hidden />
					All work
				</Link>

				<div className="mt-8 flex flex-wrap items-center gap-2">
					<Badge tone="accent">
						{project.category}
					</Badge>

					{project.status ? (
						<Badge tone="outline">
							{project.status}
						</Badge>
					) : null}
				</div>

				<h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl">
					{project.name}
				</h1>

				<p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
					{project.short}
				</p>

				<ul className="mt-8 flex flex-wrap gap-1.5">
					{project.stack.map((technology) => (
						<li key={technology}>
							<Badge>{technology}</Badge>
						</li>
					))}
				</ul>
			</Section>

			{/* Case study content */}
			<Section className="border-t-0 py-0">
				<Block label="Overview">
					{cs.overview}
				</Block>

				<Block label="The Problem">
					{cs.problem}
				</Block>

				<Block label="My Role">
					<ul className="space-y-2.5">
						{cs.myRole.map((role) => (
							<li
								key={role}
								className="flex gap-3"
							>
								<span
									className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
									aria-hidden
								/>

								<span>{role}</span>
							</li>
						))}
					</ul>
				</Block>

				{/* Architecture */}
				<section className="grid gap-4 border-t border-border py-10 md:grid-cols-[220px_1fr] md:gap-10">
					<h2 className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase md:pt-1">
						Architecture
					</h2>

					<div className="max-w-2xl">
						{project.diagram.kind === "flow" ? (
							<FlowDiagram
								nodes={project.diagram.nodes}
								title={`${project.name} — system flow`}
							/>
						) : (
							<TreeDiagram
								root={project.diagram.root}
								branches={project.diagram.branches}
								title={`${project.name} — tenancy model`}
							/>
						)}
					</div>
				</section>

				<Block label="Frontend">
					{cs.frontend}
				</Block>

				<Block label="Backend">
					{cs.backend}
				</Block>

				<Block label="Data">
					{cs.data}
				</Block>

				<Block label="Authentication & Security">
					{cs.security}
				</Block>

				<Block label="Integrations">
					{cs.integrations}
				</Block>

				{/* Challenge */}
				<section className="grid gap-4 border-t border-border py-10 md:grid-cols-[220px_1fr] md:gap-10">
					<h2 className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase md:pt-1">
						The Challenge
					</h2>

					<div className="max-w-2xl">
						<div className="surface-card rounded-xl border-l-2 border-l-accent p-5 text-[15px] leading-relaxed text-foreground/90">
							{cs.challenge}
						</div>
					</div>
				</section>

				{/* Engineering decision */}
				<section className="grid gap-4 border-t border-border py-10 md:grid-cols-[220px_1fr] md:gap-10">
					<h2 className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase md:pt-1">
						Engineering Decision
					</h2>

					<div className="max-w-2xl">
						<p className="font-mono text-[13px] tracking-wide text-muted-foreground uppercase">
							Options considered
						</p>

						<ul className="mt-4 space-y-3">
							{cs.decision.options.map((option, index) => (
								<li
									key={option}
									className="surface-card flex gap-4 rounded-xl p-4 text-[15px] leading-relaxed text-muted-foreground"
								>
									<span className="font-mono text-xs text-muted-foreground/70">
										{String.fromCharCode(65 + index)}
									</span>

									<span>{option}</span>
								</li>
							))}
						</ul>

						<p className="mt-8 font-mono text-[13px] tracking-wide text-accent uppercase">
							Decision
						</p>

						<p className="mt-3 text-[15px] leading-relaxed text-foreground/90">
							{cs.decision.chosen}
						</p>
					</div>
				</section>

				<Block label="Result">
					{cs.result}
				</Block>

				<Block label="What I Learned">
					{cs.learned}
				</Block>

				{/* Technology */}
				<section className="grid gap-4 border-t border-b border-border py-10 md:grid-cols-[220px_1fr] md:gap-10">
					<h2 className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase md:pt-1">
						Technology
					</h2>

					<ul className="flex max-w-2xl flex-wrap gap-1.5">
						{project.stack.map((technology) => (
							<li key={technology}>
								<Badge tone="outline">
									{technology}
								</Badge>
							</li>
						))}
					</ul>
				</section>
			</Section>

			{/* More case studies */}
			<Section className="border-t-0">
				<h2 className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
					More case studies
				</h2>

				<div className="mt-6 grid gap-4 sm:grid-cols-3">
					{others.map((item) => (
						<Link
							key={item.slug}
							href={`/work/${item.slug}`}
							className="surface-card group rounded-xl p-5 transition-colors hover:border-accent/50"
						>
							<p className="font-mono text-[11px] text-accent uppercase">
								{item.category}
							</p>

							<p className="mt-2 flex items-center gap-1.5 text-lg font-medium">
								{item.name}

								<ArrowUpRight
									className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5"
									aria-hidden
								/>
							</p>

							<p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
								{item.short}
							</p>
						</Link>
					))}
				</div>
			</Section>

			<CTA />
		</article>
	)
}