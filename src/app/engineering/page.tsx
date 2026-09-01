"use client"

import { useState } from "react"
import { FlowDiagram } from "@/components/ui/flow-diagram"
import { Badge } from "@/components/ui/badge"
import { Section, SectionHeading } from "@/components/layout/section"
import { CTA } from "@/components/sections/cta"

const topics = [
    { id: "auth", label: "Authentication" },
    { id: "apis", label: "APIs" },
    { id: "data", label: "Databases" },
    { id: "security", label: "Security" },
    { id: "infra", label: "Infrastructure" },
] as const

type TopicId = (typeof topics)[number]["id"]

export default function EngineeringPage() {
    const [active, setActive] = useState<TopicId>("auth")

    return (
        <main>
            <Section className="hero-glow border-t-0">
                <SectionHeading
                    eyebrow="Engineering"
                    title="I don't just show what I built. I show how I built it."
                    subtitle="The decisions behind the interface."
                />
            </Section>

            <Section className="pt-0">
                <div
                    className="flex flex-wrap gap-2"
                    role="tablist"
                    aria-label="Engineering topics"
                >
                    {topics.map((topic) => (
                        <button
                            key={topic.id}
                            type="button"
                            role="tab"
                            aria-selected={active === topic.id}
                            aria-controls={`panel-${topic.id}`}
                            id={`tab-${topic.id}`}
                            onClick={() => setActive(topic.id)}
                            className={
                                active === topic.id
                                    ? "rounded-full border border-accent bg-accent-soft px-4 py-2 text-sm text-accent transition-colors"
                                    : "rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                            }
                        >
                            {topic.label}
                        </button>
                    ))}
                </div>

                <div className="mt-10">
                    {active === "auth" && <AuthPanel />}
                    {active === "apis" && <ApiPanel />}
                    {active === "data" && <DataPanel />}
                    {active === "security" && <SecurityPanel />}
                    {active === "infra" && <InfraPanel />}
                </div>
            </Section>

            <CTA />
        </main>
    )
}

function Panel({
    id,
    children,
}: {
    id: string
    children: React.ReactNode
}) {
    return (
        <div
            id={`panel-${id}`}
            role="tabpanel"
            aria-labelledby={`tab-${id}`}
            className="reveal grid gap-8 lg:grid-cols-2"
        >
            {children}
        </div>
    )
}

function Prose({
    title,
    points,
    body,
}: {
    title: string
    body?: string
    points: string[]
}) {
    return (
        <div>
            <h2 className="text-2xl font-semibold">{title}</h2>

            {body ? (
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                    {body}
                </p>
            ) : null}

            <ul className="mt-6 space-y-3">
                {points.map((point) => (
                    <li
                        key={point}
                        className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground"
                    >
                        <span
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                            aria-hidden
                        />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function AuthPanel() {
    return (
        <Panel id="auth">
            <Prose
                title="Authentication & authorization"
                body="Authentication answers who you are. Authorization answers what you're allowed to do. They are separate problems and I treat them separately."
                points={[
                    "Registration and login with hashed credentials — never stored or compared in plain text.",
                    "JWT issued on successful login and verified by middleware on every protected request.",
                    "Protected routes on the server; UI-level hiding is presentation, not security.",
                    "Role-based authorization — administrator, teacher, parent, student, operator — resolved server-side.",
                    "Granular permissions checked at the point of the action, not only at the point of navigation.",
                    "Validation of every incoming payload before it reaches business logic.",
                    "Secure API access: short-lived tokens, secrets in environment variables, no credentials in the client bundle.",
                ]}
            />

            <FlowDiagram
                title="Authentication flow"
                nodes={[
                    {
                        label: "User",
                        note: "Submits credentials",
                    },
                    {
                        label: "Login",
                        note: "Client-side validation, request to API",
                    },
                    {
                        label: "API",
                        note: "Auth route → controller → service",
                    },
                    {
                        label: "Credential validation",
                        note: "Hash comparison, account state checks",
                    },
                    {
                        label: "Authentication token",
                        note: "Signed JWT with identity and role claims",
                    },
                    {
                        label: "Protected resources",
                        note: "Middleware verifies token and permissions",
                    },
                ]}
            />
        </Panel>
    )
}

function ApiPanel() {
    return (
        <Panel id="apis">
            <Prose
                title="REST APIs that stay maintainable"
                body="An API becomes unmaintainable when business logic lives inside route handlers. The separation below is what stops that."
                points={[
                    "Routes — declare the URL, the method and the middleware chain. Nothing else.",
                    "Controllers — parse the request, call a service, shape the response.",
                    "Services — where business rules live, callable from anywhere, testable in isolation.",
                    "Middleware — authentication, authorization, tenant scoping, rate limiting, logging.",
                    "Validation — schema-checked input at the boundary, before anything is trusted.",
                    "Error handling — one centralised handler, consistent error shapes, no stack traces leaked to clients.",
                ]}
            />

            <div className="space-y-4">
                <div className="surface-card rounded-xl p-5">
                    <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                        Example REST structure
                    </p>

                    <pre className="mt-4 overflow-x-auto font-mono text-sm leading-relaxed text-muted-foreground">
{`POST   /auth/login
POST   /auth/register

GET    /users
GET    /users/:id

POST   /subscriptions
PATCH  /subscriptions/:id
DELETE /subscriptions/:id`}
                    </pre>
                </div>

                <p className="text-[13px] leading-relaxed text-muted-foreground">
                    Illustrative structure only — these are examples of how I
                    organise resources, not public endpoints.
                </p>

                <div className="surface-card rounded-xl p-5">
                    <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                        Request pipeline
                    </p>

                    <pre className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground">
{`request
  → route
  → middleware (auth, validation, scope)
  → controller
  → service (business logic)
  → data layer
  → response`}
                    </pre>
                </div>
            </div>
        </Panel>
    )
}

function DataPanel() {
    return (
        <Panel id="data">
            <Prose
                title="Database engineering"
                body="Schema design is where an application's requirements become permanent. Getting the relationships right early is cheaper than any refactor later."
                points={[
                    "PostgreSQL with Prisma where relationships and constraints matter — schools, users, results, payments.",
                    "MongoDB with Mongoose where records vary in shape — subscriptions, catalog items, content.",
                    "Relationships modelled explicitly rather than reconstructed in application code.",
                    "Indexes on the fields the application actually queries by.",
                    "Schema decisions driven by the read patterns of real screens, not by theory.",
                ]}
            />

            <div className="space-y-4">
                <div className="surface-card rounded-xl p-5">
                    <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                        School domain relationships
                    </p>

                    <pre className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground">
{`School
 ├── Users
 ├── Students
 ├── Teachers
 ├── Classes
 ├── Payments
 └── Results`}
                    </pre>
                </div>

                <div className="surface-card rounded-xl p-5">
                    <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                        Reading this
                    </p>

                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                        Every record below the school belongs to exactly one
                        school. That single ownership rule is what makes
                        multi-tenancy enforceable — a query that isn't scoped
                        to a school is a bug by definition.
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-1.5">
                        {[
                            "PostgreSQL",
                            "MongoDB",
                            "Prisma",
                            "Mongoose",
                            "Schema design",
                            "Relationships",
                        ].map((item) => (
                            <li key={item}>
                                <Badge>{item}</Badge>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Panel>
    )
}

function SecurityPanel() {
    return (
        <Panel id="security">
            <Prose
                title="Security is part of development, not an afterthought."
                body="I build defensively. The areas below are where I actively apply and keep developing my knowledge — no certifications claimed, no penetration-testing expertise implied."
                points={[
                    "Authentication — credential handling, hashing, token lifetime.",
                    "Authorization and role-based access enforced on the server.",
                    "Input validation on every write path.",
                    "API protection — protected routes, scoped access, sensible error responses.",
                    "Environment variables for secrets; nothing sensitive in source control or client bundles.",
                    "Secure deployment — least-privilege server users, restricted SSH, HTTPS.",
                    "Network security — Linux firewall (UFW), closed ports by default.",
                    "WireGuard tunnels instead of exposing administrative interfaces to the internet.",
                ]}
            />

            <div className="surface-card rounded-2xl p-6">
                <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                    Working principle
                </p>

                <p className="mt-4 font-display text-xl leading-snug text-balance">
                    Assume every client is untrusted, every input is hostile,
                    and every exposed port is a decision that needs justifying.
                </p>

                <div className="mt-8 border-t border-border pt-6">
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                        In practice this means the server decides, the client
                        asks. Anything that affects money, access or another
                        user's data is validated and authorised again on the
                        backend regardless of what the interface allowed.
                    </p>
                </div>
            </div>
        </Panel>
    )
}

function InfraPanel() {
    return (
        <Panel id="infra">
            <Prose
                title="Beyond application code"
                body="Applications run on machines, inside networks, behind firewalls. Understanding that layer is part of being able to ship something that actually works."
                points={[
                    "Linux and Ubuntu server administration.",
                    "VPS provisioning, users, services and process management.",
                    "UFW firewall configuration and closed-by-default policy.",
                    "WireGuard tunnels between cloud infrastructure and private networks.",
                    "MikroTik RouterOS — hotspot and PPPoE provisioning from an application.",
                    "Networking fundamentals, including CGNAT constraints and reachability.",
                    "Deployment and server configuration for production environments.",
                ]}
            />

            <FlowDiagram
                title="Infrastructure path"
                compact
                nodes={[
                    { label: "Cloud VPS" },
                    {
                        label: "Firewall",
                        note: "UFW, closed by default",
                    },
                    {
                        label: "Backend",
                        note: "Node.js API service",
                    },
                    {
                        label: "WireGuard",
                        note: "Encrypted tunnel",
                    },
                    {
                        label: "Network Agent",
                        note: "Runs inside the private network",
                    },
                    {
                        label: "MikroTik",
                        note: "RouterOS provisioning",
                    },
                ]}
            />
        </Panel>
    )
}