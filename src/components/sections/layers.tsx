import { Section } from "../layout/section"
import { SectionHeading } from "../layout/section"
import { layers } from "@/config/engineering"

export function Layers() {
	return (
		<Section>
			<SectionHeading
				eyebrow="System layers"
				title="What I actually build"
				subtitle="Not six unrelated skills — one system, seen from top to bottom. Each layer depends on the decisions made in the one above it."
			/>

			<ol className="relative mt-12">
				{/* Connecting line */}

				<span
					className="absolute top-4 bottom-4 left-4 w-px bg-border sm:left-[68px]"
					aria-hidden
				/>

				{layers.map((layer, index) => (
					<li
						key={layer.number}
						className="relative pl-12 pb-4 last:pb-0 sm:pl-[120px]"
					>
						{/* Timeline node */}

						<span
							className="absolute top-6 left-[9px] size-[15px] rounded-full border-2 border-background bg-border-strong sm:left-[61px]"
							aria-hidden
						/>

						{/* Desktop number */}

						<span className="absolute top-[18px] left-0 hidden font-mono text-sm text-accent tabular-nums sm:block">
							{layer.number}
						</span>

						{/* Layer card */}

						<div className="surface-card rounded-xl p-5 transition-colors hover:border-accent/40 sm:p-6">
							<div className="flex items-baseline gap-3">
								{/* Mobile number */}

								<span className="font-mono text-xs text-accent sm:hidden">
									{layer.number}
								</span>

								<h3 className="text-lg font-semibold">
									{layer.title}
								</h3>
							</div>

							<p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
								{layer.body}
							</p>
						</div>

						{index < layers.length - 1 ? (
							<span className="sr-only">then</span>
						) : null}
					</li>
				))}
			</ol>
		</Section>
	)
}