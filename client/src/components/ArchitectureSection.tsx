/*
 * Design: Cybernetic Brutalism
 * Architecture — HOW IT WORKS
 * CP/DP separation diagram with etcd, Redis, Prometheus, ClickHouse
 * Admin → CP → etcd/Redis/Prometheus/Log → DP → LLM Providers
 */
import { useReveal } from "@/hooks/useReveal";
import {
  Monitor, Server, Database, Activity, BarChart3, FileText,
  Cpu, Globe, ArrowRight, Layers, Settings, Shield
} from "lucide-react";

function ArchDiagram() {
  const { ref, visible } = useReveal(0.1, "-40px");

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      <div className="relative bg-gradient-to-br from-white/[0.02] to-white/[0.005] border border-white/8 rounded-2xl p-6 sm:p-8 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#6D49FF]/5 rounded-full blur-[80px]" />

        {/* Row 1: Admin User */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/3">
            <Monitor className="w-5 h-5 text-slate-400" />
            <div>
              <div className="text-sm font-semibold text-white font-[Sora]">Admin User</div>
              <div className="text-[10px] text-slate-500 font-[Outfit]">Browser / Dashboard</div>
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <div className="w-px h-6 bg-gradient-to-b from-white/20 to-[#6D49FF]/40" />
            <ArrowRight className="w-3 h-3 text-[#6D49FF] rotate-90" />
          </div>
        </div>

        {/* Row 2: Control Plane */}
        <div className="flex justify-center mb-6">
          <div className="relative px-6 py-4 rounded-xl border border-[#6D49FF]/30 bg-[#6D49FF]/8 min-w-[280px]">
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

        {/* Arrow down to middleware */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <div className="w-px h-6 bg-gradient-to-b from-[#6D49FF]/40 to-white/20" />
            <ArrowRight className="w-3 h-3 text-slate-500 rotate-90" />
          </div>
        </div>

        {/* Row 3: Middleware (etcd, Redis, Prometheus, ClickHouse) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { icon: Database, name: "etcd", desc: "Config Center", color: "text-emerald-400", border: "border-emerald-500/20" },
            { icon: Cpu, name: "Redis", desc: "Rate Limit", color: "text-red-400", border: "border-red-500/20" },
            { icon: Activity, name: "Prometheus", desc: "Metrics", color: "text-amber-400", border: "border-amber-500/20" },
            { icon: FileText, name: "ClickHouse", desc: "Log Server", color: "text-cyan-400", border: "border-cyan-500/20" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className={`flex flex-col items-center gap-1.5 px-3 py-3 rounded-lg border ${item.border} bg-white/2`}>
                <Icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-xs font-semibold text-white font-[Sora]">{item.name}</span>
                <span className="text-[9px] text-slate-500 font-[Outfit]">{item.desc}</span>
              </div>
            );
          })}
        </div>

        {/* Arrow down */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <div className="w-px h-6 bg-gradient-to-b from-white/20 to-[#E31836]/40" />
            <ArrowRight className="w-3 h-3 text-[#E31836] rotate-90" />
          </div>
        </div>

        {/* Row 4: Data Plane */}
        <div className="flex justify-center mb-6">
          <div className="relative px-6 py-4 rounded-xl border border-[#E31836]/30 bg-[#E31836]/8 min-w-[280px]">
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

        {/* Arrow down */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <div className="w-px h-6 bg-gradient-to-b from-[#E31836]/40 to-white/20" />
            <ArrowRight className="w-3 h-3 text-slate-500 rotate-90" />
          </div>
        </div>

        {/* Row 5: LLM Providers */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { name: "OpenAI", color: "from-emerald-400 to-emerald-600" },
            { name: "DeepSeek", color: "from-blue-400 to-blue-600" },
            { name: "Claude", color: "from-amber-300 to-amber-500" },
            { name: "Gemini", color: "from-blue-400 to-violet-500" },
            { name: "More...", color: "" },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/6 bg-white/2">
              <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold text-white font-[Sora] ${p.color ? `bg-gradient-to-br ${p.color}` : "bg-white/10"}`}>
                {p.name[0]}
              </div>
              <span className="text-[11px] text-slate-300 font-[Outfit]">{p.name}</span>
            </div>
          ))}
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

          {/* Key Points */}
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
                  className="p-5 rounded-xl border border-white/6 bg-white/2 hover:border-[#6D49FF]/20 transition-all"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#6D49FF]/10 border border-[#6D49FF]/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#a78bfa]" />
                    </div>
                    <h3 className="text-sm font-semibold text-white font-[Sora]">{point.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-[Outfit]">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
