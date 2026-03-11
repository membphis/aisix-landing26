/*
 * Official LLM Provider Logo Icons as inline SVG components.
 * These are simplified, recognizable versions of each provider's logo mark.
 */

interface LogoProps {
  className?: string;
  size?: number;
}

export function OpenAILogo({ className = "", size = 24 }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  );
}

export function ClaudeLogo({ className = "", size = 24 }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M4.709 15.955l4.397-2.398-.964-1.768-5.207 2.072a.75.75 0 00-.364 1.082l2.063 3.252a.75.75 0 001.1.197l.002-.002-1.027-2.435zm8.291.045c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.766-4.217l-4.397 2.398.964 1.768 5.207-2.072a.75.75 0 00.364-1.082l-2.063-3.252a.75.75 0 00-1.1-.197l-.002.002 1.027 2.435z" />
      <path d="M13.5 3.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v3.5h3V3.75zM13.5 16.75v3.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-3.5h3z" />
    </svg>
  );
}

export function AnthropicLogo({ className = "", size = 24 }: LogoProps) {
  return (
    <svg viewBox="0 0 256 176" width={size} height={size * 176/256} className={className} fill="currentColor">
      <path d="M147.487 0L256 176h-53.32L147.487 0zM66.183 106.532L89.49 176H36.17L0 62.076h53.32l12.863 44.456z" />
      <path d="M89.49 0l66.183 176H102.35L36.17 0H89.49z" />
    </svg>
  );
}

export function GeminiLogo({ className = "", size = 24 }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
      <defs>
        <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9B72CB" />
          <stop offset="100%" stopColor="#D96570" />
        </linearGradient>
      </defs>
      <path fill="url(#gemini-grad)" d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  );
}

export function DeepSeekLogo({ className = "", size = 24 }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
      <circle cx="12" cy="12" r="11" fill="#4D6BFE" />
      <path d="M7 12.5c0-2.5 2-4.5 5-4.5s5 2 5 4.5-2 4.5-5 4.5-5-2-5-4.5z" fill="none" stroke="white" strokeWidth="1.5" />
      <circle cx="10" cy="11.5" r="1.2" fill="white" />
      <circle cx="14" cy="11.5" r="1.2" fill="white" />
    </svg>
  );
}

export function MistralLogo({ className = "", size = 24 }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
      <rect x="1" y="3" width="4" height="4" fill="#F7D046" />
      <rect x="19" y="3" width="4" height="4" fill="#F7D046" />
      <rect x="1" y="10" width="4" height="4" fill="#F2A73B" />
      <rect x="7" y="10" width="4" height="4" fill="#F2A73B" />
      <rect x="13" y="10" width="4" height="4" fill="#F2A73B" />
      <rect x="19" y="10" width="4" height="4" fill="#F2A73B" />
      <rect x="1" y="17" width="4" height="4" fill="#EE792F" />
      <rect x="7" y="3" width="4" height="4" fill="#000" />
      <rect x="13" y="3" width="4" height="4" fill="#000" />
      <rect x="19" y="17" width="4" height="4" fill="#EE792F" />
      <rect x="7" y="17" width="4" height="4" fill="#000" />
      <rect x="13" y="17" width="4" height="4" fill="#000" />
    </svg>
  );
}

export function GoogleLogo({ className = "", size = 24 }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export function AlibabaCloudLogo({ className = "", size = 24 }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
      <path d="M2 7.5L5.5 6v12l-3.5-1.5v-9z" fill="#FF6A00" />
      <path d="M22 7.5L18.5 6v12l3.5-1.5v-9z" fill="#FF6A00" />
      <path d="M5.5 9l6.5-3 6.5 3v6l-6.5 3-6.5-3V9z" fill="none" stroke="#FF6A00" strokeWidth="1.5" />
    </svg>
  );
}

export function AmazonBedrockLogo({ className = "", size = 24 }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="none" stroke="#FF9900" strokeWidth="1.5" />
      <path d="M12 2v20M2 7l10 5 10-5" fill="none" stroke="#FF9900" strokeWidth="1.2" />
      <path d="M7 9.5l5 2.5 5-2.5" fill="none" stroke="#FF9900" strokeWidth="1" />
    </svg>
  );
}

export function AzureOpenAILogo({ className = "", size = 24 }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
      <path d="M1 12.5L8.5 2h7L1 12.5z" fill="#0078D4" />
      <path d="M8.5 22H3l5.5-9.5L15.5 22H8.5z" fill="#0078D4" />
      <path d="M12 8l5-6h5.5L12 8z" fill="#50E6FF" />
      <path d="M12 8l10.5 14H15L12 8z" fill="#0078D4" />
    </svg>
  );
}

/* Provider data with logo components for reuse */
export const providers = [
  { name: "OpenAI", Logo: OpenAILogo, color: "#10A37F" },
  { name: "DeepSeek", Logo: DeepSeekLogo, color: "#4D6BFE" },
  { name: "Anthropic", Logo: AnthropicLogo, color: "#D4A574" },
  { name: "Google", Logo: GoogleLogo, color: "#4285F4" },
  { name: "Mistral AI", Logo: MistralLogo, color: "#F7D046" },
  { name: "Alibaba Cloud", Logo: AlibabaCloudLogo, color: "#FF6A00" },
  { name: "Amazon Bedrock", Logo: AmazonBedrockLogo, color: "#FF9900" },
  { name: "Azure OpenAI", Logo: AzureOpenAILogo, color: "#0078D4" },
];

/* Hero section providers (right side of gateway) */
export const heroProviders = [
  { name: "OpenAI", Logo: OpenAILogo, color: "#10A37F" },
  { name: "Claude", Logo: AnthropicLogo, color: "#D4A574" },
  { name: "Gemini", Logo: GeminiLogo, color: "#4285F4" },
  { name: "DeepSeek", Logo: DeepSeekLogo, color: "#4D6BFE" },
  { name: "Mistral", Logo: MistralLogo, color: "#F7D046" },
];
