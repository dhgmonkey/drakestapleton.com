export const CHIPS = [
  "Multi-agent orchestration",
  "Human-in-the-loop gates",
  "Tool / function interfaces",
  "Policy, safety, provenance",
  "Eval & incident recovery",
  "Python · TypeScript",
  "GitHub @dhgmonkey",
];

export const METRICS = [
  { title: "One thesis", body: "Agents are not the product. The control plane is." },
  { title: "16 months", body: "dated, SHA-deduped history · Apr 2025–Aug 2026" },
  { title: "4,701", body: "unique commits across 94 own trees" },
  { title: "Production desk", body: "Claude, Codex, and Grok as governed engines" },
];

export const STORY = [
  {
    era: "2025 — ship software with models in the loop.",
    body: "Ledger, CRM, SDS parsing, meetings, DMAIC. I learned what “done” means when an LLM is helping write the system.",
  },
  {
    era: "Early 2026 — ship operator products.",
    body: "MobPay, DefiantMob, MobHub, BeltBrain, DHG. Live desks with auth, money movement, ledgers, and planning — not demos.",
  },
  {
    era: "Mid 2026 — the accidental agent platform.",
    body: "Inside MobPay I built MobDev (task → brief) and a multi-vendor panel arena. Every rule was still prose. The model still got a vote.",
  },
  {
    era: "Jul 2026 onward — extract the control plane.",
    body: "Atlas Harness (formerly codeharness) turns that prose into typed policy, lanes, done-gates, provenance, recovery, and evaluation. Atlas Symphony is the named process that runs that desk.",
  },
];

export const ARCH = [
  { title: "1. Intent", body: "Business job, not a chat. Standing authorization. Scoped goal." },
  { title: "2. Orchestration", body: "Lanes. Max fan-out. Named roles. No lateral command." },
  { title: "3. Tools", body: "Function interfaces as subprocesses / APIs. Model does not own credentials." },
  { title: "4. Gates", body: "Done-criteria. Human-in-the-loop. Fail closed. Escalate / redact." },
  { title: "5. Proof", body: "Provenance, receipts, sealed evals, kill / recovery, cost awareness." },
];

export const CASES = [
  {
    title: "Atlas Symphony — the named process",
    meta: "First run 30 Jul 2026 · invented and first operated by Drake Stapleton",
    body: "Atlas is the orchestrator. Symphony is the process: exclusive lanes, a gatekeeper, cost-aware model routing, and a human who still owns GO. This is the public record — who started it, who sat in the first chairs, and the diagrams.",
    href: "/symphony",
    featured: true,
  },
  {
    title: "Atlas Harness — control plane for agents",
    meta: "Jul 2026 → present · TypeScript / Python · formerly codeharness · 406 spine commits",
    body: "A policy and recovery layer over coding agents. Not a model. Not a chat UI. The product is the desk other agents must obey: who may act, when work is done, which lane they are in, and what evidence remains.",
    points: [
      "Multi-agent pattern: steward, heartbeat, workers, kill-squad, historian. Topology is law, not a prompt suggestion.",
      "Tool interfaces: Claude, Codex, and Grok as engines on existing subscriptions.",
      "Human oversight: typed done-gates. The model cannot mark complete.",
    ],
  },
  {
    title: "MobDev + Panel Arena — the use case that forced the architecture",
    meta: "Inside MobPay / The Midnight Mob · 1,081 commits on the product tree",
    body: "A live operations desk grew an internal agent platform: task-to-brief, six-vendor panel review, a prompt compiler that emitted the operating contract. I ran thousands of agent sessions against that contract, then stopped treating the contract as prose.",
  },
];

export const SIDE_CASES = [
  {
    title: "DefiantMob & MobHub",
    meta: "Production operator software · 250 + 70 commits",
    body: "Member ops, ledgers, training-desk automation, payouts. The substrate agent systems have to touch.",
  },
  {
    title: "BeltBrain",
    meta: "Local-first decision engine · 234 commits",
    body: "Planning, inventory intelligence, execution. Agents are useless without a system of record.",
  },
  {
    title: "DHG / HiveMind / Toolbox",
    meta: "Community platform + 804-commit toolkit",
    body: "Where I learned “hive” as an org pattern — later made strict inside Atlas (notify ≠ command).",
  },
  {
    title: "2025 foundations",
    meta: "Financial Ledger, ParseSDS, CRM, meetings, DMAIC",
    body: "670 commits on the ledger alone. Correct systems before orchestrating models over them.",
  },
];

export const ROLE_MAP: [string, string, string][] = [
  ["Multi-agent patterns & orchestration", "Lanes, role topology, capped fan-out, hive operating model", "Not yet LangGraph / AutoGen / Strands as the company standard"],
  ["Tool / function interfaces", "CLI and API adapters; model never holds the keys", "Would map the same contract onto SAP / Salesforce / Snowflake"],
  ["Memory / RAG design", "Provenance, governed memory, channel firewalls, evidence ledgers", "Not a classic enterprise vector-search rollout"],
  ["Human oversight", "Done-gates, interrupt, escalate, emergency court", "Need to express this in the firm’s HITL / SoD language"],
  ["Safety & compliance", "Fail-closed policy, redact, authority boundaries, sealed exams", "PHI/PII, GDPR, SOC 2 as a named control pack with Legal/Risk"],
  ["Eval, observability, ops", "Sealed evals, receipts, recovery, cost-as-architecture", "Enterprise SLAs, tracing stack, FinOps on Bedrock/Azure"],
  ["Cloud agent platforms", "Multi-provider routing (Claude / Codex / Grok) under one policy", "Hands-on Bedrock AgentCore / Azure AI Foundry — learnable, not claimed"],
  ["Mentoring & exec narrative", "I can teach the pattern; this site is the narrative", "Have not yet run a cross-functional enterprise program of record"],
];

export const TREES: [string, string, string, string][] = [
  ["Atlas Harness", "Control plane: policy, lanes, gates, eval", "406", "118k"],
  ["Midnight Mob / MobPay", "Production ops + the agent platform that forced Atlas", "1,081", "466k"],
  ["DefiantMob + MobHub", "Second production domain, ledgers, automation", "320", "504k"],
  ["BeltBrain", "Decision engine / system of record", "234", "141k"],
  ["DHG Toolbox + platform", "Long-running product + hive as org language", "1,003", "267k"],
  ["Financial Ledger + 2025 line", "Correctness before agents", "670+", "198k+"],
];

export const VOLUME = {
  months: ["Apr 25", "May 25", "Jun 25", "Jul 25", "Aug 25", "Sep 25", "Oct 25", "Nov 25", "Dec 25", "Jan 26", "Mar 26", "Apr 26", "May 26", "Jun 26", "Jul 26", "Aug 26"],
  added: [74806, 177760, 79505, 0, 32346, 53655, 68205, 51876, 4330, 13749, 2161, 130, 35445, 369000, 1550049, 364442],
};
