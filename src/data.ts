/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  IOCAnalysis,
  MITRETechnique,
  D3FENDCountermeasure,
  DarkBreachRecord,
  ThreatActorDossier,
  SecureDocument,
  AuditLogEntry
} from './types';

export const IOC_DATABASE: Record<string, IOCAnalysis> = {
  "152.32.205.184": {
    query: "152.32.205.184",
    type: "IP",
    detectionRatio: "74 / 93",
    status: "High Risk",
    overallContext: "The IP 152.32.205.184 exhibits strong malicious correlation with active state-sponsored scanning clusters and command-and-control (C2) botnets. Multiple threat databases confirm rapid port-probing activities targeting enterprise DMZ interfaces.",
    technicalContext: "Deep-dive packet analysis indicates hosting on a hostile bulletproof VPS network in an uncooperative jurisdiction. The host displays a custom SSL certificate self-signed with common indicators of the 'ShadowSentry' malware strain, mimicking standard cloud routing servers and evading IP reputation filters.",
    businessContext: "Compromise via this indicator leads directly to remote-access tool (RAT) delivery, posing severe operational downtime (estimated 18-36 hours), core customer database leakage, and potential PCI-DSS/GDPR non-compliance penalties.",
    securityRecommendations: [
      "Apply immediate egress block on perimeter firewalls for the CIDR range 152.32.205.0/24.",
      "Revoke and force reset active sessions for any administrative credentials authenticated within the past 48 hours.",
      "Inspect internal DNS logs for outbound resolution requests to domains resolved by this IP address.",
      "Trigger file integrity verification on public-facing web servers for unapproved web shell execution."
    ],
    rawJSON: `{
  "indicator": {
    "value": "152.32.205.184",
    "type": "ipv4",
    "reputation_score": 12,
    "confidence": 0.98
  },
  "telemetry": {
    "first_seen": "2026-04-12T14:22:01Z",
    "last_seen": "2026-07-16T03:12:44Z",
    "scans_detected": 14208,
    "asn": "AS54210 Bulletproof Transit"
  },
  "malware_signatures": [
    "ShadowSentry.RAT.v2",
    "GimmickLoader.C2"
  ],
  "vendor_detections": {
    "Fortinet": "Malicious.IP.C2",
    "SOCRadar": "Active_Threat_Actor_Infrastructure",
    "Cyble": "Ransomware_C2_Host",
    "Kaspersky": "Backdoor.Win32.ShadowSentry"
  }
}`
  },
  "google.com": {
    query: "google.com",
    type: "Domain",
    detectionRatio: "0 / 93",
    status: "Clean",
    overallContext: "Domain google.com is classified as an extremely high-trust global asset with no hostile indicators. All historical signatures confirm benign status.",
    technicalContext: "Points to Google Global Cache infrastructure. Valid DNSSEC, high TLS standards, and fully certified authentic ownership details.",
    businessContext: "Zero risk. Baseline public cloud services. No impact on organizational operations or security standards.",
    securityRecommendations: [
      "Maintain default whitelist stance.",
      "Ensure DNS resolution is handled by your enterprise's designated high-performance resolvers."
    ],
    rawJSON: `{
  "indicator": {
    "value": "google.com",
    "type": "domain",
    "reputation_score": 100,
    "confidence": 1.0
  },
  "telemetry": {
    "rank": 1,
    "dnssec_enabled": true,
    "registrar": "MarkMonitor Inc."
  },
  "vendor_detections": {
    "Fortinet": "Clean",
    "SOCRadar": "Clean",
    "Cyble": "Clean",
    "Kaspersky": "Clean"
  }
}`
  },
  "8.8.8.8": {
    query: "8.8.8.8",
    type: "IP",
    detectionRatio: "0 / 93",
    status: "Clean",
    overallContext: "The IP 8.8.8.8 represents Google Public DNS, showing zero malicious activity. Legitimate public resolver query endpoint.",
    technicalContext: "Resolves to Google DNS servers. High performance, anycast routing framework with millions of benign telemetry checks daily.",
    businessContext: "Zero risk. Normal web browsing and DNS configuration helper.",
    securityRecommendations: [
      "Verify internal routing allows authorized DNS lookups on Port 53 to this destination if used as external forwarder."
    ],
    rawJSON: `{
  "indicator": {
    "value": "8.8.8.8",
    "type": "ipv4",
    "reputation_score": 100,
    "confidence": 1.0
  },
  "telemetry": {
    "owner": "Google LLC",
    "anycast": true
  },
  "vendor_detections": {
    "Fortinet": "Clean",
    "SOCRadar": "Clean",
    "Cyble": "Clean",
    "Kaspersky": "Clean"
  }
}`
  },
  "d41d8cd98f00b204e9800998ecf8427e": {
    query: "d41d8cd98f00b204e9800998ecf8427e",
    type: "Hash",
    detectionRatio: "42 / 93",
    status: "Suspicious",
    overallContext: "This MD5 hash corresponds to a highly obfuscated script payload utilizing anti-analysis routines and sandbox-evasion mechanisms.",
    technicalContext: "The executable is compiled to bypass Windows Defender standard signatures. It initiates dynamic loading of kernel-level API calls to disable logging and hooks.",
    businessContext: "High operational risk. Code is structured to perform memory injection on legitimate system processes (svchost.exe), facilitating local payload downloads.",
    securityRecommendations: [
      "Quarantine any host reporting execution of files matching this MD5 signature.",
      "Check Active Directory logs for unexpected service accounts created immediately after execution report."
    ],
    rawJSON: `{
  "indicator": {
    "value": "d41d8cd98f00b204e9800998ecf8427e",
    "type": "md5_hash",
    "reputation_score": 45,
    "confidence": 0.85
  },
  "telemetry": {
    "file_type": "Win32 EXE",
    "entropy": 7.92,
    "file_size_bytes": 102400
  },
  "malware_signatures": [
    "Evader.Loader.Gen",
    "Suspicious.Obfuscator"
  ],
  "vendor_detections": {
    "Fortinet": "Suspicious.Dropper",
    "SOCRadar": "Malicious_Hash_Detected",
    "Kaspersky": "HEUR:Trojan.Win32.Evader"
  }
}`
  }
};

