import {
  ArrowLeft, FileText, Users, Ban, AlertTriangle, Shield, Scale, Mail,
} from 'lucide-react';

const APP_URL = 'https://merakilist.vercel.app';
const EFFECTIVE_DATE = 'October 9, 2026';
const CONTACT_EMAIL = 'legal@merakilist.app';

export const metadata = {
  title: 'Terms of Service — MerakiList',
  description: 'The rules for using MerakiList.',
};

export default function TermsPage() {
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
            <FileText className="w-3.5 h-3.5" />
            Terms of Service
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Fair terms. Plain English.
          </h1>
          <p className="text-lg text-slate-600">
            No legalese traps. No hidden clauses. Just the rules of using MerakiList.
          </p>
          <p className="text-sm text-slate-500 mt-4">
            <strong>Effective:</strong> {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <article className="max-w-3xl mx-auto px-6 py-12 space-y-12 text-slate-700 leading-relaxed">

        <Section icon={FileText} title="1. Agreement">
          <p>
            By creating an account or using MerakiList ("the Service"), you agree to these Terms.
            If you don't agree, don't use the Service. We're allowed to update these Terms; if we
            make material changes, we'll notify you in-app. Continued use after that means you accept
            the new version.
          </p>
        </Section>

        <Section icon={Users} title="2. Your account">
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be at least 13 years old (16 in the EU).</li>
            <li>You're responsible for keeping your login secure.</li>
            <li>One person, one account. Don't share credentials or impersonate others.</li>
            <li>You're responsible for everything done through your account.</li>
            <li>You can delete your account anytime by contacting us.</li>
          </ul>
        </Section>

        <Section icon={Shield} title="3. Your content">
          <p>
            <strong>You own your tasks, habits, milestones, and everything else you create.</strong>{' '}
            We don't claim any rights to your content. We only store and process it to run the
            Service for you — nothing else. We never look at your content except when you ask us
            to for support, or when legally compelled.
          </p>
          <p className="mt-3">
            By using the Service, you grant us a limited license to store, sync, and display your
            content back to you. That license ends when you delete the content or your account.
          </p>
        </Section>

        <Section icon={Ban} title="4. What you can't do">
          <p>Don't use MerakiList to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Break any law.</li>
            <li>Store or transmit illegal, harmful, or infringing content.</li>
            <li>Abuse, harass, or threaten others.</li>
            <li>Reverse-engineer, scrape, or attack the Service.</li>
            <li>Resell access without our permission.</li>
            <li>Use bots or automated scripts to create accounts or spam the API.</li>
          </ul>
          <p className="mt-3">
            We may suspend or terminate accounts that violate these rules. If your account is
            terminated for cause, you won't get a refund for any paid features.
          </p>
        </Section>

        <Section icon={AlertTriangle} title="5. Service availability">
          <p>
            We aim for high uptime but we don't guarantee it. The Service is provided{' '}
            <strong>"as is"</strong> and <strong>"as available."</strong> We're not liable for
            lost data, missed deadlines, or any indirect damages caused by the Service being down,
            slow, or buggy. Back up anything critical (export from Settings → Backup).
          </p>
        </Section>

        <Section icon={FileText} title="6. Free and paid plans">
          <p>
            The Free plan is free forever. Paid plans (when available) are billed through the app
            store or our payment processor. Subscriptions renew automatically unless cancelled.
            Cancel anytime; you keep access until the end of the current billing period.
          </p>
          <p className="mt-3">
            <strong>Refunds:</strong> For App Store purchases, refunds follow Apple's policy. For
            web purchases, contact us within 14 days for a full refund — no questions asked.
          </p>
        </Section>

        <Section icon={Scale} title="7. Intellectual property">
          <p>
            The MerakiList name, logo, and code are ours. Your content is yours. If you send us
            feedback or feature requests, we can use them freely to improve the Service.
          </p>
        </Section>

        <Section icon={AlertTriangle} title="8. Limitation of liability">
          <p>
            To the maximum extent allowed by law, MerakiList's total liability to you is limited
            to what you've paid us in the last 12 months (or $0 if you're on the Free plan). We're
            not liable for lost profits, data, or business opportunities.
          </p>
          <p className="mt-3">
            Some jurisdictions don't allow these limits — in that case, the limits don't apply to you.
          </p>
        </Section>

        <Section icon={Scale} title="9. Termination">
          <p>
            You can stop using the Service anytime. We can suspend or terminate your access if you
            violate these Terms. When terminated, your license to use the Service ends immediately.
            Sections 3, 7, 8, and 10 survive termination.
          </p>
        </Section>

        <Section icon={Shield} title="10. Governing law">
          <p>
            These Terms are governed by the laws of <strong>Algeria</strong>, where our team is based,
            without regard to conflict-of-law rules. Any disputes will be resolved in the courts of
            Algiers, unless local consumer protection law requires otherwise.
          </p>
        </Section>

        <Section icon={Mail} title="11. Contact">
          <p>
            Questions about these Terms? Email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-indigo-600 hover:text-indigo-700 font-semibold underline">
              {CONTACT_EMAIL}
            </a>.
          </p>
        </Section>

        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            By continuing to use MerakiList, you confirm you've read and agreed to these Terms
            and our <a href="/privacy" className="text-indigo-600 underline">Privacy Policy</a>.
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
              <a href="/privacy" className="hover:text-white transition">Privacy</a>
              <a href="/terms" className="hover:text-white transition text-white">Terms</a>
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