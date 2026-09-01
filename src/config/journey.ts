
export const journeySteps = [
    { label: "Frontend", detail: "Where it started — interfaces, layout, interaction." },
    { label: "React / Next.js", detail: "Component architecture and rendering models." },
    { label: "Backend", detail: "The question of what happens after the request leaves." },
    { label: "Node.js / Express", detail: "Routes, controllers, services, middleware." },
    { label: "Databases", detail: "Where state actually lives." },
    { label: "MongoDB / PostgreSQL", detail: "Documents, relations, and choosing between them." },
    { label: "APIs & Integrations", detail: "Making separate systems agree with each other." },
    { label: "Authentication & Security", detail: "Who is allowed to do what, and proving it." },
    { label: "Infrastructure", detail: "Linux, VPS, networking, deployment, tunnels." },
    { label: "Mobile", detail: "The current direction — React Native, on top of everything above." },
];

export const journal = [
    {
        title: "Why local development is not production",
        body: "Environment differences — configuration, networking, permissions, resource limits — create problems that never appear on your own machine.",
        tag: "Environments",
    },
    {
        title: "Designing APIs that don't become a mess",
        body: "Route, controller and service separation, and what happens to a codebase when business logic leaks into request handlers.",
        tag: "API design",
    },
    {
        title: "When your backend can't directly reach the router",
        body: "The WiFiSpace networking problem: CGNAT, reachability, and why the connection has to be initiated from inside the network.",
        tag: "Networking",
    },
    {
        title: "Designing a multi-tenant SaaS",
        body: "Tenant isolation, where scoping should be enforced, and the architectural cost of getting that decision wrong.",
        tag: "Architecture",
    },
    {
        title: "From web development to mobile",
        body: "Documenting the transition — what carries over from full-stack work, and what genuinely does not.",
        tag: "Mobile",
    },
];