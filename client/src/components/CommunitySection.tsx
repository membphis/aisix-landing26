/*
 * Design: Cybernetic Brutalism
 * Community — Left text with stats grid + Right illustration
 * Open source community showcase
 */
import { useReveal } from "@/hooks/useReveal";
import { Github, MessageSquare, BookOpen, Users } from "lucide-react";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663281797301/B5D8znjtLgNMM5PodSZYSz/community-illustration-Tu7Yokob7SvhvA4tJooFfn.webp";

const stats = [
  { icon: Github, value: "200+", desc: "Active open-source contributors" },
  { icon: MessageSquare, value: "5,000+", desc: "Join our growing community" },
  { icon: BookOpen, value: "300+", desc: "Comprehensive guides & tutorials" },
  { icon: Users, value: "10,000+", desc: "Companies trust AISIX in production" },
];

export default function CommunitySection() {
  const { ref: textRef, visible: textVisible } = useReveal();
  const { ref: imgRef, visible: imgVisible } = useReveal();

  return (
    <section id="community" className="relative py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text (order-2 on desktop for right-side image) */}
          <div
            ref={textRef}
            className={`order-2 lg:order-1 transition-all duration-700 ${
              textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#a78bfa] mb-4 font-[Outfit]">
              Open Source Community
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 font-[Sora] leading-tight">
              Built by the Community,{" "}
              <span className="bg-gradient-to-r from-[#6D49FF] to-[#E31836] bg-clip-text text-transparent">
                For the Community
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed font-[Outfit]">
              AISIX is fully open-source under the Apache 2.0 license. Join thousands of developers and companies who are building the future of AI infrastructure together.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.desc}
                    className="p-4 rounded-xl border border-white/6 bg-white/2"
                  >
                    <Icon className="w-5 h-5 text-[#6D49FF] mb-2" />
                    <div className="text-2xl font-bold text-white font-[Sora] mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-[Outfit]">{stat.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`order-1 lg:order-2 transition-all duration-700 ${
              imgVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-[#6D49FF]/10 rounded-3xl blur-[48px]" />
              <img
                src={COMMUNITY_IMG}
                alt="AISIX open-source community"
                className="relative rounded-2xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
