import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const items = [
  { year: "2025 — 26", title: "Chairperson, ISTE Student Chapter", place: "GEC Kozhikode", desc: "Leading the student chapter — driving events, mentorship and creative tech culture." },
  { year: "Jun — Jul 2025", title: "AR/VR Intern, IEEE Malabar", place: "Remote", desc: "Built interactive AR/VR experiences in Unity + AR Foundation with real-time 3D interactions." },
  { year: "Jun — Jul 2025", title: "Developer Intern, Tamilan Skills (RISE)", place: "Remote", desc: "Recognized as Top Performer in India for AR/VR. Built multi-domain mobile, web & backend systems." },
  { year: "2024 — 25", title: "Program Coordinator, IEEE Computer Society", place: "GEC Kozhikode", desc: "Coordinated technical programs, hackathons and student events for the chapter." },
  { year: "Dec 2024", title: "Associate Program Coordinator, IEEE AKCSSC 10", place: "Kerala", desc: "Helped orchestrate a major IEEE state-level student congress." },
  { year: "Apr 2024", title: "Freelance AR Game Developer — MetaHunt", place: "Kerala", desc: "Shipped a paid AR treasure hunt game engaging 600+ live participants." },
  { year: "Feb 2024", title: "Flutter Developer, Tech Pulse Hackathon", place: "Kozhikode", desc: "Built a real-time event coordination app with Flutter, Firebase and push notifications." },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section id="experience" className="relative px-4 py-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">journey</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Layered <span className="text-gradient">experiences</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            Each role added a new dimension — scroll to peel them back.
          </p>
        </div>

        <div ref={ref} className="relative" style={{ perspective: 1500 }}>
          <div className="space-y-8">
            {items.map((it, i) => (
              <StackCard key={it.title} item={it} index={i} progress={scrollYProgress} total={items.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StackCard({
  item,
  index,
  progress,
  total,
}: {
  item: (typeof items)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const y = useTransform(progress, [start, end], [50, -20]);
  const opacity = useTransform(progress, [start - 0.1, start + 0.05, end], [0.4, 1, 0.9]);
  const rotateX = useTransform(progress, [start, end], [12, -4]);

  return (
    <motion.div
      style={{ y, opacity, rotateX, transformStyle: "preserve-3d" }}
      className="glass-strong sticky top-28 mx-auto max-w-3xl rounded-3xl p-6 md:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{item.year}</p>
          <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">{item.title}</h3>
          <p className="mt-1 text-sm text-foreground/60">{item.place}</p>
        </div>
        <span className="glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest">
          Layer {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-4 leading-relaxed text-foreground/80">{item.desc}</p>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </motion.div>
  );
}
