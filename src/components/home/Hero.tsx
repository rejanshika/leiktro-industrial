"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Calculator,
} from "lucide-react";
import QuickQuoteModal from "@/components/rfq/QuickQuoteModal";
import CountUp from "@/components/motion/CountUp";
import TextReveal from "@/components/motion/TextReveal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const reduce = useReducedMotion();

  // Cursor position across the hero, spring-smoothed for a natural magnetic pull
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 45, damping: 15, mass: 0.7 };
  const leanZ = useSpring(useTransform(px, [-0.5, 0.5], [-6, 6]), spring);
  const turnY = useSpring(useTransform(px, [-0.5, 0.5], [-16, 16]), spring);
  const tiltX = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), spring);
  const chipShift = useSpring(useTransform(px, [-0.5, 0.5], [14, -14]), spring);

  const handlePointer = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const resetPointer = () => {
    px.set(0);
    py.set(0);
  };

  const sparks = [
    { top: "20%", left: "14%", d: 5, delay: 0 },
    { top: "34%", left: "86%", d: 6.5, delay: 0.8 },
    { top: "62%", left: "8%", d: 5.5, delay: 1.6 },
    { top: "74%", left: "78%", d: 7, delay: 0.4 },
    { top: "12%", left: "60%", d: 6, delay: 1.2 },
    { top: "54%", left: "50%", d: 5, delay: 2 },
  ];

  return (
    <section
      onMouseMove={handlePointer}
      onMouseLeave={resetPointer}
      className="relative pt-32 lg:pt-36 pb-20 bg-white dark:bg-[#07090D] overflow-hidden transition-colors duration-200"
    >
      {/* Modern Geometric Dots Pattern */}
      <div className="absolute inset-0 modern-dots opacity-40 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF5E14]/5 dark:bg-[#FF5E14]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bold Headline & Editorial Content (7 Cols) */}
          <motion.div
            className="lg:col-span-7 space-y-7 text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >

            {/* Top Pill Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 dark:from-white/10 dark:to-white/5 border border-slate-200/90 dark:border-white/10 text-[#0A0A0A] dark:text-white text-xs font-mono font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF5E14] animate-pulse" />
              <span className="tracking-wider uppercase">Heavy Industrial Magnetic Engineering</span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="text-[#FF5E14]">ISO 9001:2015</span>
            </motion.div>

            {/* Giant Display Headline */}
            <motion.div variants={item} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[4.1rem] font-display font-black text-[#0A0A0A] dark:text-white tracking-[-0.03em] leading-[1.02]">
                <TextReveal as="span" className="block" text="Industrial Magnetic Power." />
                <span className="block text-shimmer">Engineered for Extreme Loads.</span>
              </h1>
            </motion.div>

            {/* Modern Supporting Description */}
            <motion.p variants={item} className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-lg font-medium leading-relaxed">
              High-tonnage lifting magnets, overband separators, and vibratory furnace chargers — built for continuous 24/7 duty in steel plants, foundries, and scrap yards.
            </motion.p>

            {/* Action Buttons with rich subtle gradients */}
            <motion.div variants={item} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#products-catalog"
                className="px-8 py-4 bg-gradient-to-r from-[#FF5E14] via-[#FF6A26] to-[#E04805] hover:from-[#E04805] hover:to-[#C83C00] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2.5 shadow-xl shadow-[#FF5E14]/30 transition-all uppercase tracking-wider font-mono active:scale-95 hover:-translate-y-0.5"
              >
                <span>Explore Machinery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="surface-graphite px-7 py-4 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-black/20 transition-all uppercase tracking-wider font-mono border border-white/10 active:scale-95 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-[#FF5E14]" />
                <span>Request B2B RFQ</span>
              </button>

              <Link
                href="/products#magnet-sizer"
                className="px-5 py-4 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 hover:from-slate-200 hover:to-slate-100 dark:from-white/10 dark:to-white/5 text-[#0A0A0A] dark:text-white font-mono text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all border border-slate-200/90 dark:border-white/10 shadow-xs active:scale-95"
              >
                <Calculator className="w-4 h-4 text-[#FF5E14]" />
                <span>Sizer Tool</span>
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Column: Hanging 3D magnet — swings slowly, leans toward your cursor */}
          <motion.div
            className="lg:col-span-5 relative min-h-[440px] sm:min-h-[520px] lg:min-h-[600px] [perspective:1400px]"
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Soft ambient glow behind the magnet */}
            <div className="absolute top-[38%] left-1/2 -translate-x-1/2 w-72 h-72 bg-[#FF5E14]/15 dark:bg-[#FF5E14]/25 rounded-full blur-[90px] pointer-events-none" />

            {/* Floating spark particles drifting up toward the magnet */}
            {sparks.map((s, i) => (
              <motion.span
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#FF5E14] pointer-events-none"
                style={{ top: s.top, left: s.left, boxShadow: "0 0 8px rgba(255,94,20,0.9)" }}
                animate={reduce ? undefined : { y: [0, -18, 0], opacity: [0, 1, 0], scale: [0.5, 1.15, 0.5] }}
                transition={{ duration: s.d, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}

            {/* Rotating magnetic-field rings */}
            <div className="absolute inset-x-0 top-[44%] flex items-center justify-center pointer-events-none">
              <motion.div
                className="absolute w-72 h-72 rounded-full border border-dashed border-[#FF5E14]/25"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-52 h-52 rounded-full border border-[#FF5E14]/15"
                animate={reduce ? undefined : { rotate: -360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Fixed mount bar the chain hangs from */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1.5 rounded-full bg-gradient-to-r from-transparent via-slate-300 dark:via-white/25 to-transparent" />

            {/* L1: idle slow pendulum + gentle bob */}
            <motion.div
              className="absolute top-0 left-1/2 w-[76%] max-w-[360px] will-change-transform"
              style={{ x: "-50%", transformOrigin: "50% 0%" }}
              animate={reduce ? undefined : { rotate: [-6, 6, -6], y: [0, -7, 0] }}
              transition={{
                rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {/* L2: leans toward the cursor (swings from the hook) */}
              <motion.div style={{ rotateZ: reduce ? 0 : leanZ, transformOrigin: "50% 0%" }}>
                {/* L3: gentle 3D turn/tilt toward the cursor */}
                <motion.div
                  className="[transform-style:preserve-3d]"
                  style={{ rotateX: reduce ? 0 : tiltX, rotateY: reduce ? 0 : turnY }}
                >
                  <Image
                    src="/assets/Circular-Lifting.png"
                    alt="LEIKTRO Circular Lifting Magnet"
                    width={520}
                    height={650}
                    priority
                    className="w-full h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_30px_45px_rgba(0,0,0,0.7)]"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Ground shadow that sways with the magnet */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
              <motion.div
                className="w-44 h-6 bg-black/25 dark:bg-black/50 rounded-[100%] blur-xl"
                animate={reduce ? undefined : { x: [-24, 24, -24], scaleX: [1, 0.82, 1], opacity: [0.55, 0.36, 0.55] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Floating spec chips with cursor parallax */}
            <motion.div className="absolute top-[48%] left-0 sm:left-2 z-10" style={{ x: reduce ? 0 : chipShift }}>
              <motion.div
                className="px-3 py-2 rounded-xl bg-white/90 dark:bg-[#161D2B]/90 backdrop-blur-sm border border-slate-200/90 dark:border-white/10 shadow-lg"
                animate={reduce ? undefined : { y: [0, -9, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Duty · Temp</div>
                <div className="text-xs font-mono font-bold text-[#0A0A0A] dark:text-white">75% ED · 600°C</div>
              </motion.div>
            </motion.div>

            <motion.div className="absolute top-[64%] right-0 sm:right-2 z-10" style={{ x: reduce ? 0 : chipShift }}>
              <motion.div
                className="px-3 py-2 rounded-xl bg-white/90 dark:bg-[#161D2B]/90 backdrop-blur-sm border border-slate-200/90 dark:border-white/10 shadow-lg"
                animate={reduce ? undefined : { y: [0, 9, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Max Lift</div>
                <div className="text-xs font-mono font-bold text-[#FF5E14]">up to 45 T</div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>

        {/* Modern High-Contrast 4-Metric Bar with Charcoal-to-Black Gradient */}
        <motion.div
          className="surface-graphite surface-graphite-glow mt-16 text-white rounded-3xl p-8 shadow-2xl border border-white/10"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="border-r border-white/10 pr-4 last:border-none">
              <div className="text-3xl lg:text-4xl font-display font-black text-[#FF5E14] flex items-center justify-center md:justify-start gap-1">
                <CountUp to={75} suffix="%" />
                <span className="text-xs font-mono text-white font-normal uppercase">ED</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Continuous Duty Rating</div>
              <div className="text-xs text-slate-400 mt-0.5">Multi-shift, non-stop operation</div>
            </div>

            <div className="border-r border-white/10 pr-4 last:border-none">
              <div className="text-3xl lg:text-4xl font-display font-black text-white flex items-center justify-center md:justify-start gap-1">
                <CountUp to={600} suffix="°C" />
              </div>
              <div className="text-sm font-bold text-white mt-1">High-Temp Scrap Limit</div>
              <div className="text-xs text-slate-400 mt-0.5">Class C insulation + heat shields</div>
            </div>

            <div className="border-r border-white/10 pr-4 last:border-none">
              <div className="text-3xl lg:text-4xl font-display font-black text-[#FF5E14] flex items-center justify-center md:justify-start gap-1">
                <CountUp to={100} suffix="%" />
              </div>
              <div className="text-sm font-bold text-white mt-1">Magnetic FEA Modeling</div>
              <div className="text-xs text-slate-400 mt-0.5">Simulated before casting</div>
            </div>

            <div>
              <div className="text-3xl lg:text-4xl font-display font-black text-white flex items-center justify-center md:justify-start gap-1">
                <span>ISO</span>
                <span className="text-lg font-mono text-[#FF5E14]">9001:2015</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Certified Plant Works</div>
              <div className="text-xs text-slate-400 mt-0.5">Pasunj, Ahmedabad</div>
            </div>
          </div>
        </motion.div>

      </div>

      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct="circular-lifting-magnets"
      />
    </section>
  );
}
