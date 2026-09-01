import { ArrowDown } from "lucide-react"

import { cn } from "@/lib/utils"

type FlowNode = {
	label: string
	note?: string
}

type FlowDiagramProps = {
	title: string
	nodes: readonly FlowNode[]
	compact?: boolean
	className?: string
}

export function FlowDiagram({
	title,
	nodes,
	compact = false,
	className,
}: FlowDiagramProps) {
	return (
		<div
			className={cn(
				"surface-card relative overflow-hidden rounded-xl",
				className,
			)}
		>
			{/* Ambient glow */}

			<div
				className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
				aria-hidden
			/>

			{/* Header */}

			<div className="relative flex items-center justify-between border-b border-border px-5 py-4">
				<div>
					<p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
						System flow
					</p>

					<h2 className="mt-1 text-sm font-medium text-foreground">
						{title}
					</h2>
				</div>

				<span
					className="size-2 rounded-full bg-accent flow-pulse"
					aria-hidden
				/>
			</div>

			{/* Flow */}

			<div
				className={cn(
					"relative px-5 py-6",
					compact ? "sm:py-7" : "sm:py-10",
				)}
			>
				<div className="relative">
					{nodes.map((node, index) => {
						const isLast = index === nodes.length - 1

						return (
							<div key={node.label}>
								{/* Node */}

								<div className="relative flex items-center gap-4">
									<div
										className={cn(
											"relative z-10 grid shrink-0 place-items-center rounded-lg border border-border bg-surface-2",
											compact
												? "size-10"
												: "size-12",
										)}
									>
										<span className="font-mono text-[10px] font-medium tracking-wider text-accent uppercase">
											{String(index + 1).padStart(2, "0")}
										</span>
									</div>

									<div className="min-w-0">
										<p className="font-display text-sm font-medium">
											{node.label}
										</p>

										<p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
											{node.note}
										</p>
									</div>
								</div>

								{/* Connector */}

								{!isLast && (
									<div
										className="relative ml-5 flex h-8 items-center"
										aria-hidden
									>
										<div className="absolute left-0 h-full w-px bg-border" />

										<div className="absolute left-0 h-1/2 w-px bg-accent/60 flow-pulse" />

										<ArrowDown className="absolute -left-[5px] bottom-0 size-2.5 text-accent" />
									</div>
								)}
							</div>
						)
					})}
				</div>
			</div>

			{/* Footer rule */}

			<div className="accent-rule h-px opacity-60" />
		</div>
	)
}