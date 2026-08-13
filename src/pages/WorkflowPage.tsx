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
        You sit in the middle with one talking agent. Commands only go down. Results only come up. Lateral
        signals notify — they do not order. Max three children per node.
      </p>
      <h2 className="sec">Who talks to whom</h2>
      <div className="card">
        <CommandTree />
      </div>
      <h2 className="sec">How a cycle actually runs</h2>
      <div className="card">
        <CyclePhases />
      </div>
    </main>
  );
}
