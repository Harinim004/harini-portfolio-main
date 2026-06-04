import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { BackgroundFX } from "@/components/portfolio/BackgroundFX";
import { Loader } from "@/components/portfolio/Loader";
import { SectionReveal, SectionTransition } from "@/components/portfolio/SectionReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harini M — AR/VR Developer · Flutter · Creative Technologist" },
      { name: "description", content: "Futuristic portfolio of Harini M — Computer Science & Design undergraduate building immersive AR/VR experiences, Flutter apps and leading IEEE & ISTE communities." },
      { property: "og:title", content: "Harini M — Futuristic Portfolio" },
      { property: "og:description", content: "AR/VR Developer · Flutter Developer · IEEE Chairperson · Creative Technologist." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Loader />
      <CursorGlow />
      <ScrollProgress />
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <SectionTransition />
        <SectionReveal intensity={1}><About /></SectionReveal>
        <SectionTransition />
        <SectionReveal intensity={0.8}><Skills /></SectionReveal>
        <SectionTransition />
        <SectionReveal intensity={1.1}><Projects /></SectionReveal>
        <SectionTransition />
        <SectionReveal intensity={0.9}><Experience /></SectionReveal>
        <SectionTransition />
        <SectionReveal intensity={0.8}><Contact /></SectionReveal>
      </main>
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
