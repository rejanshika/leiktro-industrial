"use client";

import TextReveal from "@/components/motion/TextReveal";

import React from "react";
import Link from "next/link";
import {
  Factory,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Flame,
  Layers,
  FileText,
} from "lucide-react";
import { industriesData } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <div className="pt-32 lg:pt-36 pb-24 bg-white dark:bg-[#07090D] min-h-screen transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb & Header */}
        <div className="mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#FF5E14] font-bold">Industry Solutions</span>
          </div>

          <TextReveal
            as="h1"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight"
            text="Industrial Sectors & Material Handling Solutions"
          />
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-medium">
            Discover how LEIKTRO electromagnetic lifters, suspension separators, and vibratory furnace chargers solve severe operational bottlenecks across heavy industrial sectors.
          </p>
        </div>

        {/* Industry Sector Cards List */}
        <div className="space-y-12">
          {industriesData.map((ind, idx) => (
            <div
              key={ind.id}
              id={ind.id}
              className="bg-[#F8F9FB] dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div>
                  <span className="text-xs font-mono text-[#FF5E14] uppercase tracking-wider font-bold">
                    SECTOR 0{idx + 1} • FIELD APPLICATION
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-black text-[#0A0A0A] dark:text-white mt-1">
                    {ind.name}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono font-medium mt-1">
                    {ind.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {ind.stats.map((st, sIdx) => (
                    <div key={sIdx} className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-center shadow-sm">
                      <div className="text-base font-mono font-bold text-[#FF5E14]">{st.value}</div>
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {ind.description}
              </p>

              {/* Challenges & Solutions */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
                  <span>Operational Bottlenecks & LEIKTRO Engineered Solutions</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {ind.challenges.map((ch, cIdx) => (
                    <div key={cIdx} className="p-5 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 space-y-2 shadow-sm">
                      <div className="text-sm font-bold text-[#0A0A0A] dark:text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5E14] shrink-0" />
                        <span>{ch.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{ch.solution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Machinery & CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#0A0A0A] dark:text-white mr-2 uppercase">Recommended:</span>
                  {ind.recommendedProducts.map((pName, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 text-xs font-mono font-bold text-[#0A0A0A] dark:text-white"
                    >
                      {pName}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#FF5E14] hover:bg-[#E04805] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-md transition-all shrink-0"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request RFQ for {ind.name.split(" ")[0]}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
