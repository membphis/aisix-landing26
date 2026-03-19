/*
 * Design: Cybernetic Brutalism
 * Pricing — The Best Pricing Plans
 * Two-tier: Open Source (free) + Enterprise
 */
"use client";

import { useReveal } from "@/hooks/useReveal";
import { ArrowRight, Check } from "lucide-react";

const osFeatures = [
  "Connect 100+ LLM providers",
  "Load balancing + RPM/TPM limits",
  "Virtual key management",
  "OpenTelemetry, Prometheus, Jaeger",
  "Model guardrails",
];

const enterpriseFeatures = [
  "Includes all open-source features",
  "Priority support + custom SLAs",
  "Budgets, teams, and RBAC",
  "Audit logs and compliance",
  "Complete enterprise features",
];

export default function CTASection() {
  const { ref: headerRef, visible: headerVisible } = useReveal();
  const { ref: cardsRef, visible: cardsVisible } = useReveal();

  return (
    <section id="pricing" className="relative py-16 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#6D49FF]/8 to-[#E31836]/8 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.12em] uppercase text-[#a78bfa] mb-4 font-[Outfit]">
            — PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[Sora] leading-tight">
            The Best{" "}
            <span className="bg-gradient-to-r from-[#6D49FF] to-[#FF4646] bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-slate-400 font-[Outfit] leading-relaxed text-lg">
            Start free with our open-source core. Scale to enterprise when you're ready.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-6 max-w-4xl mx-auto transition-all duration-700 delay-150 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Open Source */}
          <div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white font-[Sora] mb-1">Open Source</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-white font-[Sora]">$0</span>
                <span className="text-slate-400 font-[Outfit] text-sm">/ forever</span>
              </div>
              <p className="text-sm text-slate-400 font-[Outfit]">
                Everything you need to get started with Native AI Gateway
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {osFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300 font-[Outfit]">
                  <Check className="w-4 h-4 text-[#a78bfa] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://github.com/api7/aisix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-white/10 bg-white/3 text-white font-medium font-[Outfit] hover:bg-white/6 hover:border-white/15 transition-all"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Enterprise */}
          <div className="relative rounded-2xl border border-[#6D49FF]/30 bg-gradient-to-b from-[#6D49FF]/[0.06] to-transparent p-8 flex flex-col">
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-[#6D49FF] to-[#E31836] text-white font-[Sora]">
                Recommended
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white font-[Sora] mb-1">Enterprise</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-white font-[Sora]">Custom</span>
              </div>
              <p className="text-sm text-slate-400 font-[Outfit]">
                Cloud or Self-Hosted. For teams managing AI traffic at scale.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {enterpriseFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300 font-[Outfit]">
                  <Check className="w-4 h-4 text-[#a78bfa] shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://calendly.com/api7/meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-[#070F54] to-[#E31836] text-white font-semibold font-[Sora] hover:shadow-[0_0_32px_rgba(109,73,255,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
