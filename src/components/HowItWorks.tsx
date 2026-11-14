import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/content';
import { UploadCloud, SlidersHorizontal, Share2, Check, Smartphone, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0D0E16]/80 border-t border-white/[0.06]" id="how-it-works">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            Effortless Workflow
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            From Synthetic to Human in{' '}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Three Simple Steps.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No complex node graphs or confusing prompt engineering. Humanify AI is engineered for lightning-fast mobile creativity.
          </p>
        </div>

        {/* 3 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between group hover:border-violet-500/40 transition-all duration-300"
            >
              {/* Top Step Pill & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-mono font-extrabold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-violet-300 group-hover:scale-110 group-hover:bg-violet-600/20 transition-all duration-300">
                    {idx === 0 && <UploadCloud className="w-6 h-6" />}
                    {idx === 1 && <SlidersHorizontal className="w-6 h-6" />}
                    {idx === 2 && <Share2 className="w-6 h-6" />}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Graphic Preview Card */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/[0.06] mt-4">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Verified Feature</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  {step.actionText}
                </div>
              </div>

              {/* Connector line for desktop */}
              {idx < 2 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-white/20">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Live Interactive Naturalizer Playground Preview */}
        <div className="mt-16 rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-violet-950/20 via-indigo-950/20 to-black/60 border border-white/[0.08] backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-left">
              <div className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-2">
                NPU Realtime Engine
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Experience 60 FPS Local Rendering on Android
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Optimized with Android NNAPI & Qualcomm Hexagon NPU drivers. Zero heating, zero battery drain, and instantaneous visual response.
              </p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.humanifyai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-violet-900/50 transition-colors"
            >
              <span>Install from Google Play</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
