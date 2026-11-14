import React from 'react';
import { Shield, FileText, Mail, Download, ArrowUp, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigateLegal: (page: 'privacy' | 'terms') => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateLegal, onNavigateHome }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07080B] border-t border-white/[0.08] text-slate-400 text-xs sm:text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <img
                src="/app-icon.png"
                alt="Humanify AI Logo"
                className="w-9 h-9 rounded-xl object-contain shadow-md group-hover:scale-105 transition-transform"
              />
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                  Humanify
                </span>
                <span className="text-xs font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
                  AI
                </span>
              </div>
            </button>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The premier AI photo naturalizer. Turning plastic, over-smoothed generative renders into authentic, lifelike human portraits with 100% on-device neural processing.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300">
                Package: com.humanifyai
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Google Play Compliant
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  Before / After Slider
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  The Problem & Solution
                </a>
              </li>
              <li>
                <a href="#styles" className="hover:text-white transition-colors">
                  5 Signature Styles
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  Local NPU Engine
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Legal & Safety
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateLegal('privacy')}
                  className="flex items-center gap-1.5 hover:text-white transition-colors text-left"
                >
                  <Shield className="w-3.5 h-3.5 text-violet-400" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateLegal('terms')}
                  className="flex items-center gap-1.5 hover:text-white transition-colors text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Terms of Service</span>
                </button>
              </li>
              <li>
                <span className="text-[11px] text-slate-500 block pt-1">
                  Google Play Data Safety Certified: Zero User Data Collected or Shared.
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Download */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect & Support
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <a
                  href="mailto:support@humanifyai.com"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  <span>support@humanifyai.com</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:privacy@humanifyai.com"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Shield className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  <span>privacy@humanifyai.com</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.humanifyai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-white font-medium transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-violet-400" />
                  <span>Google Play Store</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© 2026 Humanify AI. All rights reserved.</span>
            <span>•</span>
            <span>Package ID: <code className="text-slate-300 font-mono">com.humanifyai</code></span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigateLegal('privacy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigateLegal('terms')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 transition-colors"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
