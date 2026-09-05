"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, Layers, Flame, Settings, ArrowRight, Filter, ShieldCheck } from "lucide-react";
import { productsData, ProductItem } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductDetailModal from "@/components/products/ProductDetailModal";
import QuickQuoteModal from "@/components/rfq/QuickQuoteModal";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

export default function ProductCatalogSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<ProductItem | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const filterTabs = [
    { id: "all", label: "All Machinery (10)", count: 10, icon: Layers },
    { id: "electro-lifting", label: "Electro Lifting Magnets", count: 4, icon: Zap },
    { id: "magnetic-separation", label: "Magnetic Separators", count: 2, icon: Filter },
    { id: "vibratory-systems", label: "Vibratory Systems", count: 2, icon: Flame },
    { id: "permanent-systems", label: "Permanent Systems", count: 2, icon: Settings },
  ];

  const filteredProducts = activeCategory === "all"
    ? productsData
    : productsData.filter((p) => p.categorySlug === activeCategory);

  const handleOpenModal = (prod: ProductItem) => {
    setSelectedProductForModal(prod);
  };

  const handleOpenQuote = (prod: ProductItem) => {
    setSelectedProductForQuote(prod);
    setIsQuoteOpen(true);
  };

  return (
    <section id="products-catalog" className="relative py-24 bg-[#F8F9FB] dark:bg-[#0D1017] border-t border-b border-slate-200 dark:border-white/10 transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5E14]/10 text-[#FF5E14] text-xs font-mono font-bold">
              <Zap className="w-3.5 h-3.5" />
              <span>Heavy Equipment Portfolio</span>
            </div>
            <TextReveal
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight"
              text="Engineered Industrial Machinery"
            />
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">
              High-permeability steel casting, Class H/C vacuum-impregnated coils, and manganese wear armor.
            </p>
          </Reveal>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold text-[#0A0A0A] dark:text-white px-3.5 py-2 rounded-xl bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#FF5E14]" />
              <span>100% Load Proof Tested</span>
            </div>
            <Link
              href="/products"
              className="px-5 py-2.5 bg-gradient-to-r from-[#1B212D] via-[#111620] to-[#0A0D14] hover:from-[#232B3B] hover:to-[#141A26] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl flex items-center gap-1.5 transition-all shadow-md border border-slate-700/60 dark:border-white/10"
            >
              <span>Parametric Specs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF5E14]" />
            </Link>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-3 rounded-2xl text-xs font-bold font-mono uppercase tracking-wider whitespace-nowrap flex items-center gap-2.5 transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#1E2535] via-[#131822] to-[#0A0D14] text-white shadow-xl ring-1 ring-[#FF5E14] border border-slate-700/80"
                    : "bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-[#0A0A0A] dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#FF5E14]" : "text-slate-500 dark:text-slate-400"}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-[#FF5E14] text-white" : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              onOpenModal={handleOpenModal}
              onOpenQuote={handleOpenQuote}
            />
          ))}
        </div>

        {/* Bottom Custom Engineering Callout */}
        <Reveal className="mt-16">
          <div className="surface-graphite surface-graphite-glow p-8 rounded-3xl text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1.5 text-center md:text-left">
              <h4 className="text-xl font-display font-black text-white">
                Need a custom spreader beam or high-temp skull magnet?
              </h4>
              <p className="text-xs text-slate-400 font-medium">
                Bespoke electromagnetic simulation, custom brackets, and turn-key rectifier panels.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedProductForQuote(productsData[0]);
                setIsQuoteOpen(true);
              }}
              className="shrink-0 px-8 py-3.5 bg-[#FF5E14] hover:bg-[#E04805] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl shadow-xl transition-all hover:-translate-y-0.5"
            >
              Consult Engineering Team
            </button>
          </div>
        </Reveal>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductForModal}
        isOpen={!!selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onOpenQuote={handleOpenQuote}
      />

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={selectedProductForQuote?.id}
      />
    </section>
  );
}
