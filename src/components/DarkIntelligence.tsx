/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EyeOff, ShieldAlert, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

interface DarkIntelligenceProps {
  isTab?: boolean;
}

export function DarkVisual() {
  return (
    <div className="p-6 bg-[#07030f] border border-brand-border rounded-2xl space-y-5 relative overflow-hidden shadow-2xl">
      {/* Ambient Accent Light */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-accent/10 rounded-full filter blur-xl" />

      <div className="flex items-center justify-between pb-3 border-b border-brand-border">
        <div className="flex items-center gap-2">
          <EyeOff className="w-4 h-4 text-brand-accent" />
          <span className="text-xs text-white font-semibold uppercase tracking-wider">Dark Web Surveillance</span>
        </div>
        <span className="text-[10px] text-gray-500 font-mono">Live Sync</span>
      </div>

      {/* Alert Display Card */}
      <div className="p-4 bg-brand-danger/5 border border-brand-danger/25 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-brand-danger uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" /> Leak Warning
        </div>
        <div className="text-xs text-white">
          Exposed credentials matching domain <strong className="text-gray-300 font-medium">@company.com</strong> detected on underground forums.
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono">
          <span>Source: RaidForums Dump</span>
          <span>•</span>
          <span>Impact: High</span>
        </div>
      </div>

      {/* Action Status */}
      <div className="flex items-center gap-2 text-xs text-brand-success font-medium">
        <CheckCircle className="w-4 h-4 text-brand-success shrink-0" />
        <span>Remediation triggered successfully via AD Sync</span>
      </div>
    </div>
  );
}

export default function DarkIntelligence({ isTab = false }: DarkIntelligenceProps) {
  const content = (
    <div className="bg-[#0c0415]/60 backdrop-blur-3xl border border-white/5 hover:border-white/10 transition-colors duration-500 rounded-[2rem] p-8 md:p-12 premium-card-gradient relative overflow-hidden group shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Mockup Visual (Now on Right on Desktop) */}
        <div className="lg:col-span-5 lg:order-2 order-1 space-y-4">
          <DarkVisual />
        </div>

        {/* Right Side: Copy (Now on Left on Desktop) */}
        <div className="lg:col-span-7 lg:order-1 order-2 space-y-6">
export function DarkText() {
  return (
    <div className="space-y-4">
      <div>
        <span className="text-[10px] font-semibold text-brand-accent tracking-[0.16em] uppercase mb-1 block">Surveillance & Alerting</span>
        <h3 className="text-xl md:text-2xl font-display font-semibold text-white tracking-tight leading-snug">
          Targeted Keyword Surveillance
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mt-2">
          Search the entire dark web for specific corporate keywords, assets, or domain names to extract full threat actor leaks and forum records.
        </p>
      </div>

      <div className="space-y-3 pt-2">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold text-white block">Isolated Admin Access</span>
            <span className="text-[11px] text-gray-500 mt-0.5 block leading-relaxed">
              Search filters and telemetry records are kept strictly private and not shared globally.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg shrink-0">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold text-white block">Deep Web Keyword Queries</span>
            <span className="text-[11px] text-gray-500 mt-0.5 block leading-relaxed">
              Deploy search filters across encrypted message channels, invite-only pastebin dumps.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

        {/* Right Side: Copy (Now on Left on Desktop) */}
        <div className="lg:col-span-7 lg:order-1 order-2 space-y-6">
          <DarkText />
        </div>
      </div>
    </div>
  );

  return isTab ? content : (
    <section id="dark-web-intel" className="py-24 bg-brand-dark border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium mb-4">
            <EyeOff className="w-3.5 h-3.5" /> Dark Web Intel
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white mb-4">
            Brand and Identity Surveillance
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Monitor the dark web automatically. Detect exposed enterprise data and brand threats before they become entries in a breach report.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
}
