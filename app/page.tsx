import {
  CheckCircle2, Calendar, Target, Zap, Sparkles, Cloud,
  Smartphone, Timer, ArrowRight, Star, Shield, Github,
  Quote, TrendingUp, Users, Flame, Infinity as InfinityIcon,
  Apple, PlayCircle, Globe, Mail, UserPlus, ListPlus, Rocket,
} from 'lucide-react';
import BackgroundAnimation from './components/BackgroundAnimation';
import ThemeToggle from './components/ThemeToggle';

const APP_URL = 'https://merakilist.vercel.app';

export default function Home() {
  return (
    <main className="relative min-h-screen text-zinc-900 dark:text-white transition-colors">

      <BackgroundAnimation />

      {/* ── FLOATING PILL NAV ── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-2 md:gap-4 px-4 md:px-5 py-2.5 rounded-full bg-white/90 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black/50">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-xs">
              ML
            </div>
            <span className="font-bold text-sm tracking-tight hidden sm:inline">MerakiList</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white transition">Pricing</a>
            <a href="#testimonials" className="hover:text-zinc-900 dark:hover:text-white transition">Reviews</a>
            <a href="#faq" className="hover:text-zinc-900 dark:hover:text-white transition">FAQ</a>
          </div>
          <ThemeToggle />
          <a
            href={APP_URL}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-bold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition"
          >
            Try it <ArrowRight className="w-3 h-3" />
          </a>
        </nav>
      </div>

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900/80 backdrop-blur border border-zinc-200 dark:border-white/10 text-xs font-medium text-amber-700 dark:text-amber-300 mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 dark:bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500 dark:bg-amber-400"></span>
            </span>
            Now with cross-device sync
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-8">
            Stop juggling.
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 dark:from-amber-300 dark:via-orange-400 dark:to-rose-400 bg-clip-text text-transparent">
              Start finishing.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The Eisenhower matrix, habits with streaks, and karma rewards.
            Built for people who actually want to get things done.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <a
              href={APP_URL}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-bold text-base transition shadow-2xl shadow-amber-500/25"
            >
              Get started free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-zinc-300 dark:border-white/15 hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-900 dark:text-white font-semibold text-base transition"
            >
              See how it works
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-zinc-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>Works offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="relative px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-zinc-200 dark:border-white/10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm font-bold">4.9 / 5.0</div>
              <div className="text-xs text-zinc-500 mt-0.5">Early user rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black tracking-tight">10,000+</div>
              <div className="text-xs text-zinc-500 mt-1">Tasks completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black tracking-tight">500+</div>
              <div className="text-xs text-zinc-500 mt-1">Beta users</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APP PREVIEW MOCKUP ── */}
      <section className="relative px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-zinc-200 dark:border-white/10 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black p-2 shadow-2xl shadow-zinc-900/10 dark:shadow-black/50">
            <div className="rounded-xl bg-white dark:bg-zinc-950 overflow-hidden border border-zinc-200 dark:border-white/5">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-200 dark:border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                <div className="ml-4 text-xs text-zinc-500">merakilist.vercel.app</div>
              </div>
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-red-500/5 dark:from-red-500/10 to-transparent border border-red-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Flame className="w-4 h-4 text-red-500 dark:text-red-400" />
                    <span className="text-xs font-bold text-red-600 dark:text-red-300 uppercase tracking-wider">Do First</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-zinc-200 dark:bg-white/10 w-3/4"></div>
                    <div className="h-2 rounded-full bg-zinc-200 dark:bg-white/10 w-1/2"></div>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-amber-500/5 dark:from-amber-500/10 to-transparent border border-amber-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-300 uppercase tracking-wider">Schedule</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-zinc-200 dark:bg-white/10 w-2/3"></div>
                    <div className="h-2 rounded-full bg-zinc-200 dark:bg-white/10 w-3/4"></div>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-sky-500/5 dark:from-sky-500/10 to-transparent border border-sky-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                    <span className="text-xs font-bold text-sky-600 dark:text-sky-300 uppercase tracking-wider">Delegate</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-zinc-200 dark:bg-white/10 w-1/2"></div>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-zinc-500/5 dark:from-zinc-500/10 to-transparent border border-zinc-300 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                    <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">Eliminate</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-zinc-200 dark:bg-white/10 w-2/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Rocket className="w-3 h-3" />
              How it works
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-4">
              Three steps. Done.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              From sign-up to your first completed task in under 60 seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0" />

            {[
              {
                icon: UserPlus,
                step: '01',
                title: 'Sign up in 5 seconds',
                desc: 'No forms, no passwords. Use Google, Apple, or a magic link. Your account is ready instantly.',
                color: 'from-amber-400 to-orange-500',
              },
              {
                icon: ListPlus,
                step: '02',
                title: 'Add tasks your way',
                desc: 'Type, paste, or dictate. MerakiList auto-sorts them into the Eisenhower matrix for you.',
                color: 'from-orange-400 to-rose-500',
              },
              {
                icon: Rocket,
                step: '03',
                title: 'Finish more, stress less',
                desc: 'Focus on the right things. Watch your karma grow. Sync across every device you own.',
                color: 'from-violet-400 to-fuchsia-500',
              },
            ].map((s) => (
              <div key={s.step} className="relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-black text-amber-600 dark:text-amber-400 tracking-widest mb-2">
                  STEP {s.step}
                </div>
                <h3 className="text-xl font-black tracking-tight mb-3">{s.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES (BENTO GRID) ── */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" />
              Features
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-[1.05]">
              Everything you need.
              <br />
              <span className="text-zinc-400 dark:text-zinc-500">Nothing you don't.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-amber-500/40 hover:border-amber-500/60 transition">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                <Target className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3">Eisenhower Matrix</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
                Sort every task into four quadrants: do first, schedule, delegate, eliminate.
                Finally know what actually matters — and stop pretending everything is urgent.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-5">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">Habits & Streaks</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Build daily routines. Watch small wins compound.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center mb-5">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">Karma System</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Earn karma. Level up from Novice to Legend.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center mb-5">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">Sync Everywhere</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Tasks, habits, and milestones. All in sync.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-5">
                <Timer className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">Focus Timer</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Pomodoro sessions tied to your tasks.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-zinc-600 to-zinc-800 flex items-center justify-center mb-5">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">8 Beautiful Designs</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Binder, Honeycomb, Tarot Deck, Detective Board, and more. Pick the UI that matches your mood.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center mb-5">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">Analytics & Reviews</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Weekly reviews, streak analytics, completion trends. See where your time actually goes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Globe className="w-3 h-3" />
              Everywhere you work
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-4">
              One app. Every device.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Use it now in your browser. Native iOS &amp; Android apps are landing soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href={APP_URL}
              className="group p-6 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-amber-500/40 hover:border-amber-500 transition flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-black" />
              </div>
              <div className="text-left flex-1">
                <div className="text-sm font-black tracking-tight">Web App</div>
                <div className="text-xs text-amber-600 dark:text-amber-400 font-semibold">Available now →</div>
              </div>
            </a>

            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center gap-4 opacity-80">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center shrink-0">
                <Apple className="w-6 h-6 text-white dark:text-black" />
              </div>
              <div className="text-left flex-1">
                <div className="text-sm font-black tracking-tight">iOS App</div>
                <div className="text-xs text-zinc-500 font-semibold">Coming soon</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center gap-4 opacity-80">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0">
                <PlayCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-left flex-1">
                <div className="text-sm font-black tracking-tight">Android App</div>
                <div className="text-xs text-zinc-500 font-semibold">Coming soon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Star className="w-3 h-3" />
              Loved by doers
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05]">
              Real people. Real progress.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                quote: "Finally an app that treats the Eisenhower matrix as a first-class citizen. I've replaced three tools with this one.",
                name: 'Sarah M.',
                role: 'Product Manager',
                color: 'from-amber-400 to-orange-500',
              },
              {
                quote: "The karma system is weirdly addictive. I've gone from 3 completed tasks a week to 30 without noticing.",
                name: 'Karim B.',
                role: 'Software Engineer',
                color: 'from-violet-400 to-fuchsia-500',
              },
              {
                quote: "The Honeycomb design made me want to open the app. Sounds silly but it changed everything about how I plan my day.",
                name: 'Lina K.',
                role: 'Designer',
                color: 'from-emerald-400 to-teal-500',
              },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex flex-col">
                <Quote className="w-6 h-6 text-amber-500/60 dark:text-amber-400/50 mb-4" />
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 flex-1">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-bold text-sm text-white`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              Pricing
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-4">
              Simple. Honest.
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Start free. Upgrade when you need more. Or own it forever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex flex-col shadow-lg shadow-zinc-900/5 dark:shadow-black/30">
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Free</div>
              <div className="text-5xl font-black mb-2 text-zinc-900 dark:text-white">
                $0<span className="text-lg font-normal text-zinc-500">/mo</span>
              </div>
              <p className="text-sm text-zinc-500 mb-6">Try it forever. No card needed.</p>
              <ul className="space-y-3 mb-8 text-sm flex-1">
                {[
                  'Unlimited tasks',
                  'All 8 UI designs',
                  'Habits with streaks',
                  'Focus timer',
                  'Local storage',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                    <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={APP_URL}
                className="block text-center py-3.5 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:hover:bg-white/20 text-zinc-900 dark:text-white font-bold transition"
              >
                Get started
              </a>
            </div>

            <div className="relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-amber-500 flex flex-col shadow-xl shadow-amber-500/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-black text-[10px] font-black uppercase tracking-wider whitespace-nowrap">
                Popular
              </div>
              <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-3">Pro</div>
              <div className="text-5xl font-black mb-2 text-zinc-900 dark:text-white">
                $4<span className="text-lg font-normal text-zinc-500">/mo</span>
              </div>
              <p className="text-sm text-zinc-500 mb-6">Billed monthly. Cancel anytime.</p>
              <ul className="space-y-3 mb-8 text-sm flex-1">
                {[
                  'Everything in Free',
                  'Cross-device sync',
                  'Cloud backup',
                  'Priority support',
                  'Advanced analytics',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                    <span className="text-zinc-800 dark:text-zinc-200">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="block w-full text-center py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold cursor-not-allowed"
              >
                Coming soon
              </button>
            </div>

            <div className="relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-violet-500 flex flex-col shadow-xl shadow-violet-500/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-violet-400 text-black text-[10px] font-black uppercase tracking-wider whitespace-nowrap">
                Best value
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <InfinityIcon className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <div className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">Lifetime</div>
              </div>
              <div className="text-5xl font-black mb-2 text-zinc-900 dark:text-white">
                $99<span className="text-lg font-normal text-zinc-500"> once</span>
              </div>
              <p className="text-sm text-zinc-500 mb-6">Pay once. Own it forever.</p>
              <ul className="space-y-3 mb-8 text-sm flex-1">
                {[
                  'Everything in Pro',
                  'No monthly fees, ever',
                  'All future updates',
                  'Early access to new features',
                  'Founder support',
                  '5-year price guarantee',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet-500 dark:text-violet-400 shrink-0" />
                    <span className="text-zinc-800 dark:text-zinc-200">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="block w-full text-center py-3.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold cursor-not-allowed"
              >
                Coming soon
              </button>
            </div>

          </div>

          <p className="text-center text-xs text-zinc-500 mt-8">
            All plans include the full app. Pro &amp; Lifetime just add sync + cloud features.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              FAQ
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05]">
              Questions, answered.
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Is MerakiList really free?',
                a: 'Yes. The Free plan includes unlimited tasks, all 8 UI designs, habits, and the focus timer. No credit card required, ever.',
              },
              {
                q: "What's the difference between Pro and Lifetime?",
                a: 'Pro is $4/month forever — flexible, cancel anytime. Lifetime is $99 once — you pay a single time and own the app for as long as it exists, with all future updates included. If you plan to use MerakiList for more than 2 years, Lifetime pays for itself.',
              },
              {
                q: 'How does sync work?',
                a: 'Sign in with Google or Apple, and your tasks, habits, and milestones sync automatically across every device. Your data is encrypted in transit.',
              },
              {
                q: 'When will the iOS and Android apps launch?',
                a: 'Both native apps are in active development. Join the waitlist below to be notified the moment they hit the App Store and Google Play.',
              },
              {
                q: 'Can I use it offline?',
                a: 'Yes. MerakiList works fully offline. Changes sync the moment you come back online.',
              },
              {
                q: 'What makes it different from Todoist or TickTick?',
                a: 'Two things: the Eisenhower matrix is a first-class citizen (not buried in settings), and the karma system turns productivity into a game.',
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition"
              >
                <summary className="font-bold cursor-pointer list-none flex items-center justify-between">
                  <span>{item.q}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-500 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden p-10 md:p-12 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border-2 border-amber-500/30">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 mb-6 shadow-lg shadow-amber-500/30">
                <Mail className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-3">
                Get notified when apps launch
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
                Join the waitlist and we'll email you the moment MerakiList hits the App Store and Google Play. No spam, ever.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 px-5 py-3.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-white/15 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-amber-500 transition"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-bold text-sm transition shadow-lg shadow-amber-500/25 whitespace-nowrap"
                >
                  Join waitlist
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <p className="text-xs text-zinc-500 mt-4">
                No credit card. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-6">
            Ready to actually
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-300 dark:to-orange-400 bg-clip-text text-transparent">
              get things done?
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            Join the people who replaced their messy to-do list with a system that works.
          </p>
          <a
            href={APP_URL}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-black text-lg transition shadow-2xl shadow-amber-500/25"
          >
            Start now — it's free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black font-black text-sm">
                  ML
                </div>
                <span className="font-bold text-lg">MerakiList</span>
              </div>
              <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
                The task app with the Eisenhower matrix, habits, karma, and 8 beautiful designs.
                Free forever.
              </p>
            </div>

            <div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Product</div>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><a href={APP_URL} className="hover:text-zinc-900 dark:hover:text-white transition">App</a></li>
                <li><a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white transition">Pricing</a></li>
                <li><a href="#faq" className="hover:text-zinc-900 dark:hover:text-white transition">FAQ</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Legal</div>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><a href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition">Privacy</a></li>
                <li><a href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition">Terms</a></li>
                <li>
                  <a
                    href="https://github.com/EnimaDz007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-900 dark:hover:text-white transition inline-flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div>© 2026 MerakiList. All rights reserved.</div>
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