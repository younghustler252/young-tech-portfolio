import Link from "next/link"

import { footerNav } from "@/config/nav"
import { profileConfig } from "@/config/profile"
import { socialsConfig } from "@/config/socials"

export function Footer() {
	return (
		<footer className="border-t border-border px-5 py-14 sm:px-8">
			<div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
				{/* Brand */}

				<div>
					<p className="text-lg font-semibold">
						{profileConfig.brand}
					</p>

					<p className="mt-2 max-w-xs text-sm text-muted-foreground">
						Building products, understanding systems.
					</p>
				</div>

				{/* Navigation */}

				<nav aria-label="Footer">
					<p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
						Navigate
					</p>

					<ul className="mt-4 space-y-2.5">
	{Object.values(socialsConfig).map((social) => (
		<li key={social.label} className="text-sm">
			{social.url ? (
				<Link
					href={social.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-muted-foreground transition-colors hover:text-accent"
				>
					<span className="text-foreground/80">
						{social.label}
					</span>{" "}

					<span className="font-mono text-xs text-muted-foreground/70">
						— {social.username}
					</span>
				</Link>
			) : (
				<span className="text-muted-foreground">
					<span className="text-foreground/80">
						{social.label}
					</span>{" "}

					<span className="font-mono text-xs text-muted-foreground/70">
						— {social.username}
					</span>
				</span>
			)}
		</li>
	))}
</ul>
				</nav>

				{/* Socials */}

				<div>
					<p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
						Elsewhere
					</p>

					<ul className="mt-4 space-y-2.5">
                        {Object.values(socialsConfig).map((social) => (
                            <li key={social.label}>
                                <Link
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                                >
                                    <span className="text-foreground/80">
                                        {social.label}
                                    </span>{" "}

                                    <span className="font-mono text-xs text-muted-foreground/70">
                                        — {social.username}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
				</div>
			</div>

			{/* Copyright */}

			<div className="mx-auto mt-12 w-full max-w-6xl border-t border-border pt-6">
				<p className="font-mono text-xs text-muted-foreground">
					© {new Date().getFullYear()} {profileConfig.brand}
				</p>
			</div>
		</footer>
	)
}