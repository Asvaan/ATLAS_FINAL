/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, ShieldAlert, Target, Calendar, ArrowRight } from 'lucide-react';

interface ThreatActorsProps {
  isTab?: boolean;
}

export default function ThreatActors({ isTab = false }: ThreatActorsProps) {
  const content = (
    <div className="bg-brand-card border border-brand-border rounded-3xl p-6 md:p-10 premium-card-gradient animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Mockup Visual */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 bg-[#07030f] border border-brand-border rounded-2xl space-y-5 relative overflow-hidden">
            {/* Ambient Accent Light */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-accent/10 rounded-full filter blur-xl" />

            <div className="flex items-center justify-between pb-3 border-b border-brand-border">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-accent" />
                <span className="text-xs text-white font-semibold uppercase tracking-wider">Adversary Profile</span>
              </div>
              <span className="text-[10px] text-gray-500 font-mono">APT29 Dossier</span>
            </div>

            {/* Campaign Dossier List mockup */}
            <div className="space-y-4">
              {/* APT29 */}
              <div className="pb-3 border-b border-brand-border/60">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">APT29 (Cozy Bear)</span>
                  <span className="px-2 py-0.5 rounded font-mono text-[8px] font-bold uppercase tracking-wider bg-brand-danger/10 text-brand-danger border border-brand-danger/20">Critical</span>
                </div>
                <div className="text-[10px] text-gray-500 mt-1">Origin: Eastern Europe · Targets: Government, Defense, Tech</div>
              </div>

              {/* Fox Kitten */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">Fox Kitten (UNC757)</span>
                  <span className="px-2 py-0.5 rounded font-mono text-[8px] font-bold uppercase tracking-wider bg-brand-danger/10 text-brand-danger border border-brand-danger/20">Critical</span>
                </div>
                <div className="text-[10px] text-gray-500 mt-1">Origin: Iran · Targets: Oil & Gas, Defense, Utilities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-sm font-semibold text-brand-accent tracking-[0.16em] uppercase mb-2 block">Intelligence Reports</span>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-white tracking-tight leading-snug">
              Adversary Dossiers
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              Access continuously updated profiles of global state-sponsored (APT) and cybercriminal syndicates targeting your sector. Gain deep insights into their methods, infrastructure, and active operations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-xl shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-white block">Socio-Political Attribution</span>
                <span className="text-[11px] text-gray-500 mt-0.5 block leading-relaxed">
                  Understand threat origins, political alignments, and underlying strategic motivations.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-xl shrink-0">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-white block">Advisory Playbooks</span>
                <span className="text-[11px] text-gray-500 mt-0.5 block leading-relaxed">
                  Review ready-to-use defensive playbooks mapped directly to campaign tactics and tooling.
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              const element = document.getElementById('contact-form');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-pill"
          >
            Schedule a Demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return isTab ? content : (
    <section id="threat-actors" className="py-24 bg-brand-dark border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium mb-4">
            <Users className="w-3.5 h-3.5" /> Threat Actor Intel
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white mb-4">
            Know Your Adversary
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Comprehensive dossiers on global state-sponsored and criminal syndicates. Ground your security baseline in real-world intelligence.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
}
