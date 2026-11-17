export function Reactor({ busy = false, size = 260 }: { busy?: boolean; size?: number }) {
  return (
    <div className="reactor relative" data-busy={busy} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="ring-a absolute inset-0 h-full w-full text-primary">
        <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeOpacity=".25" strokeWidth="1" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="40 14 4 14" />
      </svg>
      <svg viewBox="0 0 200 200" className="ring-b absolute inset-0 h-full w-full text-primary-glow">
        <circle cx="100" cy="100" r="72" fill="none" stroke="currentColor" strokeWidth="5" strokeOpacity=".7" strokeDasharray="2 9" />
        <circle cx="100" cy="100" r="64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="90 30" />
      </svg>
      <svg viewBox="0 0 200 200" className="ring-c absolute inset-0 h-full w-full text-primary">
        <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="20 10 60 10" />
      </svg>
      <div className="core absolute rounded-full" style={{ inset: "32%" }} />
      <div className="absolute rounded-full bg-foreground/90 blur-[1px]" style={{ inset: "44%" }} />
    </div>
  );
}

export function HudBackground() {
  const parts = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="hud-grid absolute inset-0" />
      <div className="scanline absolute inset-x-0 h-40" />
      {parts.map((i) => (
        <span
          key={i}
          className="particle absolute bottom-0 h-1 w-1 rounded-full"
          style={{ left: `${(i * 37) % 100}%`, animationDuration: `${9 + (i % 7) * 2}s`, animationDelay: `${(i % 9) * 1.3}s` }}
        />
      ))}
    </div>
  );
}