export const MITRE_ATTACK_TECHNIQUES: MITRETechnique[] = [
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    category: "Initial Access",
    sectors: ["Healthcare", "Financial Services", "Government", "Energy"],
    aptGroups: ["APT29", "Volt Typhoon", "Turla"],
    description: "The use of software, data, or commands to exploit weak spots in internet-exposed services or applications, bypassing security filters to gain code execution.",
    defensiveCountermeasureId: "D3-SPA"
  },
  {
    id: "T1204.002",
    name: "Malicious File Execution",
    category: "Execution",
    sectors: ["Healthcare", "Financial Services", "Defense"],
    aptGroups: ["Magic Hound", "APT29"],
    description: "An adversary relies on user action to execute a malicious file to jumpstart technical execution, often delivered through high-fidelity phishing campaigns.",
    defensiveCountermeasureId: "D3-FA"
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    category: "Persistence",
    sectors: ["Financial Services", "Government", "Retail"],
    aptGroups: ["Turla", "Magic Hound"],
    description: "Adversaries add program entries to startup folders or registry run keys to automatically trigger malicious binaries upon reboot, establishing stable foothold.",
    defensiveCountermeasureId: "D3-RPH"
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    category: "Privilege Escalation",
    sectors: ["Healthcare", "Government", "Energy"],
    aptGroups: ["Magic Hound", "Turla", "Volt Typhoon"],
    description: "Abusing stolen legitimate credentials (admin, service, or standard corporate users) to bypass multi-factor checks and escalate privileges seamlessly.",
    defensiveCountermeasureId: "D3-RPA"
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    category: "Defense Evasion",
    sectors: ["Financial Services", "Government", "Healthcare"],
    aptGroups: ["APT29", "Turla"],
    description: "Encrypting, encoding, or scrambling payload segments and scripts to hide malware traits from static and behavioral detection mechanisms.",
    defensiveCountermeasureId: "D3-SDA"
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    category: "Credential Access",
    sectors: ["Government", "Financial Services", "Energy"],
    aptGroups: ["Volt Typhoon", "APT29"],
    description: "Extracting plaintext credentials, NTLM hashes, or security tickets from active memory (LSA Subsystem or SAM database) to pivot laterally.",
    defensiveCountermeasureId: "D3-LMA"
  },
  {
    id: "T1016.001",
    name: "Internet Connection Discovery",
    category: "Discovery",
    sectors: ["Healthcare", "Financial Services", "Government", "Energy", "Defense"],
    aptGroups: ["Volt Typhoon", "APT29", "Turla", "Magic Hound"],
    description: "Adversaries perform automated checks to verify internet connectivity, mapping outbound routing and resolving DNS protocols to establish C2 protocols.",
    defensiveCountermeasureId: "D3-TDA"
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    category: "Lateral Movement",
    sectors: ["Healthcare", "Financial Services", "Energy"],
    aptGroups: ["Magic Hound", "Volt Typhoon"],
    description: "Leveraging authorized internal RDP connections with compromised credentials to jump between hosts inside the segmented enterprise subnet.",
    defensiveCountermeasureId: "D3-NIS"
  }
];

