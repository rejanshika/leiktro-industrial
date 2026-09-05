import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";

export default function TermsPage() {
  return (
    <div className="pt-32 lg:pt-36 pb-24 bg-white dark:bg-[#07090D] min-h-screen transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
            <Link href="/" className="hover:text-black dark:hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-[#FF5E14] font-bold">Terms and Conditions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-[#0A0A0A] dark:text-white">Terms of Business</h1>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Leiktro Private Limited • Heavy Industrial Engineering</p>
        </div>

        <div className="bg-[#F8F9FB] dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium shadow-sm">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A0A0A] dark:text-white">1. Commercial Quotations & Proposals</h2>
            <p>
              All technical specifications, dimensions, power consumption figures, and pricing quotations issued via this website or our engineering desk are formal estimates subject to confirmation on final purchase order and customer drawing approval.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A0A0A] dark:text-white">2. Engineering Warranty & Quality Proof Testing</h2>
            <p>
              LEIKTRO warrants all newly manufactured electromagnetic lifters, permanent magnetic separators, and vibratory furnace chargers against defects in material and workmanship for a period of 12 months from commissioning or 18 months from factory dispatch, whichever occurs first.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A0A0A] dark:text-white">3. Intellectual Property</h2>
            <p>
              All trademarks, product schematics, FEA flux diagrams, CAD drawings, and media assets published on this website are the proprietary intellectual property of Leiktro Private Limited.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
