"use client";

import TypingText from "./TypingText";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

type HeroProps = {
	headlines: string[];
	description: string;
	profileImage: string;
};

function SocialIcons() {
	const socialLinks = [
		{ icon: <Github size={22} />, href: "https://github.com/younghustler252", label: "GitHub" },
		{ icon: <Linkedin size={22} />, href: "https://linkedin.com/in/bodede-sodiq-365790335", label: "LinkedIn" },
		{ icon: <Mail size={22} />, href: "mailto:younghustler252@gmail.com", label: "Email" },
	];

	return (
		<div className="flex items-center gap-6 pt-6 text-gray-400">
			{socialLinks.map((social) => (
				<a
					key={social.label}
					href={social.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={social.label}
					className="
						transition-all duration-300
						hover:text-blue-400
						hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]
					"
				>
					{social.icon}
				</a>
			))}
		</div>
	);
}

export default function Hero({ headlines, description, profileImage }: HeroProps) {
	return (
		<section className="min-h-screen px-6 md:px-20 pt-32 flex flex-col justify-center">
			
			{/* Headline */}
			<div className="text-center mb-12">
				<h1 className="text-5xl md:text-7xl font-extrabold leading-tight relative inline-block">
					<span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
						<TypingText words={headlines} />
					</span>
					{/* Neon underline */}
					<span className="absolute left-0 -bottom-2 w-full h-[4px] bg-blue-400/60 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"></span>
				</h1>
			</div>

			<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-20">

				{/* Text Content */}
				<div className="flex-1 space-y-8">
					<p className="max-w-xl text-gray-300 text-lg md:text-xl leading-relaxed">
						{description}
					</p>

					{/* CTAs */}
					<div className="flex items-center gap-4 flex-wrap">
						<Link
							href="/projects"
							className="
								inline-flex items-center gap-2 px-8 py-3
								border border-blue-400/40
								text-white
								rounded-lg
								hover:border-blue-400
								hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
								transition-all
								duration-300
							"
						>
							View Projects
							<ArrowUpRight size={20} />
						</Link>

						<Link
							href="/contact"
							className="
								inline-flex items-center gap-2 px-8 py-3
								text-gray-400
								hover:text-white
								transition-all
								duration-300
							"
						>
							Contact Me
						</Link>
					</div>

					<SocialIcons />
				</div>

				{/* Profile Image */}
				<div className="flex-1 flex justify-center md:justify-end">
					<div
						className="
							bg-white/5 backdrop-blur-md
							border border-white/10
							shadow-[0_0_40px_rgba(59,130,246,0.25)]
							rounded-xl
							p-4
							transition-all duration-300
							hover:shadow-[0_0_60px_rgba(59,130,246,0.4)]
						"
					>
						<img
							src={profileImage}
							alt="Profile"
							className="
								w-72 h-96 md:w-80 md:h-[420px]
								object-cover rounded-lg
							"
						/>
					</div>
				</div>

			</div>
		</section>
	);
}