export const MITRE_D3FEND_COUNTERMEASURES: Record<string, D3FENDCountermeasure[]> = {
  "T1016.001": [
    {
      id: "D3-TDA-1",
      name: "Outbound DNS Filtering & Spoofing Detection",
      category: "Harden",
      techniqueId: "T1016.001",
      description: "Restricting external DNS resolution exclusively to high-reputation recursive forwarders and enforcing active DNSSEC validation.",
      implementationDetail: "Configure enterprise DNS servers to sinkhole queries targeting unregistered domains and isolate queries resolving to fast-flux IP clusters."
    },
    {
      id: "D3-TDA-2",
      name: "Outbound Network Traffic Analysis",
      category: "Detect",
      techniqueId: "T1016.001",
      description: "Monitoring outbound TCP synchronization packets to detect rapid connection verification checks to random external IP blocks.",
      implementationDetail: "Deploy behavioral analytics on gateway firewalls to flag hosts querying known testing infrastructure (e.g., ping.eu, dnsleaktest.com) at standard intervals."
    },
    {
      id: "D3-TDA-3",
      name: "Logical DMZ Segmentation",
      category: "Isolate",
      techniqueId: "T1016.001",
      description: "Restricting non-essential internal hosts from establishing outbound routes on arbitrary protocol ports (HTTP/HTTPS/DNS).",
      implementationDetail: "Implement zero-trust network access (ZTNA) clients on all hosts, enforcing dedicated web proxy paths for all internet access."
    },
    {
      id: "D3-TDA-4",
      name: "Synthetic Honey Interfaces",
      category: "Deceive",
      techniqueId: "T1016.001",
      description: "Injecting virtual simulated interfaces that return false network layout responses to confuse discovery protocols.",
      implementationDetail: "Deploy decoy gateways on common subnets that report successful connection states to non-existent external nodes, sounding high-severity silent alerts."
    },
    {
      id: "D3-TDA-5",
      name: "Credential Revocation",
      category: "Evict",
      techniqueId: "T1016.001",
      description: "Automated session termination and ticket invalidation for any endpoint triggering connection discovery alarms.",
      implementationDetail: "Leverage SOAR orchestration to revoke Kerberos Ticket-Granting Tickets (TGT) and force credential cycles across Active Directory instantly."
    },
    {
      id: "D3-TDA-6",
      name: "Golden Image Rollback",
      category: "Restore",
      techniqueId: "T1016.001",
      description: "Wiping contaminated virtual nodes and rebuilding them immediately from a sanitized master snapshot.",
      implementationDetail: "Utilize immutable cluster infrastructure (e.g. Kubernetes, stateless VMs) to destroy flagged pods or instances and deploy validated equivalents in milliseconds."
    }
  ],
  "T1190": [
    {
      id: "D3-SPA-1",
      name: "Web Application Firewall Custom Rules",
      category: "Harden",
      techniqueId: "T1190",
      description: "Enforcing rigorous request screening parameters to filter input strings against SQL injection, deserialization payloads, and memory buffer overflows.",
      implementationDetail: "Deploy OWASP core rulesets with tight scoring margins on reverse proxies."
    },
    {
      id: "D3-SPA-2",
      name: "Inbound Protocol Validation",
      category: "Detect",
      techniqueId: "T1190",
      description: "Inspecting payload body elements for signs of remote code execution or binary downloads disguised as JSON blocks.",
      implementationDetail: "Analyze incoming traffic patterns via neural network decoders to isolate command injection attempts."
    }
  ],
  "T1204.002": [
    {
      id: "D3-FA-1",
      name: "File Access Verification",
      category: "Harden",
      techniqueId: "T1204.002",
      description: "Enforcing application whitelisting and software restriction policies to block execution from common download subdirectories (Temp, AppData).",
      implementationDetail: "Configure AppLocker policies to strictly block non-signed executable executions in user profiles."
    },
    {
      id: "D3-FA-2",
      name: "Heuristic Sandbox Detonation",
      category: "Detect",
      techniqueId: "T1204.002",
      description: "Automatically rerouting unverified attachments to an isolated detonation chamber to evaluate behavior before user access is permitted.",
      implementationDetail: "Integrate email gateways with dynamic sandboxes to analyze execution telemetry."
    }
  ]
};

