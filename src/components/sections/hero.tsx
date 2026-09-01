"use client"

import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { profileConfig } from "@/config/profile"
import { FlowDiagram } from "../ui/flow-diagram"
import { cn } from "@/lib/utils"

export function Hero() {
	return (
		<section className="hero-glow relative overflow-hidden px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
			<div
				className="grid-lines pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
				aria-hidden
			/>

			<div className="relative mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
				<div className="reveal">
					<div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3 py-1.5">
						<span
							className="size-1.5 rounded-full bg-accent"
							aria-hidden
						/>

						<span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
							{profileConfig.title}
						</span>
					</div>

					<h1 className="mt-7 text-[2.6rem] leading-[1.02] font-semibold text-balance sm:text-6xl lg:text-[4.25rem]">
						{profileConfig.tagline}
					</h1>

					<p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
						{profileConfig.description}
					</p>

					<div className="mt-9 flex flex-col gap-3 sm:flex-row">
						<Link
							href="/work"
							className={cn(
								buttonVariants({
									size: "lg",
								}),
							)}
						>
							View my work
						</Link>

						<Link
							href="/contact"
							className={cn(
								buttonVariants({
									variant: "outline",
									size: "lg",
								}),
							)}
						>
							Let's work together
						</Link>
					</div>

					<p className="mt-10 font-mono text-[12px] tracking-[0.12em] text-muted-foreground/80 uppercase">
						Full-Stack Web{" "}
						<span className="text-accent">•</span>{" "}
						Backend Systems{" "}
						<span className="text-accent">•</span>{" "}
						APIs{" "}
						<span className="text-accent">•</span>{" "}
						Mobile{" "}
						<span className="text-accent">•</span>{" "}
						Infrastructure
					</p>
				</div>

				<div
					className="reveal"
					style={{ animationDelay: "160ms" }}
				>
					<FlowDiagram
						title="How a request travels"
						compact
						nodes={[
							{
								label: "UI",
								note: "What the user sees and touches",
							},
							{
								label: "Frontend",
								note: "State, forms, API integration",
							},
							{
								label: "API",
								note: "Routes, controllers, middleware",
							},
							{
								label: "Business Logic",
								note: "Rules the interface can't be trusted with",
							},
							{
								label: "Database",
								note: "Where state actually lives",
							},
							{
								label: "Infrastructure",
								note: "Linux, VPS, networking, deployment",
							},
						]}
					/>
				</div>
			</div>
		</section>
	)
}