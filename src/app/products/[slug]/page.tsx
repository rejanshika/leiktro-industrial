import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Zap,
  Flame,
  ArrowRight,
  FileText,
  CheckCircle2,
  Table,
  Phone,
  Layers,
  ChevronLeft,
} from "lucide-react";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return productsData.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = productsData.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-32 lg:pt-36 pb-24 bg-white dark:bg-[#07090D] min-h-screen transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
          <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-black dark:hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[#FF5E14] font-bold">{product.name}</span>
        </div>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-slate-200 dark:border-white/10">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6">
            <div className="shine group relative w-full aspect-square max-w-[500px] mx-auto rounded-3xl bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 flex items-center justify-center p-8 overflow-hidden shadow-xl">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={400}
                className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
                priority
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-lg surface-graphite dark:bg-none dark:bg-[#161D2B] text-white text-[11px] font-mono font-bold">
                {product.heroBadge}
              </div>
              <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-lg bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 text-xs font-mono font-bold text-[#0A0A0A] dark:text-white shadow-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FF5E14]" />
                <span>100% Load Tested</span>
              </div>
            </div>
          </div>

          {/* Right Spec & RFQ Summary Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-lg bg-[#FF5E14]/10 text-[#FF5E14]">
                {product.category}
              </span>
              <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                Model: LK-{product.slug.toUpperCase()}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {product.tagline}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {product.highlightStats.map((st, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-xl p-3 text-center">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">{st.label}</div>
                  <div className="text-sm font-mono font-bold text-[#FF5E14] mt-0.5">{st.value}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#FF5E14] hover:bg-[#E04805] text-white font-bold text-xs font-mono uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-[#FF5E14]/25 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Request B2B Quotation</span>
              </Link>

              <a
                href={`tel:${companyData.contact.phone}`}
                className="px-6 py-4 surface-graphite dark:bg-none dark:bg-white/10 dark:hover:bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-md border border-white/10 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#FF5E14]" />
                <span>Call Plant Direct</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Tabs & Specifications */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-slate-200 dark:border-white/10">
          {/* Left Column: Description & Features (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
                <span>Engineering Design & Operational Overview</span>
              </h2>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {product.overview}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
                <span>Key Technical Features & Protections</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 flex items-start gap-3 text-xs text-slate-800 dark:text-slate-200 font-semibold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF5E14] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
                <span>Industrial Applications</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.industrialApplications.map((app, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono font-bold text-[#0A0A0A] dark:text-slate-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14]" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Parametric Specifications Table (5 Cols) */}
          <div className="lg:col-span-5 bg-[#F8F9FB] dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2">
              <Table className="w-4 h-4 text-[#FF5E14]" />
              <span>Parametric Technical Specifications</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
                <tbody className="divide-y divide-slate-200 dark:divide-white/10">
                  {product.specifications.map((spec, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white dark:bg-[#111622]" : "bg-slate-50 dark:bg-[#0D1017]"}>
                      <td className="py-3 px-3.5 font-mono font-bold text-slate-600 dark:text-slate-400 w-1/2">
                        {spec.label}
                      </td>
                      <td className="py-3 px-3.5 font-mono font-bold text-[#0A0A0A] dark:text-white">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Dimensional Chart */}
        {product.dimensionChart && (
          <div className="py-14 border-b border-slate-200 dark:border-white/10 space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-display font-black text-[#0A0A0A] dark:text-white">
                Standard Series Sizing & Lifting Capacity Chart
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                Standard manufactured configurations (Custom dimensional pole shoes fabricated on order)
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
                <thead className="surface-graphite dark:bg-none dark:bg-[#111622] text-white font-mono">
                  <tr>
                    {product.dimensionChart.headers.map((h, i) => (
                      <th key={i} className="py-3.5 px-4 font-bold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  {product.dimensionChart.rows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white dark:bg-[#0D1017]" : "bg-slate-50 dark:bg-[#111622]"}>
                      {product.dimensionChart!.headers.map((h, cIdx) => (
                        <td key={cIdx} className="py-3.5 px-4 font-mono text-[#0A0A0A] dark:text-white font-bold">
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

        {/* Related Equipment */}
        {relatedProducts.length > 0 && (
          <div className="pt-14 space-y-6">
            <h2 className="text-xl sm:text-2xl font-display font-black text-[#0A0A0A] dark:text-white">
              Related {product.category} Machinery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <div
                  key={rp.id}
                  className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 hover:border-[#FF5E14] dark:hover:border-[#FF5E14] rounded-3xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl group"
                >
                  <div className="relative w-full h-44 rounded-2xl bg-slate-50 dark:bg-[#0D1017] border border-slate-100 dark:border-white/5 flex items-center justify-center p-4">
                    <Image
                      src={rp.image}
                      alt={rp.name}
                      width={300}
                      height={200}
                      className="max-h-full w-auto object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base font-display font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#FF5E14] dark:group-hover:text-[#FF5E14] transition-colors mt-4">
                    {rp.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2 font-medium">{rp.tagline}</p>
                  <Link
                    href={`/products/${rp.slug}`}
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5E14] hover:text-black dark:hover:text-white flex items-center gap-1 mt-4"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
