import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionProps = {
    children: ReactNode
	className?: string
	id?: string
}


type SectionHeadingProps = {
    eyebrow?: string
    title: ReactNode
    subtitle?: ReactNode
    align?: "left" | "center"
    className?: string
}


export function Section({
	children,
	className,
	id,
}: SectionProps) {
	return (
		<section
			id={id}
			className={cn(
				"px-5 py-20 sm:px-8 sm:py-24",
				className,
			)}
		>
			<div className="mx-auto w-full max-w-6xl">
				{children}
			</div>
		</section>
	)
}


export function SectionHeading({
	eyebrow,
	title,
	subtitle,
	align = "left",
	className,
}: SectionHeadingProps) {
	return (
		<div
			className={cn(
				"max-w-2xl",
				align === "center" && "mx-auto text-center",
				className,
			)}
		>
			{eyebrow ? (
				<div
					className={cn(
						"mb-4 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-accent uppercase",
						align === "center" && "justify-center",
					)}
				>
					<span
						className="h-px w-6 bg-accent/60"
						aria-hidden
					/>

					{eyebrow}
				</div>
			) : null}

			<h2 className="text-3xl leading-[1.1] font-semibold text-balance sm:text-4xl">
				{title}
			</h2>

			{subtitle ? (
				<p className="mt-4 text-base leading-relaxed text-muted-foreground">
					{subtitle}
				</p>
			) : null}
		</div>
	)
}