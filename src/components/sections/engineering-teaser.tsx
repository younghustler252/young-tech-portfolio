import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { FlowDiagram } from "@/components/ui/flow-diagram"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section"
import { cn } from "@/lib/utils"

export function EngineeringTeaser() {
	return (
		<Section>
			<div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
				<div>
					<SectionHeading
						eyebrow="Engineering"
						title="I don't just show what I built. I show how I built it."
						subtitle="The decisions behind the interface — authentication flows, API structure, database design, security and infrastructure."
					/>

					<Link
						href="/engineering"
						className={cn(
							buttonVariants({
								variant: "outline",
							}),
							"mt-8",
						)}
					>
						Read the engineering breakdown
					</Link>
				</div>

				<FlowDiagram
					title="Authentication flow"
					compact
					nodes={[
						{
							label: "User",
							note: "Starts the authentication request",
						},
						{
							label: "Login",
							note: "Credentials are submitted",
						},
						{
							label: "API",
							note: "Request reaches the backend",
						},
						{
							label: "Credential validation",
							note: "Identity is verified",
						},
						{
							label: "Authentication token",
							note: "Session access is issued",
						},
						{
							label: "Protected resources",
							note: "Authorized data becomes available",
						},
					]}
				/>
			</div>
		</Section>
	)
}