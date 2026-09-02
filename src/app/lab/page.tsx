import type { Metadata } from "next";
import Link from "next/link";
import { Smartphone, ArrowUpRight } from "lucide-react";

import { journal } from "@/config/journey";
import { Section, SectionHeading } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
    title: "Lab — Young Tech is Learning Mobile Development",
    description:
        "Things Young Tech is learning, testing and building — including the current expansion from full-stack web development into React Native mobile development.",
    openGraph: {
        title: "Lab — Young Tech is Learning Mobile Development",
        description: "Things I'm learning, testing and building.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lab — Young Tech is Learning Mobile Development",
        description: "Things I'm learning, testing and building.",
    },
};


export const labTopics = [
  { title: "React Native", body: "Components, navigation and the differences from the web rendering model." },
  { title: "Mobile UI", body: "Touch targets, platform conventions and layout on real devices." },
  { title: "API integration", body: "Consuming the same REST APIs I already build, from a mobile client." },
  { title: "Authentication", body: "Token handling and secure storage in a mobile context." },
  { title: "Mobile app architecture", body: "State, offline behaviour and structuring an app that grows." },
];


export default function LabPage() {
    return (
        <div>
            <Section className="hero-glow border-t-0">
                <SectionHeading
                    eyebrow="Lab"
                    title="Things I'm learning, testing and building."
                />
            </Section>

            <Section className="pt-0">
                <div className="surface-card overflow-hidden rounded-2xl">
                    <div className="grid lg:grid-cols-[1.2fr_1fr]">
                        <div className="p-6 sm:p-10">
                            <div className="flex items-center gap-3">
                                <span className="grid size-9 place-items-center rounded-lg border border-accent/40 bg-accent-soft text-accent">
                                    <Smartphone
                                        className="size-4"
                                        aria-hidden
                                    />
                                </span>

                                <Badge tone="accent">
                                    Currently exploring
                                </Badge>
                            </div>

                            <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">
                                Mobile development
                            </h2>

                            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                                I'm currently expanding my full-stack experience
                                into mobile development. My existing experience
                                with APIs, authentication, databases and
                                application architecture gives me a strong
                                foundation, while I'm learning the mobile-specific
                                patterns and constraints.
                            </p>

                            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                                This section exists because I'd rather show the
                                direction I'm growing in than pretend it's already
                                finished.
                            </p>
                        </div>

                        <div className="relative border-t border-border bg-surface-2/30 p-6 sm:p-10 lg:border-t-0 lg:border-l">
                            <div
                                className="grid-lines pointer-events-none absolute inset-0 opacity-40"
                                aria-hidden
                            />

                            <ul className="relative space-y-3">
                                {labTopics.map((topic) => (
                                    <li
                                        key={topic.title}
                                        className="rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/50"
                                    >
                                        <p className="text-sm font-medium">
                                            {topic.title}
                                        </p>

                                        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                                            {topic.body}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionHeading
                    eyebrow="Engineering journal"
                    title="Things I learned the hard way"
                    subtitle="Notes and write-ups on problems I've actually run into. These are planned articles — the topics are real, the writing is in progress."
                />

                <ul className="mt-12 grid gap-4 sm:grid-cols-2">
                    {journal.map((entry) => (
                        <li
                            key={entry.title}
                            className="surface-card group flex flex-col rounded-xl p-6 transition-colors hover:border-accent/50"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <Badge tone="outline">
                                    {entry.tag}
                                </Badge>

                                <span className="font-mono text-[11px] text-muted-foreground/70 uppercase">
                                    Draft
                                </span>
                            </div>

                            <h3 className="mt-4 font-display text-lg leading-snug font-semibold">
                                {entry.title}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {entry.body}
                            </p>
                        </li>
                    ))}
                </ul>
            </Section>

            <CTA />
        </div>
    );
}