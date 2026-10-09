'use client';

import { useEffect, useState, useRef } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../lib/useLanguage';
import type { Lang } from '../lib/translations';

const OPTIONS: { code: Lang; label: string; native: string; flag: string }[] = [
  { code: 'en', label: 'English',  native: 'English',  flag: '🇬🇧' },
  { code: 'fr', label: 'French',   native: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'Arabic',   native: 'العربية',  flag: '🇩🇿' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open]);

  if (!mounted) return <div className="w-10 h-10" aria-hidden="true" />;

  const current = OPTIONS.find((o) => o.code === lang) ?? OPTIONS[0];

  return (
    <div ref={ref} className="relative">
      {/* Trigger — always visible, matches the pill's icon buttons */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-expanded={open}
        className={`
          relative w-10 h-10 rounded-full flex items-center justify-center
          border transition-all duration-300 no-select
          ${open
            ? 'bg-gradient-to-br from-amber-400/20 to-orange-500/20 border-amber-500/60 shadow-lg shadow-amber-500/20'
            : 'bg-white/60 dark:bg-white/5 border-zinc-200 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 hover:border-amber-500/40 hover:scale-105'
          }
        `}
      >
        <span className="text-lg leading-none">{current.flag}</span>
        {/* Notification dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-sm" />
      </button>

      {/* Floating dropdown — detached with gap */}
      {open && (
        <>
          {/* Soft backdrop blur halo */}
          <div
            className="fixed inset-0 -z-10 bg-black/5 dark:bg-black/20 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div
            className="picker-pop absolute top-14 right-0 z-50 min-w-[220px] rounded-2xl overflow-hidden
                       bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl
                       border border-zinc-200/80 dark:border-white/10
                       shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
          >
            {/* Top gradient accent */}
            <div className="h-[2px] w-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500" />

            {/* Header */}
            <div className="px-4 pt-4 pb-2">
              <div className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500">
                Language
              </div>
            </div>

            {/* Options */}
            <div className="px-2 pb-3">
              {OPTIONS.map((opt, i) => {
                const isActive = opt.code === lang;
                return (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLang(opt.code);
                      setOpen(false);
                    }}
                    style={{ animationDelay: `${i * 40}ms` }}
                    className={`
                      group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                      text-start transition-all duration-200 no-select
                      ${isActive
                        ? 'bg-gradient-to-r from-amber-500/15 to-orange-500/10 border border-amber-500/30'
                        : 'border border-transparent hover:bg-zinc-100/80 dark:hover:bg-white/5'
                      }
                    `}
                  >
                    <span className="text-xl leading-none shrink-0">{opt.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`text-sm font-bold tracking-tight truncate ${
                          isActive ? 'text-amber-700 dark:text-amber-300' : 'text-zinc-900 dark:text-white'
                        }`}
                      >
                        {opt.native}
                      </div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                        {opt.code}
                      </div>
                    </div>
                    {isActive && (
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-black stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}