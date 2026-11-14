import React, { useState } from 'react';
import { ArrowLeft, Shield, CheckCircle, Copy, Printer } from 'lucide-react';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBackToHome }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('privacy@humanifyai.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0A0B10] text-slate-200 pt-24 sm:pt-28 pb-24">
      {/* Background Ambience */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

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
              title="Print Privacy Policy"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Document</span>
            </button>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/30 text-xs text-violet-300 transition-colors"
              title="Copy Privacy Contact"
            >
              {copiedEmail ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied!' : 'Copy Privacy Contact'}</span>
            </button>
          </div>
        </div>

        {/* Document Title Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Shield className="w-3.5 h-3.5" />
            GOOGLE PLAY DATA SAFETY COMPLIANT
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
            <span>Application: <strong className="text-white">Humanify AI</strong></span>
            <span>•</span>
            <span>Package ID: <code className="text-violet-300">com.humanifyai</code></span>
            <span>•</span>
            <span>Last Updated: <strong className="text-slate-200">November 2026</strong></span>
          </div>
        </div>

        {/* Google Play Data Safety Summary Box */}
        <div className="mb-10 rounded-2xl p-5 sm:p-6 bg-emerald-950/20 border border-emerald-500/30 backdrop-blur-xl">
          <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            Google Play Data Safety Direct Disclosure
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
            In strict compliance with Google Play Developer Policies and Data Safety requirements:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20">
              <div className="text-emerald-400 font-bold mb-1">Data Collected</div>
              <div className="text-slate-300 font-semibold">NONE (0 Bytes collected)</div>
              <p className="text-slate-400 text-[11px] mt-0.5">
                We do not collect personal identifiers, device IDs, location, or biometric data.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/20">
              <div className="text-emerald-400 font-bold mb-1">Data Shared</div>
              <div className="text-slate-300 font-semibold">NONE (0 Third-Party Sharing)</div>
              <p className="text-slate-400 text-[11px] mt-0.5">
                Zero data is sold, transferred, or disclosed to advertising brokers or analytics SDKs.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-10 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Table of Contents
          </h3>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-violet-300 list-decimal list-inside font-medium">
            <li><a href="#section-1" className="hover:underline">1. Introduction & Scope</a></li>
            <li><a href="#section-2" className="hover:underline">2. Information We Process & Permissions</a></li>
            <li><a href="#section-3" className="hover:underline">3. No Facial Recognition / AI Training</a></li>
            <li><a href="#section-4" className="hover:underline">4. Local Data Storage & Sandbox Purge</a></li>
            <li><a href="#section-5" className="hover:underline">5. Third-Party Services & Tracking</a></li>
            <li><a href="#section-6" className="hover:underline">6. Children's Privacy (COPPA)</a></li>
            <li><a href="#section-7" className="hover:underline">7. Google Play Data Safety Compliance</a></li>
            <li><a href="#section-8" className="hover:underline">8. Contact Information & Inquiries</a></li>
          </ol>
        </div>

        {/* Policy Body Sections */}
        <div className="space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400 font-mono">1.</span>
              Introduction & Scope
            </h2>
            <p className="mb-3">
              This Privacy Policy explains how <strong className="text-white">Humanify AI</strong> ("we", "our", "us", or "the App"), registered under Android Package Identifier <code className="text-violet-300 font-mono">com.humanifyai</code>, handles your personal information, media files, and device permissions when you install and interact with our mobile application via Google Play.
            </p>
            <p>
              We firmly believe that your private photos and creative media should remain strictly yours. Humanify AI is intentionally engineered around a <strong>privacy-first, offline-by-default architecture</strong>. By using Humanify AI, you acknowledge and agree to the practices outlined in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400 font-mono">2.</span>
              Information We Process & Device Permissions
            </h2>
            <p className="mb-3">
              Humanify AI is a photo post-processing utility designed to restore micro-texture, pores, and optical warmth to AI-generated images. Here is exactly what data is handled and why:
            </p>

            <div className="space-y-4 my-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="font-bold text-white mb-1">A. User Photos & Media (100% On-Device Processing)</h4>
                <p className="text-slate-300">
                  When you select an image to enhance, the file is loaded directly into your device's local volatile memory (RAM). The image naturalization algorithm runs entirely on your phone’s local chipset (CPU, GPU, and Neural Processing Unit / NPU). <strong>Your photos are never transmitted over the internet, uploaded to remote cloud servers, stored on external hard drives, or shared with third parties.</strong>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="font-bold text-white mb-1">B. Android Storage & Media Permissions</h4>
                <p className="text-slate-300 mb-2">
                  To provide its core functionality, Humanify AI requests runtime permissions strictly through Android’s Scoped Storage framework:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
                  <li>
                    <code className="text-violet-300 font-mono">READ_MEDIA_IMAGES</code> (Android 13+) or <code className="text-violet-300 font-mono">READ_EXTERNAL_STORAGE</code> (Android 12 and below): Strictly required to enable the system photo picker so you can choose which portrait to enhance.
                  </li>
                  <li>
                    <code className="text-violet-300 font-mono">WRITE_EXTERNAL_STORAGE</code> (on legacy versions): Strictly required to allow saving the final enhanced, full-resolution image back into your device's Pictures or Gallery directory.
                  </li>
                </ul>
                <p className="text-[11px] text-slate-400 mt-2">
                  Humanify AI never scans or reads unrelated media, folders, or files on your device.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400 font-mono">3.</span>
              No Facial Recognition & Zero Biometric Training
            </h2>
            <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/30 mb-3">
              <p className="font-semibold text-violet-200">
                Crucial Guarantee: We do NOT perform facial recognition, identity harvesting, or generative model training.
              </p>
            </div>
            <p className="mb-2">
              Specifically:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
              <li>We do <strong>not</strong> extract biometric identifiers, facial geometry vectors, or face embeddings.</li>
              <li>We do <strong>not</strong> build user facial profiles or attempt to identify individuals.</li>
              <li>We do <strong>not</strong> use your images—or any derivatives thereof—to train, fine-tune, or benchmark public or proprietary artificial intelligence or machine learning models.</li>
              <li>All filter computations apply local convolution passes (analog grain synthesis, edge-preserving bilateral filtering, and color curve mapping) without persistent facial data capture.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400 font-mono">4.</span>
              Local Data Storage & Sandbox Purge
            </h2>
            <p className="mb-3">
              Any state created within the app—such as your preferred default style presets, recent export counters, and editing history—is stored exclusively within your device's isolated application sandbox:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2 mb-3">
              <li><strong>Local SQLite Database:</strong> Stores local project metadata and non-sensitive thumbnail references within <code className="text-violet-300 font-mono">/data/data/com.humanifyai/databases/</code>.</li>
              <li><strong>Android SharedPreferences:</strong> Stores user interface preferences (e.g. default grain intensity or dark mode tokens).</li>
            </ul>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs text-slate-400">
              <strong className="text-white">Uninstall Purge:</strong> Because no cloud sync is used, uninstalling Humanify AI or clearing application storage through Android Settings permanently and irrevocably deletes all local project records from your handset.
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400 font-mono">5.</span>
              Third-Party Services & Behavioral Tracking
            </h2>
            <p className="mb-3">
              We do not include third-party advertising SDKs, behavioral tracking frameworks, invasive analytics, or cross-app profiling libraries.
            </p>
            <p>
              The app communicates over the network solely if you explicitly invoke Google Play In-App Billing or Google Play Licensing verification services provided directly by Google LLC. These services are governed by Google's standard Privacy Policy and Terms of Service.
            </p>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400 font-mono">6.</span>
              Children’s Privacy (COPPA Compliance)
            </h2>
            <p>
              Humanify AI is a general audience creative utility and does not knowingly solicit or collect personally identifiable information from children under the age of 13 (or under 16 in the European Union). Because no personal data is transmitted from the application, children’s privacy is inherently preserved by our offline architecture. If a parent or guardian has questions regarding our practices, please contact us immediately.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400 font-mono">7.</span>
              Google Play Data Safety Disclosure
            </h2>
            <p className="mb-3">
              Google Play requires all developers to complete a Data Safety form. Below is our formal declaration as submitted to the Google Play Console:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-white/[0.08] rounded-xl overflow-hidden text-xs">
                <thead className="bg-white/[0.04] text-white">
                  <tr>
                    <th className="p-3 border-b border-white/[0.08]">Data Category</th>
                    <th className="p-3 border-b border-white/[0.08]">Collected?</th>
                    <th className="p-3 border-b border-white/[0.08]">Shared with 3rd Parties?</th>
                    <th className="p-3 border-b border-white/[0.08]">Purpose / Handling</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  <tr>
                    <td className="p-3 font-medium text-white">Photos and Videos</td>
                    <td className="p-3 text-emerald-400 font-semibold">No</td>
                    <td className="p-3 text-emerald-400 font-semibold">No</td>
                    <td className="p-3 text-slate-400">Processed ephemeral on-device only</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Personal Identifiers (Name, Email)</td>
                    <td className="p-3 text-emerald-400 font-semibold">No</td>
                    <td className="p-3 text-emerald-400 font-semibold">No</td>
                    <td className="p-3 text-slate-400">No account required to use the app</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Financial / Payment Info</td>
                    <td className="p-3 text-emerald-400 font-semibold">No</td>
                    <td className="p-3 text-emerald-400 font-semibold">No</td>
                    <td className="p-3 text-slate-400">Handled directly by Google Play Billing</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Device or Other IDs</td>
                    <td className="p-3 text-emerald-400 font-semibold">No</td>
                    <td className="p-3 text-emerald-400 font-semibold">No</td>
                    <td className="p-3 text-slate-400">No advertising or tracking IDs read</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-violet-400 font-mono">8.</span>
              Contact Information & Policy Updates
            </h2>
            <p className="mb-4">
              We may revise this Privacy Policy from time to time to reflect operational or regulatory changes. Any modifications will be posted directly to this web address.
            </p>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white mb-1">Humanify AI Privacy Compliance Team</div>
                <div className="text-xs text-slate-400">
                  For privacy requests, GDPR/CCPA questions, or Data Safety verification:
                </div>
                <div className="text-xs font-mono text-violet-300 mt-1">
                  Email: privacy@humanifyai.com • support@humanifyai.com
                </div>
              </div>
              <a
                href="mailto:privacy@humanifyai.com"
                className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-colors shrink-0"
              >
                Email Privacy Team
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
