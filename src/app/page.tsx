import Hero from "@/components/Hero";
import ProjectSection from "@/components/home/ProjectSection";
import SkillsSection from "@/components/home/SkillSection";
import ContactSection from "@/components/home/ContactSection";
// import profilePic from "@/public/profile.jpg"; 

export default function Home() {
  return (
    <main>
      <Hero
        headlines={["Fullstack Web Developer", "MERN Specialist", "React & Next.js Enthusiast"]}
        description="I build modern, fast, and responsive web applications using Next.js, React, and Tailwind CSS."
        profileImage="/logo.jpg" // make sure image is in public folder
      />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
