"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import { nav } from "@/config/nav"
import { buttonVariants } from "@/components/ui/button"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"

export function Navbar() {
	const [open, setOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 8)
		}

		onScroll()

		window.addEventListener("scroll", onScroll, { passive: true })

		return () => {
			window.removeEventListener("scroll", onScroll)
		}
	}, [])

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : ""

		return () => {
			document.body.style.overflow = ""
		}
	}, [open])

	return (
		<header
			className={cn(
				"sticky top-0 z-50 border-b transition-colors duration-300",
				scrolled
					? "border-border bg-background/85 backdrop-blur-xl"
					: "border-transparent bg-transparent",
			)}
		>
			<nav
				aria-label="Primary"
				className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
			>
				<Logo />

				{/* Desktop navigation */}

				<ul className="hidden items-center gap-1 md:flex">
					{nav.map((item) => (
						<li key={item.to}>
							<Link
								href={item.to}
								className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				{/* Desktop CTA */}

				<Link
					href="/contact"
					className={cn(
						buttonVariants({
							size: "sm",
						}),
						"hidden md:inline-flex",
					)}
				>
					Let's build something
				</Link>

				{/* Mobile menu button */}

				<button
					type="button"
					className="grid size-10 place-items-center rounded-md border border-border text-foreground md:hidden"
					aria-expanded={open}
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((value) => !value)}
				>
					{open ? (
						<X className="size-5" aria-hidden />
					) : (
						<Menu className="size-5" aria-hidden />
					)}
				</button>
			</nav>

			{/* Mobile menu */}

			{open && (
				<div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
					<div className="flex h-full flex-col px-5 py-6">
						<ul className="space-y-1">
							{nav.map((item) => (
								<li key={item.to}>
									<Link
										href={item.to}
										onClick={() => setOpen(false)}
										className="block border-b border-border py-4 text-2xl font-medium transition-colors hover:text-primary"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>

						<Link
							href="/contact"
							onClick={() => setOpen(false)}
							className={cn(
								buttonVariants({
									size: "lg",
								}),
								"mt-8 w-full",
							)}
						>
							Let's build something
						</Link>
					</div>
				</div>
			)}
		</header>
	)
}