import React, { useState } from 'react';
import { ArrowLeft, Scale, CheckCircle, Copy, Printer, ShieldAlert, Award } from 'lucide-react';

interface TermsOfServiceProps {
  onBackToHome: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBackToHome }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('legal@humanifyai.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0A0B10] text-slate-200 pt-24 sm:pt-28 pb-24">
      {/* Background Ambience */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs sm:text-sm font-semibold text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-xs text-slate-300 transition-colors"
              title="Print Terms"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Document</span>
            </button>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-xs text-indigo-300 transition-colors"
              title="Copy Legal Contact"
            >
              {copiedEmail ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied!' : 'Copy Legal Contact'}</span>
            </button>
          </div>
        </div>

        {/* Title Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <Scale className="w-3.5 h-3.5" />
            TERMS & CONDITIONS OF SERVICE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
            <span>Application: <strong className="text-white">Humanify AI</strong></span>
            <span>•</span>
            <span>Package ID: <code className="text-indigo-300">com.humanifyai</code></span>
            <span>•</span>
            <span>Effective Date: <strong className="text-slate-200">November 2026</strong></span>
          </div>
        </div>

        {/* Ownership Highlight Banner */}
        <div className="mb-10 rounded-2xl p-5 sm:p-6 bg-gradient-to-r from-violet-950/30 to-indigo-950/30 border border-violet-500/30 backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-300 shrink-0 mt-0.5">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                100% User Content Ownership Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You retain complete, unencumbered intellectual property rights and copyright to all original and enhanced images produced with Humanify AI. We claim zero royalty, license, or ownership over your creative output.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-10 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Table of Contents
          </h3>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-indigo-300 list-decimal list-inside font-medium">
            <li><a href="#terms-1" className="hover:underline">1. Acceptance of Agreement</a></li>
            <li><a href="#terms-2" className="hover:underline">2. Permitted Use & End-User License</a></li>
            <li><a href="#terms-3" className="hover:underline">3. User Content & Acceptable Use</a></li>
            <li><a href="#terms-4" className="hover:underline">4. AI & Filter Processing Disclaimer</a></li>
            <li><a href="#terms-5" className="hover:underline">5. Limitation of Liability & Warranty</a></li>
            <li><a href="#terms-6" className="hover:underline">6. Governing Law & Modifications</a></li>
            <li><a href="#terms-7" className="hover:underline">7. Legal Inquiries & Support</a></li>
          </ol>
        </div>

        {/* Terms Body Sections */}
        <div className="space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section id="terms-1" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-indigo-400 font-mono">1.</span>
              Acceptance of Agreement
            </h2>
            <p className="mb-3">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you") and <strong className="text-white">Humanify AI</strong> ("we", "us", or "our"), governing your access to and use of the mobile application distributed under Android package name <code className="text-indigo-300 font-mono">com.humanifyai</code> and our official website.
            </p>
            <p>
              By downloading, installing, accessing, or using Humanify AI, you represent that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must immediately uninstall and discontinue using the application.
            </p>
          </section>

          {/* Section 2 */}
          <section id="terms-2" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-indigo-400 font-mono">2.</span>
              Permitted Use & End-User License
            </h2>
            <p className="mb-3">
              Subject to your ongoing compliance with these Terms, we grant you a personal, revocable, non-exclusive, non-transferable, and royalty-free license to use Humanify AI for:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2 mb-3">
              <li><strong>Personal Creative Projects:</strong> Naturalizing personal avatars, AI portrait renders, and social media media.</li>
              <li><strong>Commercial Creative Output:</strong> Enhancing AI artwork for commercial publications, marketing collaterals, digital portfolios, and client deliverables.</li>
            </ul>
            <p>
              You agree not to reverse engineer, decompile, disassemble, or extract neural network model weights from the application package, except to the extent permitted by mandatory statutory law.
            </p>
          </section>

          {/* Section 3 */}
          <section id="terms-3" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-indigo-400 font-mono">3.</span>
              User Content & Acceptable Use Policy
            </h2>
            
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-4">
              <h4 className="font-bold text-white mb-1">A. Full Ownership of Enhanced Images</h4>
              <p className="text-slate-300">
                You retain 100% full ownership, rights, and copyright to all original source photos and output files enhanced with Humanify AI. We assert no intellectual property claims over your creations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 mb-4">
              <h4 className="font-bold text-rose-300 mb-1 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                B. Prohibited Unlawful and Harmful Media
              </h4>
              <p className="text-slate-300 mb-2">
                You agree not to use Humanify AI to generate, enhance, or facilitate:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
                <li>Non-consensual deepfakes, intimate imagery, or unauthorized likeness exploitation of any real individual without explicit consent.</li>
                <li>Defamatory, libelous, fraudulent, or deceptive media intended to mislead public opinion or commit identity theft.</li>
                <li>Hate speech, violent extremism, or content depicting child sexual exploitation and abuse material (CSAM).</li>
                <li>Infringing upon any third-party copyright, trademark, or publicity rights.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="terms-4" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-indigo-400 font-mono">4.</span>
              AI & Digital Processing Disclaimer
            </h2>
            <p className="mb-3">
              Humanify AI utilizes specialized digital image processing algorithms, frequency separation, and neural convolution kernels to synthesize realistic skin pores, analog film grain, and balanced specular lighting.
            </p>
            <p>
              You acknowledge that visual results will naturally vary based on input photo resolution, compression artifacts, model origin (e.g. Midjourney vs SDXL), lighting contrast, and hardware capabilities. The application is a post-processing tool and does not guarantee specific aesthetic or commercial outcomes.
            </p>
          </section>

          {/* Section 5 */}
          <section id="terms-5" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-indigo-400 font-mono">5.</span>
              Limitation of Liability & Warranty Disclaimer
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs font-mono uppercase text-slate-300 mb-3">
              THE APPLICATION IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </div>
            <p>
              To the maximum extent permitted by applicable law, Humanify AI and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or loss of profits or data, resulting from your access to or inability to use the application.
            </p>
          </section>

          {/* Section 6 */}
          <section id="terms-6" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-indigo-400 font-mono">6.</span>
              Governing Law & Amendments
            </h2>
            <p className="mb-3">
              These Terms shall be governed by and construed in accordance with standard international software commercial practices without regard to conflict of law principles.
            </p>
            <p>
              We reserve the right to amend these Terms at any time. Continued use of Humanify AI following the publication of revised terms on this page constitutes your formal acceptance of the modified Terms.
            </p>
          </section>

          {/* Section 7 */}
          <section id="terms-7" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-indigo-400 font-mono">7.</span>
              Legal Inquiries & Support
            </h2>
            <p className="mb-4">
              For any legal questions, licensing inquiries, or abuse reports, please contact our legal counsel:
            </p>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white mb-1">Humanify AI Legal & Compliance</div>
                <div className="text-xs text-slate-400">
                  Direct contact for intellectual property and regulatory matters:
                </div>
                <div className="text-xs font-mono text-indigo-300 mt-1">
                  Email: legal@humanifyai.com • support@humanifyai.com
                </div>
              </div>
              <a
                href="mailto:legal@humanifyai.com"
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shrink-0"
              >
                Contact Legal Counsel
              </a>
            </div>
          </section>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] text-center">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-violet-950/50 hover:from-violet-500 hover:to-indigo-500 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Humanify AI Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
