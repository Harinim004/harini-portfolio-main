import { motion } from "motion/react";

type Skill = { name: string; icon: string };
type Category = {
  id: string;
  title: string;
  emoji: string;
  color: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    id: "development",
    title: "Development",
    emoji: "🚀",
    color: "var(--cyan-glow)",
    skills: [
      { name: "Flutter", icon: "📱" },
      { name: "Python", icon: "🐍" },
      { name: "Flask", icon: "🧪" },
      { name: "Firebase", icon: "🔥" },
    ],
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
      { name: "Meta Spark", icon: "✨" },
    ],
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
      { name: "PHP", icon: "🐘" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    emoji: "🛠️",
    color: "var(--blue-glow)",
    skills: [
      { name: "Git", icon: "⎇" },
      { name: "VS Code", icon: "🧩" },
      { name: "Android Studio", icon: "🤖" },
    ],
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
      { name: "Time Management", icon: "⏱️" },
    ],
  },
];

function CategoryGroup({ cat }: { cat: Category }) {
  return (
    <div className="flex shrink-0 items-center gap-3 pr-6">
      <div
        className="flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5"
        style={{
          background: `linear-gradient(135deg, ${cat.color}22, transparent)`,
          border: `1px solid ${cat.color}`,
          boxShadow: `0 0 20px -6px ${cat.color}`,
        }}
      >
        <span className="text-lg" style={{ filter: `drop-shadow(0 0 10px ${cat.color})` }}>
          {cat.emoji}
        </span>
        <span
          className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: cat.color }}
        >
          {cat.title}
        </span>
      </div>

      {cat.skills.map((s) => (
        <div
          key={s.name}
          className="glass flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 transition-transform hover:scale-105"
          style={{ boxShadow: `0 0 18px -10px ${cat.color}` }}
        >
          <span className="text-base" style={{ filter: `drop-shadow(0 0 8px ${cat.color})` }}>
            {s.icon}
          </span>
          <span className="whitespace-nowrap text-sm font-medium text-foreground/90">
            {s.name}
          </span>
        </div>
      ))}

      <span
        className="mx-2 h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ background: cat.color, boxShadow: `0 0 12px ${cat.color}` }}
      />
    </div>
  );
}

function Row({
  reverse = false,
  duration = 50,
  order,
}: {
  reverse?: boolean;
  duration?: number;
  order: Category[];
}) {
  const list = [...order, ...order];
  return (
    <div
      className="relative overflow-hidden py-3"
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {list.map((cat, i) => (
          <CategoryGroup key={`${cat.id}-${i}`} cat={cat} />
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  const rowA = categories;
  const rowB = [...categories].reverse();

  return (
    <section id="skills" className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.35em] text-primary"
          >
            stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-4xl font-bold md:text-5xl"
          >
            A <span className="text-gradient">holographic toolkit</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative space-y-2">
        <Row duration={55} order={rowA} />
        <Row reverse duration={65} order={rowB} />
      </div>
    </section>
  );
}
