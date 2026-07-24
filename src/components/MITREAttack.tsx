/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldAlert, Award, ArrowRight, Grid, Layout } from 'lucide-react';

interface MITREAttackProps {
  isTab?: boolean;
}

export function MITREVisual() {
  return (
    <div className="p-6 bg-[#07030f] border border-brand-border rounded-2xl space-y-5 relative overflow-hidden shadow-2xl">
      {/* Ambient Purple Light */}
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-brand-accent/10 rounded-full filter blur-xl" />

      <div className="flex items-center justify-between pb-3 border-b border-brand-border">
        <div className="flex items-center gap-2">
          <Grid className="w-4 h-4 text-brand-accent" />
          <span className="text-xs text-white font-semibold uppercase tracking-wider">ATT&CK Mapping</span>
        </div>
        <span className="text-[10px] text-gray-500 font-mono">v14.0 Core</span>
      </div>

      {/* Simulated Attack Path Grid */}
      <div className="space-y-3.5">
        <div className="p-3 bg-brand-card border border-brand-border rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-danger" />
            <span className="text-xs text-white font-medium">Initial Access</span>
          </div>
          <span className="text-[10px] text-brand-danger font-mono bg-brand-danger/10 border border-brand-danger/20 px-2 py-0.5 rounded">T1190 · Exploit App</span>
        </div>

        <div className="p-3 bg-brand-card border border-brand-border rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-warning" />
            <span className="text-xs text-white font-medium">Defense Evasion</span>
          </div>
          <span className="text-[10px] text-brand-warning font-mono bg-brand-warning/10 border border-brand-warning/20 px-2 py-0.5 rounded">T1562 · Impair Defenses</span>
        </div>

        <div className="p-3 bg-brand-card border border-brand-border rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-success" />
            <span className="text-xs text-white font-medium">Exfiltration</span>
          </div>
          <span className="text-[10px] text-brand-success font-mono bg-brand-success/10 border border-brand-success/20 px-2 py-0.5 rounded">T1048 · Alternate Protocol</span>
        </div>
      </div>
    </div>
  );
}

export function MITREText() {
  return (
    <div className="space-y-4">
      <div>
        <span className="text-[10px] font-semibold text-brand-accent tracking-[0.16em] uppercase mb-1.5 block">ATT&CK Intelligence</span>
        <h3 className="text-xl md:text-2xl font-sans font-semibold text-white tracking-tight leading-snug">
          10,000+ TTP strategies with defensive countermeasures.
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mt-3">
          A core MVP feature mapping over 10,000 strategy combinations. ATLAS unifies multiple threat feeds under one umbrella, providing tactical execution details, defensive counter-mechanisms, and direct links to official MITRE pages.
        </p>
      </div>

      <div className="space-y-3 pt-2">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg shrink-0">
            <Layout className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold text-white block">Industry-Specific Threat Group Mapping</span>
            <span className="text-[11px] text-gray-500 mt-0.5 block leading-relaxed">
              Input your sector (e.g., Healthcare) to discover threat groups targeting your industry — including origin, first seen date, last activity, threat level, and full TTP mapping (e.g., Fox Kitten).
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold text-white block">Actionable Defensive Mechanisms</span>
            <span className="text-[11px] text-gray-500 mt-0.5 block leading-relaxed">
              Beyond identifying tactics and procedures, ATLAS generates concrete defensive countermeasures to neutralize specific threat actor behaviors.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MITREAttack({ isTab = false }: MITREAttackProps) {
  const content = (
    <div className="bg-[#0c0415]/60 backdrop-blur-3xl border border-white/5 hover:border-white/10 transition-colors duration-500 rounded-[2rem] p-8 md:p-12 premium-card-gradient relative overflow-hidden group shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Visual Feature Mockup */}
        <div className="lg:col-span-5 space-y-4">
          <MITREVisual />
        </div>

        {/* Right Side: Copy */}
        <div className="lg:col-span-7 space-y-6">
          <MITREText />
        </div>
      </div>
    </div>
  );

  return isTab ? content : (
    <section id="mitre-attack" className="py-24 bg-brand-dark border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium mb-4">
            <Grid className="w-3.5 h-3.5" /> ATT&CK Mapping
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white mb-4">
            MITRE ATT&CK Intelligence Mapping
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            10,000+ TTPs consolidated from multiple sources into one platform. Each technique comes with defensive counter-mechanisms and direct links to the official MITRE mapping page. Enter your industry to automatically surface every threat group targeting your sector.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
}
