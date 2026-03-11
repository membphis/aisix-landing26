/*
 * Design: Cybernetic Brutalism
 * Architecture — HOW IT WORKS
 * V3.1: Fix Admin→CP arrow animation (use animateMotion on path),
 *       Fix DP→LLMs: change single arrow to 5 fan-out curves with animateMotion,
 *       Right-side cards unchanged (white glowing border)
 */
import { useReveal } from "@/hooks/useReveal";
import {
  Monitor, Server, Database, Activity, FileText,
  Cpu, Layers, Settings, Shield
} from "lucide-react";
import { OpenAILogo, DeepSeekLogo, AnthropicLogo, GeminiLogo, MistralLogo } from "./ProviderLogos";

function ArchDiagram() {
  const { ref, visible } = useReveal(0.1, "-40px");

  const middleware = [
    { icon: Database, name: "etcd", desc: "Config Center", color: "text-emerald-400", border: "border-emerald-500/20", bgHover: "hover:bg-emerald-500/8" },
    { icon: Cpu, name: "Redis", desc: "Rate Limit", color: "text-red-400", border: "border-red-500/20", bgHover: "hover:bg-red-500/8" },
    { icon: Activity, name: "Prometheus", desc: "Metrics", color: "text-amber-400", border: "border-amber-500/20", bgHover: "hover:bg-amber-500/8" },
    { icon: FileText, name: "ClickHouse", desc: "Log Server", color: "text-cyan-400", border: "border-cyan-500/20", bgHover: "hover:bg-cyan-500/8" },
  ];

  const llmProviders = [
    { name: "OpenAI", Logo: OpenAILogo, color: "#10A37F" },
    { name: "DeepSeek", Logo: DeepSeekLogo, color: "#4D6BFE" },
    { name: "Claude", Logo: AnthropicLogo, color: "#D4A574" },
    { name: "Gemini", Logo: GeminiLogo, color: "#4285F4" },
    { name: "More...", Logo: MistralLogo, color: "#888" },
  ];

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      <div className="relative bg-gradient-to-br from-white/[0.02] to-white/[0.005] border border-white/8 rounded-2xl p-6 sm:p-8 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#6D49FF]/5 rounded-full blur-[80px]" />

        {/* Row 1: Admin User */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/3 hover:bg-white/5 hover:border-white/15 transition-all hover:scale-[1.03] cursor-default">
            <Monitor className="w-5 h-5 text-slate-400" />
            <div>
              <div className="text-sm font-semibold text-white font-[Sora]">Admin User</div>
              <div className="text-[10px] text-slate-500 font-[Outfit]">Browser / Dashboard</div>
            </div>
          </div>
        </div>

        {/* Arrow: Admin → CP — FIXED: use animateMotion along the path */}
        <div className="flex justify-center mb-4">
          <svg className="w-[40px] h-[32px]" viewBox="0 0 40 32" fill="none">
            <defs>
              <path id="admin-cp-path" d="M20,0 L20,28" />
              <linearGradient id="grad-purple-v2" x1="20" y1="0" x2="20" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="rgba(109,73,255,0.5)" />
              </linearGradient>
            </defs>
            <use href="#admin-cp-path" stroke="url(#grad-purple-v2)" strokeWidth="1.5" />
            <polygon points="16,24 20,32 24,24" fill="#6D49FF" />
            {/* Dot follows the line path */}
            <circle r="2" fill="#6D49FF" opacity="0.9">
              <animateMotion dur="1.5s" repeatCount="indefinite" begin="0s">
                <mpath href="#admin-cp-path" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.5s" repeatCount="indefinite" begin="0s" />
            </circle>
          </svg>
        </div>

        {/* Row 2: Control Plane */}
        <div className="flex justify-center mb-4">
          <div className="relative px-6 py-4 rounded-xl border border-[#6D49FF]/30 bg-[#6D49FF]/8 min-w-[280px] hover:scale-[1.02] transition-transform cursor-default">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute -inset-px rounded-xl bg-[conic-gradient(from_0deg,transparent,rgba(109,73,255,0.15),transparent,rgba(109,73,255,0.15),transparent)] animate-spin-slow" />
              <div className="absolute inset-[1px] rounded-xl bg-[#0a0f1e]" />
            </div>
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Settings className="w-4 h-4 text-[#a78bfa]" />
                <span className="text-sm font-bold text-white font-[Sora]">Control Plane (CP)</span>
              </div>
              <div className="text-[11px] text-slate-400 font-[Outfit]">AI Gateway Control Plane · Rust · Stateless</div>
            </div>
          </div>
        </div>

        {/* SPLIT ARROWS: CP → 4 Middleware (fan-out) */}
        <div className="flex justify-center mb-4">
          <svg className="w-[320px] h-10" viewBox="0 0 320 40" fill="none">
            <defs>
              <path id="cp-mw-1" d="M160,0 C160,20 40,20 40,40" />
              <path id="cp-mw-2" d="M160,0 C160,20 120,20 120,40" />
              <path id="cp-mw-3" d="M160,0 C160,20 200,20 200,40" />
              <path id="cp-mw-4" d="M160,0 C160,20 280,20 280,40" />
            </defs>
            <use href="#cp-mw-1" stroke="#6D49FF" strokeWidth="1.2" strokeOpacity="0.3" />
            <use href="#cp-mw-2" stroke="#6D49FF" strokeWidth="1.2" strokeOpacity="0.3" />
            <use href="#cp-mw-3" stroke="#6D49FF" strokeWidth="1.2" strokeOpacity="0.3" />
            <use href="#cp-mw-4" stroke="#6D49FF" strokeWidth="1.2" strokeOpacity="0.3" />
            {/* Animated dots following paths */}
            <circle r="2" fill="#6D49FF" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="0s"><mpath href="#cp-mw-1" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="0s" />
            </circle>
            <circle r="2" fill="#a78bfa" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.4s"><mpath href="#cp-mw-2" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="0.4s" />
            </circle>
            <circle r="2" fill="#a78bfa" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.8s"><mpath href="#cp-mw-3" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="0.8s" />
            </circle>
            <circle r="2" fill="#6D49FF" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.2s"><mpath href="#cp-mw-4" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="1.2s" />
            </circle>
            {/* Arrow tips */}
            <polygon points="37,36 40,42 43,36" fill="#6D49FF" opacity="0.5" />
            <polygon points="117,36 120,42 123,36" fill="#6D49FF" opacity="0.5" />
            <polygon points="197,36 200,42 203,36" fill="#6D49FF" opacity="0.5" />
            <polygon points="277,36 280,42 283,36" fill="#6D49FF" opacity="0.5" />
          </svg>
        </div>

        {/* Row 3: Middleware — hover scale effect */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {middleware.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className={`flex flex-col items-center gap-1.5 px-3 py-3 rounded-lg border ${item.border} bg-white/2 ${item.bgHover} hover:scale-[1.08] hover:border-opacity-60 transition-all duration-300 cursor-default group`}
              >
                <Icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs font-semibold text-white font-[Sora]">{item.name}</span>
                <span className="text-[9px] text-slate-500 font-[Outfit]">{item.desc}</span>
              </div>
            );
          })}
        </div>

        {/* SPLIT ARROWS: 4 Middleware → DP (fan-in) */}
        <div className="flex justify-center mb-4">
          <svg className="w-[320px] h-10" viewBox="0 0 320 40" fill="none">
            <defs>
              <path id="mw-dp-1" d="M40,0 C40,20 160,20 160,40" />
              <path id="mw-dp-2" d="M120,0 C120,20 160,20 160,40" />
              <path id="mw-dp-3" d="M200,0 C200,20 160,20 160,40" />
              <path id="mw-dp-4" d="M280,0 C280,20 160,20 160,40" />
            </defs>
            <use href="#mw-dp-1" stroke="#E31836" strokeWidth="1.2" strokeOpacity="0.3" />
            <use href="#mw-dp-2" stroke="#E31836" strokeWidth="1.2" strokeOpacity="0.3" />
            <use href="#mw-dp-3" stroke="#E31836" strokeWidth="1.2" strokeOpacity="0.3" />
            <use href="#mw-dp-4" stroke="#E31836" strokeWidth="1.2" strokeOpacity="0.3" />
            {/* Animated dots following paths */}
            <circle r="2" fill="#E31836" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="0s"><mpath href="#mw-dp-1" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="0s" />
            </circle>
            <circle r="2" fill="#ff6b6b" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.5s"><mpath href="#mw-dp-2" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle r="2" fill="#ff6b6b" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.0s"><mpath href="#mw-dp-3" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="1.0s" />
            </circle>
            <circle r="2" fill="#E31836" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.5s"><mpath href="#mw-dp-4" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            {/* Arrow tip at center bottom */}
            <polygon points="157,36 160,42 163,36" fill="#E31836" opacity="0.5" />
          </svg>
        </div>

        {/* Row 4: Data Plane */}
        <div className="flex justify-center mb-4">
          <div className="relative px-6 py-4 rounded-xl border border-[#E31836]/30 bg-[#E31836]/8 min-w-[280px] hover:scale-[1.02] transition-transform cursor-default">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute -inset-px rounded-xl bg-[conic-gradient(from_180deg,transparent,rgba(227,24,54,0.15),transparent,rgba(227,24,54,0.15),transparent)] animate-spin-slow" />
              <div className="absolute inset-[1px] rounded-xl bg-[#0a0f1e]" />
            </div>
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-red-400" />
                <span className="text-sm font-bold text-white font-[Sora]">Data Plane (DP)</span>
              </div>
              <div className="text-[11px] text-slate-400 font-[Outfit]">AI Gateway Data Plane · Rust · Stateless · Horizontally Scalable</div>
            </div>
          </div>
        </div>

        {/* SPLIT ARROWS: DP → 5 LLM Providers (fan-out) — FIXED: multiple curves instead of single line */}
        <div className="flex justify-center mb-4">
          <svg className="w-[320px] h-10" viewBox="0 0 320 40" fill="none">
            <defs>
              <path id="dp-llm-1" d="M160,0 C160,20 32,20 32,40" />
              <path id="dp-llm-2" d="M160,0 C160,20 96,20 96,40" />
              <path id="dp-llm-3" d="M160,0 C160,20 160,20 160,40" />
              <path id="dp-llm-4" d="M160,0 C160,20 224,20 224,40" />
              <path id="dp-llm-5" d="M160,0 C160,20 288,20 288,40" />
            </defs>
            <use href="#dp-llm-1" stroke="#E31836" strokeWidth="1.2" strokeOpacity="0.25" />
            <use href="#dp-llm-2" stroke="#E31836" strokeWidth="1.2" strokeOpacity="0.25" />
            <use href="#dp-llm-3" stroke="#E31836" strokeWidth="1.2" strokeOpacity="0.25" />
            <use href="#dp-llm-4" stroke="#E31836" strokeWidth="1.2" strokeOpacity="0.25" />
            <use href="#dp-llm-5" stroke="#E31836" strokeWidth="1.2" strokeOpacity="0.25" />
            {/* Animated dots following paths */}
            <circle r="2" fill="#E31836" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="0s"><mpath href="#dp-llm-1" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="0s" />
            </circle>
            <circle r="2" fill="#ff6b6b" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.35s"><mpath href="#dp-llm-2" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="0.35s" />
            </circle>
            <circle r="2" fill="#E31836" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.7s"><mpath href="#dp-llm-3" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="0.7s" />
            </circle>
            <circle r="2" fill="#ff6b6b" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.05s"><mpath href="#dp-llm-4" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="1.05s" />
            </circle>
            <circle r="2" fill="#E31836" opacity="0.9">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.4s"><mpath href="#dp-llm-5" /></animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="1.4s" />
            </circle>
            {/* Arrow tips at each endpoint */}
            <polygon points="29,36 32,42 35,36" fill="#E31836" opacity="0.4" />
            <polygon points="93,36 96,42 99,36" fill="#E31836" opacity="0.4" />
            <polygon points="157,36 160,42 163,36" fill="#E31836" opacity="0.4" />
            <polygon points="221,36 224,42 227,36" fill="#E31836" opacity="0.4" />
            <polygon points="285,36 288,42 291,36" fill="#E31836" opacity="0.4" />
          </svg>
        </div>

        {/* Row 5: LLM Providers with official logos */}
        <div className="flex flex-wrap justify-center gap-2">
          {llmProviders.map((p) => {
            const Logo = p.Logo;
            return (
              <div
                key={p.name}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/6 bg-white/2 hover:bg-white/5 hover:border-white/12 hover:scale-[1.05] transition-all cursor-default group"
              >
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: p.color + "20" }}
                >
                  {p.name === "More..." ? (
                    <span className="text-[10px] font-bold text-slate-400 font-[Sora]">M</span>
                  ) : (
                    <Logo size={14} className="text-white" />
                  )}
                </div>
                <span className="text-[11px] text-slate-300 font-[Outfit]">{p.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ArchitectureSection() {
  const { ref: headerRef, visible: headerVisible } = useReveal();
  const { ref: pointsRef, visible: pointsVisible } = useReveal();

  const keyPoints = [
    { icon: Layers, title: "Stateless Data Plane", desc: "Horizontally scalable with zero state — add or remove nodes instantly without data migration." },
    { icon: Database, title: "etcd-Based Config", desc: "Centralized configuration management with real-time propagation and hot-reload capabilities." },
    { icon: Server, title: "Separation of Concerns", desc: "Control Plane handles management; Data Plane handles traffic. Independent scaling and upgrades." },
  ];

  return (
    <section id="architecture" className="relative py-24 overflow-hidden">
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
            — HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[Sora] leading-tight">
            Production-Grade,{" "}
            <span className="bg-gradient-to-r from-[#6D49FF] to-[#FF4646] bg-clip-text text-transparent">
              Cloud-Native Architecture
            </span>
          </h2>
          <p className="text-slate-400 font-[Outfit] leading-relaxed text-lg">
            Control Plane and Data Plane separation ensures high scalability, zero-downtime upgrades, and enterprise-level reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* Architecture Diagram */}
          <ArchDiagram />

          {/* Key Points — white glowing border (consistent with Core Value Proposition) */}
          <div
            ref={pointsRef}
            className={`flex flex-col gap-5 transition-all duration-700 ${
              pointsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {keyPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="relative rounded-xl border border-white/6 bg-white/2 transition-all duration-500 hover:-translate-y-0.5 group overflow-hidden cursor-default"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* White glowing border on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35), 0 0 15px rgba(255,255,255,0.08), 0 0 30px rgba(255,255,255,0.04)",
                    }}
                  />
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.04] to-transparent" />

                  <div className="relative z-10 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#6D49FF]/10 border border-[#6D49FF]/20 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/8 transition-all duration-300">
                        <Icon className="w-4 h-4 text-[#a78bfa]" />
                      </div>
                      <h3 className="text-sm font-semibold text-white font-[Sora]">{point.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed font-[Outfit]">{point.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
