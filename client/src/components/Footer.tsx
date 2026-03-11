/*
 * Design: Cybernetic Brutalism
 * Footer — Brand + 4 link columns + social icons + copyright
 */
import { Github, Twitter, MessageSquare, Linkedin } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["AI Gateway", "Plugin Hub", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Blog", "Tutorials", "Community"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Partners"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "License (Apache 2.0)", "Security"],
  },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: MessageSquare, label: "Discord", href: "https://discord.gg" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#020408]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-8 py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#070F54] to-[#E31836] text-white text-xs font-bold font-[Sora]">
                AI
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-[Sora]">AISIX</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-[260px] mb-6 font-[Outfit]">
              The fully open-source AI Gateway for AI Agents and LLMs. Route, secure, and observe all your AI traffic in one place.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/12 transition-all"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4 font-[Sora]">{col.title}</h4>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-300 transition-colors font-[Outfit]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-6 border-t border-white/4">
          <p className="text-xs text-slate-700 font-[Outfit]">
            &copy; 2026 AISIX. All rights reserved. Licensed under Apache 2.0.
          </p>
          <p className="text-xs text-slate-700 font-[Outfit]">
            Built with passion by the open-source community.
          </p>
        </div>
      </div>
    </footer>
  );
}
