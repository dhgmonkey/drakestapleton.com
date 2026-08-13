import { Link } from "react-router-dom";
import { VolumeChart } from "../components/VolumeChart";
import { ARCH, CASES, CHIPS, METRICS, ROLE_MAP, SIDE_CASES, STORY, TREES } from "../data/portfolio";
import { usePageMeta } from "../lib/usePageMeta";

export function HomePage() {
  usePageMeta({
    title: "Drake Stapleton — Agentic AI Architect",
    description:
      "I set the architecture for agent systems that plan, reason, and act — with the model never owning done. Inventor of Atlas Symphony.",
    path: "/",
  });

  return (
    <main className="wrap">
      <p className="kicker">Agentic AI · architecture portfolio</p>
      <h1>Drake Stapleton</h1>
      <p className="lede">
        I set the architecture and operating model for agent systems that plan, reason, and act — with the
        model never owning “done.” This site is one body of work: products first, then the harness, then the
        named process that runs them.
      </p>
      <p className="law">The model proposes. The harness disposes.</p>
      <div className="chips">
        {CHIPS.map((c) => (
          <span className="chip" key={c}>
            {c}
          </span>
        ))}
        <Link className="chip live" to="/symphony">
          Atlas Symphony →
        </Link>
      </div>

      <div className="metrics">
        {METRICS.map((m) => (
          <div className="metric" key={m.title}>
            <b>{m.title}</b>
            <span>{m.body}</span>
          </div>
        ))}
      </div>
      <p className="note">
        Net ~2.6M source lines committed across the archive — agent-authored code and rewrites included. Not a
        typing score. Vendor clones excluded.
      </p>

      <h2 className="sec" id="thesis">
        The collective story
      </h2>
      <div className="card">
        <p>These are not side projects in a pile. They are one sequence:</p>
        <ul className="tight">
          {STORY.map((s) => (
            <li key={s.era}>
              <b>{s.era}</b> {s.body}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 10 }}>
          An Agentic AI Architect role is that last step, at company scale. I already designed and operated
          the personal version under real load — and named the process{" "}
          <Link to="/symphony">Atlas Symphony</Link>.
        </p>
      </div>

      <h2 className="sec" id="arch">
        Reference architecture I already run
      </h2>
      <div className="card">
        <p>What I would put on a whiteboard in week one. I built each box because the desk failed without it.</p>
        <div className="arch">
          {ARCH.map((a) => (
            <div className="box" key={a.title}>
              <strong>{a.title}</strong>
              <span>{a.body}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="sec" id="work">
        Work, sold as one portfolio
      </h2>
      {CASES.map((c) => (
        <article className="case" key={c.title}>
          <h3>{c.href ? <Link to={c.href}>{c.title}</Link> : c.title}</h3>
          <p className="meta">{c.meta}</p>
          <p>{c.body}</p>
          {c.points ? (
            <ul className="tight">
              {c.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}

      <div className="grid2">
        {SIDE_CASES.map((c) => (
          <article className="case" key={c.title}>
            <h3>{c.title}</h3>
            <p className="meta">{c.meta}</p>
            <p>{c.body}</p>
          </article>
        ))}
      </div>

      <h2 className="sec">How I would do the job</h2>
      <div className="grid3">
        <div className="card">
          <h3>Standards</h3>
          <p>
            Reference design first: lanes, tool contracts, gate policy, memory/provenance, env segregation.
            Teams don’t get a free-form agent.
          </p>
        </div>
        <div className="card">
          <h3>Safety</h3>
          <p>
            Prompt injection and over-reach are architecture bugs. Redact, classify, deny-by-default, human
            gate on side effects. “The model asked” is not authorization.
          </p>
        </div>
        <div className="card">
          <h3>Eval & FinOps</h3>
          <p>
            Task-based evals before widen. Trace every action. Kill and recover. Measure latency and cost as
            SLAs, not afterthoughts.
          </p>
        </div>
      </div>

      <h2 className="sec" id="map">
        Mapped to an Agentic AI Architect seat
      </h2>
      <div className="card" style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>What the role owns</th>
              <th>Evidence in this portfolio</th>
              <th>Honest gap</th>
            </tr>
          </thead>
          <tbody>
            {ROLE_MAP.map(([a, b, c]) => (
              <tr key={a}>
                <td>{a}</td>
                <td className="ok">{b}</td>
                <td className="gap">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="note">
          I do not invent SAP or Bedrock experience I do not have. I do have the harder part: an operating
          model that survives when the model is wrong.
        </p>
      </div>

      <h2 className="sec">Volume</h2>
      <p className="note">
        Monthly source added (teal) and cumulative (violet). 2025 is foundations. 2026 is operator products,
        then the harness. SHA-deduped own trees only.
      </p>
      <div className="card">
        <VolumeChart />
      </div>

      <h2 className="sec">Selected trees</h2>
      <table>
        <thead>
          <tr>
            <th>System</th>
            <th>What it proves</th>
            <th className="num">Commits</th>
            <th className="num">Net source</th>
          </tr>
        </thead>
        <tbody>
          {TREES.map(([a, b, c, d]) => (
            <tr key={a}>
              <td>{a}</td>
              <td>{b}</td>
              <td className="num">{c}</td>
              <td className="num">{d}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="sec">What I want next</h2>
      <div className="card">
        <p>
          I want to take this operating model off a personal desk and onto an enterprise one: set the
          reference architecture, the safety bar, and the eval standard so other teams can ship agents that
          act in real systems without the model getting a vote.
        </p>
        <p>
          I am most useful as the architect who has already felt the failure modes, not the one who has only
          assembled a vendor tutorial.
        </p>
      </div>

      <footer className="footer">
        Drake Stapleton · <a href="https://github.com/dhgmonkey">github.com/dhgmonkey</a>
        <br />
        Public site. Omits personal media, credentials, and non-public work.{" "}
        <Link to="/symphony">Atlas Symphony record →</Link>
      </footer>
    </main>
  );
}
