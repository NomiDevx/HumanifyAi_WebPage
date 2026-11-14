import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { HelpCircle, ChevronDown, Search, ShieldCheck } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Features', 'Privacy', 'Compatibility', 'Billing'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#0D0E16]/80 border-t border-white/[0.06]" id="faq">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Everything you need to know about our local on-device architecture, AI model compatibility, and data safety.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. privacy, cloud, Google Play, intensity)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-slate-400 focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 font-medium whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-900/40'
                    : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.06] border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? 'bg-white/[0.04] border-violet-500/40 shadow-xl shadow-violet-950/20'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.03]'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm sm:text-base font-bold text-white leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-violet-600/30 text-violet-300 rotate-180'
                          : 'bg-white/[0.04] text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/[0.04] animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                      {faq.category === 'Privacy' && (
                        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-500/20">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Google Play Data Safety Certified • Package: com.humanifyai</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center rounded-2xl bg-white/[0.02] border border-white/[0.06] text-slate-400 text-sm">
              No matching questions found for "{searchQuery}". Please reach out to{' '}
              <a href="mailto:support@humanifyai.com" className="text-violet-400 underline">
                support@humanifyai.com
              </a>
              .
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
