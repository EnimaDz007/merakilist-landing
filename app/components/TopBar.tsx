'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../lib/useLanguage';

const APP_URL = 'https://merakilist.vercel.app';

export default function TopBar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { href: '#features', label: t('navFeatures') },
    { href: '#pricing', label: t('navPricing') },
    { href: '#testimonials', label: t('navReviews') },
    { href: '#faq', label: t('navFAQ') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div className={`max-w-[1400px] mx-auto px-3 md:px-6 transition-all duration-500 ${scrolled ? 'pt-2' : 'pt-4'}`}>
          <div
            className={`
              premium-border relative flex items-center gap-3 md:gap-6
              px-3 md:px-5 py-2.5 md:py-3 rounded-2xl
              bg-white/70 dark:bg-zinc-950/70
              backdrop-blur-2xl
              shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.05)_inset]
              dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.03)_inset]
              transition-all duration-500
              ${scrolled ? 'py-2 md:py-2.5' : ''}
            `}
          >
            {/* ── LOGO (left) ── */}
            <div className="shrink-0">
              <Logo size={scrolled ? 'sm' : 'md'} showWordmark={true} href="/" />
            </div>

            {/* ── CENTER: nav links ── */}
            <nav className="hidden lg:flex items-center gap-1 ms-4 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="premium-link px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 no-select"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* ── RIGHT cluster ── */}
            <div className="flex items-center gap-2 md:gap-3 ms-auto">
              {/* Controls — grouped in a subtle sub-pill */}
              <div className="flex items-center gap-1 p-1 rounded-full bg-zinc-100/60 dark:bg-white/[0.03] border border-zinc-200/60 dark:border-white/5">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>

              {/* CTA — with pulsing glow */}
              <a
                href={APP_URL}
                className="
                  cta-glow relative hidden sm:inline-flex items-center gap-1.5
                  px-5 md:px-6 py-2.5 rounded-full
                  bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500
                  hover:from-amber-300 hover:via-orange-400 hover:to-rose-400
                  text-black text-sm font-bold tracking-tight
                  shadow-lg shadow-amber-500/30
                  hover:shadow-xl hover:shadow-amber-500/50
                  hover:-translate-y-0.5
                  transition-all duration-300
                  shine-hover no-select
                "
              >
                {t('tryIt')}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center
                           bg-zinc-100/60 dark:bg-white/[0.03]
                           border border-zinc-200/60 dark:border-white/5
                           text-zinc-900 dark:text-white no-select
                           hover:bg-zinc-200/60 dark:hover:bg-white/[0.08]
                           transition-colors"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[55] lg:hidden"
          style={{ animation: 'pickerPop 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div
            className="absolute inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-md"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-x-4 top-4 rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-zinc-100 dark:border-white/5">
              <Logo size="sm" />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 rounded-full flex items-center justify-center
                           bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10
                           text-zinc-700 dark:text-zinc-300 transition no-select"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="p-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-semibold
                             text-zinc-800 dark:text-zinc-200
                             hover:bg-zinc-100 dark:hover:bg-white/5
                             transition-colors no-select"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={APP_URL}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl
                           bg-gradient-to-r from-amber-400 to-orange-500
                           text-black font-bold no-select"
              >
                {t('tryIt')}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}