/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Globe, ShieldAlert, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface ExtendedProps {
  isTab?: boolean;
}

export function ExtendedVisual() {
  return (
    <div className="p-6 bg-[#07030f] border border-brand-border rounded-2xl space-y-5 relative overflow-hidden shadow-2xl">
      {/* Ambient Accent Light */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-accent/10 rounded-full filter blur-xl" />

      <div className="flex items-center justify-between pb-3 border-b border-brand-border">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-brand-accent animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-xs text-white font-semibold uppercase tracking-wider">Extended Crawler</span>
        </div>
        <span className="text-[10px] text-gray-500 font-mono">Crawler: Active</span>
      </div>

      {/* Simulated Query Results */}
      <div className="space-y-3.5">
        <div>
          <div className="text-[11px] text-gray-500 font-mono mb-1">Target Keyword:</div>
          <div className="text-xs text-white font-medium bg-brand-surface border border-brand-border px-3 py-1.5 rounded-lg flex items-center justify-between">
            <span>APT29 campaign leak</span>
            <Search className="w-3.5 h-3.5 text-gray-500" />
          </div>
        </div>

        <div className="p-3 bg-brand-card/60 border border-brand-border rounded-xl space-y-2.5">
          <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-1 border-b border-brand-border">Crawler Matches</div>
          
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-300 flex items-center gap-1.5 truncate max-w-[180px]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-danger shrink-0" />
              leak-dump-bin.onion/data
            </span>
            <span className="text-[9px] text-brand-danger font-mono font-bold bg-brand-danger/10 border border-brand-danger/20 px-1.5 py-0.2 rounded shrink-0">Flagged</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-300 flex items-center gap-1.5 truncate max-w-[180px]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-warning shrink-0" />
              compromised-domain.com
            </span>
            <span className="text-[9px] text-brand-warning font-mono font-bold bg-brand-warning/10 border border-brand-warning/20 px-1.5 py-0.2 rounded shrink-0">Leaked</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono">
          <CheckCircle className="w-3.5 h-3.5 text-brand-success shrink-0" />
          <span>14,200 indexed sources parsed successfully</span>
        </div>
      </div>
    </div>
  );
}

export function ExtendedText() {
  return (
    <div className="space-y-4">
      <div>
        <span className="text-[10px] font-semibold text-brand-accent tracking-[0.16em] uppercase mb-1.5 block">Extended Search</span>
        <h3 className="text-xl md:text-2xl font-sans font-semibold text-white tracking-tight leading-snug">
          Web & Darknet OSINT Crawler
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mt-3">
          Deploy recursive web crawlers to scan hidden darknet marketplaces, pastebins, and compile structured lists of compromised assets.
        </p>
      </div>

      <div className="space-y-3 pt-2">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg shrink-0">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold text-white block">Multi-Layer Web Scanning</span>
            <span className="text-[11px] text-gray-500 mt-0.5 block leading-relaxed">
              Query standard index sites and hidden service links.
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg shrink-0">
            <ExternalLink className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold text-white block">Compromised Domain Aggregation</span>
            <span className="text-[11px] text-gray-500 mt-0.5 block leading-relaxed">
              Generate structured URL reports for indexed host matches.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExtendedIntelligence({ isTab = false }: ExtendedProps) {
  const content = (
    <div className="bg-[#0c0415]/60 backdrop-blur-3xl border border-white/5 hover:border-white/10 transition-colors duration-500 rounded-[2rem] p-8 md:p-12 premium-card-gradient relative overflow-hidden group shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Mockup Visual (Now on Right on Desktop) */}
        <div className="lg:col-span-5 lg:order-2 order-1 space-y-4">
          <ExtendedVisual />
        </div>

        {/* Right Side: Copy (Now on Left on Desktop) */}
        <div className="lg:col-span-7 lg:order-1 order-2 space-y-6">
          <ExtendedText />
        </div>
      </div>
    </div>
  );

  return isTab ? content : (
    <section id="extended-intel" className="py-24 bg-brand-dark border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium mb-4">
            <Search className="w-3.5 h-3.5" /> Extended Intel
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white mb-4">
            Extended Web Intelligence
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Consolidate unstructured OSINT. Automatically map web mentions and compromised assets using dynamic threat indexes.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
}
