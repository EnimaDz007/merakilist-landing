'use client';

/**
 * Floating to-do elements — confined to edges so they never
 * overlap the hero text column on the left.
 *
 * Safe zones (desktop):
 *   • Top-LEFT corner (above where text starts)
 *   • Bottom-LEFT corner (below where text ends)
 *   • Entire RIGHT half (beside / around the phone)
 */

type CardColor = 'amber' | 'rose' | 'violet' | 'sky' | 'emerald';

const COLOR_MAP: Record<CardColor, { bar: string }> = {
  amber:   { bar: 'from-amber-400 to-orange-500' },
  rose:    { bar: 'from-rose-400 to-pink-500' },
  violet:  { bar: 'from-violet-400 to-fuchsia-500' },
  sky:     { bar: 'from-sky-400 to-indigo-500' },
  emerald: { bar: 'from-emerald-400 to-teal-500' },
};

export default function TodoFloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">

      {/* ── Top-LEFT corner — safely above text ── */}
      <MiniTaskCard
        top="6%" left="2%"
        delay={0} dur={10}
        color="amber" label="Review PR #142" checked
      />

      {/* ── Top-center — safely above phone ── */}
      <MiniTaskCard
        top="5%" left="52%"
        delay={1.1} dur={11}
        color="sky" label="Team standup" checked={false}
      />

      {/* ── Top-RIGHT corner ── */}
      <MiniTaskCard
        top="8%" right="2%"
        delay={0.4} dur={12}
        color="violet" label="Plan Q4 roadmap" checked
      />

      {/* ── Right side, mid-height — beside phone ── */}
      <MiniTaskCard
        top="38%" right="1%"
        delay={0.9} dur={9}
        color="rose" label="Send invoice" checked={false}
      />

      {/* ── Right side, lower — beside phone ── */}
      <MiniTaskCard
        top="66%" right="2%"
        delay={1.6} dur={10}
        color="emerald" label="Gym session" checked
      />

      {/* ── Bottom-center — below phone area ── */}
      <MiniTaskCard
        top="90%" left="58%"
        delay={0.7} dur={11}
        color="amber" label="Ship landing page" checked={false}
      />

      {/* ── Bottom-LEFT corner — safely below text ── */}
      <MiniTaskCard
        top="92%" left="3%"
        delay={2.1} dur={9}
        color="emerald" label="Water plants" checked
      />

      {/* ── Floating checkmark badges — right half only ── */}
      <FloatingBadge top="20%" left="48%" delay={0.4} dur={8} type="check" />
      <FloatingBadge top="78%" right="8%" delay={1.8} dur={10} type="check" />
      <FloatingBadge top="52%" left="46%" delay={0.9} dur={9} type="check" />

      {/* ── Karma bubbles — right half only ── */}
      <FloatingBadge top="30%" right="4%" delay={2.1} dur={11} type="karma" text="+5" />
      <FloatingBadge top="88%" left="46%" delay={1.4} dur={9} type="karma" text="+3" />

      {/* ── Info chips — right side ── */}
      <div
        className="hidden lg:flex absolute items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.06] backdrop-blur border border-zinc-200/70 dark:border-white/10 shadow-lg"
        style={{ top: '56%', right: '3%', animation: 'driftY 12s ease-in-out 0.5s infinite' }}
      >
        <span className="text-[10px]">📅</span>
        <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-300">Fri · Oct 9</span>
      </div>

      <div
        className="hidden lg:flex absolute items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.06] backdrop-blur border border-zinc-200/70 dark:border-white/10 shadow-lg"
        style={{ top: '72%', right: '6%', animation: 'driftY 14s ease-in-out 1s infinite' }}
      >
        <div className="w-12 h-1 rounded-full bg-zinc-200 dark:bg-white/10 overflow-hidden">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
        </div>
        <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-300">75%</span>
      </div>
    </div>
  );
}

type MiniTaskCardProps = {
  top: string;
  left?: string;
  right?: string;
  delay: number;
  dur: number;
  color: CardColor;
  label: string;
  checked: boolean;
};

function MiniTaskCard({ top, left, right, delay, dur, color, label, checked }: MiniTaskCardProps) {
  const c = COLOR_MAP[color];
  return (
    <div
      className="hidden md:flex absolute items-center gap-2 px-3 py-2 rounded-xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]"
      style={{
        top,
        left,
        right,
        animation: `driftY ${dur}s ease-in-out ${delay}s infinite`,
        willChange: 'transform',
      }}
    >
      <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${c.bar}`} />
      <div
        className={`w-3.5 h-3.5 rounded-[4px] flex items-center justify-center shrink-0 ${
          checked ? `bg-gradient-to-br ${c.bar}` : 'border border-zinc-300 dark:border-white/20'
        }`}
      >
        {checked && <span className="text-[7px] text-white font-black">✓</span>}
      </div>
      <span
        className={`text-[11px] font-semibold whitespace-nowrap ${
          checked ? 'text-zinc-400 dark:text-zinc-500 line-through' : 'text-zinc-700 dark:text-zinc-200'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

type BadgeProps = {
  top: string;
  left?: string;
  right?: string;
  delay: number;
  dur: number;
  type: 'check' | 'karma';
  text?: string;
};

function FloatingBadge({ top, left, right, delay, dur, type, text }: BadgeProps) {
  if (type === 'check') {
    return (
      <div
        className="hidden lg:flex absolute w-8 h-8 rounded-full items-center justify-center bg-emerald-500 shadow-lg shadow-emerald-500/40"
        style={{ top, left, right, animation: `driftY ${dur}s ease-in-out ${delay}s infinite` }}
      >
        <span className="text-white text-sm font-black">✓</span>
      </div>
    );
  }
  return (
    <div
      className="hidden lg:flex absolute items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/40"
      style={{ top, left, right, animation: `driftY ${dur}s ease-in-out ${delay}s infinite` }}
    >
      <span className="text-white text-[10px]">✨</span>
      <span className="text-white text-[10px] font-black">{text}</span>
    </div>
  );
}