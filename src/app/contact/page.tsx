import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import {
    MessageCircle,
    Phone,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { socialsConfig } from "@/config/socials";
import { Section, SectionHeading } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Contact Young Tech — Let's Build Something",
    description:
        "Get in touch with Young Tech about full-stack web applications, APIs, databases, authentication, integrations and infrastructure work.",
    openGraph: {
        title: "Contact Young Tech — Let's Build Something",
        description:
            "Have a problem worth building? Let's turn the idea into something real.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Young Tech — Let's Build Something",
        description:
            "Have a problem worth building? Let's turn the idea into something real.",
    },
};

const socialIcons: Record<
    string,
    ComponentType<SVGProps<SVGSVGElement>>
> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    MessageCircle,
    Phone,
};

const socials = Object.values(socialsConfig);

export default function ContactPage() {
    return (
        <div>
            <Section className="hero-glow border-t-0">
                <SectionHeading
                    eyebrow="Contact"
                    title="Have a problem worth building?"
                    subtitle="Let's turn the idea into something real. Whether it's a full product, a backend that needs designing, or an existing system that needs to work properly — start the conversation."
                />

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button
                        size="lg"
						nativeButton={false}
                        render={
                            <Link href="#channels">
                                Start a conversation
                            </Link>
                        }
                    />

                    <Button
                        size="lg"
                        variant="outline"
						nativeButton={false}
                        render={
                            <Link href="/work">
                                View my work
                            </Link>
                        }
                    />
                </div>
            </Section>

            <Section id="channels">
                <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
                    <div>
                        <h2 className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                            Channels
                        </h2>

                        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                            Choose a channel below and let's start the
                            conversation.
                        </p>
                    </div>

                    <ul className="grid gap-3 sm:grid-cols-2">
                        {socials.map((social) => {
                            const Icon =
                                socialIcons[social.icon] ?? MessageCircle;

                            return (
                                <li key={social.label}>
                                    <Link
                                        href={social.url}
                                        target={
                                            social.url.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            social.url.startsWith("http")
                                                ? "noreferrer"
                                                : undefined
                                        }
                                        className="surface-card group flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                                    >
                                        <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-surface-2/60 text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:bg-accent-soft group-hover:text-accent">
                                            <Icon
                                                className="size-[18px]"
                                                aria-hidden
                                            />
                                        </span>

                                        <div>
                                            <p className="font-display text-base font-semibold">
                                                {social.label}
                                            </p>

                                            <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                                                {social.url.startsWith("http")
                                                    ? "Open channel"
                                                    : social.url.startsWith(
                                                            "tel:",
                                                        )
                                                      ? "Call directly"
                                                      : "Contact directly"}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Section>
        </div>
    );
}