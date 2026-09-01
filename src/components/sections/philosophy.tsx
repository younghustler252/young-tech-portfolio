import type { LucideIcon } from "lucide-react"
import {
	Code2,
	Database,
	LayoutDashboard,
	Network,
	Server,
	ShieldCheck,
} from "lucide-react"

import { Section } from "../layout/section"
import { SectionHeading } from "../layout/section"
import { capabilities } from "@/config/engineering"

const icons: Record<string, LucideIcon> = {
	layout: LayoutDashboard,
	code: Code2,
	server: Server,
	database: Database,
	shield: ShieldCheck,
	network: Network,
}

export function Philosophy() {
	return (
		<Section id="approach">
			<SectionHeading
				eyebrow="Approach"
				title="More than a stack. A way of thinking."
				subtitle="Young Tech approaches projects as complete systems rather than isolated interfaces."
			/>

			<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{capabilities.map((capability) => {
					const Icon = icons[capability.icon] ?? Code2

					return (
						<div
							key={capability.title}
							className="surface-card group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
						>
							<span className="grid size-10 place-items-center rounded-lg border border-border bg-surface-2/60 text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:bg-accent-soft group-hover:text-accent">
								<Icon
									className="size-[18px]"
									aria-hidden
								/>
							</span>

							<h3 className="mt-5 text-base font-semibold">
								{capability.title}
							</h3>

							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
								{capability.body}
							</p>
						</div>
					)
				})}
			</div>
		</Section>
	)
}