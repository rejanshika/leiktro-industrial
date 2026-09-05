"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  Check,
  RotateCcw,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { productsData } from "@/data/products";
import QuickQuoteModal from "@/components/rfq/QuickQuoteModal";
import TextReveal from "@/components/motion/TextReveal";

export default function MagnetSizerTool() {
  const [selectedMaterial, setSelectedMaterial] = useState("heavy-scrap");
  const [selectedCarrier, setSelectedCarrier] = useState("eot-crane");
  const [selectedTemp, setSelectedTemp] = useState("ambient");
  const [selectedDuty, setSelectedDuty] = useState("continuous");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const materialOptions = [
    { id: "heavy-scrap", label: "Loose scrap metal", hint: "Mixed / melting scrap" },
    { id: "pig-iron", label: "Pig iron & solid chunks", hint: "Dense foundry pieces" },
    { id: "billets", label: "Billets & blooms", hint: "Long square steel bars" },
    { id: "plates", label: "Plates & slabs", hint: "Flat steel sheets" },
    { id: "tramp-iron", label: "Stray metal on a belt", hint: "Cleaning a conveyor" },
  ];

  const carrierOptions = [
    { id: "eot-crane", label: "Overhead crane", hint: "Factory gantry / EOT" },
    { id: "excavator", label: "Excavator", hint: "Mobile machine in a yard" },
    { id: "conveyor-cross", label: "Above a conveyor", hint: "Fixed in one spot" },
    { id: "furnace-deck", label: "Feeding a furnace", hint: "Charging an induction furnace" },
  ];

  const tempOptions = [
    { id: "ambient", label: "Cold", range: "up to 100°C" },
    { id: "medium", label: "Warm", range: "100–300°C" },
    { id: "extreme", label: "Red-hot", range: "300–650°C" },
  ];

  const dutyOptions = [
    { id: "continuous", label: "All day", sub: "Non-stop 24/7" },
    { id: "shift", label: "1–2 shifts", sub: "Standard workday" },
    { id: "permanent", label: "No power", sub: "Permanent magnet" },
  ];

  const calculateRecommendation = () => {
    if (selectedMaterial === "billets") {
      return {
        productSlug: "billet-handling-magnet",
        productName: "LK-BHM Billet Handling Magnet",
        modelCode: selectedTemp === "extreme" ? "LK-BHM-1200HT" : "LK-BHM-1200",
        diameterOrSize: "1200 × 350 mm pole",
        powerKW: "8.5 kW",
        insulationClass: selectedTemp === "extreme" ? "Up to 650°C" : "Up to 200°C",
        scrapCapacityPerLift: "Built for solid billets",
        solidCapacityPerLift: "12 – 18 tons per lift",
        highlightNotes: [
          "Deep magnetic grip for bundled billets",
          selectedTemp === "extreme" ? "Bottom heat shields for red-hot billets" : "Manganese wear plate on the base",
        ],
      };
    }

    if (selectedCarrier === "excavator") {
      return {
        productSlug: "excavator-lifting-magnet",
        productName: "LK-EXM Excavator Lifting Magnet",
        modelCode: "LK-EXM-110",
        diameterOrSize: "Ø 1100 mm round",
        powerKW: "6.2 kW",
        insulationClass: "Up to 200°C",
        scrapCapacityPerLift: "550 – 750 kg of scrap",
        solidCapacityPerLift: "7.5 tons (solid)",
        highlightNotes: [
          "Bolts straight onto your excavator",
          "Fast pick-up and drop (under 1.5s)",
        ],
      };
    }

    if (selectedMaterial === "tramp-iron" || selectedCarrier === "conveyor-cross") {
      return {
        productSlug: selectedDuty === "permanent" ? "permanent-suspension-magnet" : "electromagnetic-separator",
        productName: selectedDuty === "permanent" ? "LK-PSM Permanent Suspension Magnet" : "LK-EMS Cross-Belt Separator",
        modelCode: selectedDuty === "permanent" ? "LK-PSM-1000" : "LK-EMS-1200",
        diameterOrSize: "1000 – 1400 mm belt",
        powerKW: selectedDuty === "permanent" ? "No power needed" : "5.5 kW",
        insulationClass: "Up to 200°C",
        scrapCapacityPerLift: "Cleans the belt non-stop",
        solidCapacityPerLift: "Pulls stray metal up to 45 kg",
        highlightNotes: [
          selectedDuty === "permanent" ? "Runs on permanent magnets — zero electricity" : "Self-cleaning belt runs continuously",
          "Weatherproof for outdoor crusher plants",
        ],
      };
    }

    if (selectedCarrier === "furnace-deck") {
      return {
        productSlug: "mechanical-vibrating-furnace-charger",
        productName: "LK-VFC Vibrating Furnace Charger",
        modelCode: "LK-VFC-5000",
        diameterOrSize: "3500 × 1200 mm trough",
        powerKW: "11 kW",
        insulationClass: "Furnace-side heat rated",
        scrapCapacityPerLift: "3.5 – 5.0 tons per charge",
        solidCapacityPerLift: "Handles heavy skull & returns",
        highlightNotes: [
          "Protects the furnace lining from shock",
          "Radio remote-controlled trolley",
        ],
      };
    }

    // Default: Circular Scrap Magnet
    return {
      productSlug: "circular-lifting-magnets",
      productName: "LK-CLM Circular Lifting Magnet",
      modelCode: selectedTemp === "extreme" ? "LK-CLM-150HT" : selectedTemp === "medium" ? "LK-CLM-135M" : "LK-CLM-130",
      diameterOrSize: selectedTemp === "extreme" ? "Ø 1500 mm" : "Ø 1300 mm",
      powerKW: selectedTemp === "extreme" ? "12.5 kW" : "9.8 kW",
      insulationClass: selectedTemp === "extreme" ? "Up to 600°C" : "Up to 200°C",
      scrapCapacityPerLift: selectedTemp === "extreme" ? "1100 – 1600 kg of scrap" : "850 – 1250 kg of scrap",
      solidCapacityPerLift: selectedTemp === "extreme" ? "16.5 tons (solid)" : "12.0 tons (solid)",
      highlightNotes: [
        "Cast steel body with sealed terminal box",
        selectedTemp === "extreme" ? "Extra heat barrier for hot scrap" : "High-fill copper/aluminium coil",
      ],
    };
  };

  const recommendation = calculateRecommendation();
  const matchedProduct = productsData.find((p) => p.slug === recommendation.productSlug) || productsData[0];

  const handleReset = () => {
    setSelectedMaterial("heavy-scrap");
    setSelectedCarrier("eot-crane");
    setSelectedTemp("ambient");
    setSelectedDuty("continuous");
  };

  const cardBase = "p-4 rounded-2xl text-left border transition-all";
  const cardOn = "bg-gradient-to-br from-white to-orange-50/30 dark:from-[#161D2B] dark:to-[#111622] border-[#FF5E14] text-[#0A0A0A] dark:text-white shadow-md ring-2 ring-[#FF5E14]/30";
  const cardOff = "bg-gradient-to-br from-white via-slate-50/70 to-slate-100/50 dark:from-[#111622] dark:to-[#0D1017] border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20 shadow-xs";

  return (
    <section id="magnet-sizer" className="relative py-24 bg-white dark:bg-[#07090D] overflow-hidden transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5E14]/10 text-[#FF5E14] text-xs font-mono font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Find Your Magnet</span>
          </div>
          <TextReveal
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#0A0A0A] dark:text-white tracking-tight"
            text="Magnet Sizing & Selection Tool"
          />
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Answer two quick questions and we&apos;ll suggest the right model, size, and lifting capacity.
          </p>
        </div>

        {/* 2-Column Configurator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Simple Guided Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-7">

            {/* Question 1: Material Type */}
            <div>
              <label className="text-sm font-display font-bold text-[#0A0A0A] dark:text-white flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#FF5E14] text-white flex items-center justify-center text-xs shrink-0">1</span>
                <span>What are you handling?</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {materialOptions.map((opt) => {
                  const isSelected = selectedMaterial === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedMaterial(opt.id)}
                      className={`${cardBase} ${isSelected ? cardOn : cardOff}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#0A0A0A] dark:text-white">{opt.label}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#FF5E14] shrink-0" />}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">{opt.hint}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question 2: Carrier Equipment */}
            <div>
              <label className="text-sm font-display font-bold text-[#0A0A0A] dark:text-white flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#FF5E14] text-white flex items-center justify-center text-xs shrink-0">2</span>
                <span>How is it carried?</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {carrierOptions.map((opt) => {
                  const isSelected = selectedCarrier === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedCarrier(opt.id)}
                      className={`${cardBase} ${isSelected ? cardOn : cardOff}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#0A0A0A] dark:text-white">{opt.label}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#FF5E14] shrink-0" />}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">{opt.hint}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional fine-tuning: Temperature + Usage as compact pill rows */}
            <div className="pt-2 border-t border-slate-100 dark:border-white/10 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold pt-4">
                Fine-tune (optional)
              </div>

              {/* Temperature pills */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 w-28 shrink-0">How hot is it?</span>
                <div className="flex flex-wrap gap-2">
                  {tempOptions.map((opt) => {
                    const isSelected = selectedTemp === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedTemp(opt.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                          isSelected
                            ? "bg-[#FF5E14] text-white border-[#FF5E14] shadow-sm"
                            : "bg-white dark:bg-[#111622] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                        }`}
                      >
                        {opt.label}
                        <span className={`ml-1.5 font-mono font-normal ${isSelected ? "text-white/80" : "text-slate-400"}`}>{opt.range}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Usage pills */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 w-28 shrink-0">How often?</span>
                <div className="flex flex-wrap gap-2">
                  {dutyOptions.map((opt) => {
                    const isSelected = selectedDuty === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedDuty(opt.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                          isSelected
                            ? "bg-[#FF5E14] text-white border-[#FF5E14] shadow-sm"
                            : "bg-white dark:bg-[#111622] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                        }`}
                      >
                        {opt.label}
                        <span className={`ml-1.5 font-mono font-normal ${isSelected ? "text-white/80" : "text-slate-400"}`}>{opt.sub}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleReset}
                  className="text-xs font-mono text-slate-500 hover:text-black dark:text-slate-400 dark:hover:text-white flex items-center gap-1.5 transition-colors font-bold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start over</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Live Recommended Spec Box (5 Cols) */}
          <div className="lg:col-span-5 surface-graphite surface-graphite-glow text-white border border-white/10 rounded-3xl p-7 shadow-2xl">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-md bg-gradient-to-r from-[#FF5E14] to-[#E04805] text-white font-bold shadow-xs">
                Our Suggestion
              </span>
              <span className="text-xs font-mono font-bold text-[#FF5E14]">
                {recommendation.modelCode}
              </span>
            </div>

            <h3 className="text-2xl font-display font-black text-white leading-tight">
              {recommendation.productName}
            </h3>

            {/* Machine Image Frame */}
            <div className="relative w-full h-44 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 my-4 shadow-inner">
              <Image
                src={matchedProduct.image}
                alt={recommendation.productName}
                width={300}
                height={200}
                className="max-h-full w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Key Specs (plain language) */}
            <div className="space-y-2.5 text-xs font-mono border-t border-b border-white/10 py-4 my-4">
              <div className="flex justify-between gap-3">
                <span className="text-slate-400">Size</span>
                <span className="text-white font-bold text-right">{recommendation.diameterOrSize}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-400">Power</span>
                <span className="text-[#FF5E14] font-bold text-right">{recommendation.powerKW}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-400">Handles heat</span>
                <span className="text-white font-bold text-right">{recommendation.insulationClass}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-400">Lifts (scrap)</span>
                <span className="text-[#FF5E14] font-bold text-right">{recommendation.scrapCapacityPerLift}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-400">Lifts (solid)</span>
                <span className="text-white font-bold text-right">{recommendation.solidCapacityPerLift}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2 mb-6">
              {recommendation.highlightNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5E14] shrink-0 mt-0.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full py-4 bg-gradient-to-r from-[#FF5E14] via-[#FF6A26] to-[#E04805] hover:from-[#E04805] hover:to-[#C83C00] text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-[#FF5E14]/25 transition-all active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>Get a Quote for This</span>
              </button>

              <Link
                href={`/products/${recommendation.productSlug}`}
                className="w-full py-3 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/15 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all border border-white/10"
              >
                <span>See Full Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={recommendation.productSlug}
        initialSpecs={{
          modelCode: recommendation.modelCode,
          material: selectedMaterial,
          carrier: selectedCarrier,
        }}
      />
    </section>
  );
}
