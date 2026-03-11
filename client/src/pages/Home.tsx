/*
 * AISIX Landing Page — 6 core sections per requirements doc "最终决定":
 * 1. Hero Section
 * 2. Core Value Proposition (Features)
 * 3. Architecture
 * 4. Features Deep Dive (Code)
 * 5. LLM Ecosystem
 * 6. CTA Section
 * + Footer (retained from reference for completeness)
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import CodeSection from "@/components/CodeSection";
import EcosystemSection from "@/components/EcosystemSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ArchitectureSection />
      <CodeSection />
      <EcosystemSection />
      <CTASection />
      <Footer />
    </div>
  );
}
