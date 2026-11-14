import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, FileText, Download } from 'lucide-react';

interface NavbarProps {
  onNavigateLegal: (page: 'privacy' | 'terms') => void;
  onNavigateHome: () => void;
  currentPage: 'home' | 'privacy' | 'terms';
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateLegal,
  onNavigateHome,
  currentPage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (currentPage !== 'home') {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0B10]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={onNavigateHome}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Humanify AI Home"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 opacity-60 group-hover:opacity-100 blur transition duration-300" />
              <img
                src="/app-icon.png"
                alt="Humanify AI Icon"
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-contain shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-purple-200 transition-colors">
                  Humanify
                </span>
                <span className="text-xs font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm">
                  AI
                </span>
              </div>
              <span className="hidden sm:block text-[10px] font-mono tracking-wider text-slate-400">
                Photo Naturalizer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('comparison')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Comparison
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick('styles')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Signature Styles
            </button>
            <button
              onClick={() => handleNavClick('architecture')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Local Engine
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 border-r border-white/[0.1] pr-3 mr-1 text-xs text-slate-400">
              <button
                onClick={() => onNavigateLegal('privacy')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md hover:text-slate-200 transition-colors ${
                  currentPage === 'privacy' ? 'text-violet-400 font-semibold bg-violet-500/10' : ''
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                Privacy
              </button>
              <button
                onClick={() => onNavigateLegal('terms')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md hover:text-slate-200 transition-colors ${
                  currentPage === 'terms' ? 'text-violet-400 font-semibold bg-violet-500/10' : ''
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Terms
              </button>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.humanifyai"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-900/40 hover:shadow-violet-600/50 transition-all duration-200 active:scale-95"
            >
              <Download className="w-4 h-4 text-violet-200" />
              <span>Get on Google Play</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://play.google.com/store/apps/details?id=com.humanifyai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-violet-600/80 text-white text-xs font-semibold flex items-center gap-1"
              aria-label="Download app"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.1] bg-[#0A0B10]/95 backdrop-blur-2xl px-5 pt-4 pb-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-2 text-base font-medium text-slate-200">
            <button
              onClick={() => handleNavClick('comparison')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              Comparison (Before/After)
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              The Problem & Solution
            </button>
            <button
              onClick={() => handleNavClick('styles')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              5 Signature Styles
            </button>
            <button
              onClick={() => handleNavClick('architecture')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              Privacy & Local NPU
            </button>
            <button
              onClick={() => handleNavClick('how-it-works')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              Frequently Asked Questions
            </button>

            <div className="h-px bg-white/[0.08] my-2" />

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <button
                onClick={() => {
                  onNavigateLegal('privacy');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06]"
              >
                <Shield className="w-3.5 h-3.5 text-violet-400" />
                Privacy Policy
              </button>
              <button
                onClick={() => {
                  onNavigateLegal('terms');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06]"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                Terms of Service
              </button>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.humanifyai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg shadow-violet-900/50"
            >
              <Download className="w-4 h-4" />
              Download on Google Play (com.humanifyai)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
