export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  recommendedProducts: string[];
  challenges: Array<{
    title: string;
    solution: string;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
  keyWorkflows: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: "steel-plants",
    slug: "steel-plants",
    name: "Steel Plants & Rolling Mills",
    subtitle: "High-Temperature, 24/7 Heavy Magnetics for Continuous Production",
    description: "In high-throughput steel melting shops (SMS) and rolling mills, equipment failure halts entire production lines. LEIKTRO manufactures high-duty circular lifting magnets, hot-billet spreader systems, and heavy slab magnets engineered with Class H and Class C insulation to operate reliably up to 650°C in proximity to electric arc furnaces and continuous casting machines.",
    image: "/assets/Dynamic-and-Innovative-Company.jpg",
    recommendedProducts: [
      "Circular Lifting Magnets",
      "Billet Handling Magnets",
      "Rectangular Lifting Magnets",
      "Mechanical Vibrating Furnace Chargers",
    ],
    challenges: [
      {
        title: "Extreme Radiated Heat (Up to 650°C)",
        solution: "Dual-barrier high-temperature thermal radiation shields and Class C silicone/mica coil insulation prevent thermal breakdown.",
      },
      {
        title: "High-Speed Billet Synchronization",
        solution: "PLC-controlled multi-magnet spreader beams ensure simultaneous picking of up to 12 billets with zero sag or drops.",
      },
      {
        title: "Severe Scrap Impact",
        solution: "High-manganese non-magnetic armor bottom plates and cast steel shells absorb heavy mechanical shocks.",
      },
    ],
    stats: [
      { value: "650°C", label: "Max Billet Handling Temp" },
      { value: "75%", label: "Continuous Duty Cycle" },
      { value: "< 1.5s", label: "Fast Release Drop Time" },
    ],
    keyWorkflows: [
      "EAF & Induction Furnace scrap bucket loading",
      "Continuous Casting (CCM) runout table hot billet extraction",
      "Reheating furnace charging and discharge staging",
      "Finished rebar, coil, and plate warehousing",
    ],
  },
  {
    id: "foundries-casting",
    slug: "foundries-casting",
    name: "Foundries & Casting Plants",
    subtitle: "Precision Controlled Batch Charging & Scrap Recovery",
    description: "Foundries require smooth, regulated charging to protect expensive induction furnace refractory linings while maximizing heat efficiency. LEIKTRO vibrating furnace chargers and heavy scrap magnets prevent scrap plunging, eliminate splash hazards, and automate pig iron and return sprue handling.",
    image: "/assets/Quality.jpg",
    recommendedProducts: [
      "Mechanical Vibrating Furnace Chargers",
      "Circular Lifting Magnets",
      "Magnetic Pulleys",
      "Mechanical Vibro Feeders",
    ],
    challenges: [
      {
        title: "Furnace Lining Shock & Splash Hazards",
        solution: "Variable frequency vibratory feeding introduces scrap smoothly into molten baths with zero refractory shock.",
      },
      {
        title: "Heavy Pig Iron & Dense Returns",
        solution: "Deep penetration magnetic circuits grip clustered pig iron and heavy runners without slipping.",
      },
      {
        title: "Sand Reclaiming Tramp Iron Extraction",
        solution: "High-gradient magnetic pulleys reclaim 99.8% of metal fines and chill pins from molding sand.",
      },
    ],
    stats: [
      { value: "0 Shock", label: "Refractory Protection" },
      { value: "250 TPH", label: "Max Controlled Feed Rate" },
      { value: "99.8%", label: "Tramp Metal Extraction" },
    ],
    keyWorkflows: [
      "Smooth induction furnace batch charging (1T to 50T furnaces)",
      "Pig iron and foundry return handling in raw yard",
      "Reclaimed foundry sand metal extraction",
      "Cast sprue and gate magnetic sorting",
    ],
  },
  {
    id: "scrap-recycling",
    slug: "scrap-recycling",
    name: "Scrap Yards & Metal Recycling",
    subtitle: "High-Throughput Mobile & Gantry Scrap Handling",
    description: "Scrap processing demands maximum ton-per-hour speed, extreme abrasion resistance, and versatile mounting for both EOT cranes and mobile excavators. LEIKTRO circular and excavator-mounted magnets deliver deep flux penetration to pull tangled shredded steel, turnings, and heavy HMS-1 scrap rapidly.",
    image: "/assets/Research-and-Development.jpg",
    recommendedProducts: [
      "Excavator Lifting Magnets",
      "Circular Lifting Magnets",
      "Overband Electromagnetic Separators",
      "Permanent Suspension Magnets",
    ],
    challenges: [
      {
        title: "Tangled, Low-Density Scrap Bundles",
        solution: "Deep magnetic field penetration pulls dense bundles and loose turnings from deep within scrap piles.",
      },
      {
        title: "Mobile Excavator Hydraulics",
        solution: "Plug-and-play hydraulic generator systems integrate seamlessly with 12T–50T crawler excavators.",
      },
      {
        title: "Submerged & All-Weather Yard Operations",
        solution: "IP68 hermetically sealed terminal boxes and underwater-rated resin casting protect against monsoon rains.",
      },
    ],
    stats: [
      { value: "IP68", label: "Waterproof Submersion" },
      { value: "12-50T", label: "Excavator Range" },
      { value: "3.5x", label: "Tonnage Throughput vs Grapples" },
    ],
    keyWorkflows: [
      "Container and open truck high-speed loading",
      "Barge and rail wagon rapid unloading",
      "Shear and shredder infeed table sorting",
      "Auto shredder residue (ASR) downstream separation",
    ],
  },
  {
    id: "mining-bulk-handling",
    slug: "mining-bulk-handling",
    name: "Mining, Cement & Bulk Handling",
    subtitle: "Failsafe Crusher Protection and High-Capacity Tramp Iron Removal",
    description: "In mining, quarrying, cement plants, and thermal power stations, unextracted tramp iron (excavator teeth, drill rods, rock bolts) destroys downstream cone crushers, roll crushers, and expensive conveyor belts. LEIKTRO overband electromagnetic separators and permanent suspension magnets provide failsafe capture across heavy burden depths.",
    image: "/assets/Sustainable-Practices.jpg",
    recommendedProducts: [
      "Overband Electromagnetic Separators",
      "Permanent Suspension Magnets",
      "Magnetic Pulleys",
      "Mechanical Vibro Feeders",
    ],
    challenges: [
      {
        title: "Thick Burden Depths (Up to 600mm)",
        solution: "High-gradient oil-cooled electromagnets pull buried steel rods from underneath heavy coal and ore layers.",
      },
      {
        title: "Catastrophic Crusher Damage Prevention",
        solution: "Continuous self-cleaning cross-belts discard captured tramp iron automatically into safe scrap chutes.",
      },
      {
        title: "Heavy Lump Ore Feeding",
        solution: "Hardox-armored vibro feeders handle abrasive run-of-mine lumps with zero clogging or bridging.",
      },
    ],
    stats: [
      { value: "600mm", label: "Max Suspension Clearance" },
      { value: "2400mm", label: "Max Conveyor Belt Width" },
      { value: "100%", label: "Failsafe Equipment Protection" },
    ],
    keyWorkflows: [
      "Primary jaw and gyratory crusher discharge protection",
      "Thermal power plant coal conveyor tramp metal removal",
      "Cement raw mill limestone and clinker metal extraction",
      "Quarry screening plant bulk vibro feeding",
    ],
  },
  {
    id: "heavy-fabrication-ports",
    slug: "heavy-fabrication-ports",
    name: "Heavy Fabrication, Ports & Shipyards",
    subtitle: "Precision Steel Plate, Beam, and Coil Logistics",
    description: "Handling oversized steel plates, long structural beams, and coiled wire rods requires zero load deflection and precise single-plate fanning capabilities. LEIKTRO rectangular magnets and permanent magnetic lifters provide secure, single-operator manipulation without chains, clamps, or surface damage.",
    image: "/assets/collaboration-and-team-work.jpg",
    recommendedProducts: [
      "Rectangular Lifting Magnets",
      "Permanent Magnetic Lifters",
      "Billet Handling Magnets",
      "Circular Lifting Magnets",
    ],
    challenges: [
      {
        title: "Plate Sagging and Peeling Spans",
        solution: "Multi-magnet synchronized spreader beams support long 12m–18m plates with uniform magnetic hold.",
      },
      {
        title: "Single-Sheet Separation from Stacks",
        solution: "Current-regulated partial excitation lifts top sheets cleanly from dense warehouse stacks.",
      },
      {
        title: "Toolroom & CNC Workpiece Clamping",
        solution: "Manual on/off neodymium lifters with 3.5:1 safety factor enable instant, mark-free plate handling.",
      },
    ],
    stats: [
      { value: "18m", label: "Spreader Beam Span" },
      { value: "3.5:1", label: "Safety Proof Factor" },
      { value: "1 Person", label: "Safe Operation" },
    ],
    keyWorkflows: [
      "Shipyard plate cutting table automated loading",
      "Steel service center warehouse inventory picking",
      "Port heavy break-bulk steel logistics",
      "Fabrication shop CNC lathe and milling setup",
    ],
  },
];
