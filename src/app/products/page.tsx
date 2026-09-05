"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Layers,
  Flame,
  Settings,
  Search,
  ArrowRight,
  Filter,
  ShieldCheck,
  FileText,
  Eye,
  Calculator,
} from "lucide-react";
import { productsData, ProductItem } from "@/data/products";
import ProductDetailModal from "@/components/products/ProductDetailModal";
import QuickQuoteModal from "@/components/rfq/QuickQuoteModal";
import MagnetSizerTool from "@/components/home/MagnetSizerTool";
import { tiltMove, tiltReset } from "@/lib/utils";
import TextReveal from "@/components/motion/TextReveal";
import Reveal from "@/components/motion/Reveal";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<ProductItem | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const categories = [
    { id: "all", label: "All Machinery (10)" },
    { id: "electro-lifting", label: "Electro Lifting Magnets" },
    { id: "magnetic-separation", label: "Magnetic Separation" },
    { id: "vibratory-systems", label: "Vibratory Systems" },
    { id: "permanent-systems", label: "Permanent Systems" },
  ];

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchesCat = selectedCategory === "all" || p.categorySlug === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.industrialApplications.some((a) => a.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleOpenModal = (prod: ProductItem) => {
    setSelectedProductForModal(prod);
  };

  const handleOpenQuote = (prod: ProductItem) => {
    setSelectedProductForQuote(prod);
    setIsQuoteOpen(true);
  };

  return (
    <div className="pt-32 lg:pt-36 pb-24 bg-white dark:bg-[#07090D] min-h-screen transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumbs & Header */}
        <div className="mb-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#FF5E14] font-bold">Products Portfolio</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <TextReveal
                as="h1"
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight"
                text="Industrial Equipment Portfolio"
              />
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-medium mt-2">
                Engineered for high-tonnage lifting, continuous tramp iron separation, and shock-free furnace charging across steel melting shops, rolling mills, foundries, and scrap recycling plants.
              </p>
            </div>

            <a
              href="#magnet-sizer"
              className="px-5 py-3 bg-[#FF5E14] hover:bg-[#E04805] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-lg shadow-[#FF5E14]/25 transition-all shrink-0 self-start md:self-auto"
            >
              <Calculator className="w-4 h-4" />
              <span>Use Magnet Sizer Configurator</span>
            </a>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#F8F9FB] dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-3xl p-5 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-[#1E2535] via-[#131822] to-[#0A0D14] text-white shadow-md ring-1 ring-[#FF5E14] border border-slate-700/80"
                    : "bg-white dark:bg-[#111622] text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white border border-slate-200 dark:border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search equipment or application..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-xl text-xs text-[#0A0A0A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF5E14]"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredProducts.map((product, idx) => (
              <Reveal key={product.id} delay={Math.min(idx, 5) * 0.05} className="h-full">
              <div
                onMouseMove={tiltMove}
                onMouseLeave={tiltReset}
                className="card-tilt card-spotlight group relative h-full bg-gradient-to-br from-white via-[#FBFBFD] to-[#F1F3F7] dark:from-[#111622] dark:to-[#0D1017] border border-slate-200/90 dark:border-white/10 hover:border-[#FF5E14] dark:hover:border-[#FF5E14] rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-[0_26px_50px_-14px_rgba(255,94,20,0.34)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-lg bg-[#FF5E14]/10 text-[#FF5E14]">
                      {product.category}
                    </span>
                  </div>

                  <div
                    onClick={() => handleOpenModal(product)}
                    className="shine relative w-full h-56 rounded-2xl bg-gradient-to-br from-[#F6F7FA] to-[#EBEFF4] dark:from-[#0D1017] dark:to-[#161D2B] border border-slate-200/70 dark:border-white/5 flex items-center justify-center p-5 overflow-hidden cursor-pointer group/img shadow-inner"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="max-h-full w-auto object-contain transition-transform duration-500 group-hover/img:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                    />
                    <div className="absolute inset-0 bg-[#0A0A0A]/40 opacity-0 group-hover/img:opacity-100 backdrop-blur-[2px] transition-opacity flex items-center justify-center gap-2">
                      <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF5E14] to-[#E04805] text-white text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Specs</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-xl font-display font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#FF5E14] dark:group-hover:text-[#FF5E14] transition-colors leading-tight">
                      <Link href={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed font-medium">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-white/10">
                    {product.highlightStats.slice(0, 2).map((stat, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-white to-slate-50 dark:from-[#0D1017] dark:to-[#161D2B] border border-slate-200/80 dark:border-white/5 rounded-xl px-3 py-2 shadow-xs">
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono font-medium">{stat.label}</div>
                        <div className="text-xs font-mono font-bold text-[#0A0A0A] dark:text-white mt-0.5">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center gap-2.5">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 py-2.5 px-3 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 hover:from-slate-200 hover:to-slate-100 dark:from-white/10 dark:to-white/5 text-[#0A0A0A] dark:text-white text-xs font-bold rounded-xl transition-all text-center font-mono uppercase tracking-wider border border-slate-200/90 dark:border-white/10 shadow-xs active:scale-95"
                  >
                    View Specs
                  </Link>

                  <button
                    onClick={() => handleOpenQuote(product)}
                    className="flex-1 py-2.5 px-3 bg-gradient-to-r from-[#FF5E14] via-[#FF6A26] to-[#E04805] hover:from-[#E04805] hover:to-[#C83C00] text-white text-xs font-bold rounded-xl shadow-md shadow-[#FF5E14]/20 flex items-center justify-center gap-1.5 transition-all font-mono uppercase tracking-wider active:scale-95"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="bg-[#F8F9FB] dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-3xl p-12 text-center space-y-3 mb-20">
            <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white">No Machinery Found Matching &quot;{searchTerm}&quot;</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">Try searching for &quot;scrap&quot;, &quot;billet&quot;, &quot;conveyor&quot;, &quot;furnace&quot; or select &quot;All Machinery&quot;.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-6 py-2.5 bg-[#FF5E14] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Integrated Magnet Sizing & Selection Configurator on the Products Page */}
        <div className="pt-10 border-t border-slate-200 dark:border-white/10">
          <MagnetSizerTool />
        </div>
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
    </div>
  );
}
