import React, { useState, useRef, useCallback, useEffect } from 'react';
import { PORTRAIT_SAMPLES } from '../data/content';
import { Sparkles, Eye, Zap, Layers, RefreshCw, ZoomIn, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ className = '' }) => {
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showHotspots, setShowHotspots] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const activeSample = PORTRAIT_SAMPLES[activeSampleIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleInteractionEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleInteractionEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleInteractionEnd]);

  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`} id="comparison">
      {/* Sample Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-1">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5 mr-1">
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            Portraits:
          </span>
          {PORTRAIT_SAMPLES.map((sample, idx) => (
            <button
              key={sample.id}
              onClick={() => {
                setActiveSampleIndex(idx);
                setSliderPosition(50);
              }}
              className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 font-medium whitespace-nowrap ${
                activeSampleIndex === idx
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-900/50 scale-105'
                  : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]'
              }`}
            >
              {sample.name.split('—')[0].trim()}
              <span className="opacity-60 text-[10px] ml-1.5">({sample.category})</span>
            </button>
          ))}
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHotspots(!showHotspots)}
            className={`text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              showHotspots
                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'
            }`}
            title="Toggle Feature Annotation Callouts"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Annotations</span>
          </button>

          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className={`text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              isZoomed
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'
            }`}
            title="Inspect 2X Micro-Pore Zoom"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Macro 2X</span>
          </button>

          <button
            onClick={() => setSliderPosition(50)}
            className="text-xs px-2.5 py-1.5 rounded-lg bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
            title="Reset slider to center"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Slider Canvas Frame */}
      <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-violet-600/[0.15] shadow-2xl shadow-black/80">
        <div
          ref={containerRef}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
          className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-cosmic-950 group"
        >
          {/* Base Layer: AFTER (Humanify AI - Realistic Skin Texture & Natural Lighting) */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={activeSample.afterImg}
              alt="Humanify AI Naturalized Portrait"
              className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                isZoomed ? 'scale-150 origin-center' : 'scale-100'
              }`}
            />
            {/* Film Grain Subtle Simulation */}
            <div className="absolute inset-0 film-grain pointer-events-none mix-blend-overlay opacity-60" />
            {/* Soft Studio Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40 pointer-events-none" />

            {/* Label: Humanify AI (Right Side) */}
            <div className="absolute top-4 right-4 z-10 pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/70 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>HUMANIFY AI</span>
                <span className="text-[10px] text-emerald-400/80 font-normal hidden sm:inline">• Pores & Film Warmth</span>
              </div>
            </div>
          </div>

          {/* Top Layer: BEFORE (Synthetic AI - Over-smoothed, waxy, uncanny) */}
          <div
            className="absolute inset-0 top-0 left-0 h-full overflow-hidden will-change-[width]"
            style={{ width: `${sliderPosition}%` }}
          >
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
              }}
            >
              <img
                src={activeSample.beforeImg}
                alt="Synthetic AI Over-smoothed Portrait"
                className={`w-full h-full object-cover object-center filter blur-[1.2px] contrast-[1.12] brightness-[1.06] saturate-[1.2] transition-transform duration-500 ${
                  isZoomed ? 'scale-150 origin-center' : 'scale-100'
                }`}
              />
              {/* Synthetic Waxy Sheen Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-amber-200/15 mix-blend-screen pointer-events-none" />
              <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-[0.5px] pointer-events-none" />
            </div>

            {/* Label: Synthetic AI (Left Side) */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-950/70 backdrop-blur-md border border-rose-500/30 text-rose-300 text-xs font-semibold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                <span>SYNTHETIC AI</span>
                <span className="text-[10px] text-rose-300/80 font-normal hidden sm:inline">• Plastic & Waxy</span>
              </div>
            </div>
          </div>

          {/* Slider Divider Line */}
          <div
            className="absolute top-0 bottom-0 z-30 pointer-events-none will-change-[left]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="relative -left-[2px] h-full w-[4px] bg-gradient-to-b from-violet-400 via-white to-indigo-400 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />

            {/* Draggable Center Pill Handle */}
            <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0A0B10]/90 backdrop-blur-md border-2 border-white shadow-2xl flex items-center justify-center pointer-events-auto cursor-ew-resize group-hover:scale-110 active:scale-95 transition-transform duration-150">
              <div className="flex items-center gap-1 text-white">
                <span className="text-xs font-bold font-mono">◀</span>
                <span className="w-0.5 h-4 bg-white/40 rounded-full" />
                <span className="text-xs font-bold font-mono">▶</span>
              </div>
              {/* Pulsing glow ring */}
              <div className="absolute -inset-1 rounded-full bg-violet-500/30 animate-pulse -z-10" />
            </div>
          </div>

          {/* Interactive Feature Annotations Callouts */}
          {showHotspots && (
            <>
              {/* Hotspot 1: Cheek / Skin Pores */}
              <div
                className={`absolute top-[48%] transition-opacity duration-300 pointer-events-none z-20 ${
                  sliderPosition > 40 ? 'left-[22%]' : 'left-[55%]'
                }`}
              >
                <div className="glass-pill px-2.5 py-1 rounded-lg text-[11px] font-medium shadow-xl flex items-center gap-1.5 animate-bounce">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span className="text-slate-200">
                    {sliderPosition > 40 ? '⚠️ Erased pores & waxy sheen' : '✨ Restored natural dermis pores'}
                  </span>
                </div>
              </div>

              {/* Hotspot 2: Eyes / Cornea */}
              <div
                className={`absolute top-[32%] transition-opacity duration-300 pointer-events-none z-20 ${
                  sliderPosition > 60 ? 'left-[30%]' : 'left-[65%]'
                }`}
              >
                <div className="glass-pill px-2.5 py-1 rounded-lg text-[11px] font-medium shadow-xl flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-slate-200">
                    {sliderPosition > 60 ? '⚠️ Flat CGI iris glare' : '✨ Natural specular catchlights'}
                  </span>
                </div>
              </div>
            </>
          )}

          {/* Bottom Slider Helper Tip */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
            <div className="glass-pill px-3 py-1 rounded-full text-[11px] text-slate-300 font-mono tracking-tight flex items-center gap-1.5 shadow-md">
              <span>Drag handle horizontally to compare</span>
              <span className="text-violet-400 font-bold">{Math.round(sliderPosition)}%</span>
            </div>
          </div>
        </div>

        {/* Dynamic Comparison Stats Pill Bar */}
        <div className="mt-3 p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium">Texture Reconstruction</div>
              <div className="text-xs font-semibold text-white">{activeSample.stats.poreDetail}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium">Chemical Emulsion</div>
              <div className="text-xs font-semibold text-white">{activeSample.stats.filmGrain}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium">Specular Physics</div>
              <div className="text-xs font-semibold text-white">{activeSample.stats.organicDepth}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
