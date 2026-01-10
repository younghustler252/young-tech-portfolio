"use client";

import { useState } from "react";
import {
	Mail,
	Phone,
	Github,
	Linkedin,
	FileText,
	MessageCircle,
} from "lucide-react";

import GlassCard from "@/components/GlassCard";
import SocialLink from "@/components/SocialLink";

export default function ContactPage() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		const whatsappMessage = `
Hello 👋

You have a new message from your portfolio:

👤 Name: ${form.name}
📧 Email: ${form.email}

💬 Message:
${form.message}
		`;

		const encodedMessage = encodeURIComponent(whatsappMessage);

		window.open(
			`https://wa.me/2348080061178?text=${encodedMessage}`,
			"_blank"
		);

		setForm({ name: "", email: "", message: "" });
	}

	return (
		<section className="px-4 sm:px-6 md:px-10 py-24 max-w-6xl mx-auto">
			{/* Heading */}
			<div className="mb-16">
				<h1 className="text-5xl font-bold text-white mb-4">
					Let’s Collaborate
				</h1>
				<p className="text-gray-400 max-w-2xl leading-relaxed">
					Open to new opportunities, freelance work, and meaningful
					collaborations. Let’s build something impactful together.
				</p>
			</div>

			{/* Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				{/* LEFT — Quick Connect */}
				<div>
					<p className="text-cyan-400 font-medium mb-4">
						Quick ways to reach me
					</p>

					<GlassCard className="p-8 flex flex-col gap-6">
						<h2 className="text-xl font-semibold text-white">
							Quick Connect
						</h2>

						<div className="flex items-center gap-4 text-gray-300">
							<Mail className="text-cyan-400" />
							<span>younghustler252@gmail.com</span>
						</div>

						<div className="flex items-center gap-4 text-gray-300">
							<Phone className="text-cyan-400" />
							<span>+234 808 006 1178</span>
						</div>

						<div className="mt-2">
							<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-400 border border-green-500/30">
								● Open to new opportunities
							</span>
						</div>

						<hr className="border-white/10 my-2" />

						<div className="flex items-center gap-6">
							<SocialLink
								href="https://github.com/younghustler252"
								icon={<Github size={22} />}
							/>
							<SocialLink
								href="https://linkedin.com/in/bodede-sodiq-365790335"
								icon={<Linkedin size={22} />}
							/>
						</div>

						<SocialLink
							href="/Bodede_Sodiq_Resume.pdf"
							icon={<FileText size={22} />}
							label="Download Resume"
						/>
					</GlassCard>
				</div>

				{/* RIGHT — WhatsApp Form */}
				<GlassCard className="p-8">
					<h2 className="text-xl font-semibold text-white mb-6">
						Send a Message
					</h2>

					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-5"
					>
						<input
							type="text"
							placeholder="Your name"
							required
							value={form.name}
							onChange={(e) =>
								setForm({ ...form, name: e.target.value })
							}
							className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
						/>

						<input
							type="email"
							placeholder="Your email"
							required
							value={form.email}
							onChange={(e) =>
								setForm({ ...form, email: e.target.value })
							}
							className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
						/>

						<textarea
							placeholder="Tell me about your idea..."
							rows={5}
							required
							value={form.message}
							onChange={(e) =>
								setForm({ ...form, message: e.target.value })
							}
							className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-none"
						/>

						<button
							type="submit"
							className="mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-400 to-cyan-500 text-black font-semibold hover:opacity-90 transition shadow-lg"
						>
							<MessageCircle size={20} />
							Chat on WhatsApp
						</button>
					</form>
				</GlassCard>
			</div>
		</section>
	);
}
