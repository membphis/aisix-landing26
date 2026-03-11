/*
 * Design: Cybernetic Brutalism
 * Features Deep Dive — DEVELOPER EXPERIENCE
 * Left: Tab-switchable descriptions, Right: Code block
 * Tab 1: Quick Start (Docker), Tab 2: Model Configuration, Tab 3: APIKey Management
 */
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Terminal, Copy, Check, Rocket, Settings, Key } from "lucide-react";

const tabs = [
  {
    label: "Quick Start",
    icon: Rocket,
    lang: "bash",
    description: "Get AISIX running in under 5 minutes with Docker. A single command sets up the gateway with sensible defaults, ready for production traffic.",
    bullets: [
      "One-command Docker deployment",
      "Sensible production defaults",
      "Health check endpoint included",
      "Hot-reload configuration",
    ],
  },
  {
    label: "Model Config",
    icon: Settings,
    lang: "yaml",
    description: "Define your LLM models with a simple YAML configuration. Specify providers, models, weights, and fallback strategies in a declarative format.",
    bullets: [
      "Declarative YAML configuration",
      "Multi-provider support",
      "Weighted load balancing",
      "Automatic fallback chains",
    ],
  },
  {
    label: "APIKey Mgmt",
    icon: Key,
    lang: "yaml",
    description: "Issue Virtual Keys to your developers and teams. Set per-key rate limits, model access controls, and usage budgets with fine-grained policies.",
    bullets: [
      "Virtual API key issuance",
      "Per-key rate limiting",
      "Model access control",
      "Usage budget enforcement",
    ],
  },
];

const codeBlocks = [
  // Quick Start
  [
    { ln: 1, type: "comment", text: "# Pull and run AISIX with Docker" },
    { ln: 2, type: "default", text: "docker run -d --name aisix \\" },
    { ln: 3, type: "default", text: "  -p 9080:9080 -p 9443:9443 \\" },
    { ln: 4, type: "default", text: "  -v $(pwd)/config:/usr/local/aisix/conf \\" },
    { ln: 5, type: "default", text: "  aisix/aisix-gateway:latest" },
    { ln: 6, type: "empty", text: "" },
    { ln: 7, type: "comment", text: "# Verify the gateway is running" },
    { ln: 8, type: "default", text: "curl http://localhost:9080/healthcheck" },
    { ln: 9, type: "comment", text: '# {"status":"ok","version":"2.0.0"}' },
  ],
  // Model Configuration
  [
    { ln: 1, type: "comment", text: "# models.yaml - LLM Provider Configuration" },
    { ln: 2, type: "key", text: "models:" },
    { ln: 3, type: "bullet", text: "  - name: gpt-4o" },
    { ln: 4, type: "kv", key: "    provider:", val: " openai" },
    { ln: 5, type: "kv", key: "    weight:", val: " 40" },
    { ln: 6, type: "kv", key: "    max_tokens:", val: " 128000" },
    { ln: 7, type: "bullet", text: "  - name: deepseek-chat" },
    { ln: 8, type: "kv", key: "    provider:", val: " deepseek" },
    { ln: 9, type: "kv", key: "    weight:", val: " 35" },
    { ln: 10, type: "kv", key: "    priority:", val: " 1" },
    { ln: 11, type: "bullet", text: "  - name: claude-3-sonnet" },
    { ln: 12, type: "kv", key: "    provider:", val: " anthropic" },
    { ln: 13, type: "kv", key: "    weight:", val: " 25" },
    { ln: 14, type: "mixed", key: "    priority:", val: " 2  ", comment: "# fallback" },
  ],
  // APIKey Management
  [
    { ln: 1, type: "comment", text: "# consumers.yaml - API Key Management" },
    { ln: 2, type: "key", text: "consumers:" },
    { ln: 3, type: "bullet", text: "  - name: team-frontend" },
    { ln: 4, type: "key", text: "    credentials:" },
    { ln: 5, type: "kv", key: "      api_key:", val: " vk-frontend-xxxx" },
    { ln: 6, type: "key", text: "    rate_limit:" },
    { ln: 7, type: "kv", key: "      tokens_per_minute:", val: " 50000" },
    { ln: 8, type: "kv", key: "      requests_per_minute:", val: " 100" },
    { ln: 9, type: "key", text: "    allowed_models:" },
    { ln: 10, type: "bullet", text: "      - gpt-4o" },
    { ln: 11, type: "bullet", text: "      - deepseek-chat" },
    { ln: 12, type: "key", text: "    budget:" },
    { ln: 13, type: "kv", key: "      monthly_limit_usd:", val: " 500" },
    { ln: 14, type: "kv", key: "      alert_threshold:", val: " 0.8" },
  ],
];

