import React from 'react';
import { GooglePlayBadge } from './GooglePlayBadge';
import { Sparkles, QrCode, ShieldCheck, Heart } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#0A0B10]">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-violet-600/25 via-indigo-600/20 to-purple-800/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 md:p-16 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-violet-950/30 border border-white/[0.12] backdrop-blur-3xl shadow-2xl relative overflow-hidden text-center">
          {/* Subtle decorative grid */}
          <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none" />

          {/* Floating glowing sparkles */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-200 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            Join 100,000+ Creators & Photographers
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Make Your Portraits{' '}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
              Feel Truly Alive?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Download Humanify AI on Google Play today. Breathe organic dermis texture, 35mm film grain, and authentic lighting depth into every AI creation—100% privately on your device.
          </p>

          {/* CTA & QR Code Area */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
            {/* Primary Google Play Badge */}
            <div className="flex flex-col items-center gap-3">
              <GooglePlayBadge size="lg" showRating={true} />
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified by Google Play Protect</span>
              </div>
            </div>

            <div className="hidden md:block h-16 w-px bg-white/10" />

            {/* Mobile Scan QR Pill */}
            <div className="flex items-center gap-3.5 p-3 pr-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              <div className="w-14 h-14 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md">
                {/* SVG QR Code Simulation */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-black" fill="currentColor">
                  {/* Position detection patterns */}
                  <rect x="5" y="5" width="30" height="30" rx="4" />
                  <rect x="10" y="10" width="20" height="20" fill="white" />
                  <rect x="14" y="14" width="12" height="12" fill="black" />
                  
                  <rect x="65" y="5" width="30" height="30" rx="4" />
                  <rect x="70" y="10" width="20" height="20" fill="white" />
                  <rect x="74" y="14" width="12" height="12" fill="black" />

                  <rect x="5" y="65" width="30" height="30" rx="4" />
                  <rect x="10" y="70" width="20" height="20" fill="white" />
                  <rect x="14" y="74" width="12" height="12" fill="black" />

                  {/* QR Data bits */}
                  <rect x="42" y="10" width="8" height="8" />
                  <rect x="52" y="18" width="6" height="6" />
                  <rect x="42" y="26" width="6" height="6" />
                  <rect x="10" y="45" width="8" height="8" />
                  <rect x="25" y="45" width="8" height="8" />
                  <rect x="45" y="45" width="10" height="10" />
                  <rect x="65" y="45" width="8" height="8" />
                  <rect x="80" y="45" width="8" height="8" />
                  <rect x="45" y="65" width="8" height="8" />
                  <rect x="60" y="65" width="12" height="6" />
                  <rect x="78" y="65" width="8" height="8" />
                  <rect x="50" y="80" width="10" height="10" />
                  <rect x="75" y="80" width="12" height="12" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-violet-400" />
                  Scan to Install
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Package: com.humanifyai
                </div>
                <div className="text-[10px] text-emerald-400">
                  Android 10+ Compatible
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for photographers, concept artists, and AI creators worldwide.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
