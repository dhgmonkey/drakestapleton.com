import { FirstRunDiagram } from "../components/FirstRunDiagram";
import {
  ATLAS_OPENING,
  FIRST_LANES,
  FIRST_OPERATORS,
  INVOCATION,
  LANE_NICKNAMES,
} from "../data/operators";
import { usePageMeta } from "../lib/usePageMeta";

export function FirstRunPage() {
  usePageMeta({
    title: "First Atlas Symphony — 30 July 2026 · Drake Stapleton",
    description:
      "Who started Atlas Symphony: Drake Stapleton invented and first operated it. Codex was the first runtime. Claude and Grok wrote the first independent record.",
    path: "/symphony/first",
  });

  return (
    <main className="wrap">
      <p className="kicker">First named instance · Sovereign Forge live-ops</p>
      <h1>Who started using it</h1>
      <p className="lede">
        One human started it. Drake Stapleton wrote the invocation, named the orchestrator Atlas, and told it
        to proceed with a Symphony. Everyone else on this page sat in a chair he opened.
      </p>

      <h2 className="sec">The invocation (verbatim)</h2>
      <blockquote className="invoke">
        {INVOCATION}
        <cite>Drake Stapleton · 30 July 2026 · prior turn: “What’s left in our development plan?”</cite>
      </blockquote>
      <p className="law">Atlas opening in role: “{ATLAS_OPENING}”</p>

      <h2 className="sec">The first diagram</h2>
      <div className="card">
        <FirstRunDiagram />
      </div>

      <h2 className="sec">Roster</h2>
      <div className="card" style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Started</th>
              <th>Name</th>
              <th>Role</th>
              <th>Kind</th>
            </tr>
          </thead>
          <tbody>
            {FIRST_OPERATORS.map((o) => (
              <tr key={o.id}>
                <td>{o.started}</td>
                <td>{o.name}</td>
                <td>{o.role}</td>
                <td>{o.kind}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {FIRST_OPERATORS.map((o) => (
        <article className="case" key={o.id}>
          <p className="kind">{o.kind}</p>
          <h3>{o.name}</h3>
          <p className="meta">
            {o.role} · {o.started}
          </p>
          <p>{o.note}</p>
        </article>
      ))}

      <h2 className="sec">First lanes</h2>
      <div className="grid2">
        {FIRST_LANES.map((l) => (
          <div className="card" key={l.name}>
            <h3>{l.name}</h3>
            <p>{l.job}</p>
          </div>
        ))}
      </div>
      <p className="note">
        Nicknames used as exclusive players in that first run, not as other humans:{" "}
        {LANE_NICKNAMES.join(" · ")}.
      </p>

      <h2 className="sec">What is not claimed</h2>
      <div className="card">
        <p>
          No company outside this desk has been sold as a Symphony customer. Later Grok Hive and Boston hive
          chairs are still Drake’s operators. Claude and Grok are first users of the <i>record</i> — catalog
          and observation — not co-inventors.
        </p>
      </div>
    </main>
  );
}
