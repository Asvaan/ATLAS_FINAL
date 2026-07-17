/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Eye, Layers, Network, ArrowRight } from 'lucide-react';

interface D3FENDProps {
  isTab?: boolean;
}

export default function D3FEND({ isTab = false }: D3FENDProps) {
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
                <Layers className="w-4 h-4 text-brand-accent" />
                <span className="text-xs text-white font-semibold uppercase tracking-wider">D3FEND Hardening</span>
              </div>
              <span className="text-[10px] text-gray-500 font-mono">Status: Secure</span>
            </div>

            {/* Countermeasure Status list */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-brand-card/60 border border-brand-border rounded-xl">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-brand-accent" />
                  <span className="text-xs text-white font-medium">Credential Hardening</span>
                </div>
                <span className="text-[10px] text-brand-success font-semibold">Active</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-brand-card/60 border border-brand-border rounded-xl">
                <div className="flex items-center gap-2">
                  <Network className="w-3.5 h-3.5 text-brand-accent" />
                  <span className="text-xs text-white font-medium">Perimeter Isolation</span>
                </div>
                <span className="text-[10px] text-brand-success font-semibold">Active</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-brand-card/60 border border-brand-border rounded-xl">
                <div className="flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5 text-brand-accent" />
                  <span className="text-xs text-white font-medium">Process Auditing</span>
                </div>
                <span className="text-[10px] text-brand-success font-semibold">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-sm font-semibold text-brand-accent tracking-[0.16em] uppercase mb-2 block">Proactive Defense</span>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-white tracking-tight leading-snug">
              MITRE D3FEND Countermeasures
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              Establish concrete, actionable defensive postures. Map structural countermeasures directly against known adversary tactics to systematically break the attack chain.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-xl shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-white block">Structural Hardening Playbooks</span>
                <span className="text-[11px] text-gray-500 mt-0.5 block leading-relaxed">
                  Access ready-to-deploy network, host, and application-level hardening guidelines built by top security engineers.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-xl shrink-0">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-white block">Defensive Blueprint Verification</span>
                <span className="text-[11px] text-gray-500 mt-0.5 block leading-relaxed">
                  Audit perimeter systems against recommended segmentation models to ensure robust containment of threats.
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
            Request a Briefing <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return isTab ? content : (
    <section id="mitre-d3fend" className="py-24 bg-brand-dark border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium mb-4">
            <Layers className="w-3.5 h-3.5" /> D3FEND Countermeasures
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white mb-4">
            Proactive Posture Management
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Move beyond monitoring. Architect an active defense system designed to block, contain, and evict adversaries.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
}
