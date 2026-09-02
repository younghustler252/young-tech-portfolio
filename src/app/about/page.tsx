import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { profileConfig } from "@/config/profile";
import { Section, SectionHeading } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: `About — ${profileConfig.brand}`,
    description:
        "Learn more about Bodede Sodiq, a full-stack and mobile developer building real-world products and understanding systems.",
    openGraph: {
        title: `About — ${profileConfig.brand}`,
        description:
            "Learn more about Bodede Sodiq, a full-stack and mobile developer building real-world products and understanding systems.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `About — ${profileConfig.brand}`,
        description:
            "Learn more about Bodede Sodiq, a full-stack and mobile developer building real-world products and understanding systems.",
    },
};

const principles = [
    {
        number: "01",
        title: "Build real products",
        body: "I prefer working on products that solve actual problems rather than building interfaces without understanding what happens behind them.",
    },
    {
        number: "02",
        title: "Understand the system",
        body: "Frontend is only one part of a product. I care about APIs, authentication, databases, infrastructure and how everything connects.",
    },
    {
        number: "03",
        title: "Keep learning",
        body: "Technology keeps changing, so I focus on understanding the fundamentals and continuously expanding what I can build.",
    },
];

export default function AboutPage() {
    return (
        <div>
            <Section className="hero-glow border-t-0">
                <SectionHeading
                    eyebrow="About"
                    title="Building deeper than the interface."
                    subtitle={profileConfig.description}
                />

                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="size-4 text-accent" aria-hidden />
                        {profileConfig.location}
                    </div>

                    <span
                        className="hidden size-1 rounded-full bg-border-strong sm:block"
                        aria-hidden
                    />

                    <span className="font-mono text-xs tracking-wide text-accent uppercase">
                        {profileConfig.availability}
                    </span>
                </div>
            </Section>

            <Section className="pt-0">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                    <div>
                        <div className="surface-card overflow-hidden rounded-2xl">
                            <div className="relative aspect-[4/5] overflow-hidden bg-surface-2">
                                <div
                                    className="grid-lines pointer-events-none absolute inset-0 opacity-40"
                                    aria-hidden
                                />

                                <img
                                    src={profileConfig.image}
                                    alt={profileConfig.name}
                                    className="relative h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                            The story
                        </p>

                        <h2 className="mt-4 text-3xl leading-[1.1] font-semibold sm:text-4xl">
                            From interfaces to systems.
                        </h2>

                        <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
                            <p>{profileConfig.about}</p>

                            <p>
                                What started with building interfaces gradually became
                                an interest in understanding everything underneath them:
                                requests, APIs, business logic, data, authentication,
                                infrastructure and deployment.
                            </p>

                            <p>
                                Today, I approach development as a system rather than a
                                collection of separate technologies. The interface is
                                important, but so is everything that makes it work.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Button
                                size="lg"
                                nativeButton={false}
                                render={
                                    <Link href={profileConfig.resume}>
                                        View resume
                                        <ArrowUpRight
                                            className="size-4"
                                            aria-hidden
                                        />
                                    </Link>
                                }
                            />
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionHeading
                    eyebrow="Principles"
                    title="How I approach development."
                    subtitle="The technologies change. The way I think about building products stays grounded in a few principles."
                />

                <div className="mt-12 grid gap-4 lg:grid-cols-3">
                    {principles.map((principle) => (
                        <article
                            key={principle.number}
                            className="surface-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
                        >
                            <span className="font-mono text-xs text-accent">
                                {principle.number}
                            </span>

                            <h3 className="mt-6 font-display text-lg font-semibold">
                                {principle.title}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {principle.body}
                            </p>
                        </article>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="surface-card relative overflow-hidden rounded-2xl p-7 sm:p-10">
                    <div
                        className="grid-lines pointer-events-none absolute inset-0 opacity-30"
                        aria-hidden
                    />

                    <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                                Current direction
                            </p>

                            <h2 className="mt-4 max-w-2xl text-2xl font-semibold sm:text-3xl">
                                Expanding from full-stack web into mobile.
                            </h2>

                            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                                My existing foundation in frontend, backend,
                                authentication, databases and infrastructure gives me
                                the foundation to explore mobile development with a
                                deeper understanding of the systems behind the
                                application.
                            </p>
                        </div>

                        <Button
                            variant="outline"
                            size="lg"
                            nativeButton={false}
                            render={
                                <Link href="/lab">
                                    Visit the Lab
                                    <ArrowUpRight
                                        className="size-4"
                                        aria-hidden
                                    />
                                </Link>
                            }
                        />
                    </div>
                </div>
            </Section>
        </div>
    );
}