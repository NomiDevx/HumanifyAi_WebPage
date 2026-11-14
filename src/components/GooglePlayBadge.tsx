import React from 'react';

interface GooglePlayBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showRating?: boolean;
}

export const GooglePlayBadge: React.FC<GooglePlayBadgeProps> = ({
  className = '',
  size = 'md',
  showRating = false,
}) => {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.humanifyai';

  const sizeClasses = {
    sm: 'px-3.5 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  return (
    <div className={`inline-flex flex-col items-center sm:items-start gap-1.5 ${className}`}>
      <a
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative inline-flex items-center gap-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-violet-950/50 hover:shadow-violet-600/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${sizeClasses[size]}`}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10" />
        
        {/* Inner container */}
        <div className="flex items-center gap-3 w-full h-full">
          {/* Google Play Vector Icon */}
          <svg
            className={size === 'lg' ? 'w-8 h-8' : size === 'sm' ? 'w-5 h-5' : 'w-7 h-7'}
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.2 24.7C44.3 27.8 42.7 32.5 42.7 38.6V473.4C42.7 479.5 44.3 484.2 47.2 487.3L49.4 489.3L273.2 265.5V258.4L49.4 22.7L47.2 24.7Z"
              fill="url(#gp_grad1)"
            />
            <path
              d="M347.8 340.1L273.2 265.5V258.4L347.8 183.8L349.5 184.8L437.9 235C463.1 249.4 463.1 272.7 437.9 287.1L349.5 339.1L347.8 340.1Z"
              fill="url(#gp_grad2)"
            />
            <path
              d="M349.5 339.1L273.2 262.8L47.2 488.8C55.6 497.8 69.3 498.9 84.7 490.1L349.5 339.1Z"
              fill="url(#gp_grad3)"
            />
            <path
              d="M349.5 184.8L84.7 33.8C69.3 25.1 55.6 26.2 47.2 35.1L273.2 261.2L349.5 184.8Z"
              fill="url(#gp_grad4)"
            />
            <defs>
              <linearGradient id="gp_grad1" x1="253.9" y1="454.7" x2="11.4" y2="212.1" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00A0FF" />
                <stop offset="0.007" stopColor="#00A1FF" />
                <stop offset="0.26" stopColor="#00BEFF" />
                <stop offset="0.512" stopColor="#00D2FF" />
                <stop offset="0.76" stopColor="#00DFFF" />
                <stop offset="1" stopColor="#00E3FF" />
              </linearGradient>
              <linearGradient id="gp_grad2" x1="470.5" y1="262" x2="35.5" y2="262" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE000" />
                <stop offset="0.409" stopColor="#FFBD00" />
                <stop offset="0.775" stopColor="#FFA000" />
                <stop offset="1" stopColor="#FF9C00" />
              </linearGradient>
              <linearGradient id="gp_grad3" x1="300.7" y1="316.5" x2="90.5" y2="526.7" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3A44" />
                <stop offset="1" stopColor="#C31162" />
              </linearGradient>
              <linearGradient id="gp_grad4" x1="90.5" y1="-2.7" x2="300.7" y2="207.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#32A071" />
                <stop offset="0.068" stopColor="#2DA771" />
                <stop offset="0.476" stopColor="#15CF74" />
                <stop offset="0.801" stopColor="#06E775" />
                <stop offset="1" stopColor="#00F076" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-purple-200 uppercase">
              Get it on
            </span>
            <span className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Google Play
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
          </div>
        </div>
      </a>

      {showRating && (
        <div className="flex items-center gap-2 text-xs text-slate-400 px-1 pt-0.5">
          <div className="flex text-amber-400">
            {'★'.repeat(5)}
          </div>
          <span className="font-semibold text-slate-200">4.9</span>
          <span className="text-slate-500">•</span>
          <span>12.4k+ Reviews</span>
          <span className="text-slate-500">•</span>
          <span className="text-emerald-400 font-mono text-[11px]">com.humanifyai</span>
        </div>
      )}
    </div>
  );
};
