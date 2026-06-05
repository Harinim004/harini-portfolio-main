import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useState } from "react";
import developerImg from "@/assets/me2.jpeg";
import designerImg from "@/assets/me5.jpeg";
import leaderImg from "@/assets/me6.jpeg";
import empowerImg from "@/assets/me4.jpeg";

const cardStates = [
  { label: "Leader", role: "Tech Communities", color: "from-[var(--pink-glow)] to-[var(--cyan-glow)]", image: leaderImg },
  { label: "Developer", role: "Software . Python", color: "from-[var(--cyan-glow)] to-[var(--blue-glow)]", image: developerImg },
  { label: "Designer", role: "AR / VR . Unity", color: "from-[var(--purple-glow)] to-[var(--pink-glow)]", image: designerImg },
  { label: "Empowerer", role: "Making a Difference", color: "from-[var(--pink-glow)] to-[var(--cyan-glow)]", image: empowerImg },
];

export function About() {
  const y = useMotionValue(0);
  const rotate = useTransform(y, [0, 200], [0, 8]);
  const [state, setState] = useState(0);

  useEffect(() => {
    const unsub = y.on("change", (v) => {
      if (v > 140) {
        setState((s) => (s + 1) % cardStates.length);
        animate(y, 0, { type: "spring", stiffness: 180, damping: 16 });
      }
    });
    return () => unsub();
  }, [y]);

  const current = cardStates[state];

  return (
    <section id="about" className="relative px-4 py-32 md:px-8">
      <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-2">
        {/* Hanging ID Card */}
        <div className="relative mx-auto flex h-[560px] w-full max-w-md flex-col items-center">
          {/* lanyard */}
          <div className="relative h-10 w-2 bg-gradient-to-b from-foreground/40 to-foreground/10" />
          <div className="absolute top-9 h-3 w-6 rounded-b-full bg-foreground/30" />

          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 220 }}
            dragElastic={0.4}
            style={{ y, rotate, transformOrigin: "top center" }}
            whileTap={{ cursor: "grabbing" }}
            className="glass-strong group relative mt-2 w-72 cursor-grab overflow-hidden rounded-3xl p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-background ring-2 ring-foreground/30" />
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${current.color}`} />

            <motion.div
              key={state}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-2xl">
                <img src={current.image} alt={current.label} className="h-full w-full object-cover" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-tr ${current.color} opacity-30 mix-blend-overlay`} />
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{current.label}</p>
                <p className="font-display text-xl font-bold text-foreground">Harini M</p>
                <p className="mt-1 text-xs text-foreground/70">{current.role}</p>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>ID · 2026</span>
                <span className="text-primary">● ACTIVE</span>
              </div>
            </motion.div>
          </motion.div>

          <p className="mt-6 text-xs text-muted-foreground">↓ pull the card to flip my identity</p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-primary">about me</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Creating <span className="text-gradient">technology that</span> inspires &amp; innovates.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            I'm Harini M, a Computer Science & Design graduate passionate about AR/VR, Python, Flutter, and Web Development. I enjoy building innovative digital experiences that combine creativity and technology to solve real-world problems. Beyond development, I actively lead and contribute to tech communities, fostering collaboration, innovation, and continuous learning. My goal is to create impactful technology that is both meaningful and engaging.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Creating Real-World Impact",
              "Passionate Programmer",
              "Adventure Seeker",
              "AR/VR Top Performer — RISE India",
              "Book Lover",
              "Determined Achiever",
            ].map((item) => (
              <li key={item} className="glass flex items-center gap-3 rounded-2xl px-4 py-3 text-sm">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--pink-glow)] shadow-[0_0_10px_var(--cyan-glow)]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
