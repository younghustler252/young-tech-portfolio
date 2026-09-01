import { Hero } from "@/components/sections/hero"
import { Philosophy } from "@/components/sections/philosophy"
import { Layers } from "@/components/sections/layers"
import { FeaturedWork } from "@/components/sections/featured-work"
import { EngineeringTeaser } from "@/components/sections/engineering-teaser"
import { Journey } from "@/components/sections/journey"
import { Skills } from "@/components/sections/skills"
import { JournalTeaser } from "@/components/sections/journal-teaser"
import { CTA } from "@/components/sections/cta"

export default function Home() {
	return (
		<main>
			<Hero />
			<Philosophy />
			<Layers />
			<FeaturedWork />
			<EngineeringTeaser />
			<Journey />
			<Skills />
			<JournalTeaser />
			<CTA />
		</main>
	)
}