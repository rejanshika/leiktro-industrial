import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 lg:pt-36 pb-24 bg-white dark:bg-[#07090D] min-h-screen transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
            <Link href="/" className="hover:text-black dark:hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-[#FF5E14] font-bold">Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-[#0A0A0A] dark:text-white">Privacy Policy</h1>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Effective Date: January 2025 • Leiktro Private Limited</p>
        </div>

        <div className="bg-[#F8F9FB] dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium shadow-sm">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A0A0A] dark:text-white">1. Information We Collect</h2>
            <p>
              Leiktro Private Limited collects corporate and commercial contact information submitted voluntarily through our website quotation, sizing, and technical inquiry forms (including name, company name, corporate email address, phone number, and machinery specifications).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A0A0A] dark:text-white">2. Purpose of Processing</h2>
            <p>
              All engineering and commercial data is processed strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400 text-xs">
              <li>Preparing equipment proposals, CAD layouts, and commercial quotations.</li>
              <li>Providing application engineering advice regarding crane SWL, magnet sizing, and duty cycles.</li>
              <li>Arranging factory witness testing and dispatch coordination.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A0A0A] dark:text-white">3. Information Sharing & Security</h2>
            <p>
              We do not sell, rent, or trade your contact information with external marketing third parties. Data is secured under strict enterprise protocols in compliance with applicable Indian data protection and GDPR regulations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A0A0A] dark:text-white">4. Contacting the Data Protection Officer</h2>
            <p>
              For inquiries regarding data access or deletion, contact our administrative office at: <span className="text-[#FF5E14] font-mono">{companyData.contact.email}</span> or write to {companyData.address.full}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
