'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[2px] pointer-events-none">
      <div
        className="h-full origin-left transition-[width] duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #fbbf24 0%, #f97316 60%, #f43f5e 100%)',
          boxShadow: '0 0 12px rgba(251,191,36,0.6)',
        }}
      />
    </div>
  );
}