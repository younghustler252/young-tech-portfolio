import { cn } from "@/lib/utils"

type TreeBranch = {
	label: string
	children: string[]
}

type TreeDiagramProps = {
	root: string
	branches: readonly TreeBranch[]
	title?: string
	className?: string
}

export function TreeDiagram({
	root,
	branches,
	title,
	className,
}: TreeDiagramProps) {
	return (
		<div
			className={cn(
				"surface-card rounded-2xl p-5 sm:p-7",
				className,
			)}
		>
			{title ? (
				<p className="mb-6 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
					{title}
				</p>
			) : null}

			<div className="flex flex-col items-center">
				{/* Root */}
				<div className="rounded-lg border border-accent/40 bg-accent-soft px-5 py-2.5 text-sm font-medium text-accent">
					{root}
				</div>

				{/* Root connector */}
				<span
					className="accent-rule h-6 w-px"
					aria-hidden
				/>

				{/* Horizontal connector */}
				<div
					className="h-px w-2/3 bg-border-strong"
					aria-hidden
				/>

				{/* Branches */}
				<div className="grid w-full grid-cols-2 gap-4 sm:gap-8">
					{branches.map((branch) => (
						<div
							key={branch.label}
							className="flex flex-col items-center"
						>
							{/* Branch connector */}
							<span
								className="h-6 w-px bg-border-strong"
								aria-hidden
							/>

							{/* Branch */}
							<div className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-center text-sm font-medium">
								{branch.label}
							</div>

							{/* Children */}
							{branch.children.map((child) => (
								<div
									key={child}
									className="flex w-full flex-col items-center"
								>
									<span
										className="h-5 w-px bg-border"
										aria-hidden
									/>

									<div className="w-full rounded-lg border border-border bg-surface-2/50 px-4 py-2 text-center font-mono text-xs text-muted-foreground">
										{child}
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}