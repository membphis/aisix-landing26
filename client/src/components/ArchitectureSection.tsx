/*
 * Design: Cybernetic Brutalism
 * Architecture — HOW IT WORKS
 * UPDATES: Data flow animations, hover scale on components, official LLM logos, right-side card glow
 */
import { useReveal } from "@/hooks/useReveal";
import { useRef, useState, useCallback } from "react";
import {
  Monitor, Server, Database, Activity, BarChart3, FileText,
  Cpu, ArrowRight, Layers, Settings, Shield
} from "lucide-react";
import { OpenAILogo, DeepSeekLogo, AnthropicLogo, GeminiLogo, MistralLogo } from "./ProviderLogos";

/* Reusable mouse-tracking glow card */
function GlowCard({ children, className = "", glowColor = "rgba(167,139,250,0.35)" }: { children: React.ReactNode; className?: string; glowColor?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient glow following mouse */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 60%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor.replace(/[\d.]+\)$/, "0.6)")}, transparent 50%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* Animated flowing dot for data flow visualization */
function FlowDot({ color = "#6D49FF", delay = 0 }: { color?: string; delay?: number }) {
  return (
    <div
      className="absolute w-1.5 h-1.5 rounded-full"
      style={{
        backgroundColor: color,
        boxShadow: `0 0 6px ${color}`,
        animation: `flowDown 2.5s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

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

        {/* Animated arrow down */}
        <div className="flex justify-center mb-4">
          <div className="relative flex flex-col items-center h-8">
            <div className="w-px h-full bg-gradient-to-b from-white/20 to-[#6D49FF]/40" />
            <ArrowRight className="w-3 h-3 text-[#6D49FF] rotate-90 -mt-0.5" />
            {/* Flowing dot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6D49FF] shadow-[0_0_6px_#6D49FF]" style={{ animation: "flowDown 2s ease-in-out infinite" }} />
            </div>
          </div>
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

        {/* Animated arrow down */}
        <div className="flex justify-center mb-4">
          <div className="relative flex flex-col items-center h-8">
            <div className="w-px h-full bg-gradient-to-b from-[#6D49FF]/40 to-white/20" />
            <ArrowRight className="w-3 h-3 text-slate-500 rotate-90 -mt-0.5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_6px_#a78bfa]" style={{ animation: "flowDown 2s ease-in-out infinite 0.5s" }} />
            </div>
          </div>
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

        {/* Animated arrow down */}
        <div className="flex justify-center mb-4">
          <div className="relative flex flex-col items-center h-8">
            <div className="w-px h-full bg-gradient-to-b from-white/20 to-[#E31836]/40" />
            <ArrowRight className="w-3 h-3 text-[#E31836] rotate-90 -mt-0.5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E31836] shadow-[0_0_6px_#E31836]" style={{ animation: "flowDown 2s ease-in-out infinite 1s" }} />
            </div>
          </div>
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

        {/* Animated arrow down */}
        <div className="flex justify-center mb-4">
          <div className="relative flex flex-col items-center h-8">
            <div className="w-px h-full bg-gradient-to-b from-[#E31836]/40 to-white/20" />
            <ArrowRight className="w-3 h-3 text-slate-500 rotate-90 -mt-0.5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b] shadow-[0_0_6px_#ff6b6b]" style={{ animation: "flowDown 2s ease-in-out infinite 1.5s" }} />
            </div>
          </div>
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
    { icon: Layers, title: "Stateless Data Plane", desc: "Horizontally scalable with zero state — add or remove nodes instantly without data migration.", glowColor: "rgba(109,73,255,0.35)" },
    { icon: Database, title: "etcd-Based Config", desc: "Centralized configuration management with real-time propagation and hot-reload capabilities.", glowColor: "rgba(52,211,153,0.35)" },
    { icon: Server, title: "Separation of Concerns", desc: "Control Plane handles management; Data Plane handles traffic. Independent scaling and upgrades.", glowColor: "rgba(227,24,54,0.3)" },
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

          {/* Key Points with glow effect */}
          <div
            ref={pointsRef}
            className={`flex flex-col gap-5 transition-all duration-700 ${
              pointsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {keyPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <GlowCard
                  key={point.title}
                  className="rounded-xl border border-white/6 bg-white/2 hover:border-white/12 transition-all"
                  glowColor={point.glowColor}
                >
                  <div className="p-5" style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#6D49FF]/10 border border-[#6D49FF]/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#a78bfa]" />
                      </div>
                      <h3 className="text-sm font-semibold text-white font-[Sora]">{point.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed font-[Outfit]">{point.desc}</p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
