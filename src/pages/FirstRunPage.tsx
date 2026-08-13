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
      <h1>The first documented run</h1>
      <p className="lede">
        I wrote the invocation, named the orchestrator Atlas, and authorized the run. The other entries on
        this page are runtimes, reviewers, or task lanes. They are not co-inventors.
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
        These nicknames identified agent lanes in the first run, not other people:{" "}
        {LANE_NICKNAMES.join(" · ")}.
      </p>

      <h2 className="sec">What is not claimed</h2>
      <div className="card">
        <p>
          I do not claim external customers or organizational adoption. Later Grok Hive and Boston roles
          remained part of my own operating environment. Claude cataloged the first run and Grok observed
          it; neither is presented as a co-inventor.
        </p>
      </div>
    </main>
  );
}
