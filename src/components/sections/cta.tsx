
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { profileConfig } from "@/config/profile"
import { Section } from "../layout/section"
import { Button } from "@/components/ui/button"

export function CTA() {
	return (
		<Section>
			<div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-16">
				{/* Background grid */}
				<div
					className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]"
					aria-hidden
				/>

				{/* Accent glow */}
				<div
					className="pointer-events-none absolute -top-32 left-1/2 size-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
					aria-hidden
				/>

				<div className="relative mx-auto max-w-3xl text-center">
					<div className="mb-5 flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
						<span className="h-px w-6 bg-accent/60" aria-hidden />
						Let's build
						<span className="h-px w-6 bg-accent/60" aria-hidden />
					</div>

					<h2 className="text-3xl leading-[1.1] font-semibold text-balance sm:text-4xl lg:text-5xl">
						Have a product in mind?
						<br />
						Let's build it properly.
					</h2>

					<p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
						Whether you need a frontend, backend system, API, or a complete
						product, I'm available for selected projects.
					</p>

					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Button  size="lg">
							<Link href="/contact">
								Let's work together
								<ArrowUpRight className="size-4" aria-hidden />
							</Link>
						</Button>

						<Button size="lg" variant="outline">
							<Link href={profileConfig.resume} target="_blank">
								View resume
							</Link>
						</Button>
					</div>

					<p className="mt-7 font-mono text-[11px] tracking-[0.14em] text-muted-foreground/70 uppercase">
						{profileConfig.availability}
					</p>
				</div>
			</div>
		</Section>
	)
}
