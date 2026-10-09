'use client';

import { useEffect, useState } from 'react';

const HEXES = [
  { top: '8%',  left: '5%',  size: 80,  color: 'amber',  delay: 0,   duration: 9  },
  { top: '18%', left: '78%', size: 60,  color: 'orange', delay: 1.2, duration: 7  },
  { top: '45%', left: '12%', size: 100, color: 'amber',  delay: 0.6, duration: 11 },
  { top: '62%', left: '85%', size: 70,  color: 'rose',   delay: 2.1, duration: 8  },
  { top: '78%', left: '25%', size: 55,  color: 'orange', delay: 1.5, duration: 10 },
  { top: '88%', left: '65%', size: 90,  color: 'amber',  delay: 0.9, duration: 12 },
  { top: '30%', left: '45%', size: 45,  color: 'amber',  delay: 2.5, duration: 6  },
  { top: '72%', left: '55%', size: 65,  color: 'rose',   delay: 1.8, duration: 9  },
];

const COLOR_MAP: Record<string, string> = {
  amber:  'rgba(251, 191, 36, 0.55)',
  orange: 'rgba(249, 115, 22, 0.50)',
  rose:   'rgba(244, 63, 94, 0.40)',
};

const BORDER_MAP: Record<string, string> = {
  amber:  'rgba(251, 191, 36, 0.9)',
  orange: 'rgba(249, 115, 22, 0.85)',
  rose:   'rgba(244, 63, 94, 0.75)',
};

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
      aria-hidden="true"
    >
      {/* Warm radial glow — top center */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-radial from-amber-500/25 via-orange-500/5 to-transparent blur-3xl" />

      {/* Warm glow — bottom right */}
      <div className="absolute -bottom-[20%] right-[10%] w-[800px] h-[600px] bg-gradient-radial from-orange-500/20 via-rose-500/5 to-transparent blur-3xl" />

      {/* Floating hexagons */}
      {mounted &&
        HEXES.map((h, i) => (
          <div
            key={i}
            className="absolute hexagon"
            style={{
              top: h.top,
              left: h.left,
              width: h.size,
              height: h.size * 1.15,
              backgroundColor: COLOR_MAP[h.color],
              border: `1.5px solid ${BORDER_MAP[h.color]}`,
              animation: `hexFloat ${h.duration}s ease-in-out ${h.delay}s infinite`,
              willChange: 'transform, opacity',
            }}
          />
        ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
    </div>
  );
}