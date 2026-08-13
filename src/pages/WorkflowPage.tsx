import { usePageMeta } from "../lib/usePageMeta";

export function WorkflowPage() {
  usePageMeta({
    title: "Atlas Symphony workflow — command tree and cycle",
    description:
      "Interactive Atlas Symphony command tree, cycle phases, and save plane. Invented by Drake Stapleton.",
    path: "/symphony/workflow",
  });

  return (
    <main className="wrap wide">
      <p className="kicker">Diagram · command tree · cycle phases · save plane</p>
      <h1>Workflow</h1>
      <p className="lede">
        You sit in the middle with one talking agent. Commands only go down. Results only come up. Lateral
        signals notify — they do not order. Max three children per node.
      </p>
      <iframe
        className="diagram-frame"
        title="Atlas Symphony workflow"
        src="/diagrams/workflow.html"
      />
      <p className="note">
        Three tabs inside the frame: command tree, cycle phases, Forgejo save plane. Click a bubble for the
        brief.
      </p>
    </main>
  );
}
