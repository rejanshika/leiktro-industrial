"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Factory,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { industriesData, IndustryItem } from "@/data/industries";
import QuickQuoteModal from "@/components/rfq/QuickQuoteModal";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(industriesData[0]);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section id="industries" className="relative py-24 bg-[#F8F9FB] dark:bg-[#0D1017] transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <Reveal className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5E14]/10 text-[#FF5E14] text-xs font-mono font-bold">
              <Factory className="w-3.5 h-3.5" />
              <span>Heavy Industrial Applications</span>
            </div>
            <TextReveal
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight"
              text="Sectors & Operational Environments"
            />
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">
              From 650°C red-hot billets to foundry furnace charging — see how LEIKTRO solves heavy-industry challenges.
            </p>
          </Reveal>

          <Link
            href="/industries"
            className="px-5 py-2.5 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 hover:from-slate-200 hover:to-slate-100 dark:from-white/10 dark:to-white/5 text-[#0A0A0A] dark:text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl flex items-center gap-1.5 transition-all shadow-xs border border-slate-200/90 dark:border-white/10 shrink-0"
          >
            <span>All Industry Guides</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF5E14]" />
          </Link>
        </div>

        {/* Interactive Industry Sector Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sector List (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            {industriesData.map((ind, idx) => {
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`w-full p-5 rounded-2xl text-left border transition-all flex items-center justify-between group ${
                    isSelected
                      ? "bg-gradient-to-r from-[#1A202C] via-[#10151F] to-[#070A10] border-[#FF5E14] text-white shadow-xl ring-1 ring-[#FF5E14]"
                      : "bg-gradient-to-br from-white via-slate-50/70 to-slate-100/50 dark:from-[#111622] dark:to-[#0D1017] border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20 shadow-xs"
                  }`}
                >
                  <div className="space-y-1">
                    <div
                      className={`text-[10px] font-mono font-bold ${
                        isSelected ? "text-[#FF5E14]" : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      SECTOR 0{idx + 1}
                    </div>
                    <div className="text-base font-bold leading-tight">
                      {ind.name}
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-[#FF5E14] translate-x-1" : "text-slate-400 dark:text-slate-500 opacity-60"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Sector Deep Dive with subtle gradient (8 Cols) */}
          <div className="lg:col-span-8 bg-gradient-to-br from-white via-[#FBFBFD] to-[#F1F3F7] dark:from-[#111622] dark:to-[#0D1017] border border-slate-200/90 dark:border-white/10 rounded-3xl p-7 sm:p-10 shadow-xl">
            <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >

            {/* Top Sector Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/10">
              <div>
                <span className="text-xs font-mono text-[#FF5E14] uppercase tracking-wider font-bold">
                  Field Solutions & Machinery Pairing
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-[#0A0A0A] dark:text-white mt-1">
                  {selectedIndustry.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono font-medium mt-1">
                  {selectedIndustry.subtitle}
                </p>
              </div>

              {/* Stat Badges with subtle gradient */}
              <div className="flex items-center gap-2.5 shrink-0">
                {selectedIndustry.stats.map((st, sIdx) => (
                  <div key={sIdx} className="bg-gradient-to-br from-white to-slate-50 dark:from-[#0D1017] dark:to-[#161D2B] border border-slate-200/80 dark:border-white/10 rounded-xl px-3.5 py-2 text-center shadow-xs">
                    <div className="text-sm font-mono font-bold text-[#FF5E14]">{st.value}</div>
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview Description */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {selectedIndustry.description}
            </p>

            {/* Challenges & LEIKTRO Engineering Solutions */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14]" />
                <span>Operational Challenges & Engineering Countermeasures</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {selectedIndustry.challenges.map((ch, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-[#0D1017] dark:to-[#161D2B] border border-slate-200/80 dark:border-white/5 space-y-1.5 shadow-xs"
                  >
                    <div className="text-xs font-bold text-[#0A0A0A] dark:text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5E14] shrink-0" />
                      <span>{ch.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {ch.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Products Strip & Action */}
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#0A0A0A] dark:text-white mr-1 uppercase">Recommended:</span>
                {selectedIndustry.recommendedProducts.map((pName, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-3 py-1 rounded-lg bg-gradient-to-br from-white to-slate-50 dark:from-[#0D1017] dark:to-[#161D2B] border border-slate-200/80 dark:border-white/10 text-xs font-mono font-bold text-[#0A0A0A] dark:text-white shadow-xs"
                  >
                    {pName}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setIsQuoteOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-[#FF5E14] via-[#FF6A26] to-[#E04805] hover:from-[#E04805] hover:to-[#C83C00] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md shadow-[#FF5E14]/20 transition-all shrink-0 active:scale-95"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Get Sector Quote</span>
              </button>
            </div>

            </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialSpecs={{
          material: selectedIndustry.name,
        }}
      />
    </section>
  );
}
