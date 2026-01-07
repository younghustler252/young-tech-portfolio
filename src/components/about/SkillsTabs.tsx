"use client";

import { useState } from "react";
import SkillsPanel from "./SkillsPanel";
import CertificatesPanel from "./CertificatesPanel";
import ExperiencePanel from "./ExperiencePanel";

type Tab = "skills" | "certificates" | "experience";

const tabs: { key: Tab; label: string }[] = [
	{ key: "skills", label: "Skills" },
	{ key: "certificates", label: "Certificates" },
	{ key: "experience", label: "Experience" },
];

function TabButton({
	label,
	active,
	onClick,
}: {
	label: string;
	active: boolean;
	onClick: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className="
				relative flex items-center justify-center
				py-2.5
				text-sm tracking-wide
				transition-all duration-200 ease-out
			"
		>
			{/* Active Neon Box */}
			{active && (
				<span
					className="
						absolute inset-0
						rounded-lg
						bg-cyan-400/10
						shadow-[0_0_18px_#22d3ee]
						blur-sm
					"
				/>
			)}

			{/* Label */}
			<span
				className={`
					relative z-10
					${active ? "text-white" : "text-gray-400 hover:text-gray-200"}
				`}
			>
				{label}
			</span>

			{/* Thin Bottom Accent */}
			{active && (
				<span
					className="
						absolute bottom-1 left-1/2
						w-10 h-[2px]
						bg-cyan-400
						shadow-[0_0_8px_#22d3ee]
						-translate-x-1/2
					"
				/>
			)}
		</button>
	);
}

export default function SkillsTabs() {
	const [activeTab, setActiveTab] = useState<Tab>("skills");

	return (
		<section className="mt-24 max-w-6xl mx-auto px-10">

			{/* Tabs Rail */}
			<div
				className="
					mb-12
					grid grid-cols-3
					p-1
					rounded-xl
					bg-white/5
					backdrop-blur-md
					border border-white/10
				"
			>
				{tabs.map((tab) => (
					<TabButton
						key={tab.key}
						label={tab.label}
						active={activeTab === tab.key}
						onClick={() => setActiveTab(tab.key)}
					/>
				))}
			</div>

			{/* Content */}
			<div className="relative">
				<div key={activeTab} className="animate-fadeSlide">
					{activeTab === "skills" && <SkillsPanel />}
					{activeTab === "certificates" && <CertificatesPanel />}
					{activeTab === "experience" && <ExperiencePanel />}
				</div>
			</div>

		</section>
	);
}
