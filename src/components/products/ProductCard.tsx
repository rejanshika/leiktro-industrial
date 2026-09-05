"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, FileText } from "lucide-react";
import { ProductItem } from "@/data/products";
import { tiltMove, tiltReset } from "@/lib/utils";
import Reveal from "@/components/motion/Reveal";

interface ProductCardProps {
  product: ProductItem;
  onOpenModal: (product: ProductItem) => void;
  onOpenQuote: (product: ProductItem) => void;
  index?: number;
}

export default function ProductCard({
  product,
  onOpenModal,
  onOpenQuote,
  index = 0,
}: ProductCardProps) {
  return (
    <Reveal delay={Math.min(index, 5) * 0.06} className="h-full">
    <div
      onMouseMove={tiltMove}
      onMouseLeave={tiltReset}
      className="card-tilt card-spotlight group relative h-full bg-gradient-to-br from-white via-[#FBFBFD] to-[#F1F3F7] dark:from-[#111622] dark:to-[#0D1017] border border-slate-200/90 dark:border-white/10 hover:border-[#FF5E14] dark:hover:border-[#FF5E14] rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-[0_26px_50px_-14px_rgba(255,94,20,0.34)]"
    >
      {/* Top Header & Category Tag */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-lg bg-[#FF5E14]/10 text-[#FF5E14]">
            {product.category}
          </span>
        </div>

        {/* Machine Image Frame with subtle light & dark gradient */}
        <div
          onClick={() => onOpenModal(product)}
          className="shine relative w-full h-56 rounded-2xl bg-gradient-to-br from-[#F6F7FA] to-[#EBEFF4] dark:from-[#0D1017] dark:to-[#161D2B] border border-slate-200/70 dark:border-white/5 flex items-center justify-center p-5 overflow-hidden cursor-pointer group/img shadow-inner"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="max-h-full w-auto object-contain transition-transform duration-500 group-hover/img:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />

          {/* Hover Overlay Button */}
          <div className="absolute inset-0 bg-[#0A0A0A]/40 opacity-0 group-hover/img:opacity-100 backdrop-blur-[2px] transition-opacity flex items-center justify-center gap-2">
            <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF5E14] to-[#E04805] text-white text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Specs</span>
            </span>
          </div>

          {/* Bottom badge */}
          <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-white/90 dark:bg-[#161D2B]/90 backdrop-blur-sm border border-slate-200 dark:border-white/10 text-[10px] font-mono font-bold text-[#0A0A0A] dark:text-white shadow-sm">
            {product.heroBadge}
          </div>
        </div>

        {/* Product Title & Tagline */}
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

        {/* Highlight Spec Metrics Grid with subtle gradient */}
        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-white/10">
          {product.highlightStats.slice(0, 2).map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white to-slate-50 dark:from-[#0D1017] dark:to-[#161D2B] border border-slate-200/80 dark:border-white/5 rounded-xl px-3 py-2 shadow-xs">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono font-medium">{stat.label}</div>
              <div className="text-sm font-mono font-bold text-[#0A0A0A] dark:text-white mt-0.5">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Action Buttons with subtle gradient */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center gap-2.5">
        <button
          onClick={() => onOpenModal(product)}
          className="flex-1 py-2.5 px-3 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 hover:from-slate-200 hover:to-slate-150 dark:from-white/10 dark:to-white/5 text-[#0A0A0A] dark:text-slate-200 text-xs font-bold rounded-xl transition-all text-center font-mono uppercase tracking-wider border border-slate-200/90 dark:border-white/10 shadow-xs active:scale-95"
        >
          Details
        </button>

        <button
          onClick={() => onOpenQuote(product)}
          className="flex-1 py-2.5 px-3 bg-gradient-to-r from-[#FF5E14] via-[#FF6A26] to-[#E04805] hover:from-[#E04805] hover:to-[#C83C00] text-white text-xs font-bold rounded-xl shadow-md shadow-[#FF5E14]/20 flex items-center justify-center gap-1.5 transition-all font-mono uppercase tracking-wider active:scale-95"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Quote</span>
        </button>
      </div>
    </div>
    </Reveal>
  );
}
