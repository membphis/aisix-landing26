/*
 * Design: Cybernetic Brutalism
 * LLM Ecosystem — INTEGRATIONS
 * V3: 3x3 grid (9 providers), right side large ecosystem illustration,
 *     white glowing border on hover (consistent with Features & Architecture)
 */
import { useReveal } from "@/hooks/useReveal";
import {
  OpenAILogo, DeepSeekLogo, AnthropicLogo, GoogleLogo, MistralLogo,
  AlibabaCloudLogo, AmazonBedrockLogo, AzureOpenAILogo
} from "./ProviderLogos";

const ECOSYSTEM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663281797301/B5D8znjtLgNMM5PodSZYSz/ecosystem-large-3WcdEHUKEfV6aaxsqqbiNi.webp";

const providers = [
  { name: "OpenAI", Logo: OpenAILogo, color: "#10A37F" },
  { name: "DeepSeek", Logo: DeepSeekLogo, color: "#4D6BFE" },
  { name: "Anthropic", Logo: AnthropicLogo, color: "#D4A574" },
  { name: "Google", Logo: GoogleLogo, color: "#4285F4" },
  { name: "Mistral AI", Logo: MistralLogo, color: "#F7D046" },
  { name: "Alibaba Cloud", Logo: AlibabaCloudLogo, color: "#FF6A00" },
  { name: "Amazon Bedrock", Logo: AmazonBedrockLogo, color: "#FF9900" },
  { name: "Azure OpenAI", Logo: AzureOpenAILogo, color: "#0078D4" },
];

function ProviderCard({ provider }: { provider: typeof providers[0] }) {
  const Logo = provider.Logo;

  return (
    <div className="relative rounded-xl p-5 flex flex-col items-center justify-center gap-3 border border-white/6 bg-gradient-to-br from-white/[0.03] to-white/[0.01] transition-all duration-500 group overflow-hidden cursor-default hover:-translate-y-0.5">
      {/* White glowing border on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35), 0 0 15px rgba(255,255,255,0.08), 0 0 30px rgba(255,255,255,0.04)",
        }}
      />
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.04] to-transparent" />

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: provider.color + "18" }}
        >
          <Logo size={28} className="text-white" />
        </div>
        <span className="text-sm text-slate-400 text-center font-[Outfit] group-hover:text-white transition-colors duration-300">{provider.name}</span>
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

        {/* Layout: 3x3 Grid + Large Image */}
        <div
          ref={gridRef}
          className={`grid lg:grid-cols-[1fr_1fr] gap-10 items-stretch transition-all duration-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: 3x3 Provider Grid */}
          <div>
            <div className="grid grid-cols-3 gap-4">
              {providers.map((p) => (
                <ProviderCard key={p.name} provider={p} />
              ))}
              {/* 100+ More card */}
              <div className="relative rounded-xl p-5 flex flex-col items-center justify-center gap-3 border border-white/6 bg-gradient-to-br from-[#6D49FF]/5 to-[#E31836]/5 transition-all duration-500 cursor-default group overflow-hidden hover:-translate-y-0.5">
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35), 0 0 15px rgba(255,255,255,0.08), 0 0 30px rgba(255,255,255,0.04)",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/8 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white font-[Sora]">+</span>
                  </div>
                  <span className="text-sm text-slate-400 text-center font-[Outfit] group-hover:text-white transition-colors duration-300">100+ More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Large Ecosystem Illustration — cropped to match left grid height */}
          <div className="hidden lg:flex items-stretch">
            <div className="relative w-full">
              {/* Glow behind image */}
              <div className="absolute -inset-6 bg-[#6D49FF]/8 rounded-2xl blur-[50px]" />
              <div className="relative rounded-2xl overflow-hidden border border-white/8 h-full">
                {/* Use a div with background-image to precisely crop the center portion */}
                <div
                  className="w-full h-full min-h-[100%] opacity-85 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${ECOSYSTEM_IMG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  role="img"
                  aria-label="AI Gateway Ecosystem"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/50 via-transparent to-[#030712]/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
