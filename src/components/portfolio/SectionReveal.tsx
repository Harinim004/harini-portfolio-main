import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Wraps a section with a 3D scroll-driven reveal:
 * - cinematic perspective tilt as it enters / leaves the viewport
 * - subtle parallax lift
 * - soft fade + scale so transitions between sections feel continuous
 */
export function SectionReveal({
  children,
  intensity = 1,
  id,
}: {
  children: ReactNode;
  intensity?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10 * intensity, 0, -6 * intensity]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80 * intensity, 0, -40 * intensity]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.4]);

  return (
    <div id={id} ref={ref} style={{ perspective: 1600 }} className="relative">
      <SectionGlow progress={scrollYProgress} />
      <motion.div
        style={{ rotateX, y, scale, opacity, transformStyle: "preserve-3d", transformOrigin: "center top" }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

function SectionGlow({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.5, 1], [0, 0.55, 0]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.7, 1.1, 0.7]);
  return (
    <motion.div
      aria-hidden
      style={{ opacity, scale }}
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
    >
      <div className="h-full w-full" style={{ background: "var(--gradient-hero)" }} />
    </motion.div>
  );
}

/** Thin animated divider that bridges two sections. */
export function SectionTransition() {
  return (
    <div className="relative mx-auto h-24 w-full max-w-6xl px-4 md:px-8" aria-hidden>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 origin-center"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--cyan-glow), var(--pink-glow), transparent)",
          boxShadow: "0 0 24px var(--cyan-glow)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "var(--gradient-aurora)", boxShadow: "0 0 20px var(--cyan-glow)" }}
      />
    </div>
  );
}