function CodeLine({ line }: { line: any }) {
  return (
    <div className="flex leading-7">
      <span className="text-slate-700 select-none w-7 text-right mr-4 shrink-0 text-xs">{line.ln}</span>
      {line.type === "comment" && <span className="text-slate-600">{line.text}</span>}
      {line.type === "default" && <span className="text-slate-300">{line.text}</span>}
      {line.type === "empty" && <span>&nbsp;</span>}
      {line.type === "key" && <span className="text-cyan-300">{line.text}</span>}
      {line.type === "bullet" && <span className="text-violet-400">{line.text}</span>}
      {line.type === "kv" && (
        <>
          <span className="text-cyan-300">{line.key}</span>
          <span className="text-amber-300">{line.val}</span>
        </>
      )}
      {line.type === "mixed" && (
        <>
          <span className="text-cyan-300">{line.key}</span>
          <span className="text-amber-300">{line.val}</span>
          <span className="text-slate-600">{line.comment}</span>
        </>
      )}
    </div>
  );
}

export default function CodeSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const { ref: leftRef, visible: leftVisible } = useReveal();
  const { ref: rightRef, visible: rightVisible } = useReveal();

  const handleCopy = () => {
    const lines = codeBlocks[activeTab].map((l: any) => {
      if (l.type === "kv") return (l.key || "") + (l.val || "");
      if (l.type === "mixed") return (l.key || "") + (l.val || "") + (l.comment || "");
      return l.text || "";
    });
    navigator.clipboard.writeText(lines.join("\n")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const currentTab = tabs[activeTab];

  return (
    <section id="docs" className="relative py-16 overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold tracking-[0.12em] uppercase text-[#a78bfa] mb-4 font-[Outfit]">
            — DEVELOPER EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[Sora] leading-tight">
            Deploy in Minutes,{" "}
            <span className="bg-gradient-to-r from-[#6D49FF] to-[#FF4646] bg-clip-text text-transparent">
              Not Weeks
            </span>
          </h2>
          <p className="text-slate-400 font-[Outfit] leading-relaxed text-lg">
            Simple YAML configuration. OpenAI-compatible API. Production-ready from day one.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Tab buttons + description */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Tab Buttons */}
            <div className="flex gap-2 mb-8">
              {tabs.map((tab, i) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium font-[Outfit] transition-all ${
                      activeTab === i
                        ? "bg-[#6D49FF]/15 border border-[#6D49FF]/30 text-white"
                        : "border border-white/6 bg-white/2 text-slate-400 hover:text-white hover:bg-white/4"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Description */}
            <p className="text-slate-200 mb-6 leading-relaxed font-[Outfit] text-base">
              {currentTab.description}
            </p>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3">
              {currentTab.bullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-slate-200 font-[Outfit]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6D49FF] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Code Block */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="rounded-xl border border-white/8 bg-[#0a0f1e] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.4)]">
              {/* Code header */}
              <div className="flex items-center justify-between border-b border-white/6 px-4 py-2">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{currentTab.lang}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 text-slate-600 hover:text-slate-300 transition-colors"
                  title="Copy code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-violet-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Code Body */}
              <div className="p-5 overflow-x-auto">
                <pre className="text-[13px] font-mono">
                  {codeBlocks[activeTab].map((line) => (
                    <CodeLine key={`${activeTab}-${line.ln}`} line={line} />
                  ))}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
