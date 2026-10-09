import {
  CheckCircle2, Calendar, Target, Zap, Sparkles, Cloud,
  Smartphone, Timer, ArrowRight, Star, Shield, Github, Mail,
} from 'lucide-react';

const APP_URL = 'https://merakilist.vercel.app';

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-black text-sm">
              ML
            </div>
            <span className="font-bold text-lg">MerakiList</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
          </div>
          <a
            href={APP_URL}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition"
          >
            Try it <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-gradient text-white">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Now with cross-device sync</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 animate-slide-up">
            Stop juggling.
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Start finishing.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 animate-slide-up">
            The Eisenhower matrix, habits with streaks, and karma rewards.
            Built for people who actually want to get things done.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up">
            <a
              href={APP_URL}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-base transition shadow-xl shadow-indigo-500/20"
            >
              Get started free <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/20 hover:bg-white/5 text-white font-semibold text-base transition"
            >
              See features
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Works offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              Features
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Everything you need.
              <br />
              Nothing you don't.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Six features that actually change how you work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Eisenhower Matrix',
                desc: 'Sort every task into four quadrants: do first, schedule, delegate, eliminate. Finally know what matters.',
                color: 'from-red-500 to-rose-600',
              },
              {
                icon: Calendar,
                title: 'Habits & Streaks',
                desc: 'Build daily routines with check-ins, streaks, and progress tracking. Watch small wins compound.',
                color: 'from-orange-500 to-amber-600',
              },
              {
                icon: Sparkles,
                title: 'Karma System',
                desc: 'Earn karma for completing tasks. Level up from Novice to Legend. Productivity becomes addictive.',
                color: 'from-violet-500 to-fuchsia-600',
              },
              {
                icon: Cloud,
                title: 'Sync Across Devices',
                desc: 'Your tasks, habits, and milestones sync automatically. Start on your phone, finish on your laptop.',
                color: 'from-sky-500 to-indigo-600',
              },
              {
                icon: Timer,
                title: 'Focus Timer',
                desc: 'Pomodoro-style focus sessions tied to your tasks. Track deep work, silence distractions.',
                color: 'from-emerald-500 to-teal-600',
              },
              {
                icon: Smartphone,
                title: '8 Beautiful Designs',
                desc: 'From Binder to Tarot Deck to Detective Board. Pick the UI that matches your mood.',
                color: 'from-slate-700 to-slate-900',
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-200 bg-white"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-md`}>
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Simple, honest pricing.
            </h2>
            <p className="text-lg text-slate-600">
              Start free. Upgrade when you need more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="p-8 rounded-3xl bg-white border-2 border-slate-200">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Free</div>
              <div className="text-4xl font-black mb-6">
                $0<span className="text-base font-normal text-slate-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {[
                  'Unlimited tasks',
                  'All 8 UI designs',
                  'Habits with streaks',
                  'Focus timer',
                  'Local storage',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={APP_URL}
                className="block text-center py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition"
              >
                Get started
              </a>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-black uppercase tracking-wider">
                Coming soon
              </div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Pro</div>
              <div className="text-4xl font-black mb-6">
                $4<span className="text-base font-normal text-slate-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {[
                  'Everything in Free',
                  'Cross-device sync',
                  'Cloud backup',
                  'Priority support',
                  'Advanced analytics',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="block w-full text-center py-3 rounded-xl bg-white/10 text-slate-400 font-bold cursor-not-allowed"
              >
                Notify me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Questions, answered.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Is MerakiList really free?',
                a: 'Yes. The Free plan includes unlimited tasks, all 8 UI designs, habits, and the focus timer. No credit card required, ever.',
              },
              {
                q: 'How does sync work?',
                a: 'Sign in with Google or Apple, and your tasks, habits, and milestones sync automatically across every device. Your data is encrypted in transit.',
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
                className="group p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition"
              >
                <summary className="font-bold cursor-pointer list-none flex items-center justify-between">
                  <span>{item.q}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Ready to actually get things done?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join the people who replaced their messy to-do list with a system that works.
          </p>
          <a
            href={APP_URL}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-black text-lg transition shadow-2xl"
          >
            Start now — it's free <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-black text-xs">
                ML
              </div>
              <span className="font-bold text-white">MerakiList</span>
              <span className="text-xs">© 2026</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href={`${APP_URL}`} className="hover:text-white transition">App</a>
              <a href="/privacy" className="hover:text-white transition">Privacy</a>
              <a href="/terms" className="hover:text-white transition">Terms</a>
              <a
                href="https://github.com/EnimaDz007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}