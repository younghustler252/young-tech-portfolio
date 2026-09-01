import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section"
import { Timeline } from "@/components/ui/timeline"
import { journeySteps } from "@/config/engineering"

export function Journey() {
	return (
		<Section>
			<div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
				<div>
					<SectionHeading
						eyebrow="Journey"
						title="From interfaces to systems"
						subtitle="I started with what people see. Every step since has been about understanding what happens underneath it."
					/>

					<p className="mt-8 max-w-md font-display text-xl leading-snug text-balance">
						The goal has always been to understand more of the system.
					</p>
				</div>

				<Timeline steps={journeySteps} />
			</div>
		</Section>
	)
}