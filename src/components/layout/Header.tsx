"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Settings,
  Flame,
  FileText,
} from "lucide-react";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import QuickQuoteModal from "@/components/rfq/QuickQuoteModal";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const categories = [
    {
      title: "Electro Lifting Magnets",
      description: "Scrap, billet, excavator & plate heavy magnetic lifters",
      slug: "electro-lifting",
      icon: Zap,
      products: productsData.filter((p) => p.categorySlug === "electro-lifting"),
    },
    {
      title: "Magnetic Separation",
      description: "Overband electromagnetic cross-belts & magnetic pulleys",
      slug: "magnetic-separation",
      icon: Layers,
      products: productsData.filter((p) => p.categorySlug === "magnetic-separation"),
    },
    {
      title: "Vibratory Material Handling",
      description: "Vibrating furnace chargers & vibro bulk feeders",
      slug: "vibratory-systems",
      icon: Flame,
      products: productsData.filter((p) => p.categorySlug === "vibratory-systems"),
    },
    {
      title: "Permanent Magnetic Systems",
      description: "Suspension magnets & rare-earth manual lifters",
      slug: "permanent-systems",
      icon: Settings,
      products: productsData.filter((p) => p.categorySlug === "permanent-systems"),
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
        {/* Top Technical / Contact Bar with subtle industrial graphite gradient */}
        <div className="hidden lg:block bg-gradient-to-r from-[#161B26] via-[#0E121A] to-[#161B26] text-white text-xs py-2 px-6 xl:px-10 border-b border-white/10">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-300">
                  ISO 9001:2015 Heavy Engineering Works • Ahmedabad, Gujarat, India
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300 text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#FF5E14]" />
                <span>Survey No 63 & 64 Pasunj, Daskroi</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={`tel:${companyData.contact.phone}`}
                className="flex items-center gap-1.5 hover:text-[#FF5E14] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5E14]" />
                <span className="font-mono font-medium">{companyData.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${companyData.contact.email}`}
                className="flex items-center gap-1.5 hover:text-[#FF5E14] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF5E14]" />
                <span>{companyData.contact.email}</span>
              </a>
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white">
                <span>Class H / 75% ED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/15 shadow-lg dark:shadow-[0_4px_25px_rgba(0,0,0,0.6)] py-2.5"
              : "bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-sm border-b border-slate-200/80 dark:border-white/10 py-3 shadow-sm"
          }`}
        >
          <div className="w-full px-4 sm:px-6 xl:px-10 flex items-center justify-between">
            {/* Logo — Slightly smaller with clean badge */}
            <Link href="/" className="flex items-center group focus:outline-none shrink-0">
              <div className="flex items-center justify-center bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 dark:border-white/20 shadow-sm group-hover:border-[#FF5E14] transition-colors">
                <Image
                  src="/assets/Leiktro-logo.png"
                  alt="LEIKTRO"
                  width={112}
                  height={26}
                  className="h-6 sm:h-6.5 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 mx-auto">
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
                  pathname === "/"
                    ? "text-[#FF5E14] bg-[#FF5E14]/10 dark:bg-[#FF5E14]/20 font-bold"
                    : "text-[#0A0A0A] dark:text-slate-100 hover:text-[#FF5E14] dark:hover:text-[#FF5E14] hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                Home
              </Link>

              {/* Products Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                <Link
                  href="/products"
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    pathname.startsWith("/products")
                      ? "text-[#FF5E14] bg-[#FF5E14]/10 dark:bg-[#FF5E14]/20 font-bold"
                      : "text-[#0A0A0A] dark:text-slate-100 hover:text-[#FF5E14] dark:hover:text-[#FF5E14] hover:bg-slate-100 dark:hover:bg-white/10"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isProductsDropdownOpen ? "rotate-180 text-[#FF5E14]" : "text-slate-400 dark:text-slate-300"
                    }`}
                  />
                </Link>

                {/* Mega Menu Dropdown */}
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] pt-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="bg-white dark:bg-[#0E1422] border border-slate-200 dark:border-white/15 rounded-2xl shadow-2xl p-6">
                      <div className="grid grid-cols-2 gap-6 pb-5 border-b border-slate-100 dark:border-white/10">
                        {categories.map((cat) => {
                          const Icon = cat.icon;
                          return (
                            <div key={cat.slug} className="group/cat">
                              <div className="flex items-center gap-2 mb-2.5">
                                <div className="p-1.5 rounded-lg bg-[#FF5E14]/10 text-[#FF5E14]">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A] dark:text-white font-bold">
                                  {cat.title}
                                </span>
                              </div>
                              <ul className="space-y-1.5 pl-2">
                                {cat.products.map((p) => (
                                  <li key={p.id}>
                                    <Link
                                      href={`/products/${p.slug}`}
                                      className="text-xs text-slate-600 dark:text-slate-200 hover:text-[#FF5E14] dark:hover:text-[#FF5E14] flex items-center justify-between group/link py-0.5 transition-colors font-medium"
                                    >
                                      <span>{p.name}</span>
                                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-[#FF5E14]" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>

                      {/* Mega Menu Bottom Bar */}
                      <div className="pt-4 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 font-medium">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#FF5E14]" />
                          <span>Custom Coil Windings & High-Temp (600°C) Sizing</span>
                        </div>
                        <Link
                          href="/products"
                          className="text-[#FF5E14] hover:text-[#E04805] font-bold flex items-center gap-1 group"
                        >
                          <span>View Full 10-Machine Catalog</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/industries"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
                  pathname === "/industries"
                    ? "text-[#FF5E14] bg-[#FF5E14]/10 dark:bg-[#FF5E14]/20 font-bold"
                    : "text-[#0A0A0A] dark:text-slate-100 hover:text-[#FF5E14] dark:hover:text-[#FF5E14] hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                Industries
              </Link>

              <Link
                href="/engineering"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
                  pathname === "/engineering"
                    ? "text-[#FF5E14] bg-[#FF5E14]/10 dark:bg-[#FF5E14]/20 font-bold"
                    : "text-[#0A0A0A] dark:text-slate-100 hover:text-[#FF5E14] dark:hover:text-[#FF5E14] hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                Quality
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
                  pathname === "/about"
                    ? "text-[#FF5E14] bg-[#FF5E14]/10 dark:bg-[#FF5E14]/20 font-bold"
                    : "text-[#0A0A0A] dark:text-slate-100 hover:text-[#FF5E14] dark:hover:text-[#FF5E14] hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                Plant Works
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${
                  pathname === "/contact"
                    ? "text-[#FF5E14] bg-[#FF5E14]/10 dark:bg-[#FF5E14]/20 font-bold"
                    : "text-[#0A0A0A] dark:text-slate-100 hover:text-[#FF5E14] dark:hover:text-[#FF5E14] hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-4 sm:px-5 py-2.5 bg-[#FF5E14] hover:bg-[#E04805] text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-[#FF5E14]/25 transition-all active:scale-95 uppercase tracking-wider font-mono whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Get Quote</span>
              </button>

              {/* Theme Toggle Button — Placed in Very Corner */}
              <div className="border-l border-slate-200 dark:border-white/15 pl-2 sm:pl-3">
                <ThemeToggle />
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#0A0A0A] dark:text-white hover:text-[#FF5E14] rounded-lg bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/15"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#0B0F19] border-b border-slate-200 dark:border-white/15 px-6 py-6 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-lg text-base font-bold text-[#0A0A0A] dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
              >
                Home
              </Link>
              <Link
                href="/products"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-lg text-base font-bold text-[#FF5E14] hover:bg-slate-50 dark:hover:bg-white/5"
              >
                Products (All 10 Models)
              </Link>
              <div className="pl-4 space-y-1 py-1">
                {productsData.slice(0, 6).map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    onClick={closeMobileMenu}
                    className="block py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-[#FF5E14]"
                  >
                    • {p.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/industries"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-lg text-base font-bold text-[#0A0A0A] dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
              >
                Industries & Applications
              </Link>
              <Link
                href="/engineering"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-lg text-base font-bold text-[#0A0A0A] dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
              >
                Quality (6-Stage Flow)
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-lg text-base font-bold text-[#0A0A0A] dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
              >
                Plant Works
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-lg text-base font-bold text-[#0A0A0A] dark:text-white hover:bg-slate-50 dark:hover:bg-white/5"
              >
                Contact & Plant Map
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/15 space-y-3">
              <button
                onClick={() => {
                  closeMobileMenu();
                  setIsQuoteModalOpen(true);
                }}
                className="w-full py-3.5 bg-[#FF5E14] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#FF5E14]/25"
              >
                <FileText className="w-4 h-4" />
                <span>Request B2B Quotation</span>
              </button>

              <a
                href={`tel:${companyData.contact.phone}`}
                className="w-full py-2.5 bg-slate-100 dark:bg-white/10 text-[#0A0A0A] dark:text-white font-mono text-xs font-bold rounded-xl flex items-center justify-center gap-2 border border-slate-200 dark:border-white/15"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5E14]" />
                <span>Call Plant: {companyData.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}
