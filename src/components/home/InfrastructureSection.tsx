"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  MapPin,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import { companyData } from "@/data/company";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

export default function InfrastructureSection() {
  const facilityHighlights = [
    {
      title: "Automated Coil Winding Bays",
      description: "Precision tension-controlled winding stations for high-conductivity electrolytic copper and anodized aluminum foil coils.",
      image: "/assets/Research-and-Development.jpg",
      badge: "Class H & C Insulation",
    },
    {
      title: "Vacuum Pressure Impregnation (VPI)",
      description: "High-vacuum autoclave chamber forcing solventless silicone resin into every inter-turn microscopic void for solid-core encapsulation.",
      image: "/assets/Quality.jpg",
      badge: "IP68 Submersion Grade",
    },
    {
      title: "50-Ton Magnetic Load Test Pit",
      description: "Dedicated testing bay with calibrated load cells verifying cold/hot current draw, temperature rise, and 3:1 break-away pull force.",
      image: "/assets/Sustainable-Practices.jpg",
      badge: "100% Pre-Dispatch Sign-Off",
    },
    {
      title: "Heavy Fabrication & Machining",
      description: "CNC plasma cutting, submerged arc welding, and precision milling of low-carbon steel shells and manganese impact armor.",
      image: "/assets/Planet-Conservation.jpg",
      badge: "Hardox Armored",
    },
  ];

  return (
    <section id="infrastructure" className="relative py-24 bg-[#F8F9FB] dark:bg-[#0D1017] border-b border-slate-200 dark:border-white/10 transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <Reveal className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5E14]/10 text-[#FF5E14] text-xs font-mono font-bold">
              <Factory className="w-3.5 h-3.5" />
              <span>Manufacturing Works & Heavy Infrastructure</span>
            </div>
            <TextReveal
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight"
              text="State-of-the-Art Plant Works"
            />
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">
              A fully integrated heavy-machinery facility in Ahmedabad — in-house coil winding, vacuum potting, and high-tonnage proof testing.
            </p>
          </Reveal>

          {/* Plant Location Badge */}
          <div className="bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 rounded-2xl p-5 shrink-0 flex items-start gap-3.5 text-xs shadow-sm">
            <MapPin className="w-4 h-4 text-[#FF5E14] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-[#0A0A0A] dark:text-white font-mono">Registered Works:</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">Survey No 63 & 64 Pasunj, Daskroi</div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">Ahmedabad, Gujarat - 382433, India</div>
            </div>
          </div>
        </div>

        {/* 4-Grid Infrastructure Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilityHighlights.map((fac, idx) => (
            <Reveal
              key={idx}
              delay={idx * 0.08}
              className="card-spotlight group bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/10 hover:border-[#FF5E14] dark:hover:border-[#FF5E14] rounded-3xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-[0_22px_44px_-14px_rgba(255,94,20,0.28)] hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="shine relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-black/40">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-gradient-to-r from-[#1B212D]/95 to-[#0A0D14]/95 text-white text-[10px] font-mono font-bold border border-white/10 shadow-sm">
                  {fac.badge}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 space-y-2">
                <h3 className="text-base font-display font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#FF5E14] dark:group-hover:text-[#FF5E14] transition-colors leading-tight">
                  {fac.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {fac.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Factory Plant Tour Banner with Sleek Charcoal-to-Black Gradient */}
        <Reveal className="mt-14 surface-graphite surface-graphite-glow p-8 sm:p-10 rounded-3xl text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-[#FF5E14] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#FF5E14]" />
              <span>Plant Inspections & Witness Testing Welcomed</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-display font-black text-white">
              Schedule a Factory Audit in Ahmedabad
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl">
              Procurement heads, plant GMs, and third-party inspectors (TPI) can witness live coil surge and break-away pull tests.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#FF5E14] hover:bg-[#E04805] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl shadow-xl transition-all hover:-translate-y-0.5"
            >
              Schedule Plant Visit
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
