"use client";

import React from "react";

interface SocialLinkProps {
	href: string;
	icon: React.ReactNode;
	label?: string;
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="
				flex items-center gap-2
				text-gray-400
				hover:text-blue-400
				transition-all duration-300
				hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]
			"
		>
			{icon}
			{label && <span className="text-sm tracking-wide">{label}</span>}
		</a>
	);
}
