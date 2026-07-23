/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Shield, Layout, Settings, Layers, EyeOff, Users, Lock, ChevronRight, ChevronDown, Menu, X, ArrowUpRight, Check, Cpu, Grid, ArrowRight, Search, Globe } from 'lucide-react';
import { IOCVisual, IOCText } from './components/IOCIntelligence';
import { MITREVisual, MITREText } from './components/MITREAttack';
import { DarkVisual, DarkText } from './components/DarkIntelligence';
import { ExtendedVisual, ExtendedText } from './components/ExtendedIntelligence';
import ContactForm from './components/ContactForm';
import Threads from './components/ui/Threads';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [synonymIndex, setSynonymIndex] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  const synonyms = ['CONSOLIDATING', 'UNIFYING', 'CONVERGING', 'INTEGRATING'];

  useEffect(() => {
    const interval = setInterval(() => {
      setSynonymIndex((prev) => (prev + 1) % synonyms.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
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
          {/* Main bar */}
          <div className="h-[48px] flex items-center justify-between gap-6 px-1 lg:px-2">

            {/* — Logo — */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 shrink-0 text-left"
              aria-label="ParityBit Security Home"
            >
              {/* Isometric 3D wireframe cube icon matching the brand layout */}
              <svg className="w-[20px] h-[20px] text-[#8b3dff] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ animationDuration: '4s' }}>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 7v10l10 5V12L2 7zM22 7v10l-10 5V12l10-5z" />
              </svg>
              <div className="flex flex-col leading-none">
                <span
                  className="text-white font-bold tracking-tight"
                  style={{ fontSize: 14.5, fontFamily: 'Outfit, sans-serif' }}
                >
                  paritybit
                </span>
                <span
                  className="text-[#8b3dff] font-semibold tracking-wider flex items-center"
                  style={{ fontSize: 9.5, fontFamily: 'Outfit, sans-serif', marginTop: '0.5px' }}
                >
                  security<span className="text-[#8b3dff]/60 ml-0.5">&gt;</span>
                </span>
              </div>
            </button>

            {/* — Desktop Links (centered) — */}
            <div className="hidden lg:flex items-center gap-7">
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
                  className="text-[13.5px] font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  {label}
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </button>
              ))}
            </div>

            {/* — Right actions — */}
            <div className="hidden lg:flex items-center gap-7 shrink-0">
              <button
                onClick={() => {}}
                className="text-[13.5px] font-medium text-white/90 hover:text-white transition-colors"
              >
                Sign in
              </button>
              <button
                onClick={() => handleScroll('contact-form')}
                className="flex items-center gap-1.5 bg-[#8b3dff] hover:bg-[#9b5cff] text-white rounded-full transition-all font-medium shadow-[0_0_24px_rgba(139,61,255,0.35)] hover:shadow-[0_0_32px_rgba(139,61,255,0.5)]"
                style={{ padding: '8px 22px', fontSize: 13.5 }}
              >
                Request briefing <ChevronRight className="w-3.5 h-3.5" />
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

        {/* Background Threads Art - Seamless Interactive Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-auto">
          <Threads
            color={[0.545, 0.239, 1.0]} 
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>

        {/* Single, low-opacity green wash from top — not overpowering */}
        <div
          className="absolute top-0 inset-x-0 h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% -5%, rgba(124,45,255,0.07) 0%, transparent 100%)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-left">

          {/* Eyebrow in Winnipeg, Canada Style */}
          <p className="text-[12.5px] md:text-[13px] font-semibold text-[#8674a8] tracking-[0.15em] uppercase mb-7 flex items-center justify-start gap-2.5 select-none">
            <span className="w-2 h-2 rounded-full bg-[#8b3dff] animate-pulse" />
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
            Know your adversary.<br />
            Defend with <span className="italic font-normal">absolute</span> <span className="underline-glowing-purple">confidence.</span>
          </h1>

          {/* Sub-copy matching Winnipeg screenshot layout */}
          <p className="text-[16px] md:text-[18px] text-gray-400 leading-relaxed max-w-3xl mb-10" style={{ letterSpacing: '-0.01em' }}>
            ATLAS unifies threat intelligence, dark web surveillance, IOC analysis, and MITRE ATT&CK mapping into a single platform. This empowers security teams to identify, prioritize, and respond to threats before they become incidents.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 mb-16">
            <button
              onClick={() => handleScroll('contact-form')}
              className="flex items-center gap-2 bg-[#8b3dff] hover:bg-[#9b5cff] text-white rounded-full transition-all font-medium shadow-[0_0_24px_rgba(139,61,255,0.35)] hover:shadow-[0_0_32px_rgba(139,61,255,0.5)]"
              style={{ padding: '12px 28px', fontSize: 15 }}
            >
              Request Briefing <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('atlas-command-center')}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all font-medium backdrop-blur-sm"
              style={{ padding: '12px 28px', fontSize: 15 }}
            >
              See the Platform <ChevronRight className="w-4 h-4 opacity-70" />
            </button>
          </div>

          {/* Tool Consolidation Strip */}
          <div 
            className="mt-16 pt-8 text-left relative z-10"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center justify-start gap-1.5 mb-5 text-[12px] font-semibold text-[#8b3dff] tracking-[0.2em] uppercase select-none">
              <span className="relative overflow-hidden h-[18px] inline-block min-w-[145px] text-left">
                <span 
                  className="absolute left-0 right-0 flex flex-col transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: `translateY(-${synonymIndex * 18}px)`
                  }}
                >
                  {synonyms.map((word) => (
                    <span key={word} className="h-[18px] leading-[18px] block text-[#8b3dff]">
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
                  className="text-[13px] text-gray-400 hover:text-white font-semibold transition-colors select-none flex items-center gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b3dff] animate-pulse" />
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#8b3dff]/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="lg:col-start-1 lg:col-span-5 pr-0 lg:pr-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8b3dff]/10 border border-[#8b3dff]/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b3dff] animate-pulse" />
                <span className="text-[11px] font-semibold text-[#8b3dff] tracking-[0.16em] uppercase">Why ATLAS</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-display font-semibold text-white leading-[1.1] tracking-tight">
                Context is the difference between a <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">report</span> and a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b3dff] to-[#b785ff]">response</span>.
              </h2>
            </div>

            <div className="lg:col-span-7 relative z-10">
              <div className="absolute -inset-1 bg-gradient-to-b from-[#8b3dff]/20 to-transparent rounded-[2rem] blur-xl opacity-50 -z-10" />
              <div className="p-8 md:p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl space-y-6 text-gray-300 text-base md:text-lg lg:text-[19px] leading-relaxed">
                <p>
                  Security teams don't lack data. They lack the context to prioritize it. Translating raw indicators into actionable risk posture is where most platforms fall short.
                </p>
                <div className="h-px w-full bg-gradient-to-r from-[#8b3dff]/40 via-white/10 to-transparent" />
                <p>
                  ATLAS aggregates intelligence across threat actor clusters, dark web monitoring, and defense frameworks to model real-world business risk. The result: <strong className="text-white font-medium drop-shadow-md">faster decisions with fewer analyst hours.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Command Center (Operational Intelligence) ──────────────────────── */}
      <section id="atlas-command-center" className="py-20 border-b border-brand-border bg-brand-card/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[11px] font-semibold text-brand-accent tracking-[0.2em] uppercase mb-3">Operational Intelligence</p>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">
              Unified Security Operations
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Consolidate indicator triage, active countermeasure grids, and threat group surveillance into a single workspace.
            </p>
          </div>

          <div className="mt-20 flex flex-col lg:flex-row gap-16 relative z-10">
            {/* Left: Typography Index */}
            <div className="w-full lg:w-4/12 flex flex-col justify-center border-l border-brand-border/40 pl-8">
              {[
                { id: 'ioc', title: 'IOC Intelligence', num: '01' },
                { id: 'dark', title: 'Dark Web Surveillance', num: '02' },
                { id: 'mitre', title: 'ATT&CK Matrix', num: '03' },
                { id: 'extended', title: 'Extended Intel', num: '04' },
              ].map((feature, idx) => (
                <div 
                  key={feature.id}
                  onMouseEnter={() => setActiveFeature(idx)}
                  className={`py-8 cursor-pointer transition-all duration-500 ease-out relative`}
                >
                  {/* Active Indicator Line */}
                  <div className={`absolute left-[-33px] top-0 bottom-0 w-[2px] bg-brand-accent transition-all duration-500 ${activeFeature === idx ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} />
                  
                  <div className={`flex flex-col gap-2 transition-transform duration-500 ease-out ${activeFeature === idx ? 'translate-x-4' : ''}`}>
                    <span className="text-sm font-mono text-brand-accent/80 tracking-wider">{feature.num}</span>
                    <h3 className={`text-3xl md:text-4xl font-display font-medium transition-colors duration-500 ${activeFeature === idx ? 'text-white' : 'text-gray-500'}`}>
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Dynamic Stage (Full Cards) */}
            <div className="w-full lg:w-8/12 relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
              {[
                { id: 'ioc', Component: IOCIntelligence },
                { id: 'dark', Component: DarkIntelligence },
                { id: 'mitre', Component: MITREAttack },
                { id: 'extended', Component: ExtendedIntelligence },
              ].map((feature, idx) => (
                <div 
                  key={feature.id}
                  className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center ${activeFeature === idx ? 'opacity-100 scale-100 z-10 translate-y-0' : 'opacity-0 scale-95 -z-10 translate-y-8 pointer-events-none'}`}
                >
                  <div className="w-full h-full flex flex-col justify-center">
                    <feature.Component isTab={true} />
                  </div>
                </div>
              ))}
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-4 text-left">
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
            <div className="lg:col-span-8 relative">
              <div className="rounded-3xl p-6 lg:p-8 border border-[#231042] bg-gradient-to-br from-[#0f0722] to-[#07030f] shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                      className="group flex items-center gap-2 p-1.5 pr-3 rounded-2xl border border-[#231042] bg-[#0a0414] hover:border-brand-accent/40 hover:bg-[#120826] transition-all duration-300 select-none cursor-default min-w-0"
                    >
                      <span
                        className="shrink-0 w-8 h-8 rounded-[10px] flex items-center justify-center text-[11px] font-bold tracking-wide text-[#b484ff] bg-[#1a0b36] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] group-hover:text-white transition-colors"
                      >
                        {letter}
                      </span>
                      <span className="text-[12px] sm:text-[13px] font-semibold text-white/90 group-hover:text-white transition-colors whitespace-nowrap overflow-visible">{name}</span>
                    </div>
                  ))}
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
