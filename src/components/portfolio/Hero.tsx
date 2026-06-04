import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Download, Sparkles, ArrowDown } from "lucide-react";
import portrait from "@/assets/medark.jpeg";

const roles = [
  "Developer",
  "Innovator",
  "Problem Solver",
  "Leader",
];

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), pause);
      } else {
        const next = word.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next === "") {
          setDel(false);
          setI((p) => p + 1);
        }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

export function Hero() {
  const typed = useTypewriter(roles);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setParallax({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pt-32 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-foreground/80">
            <Sparkles className="h-3 w-3 text-primary" />
            Available for collaborations · 2026
          </div>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Hi, I'm <span className="text-gradient">Harini M</span>
          </h1>
          <p className="mt-5 text-lg text-foreground/75 md:text-xl">
            <span className="text-foreground">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] -mb-1 animate-pulse bg-primary align-middle" />
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {/*I craft immersive experiences at the intersection of code, design and reality —
            building AR/VR worlds, beautiful Flutter apps and leading student tech communities.*/} 
            Passionate Software Developer specializing in Flutter, AR/VR, and modern web technologies. I build innovative, user-focused applications that combine creativity, performance, and real-world impact while continuously exploring new technologies and solving challenging problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/HariniM_Resume.pdf"
              download
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow-cyan)" }}
            >
              <Download className="h-4 w-4" />
              Download Resume
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a href="#projects" className="glass rounded-full px-6 py-3 text-sm text-foreground/90 hover:text-foreground">
              Explore Work →
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div><div className="text-2xl font-bold text-gradient">15+</div>Projects shipped</div>
            <div><div className="text-2xl font-bold text-gradient">600+</div>AR users engaged</div>
            <div><div className="text-2xl font-bold text-gradient">7</div>Leadership roles</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto flex h-[420px] w-[420px] max-w-full items-center justify-center md:h-[520px] md:w-[520px]"
          style={{ perspective: 1200 }}
        >
          {/* curved arrow + tagline */}
          <div className="absolute -left-4 top-6 hidden text-left md:block">
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="text-primary/70">
              <path d="M5 70 C 30 10, 80 5, 115 35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <path d="M110 28 L 115 35 L 108 40" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <p className="-mt-2 max-w-[140px] text-xs text-muted-foreground">that's me — turning curiosity into creation.</p>
          </div>

          <div
            className="relative h-full w-full"
            style={{
              transform: `rotateX(${-parallax.y * 0.3}deg) rotateY(${parallax.x * 0.3}deg)`,
              transition: "transform 200ms ease-out",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/30" />
            <div className="absolute inset-8 animate-spin-slow rounded-full border border-dashed border-accent/30" style={{ animationDirection: "reverse" }} />
            <div
              className="absolute inset-12 animate-pulse-glow rounded-full"
              style={{ background: "var(--gradient-aurora)", filter: "blur(40px)", opacity: 0.6 }}
            />
            <div className="glass-strong animate-float absolute inset-16 overflow-hidden rounded-full">
              <img
                src={portrait}
                alt="Portrait of Harini M"
                width={520}
                height={520}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/20" />
            </div>

            {/* floating chips */}
            <div className="glass absolute -left-4 top-1/3 rounded-2xl px-3 py-2 text-xs animate-float" style={{ animationDelay: "1s" }}>
              <span className="text-primary"></span> Unity · AR VR . Game dev
            </div>
            <div className="glass absolute -right-2 bottom-1/4 rounded-2xl px-3 py-2 text-xs animate-float" style={{ animationDelay: "2s" }}>
              <span className="text-accent"></span> ✨Visionary . Creator . Technologist
            </div>
            <div className="glass absolute right-6 top-6 rounded-2xl px-3 py-2 text-xs animate-float" style={{ animationDelay: "0.4s" }}>
                Software Developer . Python Enthusiast
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-foreground">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
