/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Shield, Layout, Settings, Layers, EyeOff, Users, Lock, ChevronRight, ChevronDown, Menu, X, ArrowUpRight, Check, Cpu, Grid, ArrowRight, Search, Globe } from 'lucide-react';
import IOCIntelligence from './components/IOCIntelligence';
import MITREAttack from './components/MITREAttack';
import DarkIntelligence from './components/DarkIntelligence';
import ExtendedIntelligence from './components/ExtendedIntelligence';
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
      <nav className="fixed top-3 md:top-4 inset-x-3 z-50 max-w-5xl mx-auto">
        <div
          className={`w-full transition-all duration-300 ${
            mobileMenuOpen
              ? 'rounded-[20px] bg-brand-dark border border-brand-border'
              : 'rounded-[16px] md:rounded-full border'
          }`}
          style={{
            padding: '5px 18px',
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
              : '0 1px 0 0 rgba(255, 255, 255, 0.05) inset, 0 8px 30px -8px rgba(0, 0, 0, 0.75), 0 0 30px rgba(124, 45, 255, 0.05)',
          }}
        >
          {/* Main bar */}
          <div className="h-[40px] flex items-center justify-between gap-6">

            {/* — Logo — */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 shrink-0 text-left"
              aria-label="ParityBit Security Home"
            >
              {/* Isometric 3D wireframe cube icon matching the brand layout */}
              <svg className="w-[18px] h-[18px] text-brand-accent animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ animationDuration: '4s' }}>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 7v10l10 5V12L2 7zM22 7v10l-10 5V12l10-5z" />
              </svg>
              <div className="flex flex-col leading-none">
                <span
                  className="text-white font-bold tracking-tight"
                  style={{ fontSize: 13.5, fontFamily: 'Outfit, sans-serif' }}
                >
                  paritybit
                </span>
                <span
                  className="text-brand-accent font-semibold tracking-wider flex items-center"
                  style={{ fontSize: 9, fontFamily: 'Outfit, sans-serif', marginTop: '0.5px' }}
                >
                  security<span className="text-brand-accent/50 ml-0.5">&gt;</span>
                </span>
              </div>
            </button>

            {/* — Desktop Links (centered) — */}
            <div className="hidden lg:flex items-center gap-1.5">
              {[
                { label: 'Platform',  action: () => handleScroll('atlas-command-center') },
                { label: 'Solutions', action: () => handleScroll('atlas-command-center') },
                { label: 'Services',  action: () => handleScroll('atlas-command-center') },
                { label: 'Resources', action: () => handleScroll('atlas-command-center') },
                { label: 'Company',   action: () => handleScroll('contact-form') },
              ].map(({ label, action }) => (
                <button
                  key={label}
                  onClick={action}
                  className="nav-link px-2.5 py-1 rounded-full text-[11px] font-semibold hover:bg-white/5 transition-colors flex items-center gap-0.5 text-white/70"
                >
                  {label}
                  <ChevronDown className="w-2.5 h-2.5 opacity-40" />
                </button>
              ))}
            </div>

            {/* — Right actions — */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <button
                onClick={() => handleScroll('contact-form')}
                className="btn-pill flex items-center gap-1"
                style={{ padding: '6px 14px', fontSize: 11.5 }}
              >
                Request briefing <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* — Mobile hamburger — */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden ml-auto p-1.5 -mr-1.5 text-white/60 hover:text-white transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen
                ? <X className="w-4 h-4" />
                : <Menu className="w-4 h-4" />}
            </button>
          </div>

          {/* — Mobile menu overlay — */}
          {mobileMenuOpen && (
            <div className="lg:hidden animate-slide-down">
              <div
                className="pt-3 pb-1.5 space-y-0.5 mt-2.5"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {[
                  { label: 'Platform',  action: () => { setMobileMenuOpen(false); handleScroll('atlas-command-center'); } },
                  { label: 'Solutions', action: () => { setMobileMenuOpen(false); handleScroll('atlas-command-center'); } },
                  { label: 'Services',  action: () => { setMobileMenuOpen(false); handleScroll('atlas-command-center'); } },
                  { label: 'Resources', action: () => { setMobileMenuOpen(false); handleScroll('atlas-command-center'); } },
                  { label: 'Company',   action: () => { setMobileMenuOpen(false); handleScroll('contact-form'); } },
                ].map(({ label, action }) => (
                  <button
                    key={label}
                    onClick={action}
                    className="block w-full text-left px-2.5 py-2.5 text-xs text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                  >
                    {label}
                  </button>
                ))}

                <div className="pt-3 flex items-center justify-end border-t border-white/5 mt-2.5 px-2.5">
                  <button
                    onClick={() => { setMobileMenuOpen(false); handleScroll('contact-form'); }}
                    className="btn-pill px-3 py-2"
                    style={{ fontSize: 11.5 }}
                  >
                    Request briefing <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden border-b border-brand-border">

        {/* Single, low-opacity green wash from top — not overpowering */}
        <div
          className="absolute top-0 inset-x-0 h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% -5%, rgba(124,45,255,0.07) 0%, transparent 100%)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-left">

          {/* Eyebrow in Winnipeg, Canada Style */}
          <p className="text-[11px] font-semibold text-gray-500 tracking-[0.2em] uppercase mb-6 flex items-center justify-start gap-2 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c2dff] animate-pulse" />
            Winnipeg, Canada <span className="text-white/20">·</span> Next-Gen Cybersecurity
          </p>

          {/* Headline in Playfair Display serif styling matching screenshot */}
          <h1
            className="text-white font-display font-medium tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 6.5vw, 4.75rem)',
              lineHeight: 1.06,
              letterSpacing: '-0.02em',
            }}
          >
            Cybersecurity<br />
            that <span className="italic font-normal">actually</span> <span className="underline-glowing-purple">works.</span>
          </h1>

          {/* Sub-copy matching Winnipeg screenshot layout */}
          <p className="text-[16px] md:text-[18px] text-gray-400 leading-relaxed max-w-3xl mb-10" style={{ letterSpacing: '-0.01em' }}>
            End the cycle of cyber attacks and data breaches. Where traditional security fails, our intelligence-driven approach succeeds, protecting your data, your reputation, and your bottom line.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 mb-16">
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
            className="mt-16 pt-8 text-left"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center justify-start gap-1.5 mb-5 text-[12px] font-semibold text-brand-accent tracking-[0.2em] uppercase select-none">
              <span className="relative overflow-hidden h-[18px] inline-block min-w-[145px] text-left">
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
            <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-3 max-w-3xl">
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

      {/* ── Capabilities (What ATLAS actually does) ────────────────────────── */}
      <section className="py-24 border-b border-brand-border bg-brand-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-left mb-16">
            <p className="text-[11px] font-semibold text-brand-accent tracking-[0.2em] uppercase mb-3">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white">
              What ATLAS actually does.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'APT & Threat Actor Attribution Engine',
                desc: 'AI-powered IOC intelligence mapping against nation-state APTs and cybercriminal groups.'
              },
              {
                num: '02',
                title: 'Real-Time & Historical Dark Web Surveillance',
                desc: 'Continuous monitoring of underground sources to detect data leaks, exposure, and emerging risks.'
              },
              {
                num: '03',
                title: 'Adversary-Focused Security Hardening',
                desc: 'Actionable recommendations aligned to predicted threat actor behaviour and attack patterns.'
              },
              {
                num: '04',
                title: 'Industry-Specific Attack Matrix Intelligence',
                desc: 'Identifies sector-targeting adversaries and maps TTPs for proactive defense.'
              }
            ].map(({ num, title, desc }) => (
              <div key={num} className="rounded-2xl p-8 feature-card card-glass flex flex-col justify-between min-h-[200px]">
                <div>
                  <span className="text-4xl font-display font-semibold text-brand-accent/20 block mb-4">{num}</span>
                  <h3 className="text-lg font-semibold text-white mb-2.5">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ────────────────────────────────────────── */}
      <section className="relative py-28 border-b border-brand-border bg-brand-dark overflow-hidden">
        {/* Ambient radial wash — sits behind the content */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 70% 50%, rgba(124,45,255,0.045) 0%, transparent 75%)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Header row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 text-left">
              <p className="text-[11px] font-semibold text-brand-accent tracking-[0.2em] uppercase mb-3">Integrations</p>
              <h2 className="text-3xl font-display font-medium text-white mb-4">
                Where ATLAS plugs in.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Native connectors for the tools your team already runs. Custom integrations in 48 hours.
              </p>
              {/* Thin accent rule */}
              <div className="w-12 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #7c2dff 0%, transparent 100%)' }} />
            </div>

            {/* Integration chips grid */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl p-8 card-glass" style={{ borderLeftWidth: 0 }}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { name: 'Splunk',       letter: 'S' },
                    { name: 'Sentinel',     letter: 'Se' },
                    { name: 'Chronicle',    letter: 'Ch' },
                    { name: 'CrowdStrike',  letter: 'Cs' },
                    { name: 'Elastic',      letter: 'El' },
                    { name: 'MISP',         letter: 'Mi' },
                    { name: 'OpenCTI',      letter: 'Oc' },
                  ].map(({ name, letter }) => (
                    <div
                      key={name}
                      className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-brand-border bg-brand-surface/15 hover:border-brand-accent/40 hover:bg-brand-surface/35 transition-all duration-300 select-none cursor-default"
                    >
                      <span
                        className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold tracking-tight text-brand-accent/80 group-hover:text-brand-accent transition-colors"
                        style={{ background: 'rgba(124,45,255,0.08)', border: '1px solid rgba(124,45,255,0.12)' }}
                      >
                        {letter}
                      </span>
                      <span className="text-[13px] font-semibold text-white/80 group-hover:text-white transition-colors">{name}</span>
                    </div>
                  ))}

                  {/* "More" indicator chip */}
                  <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-dashed border-brand-border/60 bg-transparent select-none">
                    <span
                      className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-medium text-gray-500"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      +
                    </span>
                    <span className="text-[13px] font-medium text-gray-500">48hr custom</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quarterly Digest ────────────────────────────────────── */}
      <section className="py-24 border-b border-brand-border bg-brand-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 text-left">
              <p className="text-[11px] font-semibold text-brand-accent tracking-[0.2em] uppercase mb-3">Quarterly Digest</p>
              <h2 className="text-3xl font-display font-medium text-white mb-4">
                Get the digest in your inbox.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                One short memo per quarter. No marketing, no tracking pixels, unsubscribe in one click.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input 
                  type="email" 
                  placeholder="Work email" 
                  required 
                  className="input-glass px-4 py-3 rounded-xl text-xs text-white placeholder-gray-500 outline-none w-full shadow-inner"
                />
                <button 
                  type="submit" 
                  className="btn-pill px-6 py-3 text-xs font-semibold shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form ────────────────────────────────────────── */}
      <ContactForm />

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="bg-brand-dark border-t border-brand-border pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          {/* Main Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-left">
            <div className="col-span-2 space-y-4 pr-0 md:pr-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 7v10l10 5V12L2 7zM22 7v10l-10 5V12l10-5z" />
                </svg>
                <span className="text-white font-bold tracking-tight text-[17px]" style={{ fontFamily: 'Outfit, sans-serif' }}>paritybit</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                Cybersecurity that actually works. Evidence-first tooling and services for teams that need the signal, not the noise.
              </p>
              <div className="space-y-1.5 text-xs text-gray-500 pt-2 font-medium">
                <div className="hover:text-white transition-colors">+1 (204) 963-7230</div>
                <div className="hover:text-white transition-colors">contact@paritybitsecurity.com</div>
                <div>Winnipeg, Canada</div>
                <div className="flex items-center gap-1.5 text-brand-accent pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  <span>SOCs live · 24/7</span>
                </div>
              </div>
            </div>

            {[
              {
                title: 'Platform',
                links: ['Atlas', 'Vector', 'Trace', 'ZeroPhish', 'Platform overview']
              },
              {
                title: 'Solutions',
                links: ['Financial services', 'Healthcare', 'Public sector', 'Exposure management', 'Incident response']
              },
              {
                title: 'Services',
                links: ['VAPT', 'Phishing simulation', 'Dark web monitoring', 'Cloud security', 'Compliance & risk', 'All services']
              },
              {
                title: 'Resources',
                links: ['Blog', 'Library', 'Events', 'Trust center']
              }
            ].map(({ title, links }) => (
              <div key={title} className="space-y-3.5">
                <h4 className="text-[10px] font-semibold text-white tracking-[0.16em] uppercase select-none">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors font-medium">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer bottom */}
          <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <span>© 2026 ParityBit Security. Securing your data Bit-by-Bit.</span>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {['About', 'Careers', 'Contact', 'Privacy', 'Terms', 'Trust center'].map((link) => (
                <a key={link} href="#" className="hover:text-gray-300 transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
