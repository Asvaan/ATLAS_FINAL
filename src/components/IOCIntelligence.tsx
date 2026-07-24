/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Cpu, ArrowRight, Activity, ShieldAlert } from 'lucide-react';

interface IOCProps {
  isTab?: boolean;
}

export function IOCVisual() {
  return (
    <div className="p-6 bg-[#07030f] border border-brand-border rounded-2xl space-y-5 relative overflow-hidden shadow-2xl">
      {/* Ambient Accent Light */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-accent/10 rounded-full filter blur-xl" />
      
      {/* Title / Header */}
      <div className="flex items-center justify-between pb-3 border-b border-brand-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-xs text-white font-semibold tracking-wide uppercase">Reputation Scan</span>
        </div>
        <span className="text-[10px] text-gray-500 font-mono">ID: 984-IOC</span>
      </div>

      {/* Score Display */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full border-4 border-brand-accent/25 border-t-brand-accent flex items-center justify-center">
          <span className="text-base font-bold text-white">94%</span>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Critical Risk Identified</div>
          <div className="text-[11px] text-gray-500 mt-0.5">Flagged by 82 / 93 global engines</div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 pt-2 border-t border-brand-border">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">Indicator:</span>
          <span className="text-white font-mono font-medium">185.220.101.4</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">Adversary:</span>
          <span className="text-brand-accent font-semibold flex items-center gap-1">
            <ShieldAlert className="w-3 h-3" /> Fox Kitten
          </span>
        </div>
      </div>
    </div>
  );
}

export function IOCText() {
  return (
    <div className="space-y-6">
      <div>
        <span className="text-[10px] font-semibold text-brand-accent tracking-[0.16em] uppercase mb-1.5 block">IOC Intelligence</span>
        <h3 className="text-2xl md:text-3xl font-sans font-semibold text-white tracking-tight leading-snug">
          Paste any IOC. Get results in 5 seconds.
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-3">
          Place any kind of IOC — a domain, an IP, or a hash — and ATLAS traverses all security resources simultaneously. No need to specify the indicator type. Results are classified as malicious or not within seconds, analyzed across 93+ global security vendors.
        </p>
      </div>

      <div className="space-y-5 pt-4">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-brand-accent/10 text-brand-accent rounded-xl shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-sm font-semibold text-white block">Multi-Vendor Cross-Reference</span>
            <span className="text-sm text-gray-500 mt-1 block leading-relaxed">
              Analyzed by 93 security vendors simultaneously — results include a full list of every vendor that classified the indicator as malicious, and are fully exportable.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-brand-accent/10 text-brand-accent rounded-xl shrink-0">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <span className="text-sm font-semibold text-white block">On-Premise AI Analysis via Threat Core</span>
            <span className="text-sm text-gray-500 mt-1 block leading-relaxed">
              AI summaries are tailored per team in JSON format for easy automation and fine-tuning. Our ML models run on a private server — no scan data ever leaves your network.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IOCIntelligence({ isTab = false }: IOCProps) {
  const content = (
    <div className="bg-[#0c0415]/60 backdrop-blur-3xl border border-white/5 hover:border-white/10 transition-colors duration-500 rounded-[2rem] p-8 md:p-12 premium-card-gradient relative overflow-hidden group shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Mockup / Feature Visual */}
        <div className="lg:col-span-5 space-y-4">
          <IOCVisual />
        </div>

        {/* Right Side: Marketing Copy */}
        <div className="lg:col-span-7 space-y-6">
          <IOCText />
        </div>
      </div>
    </div>
  );

  return isTab ? content : (
    <section id="ioc-intel" className="py-24 bg-brand-dark border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium mb-4">
            <Cpu className="w-3.5 h-3.5" /> Indicator Triage
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white mb-4">
            Unified IOC Triage in Under 5 Seconds
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Drop any indicator — hash, IP, or domain — and ATLAS automatically queries 93+ global intelligence vendors, classifies the threat, and delivers AI-powered summaries tailored to your team. Replacing fragmented toolchains with one unified workflow.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
}
