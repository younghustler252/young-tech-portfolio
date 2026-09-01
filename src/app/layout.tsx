import type { Metadata } from "next"

import "./globals.css"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { profileConfig } from "@/config/profile"

export const metadata: Metadata = {
	title: `${profileConfig.name} — ${profileConfig.title}`,
	description: profileConfig.description,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />

				<main>{children}</main>

				<Footer />
			</body>
		</html>
	)
}