export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.22 290 / 0.45), transparent 60%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.18 200 / 0.35), transparent 60%)", animationDelay: "4s" }}
      />
      <div
        className="absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.22 340 / 0.35), transparent 60%)", animationDelay: "8s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,var(--background)_100%)]" />
    </div>
  );
}
