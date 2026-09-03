"use client";

import { Download, Globe, MapPin } from "lucide-react";
import { projects } from "@/config/projects";
import { skillGroups } from "@/config/skills";
import { socialsConfig } from "@/config/socials";

const socials = Object.values(socialsConfig);

export default function ResumePage() {
    return (
        <main className="px-5 py-16 sm:px-8 sm:py-20 print:bg-white print:px-0 print:py-0">
        <div className="mx-auto w-full max-w-3xl">
            {/* Screen-only controls */}
            <div className="mb-8 flex items-center justify-between print:hidden">
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                Resume
            </p>

            <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
            >
                <Download className="size-4" aria-hidden />
                Download / Print PDF
            </button>
            </div>

            <article className="surface-card rounded-2xl p-7 sm:p-10 print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none print:text-neutral-900">
            {/* Resume Header */}
            <header className="resume-header border-b border-border pb-7 print:border-neutral-300">
                <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl print:text-neutral-900">
                    Young Tech
                </h1>

                <p className="mt-2 font-mono text-[13px] tracking-wide text-accent uppercase print:text-neutral-600">
                    Full-Stack Web Developer · Expanding into Mobile
                </p>

                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground print:text-neutral-700">
                    Full-stack developer based in Nigeria. I build products end to
                    end — React/Next.js interfaces, Node.js APIs, PostgreSQL/MongoDB
                    data layers, and the Linux/VPS infrastructure they run on.
                    Currently extending that experience into React Native mobile
                    development.
                </p>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground print:text-neutral-600">
                <span className="inline-flex items-center gap-1.5">
                    <MapPin
                    className="size-3.5 text-accent print:text-neutral-500"
                    aria-hidden
                    />
                    Nigeria
                </span>

                <span className="inline-flex items-center gap-1.5">
                    <Globe
                    className="size-3.5 text-accent print:text-neutral-500"
                    aria-hidden
                    />
                    Available remotely
                </span>
                </div>
            </header>

            {/* Selected Work */}
            <ResumeSection title="Selected Work">
                {projects.map((project) => (
                <div key={project.slug} className="relative pl-5">
                    <span
                    className="absolute top-[7px] left-0 size-1.5 rounded-full bg-accent print:bg-neutral-500"
                    aria-hidden
                    />

                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-display text-base font-semibold print:text-neutral-900">
                        {project.name}
                    </h3>

                    <span className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase print:text-neutral-500">
                        {project.category}
                    </span>
                    </div>

                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground print:text-neutral-700">
                    {project.short}
                    </p>

                    <p className="mt-1 text-[13px] text-muted-foreground/80 print:text-neutral-600">
                    <span className="font-medium text-foreground/90 print:text-neutral-800">
                        Role:
                    </span>{" "}
                    {project.role}
                    </p>

                    <ul className="mt-2 flex flex-wrap gap-1.5 print:hidden">
                    {project.stack.slice(0, 6).map((technology) => (
                        <li
                        key={technology}
                        className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-muted-foreground uppercase"
                        >
                        {technology}
                        </li>
                    ))}
                    </ul>

                    <p className="mt-1.5 hidden font-mono text-[11px] text-neutral-500 print:block">
                    {project.stack.join(" · ")}
                    </p>
                </div>
                ))}
            </ResumeSection>

            {/* Skills */}
            <ResumeSection title="Skills">
                <div className="grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                    <div key={group.title}>
                    <h3 className="font-display text-sm font-semibold tracking-tight text-accent print:text-neutral-900">
                        {group.title}

                        {group.note ? (
                        <span className="ml-2 font-mono text-[10px] font-normal tracking-wide text-muted-foreground uppercase print:text-neutral-500">
                            ({group.note})
                        </span>
                        ) : null}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground print:text-neutral-700">
                        {group.items.join(", ")}
                    </p>
                    </div>
                ))}
                </div>
            </ResumeSection>

            {/* How I Work */}
            <ResumeSection title="How I Work">
                <ul className="grid gap-2 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2 print:text-neutral-700">
                {[
                    "I treat an application as a complete system — from interface to query to network boundary.",
                    "REST APIs with route/controller/service separation and business logic in the right place.",
                    "Authentication, authorization, roles, validation and secure API design as defaults, not extras.",
                    "Self-managed deployment: Linux, VPS, networking, WireGuard and MikroTik integration.",
                    "Honest about scope: mobile development is my current expansion, not a finished story.",
                ].map((line) => (
                    <li key={line} className="relative pl-4">
                    <span
                        className="absolute top-[8px] left-0 size-1 rounded-full bg-accent print:bg-neutral-400"
                        aria-hidden
                    />
                    {line}
                    </li>
                ))}
                </ul>
            </ResumeSection>

            {/* Contact */}
            <ResumeSection title="Contact">
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {socials.map((social) => (
                    <li
                        key={social.label}
                        className="text-muted-foreground print:text-neutral-700"
                    >
                    <span className="font-medium text-foreground print:text-neutral-900">
                        {social.label}:
                    </span>{" "}
                    <a
                        href={social.url}
                        target={social.url.startsWith("http") ? "_blank" : undefined}
                        rel={
                        social.url.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-accent hover:underline print:text-neutral-700"
                    >
                        {social.username ?? social.url}
                    </a>
                    </li>
                ))}
                </ul>
            </ResumeSection>
            </article>
        </div>
        </main>
    );
    }

    function ResumeSection({
        title,
        children,
    }: {
        title: string;
        children: React.ReactNode;
    }) {
    return (
        <section className="mt-8 break-inside-avoid">
            <div className="mb-4 flex items-center gap-3">
                <h2 className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase print:text-neutral-900">
                    {title}
                </h2>

                <span
                    className="h-px flex-1 bg-border print:bg-neutral-300"
                    aria-hidden
                />
            </div>

            <div className="space-y-5">{children}</div>
        </section>
    );
}