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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}