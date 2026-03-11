/*
 * Design: Cybernetic Brutalism
 * LLM Ecosystem — INTEGRATIONS
 * 4x2+1 grid: OpenAI, DeepSeek, Anthropic, Google, Mistral AI, Alibaba Cloud, Amazon Bedrock, Azure OpenAI, + More
 */
import { useReveal } from "@/hooks/useReveal";

const providers = [
  { name: "OpenAI", abbr: "O", gradient: "from-emerald-400 to-emerald-600" },
  { name: "DeepSeek", abbr: "DS", gradient: "from-blue-400 to-blue-600" },
  { name: "Anthropic", abbr: "A", gradient: "from-amber-300 to-amber-500" },
  { name: "Google", abbr: "G", gradient: "from-blue-400 to-violet-500" },
  { name: "Mistral AI", abbr: "M", gradient: "from-orange-400 to-red-500" },
  { name: "Alibaba Cloud", abbr: "AC", gradient: "from-orange-300 to-orange-500" },
  { name: "Amazon Bedrock", abbr: "AB", gradient: "from-amber-400 to-orange-500" },
  { name: "Azure OpenAI", abbr: "AZ", gradient: "from-blue-500 to-cyan-500" },
  { name: "100+ Providers", abbr: "+", gradient: "" },
];

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

        {/* Provider Grid */}
        <div
          ref={gridRef}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {providers.map((p, i) => (
              <div
                key={p.name}
                className="rounded-xl p-6 flex flex-col items-center justify-center gap-3 border border-white/6 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-white/12 hover:bg-white/[0.04] transition-all group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-base text-white font-[Sora] ${
                    p.gradient
                      ? `bg-gradient-to-br ${p.gradient}`
                      : "bg-white/10"
                  } group-hover:scale-110 transition-transform`}
                >
                  {p.abbr}
                </div>
                <span className="text-sm text-slate-400 text-center font-[Outfit]">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
