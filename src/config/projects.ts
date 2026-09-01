export type DiagramNode = { label: string; note?: string };

export type Project = {
  slug: string;
  name: string;
  category: string;
  short: string;
  role: string;
  stack: string[];
  challenge: string;
  status?: string;
  accentIndex: number;
  /** vertical flow or tree diagram */
  diagram: { kind: "flow"; nodes: DiagramNode[] } | { kind: "tree"; root: string; branches: { label: string; children: string[] }[] };
  caseStudy: {
    overview: string;
    problem: string;
    myRole: string[];
    frontend: string;
    backend: string;
    data: string;
    security: string;
    integrations: string;
    challenge: string;
    decision: { options: string[]; chosen: string };
    result: string;
    learned: string;
  };
};

export const projects: Project[] = [
  {
    slug: "wifispace-networks",
    name: "WiFiSpace Networks",
    category: "ISP / Network Management Platform",
    short:
      "A web-based platform for managing ISP customers, subscriptions, hotspot/PPPoE services and MikroTik network infrastructure.",
    role: "Full-stack engineering — frontend, REST APIs, payments, network integration and VPS infrastructure.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Paystack", "MikroTik RouterOS", "VPS", "WireGuard", "Linux"],
    challenge:
      "Talking to a MikroTik router that sits behind CGNAT and cannot be treated as a publicly reachable backend service.",
    accentIndex: 0,
    diagram: {
      kind: "flow",
      nodes: [
        { label: "Customer", note: "Signs up, subscribes, connects" },
        { label: "Web Application", note: "React dashboard & customer portal" },
        { label: "Backend API", note: "Express REST API on a VPS" },
        { label: "Agent", note: "Runs inside the ISP network" },
        { label: "MikroTik Router", note: "Hotspot / PPPoE provisioning" },
      ],
    },
    caseStudy: {
      overview:
        "WiFiSpace Networks is a management platform for a small internet service provider. It brings customer records, subscription plans, hotspot and PPPoE service management and payment collection into one web application, and connects that application to the MikroTik infrastructure that actually delivers the service.",
      problem:
        "Running an ISP with router-level tooling alone means customer data, subscription state and payments live outside the system that provisions access. The operator needed a single place to manage customers and subscriptions, and to have those decisions reflected on the network itself.",
      myRole: [
        "Customer and subscription management interfaces",
        "REST API design for customers, plans and subscriptions",
        "Payment integration with Paystack",
        "Communication layer between the backend and MikroTik RouterOS",
        "Agent architecture for routers behind network boundaries",
        "Linux VPS setup, deployment and WireGuard networking",
      ],
      frontend:
        "A React dashboard for the operator: customer lists and profiles, subscription state, plan management and payment history. Views are built around the workflows an operator repeats daily, with forms validated before anything reaches the API, and clear feedback for the operations that touch the network.",
      backend:
        "An Express.js REST API structured as routes, controllers and services. Business rules — what a plan grants, when a subscription becomes active, what happens when it lapses — live in the service layer rather than being scattered through route handlers, so the network-facing side can call the same logic as the dashboard.",
      data:
        "MongoDB models customers, plans, subscriptions and payment records, with references linking a customer to their subscription history. Documents fit the shape of the domain here: subscription records vary in the metadata they carry depending on service type.",
      security:
        "JWT-based authentication for operator accounts, protected API routes, input validation on every write endpoint and secrets kept in environment variables rather than in code. Access to infrastructure is restricted at the Linux firewall level, and administrative traffic travels over WireGuard rather than across open ports.",
      integrations:
        "Paystack for payment collection, and MikroTik RouterOS for the network side — creating and updating hotspot/PPPoE users so that subscription state in the application corresponds to access on the network.",
      challenge:
        "The backend runs on a cloud VPS. The MikroTik router sits inside a network that, under CGNAT, has no stable public address to dial into. A cloud service simply cannot open a connection inward to a router that isn't addressable from the internet — and exposing the router publicly would be the wrong answer even where it is technically possible.",
      decision: {
        options: [
          "Expose the router directly to the internet with port forwarding — requires a public address and widens the attack surface on the most sensitive device in the network.",
          "Use a dynamic DNS service — still assumes a reachable address, which CGNAT does not provide.",
          "Run an agent inside the network that establishes the connection outward to the backend and relays instructions to the router locally.",
        ],
        chosen:
          "The agent approach. The connection is initiated from inside the network, so no inbound reachability is required; the router is only ever addressed from a machine on its own LAN, and the backend never needs credentials for a publicly exposed device. WireGuard provides the encrypted path between the VPS and the network.",
      },
      result:
        "A workable architecture for managing infrastructure that lives behind network boundaries: subscription changes made in the dashboard can reach the router without the router being exposed to the internet.",
      learned:
        "That network constraints are design inputs, not obstacles to route around. Understanding CGNAT, tunnels and where a connection is initiated from changed how I think about any system that has to reach into an environment it does not control.",
    },
  },
  {
    slug: "multi-school-saas",
    name: "Multi-School Management SaaS",
    category: "SaaS / Education Technology",
    short: "A multi-tenant school management platform designed for Nigerian schools.",
    role: "Product and full-stack engineering — tenancy model, roles, data architecture, APIs and billing flows.",
    status: "Ongoing product & engineering project",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma", "Paystack", "REST APIs"],
    challenge: "Letting many schools share one platform while each school's data stays logically isolated.",
    accentIndex: 1,
    diagram: {
      kind: "tree",
      root: "Platform",
      branches: [
        { label: "School A", children: ["Users / Data"] },
        { label: "School B", children: ["Users / Data"] },
      ],
    },
    caseStudy: {
      overview:
        "A school management platform where each school operates its own environment — students, teachers, parents, attendance, fees and results — on shared infrastructure, with subscription plans that gate which features a school can use.",
      problem:
        "School software is usually sold and deployed per school, which makes it expensive to run and slow to update. The concept here is one platform serving many schools, where onboarding a school is a data operation rather than a deployment, without any school ever being able to see another's records.",
      myRole: [
        "Multi-tenant data architecture and tenant isolation model",
        "Role-based access for administrators, teachers, parents and students",
        "REST APIs for students, classes, attendance, fees and results",
        "Subscription plans, feature gating and payment flows",
        "School-specific environments and subdomain routing",
      ],
      frontend:
        "A React application whose navigation and available actions are derived from the signed-in user's role and the school's plan. A parent, a teacher and a school administrator see genuinely different applications built from the same components.",
      backend:
        "Express.js APIs where every request resolves a tenant before it resolves a resource. Tenant context is established once, in middleware, and every query below it is scoped by that context — so isolation is a property of the request pipeline rather than something each handler has to remember.",
      data:
        "A relational model fits this domain: schools own users, students, teachers, classes, payments and results, with real relationships between them. Prisma provides the schema and typed access; the school identifier is part of the shape of tenant-owned records rather than an afterthought.",
      security:
        "Authentication with JWT, role-based authorization checked server-side (never in the UI alone), tenant scoping enforced at the data-access layer, and validation on every write. The rule I hold to is that a leaked or guessed identifier from another school must still return nothing.",
      integrations:
        "Paystack for subscription payments, with plan state driving the feature limits applied throughout the application.",
      challenge:
        "Deciding where tenant isolation is enforced. Filtering by school in each controller works right up until one query forgets to, and that single omission is a cross-school data leak.",
      decision: {
        options: [
          "A separate database per school — strong isolation, but operationally heavy and awkward to migrate as the number of schools grows.",
          "Shared tables with a school identifier filtered manually in each query — simple to start, fragile as the codebase grows.",
          "Shared schema with tenant context resolved in middleware and enforced in the data-access layer, so scoping is applied centrally.",
        ],
        chosen:
          "Shared schema with centralised tenant scoping. It keeps operations simple while making the safe path the default one, instead of relying on every future query being written carefully.",
      },
      result:
        "A tenancy and roles model that supports many schools on one platform, with plans and feature gating layered on top. This is an ongoing product and engineering project, not a launched platform with a school count to quote.",
      learned:
        "That architectural decisions are mostly about where a rule is enforced. Putting isolation somewhere it cannot be skipped is worth more than any amount of care applied per query.",
    },
  },
  {
    slug: "young-gadget-hub",
    name: "Young Gadget Hub",
    category: "E-commerce",
    short: "A full-stack commercial store application covering product management, storefront and backend APIs.",
    role: "Full-stack — storefront UI, product and order APIs, database integration.",
    stack: ["React", "Node.js", "MongoDB", "REST APIs"],
    challenge: "Moving from an interface to a complete application where the storefront reflects real backend state.",
    accentIndex: 2,
    diagram: {
      kind: "flow",
      nodes: [
        { label: "Storefront", note: "Browse, cart, checkout" },
        { label: "REST API", note: "Products, orders, customers" },
        { label: "Business Logic", note: "Pricing, availability, order state" },
        { label: "MongoDB", note: "Catalog and order records" },
      ],
    },
    caseStudy: {
      overview:
        "A commercial store application with a customer-facing storefront and the backend that supplies it — product management, catalog data, order workflows and the APIs connecting them.",
      problem:
        "A store built as a frontend alone is a catalog that someone has to keep editing by hand. The product needed real product management and order handling behind the interface.",
      myRole: [
        "Responsive customer-facing storefront",
        "Product management functionality",
        "REST APIs for products and orders",
        "Database modelling and integration",
        "Commerce workflows from browsing through checkout",
      ],
      frontend:
        "A responsive React storefront: product listing and detail views, cart state, and checkout flow, designed mobile-first because that is where most shoppers actually are.",
      backend:
        "Node.js APIs exposing products and orders, with business rules — availability, pricing, order state transitions — handled server-side rather than trusted from the client.",
      data:
        "MongoDB holds the product catalog, customer records and orders, with order documents capturing line items at the time of purchase rather than only referencing live products.",
      security:
        "Authentication for customer accounts and administrative actions, server-side validation of anything price- or quantity-related, and protected endpoints for product management.",
      integrations: "REST APIs between storefront and backend; payment workflow handling for order completion.",
      challenge:
        "Keeping the interface honest about backend state — stock, pricing and order status have to come from the server, and the UI has to behave sensibly while that data is loading or has changed underneath it.",
      decision: {
        options: [
          "Hold product state client-side and reconcile occasionally — fast to build, but wrong the moment stock or price changes.",
          "Treat the server as the source of truth for anything that affects an order, and design the UI around loading and error states.",
        ],
        chosen:
          "Server as the source of truth. The client renders state; it does not decide it. Any calculation that affects what a customer pays happens on the backend.",
      },
      result:
        "A working full-stack store: the storefront, the APIs behind it, and the data model beneath those — my clearest step from building interfaces to building complete applications.",
      learned:
        "That the interesting part of commerce is state, not layout. Once data changes underneath the user, everything about how you build the frontend changes too.",
    },
  },
  {
    slug: "wiepay",
    name: "WiePay",
    category: "Fintech / BNPL",
    short: "A Buy Now Pay Later product built around a commercial store ecosystem, with wallet and POS interfaces.",
    role: "Full-stack — BNPL wallet, POS interface, backend APIs and authentication.",
    stack: ["React", "Node.js", "Express.js", "REST APIs", "JWT"],
    challenge: "Modelling deferred payment as state that stays consistent across wallet, POS and backend.",
    accentIndex: 3,
    diagram: {
      kind: "flow",
      nodes: [
        { label: "POS Interface", note: "Barcode scanning, checkout" },
        { label: "API Layer", note: "Authenticated requests" },
        { label: "BNPL Logic", note: "Wallet limits, repayment state" },
        { label: "Wallet & Ledger", note: "Balances and transactions" },
      ],
    },
    caseStudy: {
      overview:
        "WiePay is a Buy Now Pay Later product tied to a commercial store ecosystem: a wallet that carries a customer's deferred balance, and a POS interface where a purchase is scanned and charged against it.",
      problem:
        "Deferred payment means the moment of purchase and the moment of payment are separated. The system has to represent that gap accurately for both the customer and the store.",
      myRole: [
        "BNPL wallet concept and interface",
        "POS interface with barcode scanning",
        "Backend APIs and product/business logic",
        "Authentication and protected operations",
        "Payment-related workflows",
      ],
      frontend:
        "Two very different surfaces: a customer wallet view showing balance and obligations, and a POS interface built for speed at the counter — barcode scanning, minimal taps, immediately legible totals.",
      backend:
        "Express APIs holding the BNPL rules: what a wallet can cover, how a transaction is recorded, how repayment changes available balance. Every one of those decisions is made server-side.",
      data:
        "Transactions are modelled as an append-only history rather than a mutable balance field, so the current balance is derived from recorded events and any figure can be traced back to the transactions that produced it.",
      security:
        "JWT authentication, authorization checks on every money-touching endpoint, validation of all transaction input, and the rule that a client may request an operation but never assert its outcome.",
      integrations: "Store/product ecosystem integration, barcode input at the POS, and payment workflow handling.",
      challenge:
        "Anything financial has to be correct under concurrency and retries — the same POS request arriving twice must not create two charges against a wallet.",
      decision: {
        options: [
          "Store a single balance field and update it on each transaction — simple, but unrecoverable when something goes wrong mid-write.",
          "Record transactions as events and derive balance from them, with server-side checks against duplicate submissions.",
        ],
        chosen:
          "The transaction-record approach. It costs more work up front and gives an auditable history — which, for anything involving money, is the requirement rather than a nice extra.",
      },
      result:
        "A BNPL system design where wallet state, POS operations and backend logic agree with each other, and where every balance can be explained by the records behind it.",
      learned:
        "That fintech work is mostly about correctness guarantees. Idempotency, auditability and server-side authority stopped being abstract concepts on this project.",
    },
  },
  {
    slug: "everyvoice",
    name: "EveryVoice",
    category: "Content / Blog Platform",
    short: "A blog and content platform demonstrating frontend and backend application development end to end.",
    role: "Full-stack — content management, API integration and responsive interface.",
    stack: ["React", "Node.js", "REST APIs", "MongoDB"],
    challenge: "Structuring content so the reading experience and the authoring experience both stay simple.",
    accentIndex: 4,
    diagram: {
      kind: "flow",
      nodes: [
        { label: "Reader Interface", note: "Responsive reading experience" },
        { label: "Content API", note: "Posts, authors, categories" },
        { label: "Content Store", note: "Structured content records" },
      ],
    },
    caseStudy: {
      overview:
        "A content platform covering both sides of publishing: an interface for readers and the content management and APIs that supply it.",
      problem:
        "Content platforms fail in one of two directions — pleasant to read but painful to write for, or flexible for authors and incoherent for readers. Both sides need to be designed together.",
      myRole: [
        "Content management functionality",
        "Responsive reading interface",
        "API integration between client and backend",
        "Data modelling for posts and categories",
      ],
      frontend:
        "A reading-first interface: typography and measure tuned for long-form text, responsive layouts, and navigation by category that stays out of the way of the content.",
      backend: "APIs for creating, updating, listing and retrieving content, with the listing endpoints shaped to what the reader views actually need.",
      data: "Posts, authors and categories with the relationships between them, modelled so that content can be queried by category or author without duplicating records.",
      security: "Authenticated authoring, protected content-management endpoints, and validation of submitted content.",
      integrations: "REST API integration between the frontend application and the content backend.",
      challenge:
        "Content models drift. Every new format tempts you into another special-case field until the schema no longer describes anything clearly.",
      decision: {
        options: [
          "Add fields per content type as needs appear — quick, and steadily harder to query.",
          "Keep a small, consistent content model and handle presentation variation in the frontend.",
        ],
        chosen:
          "The smaller model. Presentation differences belong to the interface; the data layer stays predictable and easy to query.",
      },
      result: "A working content platform with a clean reading experience and a backend that supports it without special cases.",
      learned: "That data modelling decisions show up as UI complexity months later. A vague schema is a slow tax on everything built above it.",
    },
  },
  {
    slug: "precious-global-express",
    name: "Precious Global Express",
    category: "Logistics / Business Website",
    short: "A logistics website presenting shipping, air and sea freight and related services.",
    role: "Frontend engineering, responsive UI, UX improvements and deployment.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    challenge: "Making a service business legible on a phone, where most of its visitors arrive.",
    accentIndex: 5,
    diagram: {
      kind: "flow",
      nodes: [
        { label: "Visitor", note: "Mostly mobile traffic" },
        { label: "Next.js Site", note: "Server-rendered pages" },
        { label: "Service Content", note: "Shipping, air & sea freight" },
        { label: "Deployment", note: "Production hosting" },
      ],
    },
    caseStudy: {
      overview:
        "A business website for a logistics company covering its shipping, air freight and sea freight services, built to explain those services clearly and be usable on a phone.",
      problem:
        "Logistics services are easy to describe badly. A visitor needs to understand quickly what is offered, whether it applies to them, and how to make contact.",
      myRole: [
        "Responsive, mobile-first interface",
        "Next.js implementation and page structure",
        "Visual storytelling for the service offering",
        "UX improvements and deployment",
      ],
      frontend:
        "Next.js with Tailwind CSS, structured mobile-first: clear service sections, a strong visual hierarchy, and content ordered around what a prospective customer asks first.",
      backend: "This is a presentation-focused website — the engineering weight sits in structure, rendering and delivery rather than in application logic.",
      data: "Service content is kept structured and separate from layout so pages can be extended without rewriting components.",
      security: "Standard production hygiene: no secrets in the client bundle, HTTPS delivery and validated form input.",
      integrations: "Contact and enquiry routing, plus deployment and hosting configuration.",
      challenge:
        "Communicating several related services without turning the page into an undifferentiated wall of text on a small screen.",
      decision: {
        options: [
          "One dense services page listing everything.",
          "Distinct, visually separated service sections with a consistent structure the visitor learns once.",
        ],
        chosen: "Separated, consistently structured sections — repetition of structure is what makes scanning possible on mobile.",
      },
      result: "A clear, responsive logistics website that presents the company's services and works well on the devices its visitors actually use.",
      learned: "That presentation work has its own engineering discipline. Structure, hierarchy and delivery are decisions, not decoration.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
