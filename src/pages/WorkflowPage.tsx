import { CommandTree } from "../diagrams/CommandTree";
import { CyclePhases } from "../diagrams/CyclePhases";
import { usePageMeta } from "../lib/usePageMeta";

export function WorkflowPage() {
  usePageMeta({
    title: "Atlas Symphony workflow — command tree and cycle",
    description:
      "Atlas Symphony command tree and cycle phases. Invented by Drake Stapleton.",
    path: "/symphony/workflow",
  });

  return (
    <main className="wrap wide workflow-page">
      <p className="kicker">Diagram · command tree · cycle phases</p>
      <h1>Workflow</h1>
      <p className="lede">
        The current Boston Atlas flow uses three explicit levels. L1 conducts without implementing. L2
        separates architecture, adversarial review, evidence, and operations. L3 performs bounded edits,
        tests, provider checks, teardown verification, and receipts. Results return through the same chain,
        and an implementation lane may not approve its own work.
      </p>
      <h2 className="sec">Who talks to whom</h2>
      <div className="card">
        <CommandTree />
      </div>
      <h2 className="sec">Cycle sequence</h2>
      <div className="card">
        <CyclePhases />
      </div>
    </main>
  );
}
