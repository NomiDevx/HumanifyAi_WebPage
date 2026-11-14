import React, { useState } from 'react';
import { SIGNATURE_STYLES } from '../data/content';
import { Sliders, Sparkles, Camera, Film, Sun, Palette, Zap } from 'lucide-react';

export const SignatureStyles: React.FC = () => {
  const [selectedStyleId, setSelectedStyleId] = useState(SIGNATURE_STYLES[0].id);

  const selectedStyle = SIGNATURE_STYLES.find((s) => s.id === selectedStyleId) || SIGNATURE_STYLES[0];

  const getStyleIcon = (id: string) => {
    switch (id) {
      case 'natural-skin':
        return <Sparkles className="w-4 h-4" />;
      case 'soft-film':
        return <Film className="w-4 h-4" />;
      case 'studio-portrait':
        return <Camera className="w-4 h-4" />;
      case 'candid-vintage':
        return <Palette className="w-4 h-4" />;
      case 'crisp-detail':
        return <Zap className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#0D0E16]/80 border-t border-white/[0.06]" id="styles">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sliders className="w-3.5 h-3.5" />
            Bespoke Analog Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Five Signature Natural Styles.{' '}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              One Tap to Reality.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Each style is engineered with custom optical transfer curves to address distinct aesthetic goals—from high-fashion studio portraits to intimate 35mm film captures.
          </p>
        </div>

        {/* Style Selector Tabs (Horizontal Pills) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {SIGNATURE_STYLES.map((style) => {
            const isActive = style.id === selectedStyleId;
            return (
              <button
                key={style.id}
                onClick={() => setSelectedStyleId(style.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-900/50 scale-105 border border-white/20'
                    : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06]'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-violet-400'}>
                  {getStyleIcon(style.id)}
                </span>
                <span>{style.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
                  isActive ? 'bg-white/20 text-white' : 'bg-white/[0.05] text-slate-400'
                }`}>
                  {style.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Active Style Showcase Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-violet-950/20 border border-white/[0.1] backdrop-blur-2xl shadow-2xl relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Info & Calibration Sliders */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-mono font-bold text-violet-400/80">
                    {selectedStyle.number}
                  </span>
                  <span className="h-4 w-px bg-white/20" />
                  <span className="text-xs uppercase font-mono tracking-widest text-slate-400">
                    Preset #{selectedStyle.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    {selectedStyle.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedStyle.title}
                </h3>
                <div className="text-sm font-medium text-violet-300 mb-4">
                  {selectedStyle.tagline}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedStyle.description}
                </p>

                {/* Best For Callout */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-8">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Ideal Application
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200">
                    {selectedStyle.idealFor}
                  </div>
                </div>
              </div>

              {/* Hardware NPU Calibration Meters */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>STYLE TELEMETRY</span>
                  <span>TUNED VALUES</span>
                </div>

                {/* Parameter 1: Micro Texture */}
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                      Epidermal Micro-Pore Density
                    </span>
                    <span className="font-mono text-violet-300 font-semibold">
                      {selectedStyle.settings.microTexture}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-500"
                      style={{ width: `${selectedStyle.settings.microTexture}%` }}
                    />
                  </div>
                </div>

                {/* Parameter 2: Film Grain */}
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5 text-amber-400" />
                      Chemical Film Grain (ISO Emulation)
                    </span>
                    <span className="font-mono text-amber-300 font-semibold">
                      {selectedStyle.settings.grain}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-500"
                      style={{ width: `${selectedStyle.settings.grain}%` }}
                    />
                  </div>
                </div>

                {/* Parameter 3: Analog Warmth */}
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-cyan-400" />
                      Kelvin Warmth Rolloff
                    </span>
                    <span className="font-mono text-cyan-300 font-semibold">
                      {selectedStyle.settings.warmth}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                      style={{ width: `${selectedStyle.settings.warmth}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: High-Res Render Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-cosmic-950 border border-white/[0.1] shadow-2xl group">
                <img
                  src={selectedStyle.sampleImage}
                  alt={selectedStyle.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Simulated Film Grain Layer */}
                <div
                  className="absolute inset-0 film-grain pointer-events-none mix-blend-overlay"
                  style={{ opacity: selectedStyle.settings.grain / 100 }}
                />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Live Preset Pill Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="p-3 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-400">Current Output</div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {selectedStyle.title} Active
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-violet-300 bg-violet-950/60 px-2 py-1 rounded border border-violet-500/30">
                      NPU 60 FPS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Card Grid Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SIGNATURE_STYLES.map((style) => (
            <div
              key={style.id}
              onClick={() => setSelectedStyleId(style.id)}
              className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 text-left border ${
                style.id === selectedStyleId
                  ? 'bg-violet-600/15 border-violet-500/40 shadow-lg shadow-violet-950/40'
                  : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-violet-400">{style.number}</span>
                <span className="text-[10px] font-mono text-slate-400">{style.badge}</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">{style.title}</div>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {style.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
