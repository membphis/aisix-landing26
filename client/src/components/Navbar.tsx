/*
 * Design: Cybernetic Brutalism
 * Navbar — Frosted glass, brand gradient logo, announcement bar
 * Nav links match the 6 sections: Features, Architecture, Docs, Ecosystem
 */
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Github, Star } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Architecture", href: "#architecture" },
    { label: "Docs", href: "#docs" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-[#070F54] via-[#6D49FF]/20 to-[#E31836]/30 border-b border-white/5">
        <div className="container flex items-center justify-center gap-2 py-2 text-sm">
          <span className="bg-gradient-to-r from-[#6D49FF] to-[#E31836] text-white text-[10px] font-bold px-2 py-0.5 rounded font-[Sora]">
            NEW
          </span>
          <span className="text-slate-300 font-[Outfit] text-xs sm:text-sm">
            AISIX — The Fully Open-Source Native AI Gateway for AI Agents & LLMs
          </span>
          <ArrowRight className="w-3 h-3 text-slate-400 hidden sm:block" />
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#030712]/95 backdrop-blur-xl border-white/8"
            : "bg-[#030712]/75 backdrop-blur-md border-white/5"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#070F54] to-[#E31836] text-white text-xs font-bold font-[Sora] group-hover:shadow-[0_0_20px_rgba(109,73,255,0.3)] transition-shadow">
              AI
            </div>
            <span className="text-white text-xl font-bold tracking-tight font-[Sora]">
              AISIX
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors font-[Outfit] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#6D49FF] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/8 bg-white/3 hover:bg-white/6 transition-all text-sm text-slate-300 hover:text-white font-[Outfit]"
            >
              <Github className="w-4 h-4" />
              <Star className="w-3 h-3 text-amber-400" />
              <span>Star</span>
            </a>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#070F54] to-[#E31836] text-white text-sm font-semibold font-[Sora] hover:shadow-[0_0_24px_rgba(109,73,255,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]">
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#030712]/98 backdrop-blur-xl border-t border-white/5 pb-6">
            <div className="container flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all font-[Outfit]"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 px-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/8 bg-white/3 text-sm text-slate-300 font-[Outfit]"
                >
                  <Github className="w-4 h-4" />
                  Star on GitHub
                </a>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#070F54] to-[#E31836] text-white text-sm font-semibold font-[Sora]">
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
