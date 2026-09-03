import Image from "next/image"
import Link from "next/link"

import { profileConfig } from "@/config/profile"
 
export function Logo() {
	return (
		<Link
			href="/"
			className="group flex items-center gap-2.5"
		>
			<img
				src={profileConfig.logo}
				alt={profileConfig.brand}
				width={28}
				height={28}
				className="size-7 rounded-md object-contain"
			/>

			<span className="text-[15px] font-semibold tracking-tight">
				{profileConfig.brand}
			</span>
		</Link>
	)
}
