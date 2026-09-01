export const contactConfig = {
	email: {
		label: "Email",
		value: "your-email@example.com",
		href: "mailto:your-email@example.com",
	},

	location: {
		label: "Location",
		value: "Lagos, Nigeria",
	},

	availability: {
		label: "Availability",
		value: "Available for selected projects",
	},

	cta: {
		eyebrow: "Have a problem worth building?",

		title: "Let's build something useful.",

		description:
			"Whether you need a web application, backend system, API, SaaS platform, or you're exploring a new product idea, let's talk about the problem first.",

		primaryLabel: "Start a Conversation",

		primaryHref: "mailto:your-email@example.com",

		secondaryLabel: "View My Work",

		secondaryHref: "/work",
	},

	form: {
		enabled: true,

		fields: {
			name: {
				label: "Name",
				placeholder: "Your name",
				required: true,
			},

			email: {
				label: "Email",
				placeholder: "you@example.com",
				required: true,
			},

			subject: {
				label: "What are you building?",
				placeholder: "Tell me what you have in mind",
				required: true,
			},

			message: {
				label: "Message",
				placeholder:
					"Tell me about the problem, product, or project...",
				required: true,
			},
		},

		submitLabel: "Send Message",
		successMessage:
			"Thanks for reaching out. I'll get back to you as soon as possible.",

		errorMessage:
			"Something went wrong. Please try again or contact me directly by email.",
	},
} as const;