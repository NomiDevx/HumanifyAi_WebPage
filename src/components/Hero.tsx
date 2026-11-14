import React from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { GooglePlayBadge } from './GooglePlayBadge';
import { Sparkles, ShieldCheck, Cpu, ChevronRight } from 'lucide-react';

interface HeroProps {
  onExploreFeatures?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFeatures }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* Background Cosmic Glow Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-violet-600/20 via-indigo-600/15 to-purple-800/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 cosmic-grid opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill */}
        <button
          onClick={onExploreFeatures}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] shadow-lg shadow-violet-950/40 backdrop-blur-xl mb-6 sm:mb-8 animate-pulse-subtle group hover:border-violet-500/40 transition-colors cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-violet-200 via-white to-indigo-200 bg-clip-text text-transparent">
            The AI Photo Naturalizer • Now Live on Google Play
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
        </button>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6">
          Turn Plastic AI Renders Into{' '}
          <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            Authentic, Human Portraits.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10 text-balance">
          Say goodbye to synthetic skin, overly smooth textures, and uncanny AI lighting. 
          <strong className="text-white font-semibold"> Humanify AI</strong> restores realistic skin pores, analog film warmth, organic depth, and authentic human micro-details in seconds.
        </p>

        {/* Call To Action Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-8">
          {/* Primary Google Play Badge */}
          <GooglePlayBadge size="lg" showRating={true} />

          {/* Secondary Action: Jump to Interactive Demo */}
          <a
            href="#comparison"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-white/[0.04] active:scale-95 w-full sm:w-auto"
          >
            <span>Interactive Demo</span>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400 mb-14">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Offline & Private</span>
          </div>
          <div className="hidden sm:inline text-slate-600">•</div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-violet-400" />
            <span>Zero Cloud Facial Tracking</span>
          </div>
          <div className="hidden sm:inline text-slate-600">•</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Compatible with Midjourney v6, SDXL & Flux</span>
          </div>
        </div>

        {/* Flagship Hero Interactive Before/After Split Slider */}
        <div className="relative pt-2">
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  );
};
