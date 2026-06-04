import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Github, ExternalLink, X } from "lucide-react";

import imgArivu from "@/assets/proj-arivu.jpg";
import imgHolohola from "@/assets/proj-holohola.jpg";
import imgMetahunt from "@/assets/proj-metahunt.jpg";
import imgPurr from "@/assets/proj-purrsistance.jpg";
import imgQR from "@/assets/proj-qr.jpg";
import imgPinch from "@/assets/proj-samepinch.jpg";
import imgTechPulse from "@/assets/proj-techpulse.jpg";
import imgVRArt from "@/assets/proj-vrart.jpg";
import imgHospital from "@/assets/proj-hospital.jpg";
import imgCollege from "@/assets/proj-college.jpg";
import imgQuiz from "@/assets/proj-quiz.jpg";
import imgBlood from "@/assets/proj-blood.jpg";
import imgTodo from "@/assets/proj-todo.jpg";

type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  gradient: string;
  emoji: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "ARIVU",
    tagline: "AR-based interactive learning",
    description:
      "An innovative AR learning platform developed using Unity and Vuforia that enables students to explore concepts through interactive 3D content. The system includes Firebase-powered quizzes, authentication, and a Rule Based Python AI engine for seamless learning assessment.",
    tech: ["Unity", "C#", "Python", "Flask", "Firebase", "Vuforia","Blender"],
    features: ["Interactive 3D models", "Quiz Module", "Real-time scoring", "Rule Based Python AI"],
    github: "https://github.com/AlwinVP/ARivu_Code",
    demo: "https://drive.google.com/file/d/1X37P9m5rOpfjviL42w5e9bI78a1be0Qf/view?usp=sharing",
    gradient: "from-[var(--cyan-glow)] to-[var(--blue-glow)]",
    emoji: "🧠",
    image: imgArivu,
  },
  {
    name: "HoloHola",
    tagline: "Real-time AR calling app",
    description:
      "HoloHola is an AI and AR-powered communication platform developed using Flutter, Firebase, Agora, and Python that enhances audio and video calling through real-time emotion detection, conversation analysis, and immersive augmented reality experiences. The application leverages on-device AI processing to deliver intelligent, interactive, and privacy-focused communication.",
    tech: ["Flutter", "Firebase", "Python", "Unity","ARCore","AR Foundation","Agora SDK","Blender"],
    features: ["Audio/Video calls", "Emotion detection", "Modern and Interactive user interface", "AR overlays"],
    github: "https://github.com/Harinim004/Holohola",
    demo: "https://drive.google.com/drive/folders/1HyFNdxg9OA5C5t9dx4iSr4WRcbhTh6sQ",
    gradient: "from-[var(--purple-glow)] to-[var(--pink-glow)]",
    emoji: "📞",
    image: imgHolohola,
  },
  {
    name: "MetaHunt",
    tagline: "AR treasure hunt for 600+ players",
    description:
      "AR treasure-hunt game deployed at a live event with marker-based tracking and location-based puzzles. Engaged 600+ participants seamlessly.",
    tech: ["Unity", "AR Foundation", "ARCore", "C#"],
    features: ["Marker tracking", "Location puzzles", "Live deployment", "Production-grade"],
    demo: "https://drive.google.com/drive/folders/1UmdEMsi_9b6-4MV4mbXWn69cLMPCaoj1?usp=drive_link",
    gradient: "from-[var(--pink-glow)] to-[var(--cyan-glow)]",
    emoji: "🗺️",
    image: imgMetahunt,
  },
  {
    name: "Raksha (TechPulse Hackathon)",
    tagline: "Real-time event coordination app",
    description:
      "Flutter + Firebase mobile app built during the TechPulse Hackathon (Kozhikode, Feb 2024) to coordinate live events. Features real-time data sync, push notifications, and backend integration for efficient communication between users and organizers.",
    tech: ["Flutter", "Firebase", "Dart", "FCM"],
    features: ["Live data sync", "Push notifications", "Organizer dashboard", "Hackathon participant"],
    github: "https://github.com/Harinim004/Raksha_hackathon",
    gradient: "from-[var(--blue-glow)] to-[var(--cyan-glow)]",
    emoji: "⚡",
    image: imgTechPulse,
  },
  {
    name: "QR Attendance",
    tagline: "Automated event check-ins",
    description:
      "Python + OpenCV attendance system using QR scanning for the ISTE Aakriti Camp. Generates real-time reports for organizers.",
    tech: ["Python", "OpenCV", "QR"],
    features: ["Real-time scan", "Auto reports", "Event-ready"],
    gradient: "from-[var(--cyan-glow)] to-[var(--pink-glow)]",
    emoji: "📷",
    image: imgQR,
  },
  {
    name: "Same Pinch",
    tagline: "Photo sharing by similarity",
    description:
      "Frontend of a social photo platform where users share and discover images by visual similarity. Clean, interactive feed with tagging.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Image feed", "Tagging", "Interactive UI"],
    github: "https://github.com/AlwinVP/Same-Pinch",
    gradient: "from-[var(--purple-glow)] to-[var(--cyan-glow)]",
    emoji: "📸",
    image: imgPinch,
  },
  {
    name: "VR Art Gallery",
    tagline: "Immersive 3D art exhibition",
    description:
      "A fully immersive VR experience built in Unity where users can explore a 3D art gallery showcasing digital artworks. Features interactive navigation, detailed 3D environments, and full VR device support.",
    tech: ["Unity", "C#", "VR", "Blender","Assets"],
    features: ["Immersive navigation", "3D environments", "VR device support", "Interactive artworks"],
    github: "https://github.com/Harinim004/Virtual-Reality-Art-Gallery",
    gradient: "from-[var(--purple-glow)] to-[var(--blue-glow)]",
    emoji: "🖼️",
    image: imgVRArt,
  },
  {
    name: "Purrsistance",
    tagline: "Physics-driven VR game",
    description:
      "TinkerHub hackathon VR game built in Unity featuring deterministic physics and optimized gameplay for smooth immersion across devices.",
    tech: ["Unity", "C#", "Physics Engine"],
    features: ["Physics interactions", "Deterministic logic", "Optimized perf"],
    github: "https://github.com/AlwinVP/uselessproject2.0_Purr-sistence-Hunter",
    gradient: "from-[var(--blue-glow)] to-[var(--purple-glow)]",
    emoji: "🐾",
    image: imgPurr,
  },
  {
    name: "Hospital Patient Records",
    tagline: "Healthcare CRUD management",
    description:
      "A modern, responsive Hospital Patient Records Management System built with Flask, SQLite, and Bootstrap. Features CRUD for Patients, Doctors, and Appointments, along with admin logs , dark mode toggle, profile popups, and charts for appointment statistics.",
    tech: ["Flask", "SQLite", "Bootstrap", "HTML"],
    features: ["Patient CRUD", "Doctor management", "Appointments", "Admin logs"],
    github: "https://github.com/Harinim004/Hospital-Patient-Records",
    gradient: "from-[var(--cyan-glow)] to-[var(--blue-glow)]",
    emoji: "🏥",
    image: imgHospital,
  },
  {
    name: "College Attendance System",
    tagline: "Student attendance tracker",
    description:
      "A simple and user-friendly College Attendance Management System built using Flask and MySQL. Manage students, subjects, attendance records, generate reports, and identify defaulters - all through a clean and modern web interface.",
    tech: ["Flask", "MySQL", "Python", "HTML"],
    features: ["Manage students", "Attendance records", "Reports", "Defaulter detection"],
    github: "https://github.com/Harinim004/College-Attendance-System",
    gradient: "from-[var(--cyan-glow)] to-[var(--purple-glow)]",
    emoji: "🎓",
    image: imgCollege,
  },
  {
    name: "Online Quiz App",
    tagline: "Flutter + Firebase quiz",
    description:
      "A colorful Flutter Quiz App using Firebase. Features include category-based MCQs, user login, leaderboard, profile, and animated results — powered by Firestore and Firebase Auth.",
    tech: ["Flutter", "Firebase", "Firestore", "Dart"],
    features: ["Category MCQs", "Leaderboard", "User profile", "Animated results"],
    github: "https://github.com/Harinim004/Online-Quiz-App",
    gradient: "from-[var(--pink-glow)] to-[var(--purple-glow)]",
    emoji: "🧩",
    image: imgQuiz,
  },
  {
    name: "Blood Donor Finder",
    tagline: "Locate nearby blood donors",
    description:
      "The Blood Donor Finder App is a Flutter-based mobile application designed to help users quickly locate and contact nearby blood donors based on blood group and location. It features real-time donor filtering, and quick call/message functionality—all aimed at saving lives faster.",
    tech: ["Flutter", "Firebase", "Geolocation", "Dart"],
    features: ["Group filter", "Location search", "Real-time donors", "Direct contact"],
    github: "https://github.com/Harinim004/Blood-donor-finder-app",
    gradient: "from-[var(--pink-glow)] to-[var(--blue-glow)]",
    emoji: "🩸",
    image: imgBlood,
  },
  {
    name: "To-Do List App",
    tagline: "Minimal productivity tracker",
    description:
      "A clean, mobile-friendly To-Do List app for managing daily tasks. Add, edit, complete, and delete tasks with a polished interface and persistent local storage.",
    tech: ["Flutter", "Dart", "Local Storage"],
    features: ["Add / edit tasks", "Mark complete", "Persistent storage", "Clean UI"],
    github: "https://github.com/Harinim004/To-Do-List",
    gradient: "from-[var(--purple-glow)] to-[var(--cyan-glow)]",
    emoji: "✅",
    image: imgTodo,
  },
  
];

