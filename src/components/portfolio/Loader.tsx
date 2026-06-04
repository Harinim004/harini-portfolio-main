import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-20 w-20">
              <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-primary/40" />
              <div className="absolute inset-2 animate-spin-slow rounded-full border-2 border-dashed border-accent/40" style={{ animationDirection: "reverse" }} />
              <div className="absolute inset-5 rounded-full animate-pulse-glow" style={{ background: "var(--gradient-aurora)" }} />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
              loading <span className="text-gradient">harini.exe</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
