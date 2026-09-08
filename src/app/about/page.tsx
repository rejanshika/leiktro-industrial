"use client";

import TextReveal from "@/components/motion/TextReveal";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  ShieldCheck,
  Award,
  MapPin,
  CheckCircle2,
  Users,
  Leaf,
  ArrowRight,
  Phone,
} from "lucide-react";
import { companyData } from "@/data/company";
import InfrastructureSection from "@/components/home/InfrastructureSection";

export default function AboutPage() {
  return (
    <div className="pt-32 lg:pt-36 pb-24 bg-white dark:bg-[#07090D] min-h-screen transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb & Header */}
        <div className="mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FF5E14] font-bold">About Works & Company</span>
          </div>

          <TextReveal
            as="h1"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight"
            text="About LEIKTRO Engineering Works"
          />
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-medium">
            A specialized Indian manufacturer of electromagnetic lifters, magnetic separators, and vibrating furnace chargers engineered for continuous heavy industrial duty in steel mills, foundries, and scrap recycling plants worldwide.
          </p>
        </div>

        {/* Company Overview 2-Col Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-slate-200 dark:border-white/10">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5E14]/10 text-[#FF5E14] text-xs font-mono font-bold">
              <Factory className="w-3.5 h-3.5" />
              <span>Pasunj, Ahmedabad Manufacturing Facility</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#0A0A0A] dark:text-white leading-tight">
              Pioneering Magnetic & Vibratory Technology
            </h2>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              Headquartered at Survey No 63 & 64 Pasunj, Daskroi in Ahmedabad, Gujarat, LEIKTRO combines advanced electromagnetic FEA modeling with precision heavy manufacturing. Our team specializes in solving severe material handling bottlenecks where standard equipment fails due to extreme temperature or continuous vibration.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#111622] border border-slate-200 dark:border-white/10">
                <div className="text-2xl font-display font-black text-[#FF5E14]">ISO 9001:2015</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">Quality Management System</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#111622] border border-slate-200 dark:border-white/10">
                <div className="text-2xl font-display font-black text-[#0A0A0A] dark:text-white">50-Ton</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">Magnetic Proof Testing Bay</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="shine group relative w-full h-80 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-100 dark:bg-[#111622]">
              <Image
                src="/assets/Dynamic-and-Innovative-Company.jpg"
                alt="LEIKTRO Manufacturing Facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A]/90 backdrop-blur-md rounded-2xl p-4 text-white text-xs flex items-center justify-between">
                <span className="font-mono font-bold">Ahmedabad Heavy Engineering Plant</span>
                <span className="text-[#FF5E14] font-bold">Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Plant Infrastructure Component */}
        <InfrastructureSection />

        {/* Culture & Sustainable Practices in 3 Columns */}
        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#111622] border border-slate-200 dark:border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5E14]/10 text-[#FF5E14] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white">Application Engineering Team</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Our engineering specialists collaborate closely with crane manufacturers, furnace OEMs, and steel plant engineers to tailor magnetic flux and mounting brackets.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#111622] border border-slate-200 dark:border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5E14]/10 text-[#FF5E14] flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white">Energy Efficiency & Copper Purity</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              We utilize 99.99% high-purity electrolytic copper to minimize $I^2R$ electrical resistance losses, delivering maximum magnetic flux per kilowatt consumed.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#111622] border border-slate-200 dark:border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5E14]/10 text-[#FF5E14] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white">Certified Quality Assurance</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Stage-wise quality inspection from raw ingot casting and winding insulation dielectric flash to full 3:1 safety margin load pull testing.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
