/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Shield, Layout, Settings, Layers, EyeOff, Users, Lock, ChevronRight, Menu, X, ArrowUpRight, Check, Cpu, Grid, ArrowRight, Search, Globe } from 'lucide-react';
import IOCIntelligence from './components/IOCIntelligence';
import MITREAttack from './components/MITREAttack';
import DarkIntelligence from './components/DarkIntelligence';
import ExtendedIntelligence from './components/ExtendedIntelligence';
import ClientPortal from './components/ClientPortal';
import ContactForm from './components/ContactForm';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'ioc' | 'dark' | 'mitre' | 'extended'>('ioc');
  const [synonymIndex, setSynonymIndex] = useState(0);

  const synonyms = ['CONSOLIDATING', 'UNIFYING', 'CONVERGING', 'INTEGRATING'];

  useEffect(() => {
    const interval = setInterval(() => {
      setSynonymIndex((prev) => (prev + 1) % synonyms.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const activeModules = [
    { id: 'ioc' as const, label: 'IOC Intel', icon: Cpu },
    { id: 'dark' as const, label: 'Dark Intelligence', icon: EyeOff },
    { id: 'mitre' as const, label: 'ATT&CK Matrix', icon: Grid },
    { id: 'extended' as const, label: 'Extended Intel', icon: Search },
  ];

  const switchTab = (moduleId: typeof activeTab) => {
    if (moduleId === activeTab) return;
    setActiveTab(moduleId);
  };

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleModuleNavigation = (moduleId: typeof activeTab) => {
    switchTab(moduleId);
    setMobileMenuOpen(false);
    const element = document.getElementById('atlas-command-center');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-gray-100 font-sans selection:bg-brand-accent/20 selection:text-white">
      
      {/* ── Navigation ───────────────────────────────────────────────── */}
      <nav className="fixed top-4 md:top-6 inset-x-4 z-50 max-w-6xl mx-auto">
        <div
          className={`w-full transition-all duration-300 ${
            mobileMenuOpen
              ? 'rounded-[24px] bg-brand-dark border border-brand-border'
              : 'rounded-[20px] md:rounded-full border'
          }`}
          style={{
            padding: '8px 24px',
            background: mobileMenuOpen 
              ? '#07030f' 
              : 'rgba(15, 8, 30, 0.45)',
            borderColor: mobileMenuOpen 
              ? 'rgba(255, 255, 255, 0.08)' 
              : 'rgba(255, 255, 255, 0.09)',
            backdropFilter: 'blur(20px) saturate(190%)',
            WebkitBackdropFilter: 'blur(20px) saturate(190%)',
            boxShadow: mobileMenuOpen 
              ? 'none' 
              : '0 1px 0 0 rgba(255, 255, 255, 0.05) inset, 0 12px 40px -10px rgba(0, 0, 0, 0.75), 0 0 40px rgba(124, 45, 255, 0.06)',
          }}
        >
          {/* Main bar */}
          <div className="h-[48px] flex items-center justify-between gap-8">

            {/* — Logo — */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 shrink-0 text-left"
              aria-label="ATLAS home"
            >
              <div className="w-8 h-8 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-brand-accent" />
              </div>
              <div className="flex flex-col leading-none gap-[3px]">
                <span
                  className="text-white font-semibold"
                  style={{ fontSize: 16, letterSpacing: '-0.035em' }}
                >
                  ATLAS
                </span>
                <span
                  className="text-white/30 font-normal"
                  style={{ fontSize: 10, letterSpacing: '0.03em', lineHeight: 1 }}
                >
                  by ParityBit Security
                </span>
              </div>
            </button>

            {/* — Desktop Links (centered) — */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                { label: 'IOC Intel',         action: () => handleModuleNavigation('ioc') },
                { label: 'Dark Intelligence', action: () => handleModuleNavigation('dark') },
                { label: 'ATT&CK Matrix',     action: () => handleModuleNavigation('mitre') },
                { label: 'Extended Intel',    action: () => handleModuleNavigation('extended') },
              ].map(({ label, action }) => (
                <button
                  key={label}
                  onClick={action}
                  className="nav-link px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-white/5 transition-colors"
                >
                  {label}
                </button>
              ))}

              {/* Divider */}
              <div className="w-px h-3 bg-white/10 mx-2" />

              <button
                onClick={() => handleScroll('client-portal')}
                className="nav-link px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-white/5 transition-colors flex items-center gap-1.5"
              >
                <Lock className="w-3 h-3 opacity-50" />
                Client Portal
              </button>
            </div>

            {/* — Right actions — */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleScroll('contact-form')}
                className="btn-pill"
                style={{ padding: '8px 18px', fontSize: 13 }}
              >
                Request Access
              </button>
            </div>

            {/* — Mobile hamburger — */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden ml-auto p-2 -mr-2 text-white/60 hover:text-white transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen
                ? <X className="w-5 h-5" />
                : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* — Mobile menu overlay — */}
          {mobileMenuOpen && (
            <div className="lg:hidden animate-slide-down">
              <div
                className="pt-4 pb-2 space-y-0.5 mt-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {[
                  { label: 'IOC Intel',         action: () => handleModuleNavigation('ioc') },
                  { label: 'Dark Intelligence', action: () => handleModuleNavigation('dark') },
                  { label: 'ATT&CK Matrix',     action: () => handleModuleNavigation('mitre') },
                  { label: 'Extended Intel',    action: () => handleModuleNavigation('extended') },
                  { label: 'Client Portal',    action: () => handleScroll('client-portal') },
                ].map(({ label, action }) => (
                  <button
                    key={label}
                    onClick={action}
                    className="block w-full text-left px-3 py-3 text-[15px] text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-200"
                  >
                    {label}
                  </button>
                ))}

                <div className="pt-4 flex flex-col gap-2.5">
                  <button
                    onClick={() => { setMobileMenuOpen(false); handleScroll('contact-form'); }}
                    className="btn-pill w-full justify-center py-3"
                    style={{ borderRadius: 14 }}
                  >
                    Request Access
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-brand-border">

        {/* Single, low-opacity green wash from top — not overpowering */}
        <div
          className="absolute top-0 inset-x-0 h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% -5%, rgba(124,45,255,0.07) 0%, transparent 100%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

          {/* Eyebrow — plain text label, no pill badge */}
          <p className="text-sm font-semibold text-brand-accent tracking-[0.16em] uppercase mb-6">
            ParityBit Security · ATLAS Platform
          </p>

          {/* Headline — single white colour, no two-tone fade trick */}
          <h1
            className="text-white font-semibold tracking-tight mb-5"
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
            }}
          >
            Threat Intelligence for Teams<br className="hidden sm:block" />
            {' '}That Can't Afford to Guess
          </h1>

          {/* Sub-copy — honest, direct, one colour */}
          <p className="text-[17px] text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10" style={{ letterSpacing: '-0.01em' }}>
            ATLAS turns raw IOCs and fragmented alerts into clear, prioritized risk intelligence.
            Built for security teams who need answers faster than attackers move.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <button
              onClick={() => handleScroll('contact-form')}
              className="btn-pill"
              style={{ padding: '11px 22px', fontSize: 15 }}
            >
              Request Access <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('atlas-command-center')}
              className="btn-ghost"
              style={{ padding: '11px 22px', fontSize: 15 }}
            >
              See the Platform <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
          </div>

          {/* Tool Consolidation Strip */}
          <div 
            className="mt-16 pt-8 text-center"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center justify-center gap-1.5 mb-5 text-[12px] font-semibold text-brand-accent tracking-[0.2em] uppercase select-none">
              <span className="relative overflow-hidden h-[18px] inline-block min-w-[145px] text-right">
                <span 
                  className="absolute left-0 right-0 flex flex-col transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: `translateY(-${synonymIndex * 18}px)`
                  }}
                >
                  {synonyms.map((word) => (
                    <span key={word} className="h-[18px] leading-[18px] block text-brand-accent">
                      {word}
                    </span>
                  ))}
                </span>
              </span>
              <span className="text-gray-400">10+ Legacy Security Tools</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 max-w-3xl mx-auto">
              {[
                'IOC Reputation Feeds',
                'MITRE ATT&CK Mappers',
                'Dark Web Monitors',
                'Threat Intel Dossiers'
              ].map((tool) => (
                <span 
                  key={tool}
                  className="text-[13px] text-gray-500 hover:text-white font-semibold transition-colors select-none flex items-center gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5a1fcf] animate-pulse" />
                  {tool}
                </span>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* ── Value Proposition ──────────────────────────────────── */}
      <section className="py-20 border-b border-brand-border bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold text-brand-accent tracking-[0.16em] uppercase mb-3">Why ATLAS</p>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-white leading-snug">
                Context is the difference between a report and a response
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                Security teams don't lack data. They lack the context to prioritize it. Translating raw indicators into actionable risk posture is where most platforms fall short.
              </p>
              <p>
                ATLAS aggregates intelligence across threat actor clusters, dark web monitoring, and defense frameworks to model real-world business risk. The result: faster decisions with fewer analyst hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Command Center ─────────────────────────────────────── */}
      <section id="atlas-command-center" className="py-20 border-b border-brand-border bg-brand-card/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-semibold text-brand-accent tracking-[0.16em] uppercase mb-3">Operational Intelligence</p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3">
              Unified Security Operations
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Consolidate indicator triage, active countermeasure grids, and threat group surveillance into a single workspace.
            </p>
          </div>

          {/* Tab bar — sliding indicator style */}
          <div
            className="mb-8 flex flex-wrap justify-center gap-1 pb-6"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            {activeModules.map((mod) => {
              const Icon = mod.icon;
              const isActive = activeTab === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => switchTab(mod.id)}
                  className={`tab-btn flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-250 ${
                    isActive
                      ? 'tab-active text-white bg-white/5'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]'
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 transition-colors duration-250 ${
                      isActive ? 'text-brand-accent' : 'text-gray-600'
                    }`}
                  />
                  {mod.label}
                </button>
              );
            })}
          </div>

          {/* All 5 modules always mounted — CSS transition controls visibility */}
          <div className="tab-grid">

            <div className={`tab-panel${activeTab === 'ioc' ? ' tab-visible' : ''}`}>
              <IOCIntelligence isTab={true} />
            </div>

            <div className={`tab-panel${activeTab === 'dark' ? ' tab-visible' : ''}`}>
              <DarkIntelligence isTab={true} />
            </div>

            <div className={`tab-panel${activeTab === 'mitre' ? ' tab-visible' : ''}`}>
              <MITREAttack isTab={true} />
            </div>

            <div className={`tab-panel${activeTab === 'extended' ? ' tab-visible' : ''}`}>
              <ExtendedIntelligence isTab={true} />
            </div>

          </div>
        </div>
      </section>

      {/* ── Platform Capabilities ──────────────────────────────── */}
      <section className="py-20 border-b border-brand-border bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-sm font-semibold text-brand-accent tracking-[0.16em] uppercase mb-3">Platform Capabilities</p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3">
              Built for operational depth
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enterprise-grade tooling without the complexity overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 feature-card card-glass">
              <div className="text-brand-accent mb-4">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Telemetry Integration</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Switch seamlessly from executive briefings to raw JSON payloads with confidence scores, vendor detections, and risk metrics in one view.
              </p>
            </div>

            <div className="rounded-2xl p-6 feature-card card-glass">
              <div className="text-brand-accent mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">SIEM & SOAR Ready</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Forward active indicators directly to your SIEM, SOAR, or threat-sharing platform. No custom adapters or middleware required.
              </p>
            </div>

            <div className="rounded-2xl p-6 feature-card card-glass">
              <div className="text-brand-accent mb-4">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Exportable Reports</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Generate white-labeled, board-ready audit reports with full forensic chains of custody, downloadable in minutes, not days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portal & Contact ───────────────────────────────────── */}
      <ClientPortal />
      <ContactForm />

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* CTA block */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-display font-semibold text-white tracking-tight mb-4">
              Ready to see ATLAS in action?
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Schedule a demo and see how security teams use ATLAS to move from alert triage to structural risk intelligence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => handleScroll('contact-form')}
                className="w-full sm:w-auto px-6 py-3 bg-brand-accent hover:bg-[#9d4eff] text-white rounded-xl font-semibold text-sm transition-colors"
              >
                Request a Demo
              </button>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-accent" />
              <span>© {new Date().getFullYear()} ParityBit Security. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">GDPR & PCI Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
