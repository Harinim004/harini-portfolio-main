import { useState } from "react";
import { motion } from "motion/react";
import { Linkedin, Github, Instagram, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/harini-muthu-krishnan", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Harinim004", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/i_am_harinim?igsh=bXAxeHBlbzM2aHBn", label: "Instagram" },
  { icon: Phone, href: "tel:+918590897809", label: "Call" },
  { icon: Mail, href: "mailto:harinim8637@gmail.com", label: "Email" },
];

export function Contact() {
  const [sending, setSending] = useState(false);
  
  const onSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  setSending(true);

  await emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    e.currentTarget,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  toast.success("Message Sent ✨", {
    description: "Thanks for contacting me!",
  });

  e.currentTarget.reset();
  setSending(false);
};
  return (
    <section id="contact" className="relative px-4 py-32 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-primary">say hi</p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Let's build something <span className="text-gradient">unreal</span>.</h2>

          <div className="mt-8 space-y-4">
            {[
              { name: "name", label: "Your Name", type: "text", placeholder: "Harini admirer" },
              { name: "email", label: "Email", type: "email", placeholder: "you@galaxy.dev" },
              { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ..." },
            ].map((f) => (
              <div key={f.name} className="group relative">
                <input
                  required={f.name !== "phone"}
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/60 focus:bg-white/10 focus:shadow-[0_0_30px_var(--cyan-glow)]"
                />
                <label className="pointer-events-none absolute -top-2 left-3 bg-background px-1.5 text-[10px] uppercase tracking-widest text-muted-foreground transition group-focus-within:text-primary">{f.label}</label>
              </div>
            ))}
            <div className="group relative">
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your idea..."
                className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/60 focus:bg-white/10 focus:shadow-[0_0_30px_var(--pink-glow)]"
              />
              <label className="pointer-events-none absolute -top-2 left-3 bg-background px-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">Message (optional)</label>
            </div>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="group mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-background transition hover:scale-[1.03] disabled:opacity-60"
            style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow-cyan)" }}
          >
            <Send className="h-4 w-4" />
            {sending ? "Launching..." : "Send Message"}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="font-display text-6xl font-bold leading-none md:text-8xl">
              Thank <span className="text-gradient">You</span>.
            </h2>
            <p className="mt-6 max-w-md text-foreground/70">
              For scrolling all the way down. Drop a message, or catch me across the internet — I reply faster than a Flutter hot reload.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, rotate: 6 }}
                className="glass-strong group relative flex h-14 w-14 items-center justify-center rounded-2xl text-foreground/85 transition hover:text-primary hover:glow-cyan"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <s.icon className="h-5 w-5" />
                <span className="pointer-events-none absolute -bottom-7 text-[10px] uppercase tracking-widest text-muted-foreground opacity-0 transition group-hover:opacity-100">{s.label}</span>
              </motion.a>
            ))}
          </div>

          <p className="mt-12 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Harini M · Designed &amp; built with ✦ in Kerala, India.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
