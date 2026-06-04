import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    const move = (e: MouseEvent) => {
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

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute h-[420px] w-[420px] rounded-full mix-blend-screen"
        style={{
          left: pos.x - 210,
          top: pos.y - 210,
          background:
            "radial-gradient(closest-side, oklch(0.82 0.18 200 / 0.18), oklch(0.72 0.22 340 / 0.08), transparent 70%)",
          transition: "left 80ms linear, top 80ms linear",
        }}
      />
      <div
        className="absolute h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--cyan-glow)]"
        style={{ left: pos.x - 6, top: pos.y - 6 }}
      />
    </div>
  );
}
