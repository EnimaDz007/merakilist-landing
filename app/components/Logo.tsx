'use client';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  href?: string;
};

const SIZES = {
  sm: { hex: 34, icon: 'text-xs', word1: 'text-lg', word2: 'text-xl', gap: 'gap-3' },
  md: { hex: 44, icon: 'text-base', word1: 'text-xl', word2: 'text-2xl', gap: 'gap-3.5' },
  lg: { hex: 54, icon: 'text-lg', word1: 'text-2xl', word2: 'text-3xl', gap: 'gap-4' },
};

export default function Logo({ size = 'md', showWordmark = true, href = '/' }: LogoProps) {
  const s = SIZES[size];

  return (
    <a
      href={href}
      className={`flex items-center ${s.gap} group cursor-pointer no-select`}
      aria-label="MerakiList home"
    >
      {/* Hexagon mark with rotating gradient ring */}
      <div
        className="relative shrink-0 transition-transform duration-500 group-hover:scale-105"
        style={{ height: s.hex * 1.15, width: s.hex }}
      >
        {/* Rotating gradient ring (appears on hover) */}
        <div
          className="logo-gradient-ring absolute inset-[-3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
        />

        {/* Outer glow halo */}
        <div
          className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.5), transparent 70%)',
            filter: 'blur(10px)',
            transform: 'scale(1.5)',
          }}
        />

        {/* The main hexagon */}
        <div
          className="hexagon relative flex items-center justify-center transition-all duration-500"
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 55%, #f43f5e 100%)',
            boxShadow: '0 8px 24px rgba(251,191,36,0.4), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)',
          }}
        >
          {/* Inner shadow overlay */}
          <div
            className="hexagon absolute inset-[2px]"
            style={{
              background: 'linear-gradient(160deg, rgba(255,255,255,0.15), transparent 40%, rgba(0,0,0,0.25))',
            }}
          />
          {/* Monogram */}
          <span
            className={`relative font-black text-black ${s.icon} tracking-tighter`}
            style={{ textShadow: '0 1px 0 rgba(255,255,255,0.3)' }}
          >
            M
          </span>
        </div>
      </div>

      {/* Shimmering wordmark */}
      {showWordmark && (
        <div className={`flex flex-col leading-[0.9]`}>
          <span
            className={`logo-shimmer font-light tracking-tight ${s.word1}`}
          >
            Meraki
          </span>
          <span
            className={`logo-shimmer font-black tracking-tighter ${s.word2} -mt-1`}
          >
            List
          </span>
        </div>
      )}
    </a>
  );
}