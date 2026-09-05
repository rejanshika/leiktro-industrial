"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Award,
  ArrowRight,
  Cpu,
} from "lucide-react";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="surface-graphite text-slate-400 text-sm border-t border-white/10 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Plant Overview (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block focus:outline-none">
              <div className="bg-white px-3.5 py-2 rounded-xl inline-flex items-center justify-center shadow-md">
                <Image
                  src="/assets/Leiktro-logo.png"
                  alt="LEIKTRO Logo"
                  width={130}
                  height={35}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
              Heavy-duty electro-magnetic lifting systems, overband separators, and vibratory furnace chargers for steel plants, foundries, scrap yards, and mining worldwide.
            </p>

            {/* Certifications Badge Group */}
            <div className="pt-2 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                <Award className="w-3.5 h-3.5 text-[#FF5E14]" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF5E14]" />
                <span>IP68 Waterproof</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                <Cpu className="w-3.5 h-3.5 text-[#FF5E14]" />
                <span>Class H/C 600°C</span>
              </div>
            </div>
          </div>

          {/* Column 2: Equipment Portfolio (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
              <span>Machinery Portfolio</span>
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              {productsData.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-slate-400 hover:text-[#FF5E14] flex items-center justify-between group transition-colors"
                  >
                    <span>{p.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5E14]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-xs text-[#FF5E14] hover:underline font-bold inline-flex items-center gap-1 pt-1 font-mono uppercase tracking-wider"
                >
                  <span>View All 10 Models</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Plant (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
              <span>Solutions</span>
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Steel Melting Shops
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Rolling Mills & Billets
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Foundries & Melting
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Scrap Recycling Yards
                </Link>
              </li>
              <li>
                <Link href="/engineering" className="hover:text-white transition-colors">
                  FEA & Coil Winding
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Ahmedabad Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Works & Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5E14]" />
              <span>Plant & Inquiries</span>
            </h3>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5E14] shrink-0 mt-0.5" />
                <div className="text-slate-300 font-medium">
                  <p className="font-bold text-white">Works & Factory:</p>
                  <p>{companyData.address.street}</p>
                  <p>{companyData.address.locality}</p>
                  <p>{companyData.address.city}, {companyData.address.state} - {companyData.address.postalCode}</p>
                  <p className="text-slate-400">{companyData.address.country}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#FF5E14] shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">Technical Direct Line:</p>
                  <a
                    href={`tel:${companyData.contact.phone}`}
                    className="text-white font-mono font-bold hover:text-[#FF5E14] transition-colors"
                  >
                    {companyData.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF5E14] shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">Official Communications:</p>
                  <a
                    href={`mailto:${companyData.contact.email}`}
                    className="text-white font-medium hover:text-[#FF5E14] transition-colors"
                  >
                    {companyData.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            <span>© {currentYear} {companyData.legalName}. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span>Engineered in Ahmedabad, Gujarat, India</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms of Business
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Plant Map & Visits
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
