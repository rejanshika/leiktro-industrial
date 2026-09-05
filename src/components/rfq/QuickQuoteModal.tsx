"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, Mail, FileText, Cpu, ShieldCheck } from "lucide-react";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialSpecs?: {
    modelCode?: string;
    material?: string;
    carrier?: string;
  };
}

export default function QuickQuoteModal({
  isOpen,
  onClose,
  initialProduct,
  initialSpecs,
}: QuickQuoteModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<string>(
    initialProduct || "circular-lifting-magnets"
  );
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    application: "Steel Melting Shop / Furnace Charging",
    operatingTemp: "Ambient (< 100°C)",
    dutyCycleReq: "75% ED Continuous",
    materialDetails: initialSpecs?.material || "Heavy Melting Scrap / Pig Iron",
    craneCapacity: "10-25 Tons",
    additionalNotes: initialSpecs?.modelCode ? `Recommended Configuration: ${initialSpecs.modelCode}` : "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `LK-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div data-lenis-prevent className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl text-[#0A0A0A] dark:text-white p-6 md:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 border-b border-slate-100 dark:border-white/10 pb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E14]/10 text-[#FF5E14] text-xs font-mono font-bold mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>B2B Engineering Spec & Quotation Request</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight">
                Request an Engineering Quote
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium">
                Direct access to LEIKTRO application engineers. Receive detailed CAD layout drawings, duty sizing, and formal commercial pricing within 4 business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-2">
                  1. Select Equipment Category / Model
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white font-medium focus:outline-none focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] transition-colors"
                >
                  {productsData.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.name} — {prod.category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Technical Operating Parameters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-2">
                    Application / Industry
                  </label>
                  <select
                    value={formData.application}
                    onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                  >
                    <option>Steel Melting Shop (SMS) & EAF Charging</option>
                    <option>Rolling Mill Hot/Cold Billet Handling</option>
                    <option>Scrap Yard & Recycling Processing</option>
                    <option>Foundry Pig Iron & Induction Furnace</option>
                    <option>Mining & Conveyor Tramp Iron Removal</option>
                    <option>Heavy Plate & Shipyard Fabrication</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-2">
                    Operating Temperature
                  </label>
                  <select
                    value={formData.operatingTemp}
                    onChange={(e) => setFormData({ ...formData, operatingTemp: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                  >
                    <option>Ambient Cold Scrap (&lt; 100°C)</option>
                    <option>Medium Temperature (100°C – 300°C)</option>
                    <option>High-Temperature Hot Scrap / Billets (300°C – 650°C)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-2">
                    Crane SWL / Excavator Class
                  </label>
                  <input
                    type="text"
                    value={formData.craneCapacity}
                    onChange={(e) => setFormData({ ...formData, craneCapacity: e.target.value })}
                    placeholder="e.g. 15T Crane / 30T Excavator"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-2">
                    Required Duty Cycle
                  </label>
                  <select
                    value={formData.dutyCycleReq}
                    onChange={(e) => setFormData({ ...formData, dutyCycleReq: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                  >
                    <option>75% ED (Continuous 24/7 Heavy Duty)</option>
                    <option>60% ED (Standard Industrial Shift)</option>
                    <option>100% Continuous (Permanent / Overband)</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-slate-100 dark:border-white/10 pt-5">
                <label className="block text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider mb-3">
                  2. Your Company & Contact Information
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Company / Plant Name *"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Official Work Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <textarea
                    rows={3}
                    placeholder="Specific technical requirements, crane hook details, or target capacity (optional)..."
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-xl text-[#0A0A0A] dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E14]"
                  />
                </div>
              </div>

              {/* Direct Assurance & Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-[#FF5E14]" />
                  <span>ISO 9001:2015 Verified • Direct Plant Engineering Response</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#FF5E14] hover:bg-[#E04805] text-white font-bold text-xs font-mono uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-xl transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Engineering RFQ</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#FF5E14]/10 border border-[#FF5E14]/30 flex items-center justify-center mx-auto mb-4 text-[#FF5E14]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <span className="text-xs font-mono font-bold text-[#FF5E14] bg-[#FF5E14]/10 px-3.5 py-1 rounded-full border border-[#FF5E14]/20">
              Reference #{quoteId}
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-black text-[#0A0A0A] dark:text-white mt-3 mb-2">
              Engineering RFQ Received Successfully
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-lg mx-auto text-sm mb-6 font-medium">
              Thank you, <strong className="text-black dark:text-white">{formData.name}</strong>. A senior application engineer from LEIKTRO Ahmedabad has been assigned to your requirement and will contact you at <strong className="text-black dark:text-white">{formData.email}</strong> / <strong className="text-black dark:text-white">{formData.phone}</strong>.
            </p>

            <div className="bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-2xl p-5 max-w-lg mx-auto text-left mb-6 text-xs text-slate-700 dark:text-slate-300 space-y-2 font-medium">
              <div className="flex justify-between border-b border-slate-200 dark:border-white/10 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400">Equipment Requested:</span>
                <span className="text-[#0A0A0A] dark:text-white font-bold capitalize">{selectedProduct.replace(/-/g, " ")}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-white/10 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400">Company:</span>
                <span className="text-[#0A0A0A] dark:text-white font-bold">{formData.company}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-white/10 pb-1.5">
                <span className="text-slate-500 dark:text-slate-400">Application:</span>
                <span className="text-[#0A0A0A] dark:text-white font-bold">{formData.application}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Factory Dispatch Works:</span>
                <span className="text-[#FF5E14] font-bold">Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${companyData.contact.phone}`}
                className="w-full sm:w-auto px-5 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-[#0A0A0A] dark:text-white text-xs font-mono font-bold rounded-xl flex items-center justify-center gap-2 transition-colors border border-slate-200 dark:border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5E14]" />
                <span>Call Plant Direct: {companyData.contact.phoneDisplay}</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-7 py-3 bg-[#FF5E14] hover:bg-[#E04805] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl transition-colors shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
