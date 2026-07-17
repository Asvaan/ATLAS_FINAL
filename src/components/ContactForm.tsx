/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Shield, Building2, User2, MessageSquare, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: 'Threat Intelligence Platform',
    message: '',
    priority: 'Standard Evaluation'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState<string>('');
  const [ticketId, setTicketId] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organization) return;

    setIsSubmitting(true);
    setSubmitProgress('Verifying details...');

    setTimeout(() => {
      setSubmitProgress('Processing your request...');
      setTimeout(() => {
        setSubmitProgress('Submitting securely...');
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
          setTicketId(`PBX-${Math.floor(Math.random() * 900000) + 100000}`);
        }, 600);
      }, 600);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      interest: 'Threat Intelligence Platform',
      message: '',
      priority: 'Standard Evaluation'
    });
    setSubmitted(false);
  };

  return (
    <section id="contact-form" className="py-20 bg-brand-dark border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Copy */}
          <div className="lg:col-span-5 space-y-6 lg:pt-2">
            <div>
              <p className="text-sm font-semibold text-brand-accent tracking-[0.16em] uppercase mb-3">Get in Touch</p>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-white leading-snug">
                Talk to our team about your security needs
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                Whether you're evaluating ATLAS for your SOC, looking for a threat intel briefing, or need a custom enterprise deployment, we're here to help.
              </p>
            </div>

            <div className="space-y-5 pt-2 border-t border-brand-border">
              <div className="flex gap-3 pt-5">
                <div className="p-2 bg-brand-card border border-brand-border text-brand-accent rounded-xl mt-0.5 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">End-to-end encrypted</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">All submissions are transmitted over TLS 1.3 with zero data retention on transit.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-brand-card border border-brand-border text-brand-accent rounded-xl mt-0.5 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Response within 4 hours</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">C-Suite and enterprise-level inquiries are prioritized for same-business-day review.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 card-glass rounded-3xl p-6 md:p-8">

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User2 className="absolute left-3 text-gray-500 w-4 h-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Thomas Miller"
                        className="w-full pl-9 pr-4 py-2.5 input-glass rounded-xl text-sm text-white placeholder-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">
                      Work Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 text-gray-500 w-4 h-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="t.miller@enterprise.com"
                        className="w-full pl-9 pr-4 py-2.5 input-glass rounded-xl text-sm text-white placeholder-gray-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">
                      Organization
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 text-gray-500 w-4 h-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Enterprise Inc."
                        className="w-full pl-9 pr-4 py-2.5 input-glass rounded-xl text-sm text-white placeholder-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5">
                      Request Type
                    </label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="w-full px-3 py-2.5 input-glass rounded-xl text-sm text-gray-300"
                    >
                      <option value="Standard Evaluation">Platform Demo</option>
                      <option value="Urgent Active Breach">Active Incident Response</option>
                      <option value="Executive Board Briefing">Executive Risk Briefing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">
                    Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3 py-2.5 input-glass rounded-xl text-sm text-gray-300"
                  >
                    <option value="Threat Intelligence Platform">Threat Intelligence Platform</option>
                    <option value="MITRE Custom Mappings">MITRE ATT&CK / D3FEND Mapping</option>
                    <option value="Dark Web Intelligence Sweeps">Dark Web Monitoring</option>
                    <option value="Secure Document Vault">Secure Document Exchange</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">
                    Message <span className="text-gray-600">(optional)</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your security environment, current challenges, or specific capabilities you're evaluating..."
                      className="w-full pl-9 pr-4 py-3 input-glass rounded-xl text-sm text-white placeholder-gray-600 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brand-accent text-white rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>{submitProgress}</span>
                    </>
                  ) : (
                    <>
                      <span>Send Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success state */
              <div className="py-10 flex flex-col items-center justify-center text-center space-y-5 animate-fadeIn">
                <div className="p-4 bg-brand-success/10 border border-brand-success/25 text-brand-success rounded-full">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-white">Request received</h3>
                  <p className="text-sm text-gray-400 max-w-sm mx-auto mt-2 leading-relaxed">
                    Thanks, <span className="text-white font-medium">{formData.name}</span>. We'll be in touch within 4 business hours.
                  </p>
                </div>

                <div className="p-4 bg-brand-dark border border-brand-border rounded-2xl w-full max-w-xs font-mono text-xs space-y-2 text-left">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider text-center border-b border-brand-border pb-2 mb-1">
                    Confirmation
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Reference:</span>
                    <span className="text-brand-success font-semibold">{ticketId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Type:</span>
                    <span className="text-gray-300">{formData.priority}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Organization:</span>
                    <span className="text-white truncate max-w-[150px]">{formData.organization}</span>
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="px-5 py-2 border border-brand-border hover:bg-brand-border/40 text-gray-400 hover:text-white rounded-xl text-sm transition-colors"
                >
                  Submit another request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
