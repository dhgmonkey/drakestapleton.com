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
    <main className="wrap wide">
      <p className="kicker">Diagram · command tree · cycle phases</p>
      <h1>Workflow</h1>
      <p className="lede">
        The human operator works through one orchestrator. Commands move down the tree, results return up
        it, and lateral signals carry status without granting authority. Each node may create no more than
        three children.
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
