import React, { useState } from 'react';
import { Sliders, Sparkles, Film, Sun, Eye, RotateCcw, Check, Download } from 'lucide-react';

export const InteractivePlayground: React.FC = () => {
  const [poreDensity, setPoreDensity] = useState(85);
  const [filmGrain, setFilmGrain] = useState(45);
  const [warmth, setWarmth] = useState(60);
  const [specular, setSpecular] = useState(50);
  const [isCopied, setIsCopied] = useState(false);

  const resetValues = () => {
    setPoreDensity(85);
    setFilmGrain(45);
    setWarmth(60);
    setSpecular(50);
  };

  const handleShare = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Compute live CSS filters and styles based on sliders
  const filterString = `
    contrast(${1 + (poreDensity - 50) * 0.003})
    brightness(${1 + (specular - 50) * 0.002})
    sepia(${(warmth - 50) * 0.004})
    saturate(${1 + (warmth - 50) * 0.003})
  `;

  return (
    <section className="relative py-20 sm:py-28 bg-[#0A0B10] border-t border-white/[0.06]">
      {/* Glow background */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Live Web Playground
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Test the Optical Engine{' '}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Right In Your Browser
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Simulate how our on-device NPU filters restore biological imperfections and analog chemistry in real time.
          </p>
        </div>

        {/* Playground Frame */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-black/60 border border-white/[0.08] backdrop-blur-2xl shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Canvas Viewport */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-cosmic-950 border border-white/[0.1] shadow-2xl">
                {/* Base Portrait */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                  alt="Interactive Naturalizer Simulation"
                  className="w-full h-full object-cover object-center transition-all duration-150"
                  style={{ filter: filterString }}
                />

                {/* Dynamic SVG Film Grain overlay */}
                <div
                  className="absolute inset-0 film-grain pointer-events-none mix-blend-overlay"
                  style={{ opacity: filmGrain / 100 }}
                />

                {/* Live Parameters HUD */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/70 backdrop-blur-md border border-white/10 text-emerald-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SIMULATION ENGINE
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/70 backdrop-blur-md border border-white/10 text-violet-300">
                    Pores: {poreDensity}% • Grain: {filmGrain}%
                  </span>
                </div>

                {/* Subsurface Warmth Tint */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-rose-500/10 pointer-events-none mix-blend-color"
                  style={{ opacity: warmth / 100 }}
                />
              </div>
            </div>

            {/* Calibration Controls */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">
                    Interactive Calibration
                  </span>
                </div>
                <button
                  onClick={resetValues}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Defaults
                </button>
              </div>

              {/* Slider 1: Micro-Pores */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-200 font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-violet-400" />
                    Dermis Micro-Pore Density
                  </span>
                  <span className="font-mono text-violet-300 font-semibold">{poreDensity}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={poreDensity}
                  onChange={(e) => setPoreDensity(Number(e.target.value))}
                  className="w-full h-2 bg-white/[0.08] rounded-lg appearance-none cursor-pointer accent-violet-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Waxy AI (0%)</span>
                  <span>Authentic Human (100%)</span>
                </div>
              </div>

              {/* Slider 2: Film Grain */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-200 font-medium flex items-center gap-2">
                    <Film className="w-4 h-4 text-amber-400" />
                    Chemical Film Grain (ISO Structure)
                  </span>
                  <span className="font-mono text-amber-300 font-semibold">{filmGrain}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filmGrain}
                  onChange={(e) => setFilmGrain(Number(e.target.value))}
                  className="w-full h-2 bg-white/[0.08] rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Zero Grain</span>
                  <span>Portra 800 Emulsion</span>
                </div>
              </div>

              {/* Slider 3: Analog Warmth */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-200 font-medium flex items-center gap-2">
                    <Sun className="w-4 h-4 text-orange-400" />
                    Analog Color Temperature & Warmth
                  </span>
                  <span className="font-mono text-orange-300 font-semibold">{warmth}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={warmth}
                  onChange={(e) => setWarmth(Number(e.target.value))}
                  className="w-full h-2 bg-white/[0.08] rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Cool Digital (4800K)</span>
                  <span>Analog Tungsten (3200K)</span>
                </div>
              </div>

              {/* Slider 4: Specular Lighting */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-200 font-medium flex items-center gap-2">
                    <Eye className="w-4 h-4 text-cyan-400" />
                    Specular Catchlight Depth
                  </span>
                  <span className="font-mono text-cyan-300 font-semibold">{specular}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={specular}
                  onChange={(e) => setSpecular(Number(e.target.value))}
                  className="w-full h-2 bg-white/[0.08] rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Flat Diffuse</span>
                  <span>Dimensional Studio</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.humanifyai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-violet-900/40 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Get Full Mobile App on Google Play</span>
                </a>
                <button
                  onClick={handleShare}
                  className="py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-semibold text-slate-300 transition-colors flex items-center justify-center gap-2"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied Preset!</span>
                    </>
                  ) : (
                    <span>Copy Preset Settings</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
