/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { INITIAL_CLIENT_DOCUMENTS, INITIAL_AUDIT_LOGS } from '../data';
import { SecureDocument, AuditLogEntry } from '../types';
import { Lock, FileKey, ShieldCheck, UploadCloud, Download, KeyRound, Check, RefreshCw, AlertTriangle } from 'lucide-react';

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientId, setClientId] = useState('enterprise-sandbox-admin');
  const [passphrase, setPassphrase] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Portal inner states
  const [documents, setDocuments] = useState<SecureDocument[]>(INITIAL_CLIENT_DOCUMENTS);
  const [logs, setLogs] = useState<AuditLogEntry[]>(INITIAL_AUDIT_LOGS);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [decryptingId, setDecryptingId] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState('');

  // Sandbox bypass
  const handleSandboxLogin = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoggingIn(false);
      setSuccessMsg('Sandbox access initialized with demo encryption keys.');
      setTimeout(() => setSuccessMsg(''), 5000);
    }, 800);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientId || !passphrase) {
      setLoginError('Client ID and passphrase are required.');
      return;
    }
    setLoginError('');
    setIsLoggingIn(true);

    setTimeout(() => {
      if (passphrase.length < 6) {
        setLoginError('Passphrase must be at least 6 characters.');
        setIsLoggingIn(false);
      } else {
        setIsLoggedIn(true);
        setIsLoggingIn(false);
        const newLog: AuditLogEntry = {
          id: `LOG-${Math.floor(Math.random() * 900) + 100}`,
          timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
          action: 'Secure Login',
          actor: clientId,
          status: 'SUCCESS'
        };
        setLogs(prev => [newLog, ...prev]);
      }
    }, 1000);
  };

  // Simulated Document Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev === null) return null;
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            const newDoc: SecureDocument = {
              id: `doc-${Math.floor(Math.random() * 90) + 120}`,
              name: `${file.name}.enc`,
              size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
              uploadedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
              sender: 'Client',
              status: 'Encrypted',
              hash: `sha256-${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`
            };

            const newLog: AuditLogEntry = {
              id: `LOG-${Math.floor(Math.random() * 900) + 100}`,
              timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
              action: `File uploaded: ${file.name}`,
              actor: clientId || 'Client',
              status: 'SUCCESS'
            };

            setDocuments((prevDocs) => [...prevDocs, newDoc]);
            setLogs((prevLogs) => [newLog, ...prevLogs]);
            setUploadProgress(null);
            setSuccessMsg(`"${file.name}" encrypted with AES-256-GCM and uploaded successfully.`);
            setTimeout(() => setSuccessMsg(''), 4000);
          }, 300);
          return 100;
        }
        return prev + 20;
      });
    }, 100);
  };

  // Simulated Decryption & Download
  const triggerDecrypt = (docId: string, docName: string) => {
    setDecryptingId(docId);
    setTimeout(() => {
      setDocuments((prev) =>
        prev.map((d) => (d.id === docId ? { ...d, status: 'Decrypted' as const } : d))
      );
      setDecryptingId(null);
      setSuccessMsg(`"${docName.replace('.enc', '')}" decrypted and ready to download.`);

      const newLog: AuditLogEntry = {
        id: `LOG-${Math.floor(Math.random() * 900) + 100}`,
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
        action: `File decrypted: ${docName}`,
        actor: clientId || 'Client',
        status: 'SUCCESS'
      };
      setLogs((prev) => [newLog, ...prev]);
      setTimeout(() => setSuccessMsg(''), 4000);
    }, 1500);
  };

  return (
    <section id="client-portal" className="py-20 border-b border-brand-border bg-brand-card/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-brand-accent tracking-[0.16em] uppercase mb-3">Client Portal</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3">
            Secure Document Exchange
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Exchange vulnerability assessments, reports, and sensitive documents through an end-to-end encrypted vault compliant with FIPS 140-3 protocols.
          </p>
        </div>

        {!isLoggedIn ? (
          /* Login view */
          <div className="max-w-sm mx-auto card-glass rounded-3xl p-7 relative overflow-hidden">

            <div className="flex flex-col items-center text-center mb-7">
              <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full mb-3">
                <KeyRound className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-semibold text-white">Secure Client Login</h3>
              <p className="text-xs text-gray-500 mt-1">Protected by FIPS 140-3 encryption</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Client ID
                </label>
                <input
                  type="text"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  placeholder="enterprise-client-01"
                  className="w-full px-3 py-2.5 input-glass rounded-xl text-sm text-white placeholder-gray-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Passphrase
                </label>
                <input
                  type="password"
                  value={passphrase}
                  onChange={(e) => setPassphrase(e.target.value)}
                  placeholder="••••••••••••••••"
                  className="w-full px-3 py-2.5 input-glass rounded-xl text-sm text-white placeholder-gray-600"
                />
              </div>

              {loginError && (
                <div className="p-3 bg-brand-danger/10 border border-brand-danger/25 text-brand-danger text-xs rounded-xl flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <div className="space-y-3 pt-1">
                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full py-2.5 bg-brand-accent text-white rounded-xl font-semibold text-sm transition-colors"
                >
                  {isLoggingIn ? 'Authenticating...' : 'Sign In'}
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-brand-border" />
                  <span className="flex-shrink mx-3 text-xs text-gray-500">or</span>
                  <div className="flex-grow border-t border-brand-border" />
                </div>

                <button
                  type="button"
                  onClick={handleSandboxLogin}
                  disabled={isLoggingIn}
                  className="w-full py-2.5 bg-brand-dark hover:bg-brand-surface border border-brand-border hover:border-brand-border-light text-gray-400 hover:text-white rounded-xl text-sm transition-all"
                >
                  Demo Access (Sandbox)
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Logged-in workspace */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start animate-fadeIn">
            {/* Left: Document vault */}
            <div className="lg:col-span-8 card-glass rounded-3xl p-6 md:p-7 space-y-6">
              
              {successMsg && (
                <div className="p-3.5 bg-brand-success/10 border border-brand-success/25 text-brand-success text-sm rounded-2xl flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-border pb-5">
                <div>
                  <p className="text-xs font-medium text-brand-accent uppercase tracking-wider mb-0.5">Encrypted Workspace</p>
                  <h3 className="text-lg font-display font-semibold text-white">Document Vault</h3>
                </div>

                <div className="relative">
                  <input
                    type="file"
                    id="portal-file-upload"
                    onChange={handleFileUpload}
                    disabled={uploadProgress !== null}
                    className="hidden"
                  />
                  <label
                    htmlFor="portal-file-upload"
                    className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 hover:bg-brand-accent/15 border border-brand-accent/30 hover:border-brand-accent/50 text-white rounded-xl text-sm font-medium transition-all"
                  >
                    <UploadCloud className="w-4 h-4 text-brand-accent" />
                    {uploadProgress !== null ? `Encrypting (${uploadProgress}%)` : 'Upload File'}
                  </label>
                </div>
              </div>

              {uploadProgress !== null && (
                <div className="w-full bg-brand-dark border border-brand-border rounded-full h-1.5 overflow-hidden">
                  <div className="bg-brand-accent h-full transition-all duration-100 rounded-full" style={{ width: `${uploadProgress}%` }} />
                </div>
              )}

              <div className="space-y-2.5">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Files</p>
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 bg-brand-dark/60 border border-brand-border rounded-2xl flex flex-wrap items-center justify-between gap-4 hover:border-brand-border-light transition-all"
                  >
                    <div className="flex items-start gap-3 max-w-[70%]">
                      <div className="p-2 bg-brand-card border border-brand-border text-brand-accent rounded-xl mt-0.5 shrink-0">
                        <FileKey className="w-4 h-4" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="text-sm font-medium text-white truncate">{doc.name}</div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 font-mono">
                          <span>{doc.size}</span>
                          <span>·</span>
                          <span>{doc.sender}</span>
                          <span>·</span>
                          <span className="truncate max-w-[120px]">{doc.hash.substring(0, 18)}…</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <span className={`px-2 py-0.5 rounded-xl text-xs font-medium ${
                        doc.status === 'Decrypted'
                          ? 'bg-brand-success/10 text-brand-success border border-brand-success/20'
                          : 'bg-brand-warning/10 text-brand-warning border border-brand-warning/20'
                      }`}>
                        {doc.status}
                      </span>

                      <button
                        onClick={() => triggerDecrypt(doc.id, doc.name)}
                        disabled={decryptingId !== null || doc.status === 'Decrypted'}
                        className={`p-1.5 rounded-xl border transition-colors ${
                          doc.status === 'Decrypted'
                            ? 'bg-brand-success/10 border-brand-success/25 text-brand-success'
                            : 'bg-brand-accent/10 border-brand-accent/25 hover:bg-brand-accent/20 text-brand-accent'
                        }`}
                        title="Decrypt and download"
                      >
                        {decryptingId === doc.id ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : doc.status === 'Decrypted' ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <Download className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Session info & audit log */}
            <div className="lg:col-span-4 space-y-5">
              {/* Session card */}
              <div className="card-glass rounded-3xl p-5 space-y-4">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Active Session</p>
                <div className="flex items-center gap-2 bg-brand-dark p-3 rounded-xl border border-brand-border text-sm">
                  <ShieldCheck className="w-4 h-4 text-brand-success shrink-0" />
                  <span className="font-mono text-white text-xs">FIPS_VAULT_NODE_09A</span>
                </div>
                <div className="space-y-2 text-xs text-gray-500 font-mono">
                  <div className="flex justify-between">
                    <span>Account:</span>
                    <span className="text-gray-300">{clientId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cipher:</span>
                    <span className="text-gray-300">AES-256-GCM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Key rotation:</span>
                    <span className="text-gray-300">Every 24h</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full py-2 bg-brand-dark hover:bg-brand-danger/10 border border-brand-border hover:border-brand-danger/30 text-gray-500 hover:text-brand-danger rounded-xl text-xs transition-colors"
                >
                  End Session
                </button>
              </div>

              {/* Audit log */}
              <div className="card-glass rounded-3xl p-5 space-y-3">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Access Log</p>
                <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                  {logs.map((log) => (
                    <div key={log.id} className="p-2.5 bg-brand-dark/40 border border-brand-border rounded-xl font-mono text-[11px] space-y-0.5">
                      <div className="flex justify-between text-gray-500">
                        <span>{log.timestamp}</span>
                        <span className={log.status === 'SUCCESS' ? 'text-brand-success' : 'text-brand-danger'}>{log.status}</span>
                      </div>
                      <div className="text-white font-sans font-medium text-xs truncate">{log.action}</div>
                      <div className="text-gray-500 text-[10px]">{log.actor}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
