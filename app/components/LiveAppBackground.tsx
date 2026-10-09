'use client';

/**
 * A MacBook-style laptop mockup showing MerakiList running live.
 * The laptop sits behind the hero, tilted slightly, with animated
 * content inside the screen: cursor moving, tasks ticking, progress
 * filling, notifications popping. Zero iframes, zero honeycombs.
 */

export default function LiveAppBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Ambient warm glow behind everything */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[1600px] h-[900px] bg-gradient-radial from-amber-500/25 via-orange-500/10 to-transparent blur-3xl" />

      {/* ══════════════════════════════════════════════
          THE LAPTOP
          ══════════════════════════════════════════════ */}
      <div
        className="absolute left-1/2 top-[6%]"
        style={{
          width: '1180px',
          maxWidth: '135vw',
          transform: 'translateX(-50%) perspective(2400px) rotateX(6deg)',
          animation: 'laptopFloat 12s ease-in-out infinite',
          willChange: 'transform',
        }}
      >
        {/* ── LID / SCREEN FRAME ── */}
        <div
          className="relative rounded-[22px] overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #2a2a2e 0%, #16161a 40%, #0a0a0c 100%)',
            padding: '12px',
            boxShadow:
              '0 60px 120px -30px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06) inset, 0 0 80px -20px rgba(251,191,36,0.25)',
          }}
        >
          {/* Camera notch */}
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-black/60 z-20" />
          <div className="absolute top-[7px] left-1/2 -translate-x-1/2 translate-x-5 w-1 h-1 rounded-full bg-zinc-800 z-20" />

          {/* ── SCREEN (the app lives here) ── */}
          <div className="relative rounded-[14px] overflow-hidden bg-zinc-950">

            {/* macOS-style menu bar */}
            <div className="flex items-center gap-3 px-3 py-1.5 bg-black/60 backdrop-blur border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px]">🎯</span>
                <span className="text-[10px] font-semibold text-white/80">MerakiList</span>
              </div>
              <div className="ms-auto flex items-center gap-2">
                <span className="text-[9px] text-white/50">
                  {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>

            {/* ── THE APP UI (animated) ── */}
            <div className="relative bg-gradient-to-br from-zinc-950 via-zinc-950 to-black px-6 py-5">

              {/* App top row */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-[11px] shadow-lg shadow-amber-500/30">
                      M
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">Task Priorities</div>
                      <div className="text-[9px] text-white/40 leading-tight">Friday · Oct 9</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Karma pill */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/20 border border-violet-500/40">
                    <span className="text-[10px]">✨</span>
                    <span className="text-[10px] font-black text-violet-300">128</span>
                  </div>
                  {/* Streak pill */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40">
                    <span className="text-[10px]">🔥</span>
                    <span className="text-[10px] font-black text-amber-300">14</span>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-black text-amber-400 uppercase tracking-widest">
                    Progress
                  </span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500"
                      style={{ animation: 'progressGrow 8s ease-in-out infinite' }}
                    />
                  </div>
                  <span className="text-[9px] font-bold text-white/70">7/10</span>
                </div>
              </div>

              {/* 4 quadrant grid */}
              <div className="grid grid-cols-2 gap-3.5">

                {/* Do First */}
                <div className="relative h-[210px] rounded-2xl bg-gradient-to-br from-red-500/15 to-red-900/5 border border-red-500/30 p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-red-500/40 flex items-center justify-center">
                        <span className="text-red-300 text-[11px]">🔥</span>
                      </div>
                      <span className="text-[10px] font-black text-red-200 uppercase tracking-wider">Do First</span>
                    </div>
                    <span className="text-[10px] font-black text-red-300/80 bg-red-500/20 px-1.5 py-0.5 rounded">3</span>
                  </div>
                  <div className="space-y-2.5">
                    <TaskRow label="Ship landing page" done delay={0} accent="red" />
                    <TaskRow label="Fix critical bug" done delay={0.4} accent="red" />
                    <TaskRow label="Review PR #142" done={false} delay={0.8} accent="red" isActive />
                  </div>
                  {/* Blinking cursor on the active task */}
                  <div
                    className="absolute bottom-[26px] ms-[26px] w-3 h-3.5 bg-amber-400"
                    style={{ animation: 'caretBlink 1.1s step-end infinite' }}
                  />
                </div>

                {/* Schedule */}
                <div className="relative h-[210px] rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-900/5 border border-amber-500/30 p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-amber-500/40 flex items-center justify-center">
                        <span className="text-amber-300 text-[11px]">📅</span>
                      </div>
                      <span className="text-[10px] font-black text-amber-200 uppercase tracking-wider">Schedule</span>
                    </div>
                    <span className="text-[10px] font-black text-amber-300/80 bg-amber-500/20 px-1.5 py-0.5 rounded">2</span>
                  </div>
                  <div className="space-y-2.5">
                    <TaskRow label="Plan Q4 roadmap" done delay={0.3} accent="amber" />
                    <TaskRow label="Prep team standup" done={false} delay={0.7} accent="amber" />
                  </div>
                </div>

                {/* Delegate */}
                <div className="relative h-[160px] rounded-2xl bg-gradient-to-br from-sky-500/15 to-sky-900/5 border border-sky-500/30 p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-sky-500/40 flex items-center justify-center">
                        <span className="text-sky-300 text-[11px]">👥</span>
                      </div>
                      <span className="text-[10px] font-black text-sky-200 uppercase tracking-wider">Delegate</span>
                    </div>
                    <span className="text-[10px] font-black text-sky-300/80 bg-sky-500/20 px-1.5 py-0.5 rounded">1</span>
                  </div>
                  <div className="space-y-2.5">
                    <TaskRow label="Send invoice to client" done={false} delay={1.1} accent="sky" />
                  </div>
                </div>

                {/* Eliminate */}
                <div className="relative h-[160px] rounded-2xl bg-gradient-to-br from-zinc-500/15 to-zinc-900/5 border border-white/15 p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-zinc-500/40 flex items-center justify-center">
                        <span className="text-zinc-300 text-[11px]">⚡</span>
                      </div>
                      <span className="text-[10px] font-black text-zinc-300 uppercase tracking-wider">Eliminate</span>
                    </div>
                  </div>
                  <div className="space-y-2.5 opacity-50">
                    <TaskRow label="Sort old bookmarks" done={false} delay={1.5} accent="zinc" />
                  </div>
                </div>

              </div>

              {/* Bottom nav */}
              <div className="mt-5 flex items-center justify-center">
                <div className="flex items-center gap-7 px-6 py-2.5 rounded-full bg-zinc-900/90 border border-white/10 shadow-2xl backdrop-blur">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/50" />
                    <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber-300 pulse-dot" />
                  </div>
                  <NavDot />
                  <NavDot />
                  <NavDot />
                  <NavDot />
                </div>
              </div>

              {/* Floating action button with pulsing glow */}
              <div
                className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-[0_0_50px_rgba(251,191,36,0.7)]"
                style={{ animation: 'fabGlow 3s ease-in-out infinite' }}
              >
                <span className="text-black text-2xl font-light leading-none">+</span>
              </div>

              {/* Toast notification sliding in periodically */}
              <div
                className="absolute top-14 right-5 flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/95 shadow-2xl shadow-emerald-500/40"
                style={{ animation: 'toastSlide 8s ease-in-out infinite' }}
              >
                <span className="text-white text-[11px]">✓</span>
                <span className="text-white text-[10px] font-bold">Task completed!</span>
              </div>
            </div>
          </div>

          {/* Screen reflection sweep */}
          <div
            className="absolute inset-0 pointer-events-none rounded-[22px] z-10"
            style={{
              background:
                'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)',
              animation: 'screenSweep 8s ease-in-out infinite',
            }}
          />
        </div>

        {/* ── BASE / HINGE ── */}
        <div
          className="relative mx-auto h-3"
          style={{
            width: '108%',
            marginLeft: '-4%',
            background: 'linear-gradient(180deg, #1a1a1e 0%, #0a0a0c 100%)',
            borderRadius: '0 0 14px 14px',
            boxShadow: '0 30px 60px -15px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04) inset',
          }}
        >
          {/* Notch in the base (trackpad cutout look) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1.5 rounded-b-full bg-black/50" />
        </div>

        {/* Shadow beneath the laptop */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[95%] h-8 rounded-full blur-2xl"
          style={{
            bottom: '-16px',
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.7), transparent 70%)',
          }}
        />
      </div>

      {/* Ambient bottom glows */}
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-gradient-radial from-rose-500/12 to-transparent blur-3xl" />
      <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-gradient-radial from-violet-500/12 to-transparent blur-3xl" />
    </div>
  );
}

