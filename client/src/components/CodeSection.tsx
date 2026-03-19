/*
 * Design: Cybernetic Brutalism
 * Features Deep Dive — DEVELOPER EXPERIENCE
 * Left: Tab-switchable descriptions, Right: Code block
 * Tab 1: Quick Start (Local Run), Tab 2: Model Configuration, Tab 3: APIKey Management
 */
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Terminal, Copy, Check, Rocket, Settings, Key } from "lucide-react";

const tabs = [
  {
    label: "Quick Start",
    icon: Rocket,
    lang: "bash",
    description: "Launch AISIX instantly with one command",
    bullets: [
    ],
  },
  {
    label: "Model Mgmt",
    icon: Settings,
    lang: "json",
    description: "Manage provider-backed models through the Admin API or built-in UI",
    bullets: [
      "LLMs: OpenAI, Anthropic, Gemini, DeepSeek, and more",
      "Per-model timeout and rate limits",
      "Hot-reload without restarts",
    ],
  },
  {
    label: "APIKey Mgmt",
    icon: Key,
    lang: "json",
    description: "Manage API keys through the Admin API or built-in UI",
    bullets: [
      "Per-key model allowlists",
      "Per-key RPM, TPM, and concurrency limits",
      "Bearer auth on proxy requests",
    ],
  },
];

const codeBlocks = [
  // Quick Start
  [
    { ln: 1, type: "default", text: 'curl -sL "https://run.api7.ai/aisix/quickstart" | sh' },
  ],
  // Model Configuration
  [
    { ln: 1, type: "comment", text: "# POST /models" },
    { ln: 2, type: "default", text: "{" },
    { ln: 3, type: "default", text: '  "name": "gpt-5-chat",' },
    { ln: 4, type: "default", text: '  "model": "openai/gpt-5",' },
    { ln: 5, type: "default", text: '  "provider_config": { "api_key": "sk-openai-xxxx" },' },
    { ln: 6, type: "default", text: '  "timeout": 30000,' },
    { ln: 7, type: "default", text: '  "rate_limit": { "rpm": 120, "concurrency": 16 }' },
    { ln: 8, type: "default", text: "}" },
    { ln: 9, type: "empty", text: "" },
    { ln: 10, type: "comment", text: "# Also manageable from http://127.0.0.1:3001/ui/" },
  ],
  // APIKey Management
  [
    { ln: 1, type: "comment", text: "# POST /apikeys" },
    { ln: 2, type: "default", text: "{" },
    { ln: 3, type: "default", text: '  "key": "sk-team-frontend",' },
    { ln: 4, type: "default", text: '  "allowed_models": ["openai/gpt-5", "deepseek/deepseek-chat"],' },
    { ln: 5, type: "default", text: '  "rate_limit": { "rpm": 300, "tpm": 120000, "concurrency": 20 }' },
    { ln: 6, type: "default", text: "}" },
    { ln: 7, type: "empty", text: "" },
    { ln: 8, type: "comment", text: "# Use as: Authorization: Bearer sk-team-frontend" },
    { ln: 9, type: "comment", text: "# Against: /v1/chat/completions" },
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
  const isModelMgmtTab = activeTab === 1;
  const isApiKeyMgmtTab = activeTab === 2;

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
            OpenAI-compatible API. Production-ready from day one.
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

          {/* Right: Code Block / Image */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {isModelMgmtTab ? (
              <div className="rounded-xl border border-white/8 bg-[#0a0f1e] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.4)]">
                <img
                  src="/images/aisix_ui_models.png"
                  alt="AISIX Model Management UI"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ) : isApiKeyMgmtTab ? (
              <div className="rounded-xl border border-white/8 bg-[#0a0f1e] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.4)]">
                <img
                  src="/images/aisix_ui_apikeys.png"
                  alt="AISIX API Key Management UI"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
