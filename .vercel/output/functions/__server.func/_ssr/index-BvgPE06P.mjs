import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { e as emailjs } from "../_libs/emailjs__browser.mjs";
import { A as AnimatePresence, m as motion, u as useScroll, a as useSpring, b as useTransform, c as useMotionValue, d as animate } from "../_libs/framer-motion.mjs";
import { P as Phone, M as Mail, X, a as Menu, S as Sparkles, D as Download, A as ArrowDown, G as GraduationCap, B as BookOpen, b as Award, C as ChevronLeft, c as ChevronRight, d as Github, E as ExternalLink, e as Send, L as Linkedin, I as Instagram } from "../_libs/lucide-react.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "group flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--pink-glow)] text-sm font-bold text-background shadow-[0_0_20px_var(--cyan-glow)]", children: [
          "H",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full ring-1 ring-white/30 animate-pulse-glow" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-sm font-semibold tracking-widest text-foreground/90", children: [
          "HARINI ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "M" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-7 lg:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: l.href, className: "group relative text-sm text-foreground/75 transition-colors hover:text-foreground", children: [
        l.label,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--pink-glow)] transition-all duration-300 group-hover:w-full" })
      ] }) }, l.href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+918590897809", "aria-label": "Call Harini", className: "glass hidden h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition hover:text-primary hover:glow-cyan md:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:harinim8637@gmail.com", "aria-label": "Email Harini", className: "glass hidden h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition hover:text-accent hover:glow-pink md:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen((v) => !v), "aria-label": "Toggle menu", className: "glass inline-flex h-9 w-9 items-center justify-center rounded-full lg:hidden", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        className: "glass-strong mx-auto mt-2 max-w-6xl rounded-3xl p-4 lg:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, onClick: () => setOpen(false), className: "block rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-white/5 hover:text-foreground", children: l.label }) }, l.href)) })
      }
    ) })
  ] });
}
const portrait = "/assets/medark-kn8IFzwu.jpeg";
const roles = [
  "Developer",
  "Innovator",
  "Problem Solver",
  "Leader"
];
function useTypewriter(words, speed = 80, pause = 1400) {
  const [i, setI] = reactExports.useState(0);
  const [text, setText] = reactExports.useState("");
  const [del, setDel] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
function Hero() {
  const typed = useTypewriter(roles);
  const [parallax, setParallax] = reactExports.useState({ x: 0, y: 0 });
  reactExports.useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setParallax({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative flex min-h-screen items-center overflow-hidden px-4 pt-32 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-primary" }),
              "Available for collaborations · 2026"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl", children: [
              "Hi, I'm ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Harini M" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-lg text-foreground/75 md:text-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: typed }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-0.5 inline-block h-5 w-[2px] -mb-1 animate-pulse bg-primary align-middle" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base", children: "Passionate Software Developer specializing in Flutter, AR/VR, and modern web technologies. I build innovative, user-focused applications that combine creativity, performance, and real-world impact while continuously exploring new technologies and solving challenging problems." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/HariniM_Resume.pdf",
                  download: true,
                  className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]",
                  style: { background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow-cyan)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                    "Download Resume",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#projects", className: "glass rounded-full px-6 py-3 text-sm text-foreground/90 hover:text-foreground", children: "Explore Work →" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center gap-6 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gradient", children: "10+" }),
                "Projects"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gradient", children: "600+" }),
                "AR users engaged"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-gradient", children: "3" }),
                "Leadership roles"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.9, delay: 0.2 },
          className: "relative mx-auto flex h-[420px] w-[420px] max-w-full items-center justify-center md:h-[520px] md:w-[520px]",
          style: { perspective: 1200 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -left-4 top-6 hidden text-left md:block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "120", height: "80", viewBox: "0 0 120 80", fill: "none", className: "text-primary/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 70 C 30 10, 80 5, 115 35", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "4 4", fill: "none" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M110 28 L 115 35 L 108 40", stroke: "currentColor", strokeWidth: "1.5", fill: "none" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "-mt-2 max-w-[140px] text-xs text-muted-foreground", children: "that's me — turning curiosity into creation." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative h-full w-full",
                style: {
                  transform: `rotateX(${-parallax.y * 0.3}deg) rotateY(${parallax.x * 0.3}deg)`,
                  transition: "transform 200ms ease-out",
                  transformStyle: "preserve-3d"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-8 animate-spin-slow rounded-full border border-dashed border-accent/30", style: { animationDirection: "reverse" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-12 animate-pulse-glow rounded-full",
                      style: { background: "var(--gradient-aurora)", filter: "blur(40px)", opacity: 0.6 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong animate-float absolute inset-16 overflow-hidden rounded-full", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: portrait,
                        alt: "Portrait of Harini M",
                        width: 520,
                        height: 520,
                        className: "h-full w-full object-cover"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/20" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass absolute -left-4 top-1/3 rounded-2xl px-3 py-2 text-xs animate-float", style: { animationDelay: "1s" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary" }),
                    " Unity · AR VR . Game dev"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass absolute -right-2 bottom-1/4 rounded-2xl px-3 py-2 text-xs animate-float", style: { animationDelay: "2s" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent" }),
                    " ✨Visionary . Creator . Technologist"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass absolute right-6 top-6 rounded-2xl px-3 py-2 text-xs animate-float", style: { animationDelay: "0.4s" }, children: "Software Developer . Python Enthusiast" })
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-5 w-5 animate-bounce" }) })
  ] });
}
const developerImg = "/assets/me2-gDXvUT3M.jpeg";
const designerImg = "/assets/me5-CPEYUjPx.jpeg";
const leaderImg = "/assets/me6-Ogs6MLjT.jpeg";
const empowerImg = "/assets/me4-DqOIN120.jpeg";
const cardStates = [
  { label: "Leader", role: "Tech Communities", color: "from-[var(--pink-glow)] to-[var(--cyan-glow)]", image: leaderImg },
  { label: "Developer", role: "Software . Python", color: "from-[var(--cyan-glow)] to-[var(--blue-glow)]", image: developerImg },
  { label: "Designer", role: "AR / VR . Unity", color: "from-[var(--purple-glow)] to-[var(--pink-glow)]", image: designerImg },
  { label: "Empowerer", role: "Making a Difference", color: "from-[var(--pink-glow)] to-[var(--cyan-glow)]", image: empowerImg }
];
function About() {
  const y = useMotionValue(0);
  const rotate = useTransform(y, [0, 200], [0, 8]);
  const [state, setState] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const unsub = y.on("change", (v) => {
      if (v > 140) {
        setState((s) => (s + 1) % cardStates.length);
        animate(y, 0, { type: "spring", stiffness: 180, damping: 16 });
      }
    });
    return () => unsub();
  }, [y]);
  const current = cardStates[state];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative px-4 py-32 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex h-[560px] w-full max-w-md flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-10 w-2 bg-gradient-to-b from-foreground/40 to-foreground/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-9 h-3 w-6 rounded-b-full bg-foreground/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          drag: "y",
          dragConstraints: { top: 0, bottom: 220 },
          dragElastic: 0.4,
          style: { y, rotate, transformOrigin: "top center" },
          whileTap: { cursor: "grabbing" },
          className: "glass-strong group relative mt-2 w-72 cursor-grab overflow-hidden rounded-3xl p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-background ring-2 ring-foreground/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${current.color}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, rotateY: -90 },
                animate: { opacity: 1, rotateY: 0 },
                transition: { duration: 0.5 },
                className: "space-y-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto h-40 w-40 overflow-hidden rounded-2xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: current.image, alt: current.label, className: "h-full w-full object-cover", loading: "lazy" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-tr ${current.color} opacity-30 mix-blend-overlay` })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: current.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-bold text-foreground", children: "Harini M" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-foreground/70", children: current.role })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-white/10 pt-3 text-[10px] uppercase tracking-widest text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ID · 2026" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "● ACTIVE" })
                  ] })
                ]
              },
              state
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-muted-foreground", children: "↓ pull the card to flip my identity" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.7 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: "about me" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: [
            "Creating ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "technology that" }),
            " inspires & innovates."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base leading-relaxed text-foreground/80", children: "I'm Harini M, a Computer Science & Design graduate passionate about AR/VR, Python, Flutter, and Web Development. I enjoy building innovative digital experiences that combine creativity and technology to solve real-world problems. Beyond development, I actively lead and contribute to tech communities, fostering collaboration, innovation, and continuous learning. My goal is to create impactful technology that is both meaningful and engaging." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 grid gap-3 sm:grid-cols-2", children: [
            "Creating Real-World Impact",
            "Passionate Programmer",
            "Adventure Seeker",
            "AR/VR Top Performer — RISE India",
            "Book Lover",
            "Determined Achiever"
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "glass flex items-center gap-3 rounded-2xl px-4 py-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--pink-glow)] shadow-[0_0_10px_var(--cyan-glow)]" }),
            item
          ] }, item)) })
        ]
      }
    )
  ] }) });
}
const education = [
  {
    institution: "Government Engineering College, Kozhikode",
    course: "B.Tech — Computer Science & Design",
    grade: "CGPA: 8.54",
    period: "2022 — 2026"
  },
  {
    institution: "Ahalia Public School, Palakkad",
    course: "Higher Secondary — Computer Science",
    grade: "Percentage: 92%",
    period: "2020 — 2022"
  },
  {
    institution: "Guardian International School, Palakkad",
    course: "SSLC — Secondary Schooling",
    grade: "Percentage: 83%",
    period: "2013 — 2020"
  }
];
const icons = [GraduationCap, BookOpen, Award];
function Education() {
  const ref = reactExports.useRef(null);
  const cardsRef = reactExports.useRef(null);
  const [mounted, setMounted] = reactExports.useState(false);
  reactExports.useEffect(() => setMounted(true), []);
  const { scrollYProgress } = useScroll({
    target: mounted ? cardsRef : void 0,
    offset: ["start end", "end end"]
  });
  const growth = useSpring(scrollYProgress, { stiffness: 80, damping: 22, mass: 0.6 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "education", className: "relative px-4 py-32 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: "roots & growth" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: [
        "Education ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "grown layer by layer" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-foreground/70", children: "A living timeline — scroll and watch knowledge sprout, branch and bloom." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative grid gap-10 md:grid-cols-[220px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-28 hidden h-[460px] md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlantStem, { progress: growth }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: cardsRef, className: "space-y-10", style: { perspective: 1400 }, children: education.map((e, i) => {
        const Icon = icons[i % icons.length];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 60, rotateX: 18, rotateY: -8 },
            whileInView: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              rotateY: 0,
              x: [0, -10, 8, -6, 4, -2, 0]
            },
            viewport: { once: false, amount: 0.4 },
            transition: {
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.08,
              x: { duration: 0.7, ease: "easeOut", delay: i * 0.08 + 0.3 }
            },
            whileHover: {
              rotateX: -4,
              rotateY: 6,
              translateZ: 30,
              transition: { type: "spring", stiffness: 220, damping: 18 }
            },
            style: { transformStyle: "preserve-3d" },
            className: "glass-strong relative rounded-3xl p-6 md:p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  "aria-hidden": true,
                  animate: { y: [0, -8, 0], rotate: [0, 6, 0] },
                  transition: { duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
                  className: "absolute -top-5 -left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--pink-glow)] text-background shadow-[0_10px_30px_-5px_var(--cyan-glow)]",
                  style: { transform: "translateZ(50px)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary", children: e.period }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl font-bold md:text-2xl", children: e.institution }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-foreground/70", children: e.course })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "glass rounded-full px-4 py-2 text-sm font-semibold text-gradient",
                    style: { transform: "translateZ(20px)" },
                    children: e.grade
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { size: 28, delay: i * 0.2 }) })
            ]
          },
          e.institution
        );
      }) })
    ] })
  ] }) });
}
function PlantStem({ progress }) {
  const stemLength = useTransform(progress, [0, 0.7], [0, 380]);
  const leaf1 = useTransform(progress, [0.05, 0.25], [0, 1]);
  const leaf2 = useTransform(progress, [0.25, 0.45], [0, 1]);
  const leaf3 = useTransform(progress, [0.45, 0.65], [0, 1]);
  const bloom = useTransform(progress, [0.6, 0.85], [0, 1]);
  const bloomRot = useTransform(progress, [0, 1], [0, 360]);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const handleMove = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative h-full w-full",
      style: { perspective: 1200 },
      onMouseMove: handleMove,
      onMouseLeave: handleLeave,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute bottom-2 left-1/2 h-10 w-44 -translate-x-1/2 rounded-full blur-2xl opacity-70",
            style: { background: "radial-gradient(ellipse, var(--cyan-glow), transparent 70%)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "relative h-full w-full",
            style: {
              rotateX: springX,
              rotateY: springY,
              transformStyle: "preserve-3d",
              willChange: "transform"
            },
            animate: { y: [0, -6, 0] },
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": true,
                  className: "absolute bottom-0 left-1/2 -translate-x-1/2",
                  style: { transform: "translate(-50%, 0) translateZ(-40px)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-strong h-16 w-36 rounded-b-[40%] rounded-t-2xl border border-white/15 shadow-[0_30px_60px_-20px_var(--pink-glow)]" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  "aria-hidden": true,
                  className: "absolute inset-0 opacity-40 blur-lg",
                  style: {
                    transform: "translateZ(-60px) scale(0.95)",
                    background: "radial-gradient(ellipse at 50% 70%, oklch(0.5 0.18 290 / 0.5), transparent 60%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  viewBox: "0 0 160 420",
                  className: "relative h-full w-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] drop-shadow-[0_0_25px_var(--cyan-glow)]",
                  style: { transform: "translateZ(20px)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "stem", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.82 0.18 200)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "oklch(0.72 0.2 160)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.55 0.18 140)" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "stemShine", x1: "0", y1: "0", x2: "1", y2: "0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(1 0 0 / 0.5)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(1 0 0 / 0)" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "bloom", cx: "50%", cy: "50%", r: "50%", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.95 0.18 340)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "oklch(0.72 0.22 340)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.5 0.2 290)" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "leaf", x1: "0", y1: "0", x2: "1", y2: "1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.85 0.18 180)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.5 0.18 150)" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("filter", { id: "glow", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { stdDeviation: "3", result: "b" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("feMerge", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "b" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "SourceGraphic" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "80", cy: "410", rx: "60", ry: "8", fill: "oklch(0.25 0.04 60)", opacity: "0.6" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "80", cy: "408", rx: "48", ry: "5", fill: "oklch(0.35 0.06 60)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.path,
                      {
                        d: "M80 410 C 60 340, 100 280, 70 220 S 90 120, 80 40",
                        fill: "none",
                        stroke: "url(#stem)",
                        strokeWidth: "6",
                        strokeLinecap: "round",
                        filter: "url(#glow)",
                        style: {
                          strokeDasharray: 420,
                          strokeDashoffset: useTransform(stemLength, (v) => 420 - v)
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.path,
                      {
                        d: "M80 410 C 60 340, 100 280, 70 220 S 90 120, 80 40",
                        fill: "none",
                        stroke: "url(#stemShine)",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        style: {
                          strokeDasharray: 420,
                          strokeDashoffset: useTransform(stemLength, (v) => 420 - v)
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.g, { style: { scale: leaf1, transformOrigin: "75px 330px" }, filter: "url(#glow)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeafShape, { x: 75, y: 330, rotate: -40 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.g, { style: { scale: leaf2, transformOrigin: "85px 240px" }, filter: "url(#glow)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeafShape, { x: 85, y: 240, rotate: 45, flip: true }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.g, { style: { scale: leaf3, transformOrigin: "75px 150px" }, filter: "url(#glow)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeafShape, { x: 75, y: 150, rotate: -35 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.g, { style: { scale: bloom, rotate: bloomRot, transformOrigin: "80px 40px" }, filter: "url(#glow)", children: [
                      [0, 60, 120, 180, 240, 300].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "ellipse",
                        {
                          cx: "80",
                          cy: "40",
                          rx: "10",
                          ry: "22",
                          fill: "url(#bloom)",
                          transform: `rotate(${a} 80 40) translate(0 -16)`,
                          opacity: "0.95"
                        },
                        a
                      )),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "40", r: "9", fill: "oklch(0.95 0.18 90)" })
                    ] })
                  ]
                }
              ),
              [
                { x: "20%", y: "30%", z: 60, d: 0 },
                { x: "75%", y: "55%", z: 90, d: 1.5 },
                { x: "35%", y: "75%", z: 30, d: 0.8 },
                { x: "65%", y: "20%", z: 120, d: 2.2 }
              ].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  "aria-hidden": true,
                  className: "absolute h-1.5 w-1.5 rounded-full bg-[var(--cyan-glow)]",
                  style: {
                    left: p.x,
                    top: p.y,
                    transform: `translateZ(${p.z}px)`,
                    boxShadow: "0 0 10px var(--cyan-glow)"
                  },
                  animate: { y: [0, -14, 0], opacity: [0.4, 1, 0.4] },
                  transition: { duration: 4 + i, repeat: Infinity, delay: p.d, ease: "easeInOut" }
                },
                i
              ))
            ]
          }
        )
      ]
    }
  );
}
function LeafShape({ x, y, rotate = 0, flip = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: `translate(${x} ${y}) rotate(${rotate}) ${flip ? "scale(-1 1)" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M0 0 C 20 -10, 50 -5, 60 -25 C 55 5, 25 15, 0 0 Z",
        fill: "url(#leaf)",
        stroke: "oklch(0.4 0.15 150)",
        strokeWidth: "0.6"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 0 C 25 -8, 45 -12, 58 -22", stroke: "oklch(0.4 0.15 150)", strokeWidth: "0.6", fill: "none" })
  ] });
}
function Leaf({ size = 24, delay = 0 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.svg,
    {
      width: size,
      height: size,
      viewBox: "0 0 60 60",
      initial: { scale: 0, rotate: -45 },
      whileInView: { scale: 1, rotate: 0 },
      viewport: { once: false },
      transition: { type: "spring", stiffness: 200, damping: 14, delay },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M30 55 C 10 40, 10 15, 30 5 C 50 15, 50 40, 30 55 Z",
          fill: "url(#leaf)",
          stroke: "oklch(0.5 0.18 150)",
          strokeWidth: "1"
        }
      )
    }
  );
}
const categories = [
  {
    id: "development",
    title: "Development",
    emoji: "🚀",
    color: "var(--cyan-glow)",
    skills: [
      { name: "Flutter", icon: "📱" },
      { name: "Python", icon: "🐍" },
      { name: "Flask", icon: "🧪" },
      { name: "Firebase", icon: "🔥" }
    ]
  },
  {
    id: "arvr",
    title: "AR / VR",
    emoji: "🎮",
    color: "var(--purple-glow)",
    skills: [
      { name: "Unity", icon: "🎯" },
      { name: "AR Foundation", icon: "🧱" },
      { name: "Vuforia", icon: "👁️" },
      { name: "ARCore", icon: "🤖" },
      { name: "Meta Spark", icon: "✨" }
    ]
  },
  {
    id: "web",
    title: "Web",
    emoji: "🌐",
    color: "var(--pink-glow)",
    skills: [
      { name: "HTML", icon: "📄" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "🟨" },
      { name: "PHP", icon: "🐘" }
    ]
  },
  {
    id: "tools",
    title: "Tools",
    emoji: "🛠️",
    color: "var(--blue-glow)",
    skills: [
      { name: "Git", icon: "⎇" },
      { name: "VS Code", icon: "🧩" },
      { name: "Android Studio", icon: "🤖" }
    ]
  },
  {
    id: "soft",
    title: "Soft Skills",
    emoji: "💡",
    color: "var(--pink-glow)",
    skills: [
      { name: "Leadership", icon: "👑" },
      { name: "Communication", icon: "💬" },
      { name: "Teamwork", icon: "🤝" },
      { name: "Problem Solving", icon: "🧩" },
      { name: "Creativity", icon: "🎨" },
      { name: "Adaptability", icon: "🌱" },
      { name: "Time Management", icon: "⏱️" }
    ]
  }
];
function CategoryGroup({ cat }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-3 pr-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5",
        style: {
          background: `linear-gradient(135deg, ${cat.color}22, transparent)`,
          border: `1px solid ${cat.color}`,
          boxShadow: `0 0 20px -6px ${cat.color}`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", style: { filter: `drop-shadow(0 0 10px ${cat.color})` }, children: cat.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.2em]",
              style: { color: cat.color },
              children: cat.title
            }
          )
        ]
      }
    ),
    cat.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "glass flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 transition-transform hover:scale-105",
        style: { boxShadow: `0 0 18px -10px ${cat.color}` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", style: { filter: `drop-shadow(0 0 8px ${cat.color})` }, children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap text-sm font-medium text-foreground/90", children: s.name })
        ]
      },
      s.name
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "mx-2 h-1.5 w-1.5 shrink-0 rounded-full",
        style: { background: cat.color, boxShadow: `0 0 12px ${cat.color}` }
      }
    )
  ] });
}
function Row({
  reverse = false,
  duration = 50,
  order
}) {
  const list = [...order, ...order];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "relative overflow-hidden py-3",
      style: {
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "flex w-max",
          animate: { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] },
          transition: { duration, ease: "linear", repeat: Infinity },
          children: list.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryGroup, { cat }, `${cat.id}-${i}`))
        }
      )
    }
  );
}
function Skills() {
  const rowA = categories;
  const rowB = [...categories].reverse();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "skills", className: "relative px-4 py-24 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-xs uppercase tracking-[0.35em] text-primary",
          children: "stack"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "mt-3 font-display text-4xl font-bold md:text-5xl",
          children: [
            "A ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "holographic toolkit" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { duration: 55, order: rowA }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { reverse: true, duration: 65, order: rowB })
    ] })
  ] });
}
const imgArivu = "/assets/proj-arivu-DSqr9LQ6.jpg";
const imgHolohola = "/assets/proj-holohola-DOlqg4ut.jpg";
const imgMetahunt = "/assets/proj-metahunt-BPVVGOKJ.jpg";
const imgPurr = "/assets/proj-purrsistance-C5McKpXL.jpg";
const imgQR = "/assets/proj-qr-0urGZuy4.jpg";
const imgPinch = "/assets/proj-samepinch-CXphkpuG.jpg";
const imgTechPulse = "/assets/proj-techpulse-D3k9PhjC.jpg";
const imgVRArt = "/assets/proj-vrart-BNBrz7hC.jpg";
const imgHospital = "/assets/proj-hospital-D9rDZkx3.jpg";
const imgCollege = "/assets/proj-college-BFnA6khn.jpg";
const imgQuiz = "/assets/proj-quiz-zFM3YjO3.jpg";
const imgBlood = "/assets/proj-blood-D5nZrqBh.jpg";
const imgTodo = "/assets/proj-todo-DMHzM2qm.jpg";
const projects = [
  {
    name: "ARIVU",
    tagline: "AR-based interactive learning",
    description: "An innovative AR learning platform developed using Unity and Vuforia that enables students to explore concepts through interactive 3D content. The system includes Firebase-powered quizzes, authentication, and a Rule Based Python AI engine for seamless learning assessment.",
    tech: ["Unity", "C#", "Python", "Flask", "Firebase", "Vuforia", "Blender"],
    features: ["Interactive 3D models", "Quiz Module", "Real-time scoring", "Rule Based Python AI"],
    github: "https://github.com/AlwinVP/ARivu_Code",
    demo: "https://drive.google.com/file/d/1X37P9m5rOpfjviL42w5e9bI78a1be0Qf/view?usp=sharing",
    gradient: "from-[var(--cyan-glow)] to-[var(--blue-glow)]",
    emoji: "🧠",
    image: imgArivu
  },
  {
    name: "HoloHola",
    tagline: "Real-time AR calling app",
    description: "HoloHola is an AI and AR-powered communication platform developed using Flutter, Firebase, Agora, and Python that enhances audio and video calling through real-time emotion detection, conversation analysis, and immersive augmented reality experiences. The application leverages on-device AI processing to deliver intelligent, interactive, and privacy-focused communication.",
    tech: ["Flutter", "Firebase", "Python", "Unity", "ARCore", "AR Foundation", "Agora SDK", "Blender"],
    features: ["Audio/Video calls", "Emotion detection", "Modern and Interactive user interface", "AR overlays"],
    github: "https://github.com/Harinim004/Holohola",
    demo: "https://drive.google.com/drive/folders/1HyFNdxg9OA5C5t9dx4iSr4WRcbhTh6sQ",
    gradient: "from-[var(--purple-glow)] to-[var(--pink-glow)]",
    emoji: "📞",
    image: imgHolohola
  },
  {
    name: "MetaHunt",
    tagline: "AR treasure hunt for 600+ players",
    description: "AR treasure-hunt game deployed at a live event with marker-based tracking and location-based puzzles. Engaged 600+ participants seamlessly.",
    tech: ["Unity", "AR Foundation", "ARCore", "C#"],
    features: ["Marker tracking", "Location puzzles", "Live deployment", "Production-grade"],
    demo: "https://drive.google.com/drive/folders/1UmdEMsi_9b6-4MV4mbXWn69cLMPCaoj1?usp=drive_link",
    gradient: "from-[var(--pink-glow)] to-[var(--cyan-glow)]",
    emoji: "🗺️",
    image: imgMetahunt
  },
  {
    name: "Raksha (TechPulse Hackathon)",
    tagline: "Real-time event coordination app",
    description: "Flutter + Firebase mobile app built during the TechPulse Hackathon (Kozhikode, Feb 2024) to coordinate live events. Features real-time data sync, push notifications, and backend integration for efficient communication between users and organizers.",
    tech: ["Flutter", "Firebase", "Dart", "FCM"],
    features: ["Live data sync", "Push notifications", "Organizer dashboard", "Hackathon participant"],
    github: "https://github.com/Harinim004/Raksha_hackathon",
    gradient: "from-[var(--blue-glow)] to-[var(--cyan-glow)]",
    emoji: "⚡",
    image: imgTechPulse
  },
  {
    name: "QR Attendance",
    tagline: "Automated event check-ins",
    description: "Python + OpenCV attendance system using QR scanning for the ISTE Aakriti Camp. Generates real-time reports for organizers.",
    tech: ["Python", "OpenCV", "QR"],
    features: ["Real-time scan", "Auto reports", "Event-ready"],
    gradient: "from-[var(--cyan-glow)] to-[var(--pink-glow)]",
    emoji: "📷",
    image: imgQR
  },
  {
    name: "Same Pinch",
    tagline: "Photo sharing by similarity",
    description: "Frontend of a social photo platform where users share and discover images by visual similarity. Clean, interactive feed with tagging.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Image feed", "Tagging", "Interactive UI"],
    github: "https://github.com/AlwinVP/Same-Pinch",
    gradient: "from-[var(--purple-glow)] to-[var(--cyan-glow)]",
    emoji: "📸",
    image: imgPinch
  },
  {
    name: "VR Art Gallery",
    tagline: "Immersive 3D art exhibition",
    description: "A fully immersive VR experience built in Unity where users can explore a 3D art gallery showcasing digital artworks. Features interactive navigation, detailed 3D environments, and full VR device support.",
    tech: ["Unity", "C#", "VR", "Blender", "Assets"],
    features: ["Immersive navigation", "3D environments", "VR device support", "Interactive artworks"],
    github: "https://github.com/Harinim004/Virtual-Reality-Art-Gallery",
    gradient: "from-[var(--purple-glow)] to-[var(--blue-glow)]",
    emoji: "🖼️",
    image: imgVRArt
  },
  {
    name: "Purrsistance",
    tagline: "Physics-driven VR game",
    description: "TinkerHub hackathon VR game built in Unity featuring deterministic physics and optimized gameplay for smooth immersion across devices.",
    tech: ["Unity", "C#", "Physics Engine"],
    features: ["Physics interactions", "Deterministic logic", "Optimized perf"],
    github: "https://github.com/AlwinVP/uselessproject2.0_Purr-sistence-Hunter",
    gradient: "from-[var(--blue-glow)] to-[var(--purple-glow)]",
    emoji: "🐾",
    image: imgPurr
  },
  {
    name: "Hospital Patient Records",
    tagline: "Healthcare CRUD management",
    description: "A modern, responsive Hospital Patient Records Management System built with Flask, SQLite, and Bootstrap. Features CRUD for Patients, Doctors, and Appointments, along with admin logs , dark mode toggle, profile popups, and charts for appointment statistics.",
    tech: ["Flask", "SQLite", "Bootstrap", "HTML"],
    features: ["Patient CRUD", "Doctor management", "Appointments", "Admin logs"],
    github: "https://github.com/Harinim004/Hospital-Patient-Records",
    gradient: "from-[var(--cyan-glow)] to-[var(--blue-glow)]",
    emoji: "🏥",
    image: imgHospital
  },
  {
    name: "College Attendance System",
    tagline: "Student attendance tracker",
    description: "A simple and user-friendly College Attendance Management System built using Flask and MySQL. Manage students, subjects, attendance records, generate reports, and identify defaulters - all through a clean and modern web interface.",
    tech: ["Flask", "MySQL", "Python", "HTML"],
    features: ["Manage students", "Attendance records", "Reports", "Defaulter detection"],
    github: "https://github.com/Harinim004/College-Attendance-System",
    gradient: "from-[var(--cyan-glow)] to-[var(--purple-glow)]",
    emoji: "🎓",
    image: imgCollege
  },
  {
    name: "Online Quiz App",
    tagline: "Flutter + Firebase quiz",
    description: "A colorful Flutter Quiz App using Firebase. Features include category-based MCQs, user login, leaderboard, profile, and animated results — powered by Firestore and Firebase Auth.",
    tech: ["Flutter", "Firebase", "Firestore", "Dart"],
    features: ["Category MCQs", "Leaderboard", "User profile", "Animated results"],
    github: "https://github.com/Harinim004/Online-Quiz-App",
    gradient: "from-[var(--pink-glow)] to-[var(--purple-glow)]",
    emoji: "🧩",
    image: imgQuiz
  },
  {
    name: "Blood Donor Finder",
    tagline: "Locate nearby blood donors",
    description: "The Blood Donor Finder App is a Flutter-based mobile application designed to help users quickly locate and contact nearby blood donors based on blood group and location. It features real-time donor filtering, and quick call/message functionality—all aimed at saving lives faster.",
    tech: ["Flutter", "Firebase", "Geolocation", "Dart"],
    features: ["Group filter", "Location search", "Real-time donors", "Direct contact"],
    github: "https://github.com/Harinim004/Blood-donor-finder-app",
    gradient: "from-[var(--pink-glow)] to-[var(--blue-glow)]",
    emoji: "🩸",
    image: imgBlood
  },
  {
    name: "To-Do List App",
    tagline: "Minimal productivity tracker",
    description: "A clean, mobile-friendly To-Do List app for managing daily tasks. Add, edit, complete, and delete tasks with a polished interface and persistent local storage.",
    tech: ["Flutter", "Dart", "Local Storage"],
    features: ["Add / edit tasks", "Mark complete", "Persistent storage", "Clean UI"],
    github: "https://github.com/Harinim004/To-Do-List",
    gradient: "from-[var(--purple-glow)] to-[var(--cyan-glow)]",
    emoji: "✅",
    image: imgTodo
  }
];
function Projects() {
  const [active, setActive] = reactExports.useState(0);
  const [open, setOpen] = reactExports.useState(null);
  const len = projects.length;
  const next = () => setActive((a) => (a + 1) % len);
  const prev = () => setActive((a) => (a - 1 + len) % len);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "relative px-4 py-32 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: "selected work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Projects" }),
            " in motion"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: prev, "aria-label": "Previous", className: "glass h-11 w-11 rounded-full transition hover:glow-cyan", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "mx-auto h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: next, "aria-label": "Next", className: "glass h-11 w-11 rounded-full transition hover:glow-pink", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "mx-auto h-5 w-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[460px] overflow-hidden", style: { perspective: 1400 }, children: projects.map((p, i) => {
        const offset = (i - active + len) % len;
        const norm = offset > len / 2 ? offset - len : offset;
        const isCenter = norm === 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            onClick: () => isCenter ? setOpen(p) : setActive(i),
            animate: {
              x: norm * 320,
              scale: isCenter ? 1 : 0.78,
              rotateY: norm * -18,
              opacity: Math.abs(norm) > 2 ? 0 : 1 - Math.abs(norm) * 0.25,
              zIndex: 10 - Math.abs(norm),
              filter: isCenter ? "blur(0px)" : "blur(2px)"
            },
            transition: { type: "spring", stiffness: 120, damping: 20 },
            className: "glass-strong absolute left-1/2 top-1/2 h-[420px] w-[320px] -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-hidden rounded-3xl text-left",
            style: { transformStyle: "preserve-3d" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative h-44 w-full overflow-hidden bg-gradient-to-br ${p.gradient}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: p.image,
                    alt: p.name,
                    loading: "lazy",
                    width: 1024,
                    height: 1024,
                    className: "absolute inset-0 h-full w-full object-cover opacity-90"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-4 text-3xl drop-shadow-[0_0_12px_rgba(0,0,0,0.6)]", children: p.emoji })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-foreground/70", children: p.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.tech.slice(0, 4).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-foreground/70", children: t }, t)) }),
                isCenter && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-primary", children: "tap to expand →" })
              ] })
            ]
          },
          p.name
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: projects.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActive(i),
          "aria-label": `Go to project ${i + 1}`,
          className: `h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-primary" : "w-2 bg-white/20"}`
        },
        i
      )) })
    ] }),
    typeof document !== "undefined" && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "fixed inset-0 z-[80] flex items-center justify-center p-4 backdrop-blur-2xl",
          style: { background: "oklch(0.05 0.02 260 / 0.7)" },
          onClick: () => setOpen(null),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { scale: 0.85, opacity: 0, y: 30 },
              animate: { scale: 1, opacity: 1, y: 0 },
              exit: { scale: 0.9, opacity: 0 },
              transition: { type: "spring", stiffness: 200, damping: 22 },
              onClick: (e) => e.stopPropagation(),
              className: "glass-strong relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      setOpen(null);
                    },
                    "aria-label": "Close",
                    className: "absolute right-4 top-4 z-10 glass h-9 w-9 rounded-full",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "pointer-events-none mx-auto h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br ${open.gradient}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: open.image,
                      alt: open.name,
                      loading: "lazy",
                      width: 1024,
                      height: 1024,
                      className: "absolute inset-0 h-full w-full object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-5 text-5xl drop-shadow-[0_0_14px_rgba(0,0,0,0.6)]", children: open.emoji })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-3xl font-bold", children: open.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-primary", children: open.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 leading-relaxed text-foreground/80", children: open.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-6 text-xs uppercase tracking-widest text-muted-foreground", children: "Features" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 grid gap-2 sm:grid-cols-2", children: open.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "glass rounded-xl px-3 py-2 text-sm", children: [
                  "✦ ",
                  f
                ] }, f)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-6 text-xs uppercase tracking-widest text-muted-foreground", children: "Tech Stack" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: open.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs", children: t }, t)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
                  open.github && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: open.github, target: "_blank", rel: "noreferrer", className: "glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm hover:glow-cyan", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
                    " GitHub"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: open.demo ?? "#",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-background",
                      style: { background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow-pink)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" }),
                        " Live Demo"
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        }
      ) }),
      document.body
    )
  ] });
}
const items = [
  { year: "2025 — 26", title: "Chairperson, ISTE Student Chapter", place: "GEC Kozhikode", desc: "Leading the student chapter — driving events, mentorship and creative tech culture." },
  { year: "Jun — Jul 2025", title: "AR/VR Intern, IEEE Malabar", place: "Remote", desc: "Built interactive AR/VR experiences in Unity + AR Foundation with real-time 3D interactions." },
  { year: "Jun — Jul 2025", title: "Developer Intern, Tamilan Skills (RISE)", place: "Remote", desc: "Recognized as Top Performer in India for AR/VR. Built multi-domain mobile, web & backend systems." },
  { year: "2024 — 25", title: "Program Coordinator, IEEE Computer Society", place: "GEC Kozhikode", desc: "Coordinated technical programs, hackathons and student events for the chapter." },
  { year: "Dec 2024", title: "Associate Program Coordinator, IEEE AKCSSC 10", place: "Kerala", desc: "Helped orchestrate a major IEEE state-level student congress." },
  { year: "Apr 2024", title: "Freelance AR Game Developer — MetaHunt", place: "Kerala", desc: "Shipped a paid AR treasure hunt game engaging 600+ live participants." },
  { year: "Feb 2024", title: "Flutter Developer, Tech Pulse Hackathon", place: "Kozhikode", desc: "Built a real-time event coordination app with Flutter, Firebase and push notifications." }
];
function Experience() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "relative px-4 py-32 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: "journey" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: [
        "Layered ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "experiences" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-foreground/70", children: "Each role added a new dimension — scroll to peel them back." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "relative", style: { perspective: 1500 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StackCard, { item: it, index: i, progress: scrollYProgress, total: items.length }, it.title)) }) })
  ] }) });
}
function StackCard({
  item,
  index,
  progress,
  total
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const y = useTransform(progress, [start, end], [50, -20]);
  const opacity = useTransform(progress, [start - 0.1, start + 0.05, end], [0.4, 1, 0.9]);
  const rotateX = useTransform(progress, [start, end], [12, -4]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      style: { y, opacity, rotateX, transformStyle: "preserve-3d" },
      className: "glass-strong sticky top-28 mx-auto max-w-3xl rounded-3xl p-6 md:p-8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary", children: item.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl font-bold md:text-2xl", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-foreground/60", children: item.place })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest", children: [
            "Layer ",
            String(index + 1).padStart(2, "0")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-relaxed text-foreground/80", children: item.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" })
      ]
    }
  );
}
const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/harini-muthu-krishnan", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Harinim004", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/i_am_harinim?igsh=bXAxeHBlbzM2aHBn", label: "Instagram" },
  { icon: Phone, href: "tel:+918590897809", label: "Call" },
  { icon: Mail, href: "mailto:harinim8637@gmail.com", label: "Email" }
];
function Contact() {
  const [sending, setSending] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await emailjs.sendForm(
      "service_h0y3b4e",
      "template_knvfgwa",
      e.currentTarget,
      "ykxe86qtuwQwXPlBc"
    );
    toast.success("Message Sent ✨", {
      description: "Thanks for contacting me!"
    });
    e.currentTarget.reset();
    setSending(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative px-4 py-32 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.form,
      {
        onSubmit,
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "glass-strong rounded-3xl p-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: "say hi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-display text-3xl font-bold md:text-4xl", children: [
            "Let's build something ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "unreal" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4", children: [
            [
              { name: "name", label: "Your Name", type: "text", placeholder: "Harini admirer" },
              { name: "email", label: "Email", type: "email", placeholder: "you@galaxy.dev" },
              { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ..." }
            ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  required: f.name !== "phone",
                  name: f.name,
                  type: f.type,
                  placeholder: f.placeholder,
                  className: "peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:bg-white/10 focus:shadow-[0_0_30px_var(--cyan-glow)]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "pointer-events-none absolute -top-2 left-3 bg-background px-1.5 text-[10px] uppercase tracking-widest text-muted-foreground transition group-focus-within:text-primary", children: f.label })
            ] }, f.name)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  name: "message",
                  rows: 4,
                  placeholder: "Tell me about your idea...",
                  className: "peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/60 focus:bg-white/10 focus:shadow-[0_0_30px_var(--pink-glow)]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "pointer-events-none absolute -top-2 left-3 bg-background px-1.5 text-[10px] uppercase tracking-widest text-muted-foreground", children: "Message (optional)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              disabled: sending,
              className: "group mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-background transition hover:scale-[1.03] disabled:opacity-60",
              style: { background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow-cyan)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                sending ? "Launching..." : "Send Message"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: 0.15 },
        className: "flex flex-col justify-between",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-6xl font-bold leading-none md:text-8xl", children: [
              "Thank ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "You" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-foreground/70", children: "For scrolling all the way down. Drop a message, or catch me across the internet — I reply faster than a Flutter hot reload." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap gap-3", children: socials.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.a,
            {
              href: s.href,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": s.label,
              whileHover: { y: -4, rotate: 6 },
              className: "glass-strong group relative flex h-14 w-14 items-center justify-center rounded-2xl text-foreground/85 transition hover:text-primary hover:glow-cyan",
              style: { animationDelay: `${i * 0.2}s` },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -bottom-7 text-[10px] uppercase tracking-widest text-muted-foreground opacity-0 transition group-hover:opacity-100", children: s.label })
              ]
            },
            s.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-12 text-xs text-muted-foreground", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Harini M · Designed & built with ✦ in Kerala, India."
          ] })
        ]
      }
    )
  ] }) });
}
function CursorGlow() {
  const [pos, setPos] = reactExports.useState({ x: -200, y: -200 });
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "aria-hidden": true,
      className: "pointer-events-none fixed inset-0 z-[60] transition-opacity duration-300",
      style: { opacity: visible ? 1 : 0 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute h-[420px] w-[420px] rounded-full mix-blend-screen",
            style: {
              left: pos.x - 210,
              top: pos.y - 210,
              background: "radial-gradient(closest-side, oklch(0.82 0.18 200 / 0.18), oklch(0.72 0.22 340 / 0.08), transparent 70%)",
              transition: "left 80ms linear, top 80ms linear"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--cyan-glow)]",
            style: { left: pos.x - 6, top: pos.y - 6 }
          }
        )
      ]
    }
  );
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      style: { scaleX },
      className: "fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-[var(--cyan-glow)] via-[var(--purple-glow)] to-[var(--pink-glow)]"
    }
  );
}
function BackgroundFX() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl animate-blob",
        style: { background: "radial-gradient(circle, oklch(0.65 0.22 290 / 0.45), transparent 60%)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-3xl animate-blob",
        style: { background: "radial-gradient(circle, oklch(0.82 0.18 200 / 0.35), transparent 60%)", animationDelay: "4s" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full blur-3xl animate-blob",
        style: { background: "radial-gradient(circle, oklch(0.72 0.22 340 / 0.35), transparent 60%)", animationDelay: "8s" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,var(--background)_100%)]" })
  ] });
}
function Loader() {
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.6 } },
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-20 w-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-primary/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-2 animate-spin-slow rounded-full border-2 border-dashed border-accent/40", style: { animationDirection: "reverse" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-5 rounded-full animate-pulse-glow", style: { background: "var(--gradient-aurora)" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground", children: [
          "loading ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "harini.exe" })
        ] })
      ] })
    }
  ) });
}
function SectionReveal({
  children,
  intensity = 1,
  id
}) {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10 * intensity, 0, -6 * intensity]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80 * intensity, 0, -40 * intensity]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.4]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id, ref, style: { perspective: 1600 }, className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionGlow, { progress: scrollYProgress }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        style: { rotateX, y, scale, opacity, transformStyle: "preserve-3d", transformOrigin: "center top" },
        className: "will-change-transform",
        children
      }
    )
  ] });
}
function SectionGlow({ progress }) {
  const opacity = useTransform(progress, [0, 0.5, 1], [0, 0.55, 0]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.7, 1.1, 0.7]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      "aria-hidden": true,
      style: { opacity, scale },
      className: "pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full", style: { background: "var(--gradient-hero)" } })
    }
  );
}
function SectionTransition() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto h-24 w-full max-w-6xl px-4 md:px-8", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { scaleX: 0, opacity: 0 },
        whileInView: { scaleX: 1, opacity: 1 },
        viewport: { once: false, amount: 0.5 },
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        className: "absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 origin-center",
        style: {
          background: "linear-gradient(90deg, transparent, var(--cyan-glow), var(--pink-glow), transparent)",
          boxShadow: "0 0 24px var(--cyan-glow)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: false, amount: 0.5 },
        transition: { duration: 0.8, delay: 0.2 },
        className: "absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full",
        style: { background: "var(--gradient-aurora)", boxShadow: "0 0 20px var(--cyan-glow)" }
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dark relative min-h-screen overflow-x-clip bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundFX, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTransition, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { intensity: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTransition, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { intensity: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTransition, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { intensity: 0.8, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTransition, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { intensity: 1.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTransition, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { intensity: 0.9, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTransition, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { intensity: 0.8, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { theme: "dark", position: "bottom-right" })
  ] });
}
export {
  Index as component
};
