'use client';

/**
 * Premium animated phone demo showing the app being USED:
 * - Tasks tick themselves in a loop
 * - A cursor moves around and interacts
 * - Progress bar fills, karma bumps, toast slides in
 * - New task slides into Do First
 * - Phone floats gently
 */

export default function LiveAppDemo() {
  return (
    <div className="relative flex items-center justify-center py-8 lg:py-0">
      {/* Warm halo behind phone */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[520px] h-[520px] rounded-full bg-gradient-radial from-amber-500/35 via-orange-500/12 to-transparent blur-3xl" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-radial from-rose-500/20 to-transparent blur-3xl translate-x-32 translate-y-24" />
      </div>

      {/* The phone */}
      <div className="relative" style={{ animation: 'phoneFloat 6s ease-in-out infinite' }}>

        {/* Phone frame */}
        <div className="relative w-[320px] h-[660px] rounded-[52px] p-[12px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.08)_inset,0_0_80px_-15px_rgba(251,191,36,0.35)]">

          {/* Side buttons */}
          <div className="absolute -left-[3px] top-[110px] w-[3px] h-[55px] rounded-l bg-zinc-700" />
          <div className="absolute -left-[3px] top-[185px] w-[3px] h-[55px] rounded-l bg-zinc-700" />
          <div className="absolute -left-[3px] top-[260px] w-[3px] h-[90px] rounded-l bg-zinc-700" />
          <div className="absolute -right-[3px] top-[170px] w-[3px] h-[95px] rounded-r bg-zinc-700" />

          {/* Screen */}
          <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-black">

            {/* Dynamic island */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[110px] h-[32px] rounded-full bg-black z-30 flex items-center justify-end pr-3">
              <div className="w-2 h-2 rounded-full bg-zinc-900" />
            </div>

            {/* Status bar */}
            <div className="relative flex items-center justify-between px-7 pt-3 pb-1 z-20">
              <span className="text-[11px] font-bold text-white">9:41</span>
              <div className="flex items-center gap-1">
                <span className="text-[9px] font-bold text-white/70">••••</span>
                <span className="text-[9px] font-bold text-white/70">5G</span>
                <span className="text-[9px] font-bold text-white/70">100%</span>
              </div>
            </div>

            {/* App content */}
            <div className="relative px-3.5 pt-3 pb-16 h-[calc(100%-44px)] overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-[13px] font-black text-white leading-tight">Task Priorities</div>
                  <div className="text-[9px] text-white/40 leading-tight">Friday · Oct 9</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-violet-500/25 border border-violet-500/40">
                    <span className="text-[9px]">✨</span>
                    <span
                      className="text-[10px] font-black text-violet-300 tabular-nums"
                      style={{ animation: 'karmaBump 8s ease-out infinite' }}
                    >
                      128
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/25 border border-amber-500/40">
                    <span className="text-[9px]">🔥</span>
                    <span className="text-[10px] font-black text-amber-300 tabular-nums">14</span>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[8px] font-black text-amber-400 uppercase tracking-widest">Progress</span>
                <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500"
                    style={{ animation: 'progressFill 8s ease-in-out infinite' }}
                  />
                </div>
              </div>

              {/* 2x2 Quadrants */}
              <div className="grid grid-cols-2 gap-2 mb-3">

                {/* Do First */}
                <div className="relative h-[135px] rounded-2xl bg-gradient-to-br from-red-500/15 to-red-900/5 border border-red-500/30 p-2.5 overflow-hidden">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-md bg-red-500/40 flex items-center justify-center">
                      <span className="text-red-300 text-[8px]">🔥</span>
                    </div>
                    <span className="text-[8px] font-black text-red-200 tracking-wider">DO FIRST</span>
                  </div>
                  <div className="space-y-1.5">
                    <MiniTask label="Ship landing" done />
                    <MiniTask label="Fix bug" done />
                    <MiniTask label="Review PR" done={false} />
                    <div
                      className="flex items-center gap-1.5"
                      style={{ animation: 'newTaskIn 8s ease-out infinite' }}
                    >
                      <div className="w-3 h-3 rounded-sm border border-amber-400/60 shrink-0" />
                      <span className="text-[9px] font-medium text-amber-100">Write docs</span>
                    </div>
                  </div>
                </div>

                {/* Schedule */}
                <div className="relative h-[135px] rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-900/5 border border-amber-500/30 p-2.5 overflow-hidden">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-md bg-amber-500/40 flex items-center justify-center">
                      <span className="text-amber-300 text-[8px]">📅</span>
                    </div>
                    <span className="text-[8px] font-black text-amber-200 tracking-wider">SCHEDULE</span>
                  </div>
                  <div className="space-y-1.5">
                    <MiniTask label="Plan Q4" done />
                    <MiniTask label="Standup" done={false} />
                    <MiniTask label="Book trip" done={false} />
                  </div>
                </div>

                {/* Delegate */}
                <div className="relative h-[95px] rounded-2xl bg-gradient-to-br from-sky-500/15 to-sky-900/5 border border-sky-500/30 p-2.5 overflow-hidden">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-md bg-sky-500/40 flex items-center justify-center">
                      <span className="text-sky-300 text-[8px]">👥</span>
                    </div>
                    <span className="text-[8px] font-black text-sky-200 tracking-wider">DELEGATE</span>
                  </div>
                  <MiniTask label="Invoice" done={false} />
                </div>

                {/* Eliminate */}
                <div className="relative h-[95px] rounded-2xl bg-gradient-to-br from-zinc-500/15 to-zinc-900/5 border border-white/15 p-2.5 overflow-hidden">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-md bg-zinc-500/40 flex items-center justify-center">
                      <span className="text-zinc-300 text-[8px]">⚡</span>
                    </div>
                    <span className="text-[8px] font-black text-zinc-300 tracking-wider">ELIMINATE</span>
                  </div>
                  <MiniTask label="Clean up" done={false} />
                </div>

              </div>

              {/* Bottom nav */}
              <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-around px-3 py-2 rounded-full bg-zinc-900/95 border border-white/10 backdrop-blur shadow-2xl">
                <div className="relative">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/50" />
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-300 pulse-dot" />
                </div>
                <div className="w-5 h-5 rounded-md bg-white/10" />
                <div className="w-5 h-5 rounded-md bg-white/10" />
                <div className="w-5 h-5 rounded-md bg-white/10" />
                <div className="w-5 h-5 rounded-md bg-white/10" />
              </div>

              {/* FAB */}
              <div
                className="absolute bottom-[72px] right-4 w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-[0_0_35px_rgba(251,191,36,0.7)]"
                style={{ animation: 'fabGlow 3s ease-in-out infinite' }}
              >
                <span className="text-black text-xl font-light leading-none">+</span>
              </div>

              {/* Toast notification */}
              <div
                className="absolute top-[68px] left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 shadow-2xl shadow-emerald-500/50 z-40 whitespace-nowrap"
                style={{ animation: 'toastPop 8s ease-out infinite' }}
              >
                <span className="text-white text-[10px]">✓</span>
                <span className="text-white text-[10px] font-black">Task done! +5 Karma</span>
              </div>

              {/* Floating cursor */}
              <svg
                className="absolute w-5 h-5 z-50 pointer-events-none"
                viewBox="0 0 24 24"
                style={{
                  animation: 'cursorPath 8s ease-in-out infinite',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                }}
              >
                <path d="M5 3 L19 12 L12.5 13.5 L16 21 L13 22 L9.5 14.5 L4 18 Z" fill="white" stroke="black" strokeWidth="1" strokeLinejoin="round" />
              </svg>

              {/* Screen reflection */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.05) 50%, transparent 58%)',
                  animation: 'screenSweep 9s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </div>

        {/* Shadow under phone */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[85%] h-6 rounded-full blur-2xl"
          style={{
            bottom: '-24px',
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.7), transparent 70%)',
          }}
        />
      </div>
    </div>
  );
}

function MiniTask({ label, done }: { label: string; done: boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className={`w-3 h-3 rounded-sm flex items-center justify-center shrink-0 ${
          done ? 'bg-amber-500/70' : 'border border-white/30'
        }`}
      >
        {done && <span className="text-[6px] text-white font-black">✓</span>}
      </div>
      <span className={`text-[9px] font-medium truncate ${done ? 'text-white/60 line-through' : 'text-white/85'}`}>
        {label}
      </span>
    </div>
  );
}