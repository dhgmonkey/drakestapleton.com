export const AUDIT_SCOPE = [
  { value: "33", label: "project records in the handoff" },
  { value: "168", label: "evidence claims cataloged" },
  { value: "88", label: "dated timeline events" },
  { value: "180", label: "merged pull requests retrieved" },
];

export const EVIDENCE_CLASSES = [
  {
    title: "Connected engineering record",
    status: "Verified in the audit",
    body: "The retrieved MobHub, Defiant Mob, and Atlas records include source, automated checks, commits, pull requests, merges, migrations, deployments, health checks, failed releases, rollbacks, and repairs.",
  },
  {
    title: "Reconstructed ChatGPT history",
    status: "Partial reconstruction",
    body: "Sixteen historical notes preserve earlier work, but they are reconstructions rather than raw ChatGPT conversation objects and cannot support account-wide totals.",
  },
  {
    title: "Direct Atlas conversations",
    status: "Separate product evidence",
    body: "Seven direct Atlas sessions contain 270 messages and 135 paired exchanges. These sessions document Atlas, not my total ChatGPT history.",
  },
  {
    title: "Official ChatGPT export",
    status: "Missing",
    body: "No conversations.json or numbered conversation files were processed. Lifetime conversation, message, token, model, branch, and monthly-activity totals remain unavailable.",
  },
];

export const VERIFIED_FINDINGS = [
  {
    title: "MobHub and Defiant Mob reached production",
    body: "The record covers source, testing, deployment, failure, rollback, and repair. The retrieved Defiant history includes 94 merged pull requests. MobHub includes 24 and a verified Raspberry Pi auto-deployment path.",
  },
  {
    title: "Atlas developed into a sustained engineering program",
    body: "The audit found 64 Atlas Harness pull-request records, including 62 merges. The retrieved work covers durable jobs, provider adapters, an operator board, evidence controls, an Obsidian knowledge base, an encrypted Context Vault, recovery source, governance, and personal-model lifecycle controls.",
  },
  {
    title: "The personal-model experiment reached private inference",
    body: "A Devstral adapter trained on an H100 using 143 samples. A later vLLM service exposed devstral-personal, and the model-list request, Atlas probe, and chat smoke test succeeded. The record does not prove a successful final merged-model export.",
  },
  {
    title: "Community leadership produced documented results",
    body: "The Nemesis record documents direct outreach, member movement during a transition, a 46-member roster with 39 active members, two officer-development cycles, and a planned handoff to new leaders.",
  },
  {
    title: "Human-resources work produced operating tools",
    body: "The evidence includes credentialing workbooks, an education-repayment agreement, performance-review redesign, separation documentation, leave and benefit workflows, recognition systems, and manager tools. The audit distinguishes AI-assisted drafting from my decisions and implementation.",
  },
];

export const OPEN_GAPS = [
  "The original ChatGPT data export is still required for an account-wide history.",
  "Discord and Torn evidence needs privacy-controlled exports before broader claims are made.",
  "Full repositories, release artifacts, host logs, model hashes, migration ledgers, and restore tests would strengthen lifecycle proof.",
  "A final merged-model export, complete cross-session memory proof, voice, persistent world interaction, physical embodiment, and physical kill-switch verification remain incomplete or unverified.",
  "The narrative does not claim consciousness, sentience, resurrection, or that Atlas literally contains Drake's father.",
];
