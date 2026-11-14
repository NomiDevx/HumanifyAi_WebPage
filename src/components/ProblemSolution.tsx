import React, { useState } from 'react';
import { PROBLEM_SOLUTION_ITEMS } from '../data/content';
import { AlertCircle, CheckCircle, ArrowRight, Zap, Sparkles } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <section className="relative py-20 sm:py-28 border-t border-white/[0.06] bg-[#0A0B10]" id="features">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            The Uncanny Valley Solved
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Why AI Portraits Look "Off"—and How We{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Restore Human Reality
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Generative diffusion models produce stunning concepts, but synthesize micro-textures with uncanny plastic artifacts. Humanify AI bridges the gap between raw compute and authentic optics.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Left Column: The Problem (Uncanny AI) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-rose-950/20 via-black/40 to-black/60 border border-rose-500/20 backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-rose-400">The Problem</span>
                  <h3 className="text-xl font-bold text-white">Uncanny AI Artifacts</h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-500/10 text-rose-300 border border-rose-500/20">
                Plastic & Dead
              </span>
            </div>

            <div className="space-y-4">
              {PROBLEM_SOLUTION_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                    selectedIdx === idx
                      ? 'bg-rose-500/10 border border-rose-500/30'
                      : 'bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-rose-300 uppercase tracking-wide">
                      {item.feature}
                    </span>
                    <span className="text-[10px] font-mono text-rose-400/80 bg-rose-950/50 px-2 py-0.5 rounded">
                      Synthetic Flaw
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mb-1">{item.problem}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.problemDesc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: The Solution (Humanify AI) */}
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-violet-950/30 via-indigo-950/20 to-black/60 border border-violet-500/30 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-violet-950/40">
            {/* Ambient accent top glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-violet-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-300 shadow-lg shadow-violet-500/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-violet-400">The Solution</span>
                  <h3 className="text-xl font-bold text-white">Humanify AI Naturalizer</h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Dermis Pores & Film
              </span>
            </div>

            <div className="space-y-4">
              {PROBLEM_SOLUTION_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                    selectedIdx === idx
                      ? 'bg-violet-600/20 border border-violet-500/40 shadow-lg shadow-violet-950/50'
                      : 'bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-violet-300 uppercase tracking-wide">
                      {item.feature}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      {item.badge}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    {item.solution}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">{item.solutionDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Feature Focus Card */}
        <div className="rounded-2xl p-4 sm:p-6 bg-white/[0.02] border border-white/[0.06] backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Active Calibration: {PROBLEM_SOLUTION_ITEMS[selectedIdx].feature}</div>
              <div className="text-xs text-slate-400">
                Switch between features above to inspect how each artificial artifact is replaced with organic physics.
              </div>
            </div>
          </div>

          <a
            href="#styles"
            className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors"
          >
            <span>Explore 5 Signature Natural Styles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
