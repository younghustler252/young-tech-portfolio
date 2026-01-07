"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<nav
			className="
				sticky top-0 z-50
				backdrop-blur-lg
				bg-blue-500/5
				border-b border-blue-400/30
			"
		>
			<div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">
				
				{/* Logo / Name (UNCHANGED) */}
				<h1 className="text-white font-semibold tracking-wide">
					My Portfolio
				</h1>

				{/* Desktop Links (UNCHANGED) */}
				<div className="hidden md:flex gap-6">
					{navLinks.map((link) => {
						const isActive = pathname === link.href;

						return (
							<Link
								key={link.name}
								href={link.href}
								className={`
									relative px-4 py-2 text-sm tracking-wide
									transition-all duration-300
									${isActive
										? "text-white"
										: "text-gray-400 hover:text-gray-200"}
								`}
							>
								{isActive && (
									<span className="absolute inset-0 rounded-md bg-cyan-400/10 shadow-[0_0_20px_#22d3ee] blur-sm" />
								)}

								<span className="relative z-10">
									{link.name}
								</span>

								{isActive && (
									<span className="absolute bottom-0 left-1/2 w-3/4 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee] -translate-x-1/2" />
								)}
							</Link>
						);
					})}
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setOpen(!open)}
					className="md:hidden text-gray-300 hover:text-white transition"
				>
					{open ? <X size={26} /> : <Menu size={26} />}
				</button>
			</div>

			{/* Mobile Dropdown (NEW, MOBILE ONLY) */}
			{open && (
				<div
					className="
						md:hidden
						backdrop-blur-xl
						bg-blue-500/10
						border-t border-blue-400/20
					"
				>
					<div className="flex flex-col px-6 py-6 gap-4">
						{navLinks.map((link) => {
							const isActive = pathname === link.href;

							return (
								<Link
									key={link.name}
									href={link.href}
									onClick={() => setOpen(false)}
									className={`
										px-4 py-3 rounded-lg text-sm font-medium
										transition
										${isActive
											? "bg-cyan-400/10 text-white border border-cyan-400/30"
											: "text-gray-300 hover:bg-white/5"}
									`}
								>
									{link.name}
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</nav>
	);
}
