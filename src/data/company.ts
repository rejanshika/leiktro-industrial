export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
    mapsUrl: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    supportEmail: string;
    salesEmail: string;
    workingHours: string;
  };
  stats: Array<{
    value: string;
    label: string;
    subtext: string;
  }>;
  certifications: Array<{
    name: string;
    code: string;
    issuer: string;
    description: string;
  }>;
  coreValues: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export const companyData: CompanyInfo = {
  name: "LEIKTRO",
  legalName: "Leiktro Private Limited",
  tagline: "Industrial Magnetic & Material Handling Systems Engineered for Extreme Environments",
  shortDescription: "Specialized manufacturer of heavy-duty circular lifting magnets, billet handling magnets, overband magnetic separators, and vibrating furnace chargers.",
  fullDescription: "Leiktro Private Limited is a premier heavy industrial engineering manufacturer based in Ahmedabad, India. We engineer, design, and manufacture heavy-duty electro-magnetic lifting systems, permanent magnetic separators, and vibrating charging feeders for steel melting shops, iron foundries, scrap recycling yards, and heavy processing industries worldwide.",
  address: {
    street: "Survey No 63 & 64 Pasunj",
    locality: "Pasunj, Daskroi",
    city: "Ahmedabad",
    state: "Gujarat",
    postalCode: "382433",
    country: "India",
    full: "Survey No 63 & 64 Pasunj, Daskroi Ahmedabad, Gujarat - 382433, India",
    mapsUrl: "https://maps.google.com/?q=Pasunj+Ahmedabad+Gujarat+382433",
  },
  contact: {
    phone: "+919904462784",
    phoneDisplay: "+91 99044 62784",
    email: "info@leiktro.com",
    supportEmail: "support@leiktro.com",
    salesEmail: "sales@leiktro.com",
    workingHours: "Monday – Saturday: 08:30 AM – 07:00 PM IST",
  },
  stats: [
    {
      value: "75%",
      label: "Heavy Duty Cycle",
      subtext: "Continuous 24/7 duty rating with high thermal dissipation",
    },
    {
      value: "600°C",
      label: "Thermal Resistance",
      subtext: "Class H/C insulation for hot skull and molten splash zones",
    },
    {
      value: "100%",
      label: "FEA Simulated",
      subtext: "Full magnetic flux & structural stress simulation before casting",
    },
    {
      value: "ISO 9001",
      label: "Quality Certified",
      subtext: "Rigorous ISO 9001:2015 manufacturing & testing protocols",
    },
  ],
  certifications: [
    {
      name: "Quality Management System",
      code: "ISO 9001:2015",
      issuer: "TUV / Standard Certifications",
      description: "Certified engineering design, fabrication, coil winding, and load testing protocols.",
    },
    {
      name: "Hermetic Ingress Protection",
      code: "IP68 Enclosure",
      issuer: "Industrial Ingress Standards",
      description: "Complete water and dust submersion protection for scrap yards and outdoor gantry operations.",
    },
    {
      name: "High-Temperature Coil Insulation",
      code: "Class H (180°C) & Class C (220°C+)",
      issuer: "IEC Electrical Standards",
      description: "Vacuum Pressure Impregnated (VPI) dual-insulated copper & anodized aluminum windings.",
    },
  ],
  coreValues: [
    {
      title: "Precision Engineering",
      description: "Every magnet core is designed using finite element magnetic flux modeling to maximize lifting force per kilowatt.",
      icon: "Cpu",
    },
    {
      title: "Heavy-Duty Durability",
      description: "Cast high-permeability steel shells with heavy ribbed cooling fins engineered to withstand violent scrap impacts.",
      icon: "ShieldAlert",
    },
    {
      title: "Thermal Management",
      description: "Advanced compound potting and radial fin geometry prevent coil thermal runaway during continuous multi-shift operation.",
      icon: "Flame",
    },
    {
      title: "Zero-Tolerance Quality",
      description: "Every unit undergoes cold and hot resistance checks, insulation surge tests, and static break-away load testing.",
      icon: "CheckCircle2",
    },
  ],
};
