import Hero from "@/components/home/Hero";
import VideoShowcase from "@/components/home/VideoShowcase";
import ProductCatalogSection from "@/components/home/ProductCatalogSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import EngineeringProcess from "@/components/home/EngineeringProcess";
import InfrastructureSection from "@/components/home/InfrastructureSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Hero with Flagship Machine Showcase */}
      <Hero />

      {/* Combined footage montage — LEIKTRO machines in action */}
      <VideoShowcase />

      {/* Interactive Products Catalog */}
      <ProductCatalogSection />

      {/* Sectors & Operational Environments */}
      <IndustriesSection />

      {/* 6-Stage Engineering & Quality Protocol */}
      <EngineeringProcess />

      {/* Pasunj Ahmedabad Manufacturing Works */}
      <InfrastructureSection />

      {/* High-Conversion B2B Engineering Consultation */}
      <CTASection />
    </>
  );
}
