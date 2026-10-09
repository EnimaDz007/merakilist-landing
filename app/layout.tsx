import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
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

// Runs before React hydrates → prevents white flash when dark mode is on
const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('merakilist-theme');
      var prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = stored || (prefers ? 'dark' : 'light');
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}