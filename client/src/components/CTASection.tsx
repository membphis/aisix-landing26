/*
 * Design: Cybernetic Brutalism
 * CTA — Ready to Take Control of Your AI Infrastructure?
 * V3: Darker background overlay to match dark theme
 */
import { useReveal } from "@/hooks/useReveal";
import { ArrowRight, BookOpen } from "lucide-react";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663281797301/B5D8znjtLgNMM5PodSZYSz/cta-bg-AnAAQkFLowBNhsdxvutGUX.webp";

export default function CTASection() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background — much darker overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${CTA_BG})` }}
      />
      <div className="absolute inset-0 bg-[#030712]/80" />

      {/* Gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#6D49FF]/10 to-[#E31836]/10 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 font-[Sora] leading-tight">
            Ready to Take Control of Your{" "}
            <span className="bg-gradient-to-r from-[#6D49FF] to-[#FF4646] bg-clip-text text-transparent">
              AI Infrastructure
            </span>
            ?
          </h2>
          <p className="text-lg text-slate-300 mb-10 font-[Outfit] leading-relaxed">
            Deploy your native AI Gateway in minutes. Open source. Built with Rust. Production-ready.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#070F54] to-[#E31836] text-white font-semibold font-[Sora] hover:shadow-[0_0_32px_rgba(109,73,255,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]">
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/10 bg-white/3 text-white font-medium font-[Outfit] hover:bg-white/6 hover:border-white/15 transition-all">
              <BookOpen className="w-4 h-4" />
              Read Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
