import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 md:px-6">
        <a href="#home" className="group flex items-center gap-2">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--cyan-glow)] to-[var(--pink-glow)] text-sm font-bold text-background shadow-[0_0_20px_var(--cyan-glow)]">
            H
            <span className="absolute inset-0 rounded-full ring-1 ring-white/30 animate-pulse-glow" />
          </span>
          <span className="font-display text-sm font-semibold tracking-widest text-foreground/90">
            HARINI <span className="text-gradient">M</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group relative text-sm text-foreground/75 transition-colors hover:text-foreground">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--pink-glow)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="tel:+918590897809" aria-label="Call Harini" className="glass hidden h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition hover:text-primary hover:glow-cyan md:inline-flex">
            <Phone className="h-4 w-4" />
          </a>
          <a href="mailto:harinim8637@gmail.com" aria-label="Email Harini" className="glass hidden h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition hover:text-accent hover:glow-pink md:inline-flex">
            <Mail className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="glass inline-flex h-9 w-9 items-center justify-center rounded-full lg:hidden">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong mx-auto mt-2 max-w-6xl rounded-3xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-white/5 hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