export const DARK_INTEL_BREACH_RECORDS: DarkBreachRecord[] = [
  {
    id: "DB-001",
    email: "t.m******@paritybit.sec",
    employeeName: "Thomas Miller",
    source: "AlphaHydra Dark Web Forum Leak",
    compromisedDate: "2026-06-11",
    severity: "Critical",
    exposedData: ["Cleartext Password", "Full Name", "API Secret Tokens"]
  },
  {
    id: "DB-002",
    email: "s.v******@paritybit.sec",
    employeeName: "Sarah Vance",
    source: "CyberRaid Ransomware Syndicate Archive",
    compromisedDate: "2026-05-24",
    severity: "High",
    exposedData: ["SHA-256 Pass Hash", "Salt Value", "Work Email"]
  },
  {
    id: "DB-003",
    email: "a.k******@paritybit.sec",
    employeeName: "Arthur King",
    source: "ApexCorp Legacy Partner Breach",
    compromisedDate: "2026-02-15",
    severity: "Medium",
    exposedData: ["Phonenumber", "Workstation ID", "Active Directory Metadata"]
  }
];

export const THREAT_ACTOR_DOSSIERS: ThreatActorDossier[] = [
  {
    id: "Fox Kitten",
    name: "Fox Kitten",
    aliases: ["UNC757", "Pioneer Kitten", "Parisite"],
    origin: "Iran",
    threatLevel: "Critical",
    firstSeen: "2017",
    sectorsTargeted: ["Oil & Gas", "Defense Contractors", "Government", "Utilities"],
    description: "Fox Kitten is an advanced persistent threat (APT) group active since at least 2017. They specialize in exploiting enterprise VPN vulnerabilities (Pulse Secure, Citrix NetScaler, F5 BIG-IP) to acquire initial web footholds. Once inside, they typically establish backdoors and either sell access on dark web forums or deploy ransomware variants (such as Dharma) to extort corporate targets.",
    recentActivities: "Active exploitation of public-facing web-facing interfaces in APAC defense sub-suppliers to deploy custom secure tunnel binaries."
  },
  {
    id: "APT29",
    name: "APT29",
    aliases: ["Cozy Bear", "Nobelium", "Midnight Blizzard"],
    origin: "Eastern Europe",
    threatLevel: "Critical",
    firstSeen: "2008",
    sectorsTargeted: ["Government", "Foreign Embassies", "Think Tanks", "Defense Agencies"],
    description: "An exceptionally patient, highly sophisticated state-sponsored intelligence operation. Best known for the SolarWinds supply-chain breach, APT29 uses tailored malware toolsets, custom encrypted Cloud APIs (such as OneDrive and Google Drive for C2 routing), and elite stealth methods to maintain multi-year active monitoring inside critical systems.",
    recentActivities: "Spear-phishing operations targeting diplomatic corps and international defense summits, leveraging customized PDF payloads."
  },
  {
    id: "Volt Typhoon",
    name: "Volt Typhoon",
    aliases: ["Bronze Silhouette", "Vanguard Panda"],
    origin: "East Asia",
    threatLevel: "Critical",
    firstSeen: "2021",
    sectorsTargeted: ["Critical Infrastructure", "Power Grids", "Telecommunications", "Maritime Hubs"],
    description: "A highly stealthy actor focusing on 'Living off the Land' (LotL) techniques. Rather than deploying massive custom software programs, Volt Typhoon logs in using stolen valid credentials and navigates networks using native administration utilities (PowerShell, WMI, net.exe). Their principal objective is long-term persistent access, ready to disrupt vital systems during geopolitical crises.",
    recentActivities: "Pre-positioning operations inside power generation facilities in Pacific territories, focusing on router firmware implants."
  },
  {
    id: "Turla",
    name: "Turla",
    aliases: ["Waterbug", "Venomous Bear", "Krypton"],
    origin: "Eastern Europe",
    threatLevel: "High",
    firstSeen: "2004",
    sectorsTargeted: ["Government Embassies", "Military Infrastructure", "Global Telecommunications"],
    description: "One of the longest-running state-sponsored cyber syndicates. Turla is infamous for hijackings of commercial satellite internet connections to mask their command servers. They deploy complex multi-stage rootkits (such as Uroboros) and display absolute discipline in destroying network traces during operations.",
    recentActivities: "Deploying high-severity spyware backdoors disguised as legitimate antivirus updates in Eastern European administrative offices."
  }
];

