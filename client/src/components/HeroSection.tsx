/*
 * Design: Cybernetic Brutalism
 * Hero — Left text + Right architecture flow diagram
 * UPDATES: Official LLM logos, data flow particles from gateway to providers, simplified background
 */
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, BookOpen } from "lucide-react";
import { OpenAILogo, AnthropicLogo, GeminiLogo, DeepSeekLogo, MistralLogo } from "./ProviderLogos";

function AnimatedCounter({ target, suffix = "", prefix = "", decimals = 0, duration = 1800 }: { target: number; suffix?: string; prefix?: string; decimals?: number; duration?: number }) {
  const [value, setValue] = useState(prefix + "0" + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const fps = 60;
          const totalFrames = (duration / 1000) * fps;
          let frame = 0;
          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            if (frame >= totalFrames) {
              setValue(prefix + (decimals > 0 ? target.toFixed(decimals) : Math.round(target).toString()) + suffix);
              clearInterval(timer);
            } else {
              setValue(prefix + (decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()) + suffix);
            }
          }, 1000 / fps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, suffix, prefix, decimals, duration]);

  return <span ref={ref}>{value}</span>;
}

/* Data flow particle component - animated dots flowing from gateway to providers */
function DataFlowParticle({ delay, pathId }: { delay: number; pathId: string }) {
  return (
    <circle r="2.5" fill="#6D49FF" opacity="0.9">
      <animateMotion dur="2s" repeatCount="indefinite" begin={`${delay}s`}>
        <mpath href={`#${pathId}`} />
      </animateMotion>
      <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin={`${delay}s`} />
    </circle>
  );
}

