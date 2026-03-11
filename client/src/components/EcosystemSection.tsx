/*
 * Design: Cybernetic Brutalism
 * LLM Ecosystem — INTEGRATIONS
 * UPDATES: Official LLM logos, hover gradient glow, tech illustration on the side
 */
import { useReveal } from "@/hooks/useReveal";
import { useRef, useState, useCallback } from "react";
import {
  OpenAILogo, DeepSeekLogo, AnthropicLogo, GoogleLogo, MistralLogo,
  AlibabaCloudLogo, AmazonBedrockLogo, AzureOpenAILogo
} from "./ProviderLogos";

const ECOSYSTEM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663281797301/B5D8znjtLgNMM5PodSZYSz/ecosystem-tech-iaVMNX5Et67NfyF4APvMge.webp";

const providers = [
  { name: "OpenAI", Logo: OpenAILogo, color: "#10A37F", glowColor: "rgba(16,163,127,0.4)" },
  { name: "DeepSeek", Logo: DeepSeekLogo, color: "#4D6BFE", glowColor: "rgba(77,107,254,0.4)" },
  { name: "Anthropic", Logo: AnthropicLogo, color: "#D4A574", glowColor: "rgba(212,165,116,0.4)" },
  { name: "Google", Logo: GoogleLogo, color: "#4285F4", glowColor: "rgba(66,133,244,0.4)" },
  { name: "Mistral AI", Logo: MistralLogo, color: "#F7D046", glowColor: "rgba(247,208,70,0.4)" },
  { name: "Alibaba Cloud", Logo: AlibabaCloudLogo, color: "#FF6A00", glowColor: "rgba(255,106,0,0.4)" },
  { name: "Amazon Bedrock", Logo: AmazonBedrockLogo, color: "#FF9900", glowColor: "rgba(255,153,0,0.4)" },
  { name: "Azure OpenAI", Logo: AzureOpenAILogo, color: "#0078D4", glowColor: "rgba(0,120,212,0.4)" },
];

function ProviderCard({ provider, index }: { provider: typeof providers[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Logo = provider.Logo;

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative rounded-xl p-5 flex flex-col items-center justify-center gap-3 border border-white/6 bg-gradient-to-br from-white/[0.03] to-white/[0.01] transition-all group overflow-hidden cursor-default"
      style={{ transitionDelay: `${index * 50}ms` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient glow following mouse */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, ${provider.glowColor}, transparent 60%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, ${provider.glowColor.replace("0.4", "0.6")}, transparent 50%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
          style={{ backgroundColor: provider.color + "18" }}
        >
          <Logo size={28} className="text-white" />
        </div>
        <span className="text-sm text-slate-400 text-center font-[Outfit] group-hover:text-slate-200 transition-colors">{provider.name}</span>
      </div>
    </div>
  );
}

export default function EcosystemSection() {
  const { ref: headerRef, visible: headerVisible } = useReveal();
  const { ref: gridRef, visible: gridVisible } = useReveal();

  return (
    <section id="ecosystem" className="relative py-24 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.12em] uppercase text-[#a78bfa] mb-4 font-[Outfit]">
            — INTEGRATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[Sora] leading-tight">
            100+ LLM Providers,{" "}
            <span className="bg-gradient-to-r from-[#6D49FF] to-[#FF4646] bg-clip-text text-transparent">
              One Gateway
            </span>
          </h2>
          <p className="text-slate-400 font-[Outfit] leading-relaxed text-lg">
            Connect to any major LLM provider through a unified, OpenAI-compatible interface. No vendor lock-in, ever.
          </p>
        </div>

        {/* Layout: Grid + Tech Image */}
        <div
          ref={gridRef}
          className={`grid lg:grid-cols-[1fr_320px] gap-10 items-center transition-all duration-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Provider Grid */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {providers.map((p, i) => (
                <ProviderCard key={p.name} provider={p} index={i} />
              ))}
              {/* 100+ More card */}
              <div className="rounded-xl p-5 flex flex-col items-center justify-center gap-3 border border-white/6 bg-gradient-to-br from-[#6D49FF]/5 to-[#E31836]/5 hover:border-white/12 transition-all cursor-default group">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/8 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white font-[Sora]">+</span>
                </div>
                <span className="text-sm text-slate-400 text-center font-[Outfit] group-hover:text-slate-200 transition-colors">100+ More</span>
              </div>
            </div>
          </div>

          {/* Tech Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-[#6D49FF]/8 rounded-2xl blur-[40px]" />
              <div className="relative rounded-2xl overflow-hidden border border-white/8">
                <img
                  src={ECOSYSTEM_IMG}
                  alt="AI Gateway Technology"
                  className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-[#030712]/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