/* ────────────────────────────────
   Small helper components
   ──────────────────────────────── */

function NavDot() {
  return <div className="w-6 h-6 rounded-lg bg-white/10" />;
}

type TaskRowProps = {
  label: string;
  done: boolean;
  delay: number;
  accent: 'red' | 'amber' | 'sky' | 'zinc';
  isActive?: boolean;
};

function TaskRow({ label, done, delay, accent, isActive }: TaskRowProps) {
  const accents = {
    red:   { border: 'border-red-400/50',   bg: 'bg-red-500/70',   text: 'text-white/85' },
    amber: { border: 'border-amber-400/50', bg: 'bg-amber-500/70', text: 'text-white/85' },
    sky:   { border: 'border-sky-400/50',   bg: 'bg-sky-500/70',   text: 'text-white/85' },
    zinc:  { border: 'border-zinc-400/50',  bg: 'bg-zinc-500/70',  text: 'text-white/60' },
  };
  const a = accents[accent];

  return (
    <div
      className="flex items-center gap-2"
      style={{
        animation: `taskSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`,
      }}
    >
      {/* Checkbox */}
      <div
        className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center shrink-0 transition-all ${
          done ? `${a.bg} border-transparent` : `border ${a.border}`
        }`}
        style={done ? { animation: `checkPop 0.4s ease-out ${delay + 0.3}s both` } : {}}
      >
        {done && <span className="text-[7px] text-white font-black">✓</span>}
      </div>
      {/* Label */}
      <span
        className={`text-[10px] font-medium ${a.text} truncate ${
          done ? 'line-through opacity-60' : ''
        }`}
      >
        {label}
      </span>
      {isActive && (
        <span className="ms-auto w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
      )}
    </div>
  );
}