import React from 'react';
import { TRUST_PILLARS } from '../data/content';
import { ShieldCheck, Lock, CloudOff, Cpu, Database, EyeOff, CheckCircle2, ArrowRight } from 'lucide-react';

interface TrustArchitectureProps {
  onOpenPrivacy: () => void;
}

export const TrustArchitecture: React.FC<TrustArchitectureProps> = ({ onOpenPrivacy }) => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0A0B10] border-t border-white/[0.06]" id="architecture">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            Privacy-First By Design
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Your Face Never Leaves{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Your Phone.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Unlike cloud photo apps that harvest your facial data to train proprietary models, Humanify AI performs 100% of its inference locally on your device’s silicon.
          </p>
        </div>

        {/* 4 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Cpu className="w-6 h-6" />}
                  {idx === 1 && <CloudOff className="w-6 h-6" />}
                  {idx === 2 && <EyeOff className="w-6 h-6" />}
                  {idx === 3 && <Database className="w-6 h-6" />}
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20 mb-2 inline-block">
                  {pillar.tag}
                </span>

                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Telemetry Leaks</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Local Architecture Pipeline Diagram */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-white/[0.04] via-emerald-950/10 to-white/[0.02] border border-white/[0.08] backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-md text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <ShieldCheck className="w-4 h-4" />
                GOOGLE PLAY DATA SAFETY CERTIFIED
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Local Hardware Pipeline: Air-Gapped Image Flow
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                Photos are loaded into secure RAM, processed through optimized Quantized INT8 / FP16 neural kernels on your Snapdragon or Google Tensor NPU, and saved directly to external storage without touching a single network socket.
              </p>
              <button
                onClick={onOpenPrivacy}
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Read Full Google Play-Compliant Privacy Policy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Visual Architecture Flow Diagram */}
            <div className="w-full lg:w-auto flex-1 max-w-xl">
              <div className="p-4 sm:p-6 rounded-2xl bg-black/60 border border-white/[0.08] space-y-3 font-mono text-xs">
                {/* Node 1: Photo Ingestion */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    <span className="text-slate-200">1. User Photo Ingestion</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Android Scoped Storage</span>
                </div>

                {/* Node 2: Local NPU */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold">2. On-Device NPU Execution</span>
                  </div>
                  <span className="text-[10px] bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                    RAM Sandbox
                  </span>
                </div>

                {/* Cloud Block Warning (Visual proof) */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/20 text-rose-300">
                  <div className="flex items-center gap-3">
                    <CloudOff className="w-4 h-4 text-rose-400" />
                    <span>External Cloud Uplink</span>
                  </div>
                  <span className="text-[10px] font-bold text-rose-400 uppercase">BLOCKED & UNMAPPED</span>
                </div>

                {/* Node 3: Local SQLite & Gallery */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <Database className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-200">3. Saved to Local Vault / Gallery</span>
                  </div>
                  <span className="text-[10px] text-cyan-300">Private SQLite Sandbox</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
