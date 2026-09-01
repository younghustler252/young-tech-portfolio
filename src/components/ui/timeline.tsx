type TimelineStep = {
	label: string
	detail: string
}

type TimelineProps = {
	steps: readonly TimelineStep[]
}

export function Timeline({ steps }: TimelineProps) {
	return (
		<ol className="relative ml-3 border-l border-border">
			{steps.map((step, index) => (
				<li
					key={step.label}
					className="group relative pb-8 pl-8 last:pb-0"
				>
					<span
						className="absolute -left-[6.5px] top-1.5 size-3 rounded-full border-2 border-background bg-border-strong transition-colors group-hover:bg-accent"
						aria-hidden
					/>

					<span className="font-mono text-[11px] text-muted-foreground tabular-nums">
						{String(index + 1).padStart(2, "0")}
					</span>

					<h3 className="mt-1 text-lg font-medium">
						{step.label}
					</h3>

					<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
						{step.detail}
					</p>
				</li>
			))}
		</ol>
	)
}