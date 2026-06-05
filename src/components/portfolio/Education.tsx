import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

type Edu = {
  institution: string;
  course: string;
  grade: string;
  period: string;
};

const education: Edu[] = [
  {
    institution: "Government Engineering College, Kozhikode",
    course: "B.Tech — Computer Science & Design",
    grade: "CGPA: 8.54",
    period: "2022 — 2026",
  },
  {
    institution: "Ahalia Public School, Palakkad",
    course: "Higher Secondary — Computer Science",
    grade: "Percentage: 92%",
    period: "2020 — 2022",
  },
  {
    institution: "Guardian International School, Palakkad",
    course: "SSLC — Secondary Schooling",
    grade: "Percentage: 83%",
    period: "2013 — 2020",
  },
];

const icons = [GraduationCap, BookOpen, Award];

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Track scroll so plant is FULLY grown when the bottom of the cards column hits viewport bottom
  const { scrollYProgress } = useScroll({
    target: mounted ? cardsRef : undefined,
    offset: ["start end", "end end"],
  });

  // Smooth spring for the plant growth
  const growth = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.6 });

  return (
    <section id="education" className="relative px-4 py-32 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">roots & growth</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Education <span className="text-gradient">grown layer by layer</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            A living timeline — scroll and watch knowledge sprout, branch and bloom.
          </p>
        </div>

        <div ref={ref} className="relative grid gap-10 md:grid-cols-[220px_1fr]">
          {/* Growing plant column — 3D pedestal */}
          <div className="sticky top-28 hidden h-[460px] md:block">
            <PlantStem progress={growth} />
          </div>

          {/* Education cards */}
          <div ref={cardsRef} className="space-y-10" style={{ perspective: 1400 }}>
            {education.map((e, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={e.institution}
                  initial={{ opacity: 0, y: 60, rotateX: 18, rotateY: -8 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    x: [0, -10, 8, -6, 4, -2, 0],
                  }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.08,
                    x: { duration: 0.7, ease: "easeOut", delay: i * 0.08 + 0.3 },
                  }}
                  whileHover={{
                    rotateX: -4,
                    rotateY: 6,
                    translateZ: 30,
                    transition: { type: "spring", stiffness: 220, damping: 18 },
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="glass-strong relative rounded-3xl p-6 md:p-8"
                >
                  {/* floating leaf badge */}
                  <motion.div
                    aria-hidden
                    animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-5 -left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--pink-glow)] text-background shadow-[0_10px_30px_-5px_var(--cyan-glow)]"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-primary">{e.period}</p>
                      <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">{e.institution}</h3>
                      <p className="mt-1 text-foreground/70">{e.course}</p>
                    </div>
                    <span
                      className="glass rounded-full px-4 py-2 text-sm font-semibold text-gradient"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {e.grade}
                    </span>
                  </div>

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  {/* tiny sprout under each card on mobile */}
                  <div className="mt-4 md:hidden">
                    <Leaf size={28} delay={i * 0.2} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlantStem({ progress }: { progress: ReturnType<typeof useSpring> }) {
  // Make plant fully grown earlier — bloom complete by ~85% of scroll, so it's
  // fully visible when the last card is in view.
  const stemLength = useTransform(progress, [0, 0.7], [0, 380]);
  const leaf1 = useTransform(progress, [0.05, 0.25], [0, 1]);
  const leaf2 = useTransform(progress, [0.25, 0.45], [0, 1]);
  const leaf3 = useTransform(progress, [0.45, 0.65], [0, 1]);
  const bloom = useTransform(progress, [0.6, 0.85], [0, 1]);
  const bloomRot = useTransform(progress, [0, 1], [0, 360]);

  // gentle continuous floating tilt for a 3D feel
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tiltY.set(x * 25);
    tiltX.set(-y * 18);
  };
  const handleLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const springX = useSpring(tiltX, { stiffness: 120, damping: 14 });
  const springY = useSpring(tiltY, { stiffness: 120, damping: 14 });

  return (
    <div
      className="relative h-full w-full"
      style={{ perspective: 1200 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* soft ground halo */}
      <div
        aria-hidden
        className="absolute bottom-2 left-1/2 h-10 w-44 -translate-x-1/2 rounded-full blur-2xl opacity-70"
        style={{ background: "radial-gradient(ellipse, var(--cyan-glow), transparent 70%)" }}
      />

      <motion.div
        className="relative h-full w-full"
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* glass pedestal pot — sits behind the SVG */}
        <div
          aria-hidden
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{ transform: "translate(-50%, 0) translateZ(-40px)" }}
        >
          <div className="glass-strong h-16 w-36 rounded-b-[40%] rounded-t-2xl border border-white/15 shadow-[0_30px_60px_-20px_var(--pink-glow)]" />
        </div>

        {/* depth shadow plane behind plant */}
        <motion.div
          aria-hidden
          className="absolute inset-0 opacity-40 blur-lg"
          style={{
            transform: "translateZ(-60px) scale(0.95)",
            background:
              "radial-gradient(ellipse at 50% 70%, oklch(0.5 0.18 290 / 0.5), transparent 60%)",
          }}
        />

        <svg
          viewBox="0 0 160 420"
          className="relative h-full w-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] drop-shadow-[0_0_25px_var(--cyan-glow)]"
          style={{ transform: "translateZ(20px)" }}
        >
          <defs>
            <linearGradient id="stem" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.82 0.18 200)" />
              <stop offset="50%" stopColor="oklch(0.72 0.2 160)" />
              <stop offset="100%" stopColor="oklch(0.55 0.18 140)" />
            </linearGradient>
            <linearGradient id="stemShine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(1 0 0 / 0.5)" />
              <stop offset="100%" stopColor="oklch(1 0 0 / 0)" />
            </linearGradient>
            <radialGradient id="bloom" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.95 0.18 340)" />
              <stop offset="60%" stopColor="oklch(0.72 0.22 340)" />
              <stop offset="100%" stopColor="oklch(0.5 0.2 290)" />
            </radialGradient>
            <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.85 0.18 180)" />
              <stop offset="100%" stopColor="oklch(0.5 0.18 150)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* soil */}
          <ellipse cx="80" cy="410" rx="60" ry="8" fill="oklch(0.25 0.04 60)" opacity="0.6" />
          <ellipse cx="80" cy="408" rx="48" ry="5" fill="oklch(0.35 0.06 60)" />

          {/* stem - animated draw */}
          <motion.path
            d="M80 410 C 60 340, 100 280, 70 220 S 90 120, 80 40"
            fill="none"
            stroke="url(#stem)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#glow)"
            style={{
              strokeDasharray: 420,
              strokeDashoffset: useTransform(stemLength, (v) => 420 - v),
            }}
          />
          {/* stem highlight for 3D shine */}
          <motion.path
            d="M80 410 C 60 340, 100 280, 70 220 S 90 120, 80 40"
            fill="none"
            stroke="url(#stemShine)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: 420,
              strokeDashoffset: useTransform(stemLength, (v) => 420 - v),
            }}
          />

          {/* leaves */}
          <motion.g style={{ scale: leaf1, transformOrigin: "75px 330px" }} filter="url(#glow)">
            <LeafShape x={75} y={330} rotate={-40} />
          </motion.g>
          <motion.g style={{ scale: leaf2, transformOrigin: "85px 240px" }} filter="url(#glow)">
            <LeafShape x={85} y={240} rotate={45} flip />
          </motion.g>
          <motion.g style={{ scale: leaf3, transformOrigin: "75px 150px" }} filter="url(#glow)">
            <LeafShape x={75} y={150} rotate={-35} />
          </motion.g>

          {/* bloom at the top */}
          <motion.g style={{ scale: bloom, rotate: bloomRot, transformOrigin: "80px 40px" }} filter="url(#glow)">
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <ellipse
                key={a}
                cx="80"
                cy="40"
                rx="10"
                ry="22"
                fill="url(#bloom)"
                transform={`rotate(${a} 80 40) translate(0 -16)`}
                opacity="0.95"
              />
            ))}
            <circle cx="80" cy="40" r="9" fill="oklch(0.95 0.18 90)" />
          </motion.g>
        </svg>

        {/* floating particles for depth */}
        {[
          { x: "20%", y: "30%", z: 60, d: 0 },
          { x: "75%", y: "55%", z: 90, d: 1.5 },
          { x: "35%", y: "75%", z: 30, d: 0.8 },
          { x: "65%", y: "20%", z: 120, d: 2.2 },
        ].map((p, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute h-1.5 w-1.5 rounded-full bg-[var(--cyan-glow)]"
            style={{
              left: p.x,
              top: p.y,
              transform: `translateZ(${p.z}px)`,
              boxShadow: "0 0 10px var(--cyan-glow)",
            }}
            animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: p.d, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function LeafShape({ x, y, rotate = 0, flip = false }: { x: number; y: number; rotate?: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) ${flip ? "scale(-1 1)" : ""}`}>
      <path
        d="M0 0 C 20 -10, 50 -5, 60 -25 C 55 5, 25 15, 0 0 Z"
        fill="url(#leaf)"
        stroke="oklch(0.4 0.15 150)"
        strokeWidth="0.6"
      />
      <path d="M0 0 C 25 -8, 45 -12, 58 -22" stroke="oklch(0.4 0.15 150)" strokeWidth="0.6" fill="none" />
    </g>
  );
}

function Leaf({ size = 24, delay = 0 }: { size?: number; delay?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      initial={{ scale: 0, rotate: -45 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: false }}
      transition={{ type: "spring", stiffness: 200, damping: 14, delay }}
    >
      <path
        d="M30 55 C 10 40, 10 15, 30 5 C 50 15, 50 40, 30 55 Z"
        fill="url(#leaf)"
        stroke="oklch(0.5 0.18 150)"
        strokeWidth="1"
      />
    </motion.svg>
  );
}
