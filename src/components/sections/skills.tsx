import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { skillGroups } from "@/config/skills"

export function Skills() {
	return (
		<Section>
			<SectionHeading
				eyebrow="Skills"
				title="Tools I use in real work"
				subtitle="No ratings. No percentages. Just what I build with."
			/>

			<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{skillGroups.map((group) => (
					<div
						key={group.title}
						className="surface-card rounded-xl p-5 transition-colors hover:border-border-strong"
					>
						<div className="flex items-center justify-between gap-2">
							<h3 className="text-base font-semibold">
								{group.title}
							</h3>

							{group.note ? (
								<Badge tone="accent">
									{group.note}
								</Badge>
							) : null}
						</div>

						<ul className="mt-4 flex flex-wrap gap-1.5">
							{group.items.map((item) => (
								<li key={item}>
									<Badge>{item}</Badge>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</Section>
	)
}