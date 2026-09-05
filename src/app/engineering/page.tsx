"use client";

import TextReveal from "@/components/motion/TextReveal";

import React from "react";
import Link from "next/link";
import {
  Cpu,
  Layers,
  Flame,
  ShieldCheck,
  CheckCircle2,
  Settings,
  ArrowRight,
  Activity,
  Award,
  FileText,
} from "lucide-react";
import EngineeringProcess from "@/components/home/EngineeringProcess";

export default function EngineeringPage() {
  return (
    <div className="pt-32 lg:pt-36 pb-24 bg-white dark:bg-[#07090D] min-h-screen transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb & Header */}
        <div className="mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FF5E14] font-bold">Engineering & Quality</span>
          </div>

          <TextReveal
            as="h1"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight"
            text="Electromagnetic Engineering & Quality Standards"
          />
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-medium">
            Discover the science, metallurgy, finite element simulation, and vacuum pressure impregnation protocols that make LEIKTRO heavy equipment outlast extreme industrial wear.
          </p>
        </div>

        {/* 3 Core Technical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-[#181E2C] via-[#0E131E] to-[#070A10] text-white border border-slate-800 dark:border-white/10 rounded-3xl p-8 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5E14]/20 border border-[#FF5E14]/30 text-[#FF5E14] flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-display font-bold text-white">
              Magnetic FEA Flux Simulation
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              We model the finite element ampere-turns, magnetic saturation levels, and air-gap penetration depth prior to casting to ensure maximum scrap payload per crane cycle.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#181E2C] via-[#0E131E] to-[#070A10] text-white border border-slate-800 dark:border-white/10 rounded-3xl p-8 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5E14]/20 border border-[#FF5E14]/30 text-[#FF5E14] flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-display font-bold text-white">
              Class H / Class C Insulation
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Wound with 99.99% high-purity electrolytic copper and interleaved with Nomex, Kapton, and mica tapes capable of surviving continuous 600°C furnace environments.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#181E2C] via-[#0E131E] to-[#070A10] text-white border border-slate-800 dark:border-white/10 rounded-3xl p-8 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5E14]/20 border border-[#FF5E14]/30 text-[#FF5E14] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-display font-bold text-white">
              3:1 Proof Pull Testing Bay
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Every newly wound magnet enters our 50-Ton calibrated testing bay for hot/cold resistance checks, dielectric withstand testing (&gt; 2500V), and verified static break-away pull.
            </p>
          </div>
        </div>

        {/* 6-Stage Timeline Section Component */}
        <EngineeringProcess />

        {/* Plant Witness Testing Banner */}
        <div className="mt-16 bg-[#F8F9FB] dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-display font-black text-[#0A0A0A] dark:text-white">
              Request Factory Witness Inspection in Ahmedabad
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl font-medium">
              We welcome customer inspectors and third-party agencies (Bureau Veritas, DNV, SGS, TUV) to witness coil winding, VPI potting, and proof testing.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 bg-[#FF5E14] hover:bg-[#E04805] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl shadow-md transition-all shrink-0"
          >
            Arrange Inspection
          </Link>
        </div>

      </div>
    </div>
  );
}
