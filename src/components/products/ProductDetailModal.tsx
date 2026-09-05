"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ShieldCheck,
  Zap,
  Flame,
  Award,
  FileText,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  Table,
  Phone,
} from "lucide-react";
import { ProductItem } from "@/data/products";
import { companyData } from "@/data/company";

interface ProductDetailModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: (product: ProductItem) => void;
}

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onOpenQuote,
}: ProductDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "applications">("overview");

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div data-lenis-prevent className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl text-[#0A0A0A] dark:text-white p-6 md:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors z-10"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pb-6 border-b border-slate-100 dark:border-white/10">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative w-full h-64 sm:h-72 rounded-2xl bg-slate-50 dark:bg-[#0D1017] border border-slate-100 dark:border-white/5 flex items-center justify-center p-6 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={450}
              height={350}
              className="max-h-full w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
            />
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-white/90 dark:bg-[#161D2B]/90 border border-slate-200 dark:border-white/10 text-[10px] font-mono font-bold text-[#0A0A0A] dark:text-white flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF5E14]" />
              <span>Tested & Proof-Loaded</span>
            </div>
          </div>

          {/* Right Product Summary Column */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-lg bg-[#FF5E14]/10 text-[#FF5E14]">
                {product.category}
              </span>
              <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                Model: LK-{product.slug.toUpperCase().slice(0, 3)}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight leading-tight">
              {product.name}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {product.tagline}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-4 gap-2 pt-2">
              {product.highlightStats.map((stat, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-[#0D1017] border border-slate-100 dark:border-white/5 rounded-xl p-2.5 text-center">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">{stat.label}</div>
                  <div className="text-sm font-mono font-bold text-[#FF5E14] mt-0.5">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(product);
                }}
                className="px-6 py-3 bg-[#FF5E14] hover:bg-[#E04805] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-lg shadow-[#FF5E14]/25 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Request Custom Quote</span>
              </button>

              <Link
                href={`/products/${product.slug}`}
                onClick={onClose}
                className="px-4 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-[#0A0A0A] dark:text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5 border border-slate-200 dark:border-white/10"
              >
                <span>Full Page</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF5E14]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-100 dark:border-white/10 mt-6 gap-2 sm:gap-6">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
              activeTab === "overview"
                ? "border-[#FF5E14] text-[#FF5E14]"
                : "border-transparent text-slate-500 dark:text-slate-400 hover:text-[#0A0A0A] dark:hover:text-white"
            }`}
          >
            Engineering Overview
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
              activeTab === "specs"
                ? "border-[#FF5E14] text-[#FF5E14]"
                : "border-transparent text-slate-500 dark:text-slate-400 hover:text-[#0A0A0A] dark:hover:text-white"
            }`}
          >
            Parametric Specifications
          </button>
          <button
            onClick={() => setActiveTab("applications")}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
              activeTab === "applications"
                ? "border-[#FF5E14] text-[#FF5E14]"
                : "border-transparent text-slate-500 dark:text-slate-400 hover:text-[#0A0A0A] dark:hover:text-white"
            }`}
          >
            Industrial Applications
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-2">
                  System Description
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {product.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3">
                  Key Technical Features & Design Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#0D1017] border border-slate-100 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF5E14] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {product.specifications.map((spec, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50 dark:bg-[#0D1017]" : "bg-white dark:bg-[#111622]"}>
                        <td className="py-3.5 px-4 font-mono font-bold text-slate-600 dark:text-slate-400 w-1/2">
                          {spec.label}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-[#0A0A0A] dark:text-white">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {product.dimensionChart && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3 flex items-center gap-2">
                    <Table className="w-4 h-4 text-[#FF5E14]" />
                    <span>Standard Series Sizing Table</span>
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
                      <thead className="surface-graphite dark:bg-none dark:bg-[#07090D] text-white font-mono">
                        <tr>
                          {product.dimensionChart.headers.map((h, i) => (
                            <th key={i} className="py-3 px-3.5">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                        {product.dimensionChart.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                            {product.dimensionChart!.headers.map((h, cIdx) => (
                              <td key={cIdx} className="py-3 px-3.5 font-mono text-[#0A0A0A] dark:text-slate-200 font-bold">
                                {row[h]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "applications" && (
            <div className="space-y-4">
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Engineered and field-proven across continuous multi-shift production environments:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.industrialApplications.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0D1017] border border-slate-100 dark:border-white/5 flex items-center gap-3 text-xs text-slate-800 dark:text-slate-200 font-semibold"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FF5E14] shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div>
                  <h5 className="text-xs font-mono font-bold text-[#0A0A0A] dark:text-white uppercase">Need a Customized Spreader Beam or Coil Dimension?</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">LEIKTRO designs custom pole shoes, non-standard voltages, and high-temperature radiation shields to order.</p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuote(product);
                  }}
                  className="shrink-0 px-5 py-2.5 bg-[#FF5E14] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl shadow-md hover:bg-[#E04805] transition-colors"
                >
                  Consult Application Engineer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
