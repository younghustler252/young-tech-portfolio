"use client"

import { FileText, MessageCircle } from "lucide-react"
import GlassCard from "@/components/GlassCard"
import Link from "next/link"

export default function ContactSection() {
	return (
		<section className="px-4 sm:px-6 md:px-10 py-20 max-w-5xl mx-auto">
			<GlassCard className="p-10 md:p-14 text-center flex flex-col items-center gap-6">
				{/* Heading */}
				<h2 className="text-4xl md:text-5xl font-bold text-white">
					Let’s build something great together
				</h2>

				{/* Description */}
				<p className="text-gray-300 max-w-2xl leading-relaxed text-lg">
					Have an idea, a product to launch, or just want to collaborate?
					I’m always open to discussing new projects, creative ideas, or
					opportunities to bring value through code and design.
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 mt-6">
					{/* Resume */}
					<a
						href="\Bodede_Sodiq_Resume.pdf"
						target="_blank"
						className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-medium backdrop-blur-sm hover:border-cyan-400 hover:text-cyan-400 transition"
					>
						<FileText size={20} />
						View Resume
					</a>

					{/* Contact */}
					<Link
						href="/contact"
						className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-green-400 text-black font-semibold hover:opacity-90 transition shadow-lg"
					>
						<MessageCircle size={20} />
						Start a Conversation
					</Link>
				</div>
			</GlassCard>
		</section>
	)
}
