import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './lib/LanguageProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'MerakiList — Task Priority & Habits',
  description: 'The Eisenhower matrix, habits with streaks, and karma rewards. All in one beautiful app.',
  keywords: ['productivity', 'task manager', 'eisenhower matrix', 'habits', 'todo app'],
  openGraph: {
    title: 'MerakiList — Task Priority & Habits',
    description: 'The Eisenhower matrix, habits with streaks, and karma rewards.',
    type: 'website',
  },
};

// Runs before React hydrates → sets theme, lang, and dir
// BEFORE first paint. Prevents "flash of wrong content" for
// dark-mode users and French/Arabic visitors.
const preHydrationScript = `
  (function() {
    try {
      var theme = localStorage.getItem('merakilist-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var finalTheme = theme || (prefersDark ? 'dark' : 'light');
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(finalTheme);

      var lang = localStorage.getItem('merakilist-lang');
      if (!lang) {
        var nav = (navigator.language || 'en').toLowerCase();
        if (nav.indexOf('fr') === 0) lang = 'fr';
        else if (nav.indexOf('ar') === 0) lang = 'ar';
        else lang = 'en';
      }
      document.documentElement.lang = lang;
      document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    } catch (e) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preHydrationScript }} />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}