/*
 * Design: Cybernetic Brutalism
 * Core Value Proposition — WHY AISIX
 * 6 glow cards with hover gradient border glow effect
 */
import { useReveal } from "@/hooks/useReveal";
import { useRef, useState, useCallback } from "react";
import { Zap, Globe, Shuffle, Gauge, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    iconColor: "text-orange-400",
    glowColor: "rgba(251,146,60,0.4)",
    title: "High Performance",
    subtitle: "Blazing Fast, Built with Rust",
    desc: "Native Rust data plane delivers sub-millisecond proxy overhead with minimal memory footprint. Handle millions of requests per second without breaking a sweat.",
  },
  {
    icon: Globe,
    iconColor: "text-blue-400",
    glowColor: "rgba(96,165,250,0.4)",
    title: "Unified Governance",
    subtitle: "One API, All Your LLMs",
    desc: "Manage all your LLM providers through a single, OpenAI-compatible API. Centralized configuration, authentication, and policy enforcement across your entire AI stack.",
  },
  {
    icon: Shuffle,
    iconColor: "text-violet-400",
    glowColor: "rgba(167,139,250,0.4)",
    title: "Intelligent Load Balancing",
    subtitle: "Multi-LLM Load Balancing",
    desc: "Dynamically distribute traffic across multiple LLM providers based on latency, cost, and availability. Weighted round-robin, least-connections, and custom strategies.",
  },
  {
    icon: Gauge,
    iconColor: "text-cyan-400",
    glowColor: "rgba(34,211,238,0.4)",
    title: "Precise Rate Limiting",
    subtitle: "Token & Request Rate Limiting",
    desc: "Fine-grained rate limiting by tokens, requests, or custom dimensions. Per-consumer, per-route, and cluster-wide policies to control costs and prevent abuse.",
  },
  {
    icon: ShieldCheck,
    iconColor: "text-pink-400",
    glowColor: "rgba(244,114,182,0.4)",
    title: "Security Guardrails",
    subtitle: "Enterprise-Grade Security",
    desc: "Protect your AI pipeline with prompt injection detection, content moderation, PII redaction, and comprehensive audit logging for regulatory compliance.",
  },
  {
    icon: BarChart3,
    iconColor: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.4)",
    title: "Rich Observability",
    subtitle: "Full-Stack Observability",
    desc: "Track every token, monitor latency distributions, and analyze traffic patterns in real-time. Native integration with Prometheus, Grafana, and ClickHouse.",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, visible } = useReveal();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (cardRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      className={`relative rounded-xl p-7 border border-white/6 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 group overflow-hidden ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient glow that follows mouse */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${feature.glowColor}, transparent 60%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, ${feature.glowColor.replace("0.4", "0.6")}, transparent 50%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div className="relative z-10">
        <div className="w-11 h-11 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center mb-5 group-hover:border-white/12 transition-colors">
          <Icon className={`w-5 h-5 ${feature.iconColor}`} />
        </div>
        <h3 className="text-[17px] font-semibold text-white mb-1 font-[Sora]">{feature.title}</h3>
        <p className="text-xs text-[#a78bfa] font-medium mb-3 font-[Outfit]">{feature.subtitle}</p>
        <p className="text-sm text-slate-400 leading-relaxed font-[Outfit]">{feature.desc}</p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const { ref: headerRef, visible: headerVisible } = useReveal();

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.12em] uppercase text-[#a78bfa] mb-4 font-[Outfit]">
            — WHY AISIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[Sora] leading-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#6D49FF] to-[#FF4646] bg-clip-text text-transparent">
              Manage AI Traffic
            </span>
          </h2>
          <p className="text-slate-400 font-[Outfit] leading-relaxed text-lg">
            A production-grade, Rust-powered AI Gateway designed for performance, governance, and observability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
