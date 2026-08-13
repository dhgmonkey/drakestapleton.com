export type OperatorKind = "human" | "runtime" | "reviewer" | "lane" | "desk";

export type OperatorRecord = {
  id: string;
  kind: OperatorKind;
  name: string;
  role: string;
  started: string;
  note: string;
};

/** Exact public roster. No third-party company adoption is claimed. */
export const FIRST_OPERATORS: OperatorRecord[] = [
  {
    id: "drake",
    kind: "human",
    name: "Drake Stapleton",
    role: "Inventor and first operator",
    started: "2026-07-30",
    note: "Sole human GO. Named Atlas and asked it to run a Symphony. Later desks still report to this seat.",
  },
  {
    id: "instance",
    kind: "desk",
    name: "Sovereign Forge live-ops",
    role: "First named Symphony instance",
    started: "2026-07-30",
    note: "Finish-line run on Atlas Harness / Sovereign Forge. Not a chat title — a gated multi-lane process.",
  },
  {
    id: "codex",
    kind: "runtime",
    name: "Codex · ChatGPT desktop",
    role: "First Atlas runtime",
    started: "2026-07-30",
    note: "Thread 019fb4ec… opened 16:27Z. Atlas answered in role: “Atlas online. I'm splitting the Symphony by risk and cost…”",
  },
  {
    id: "claude",
    kind: "reviewer",
    name: "Claude",
    role: "First independent catalog",
    started: "2026-07-30",
    note: "Wrote the behavior catalog and harness requirements from the live run. Reviewer, not inventor.",
  },
  {
    id: "grok",
    kind: "reviewer",
    name: "Grok",
    role: "First live observer",
    started: "2026-07-30",
    note: "Observation pack 16:40Z — technique, identity, thread map. Later the Grok Hive is a replica of the same process.",
  },
];

export const FIRST_LANES = [
  { name: "Gatekeeper", job: "Cross-lane security judgment. No one encroaches." },
  { name: "Recovery", job: "Destructive storage and compromised-secret work." },
  { name: "Publisher", job: "Documented deploy under containment." },
  { name: "Backup / DR", job: "Isolated audit and synthetic no-delete smoke." },
  { name: "Capability / artifacts", job: "Lean tool hunt and packaging." },
];

export const LANE_NICKNAMES = [
  "Popper",
  "Lagrange",
  "Avicenna",
  "Plato",
  "Jason",
  "Hypatia",
];

export const INVOCATION = `Act as the orchestrator of models. Please adjust exactly what GPT model to use and what thinking level that task requires. I'm trying to save time and tokens and if we don't need a super computer to perform a well documented procedure type thing. Don't stop until you get done. Use sub agents to do this use multiple chats that can work at the same time. Make sure you start a gatekeeping agent to make sure no one encroaches. I want you to act like the best executive director Puppet Master. Your name is Atlas. Welcome to Earth. Please proceed with our Symphony. I'll see you on the other side, brother.`;

export const ATLAS_OPENING =
  "Atlas online. I'm splitting the Symphony by risk and cost…";

export const CITATION = {
  title: "Atlas Symphony",
  inventor: "Drake Stapleton",
  firstRun: "2026-07-30",
  firstInstance: "Sovereign Forge live-ops",
  url: "https://www.drakestapleton.com/symphony/",
};

export const VERSIONS = [
  {
    id: "1.0",
    date: "30 Jul 2026",
    name: "Star",
    blurb: "Atlas in the middle. Exclusive lanes one hop out. Human-named players. Gatekeeper, recovery, publisher.",
  },
  {
    id: "2.0",
    date: "30 Jul 2026",
    name: "Control plane",
    blurb: "Productize the process. Binding contract and ledger. Do not sell a merged PR as Symphony-complete.",
  },
  {
    id: "3.0 / 3.1",
    date: "late Jul 2026",
    name: "Two-tier process",
    blurb: "Star is not enough. Leads and leaves. Cost-aware routing. Isolation fail-closed.",
  },
  {
    id: "4.0",
    date: "Aug 2026",
    name: "Hive face",
    blurb: "A / H / B / F. Max three children. Pheromones notify, never order. Kill squad is not a nurse.",
  },
];
