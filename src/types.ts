/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface IOCAnalysis {
  query: string;
  type: 'IP' | 'Domain' | 'Hash';
  detectionRatio: string;
  status: 'High Risk' | 'Medium Risk' | 'Clean' | 'Suspicious';
  overallContext: string;
  technicalContext: string;
  businessContext: string;
  securityRecommendations: string[];
  rawJSON: string;
}

export interface MITRETechnique {
  id: string;
  name: string;
  category: 'Initial Access' | 'Execution' | 'Persistence' | 'Privilege Escalation' | 'Defense Evasion' | 'Credential Access' | 'Discovery' | 'Lateral Movement';
  sectors: string[]; // 'Healthcare', 'Financial Services', 'Government', etc.
  aptGroups: string[]; // e.g., 'Magic Hound', 'APT29', 'Volt Typhoon', 'Turla'
  description: string;
  defensiveCountermeasureId: string;
}

export interface D3FENDCountermeasure {
  id: string;
  name: string;
  category: 'Harden' | 'Detect' | 'Isolate' | 'Deceive' | 'Evict' | 'Restore';
  techniqueId: string;
  description: string;
  implementationDetail: string;
}

export interface DarkBreachRecord {
  id: string;
  email: string;
  employeeName: string;
  source: string;
  compromisedDate: string;
  severity: 'Critical' | 'High' | 'Medium';
  exposedData: string[];
}

export interface ThreatActorDossier {
  id: string;
  name: string;
  aliases: string[];
  origin: string;
  threatLevel: 'Critical' | 'High' | 'Moderate';
  firstSeen: string;
  sectorsTargeted: string[];
  description: string;
  recentActivities: string;
}

export interface SecureDocument {
  id: string;
  name: string;
  size: string;
  uploadedAt: string;
  sender: 'Client' | 'ParityBit Sec';
  status: 'Encrypted' | 'Verifying' | 'Decrypted';
  hash: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  action: string;
  actor: string;
  status: 'SUCCESS' | 'FAILED' | 'PENDING';
}
