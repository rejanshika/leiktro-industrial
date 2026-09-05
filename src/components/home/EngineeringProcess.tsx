"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Activity,
  Cpu,
  Flame,
  Layers,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

export default function EngineeringProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const reduce = useReducedMotion();

  const steps = [
    {
      step: "01",
      title: "Electromagnetic FEA Flux Modeling",
      subtitle: "Ampere-Turn Optimization & Saturation Mapping",
      description: "Prior to steel shell casting, our engineering team executes multi-dimensional Finite Element Analysis (FEA) to model magnetic flux lines, current density, and pole saturation. This guarantees deep scrap penetration without wasted amp-draw.",
      metrics: [
        { label: "FEA Simulation", val: "Ansys Maxwell Magnetostatic" },
        { label: "Flux Saturation", val: "Optimized at 1.8 – 2.1 Tesla" },
      ],
      deliverable: "Optimized Magnetic Circuit Architecture & Coil Sizing CAD",
      icon: Cpu,
    },
    {
      step: "02",
      title: "High-Permeability Shell Casting & Fabrication",
      subtitle: "Low-Carbon High-Flux Steel Casting & Impact Armor",
      description: "The magnet body is cast from ultra-low carbon steel with high magnetic permeability to maximize magnetic conductance. The bottom pole shoe is reinforced with high-manganese non-magnetic alloy plate to withstand continuous skull dropping without field distortion.",
      metrics: [
        { label: "Shell Metallurgy", val: "High Permeability Low-C Cast Steel" },
        { label: "Bottom Armor", val: "Heavy Manganese Impact Shield" },
      ],
      deliverable: "Precision-Machined Heavy Shock-Resistant Enclosure",
      icon: Activity,
    },
    {
      step: "03",
      title: "Precision Tension-Controlled Coil Winding",
      subtitle: "99.99% Electrolytic Copper & Nomex Class H/C Tape",
      description: "Coils are wound on automated CNC winding stations with constant tension control to eliminate winding looseness. Each turn is interleaved with Class H (180°C) or Class C (220°C–600°C) Nomex and Kapton insulation tape.",
      metrics: [
        { label: "Conductor Grade", val: "99.99% Electrolytic Copper / Al" },
        { label: "Dielectric Withstand", val: "> 2,500V Surge Tested" },
      ],
      deliverable: "Precision-Tensioned High-Dielectric Coil Core Assembly",
      icon: Layers,
    },
    {
      step: "04",
      title: "Vacuum Pressure Impregnation (VPI) Treatment",
      subtitle: "Total Moisture, Air-Pocket, and Vibration Void Elimination",
      description: "The assembled coil and magnet body undergo a rigorous multi-stage Vacuum Pressure Impregnation (VPI) cycle in our specialized pressure vessel. Under deep vacuum, solventless high-temperature epoxy compound penetrates every microscopic inter-turn void.",
      metrics: [
        { label: "Impregnation", val: "Full Vacuum & Pressure Potting" },
        { label: "Ingress Rating", val: "IP68 Hermetically Sealed" },
      ],
      deliverable: "Solid-Potted Monolithic Core Resistant to Moisture & Shocks",
      icon: Flame,
    },
    {
      step: "05",
      title: "100% Load & 3:1 Break-Away Proof Testing",
      subtitle: "Cold/Hot Resistance, Surge Flash, and Tonnage Pull Verification",
      description: "Every single LEIKTRO magnet enters our 50-Ton testing bay before dispatch. We measure cold resistance, run the coil to thermal equilibrium to measure hot current drop, and perform a certified static magnetic break-away pull test ensuring a minimum 3:1 safety margin.",
      metrics: [
        { label: "Safety Proof Margin", val: "3:1 Minimum Pull-Off Ratio" },
        { label: "Insulation Test", val: "100MΩ+ at 1000V DC Megger" },
      ],
      deliverable: "Signed Quality Inspection Certificate & Load Test Record",
      icon: ShieldCheck,
    },
    {
      step: "06",
      title: "On-Site Commissioning & Global Lifecycle Support",
      subtitle: "Crane Integration, Rectifier Tuning, and Spare Coil Availability",
      description: "LEIKTRO commissioning technicians ensure seamless integration with your crane control panels, thyristor rectifiers, and battery backup systems (BBU). We maintain complete documentation and backup coils for instant field dispatch.",
      metrics: [
        { label: "Support Coverage", val: "Direct Plant Engineering Support" },
        { label: "Spares Guarantee", val: "100% Genuine Components in Stock" },
      ],
      deliverable: "Turn-Key Commissioning Sign-Off & Continuous Field Support",
      icon: Award,
    },
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section id="engineering-process" className="relative py-24 bg-white dark:bg-[#07090D] border-b border-slate-200 dark:border-white/10 transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <Reveal className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5E14]/10 text-[#FF5E14] text-xs font-mono font-bold">
              <Activity className="w-3.5 h-3.5" />
              <span>Engineering & Manufacturing Protocol</span>
            </div>
            <TextReveal
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight"
              text="6-Stage Manufacturing Workflow"
            />
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">
              A zero-compromise 6-phase lifecycle built to withstand 24/7 shock-loading and extreme heat.
            </p>
          </Reveal>

          <Link
            href="/engineering"
            className="px-5 py-2.5 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 hover:from-slate-200 hover:to-slate-100 dark:from-white/10 dark:to-white/5 text-[#0A0A0A] dark:text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl flex items-center gap-1.5 transition-all shadow-xs border border-slate-200/90 dark:border-white/10 shrink-0"
          >
            <span>Full Quality Standards</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF5E14]" />
          </Link>
        </div>

        {/* Step Indicator Progress Bar with subtle gradients */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {steps.map((st, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#1A202C] via-[#10151F] to-[#070A10] border-[#FF5E14] text-white shadow-xl ring-1 ring-[#FF5E14]"
                    : isCompleted
                    ? "bg-gradient-to-br from-white via-slate-50 to-slate-100/70 dark:from-[#111622] dark:to-[#0D1017] border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20 shadow-xs"
                    : "bg-gradient-to-br from-white to-slate-50/50 dark:from-[#0D1017] dark:to-[#111622] border-slate-200/80 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      isActive ? "text-[#FF5E14]" : "text-slate-400"
                    }`}
                  >
                    STAGE {st.step}
                  </span>
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5E14]" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  )}
                </div>
                <div className="text-xs font-bold mt-1.5 line-clamp-1">
                  {st.title.split(" ")[1]} {st.title.split(" ")[2]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Step Active Display Card with Charcoal-to-Black Gradient */}
        <div className="surface-graphite surface-graphite-glow text-white border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10"
          >
            
            {/* Left Stage Details (8 Cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 text-white font-mono text-xs font-bold">
                <span className="text-[#FF5E14]">Phase {current.step} of 06</span>
                <span>•</span>
                <span>{current.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-medium">
                {current.description}
              </p>

              {/* Stage Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono"
                  >
                    <span className="text-slate-400">{m.label}:</span>
                    <span className="font-bold text-[#FF5E14]">{m.val}</span>
                  </div>
                ))}
              </div>

              {/* Deliverable Badge */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#FF5E14] shrink-0" />
                <span>Phase Output: <strong className="text-white">{current.deliverable}</strong></span>
              </div>
            </div>

            {/* Right Stage Controls & Navigation (4 Cols) */}
            <div className="lg:col-span-4 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#FF5E14]/20 border border-[#FF5E14]/40 text-[#FF5E14] flex items-center justify-center mx-auto">
                <StepIcon className="w-8 h-8" />
              </div>

              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  LEIKTRO Quality Standard
                </div>
                <div className="text-base font-bold text-white mt-1">
                  100% Pre-Dispatch Verification
                </div>
              </div>

              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-white/15 to-white/10 hover:from-white/25 hover:to-white/15 text-xs font-mono font-bold text-white transition-all active:scale-95 border border-white/10"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5E14] via-[#FF6A26] to-[#E04805] hover:from-[#E04805] hover:to-[#C83C00] text-xs font-mono font-bold text-white transition-all shadow-md active:scale-95"
                >
                  Next Phase →
                </button>
              </div>
            </div>

          </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