export function Projects() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<Project | null>(null);
  const len = projects.length;

  const next = () => setActive((a) => (a + 1) % len);
  const prev = () => setActive((a) => (a - 1 + len) % len);

  return (
    <section id="projects" className="relative px-4 py-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">selected work</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              <span className="text-gradient">Projects</span> in motion
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} aria-label="Previous" className="glass h-11 w-11 rounded-full transition hover:glow-cyan">
              <ChevronLeft className="mx-auto h-5 w-5" />
            </button>
            <button onClick={next} aria-label="Next" className="glass h-11 w-11 rounded-full transition hover:glow-pink">
              <ChevronRight className="mx-auto h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative h-[460px] overflow-hidden" style={{ perspective: 1400 }}>
          {projects.map((p, i) => {
            const offset = ((i - active + len) % len);
            const norm = offset > len / 2 ? offset - len : offset;
            const isCenter = norm === 0;
            return (
              <motion.button
                key={p.name}
                onClick={() => (isCenter ? setOpen(p) : setActive(i))}
                animate={{
                  x: norm * 320,
                  scale: isCenter ? 1 : 0.78,
                  rotateY: norm * -18,
                  opacity: Math.abs(norm) > 2 ? 0 : 1 - Math.abs(norm) * 0.25,
                  zIndex: 10 - Math.abs(norm),
                  filter: isCenter ? "blur(0px)" : "blur(2px)",
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="glass-strong absolute left-1/2 top-1/2 h-[420px] w-[320px] -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-3xl text-left"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`relative h-44 w-full overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-3xl drop-shadow-[0_0_12px_rgba(0,0,0,0.6)]">{p.emoji}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{p.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-foreground/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  {isCenter && (
                    <p className="mt-4 text-xs text-primary">tap to expand →</p>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-primary" : "w-2 bg-white/20"}`}
            />
          ))}
        </div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[80] flex items-center justify-center p-4 backdrop-blur-2xl"
                style={{ background: "oklch(0.05 0.02 260 / 0.7)" }}
                onClick={() => setOpen(null)}
              >
                <motion.div
                  initial={{ scale: 0.85, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  onClick={(e) => e.stopPropagation()}
                  className="glass-strong relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8"
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(null);
                    }}
                    aria-label="Close"
                    className="absolute right-4 top-4 z-10 glass h-9 w-9 rounded-full"
                  >
                    <X className="pointer-events-none mx-auto h-4 w-4" />
                  </button>
                  <div className={`relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br ${open.gradient}`}>
                    <img
                      src={open.image}
                      alt={open.name}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 text-5xl drop-shadow-[0_0_14px_rgba(0,0,0,0.6)]">{open.emoji}</div>
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold">{open.name}</h3>
                  <p className="mt-1 text-primary">{open.tagline}</p>
                  <p className="mt-5 leading-relaxed text-foreground/80">{open.description}</p>

                  <h4 className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">Features</h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {open.features.map((f) => (
                      <li key={f} className="glass rounded-xl px-3 py-2 text-sm">✦ {f}</li>
                    ))}
                  </ul>

                  <h4 className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">Tech Stack</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {open.tech.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">{t}</span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {open.github && (
                      <a href={open.github} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm hover:glow-cyan">
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    )}
                    <a
                      href={open.demo ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-background"
                      style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow-pink)" }}
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
}
