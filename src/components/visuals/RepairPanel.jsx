export default function RepairPanel({ className = "" }) {
  return (
    <div
      className={`relative aspect-square w-full max-w-[520px] mx-auto ${className}`}
    >
      {/* Soft outer glow ring */}
      <div className="absolute -inset-[2px] rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,.35),rgba(34,211,238,.35),rgba(168,85,247,.35),rgba(16,185,129,.35))] opacity-80 blur-[14px] wwd-rotate-slow" />

      {/* Panel surface */}
      <div className="relative w-full h-full rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.08))] border border-white/10 overflow-hidden">
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_30%_20%,rgba(16,185,129,.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_70%_80%,rgba(34,211,238,.12),transparent_60%)]" />

        {/* Animated circuit traces */}
        <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="wwdGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgb(34 211 238)" />
              <stop offset="100%" stopColor="rgb(16 185 129)" />
            </linearGradient>
            <filter id="wwdBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* Base faint traces */}
          <g stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" strokeLinecap="round">
            <path d="M60 120 H240 V200 H420 V260 H520" />
            <path d="M120 440 H300 V360 H420 V320 H540" />
            <path d="M80 320 H220 V260 H340 V200 H520" />
            <path d="M100 180 H260 V240 H360 V300 H520" />
          </g>

          {/* Glowing animated dashes over traces */}
          <g stroke="url(#wwdGlow)" strokeWidth="2.5" fill="none" strokeLinecap="round" filter="url(#wwdBlur)">
            <path className="wwd-animate-trace" strokeDasharray="12 16" d="M60 120 H240 V200 H420 V260 H520" />
            <path className="wwd-animate-trace-fast" strokeDasharray="10 18" d="M120 440 H300 V360 H420 V320 H540" />
            <path className="wwd-animate-trace" strokeDasharray="14 18" d="M80 320 H220 V260 H340 V200 H520" />
            <path className="wwd-animate-trace-fast" strokeDasharray="12 16" d="M100 180 H260 V240 H360 V300 H520" />
          </g>

          {/* Pads */}
          <g fill="rgba(255,255,255,0.14)">
            <circle cx="60" cy="120" r="4" />
            <circle cx="520" cy="260" r="4" />
            <circle cx="120" cy="440" r="4" />
            <circle cx="540" cy="320" r="4" />
          </g>
        </svg>

        {/* Floating tool icon (wrench) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 wwd-floaty">
          <svg width="120" height="120" viewBox="0 0 24 24" className="opacity-90">
            <path
              d="M21 2l-5.5 5.5a3.5 3.5 0 01-4.95 4.95L5 18 2 21l3-3 5.55-5.55A3.5 3.5 0 0116.5 7.5L22 2"
              stroke="white" strokeOpacity="0.85" strokeWidth="1.25" fill="none" />
            <circle cx="16.5" cy="7.5" r="1.4" fill="url(#wwdGlow)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
