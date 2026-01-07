"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Footer() {
	return (
		<footer
			className="
				mt-32
				backdrop-blur-lg
				bg-blue-500/5
				border-t border-blue-400/30
			"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16">
				
				{/* Top */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					
					{/* Brand */}
					<div>
						<h2
							className="
								text-2xl font-bold tracking-wide
								bg-gradient-to-r from-cyan-400 to-blue-500
								bg-clip-text text-transparent
								drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]
								mb-4
							"
						>
							Young Tech
						</h2>

						<p className="text-gray-400 max-w-sm leading-relaxed">
							Building modern, scalable, and visually refined web
							experiences with clean engineering principles.
						</p>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="text-white font-semibold mb-4">
							Navigation
						</h3>

						<ul className="flex flex-col gap-3">
							{navLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="
											text-gray-400 hover:text-cyan-400
											transition
										"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Socials */}
					<div>
						<h3 className="text-white font-semibold mb-4">
							Connect
						</h3>

						<div className="flex gap-5">
							<a
								href="mailto:youghustler@email.com"
								className="text-gray-400 hover:text-cyan-400 transition"
							>
								<Mail size={22} />
							</a>
							<a
								href="https://github.com/username"
								className="text-gray-400 hover:text-cyan-400 transition"
							>
								<Github size={22} />
							</a>
							<a
								href="https://linkedin.com/in/username"
								className="text-gray-400 hover:text-cyan-400 transition"
							>
								<Linkedin size={22} />
							</a>
						</div>
					</div>

				</div>

				{/* Bottom */}
				<div className="mt-16 pt-6 border-t border-white/10 text-center">
					<p className="text-gray-500 text-sm">
						© {new Date().getFullYear()} Young Tech. All rights reserved.
					</p>
				</div>

			</div>
		</footer>
	);
}
