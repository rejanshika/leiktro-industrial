"use client";

import React from "react";
import { PlayCircle } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

export default function VideoShowcase() {
  return (
    <section className="relative py-24 bg-white dark:bg-[#07090D] border-b border-slate-200 dark:border-white/10 transition-colors duration-200 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF5E14]/5 dark:bg-[#FF5E14]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <Reveal className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5E14]/10 text-[#FF5E14] text-xs font-mono font-bold">
            <PlayCircle className="w-3.5 h-3.5" />
            <span>LEIKTRO On The Floor</span>
          </div>
          <TextReveal
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight"
            text="Built Heavy. Proven Under Load."
          />
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Real installations lifting scrap, billets, and hot skull across steel plants, foundries, and scrap yards.
          </p>
        </Reveal>

        {/* Video frame */}
        <Reveal delay={0.1}>
          <div className="surface-graphite surface-graphite-glow relative rounded-3xl p-2 sm:p-3 shadow-2xl border border-white/10">
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/assets/leiktro-showcase-poster.jpg?v=4"
              >
                <source src="/assets/leiktro-showcase.mp4?v=4" type="video/mp4" />
              </video>

              {/* corner frame accents */}
              <span className="pointer-events-none absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#FF5E14]/70 rounded-tl-lg" />
              <span className="pointer-events-none absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#FF5E14]/70 rounded-br-lg" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
