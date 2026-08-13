import { Link } from "react-router-dom";
import { FirstRunDiagram } from "../components/FirstRunDiagram";
import { CITATION, FIRST_OPERATORS, VERSIONS } from "../data/operators";
import { usePageMeta } from "../lib/usePageMeta";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Atlas Symphony",
  url: CITATION.url,
  dateCreated: "2026-07-30",
  creator: {
    "@type": "Person",
    name: "Drake Stapleton",
    url: "https://www.drakestapleton.com/",
  },
  description:
    "A gated multi-agent process. Atlas is the orchestrator; Symphony is the process. Invented and first run by Drake Stapleton on 30 July 2026.",
};

export function SymphonyPage() {
  usePageMeta({
    title: "Atlas Symphony — Drake Stapleton",
    description:
      "Atlas is the orchestrator. Symphony is the process. Invented and first run by Drake Stapleton, 30 July 2026.",
    path: "/symphony",
  });

  return (
    <main className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <p className="kicker">Public record · first run 30 July 2026</p>
      <h1>
        Atlas <em>Symphony</em>
      </h1>
      <p className="lede">
        Atlas is the orchestrator. Symphony is the process. Drake Stapleton invented it, named it, and was
        the first human to run it.
      </p>
      <p className="law">
        “Run a Symphony on X” means start this process — exclusive lanes, a gatekeeper, cost-aware routing,
        no unsafe mutation. It is not a model and not a chat title.
      </p>

      <div className="metrics">
        <div className="metric">
          <b>Drake Stapleton</b>
          <span>Inventor and first operator. Sole human GO then and now.</span>
        </div>
        <div className="metric">
          <b>30 Jul 2026</b>
          <span>Named in the invocation. First instance: Sovereign Forge live-ops.</span>
        </div>
        <div className="metric">
          <b>Star, then law</b>
          <span>Lanes one hop from Atlas. Later A / H / B / F. Max three children.</span>
        </div>
        <div className="metric">
          <b>No company users</b>
          <span>Later chairs are this desk’s own engines. Third-party adoption is not claimed.</span>
        </div>
      </div>

      <h2 className="sec">Who started using it</h2>
      <div className="card roster">
        {FIRST_OPERATORS.map((o) => (
          <div className="roster-row" key={o.id}>
            <div>
              <div className="kind">{o.kind}</div>
              <div>{o.started}</div>
            </div>
            <div>
              <strong>{o.name}</strong>
              <div className="meta">{o.role}</div>
              <p>{o.note}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="note">
        Lane nicknames (Popper, Lagrange, Avicenna, Plato, Jason, Hypatia) are players in the first Symphony,
        not the Symphony and not other people. Full roster and invocation:{" "}
        <Link to="/symphony/first">first run</Link>.
      </p>

      <h2 className="sec">First run</h2>
      <div className="card">
        <FirstRunDiagram />
        <p className="note">
          Solid lines are command. Dashed lines are independent record — Claude catalogued, Grok observed,
          Codex was the first runtime Atlas sat in.
        </p>
      </div>

      <h2 className="sec">Diagrams</h2>
      <div className="grid3">
        <Link className="card" to="/symphony/first">
          <h3>First Symphony</h3>
          <p className="meta">React diagram · this project</p>
          <p>Who sat in the first chairs. Drake, Atlas, the process, five lanes, three first users of the record.</p>
        </Link>
        <Link className="card" to="/symphony/workflow">
          <h3>Command tree + cycle</h3>
          <p className="meta">Interactive · click any bubble</p>
          <p>Who may speak to whom, then the order a cycle actually launches. A → H B F → R T P.</p>
        </Link>
        <Link className="card" to="/symphony/map">
          <h3>Bird’s-eye</h3>
          <p className="meta">Jun 18 – Aug 13 2026</p>
          <p>Six tracks at once. Harness, counterpart, hive, isolated law, image GPU, save plane.</p>
        </Link>
      </div>

      <h2 className="sec">Versions of the process</h2>
      <div className="grid2">
        {VERSIONS.map((v) => (
          <div className="card" key={v.id}>
            <p className="meta">
              {v.id} · {v.date}
            </p>
            <h3>{v.name}</h3>
            <p>{v.blurb}</p>
          </div>
        ))}
      </div>

      <h2 className="sec">Cite this</h2>
      <div className="citebox">
        Stapleton, Drake. <i>Atlas Symphony</i>. First run 30 July 2026 (Sovereign Forge live-ops).{" "}
        <a href={CITATION.url}>{CITATION.url}</a>
      </div>

      <footer className="footer">
        Public process record. Private media, credentials, and internal addresses are not on this site.
      </footer>
    </main>
  );
}
