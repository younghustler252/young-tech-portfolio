"use client";

import {
	Github,
	Linkedin,
	MessageCircle,
	Mail,
	FileText
} from "lucide-react";

import GlassCard from "../GlassCard";
import SocialLink from "../SocialLink";

export default function AboutSection() {
	return (
		<section className="px-10 py-20 max-w-6xl mx-auto">
			
			{/* Title OUTSIDE the glass card */}
			<div className="mb-12">
				<h1 className="text-5xl font-bold text-white mb-4">
					About Young Tech
				</h1>
				<p className="text-gray-400 max-w-2xl leading-relaxed">
					A developer focused on building modern, scalable, and visually
					refined web experiences using React, TypeScript, and clean
					engineering principles.
				</p>
			</div>

			{/* Main Content */}
			<GlassCard className="flex flex-col md:flex-row gap-12 p-10">
				
				{/* Image */}
				<div className="flex-shrink-0">
					<img
						src="https://i.pinimg.com/736x/7b/34/8e/7b348e78b1f662ebcb28063a99b7057d.jpg"
						alt="Young Tech"
						className="
							w-56 h-72 object-cover
							border border-blue-400/30
						"
					/>
				</div>

				{/* Professional Summary */}
				<div className="flex flex-col justify-between">
					<div>
						<h2 className="text-xl font-semibold text-white mb-4">
							Professional Summary
						</h2>

						<p className="text-gray-300 mb-4 leading-relaxed">
							I am a passionate developer with a strong focus on modern
							frontend technologies and clean, maintainable code. I enjoy
							building interfaces that feel intentional, performant, and
							visually refined.
						</p>

						<p className="text-gray-300 leading-relaxed">
							My experience includes React, TypeScript, TailwindCSS, and
							full-stack development. I value clarity in design, strong
							foundations in code, and continuous learning.
						</p>
					</div>

					{/* Social / Contact */}
					<div className="mt-8 flex flex-col gap-6">
						
						{/* Resume (icon + text) */}
						<SocialLink
							href="/resume.pdf"
							icon={<FileText size={22} />}
							label="Download Resume"
						/>

						{/* Icon-only links */}
						<div className="flex gap-6">
							<SocialLink
								href="mailto:your@email.com"
								icon={<Mail size={22} />}
							/>
							<SocialLink
								href="https://github.com/username"
								icon={<Github size={22} />}
							/>
							<SocialLink
								href="https://linkedin.com/in/username"
								icon={<Linkedin size={22} />}
							/>
							<SocialLink
								href="https://wa.me/123456789"
								icon={<MessageCircle size={22} />}
							/>
						</div>
					</div>
				</div>

			</GlassCard>
		</section>
	);
}