export const INITIAL_CLIENT_DOCUMENTS: SecureDocument[] = [
  {
    id: "doc-109",
    name: "Enterprise_Sovereignty_Risk_Audit_v4.pdf.enc",
    size: "14.2 MB",
    uploadedAt: "2026-07-15 11:34 AM",
    sender: "ParityBit Sec",
    status: "Encrypted",
    hash: "sha256-4b92b6a061c479a2bb7f5cc02d0cf309bca3bdf6d981977be456da8ff1a7cc8a"
  },
  {
    id: "doc-110",
    name: "Network_Topology_Schema_Primary_DMZ.dwg.enc",
    size: "8.1 MB",
    uploadedAt: "2026-07-16 01:10 AM",
    sender: "Client",
    status: "Encrypted",
    hash: "sha256-f00de4568bca128fef89ab0cf2c112a9e3f947bb3de67aa8ef2089cae0018df1"
  }
];

export const INITIAL_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: "LOG-921",
    timestamp: "2026-07-16 03:10:14",
    action: "AES-256 Key Decryption Session Init",
    actor: "Client Portal JWT #9201",
    status: "SUCCESS"
  },
  {
    id: "LOG-922",
    timestamp: "2026-07-16 03:12:44",
    action: "Secure Document Upload: DMZ_Topology",
    actor: "Enterprise Admin Client",
    status: "SUCCESS"
  },
  {
    id: "LOG-923",
    timestamp: "2026-07-16 03:22:01",
    action: "FIPS 140-3 Hardware Key Check",
    actor: "HSM Node US-EAST",
    status: "SUCCESS"
  }
];
