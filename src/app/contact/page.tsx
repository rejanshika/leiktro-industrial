"use client";

import TextReveal from "@/components/motion/TextReveal";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { companyData } from "@/data/company";
import { productsData } from "@/data/products";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productInterest: "circular-lifting-magnets",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `LK-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(id);
    setSubmitted(true);
  };

  return (
    <div className="pt-32 lg:pt-36 pb-24 bg-white dark:bg-[#07090D] min-h-screen transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb & Header */}
        <div className="mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FF5E14] font-bold">Contact & Plant Works</span>
          </div>

          <TextReveal
            as="h1"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight"
            text="Connect with LEIKTRO Engineering Works"
          />
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-medium">
            Our technical engineering and commercial sales teams in Ahmedabad, Gujarat are ready to evaluate your material handling parameters, provide CAD drawings, and generate formal quotations.
          </p>
        </div>

        {/* Contact Grid: Left Form, Right Contact & Map Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F8F9FB] dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-200 dark:border-white/10 pb-4 mb-2">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[#0A0A0A] dark:text-white">
                    Submit Technical RFQ or Plant Inquiry
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                    Direct communication with application specialists. Guaranteed response within 4 business hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-2">
                      Company / Steel Plant Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Steel Works"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-2">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. procurement@apexsteel.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-2">
                      Direct Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-2">
                    Primary Machinery of Interest
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                  >
                    {productsData.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — {p.category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-2">
                    Operational Requirements / Crane SWL / Temperature Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your handling material (e.g. scrap, red-hot billets, plate size), crane capacity, duty hours, or target delivery timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#FF5E14] hover:bg-[#E04805] text-white font-bold text-xs font-mono uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-xl transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Ahmedabad Works</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FF5E14]/10 border border-[#FF5E14]/30 flex items-center justify-center mx-auto text-[#FF5E14]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <span className="text-xs font-mono font-bold text-[#FF5E14] bg-[#FF5E14]/10 px-3 py-1 rounded-full border border-[#FF5E14]/20">
                  Ticket #{ticketId}
                </span>
                <h3 className="text-2xl font-display font-black text-[#0A0A0A] dark:text-white">
                  Inquiry Dispatched to Application Engineering Team
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto font-medium">
                  Thank you, <strong className="text-black dark:text-white">{formData.name}</strong>. Our engineering desk at Ahmedabad will review your parameters and follow up at <strong className="text-black dark:text-white">{formData.email}</strong> / <strong className="text-black dark:text-white">{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#FF5E14] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Verified Plant Address & Contact Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Works Location Card */}
            <div className="bg-gradient-to-br from-[#181E2C] via-[#0E131E] to-[#070A10] text-white border border-slate-800 dark:border-white/10 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF5E14] font-bold">
                <Building2 className="w-4 h-4" />
                <span>Works & Manufacturing Plant</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  {companyData.legalName}
                </h3>
                <p className="text-xs text-slate-300 font-mono">
                  {companyData.address.street}
                </p>
                <p className="text-xs text-slate-300 font-mono">
                  {companyData.address.locality}
                </p>
                <p className="text-xs text-slate-300 font-mono">
                  {companyData.address.city}, {companyData.address.state} - {companyData.address.postalCode}
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  {companyData.address.country}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FF5E14] shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">Direct Engineering Line:</div>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="text-sm font-mono font-bold text-white hover:text-[#FF5E14] transition-colors"
                    >
                      {companyData.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FF5E14] shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">Email Address:</div>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-xs font-mono text-white hover:text-[#FF5E14] transition-colors"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#FF5E14] shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">Operating Hours:</div>
                    <div className="text-xs text-slate-300">{companyData.contact.workingHours}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={companyData.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF5E14]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Quality & Audits Card */}
            <div className="bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-3xl p-6 text-xs text-slate-700 dark:text-slate-300 space-y-3">
              <div className="font-mono uppercase tracking-wider text-[#FF5E14] font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF5E14]" />
                <span>Third-Party Witness Audits</span>
              </div>
              <p className="leading-relaxed font-medium">
                LEIKTRO accommodates third-party inspection (TPI) agencies including Bureau Veritas, DNV, SGS, and TUV for stage-wise coil insulation checks and proof-load testing prior to packing.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
