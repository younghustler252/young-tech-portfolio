import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type BadgeProps = {
	children: ReactNode
	tone?: "default" | "accent" | "outline"
	className?: string
}

export function Badge({
	children,
	tone = "default",
	className,
}: BadgeProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[11px] leading-none tracking-wide uppercase",
				tone === "default" &&
					"bg-secondary text-muted-foreground",
				tone === "accent" &&
					"bg-accent-soft text-accent",
				tone === "outline" &&
					"border border-border-strong text-muted-foreground",
				className,
			)}
		>
			{children}
		</span>
	)
}