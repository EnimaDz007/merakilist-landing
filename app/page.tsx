'use client';

import {
  CheckCircle2, Calendar, Target, Zap, Sparkles, Cloud,
  Smartphone, Timer, ArrowRight, Star, Shield, Github,
  Quote, TrendingUp, Users, Flame, Infinity as InfinityIcon,
  Apple, PlayCircle, Globe, Mail, UserPlus, ListPlus, Rocket,
  Layers, Command, Boxes, Wand2, Radar, Shuffle, LayoutGrid,
  Bell, Repeat, Palette, BarChart3,
} from 'lucide-react';
import TopBar from './components/TopBar';
import ScrollProgress from './components/ScrollProgress';
import RevealOnScroll from './components/RevealOnScroll';
import LiveAppDemo from './components/LiveAppDemo';
import TodoFloatingElements from './components/TodoFloatingElements';
import { useLanguage } from './lib/useLanguage';

const APP_URL = 'https://merakilist.vercel.app';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen text-zinc-900 dark:text-white transition-colors overflow-x-hidden bg-[#fdfbf7] dark:bg-[#07070c]">

      <ScrollProgress />
      <TopBar />

      {/* ── HERO ── */}
      <section className="relative pt-28 md:pt-32 pb-14 px-6 overflow-hidden">

        {/* ── Backdrop layers ── */}
        <div className="absolute inset-0 pointer-events-none">

          {/* Base gradient — warm cream (light) / deep indigo (dark) */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-white/0 to-rose-100/50 dark:from-indigo-950/40 dark:via-transparent dark:to-rose-950/30" />

          {/* Slow rotating aura behind hero */}
          <div
            className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] opacity-60 dark:opacity-40"
            style={{
              background:
                'conic-gradient(from 0deg at 50% 50%, rgba(251,191,36,0.15), rgba(249,115,22,0.08), rgba(244,63,94,0.12), rgba(139,92,246,0.08), rgba(251,191,36,0.15))',
              filter: 'blur(80px)',
              animation: 'rotateSlow 40s linear infinite',
            }}
          />

          {/* Amber glow behind text */}
          <div className="absolute top-[10%] left-[10%] w-[700px] h-[600px] bg-gradient-radial from-amber-500/25 via-orange-500/10 to-transparent blur-3xl" />

          {/* Rose glow behind phone */}
          <div className="absolute top-[5%] right-[5%] w-[700px] h-[700px] bg-gradient-radial from-rose-500/20 via-orange-500/10 to-transparent blur-3xl" />

          {/* Violet underglow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-radial from-violet-500/15 to-transparent blur-3xl" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.05] dark:opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)
              `,
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)',
            }}
          />
        </div>

        {/* Floating to-do elements — confined to edges */}
        <TodoFloatingElements />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">

          {/* LEFT — Text */}
          <div className="text-center lg:text-start z-10">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-xs font-semibold text-amber-800 dark:text-amber-200 mb-5 shadow-lg shadow-amber-500/10 backdrop-blur-sm badge-shimmer">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 dark:bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500 dark:bg-amber-400" />
                </span>
                {t('heroBadge')}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={80}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[1.02] mb-5">
                {t('heroLine1')}
                <br />
                <span className="text-gradient-amber drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                  {t('heroLine2')}
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={160}>
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-lg mx-auto lg:mx-0 mb-7 leading-relaxed">
                {t('heroSub')}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={240}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
                <a
                  href={APP_URL}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full
                             bg-gradient-to-r from-amber-400 to-orange-500
                             hover:from-amber-300 hover:to-orange-400
                             text-black font-bold text-sm md:text-base
                             shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60
                             hover:-translate-y-0.5
                             transition-all duration-300 shine-hover no-select w-full sm:w-auto"
                >
                  {t('heroCTA')}
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full
                             border border-zinc-300 dark:border-white/20
                             bg-white/60 dark:bg-white/[0.04] backdrop-blur
                             hover:bg-white dark:hover:bg-white/[0.08]
                             hover:border-amber-500/50
                             text-zinc-900 dark:text-white font-semibold text-sm md:text-base
                             transition-all duration-300 no-select w-full sm:w-auto"
                >
                  {t('heroCTA2')}
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={320}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  <span>{t('heroCheck1')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  <span>{t('heroCheck2')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  <span>{t('heroCheck3')}</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* RIGHT — Phone */}
          <div className="flex justify-center z-10">
            <RevealOnScroll delay={200}>
              <div className="origin-center lg:scale-[0.9] xl:scale-100">
                <LiveAppDemo />
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <section className="relative py-6 border-y border-zinc-200/80 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] backdrop-blur overflow-hidden">
        <div className="marquee-track flex gap-4 w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-4 shrink-0">
              {[
                { icon: Target,    label: 'Eisenhower Matrix' },
                { icon: Flame,     label: 'Habit Streaks' },
                { icon: Sparkles,  label: 'Karma System' },
                { icon: Bell,      label: 'Smart Reminders' },
                { icon: Repeat,    label: 'Recurring Tasks' },
                { icon: Timer,     label: 'Focus Timer' },
                { icon: Cloud,     label: 'Cross-Device Sync' },
                { icon: Palette,   label: '8 UI Designs' },
                { icon: BarChart3, label: 'Analytics' },
                { icon: Users,     label: 'Task Delegation' },
              ].map((tag) => (
                <div
                  key={tag.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-zinc-200 dark:border-white/10 whitespace-nowrap shrink-0"
                >
                  <tag.icon className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    {tag.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fdfbf7] dark:from-[#07070c] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fdfbf7] dark:from-[#07070c] to-transparent pointer-events-none" />
      </section>

      {/* ── TRUST BAR ── */}
      <section className="relative px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200/70 dark:border-white/10 backdrop-blur card-lift">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-start">
                  <div className="text-sm font-bold">{t('trust1Title')}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{t('trust1Desc')}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200/70 dark:border-white/10 backdrop-blur card-lift">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center shrink-0">
                  <Cloud className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                </div>
                <div className="text-start">
                  <div className="text-sm font-bold">{t('trust2Title')}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{t('trust2Desc')}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-zinc-200/70 dark:border-white/10 backdrop-blur card-lift">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="text-start">
                  <div className="text-sm font-bold">{t('trust3Title')}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{t('trust3Desc')}</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── 8 DESIGNS SHOWCASE ── */}
      <section id="designs" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider mb-4 badge-shimmer">
                <Wand2 className="w-3 h-3" />
                Signature feature
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-4">
                8 designs.
                <br />
                <span className="text-gradient-amber">One app.</span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Your productivity shouldn't look like everyone else's. Switch interfaces anytime — the data stays the same.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Layers,     name: 'Binder',     desc: 'Leather notebook',    color: 'from-amber-700 to-amber-900' },
              { icon: LayoutGrid, name: 'Kanban',     desc: 'Board columns',       color: 'from-sky-500 to-indigo-600' },
              { icon: Boxes,      name: 'Honeycomb',  desc: 'Hexagon hive',        color: 'from-amber-400 to-orange-500' },
              { icon: Wand2,      name: 'Tarot Deck', desc: 'Card shuffle',        color: 'from-violet-500 to-fuchsia-500' },
              { icon: Radar,      name: 'Detective',  desc: 'Investigation board', color: 'from-zinc-700 to-zinc-900' },
              { icon: Target,     name: 'Radial',     desc: 'Circular matrix',     color: 'from-emerald-500 to-teal-600' },
              { icon: Shuffle,    name: 'Vending',    desc: 'Machine slots',       color: 'from-rose-500 to-pink-600' },
              { icon: Command,    name: 'Stacked',    desc: 'Floating cards',      color: 'from-indigo-500 to-violet-600' },
            ].map((d, i) => (
              <RevealOnScroll key={d.name} delay={i * 50}>
                <div className="group relative p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 card-lift overflow-hidden">
                  <div className={`relative aspect-square rounded-2xl bg-gradient-to-br ${d.color} mb-4 overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.4), transparent 50%)',
                      }}
                    />
                    <d.icon className="relative w-10 h-10 text-white drop-shadow-lg" />
                    <div className="absolute bottom-2 left-2 right-2 flex gap-1">
                      <div className="h-1 flex-1 rounded-full bg-white/30" />
                      <div className="h-1 w-1/3 rounded-full bg-white/30" />
                    </div>
                  </div>
                  <div className="text-start">
                    <div className="text-sm font-black tracking-tight">{d.name}</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">{d.desc}</div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 badge-shimmer">
                <Rocket className="w-3 h-3" />
                {t('howBadge')}
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-4">
                {t('howTitle')}
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                {t('howSub')}
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0" />

            {[
              { icon: UserPlus, step: t('howStep1Label'), title: t('howStep1Title'), desc: t('howStep1Desc'), color: 'from-amber-400 to-orange-500', delay: 0 },
              { icon: ListPlus, step: t('howStep2Label'), title: t('howStep2Title'), desc: t('howStep2Desc'), color: 'from-orange-400 to-rose-500', delay: 100 },
              { icon: Rocket,   step: t('howStep3Label'), title: t('howStep3Title'), desc: t('howStep3Desc'), color: 'from-violet-400 to-fuchsia-500', delay: 200 },
            ].map((s) => (
              <RevealOnScroll key={s.step} delay={s.delay}>
                <div className="relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 card-lift">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-black text-amber-600 dark:text-amber-400 tracking-widest mb-2">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-black tracking-tight mb-3">{s.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 badge-shimmer">
                <Sparkles className="w-3 h-3" />
                {t('featBadge')}
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-[1.05]">
                {t('featTitle1')}
                <br />
                <span className="text-zinc-400 dark:text-zinc-500">{t('featTitle2')}</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RevealOnScroll className="md:col-span-2">
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-amber-500/40 hover:border-amber-500/70 transition card-lift">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3">{t('feat1Title')}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">{t('feat1Desc')}</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="h-full p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 card-lift">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-5">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-black tracking-tight mb-2">{t('feat2Title')}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t('feat2Desc')}</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <div className="h-full p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 card-lift">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center mb-5">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-black tracking-tight mb-2">{t('feat3Title')}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t('feat3Desc')}</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="h-full p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 card-lift">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center mb-5">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-black tracking-tight mb-2">{t('feat4Title')}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t('feat4Desc')}</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={250}>
              <div className="h-full p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 card-lift">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-5">
                  <Timer className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-black tracking-tight mb-2">{t('feat5Title')}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t('feat5Desc')}</p>
              </div>
            </RevealOnScroll>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <RevealOnScroll>
              <div className="h-full p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 card-lift">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-zinc-600 to-zinc-800 flex items-center justify-center mb-5">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-black tracking-tight mb-2">{t('feat6Title')}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t('feat6Desc')}</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="h-full p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 card-lift">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center mb-5">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-black tracking-tight mb-2">{t('feat7Title')}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t('feat7Desc')}</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 badge-shimmer">
                <Globe className="w-3 h-3" />
                {t('platBadge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-4">
                {t('platTitle')}
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                {t('platSub')}
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RevealOnScroll>
              <a href={APP_URL} className="group p-6 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-amber-500/40 hover:border-amber-500 transition flex items-center gap-4 card-lift">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-black" />
                </div>
                <div className="text-start flex-1">
                  <div className="text-sm font-black tracking-tight">{t('platWeb')}</div>
                  <div className="text-xs text-amber-600 dark:text-amber-400 font-semibold">{t('platWebAvail')} →</div>
                </div>
              </a>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="h-full p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center gap-4 opacity-80 card-lift">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center shrink-0">
                  <Apple className="w-6 h-6 text-white dark:text-black" />
                </div>
                <div className="text-start flex-1">
                  <div className="text-sm font-black tracking-tight">{t('platIOS')}</div>
                  <div className="text-xs text-zinc-500 font-semibold">{t('platComing')}</div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="h-full p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center gap-4 opacity-80 card-lift">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0">
                  <PlayCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-start flex-1">
                  <div className="text-sm font-black tracking-tight">{t('platAndroid')}</div>
                  <div className="text-xs text-zinc-500 font-semibold">{t('platComing')}</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 badge-shimmer">
                <Star className="w-3 h-3" />
                {t('testBadge')}
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05]">
                {t('testTitle')}
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { quote: t('test1Quote'), name: t('test1Name'), role: t('test1Role'), color: 'from-amber-400 to-orange-500', delay: 0 },
              { quote: t('test2Quote'), name: t('test2Name'), role: t('test2Role'), color: 'from-violet-400 to-fuchsia-500', delay: 100 },
              { quote: t('test3Quote'), name: t('test3Name'), role: t('test3Role'), color: 'from-emerald-400 to-teal-500', delay: 200 },
            ].map((tc) => (
              <RevealOnScroll key={tc.name} delay={tc.delay}>
                <div className="h-full p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex flex-col card-lift">
                  <Quote className="w-6 h-6 text-amber-500/60 dark:text-amber-400/50 mb-4 rtl:scale-x-[-1]" />
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 flex-1">{tc.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${tc.color} flex items-center justify-center font-bold text-sm text-white shrink-0`}>
                      {tc.name[0]}
                    </div>
                    <div className="text-start">
                      <div className="text-sm font-bold">{tc.name}</div>
                      <div className="text-xs text-zinc-500">{tc.role}</div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 badge-shimmer">
                {t('priceBadge')}
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-4">
                {t('priceTitle')}
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                {t('priceSub')}
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-4">

            <RevealOnScroll>
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex flex-col shadow-lg shadow-zinc-900/5 dark:shadow-black/30 card-lift">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">{t('priceFree')}</div>
                <div className="text-5xl font-black mb-2 text-zinc-900 dark:text-white">
                  $0<span className="text-lg font-normal text-zinc-500">{t('priceFreePer')}</span>
                </div>
                <p className="text-sm text-zinc-500 mb-6">{t('priceFreeSub')}</p>
                <ul className="space-y-3 mb-8 text-sm flex-1">
                  {[t('heroCheck1'), '8 UI designs', 'Habits', 'Focus timer', 'Local storage'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                      <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={APP_URL} className="block text-center py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:hover:bg-white/20 text-zinc-900 dark:text-white font-bold transition no-select">
                  {t('priceGetStarted')}
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="relative h-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-amber-500 flex flex-col shadow-xl shadow-amber-500/20 card-lift">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black text-[10px] font-black uppercase tracking-wider whitespace-nowrap shadow-lg shadow-amber-500/30">
                  {t('pricePopular')}
                </div>
                <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-3">{t('pricePro')}</div>
                <div className="text-5xl font-black mb-2 text-zinc-900 dark:text-white">
                  $4<span className="text-lg font-normal text-zinc-500">{t('priceFreePer')}</span>
                </div>
                <p className="text-sm text-zinc-500 mb-6">{t('priceProSub')}</p>
                <ul className="space-y-3 mb-8 text-sm flex-1">
                  {['Everything in Free', 'Cross-device sync', 'Cloud backup', 'Priority support', 'Advanced analytics'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                      <span className="text-zinc-800 dark:text-zinc-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <button disabled className="block w-full text-center py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold cursor-not-allowed no-select">
                  {t('priceComing')}
                </button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative h-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-violet-500 flex flex-col shadow-xl shadow-violet-500/20 card-lift">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[10px] font-black uppercase tracking-wider whitespace-nowrap shadow-lg shadow-violet-500/30">
                  {t('priceBestValue')}
                </div>
                <div className="flex items-center gap-1.5 mb-3">
                  <InfinityIcon className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                  <div className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">{t('priceLife')}</div>
                </div>
                <div className="text-5xl font-black mb-2 text-zinc-900 dark:text-white">
                  $99<span className="text-lg font-normal text-zinc-500"> {t('priceLifeOnce')}</span>
                </div>
                <p className="text-sm text-zinc-500 mb-6">{t('priceLifeSub')}</p>
                <ul className="space-y-3 mb-8 text-sm flex-1">
                  {['Everything in Pro', 'No monthly fees, ever', 'All future updates', 'Early access', 'Founder support', '5-year price lock'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-violet-500 dark:text-violet-400 shrink-0" />
                      <span className="text-zinc-800 dark:text-zinc-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <button disabled className="block w-full text-center py-3.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold cursor-not-allowed no-select">
                  {t('priceComing')}
                </button>
              </div>
            </RevealOnScroll>

          </div>

          <p className="text-center text-xs text-zinc-500 mt-8">{t('priceFooter')}</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 badge-shimmer">
                {t('faqBadge')}
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05]">
                {t('faqTitle')}
              </h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-3">
            {[
              { q: t('faq1Q'), a: t('faq1A') },
              { q: t('faq2Q'), a: t('faq2A') },
              { q: t('faq3Q'), a: t('faq3A') },
              { q: t('faq4Q'), a: t('faq4A') },
              { q: t('faq5Q'), a: t('faq5A') },
              { q: t('faq6Q'), a: t('faq6A') },
            ].map((item, i) => (
              <RevealOnScroll key={item.q} delay={i * 40}>
                <details className="group p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-amber-500/40 transition card-lift">
                  <summary className="font-bold cursor-pointer list-none flex items-center justify-between">
                    <span>{item.q}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-500 group-open:rotate-90 rtl:rotate-180 rtl:group-open:-rotate-90 transition-transform shrink-0 ms-3" />
                  </summary>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.a}</p>
                </details>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <div className="relative overflow-hidden p-10 md:p-12 rounded-3xl bg-gradient-to-br from-amber-500/15 via-orange-500/8 to-transparent border-2 border-amber-500/40">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-radial from-amber-500/40 to-transparent blur-3xl pointer-events-none" />
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 mb-6 shadow-lg shadow-amber-500/30">
                  <Mail className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-3">{t('waitTitle')}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">{t('waitSub')}</p>

                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder={t('waitPlaceholder')}
                    className="flex-1 px-5 py-3.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-white/15 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-amber-500 transition"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-bold text-sm transition shadow-lg shadow-amber-500/25 whitespace-nowrap shine-hover no-select"
                  >
                    {t('waitButton')}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </form>

                <p className="text-xs text-zinc-500 mt-4">{t('waitFooter')}</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <RevealOnScroll>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-6">
              {t('ctaTitle1')}
              <br />
              <span className="text-gradient-amber">
                {t('ctaTitle2')}
              </span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">{t('ctaSub')}</p>
            <a
              href={APP_URL}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full
                         bg-gradient-to-r from-amber-400 to-orange-500
                         hover:from-amber-300 hover:to-orange-400
                         text-black font-black text-lg
                         shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60
                         hover:-translate-y-0.5
                         transition-all duration-500 shine-hover no-select"
            >
              {t('ctaButton')}
              <ArrowRight className="w-5 h-5 rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-black/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-sm">
                  M
                </div>
                <span className="font-bold text-lg">MerakiList</span>
              </div>
              <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">{t('footerTagline')}</p>
            </div>

            <div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">{t('footerProduct')}</div>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><a href={APP_URL} className="hover:text-zinc-900 dark:hover:text-white transition">{t('footerApp')}</a></li>
                <li><a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition">{t('navFeatures')}</a></li>
                <li><a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white transition">{t('navPricing')}</a></li>
                <li><a href="#faq" className="hover:text-zinc-900 dark:hover:text-white transition">{t('navFAQ')}</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">{t('footerLegal')}</div>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><a href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition">{t('footerPrivacy')}</a></li>
                <li><a href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition">{t('footerTerms')}</a></li>
                <li>
                  <a href="https://github.com/EnimaDz007" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition inline-flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div>© 2026 MerakiList. {t('footerRights')}</div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1">
                <Shield className="w-3 h-3" /> HTTPS
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> GDPR-ready
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}