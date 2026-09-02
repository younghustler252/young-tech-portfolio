"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { socialsConfig } from "@/config/socials";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Footer() {
    const github = socialsConfig.github;
    const linkedin = socialsConfig.linkedin;
    const whatsapp = socialsConfig.whatsapp;
    const phone = socialsConfig.phone;

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
                                            text-gray-400
                                            hover:text-cyan-400
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

                        <div className="flex gap-4">
                            {/* Email */}
                            <a
                                href="mailto:youghustler@email.com"
                                aria-label="Email Young Tech"
                                className="
                                    grid size-10 place-items-center
                                    rounded-lg
                                    border border-white/10
                                    bg-white/5
                                    text-gray-400
                                    hover:border-cyan-400/40
                                    hover:bg-cyan-400/10
                                    hover:text-cyan-400
                                    transition-all
                                "
                            >
                                <Mail size={20} />
                            </a>

                            {/* GitHub */}
                            <a
                                href={github.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="
                                    grid size-10 place-items-center
                                    rounded-lg
                                    border border-white/10
                                    bg-white/5
                                    text-gray-400
                                    hover:border-cyan-400/40
                                    hover:bg-cyan-400/10
                                    hover:text-cyan-400
                                    transition-all
                                "
                            >
                                <FaGithub size={20} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={linkedin.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="
                                    grid size-10 place-items-center
                                    rounded-lg
                                    border border-white/10
                                    bg-white/5
                                    text-gray-400
                                    hover:border-cyan-400/40
                                    hover:bg-cyan-400/10
                                    hover:text-cyan-400
                                    transition-all
                                "
                            >
                                <FaLinkedin size={20} />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={whatsapp.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                                className="
                                    grid size-10 place-items-center
                                    rounded-lg
                                    border border-white/10
                                    bg-white/5
                                    text-gray-400
                                    hover:border-green-400/40
                                    hover:bg-green-400/10
                                    hover:text-green-400
                                    transition-all
                                "
                            >
                                <MessageCircle size={20} />
                            </a>

                            {/* Phone */}
                            <a
                                href={phone.url}
                                aria-label="Call Young Tech"
                                className="
                                    grid size-10 place-items-center
                                    rounded-lg
                                    border border-white/10
                                    bg-white/5
                                    text-gray-400
                                    hover:border-cyan-400/40
                                    hover:bg-cyan-400/10
                                    hover:text-cyan-400
                                    transition-all
                                "
                            >
                                <Phone size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 pt-6 border-t border-white/10 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Young Tech. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
