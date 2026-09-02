type SocialConfig = {
	label: string;
	url: string;
	icon: string;
	username?: string;
};

export const socialsConfig: Record<string, SocialConfig> = {
	github: {
		label: "GitHub",
		username: "younghustler252",
		url: "https://github.com/younghustler252",
		icon: "Github",
	},

	linkedin: {
		label: "LinkedIn",
		username: "bodede-sodiq-365790335",
		url: "https://www.linkedin.com/in/bodede-sodiq-365790335",
		icon: "LinkedIn",
	},

	whatsapp: {
		label: "WhatsApp",
		url: "https://wa.me/2348080061178",
		icon: "MessageCircle",
	},

	phone: {
		label: "Call",
		url: "tel:+2348080061178",
		icon: "Phone",
	},
};
