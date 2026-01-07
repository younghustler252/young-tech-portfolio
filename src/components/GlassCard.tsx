"use client";

import React from "react";

interface GlassCardProps {
	children: React.ReactNode;
	className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
	return (
		<div
			className={`
				bg-blue-500/5 backdrop-blur-lg
				border border-blue-400/30
				shadow-[0_0_40px_rgba(59,130,246,0.25)]
				p-8
				${className ?? ""}
			`}
		>
			{children}
		</div>
	);
}
