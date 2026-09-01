import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { journal } from "@/config/journey"

export function JournalTeaser() {
	return (
		<Section>
			<div className="flex flex-wrap items-end justify-between gap-6">
				<SectionHeading
					eyebrow="Journal"
					title="Things I learned the hard way"
					subtitle="Write-ups on problems I actually ran into. Topics are real; the articles are in progress."
				/>

				<Link
					href="/lab"
					className="inline-flex items-center gap-2 text-sm text-accent transition-all hover:gap-3"
				>
					Visit the Lab
					<ArrowUpRight
						className="size-4"
						aria-hidden
					/>
				</Link>
			</div>

			<ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{journal.slice(0, 3).map((entry) => (
					<li
						key={entry.title}
						className="surface-card rounded-xl p-6 transition-colors hover:border-accent/40"
					>
						<Badge tone="outline">
							{entry.tag}
						</Badge>

						<h3 className="mt-4 text-lg leading-snug font-semibold">
							{entry.title}
						</h3>

						<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
							{entry.body}
						</p>
					</li>
				))}
			</ul>
		</Section>
	)
}