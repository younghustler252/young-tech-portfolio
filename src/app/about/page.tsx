// pages/about.tsx
import { Github, Linkedin, MessageCircle, FileText } from "lucide-react";
import AboutSection from "@/components/about/AboutSection";
import TechStack from "@/components/about/TechStack";
import SkillsTabs from "@/components/about/SkillsTabs";

export default function About() {
	return (
		<main>
			<AboutSection />
            <TechStack />
            <SkillsTabs />
		</main>
	);
}
