import {
  ArrowLeft, ShieldCheck, Database, Users, Cookie, Trash2, Mail, Globe,
} from 'lucide-react';

const APP_URL = 'https://merakilist.vercel.app';
const EFFECTIVE_DATE = 'October 9, 2026';
const CONTACT_EMAIL = 'privacy@merakilist.app';

export const metadata = {
  title: 'Privacy Policy — MerakiList',
  description: 'How MerakiList collects, uses, and protects your data.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-black text-sm">
              ML
            </div>
            <span className="font-bold text-lg">MerakiList</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="/#features" className="hover:text-slate-900 transition">Features</a>
            <a href="/#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="/#faq" className="hover:text-slate-900 transition">FAQ</a>
          </div>
          <a
            href={APP_URL}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition"
          >
            Try it
          </a>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <a href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </a>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Privacy Policy
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Your data. Your rules.
          </h1>
          <p className="text-lg text-slate-600">
            This policy explains what we collect, why we collect it, and how you can control it.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            <strong>Effective:</strong> {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <article className="max-w-3xl mx-auto px-6 py-12 space-y-12 text-slate-700 leading-relaxed">

        <Section icon={Database} title="1. What we collect">
          <p>We collect only what's needed to run MerakiList:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong>Account information.</strong> When you sign in, we receive your email address,
              name, and profile picture from your chosen provider (Google, Apple, or email).
              We never see your password.
            </li>
            <li>
              <strong>Your content.</strong> The tasks, habits, milestones, and check-ins you
              create in the app. This is stored so we can sync it across your devices.
            </li>
            <li>
              <strong>Usage data.</strong> Anonymized analytics — page views, approximate
              country, device type. Used to spot bugs and improve the product.
            </li>
            <li>
              <strong>Error reports.</strong> When the app crashes, we capture a technical
              snapshot (browser, OS, stack trace) to fix the bug. No task contents are included.
            </li>
          </ul>
        </Section>

        <Section icon={Users} title="2. Who processes your data">
          <p>We use a small set of trusted service providers. Each is bound by their own privacy commitments:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Vercel</strong> — hosts the app and website.</li>
            <li><strong>Clerk</strong> — handles authentication and account management.</li>
            <li><strong>Firebase (Google)</strong> — stores your tasks, habits, and milestones.</li>
            <li><strong>Render</strong> — runs our backend server.</li>
            <li><strong>Sentry</strong> — collects anonymous crash reports.</li>
            <li><strong>Vercel Analytics</strong> — anonymous, cookieless page-view analytics.</li>
          </ul>
          <p className="mt-3">
            <strong>We do not sell your data.</strong> We do not share it with advertisers, data brokers,
            or any other third party.
          </p>
        </Section>

        <Section icon={Cookie} title="3. Cookies & tracking">
          <p>
            MerakiList uses <strong>only essential cookies</strong> for authentication. We do not use
            advertising cookies, cross-site trackers, or fingerprinting. Our analytics are cookieless.
          </p>
        </Section>

        <Section icon={Trash2} title="4. Your rights">
          <p>You can exercise any of these at any time:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li><strong>Access</strong> — view everything you've stored in the app at any time.</li>
            <li><strong>Export</strong> — download all your data as JSON or CSV from the Settings tab.</li>
            <li><strong>Delete</strong> — delete individual items, or delete your entire account by contacting us.</li>
            <li><strong>Correct</strong> — edit any content you've created.</li>
            <li><strong>Port</strong> — take your data with you (JSON export).</li>
            <li><strong>Opt out</strong> — disable analytics by using any tracker-blocking browser extension; the app works fine.</li>
          </ul>
          <p className="mt-3">
            If you're in the EU, UK, or California, you have additional statutory rights. Email us and we'll help.
          </p>
        </Section>

        <Section icon={Globe} title="5. Where your data lives">
          <p>
            Our servers and databases are located in the <strong>European Union (Frankfurt, Germany)</strong> and
            <strong>United States (Iowa)</strong>. If you access MerakiList from another region, your data is
            transferred to these locations for processing.
          </p>
        </Section>

        <Section icon={ShieldCheck} title="6. Security">
          <p>
            All traffic uses HTTPS/TLS. Authentication tokens are short-lived and rotated. Firestore
            rules restrict access so that only you can read your own data. Our team has zero direct
            access to your content except when strictly necessary to fix a bug you report.
          </p>
        </Section>

        <Section icon={Trash2} title="7. Data retention">
          <p>
            Your content lives as long as your account exists. When you delete a task, a tombstone
            is kept for <strong>30 days</strong> so the deletion syncs across your devices, then it's
            permanently erased. Account deletion removes everything within 30 days.
          </p>
        </Section>

        <Section icon={Users} title="8. Children">
          <p>
            MerakiList is not intended for children under 13 (or 16 in the EU). We do not knowingly
            collect data from children. If you believe a child has signed up, contact us and we'll
            delete the account.
          </p>
        </Section>

        <Section icon={Mail} title="9. Contact">
          <p>
            Questions, concerns, or data requests? Email us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 hover:text-indigo-700 font-semibold underline">
              {CONTACT_EMAIL}
            </a>. We respond within 7 days.
          </p>
        </Section>

        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            We may update this policy occasionally. If we make material changes, we'll notify you in-app.
            Continued use after changes means you accept the updated policy.
          </p>
        </div>

      </article>

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
              <a href={APP_URL} className="hover:text-white transition">App</a>
              <a href="/privacy" className="hover:text-white transition text-white">Privacy</a>
              <a href="/terms" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
          <Icon className="w-4.5 h-4.5" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900">{title}</h2>
      </div>
      <div className="text-slate-700">{children}</div>
    </section>
  );
}