function ArchitectureFlow() {
  const consumers = [
    { emoji: "🌐", label: "Web App" },
    { emoji: "📱", label: "Mobile" },
    { emoji: "🤖", label: "AI Agent" },
    { emoji: "🔌", label: "API Client" },
  ];
  const providerList = [
    { name: "OpenAI", Logo: OpenAILogo, color: "#10A37F" },
    { name: "Claude", Logo: AnthropicLogo, color: "#D4A574" },
    { name: "Gemini", Logo: GeminiLogo, color: "#4285F4" },
    { name: "DeepSeek", Logo: DeepSeekLogo, color: "#4D6BFE" },
    { name: "Mistral", Logo: MistralLogo, color: "#F7D046" },
  ];
  const features = ["Authentication", "Rate Limiting", "Load Balancing", "Observability"];

  return (
    <div className="relative hidden lg:block">
      {/* Subtle glow */}
      <div className="absolute -inset-8 bg-[#6D49FF]/5 rounded-3xl blur-[48px]" />

      <div className="relative flex items-center justify-between gap-3">
        {/* Left: Consumers */}
        <div className="flex flex-col gap-4 w-[110px] shrink-0">
          {consumers.map((c, i) => (
            <div
              key={c.label}
              className="px-3 py-2.5 rounded-xl border border-[#6D49FF]/25 bg-[#6D49FF]/7 text-center backdrop-blur-sm animate-fade-in-left"
              style={{ animationDelay: `${0.5 + i * 0.1}s`, animationFillMode: "both" }}
            >
              <div className="text-base mb-0.5">{c.emoji}</div>
              <div className="text-[11px] text-[#a78bfa] font-medium font-[Outfit]">{c.label}</div>
            </div>
          ))}
        </div>

        {/* Left Lines with flowing particles */}
        <div className="shrink-0 w-10 h-[280px] relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 280" fill="none">
            <defs>
              <path id="left-path-1" d="M0,35 C20,35 20,140 40,140" />
              <path id="left-path-2" d="M0,105 C20,105 20,140 40,140" />
              <path id="left-path-3" d="M0,175 C20,175 20,140 40,140" />
              <path id="left-path-4" d="M0,245 C20,245 20,140 40,140" />
            </defs>
            <use href="#left-path-1" stroke="#6D49FF" strokeWidth="1.5" strokeOpacity="0.3" />
            <use href="#left-path-2" stroke="#6D49FF" strokeWidth="1.5" strokeOpacity="0.3" />
            <use href="#left-path-3" stroke="#6D49FF" strokeWidth="1.5" strokeOpacity="0.3" />
            <use href="#left-path-4" stroke="#6D49FF" strokeWidth="1.5" strokeOpacity="0.3" />
            {/* Flowing particles */}
            <DataFlowParticle delay={0} pathId="left-path-1" />
            <DataFlowParticle delay={0.5} pathId="left-path-2" />
            <DataFlowParticle delay={1.0} pathId="left-path-3" />
            <DataFlowParticle delay={1.5} pathId="left-path-4" />
            <DataFlowParticle delay={1.0} pathId="left-path-1" />
            <DataFlowParticle delay={1.5} pathId="left-path-2" />
            <DataFlowParticle delay={0.3} pathId="left-path-3" />
            <DataFlowParticle delay={0.8} pathId="left-path-4" />
          </svg>
        </div>

        {/* Center: Gateway */}
        <div className="shrink-0 animate-fade-in-scale" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          <div className="relative">
            <div className="absolute -inset-6 bg-[#6D49FF]/8 rounded-2xl blur-[32px]" />
            <div className="relative rounded-xl border border-[#6D49FF]/30 bg-gradient-to-b from-[#6D49FF]/8 to-[#E31836]/4 p-4 backdrop-blur-sm min-w-[150px] overflow-hidden">
              {/* Spinning border */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute -inset-px rounded-xl bg-[conic-gradient(from_0deg,transparent,rgba(109,73,255,0.3),transparent,rgba(227,24,54,0.3),transparent)] animate-spin-slow" />
                <div className="absolute inset-[1px] rounded-xl bg-[#030712]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#070F54] to-[#E31836] text-white text-xs font-bold font-[Sora]">
                    AI
                  </div>
                </div>
                <div className="text-center mb-3 text-xs font-bold text-white font-[Sora]">
                  AISIX Gateway
                </div>
                <div className="flex flex-col gap-1.5">
                  {features.map((f, i) => (
                    <div
                      key={f}
                      className="px-2.5 py-1.5 rounded-md bg-white/4 border border-white/6 text-[10px] text-slate-400 text-center font-[Outfit] animate-fade-in-up"
                      style={{ animationDelay: `${0.6 + i * 0.08}s`, animationFillMode: "both" }}
                    >
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Lines with flowing particles (gateway → providers) */}
        <div className="shrink-0 w-10 h-[280px] relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 280" fill="none">
            <defs>
              <path id="right-path-1" d="M0,140 C20,140 20,28 40,28" />
              <path id="right-path-2" d="M0,140 C20,140 20,84 40,84" />
              <path id="right-path-3" d="M0,140 C20,140 20,140 40,140" />
              <path id="right-path-4" d="M0,140 C20,140 20,196 40,196" />
              <path id="right-path-5" d="M0,140 C20,140 20,252 40,252" />
            </defs>
            <use href="#right-path-1" stroke="white" strokeWidth="1" strokeOpacity="0.12" />
            <use href="#right-path-2" stroke="white" strokeWidth="1" strokeOpacity="0.12" />
            <use href="#right-path-3" stroke="white" strokeWidth="1" strokeOpacity="0.12" />
            <use href="#right-path-4" stroke="white" strokeWidth="1" strokeOpacity="0.12" />
            <use href="#right-path-5" stroke="white" strokeWidth="1" strokeOpacity="0.12" />
            {/* Flowing particles from gateway to providers */}
            <circle r="2" fill="#E31836" opacity="0.8">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="0s"><mpath href="#right-path-1" /></animateMotion>
              <animate attributeName="opacity" values="0;0.9;0.9;0" dur="1.8s" repeatCount="indefinite" begin="0s" />
            </circle>
            <circle r="2" fill="#E31836" opacity="0.8">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.4s"><mpath href="#right-path-2" /></animateMotion>
              <animate attributeName="opacity" values="0;0.9;0.9;0" dur="1.8s" repeatCount="indefinite" begin="0.4s" />
            </circle>
            <circle r="2" fill="#E31836" opacity="0.8">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.8s"><mpath href="#right-path-3" /></animateMotion>
              <animate attributeName="opacity" values="0;0.9;0.9;0" dur="1.8s" repeatCount="indefinite" begin="0.8s" />
            </circle>
            <circle r="2" fill="#E31836" opacity="0.8">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.2s"><mpath href="#right-path-4" /></animateMotion>
              <animate attributeName="opacity" values="0;0.9;0.9;0" dur="1.8s" repeatCount="indefinite" begin="1.2s" />
            </circle>
            <circle r="2" fill="#E31836" opacity="0.8">
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.6s"><mpath href="#right-path-5" /></animateMotion>
              <animate attributeName="opacity" values="0;0.9;0.9;0" dur="1.8s" repeatCount="indefinite" begin="1.6s" />
            </circle>
            {/* Second wave */}
            <circle r="2" fill="#6D49FF" opacity="0.7">
              <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.9s"><mpath href="#right-path-1" /></animateMotion>
              <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.2s" repeatCount="indefinite" begin="0.9s" />
            </circle>
            <circle r="2" fill="#6D49FF" opacity="0.7">
              <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.3s"><mpath href="#right-path-3" /></animateMotion>
              <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.2s" repeatCount="indefinite" begin="1.3s" />
            </circle>
            <circle r="2" fill="#6D49FF" opacity="0.7">
              <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.7s"><mpath href="#right-path-5" /></animateMotion>
              <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.2s" repeatCount="indefinite" begin="1.7s" />
            </circle>
          </svg>
        </div>

        {/* Right: Providers with official logos */}
        <div className="flex flex-col gap-2.5 w-[130px] shrink-0">
          {providerList.map((p, i) => {
            const Logo = p.Logo;
            return (
              <div
                key={p.name}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-white/6 bg-white/2 hover:bg-white/5 hover:border-white/15 transition-all animate-fade-in-right group"
                style={{ animationDelay: `${0.8 + i * 0.05}s`, animationFillMode: "both" }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: p.color + "18" }}
                >
                  <Logo size={16} className="text-white" />
                </div>
                <span className="text-[11px] text-slate-300 font-medium font-[Outfit]">{p.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Simplified background — subtle gradient + grid, no heavy image */}
      <div className="absolute inset-0 bg-[#030712]" />
      {/* Subtle radial glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(109,73,255,0.06),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(227,24,54,0.04),transparent_70%)]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="animate-hero-slide-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6D49FF]/30 bg-[#6D49FF]/10 mb-8">
              <span className="text-sm">🦀</span>
              <span className="text-xs text-[#a78bfa] font-medium font-[Outfit]">
                Native AI Gateway · Built with Rust
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6 font-[Sora]">
              <span className="text-white">The </span>
              <span className="bg-gradient-to-r from-[#6D49FF] to-[#FF4646] bg-clip-text text-transparent">
                Native AI Gateway
              </span>
              <br />
              <span className="text-white">for LLMs & AI Agents</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed font-[Outfit]">
              Route, balance, secure, and observe all your AI traffic through a single, lightning-fast gateway. Built on Rust for unparalleled stability and sub-millisecond overhead. Unified governance, cost control, and rich observability — all in one open-source solution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#070F54] to-[#E31836] text-white font-semibold font-[Sora] text-sm hover:shadow-[0_0_32px_rgba(109,73,255,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]">
                <BookOpen className="w-4 h-4" />
                Read the Docs
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/3 text-white font-medium font-[Outfit] text-sm hover:bg-white/6 hover:border-white/15 transition-all"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-[Sora]">
                  <AnimatedCounter target={100} suffix="+" />
                </div>
                <div className="text-sm text-white font-semibold mt-1 font-[Sora]">LLMs Supported</div>
                <div className="text-xs text-slate-500 font-[Outfit]">All major providers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-[Sora]">
                  <AnimatedCounter target={99.99} suffix="%" decimals={2} />
                </div>
                <div className="text-sm text-white font-semibold mt-1 font-[Sora]">Uptime Target</div>
                <div className="text-xs text-slate-500 font-[Outfit]">Enterprise reliability</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-[Sora]">
                  <AnimatedCounter target={1} prefix="< " suffix="ms" />
                </div>
                <div className="text-sm text-white font-semibold mt-1 font-[Sora]">Proxy Overhead</div>
                <div className="text-xs text-slate-500 font-[Outfit]">Sub-millisecond latency</div>
              </div>
            </div>
          </div>

          {/* Right: Architecture Flow */}
          <div className="animate-hero-slide-in-right" style={{ animationDelay: "0.4s" }}>
            <ArchitectureFlow />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent" />
    </section>
  );
}
