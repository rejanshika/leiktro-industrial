"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  FileText,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { companyData } from "@/data/company";
import QuickQuoteModal from "@/components/rfq/QuickQuoteModal";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

export default function CTASection() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="relative py-24 bg-white dark:bg-[#07090D] overflow-hidden transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="surface-graphite surface-graphite-glow text-white border border-white/10 rounded-3xl p-8 sm:p-14 lg:p-16 shadow-2xl text-center md:text-left">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
                <span>Heavy Duty Engineering Consultation</span>
              </div>

              <TextReveal
                as="h2"
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight leading-tight"
                text="Have an Industrial Material Handling Challenge?"
              />

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-medium">
                From high-temp skull magnets to multi-billet spreader beams and crusher tramp-metal extraction — our engineers design the right magnetic configuration for your operation.
              </p>

              {/* Assurances */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-slate-300">
                  <Clock className="w-4 h-4 text-[#FF5E14]" />
                  <span>4-Hour RFQ Response</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#FF5E14]" />
                  <span>100% In-House FEA</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5E14]" />
                  <span>ISO 9001:2015 Works</span>
                </div>
              </div>
            </div>

            {/* Right Quick Actions (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 justify-center">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full py-4 bg-[#FF5E14] hover:bg-[#E04805] text-white font-bold text-sm font-mono uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 shadow-2xl transition-all active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>Request B2B Quotation</span>
              </button>

              <a
                href={`tel:${companyData.contact.phone}`}
                className="w-full py-3.5 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/15 text-white font-mono font-bold text-xs rounded-2xl border border-white/10 flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#FF5E14]" />
                <span>Call Plant: {companyData.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${companyData.contact.email}`}
                className="w-full py-3.5 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/15 text-slate-300 hover:text-white font-mono text-xs rounded-2xl border border-white/10 flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4 text-[#FF5E14]" />
                <span>{companyData.contact.email}</span>
              </a>
            </div>

          </div>
        </Reveal>
      </div>

      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </section>
  );
}
