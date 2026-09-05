import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { companyData } from "@/data/company";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import ScrollProgress from "@/components/motion/ScrollProgress";
import SmoothScroll from "@/components/motion/SmoothScroll";

export const metadata: Metadata = {
  title: "LEIKTRO | Heavy Industrial Magnetic & Material Handling Systems",
  description: "Premier Indian manufacturer of Circular Lifting Magnets, Billet Handling Magnets, Overband Magnetic Separators, and Vibrating Furnace Chargers based in Ahmedabad, Gujarat.",
  keywords: [
    "Circular Lifting Magnets",
    "Billet Handling Magnet",
    "Excavator Lifting Magnet",
    "Permanent Suspension Magnet",
    "Magnetic Pulley",
    "Overband Electromagnetic Separator",
    "Mechanical Vibrating Furnace Charger",
    "Mechanical Vibro Feeder",
    "Rectangular Lifting Magnet",
    "Industrial Magnet Manufacturer India",
    "Leiktro Private Limited",
  ],
  authors: [{ name: "Leiktro Private Limited" }],
  creator: "Leiktro Private Limited",
  publisher: "Leiktro Private Limited",
  metadataBase: new URL("https://leiktro.com"),
  openGraph: {
    title: "LEIKTRO | Industrial Magnetic & Material Handling Systems",
    description: "Heavy-duty electromagnetic lifters, permanent magnetic separators, and vibrating furnace chargers engineered for extreme heavy industry.",
    url: "https://leiktro.com",
    siteName: "LEIKTRO Private Limited",
    images: [
      {
        url: "/assets/CIRCULAR-LIFTING-MAGNET-1-e1737957413704.jpg",
        width: 1200,
        height: 630,
        alt: "LEIKTRO Circular Lifting Magnet for Steel Plants",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/assets/cropped-Leiktro-symbol-1-270x270.png",
    shortcut: "/assets/cropped-Leiktro-symbol-1-270x270.png",
    apple: "/assets/cropped-Leiktro-symbol-1-270x270.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.name,
    legalName: companyData.legalName,
    url: "https://leiktro.com",
    logo: "https://leiktro.com/assets/Leiktro-logo.png",
    description: companyData.fullDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address.street,
      addressLocality: companyData.address.locality,
      addressRegion: companyData.address.state,
      postalCode: companyData.address.postalCode,
      addressCountry: companyData.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyData.contact.phone,
      contactType: "sales and technical support",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white dark:bg-[#07090D] text-[#0A0A0A] dark:text-white min-h-screen flex flex-col font-sans antialiased selection:bg-[#FF5E14] selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <SmoothScroll />
          <ScrollProgress />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
