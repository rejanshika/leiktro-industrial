export interface SizingOption {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface SizingResult {
  modelCode: string;
  productName: string;
  productSlug: string;
  diameterOrSize: string;
  powerKW: string;
  dutyRating: string;
  insulationClass: string;
  scrapCapacityPerLift: string;
  solidCapacityPerLift: string;
  recommendedChains: string;
  generatorRequired: string;
  highlightNotes: string[];
}

export const materialOptions: SizingOption[] = [
  {
    id: "heavy-scrap",
    label: "Heavy Scrap / HMS-1 / Skulls",
    description: "Loose or sheared scrap, pig iron chunks, slag skull buttons",
    icon: "Boxes",
  },
  {
    id: "billets-blooms",
    label: "Steel Billets & Blooms (CCM)",
    description: "Square billets 80x80 to 200x200mm, continuous casting runouts",
    icon: "Layers",
  },
  {
    id: "plates-slabs",
    label: "Steel Plates & Heavy Slabs",
    description: "Flat rolled steel sheets, structural plates, cutting table loading",
    icon: "Square",
  },
  {
    id: "excavator-scrap",
    label: "Demolition & Mobile Yard Scrap",
    description: "Mobile material handling, rail wagon clearing, demolition steel",
    icon: "Truck",
  },
  {
    id: "furnace-charging",
    label: "Induction Furnace Charging",
    description: "Batch charging scrap & pig iron into induction/arc furnaces",
    icon: "Flame",
  },
  {
    id: "tramp-extraction",
    label: "Conveyor Tramp Metal Extraction",
    description: "Continuous crusher protection on heavy bulk material belts",
    icon: "ShieldAlert",
  },
];

export const carrierOptions: SizingOption[] = [
  {
    id: "eot-crane",
    label: "EOT Overhead Gantry Crane",
    description: "Standard factory or SMS heavy gantry crane with DC magnet control panel",
    icon: "Anchor",
  },
  {
    id: "excavator",
    label: "Hydraulic Excavator (12T - 50T)",
    description: "Crawler excavator or mobile material handler with hydraulic generator",
    icon: "Truck",
  },
  {
    id: "rail-trolley",
    label: "Rail-Guided Charging Car",
    description: "Motorized charging car for induction furnace deck travel",
    icon: "TrainTrack",
  },
  {
    id: "conveyor-structure",
    label: "Conveyor Cross-Belt Structure",
    description: "Suspended overhead on bulk handling conveyor transfer points",
    icon: "GitFork",
  },
];

export const capacityRanges = [
  { id: "cap-small", label: "Crane SWL: Up to 5 Tons (Small Bay)" },
  { id: "cap-medium", label: "Crane SWL: 5 to 10 Tons (Standard SMS)" },
  { id: "cap-large", label: "Crane SWL: 10 to 25 Tons (Heavy Mill)" },
  { id: "cap-extra", label: "Crane SWL: 25 to 50 Tons+ (High Tonnage)" },
];

export const tempOptions = [
  { id: "temp-ambient", label: "Ambient Cold Scrap (< 100°C)", class: "Class H Insulation (180°C)" },
  { id: "temp-warm", label: "Warm Scrap & Returns (100°C – 300°C)", class: "Class H Insulation + Radiation Shield" },
  { id: "temp-hot", label: "Hot CCM Billets & Hot Skull (300°C – 650°C)", class: "Class C Insulation (220°C+) + Dual Shield" },
];

export function calculateMagnetRecommendation(
  material: string,
  carrier: string,
  capacity: string,
  temp: string
): SizingResult {
  if (material === "furnace-charging") {
    return {
      modelCode: "LK-VFC-15T",
      productName: "Mechanical Vibrating Furnace Charger",
      productSlug: "mechanical-vibrating-furnace-charger",
      diameterOrSize: "15 m³ Hopper / 3.5m Vibrating Trough",
      powerKW: "15.0 kW (Dual Vibrator Motors)",
      dutyRating: "Continuous Induction Duty",
      insulationClass: "Class H (IP66 Enclosure)",
      scrapCapacityPerLift: "12 - 15 Tons per batch charge",
      solidCapacityPerLift: "Controlled 150 TPH discharge",
      recommendedChains: "Heavy coil springs with rubber snubbers",
      generatorRequired: "415V 3-Phase 50Hz Plant Supply",
      highlightNotes: [
        "Eliminates molten metal splash hazard completely",
        "Protects expensive induction furnace refractory lining",
        "Variable feed rate controlled via wireless remote pendant",
      ],
    };
  }

  if (material === "tramp-extraction") {
    return {
      modelCode: "LK-OBS-1200",
      productName: "Overband Electromagnetic Separator (Cross-Belt)",
      productSlug: "electromagnetic-separator",
      diameterOrSize: "1200mm Belt Width / 400mm Gap",
      powerKW: "7.5 kW Electromagnet + 3.0 kW Belt Drive",
      dutyRating: "100% Continuous 24/7",
      insulationClass: "Oil-Cooled Class H (ONAN)",
      scrapCapacityPerLift: "Captures tramp iron up to 45 kg",
      solidCapacityPerLift: "Up to 900 TPH bulk material stream",
      recommendedChains: "4-point turnbuckle suspension set",
      generatorRequired: "220V DC Rectifier Unit Included",
      highlightNotes: [
        "Continuous self-cleaning vulcanized cleated cross belt",
        "Protects downstream crushers and high-speed belts",
        ">99.5% tramp metal capture efficiency",
      ],
    };
  }

  if (carrier === "excavator" || material === "excavator-scrap") {
    return {
      modelCode: "LK-EXM-1300",
      productName: "Excavator Lifting Magnet (Hydraulic Powered)",
      productSlug: "excavator-lifting-magnet",
      diameterOrSize: "Ø 1300 mm (51 inches)",
      powerKW: "11.5 kW (Hydraulic Generator Driven)",
      dutyRating: "75% ED Mobile Duty",
      insulationClass: "Class H Vacuum Potting (IP68)",
      scrapCapacityPerLift: "850 - 1,200 kg (Heavy Scrap)",
      solidCapacityPerLift: "18,000 kg (Solid Steel Ingot)",
      recommendedChains: "Direct excavator quick-coupler / pin bracket",
      generatorRequired: "Integrated 15 kW Hydraulic Generator",
      highlightNotes: [
        "Direct plug-and-play into 20T–35T excavator hydraulics",
        "Fast 1.2-second load demagnetization drop cycle",
        "Submersible IP68 sealed shell for all-weather yards",
      ],
    };
  }

  if (material === "billets-blooms") {
    const isHot = temp === "temp-hot";
    return {
      modelCode: isHot ? "LK-BHM-1100-HT" : "LK-BHM-1100-STD",
      productName: "Billet Handling Magnet (Multi-Billet Spreader)",
      productSlug: "billet-handling-magnet",
      diameterOrSize: "1100 mm Pole Face x 400 mm Width",
      powerKW: "9.8 kW per magnet unit (x2 or x3 on beam)",
      dutyRating: "75% ED Heavy Continuous",
      insulationClass: isHot ? "Class C High-Temp (220°C+)" : "Class H (180°C)",
      scrapCapacityPerLift: "Handles 6 to 10 Billets (150x150 mm)",
      solidCapacityPerLift: "24,000 kg with 2-magnet Spreader Beam",
      recommendedChains: "Grade 80 alloy double leg chains with swivel hooks",
      generatorRequired: "220V DC SMS Magnet Controller + 20min Battery Backup",
      highlightNotes: [
        isHot ? "Equipped with bottom radiation shields for 650°C red-hot billets" : "Optimized pole face contour for cold billet bundles",
        "Synchronized multi-magnet lifting eliminates billet sag",
        "Meets international 3:1 safety break-away criteria",
      ],
    };
  }

  if (material === "plates-slabs") {
    return {
      modelCode: "LK-RLM-1800",
      productName: "Rectangular Lifting Magnet (Plate & Structural)",
      productSlug: "rectangular-lifting-magnet",
      diameterOrSize: "1800 mm Length x 500 mm Width",
      powerKW: "8.2 kW per unit (Multi-Magnet Spreader Configuration)",
      dutyRating: "75% ED Continuous",
      insulationClass: "Class H (180°C) VPI",
      scrapCapacityPerLift: "Single or stacked plate picking",
      solidCapacityPerLift: "16,000 kg (Solid Steel Slab)",
      recommendedChains: "Multi-point suspension with rotating spreader beam",
      generatorRequired: "220V DC Thyristor Regulated Rectifier",
      highlightNotes: [
        "Partial excitation allows single-sheet de-stacking",
        "Eliminates plate peeling and deflection across 12m–18m spans",
        "Heavy armored wear plate bottom facing",
      ],
    };
  }

  // Default: Circular Lifting Magnet
  const isHot = temp === "temp-hot";
  const isLarge = capacity === "cap-large" || capacity === "cap-extra";

  return {
    modelCode: isLarge ? (isHot ? "LK-CLM-1800-HT" : "LK-CLM-1800-HD") : (isHot ? "LK-CLM-1350-HT" : "LK-CLM-1350-HD"),
    productName: "Circular Lifting Magnet (Heavy Scrap & Skull)",
    productSlug: "circular-lifting-magnets",
    diameterOrSize: isLarge ? "Ø 1800 mm (71 inches)" : "Ø 1350 mm (53 inches)",
    powerKW: isLarge ? "22.0 kW (Cold Current 100A)" : "11.8 kW (Cold Current 53A)",
    dutyRating: "75% ED (Continuous Multi-Shift)",
    insulationClass: isHot ? "Class C (220°C+) with Radiant Heat Shield" : "Class H (180°C) VPI Treatment",
    scrapCapacityPerLift: isLarge ? "2,800 kg (Pig Iron / Heavy Melt)" : "1,450 kg (Pig Iron / Heavy Melt)",
    solidCapacityPerLift: isLarge ? "36,000 kg (Solid Ingot / Skull)" : "22,000 kg (Solid Ingot / Skull)",
    recommendedChains: "Grade 80 Triple Forged Alloy Suspension Chains",
    generatorRequired: "220V DC Solid-State Control Panel with Demag Pulse",
    highlightNotes: [
      isHot ? "Engineered for hot skull and melting shop furnace charging up to 600°C" : "Deep radial cooling fins prevent coil resistance rise during 24/7 duty",
      "High-manganese non-magnetic armor bottom plate resists violent scrap gouging",
      "Supplied with certified proof-tested forged master lifting ring",
    ],
  };
}
