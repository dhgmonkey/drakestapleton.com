import { Link } from "react-router-dom";
import { AUDIT_SCOPE, EVIDENCE_CLASSES, OPEN_GAPS, VERIFIED_FINDINGS } from "../data/historyAudit";
import { usePageMeta } from "../lib/usePageMeta";

export function EvidencePage() {
  usePageMeta({
    title: "Evidence and Sources | Drake Stapleton",
    description:
      "Current evidence for Drake Stapleton's ChatGPT history, Atlas work, software projects, community leadership, and unresolved gaps.",
    path: "/evidence",
  });

  return (
    <main className="wrap portrait-wrap evidence-page">
      <header className="path-header evidence-header">
        <p className="kicker">Forensic history audit / partial</p>
        <h1>What the available record supports.</h1>
        <p className="portrait-deck">
          This page separates verified work from reconstructed history and missing source material. It is
          not a complete account of my ChatGPT history or every project I have worked on.
        </p>
      </header>

      <section className="audit-status" aria-labelledby="audit-status-title">
        <div>
          <p className="portrait-index">Completeness</p>
          <h2 id="audit-status-title">The current audit is incomplete.</h2>
        </div>
        <p>
          The audit package reports 33 project records, 168 evidence claims, and 88 dated events. It did not
          receive the original ChatGPT export, so none of those figures is presented as an account-wide
          conversation history.
        </p>
      </section>

      <section className="audit-metrics" aria-label="Audit scope">
        {AUDIT_SCOPE.map((metric) => (
          <div className="audit-metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="evidence-section" aria-labelledby="classes-title">
        <p className="portrait-index">Evidence classes</p>
        <h2 id="classes-title">Four different kinds of evidence.</h2>
        <div className="evidence-class-grid">
          {EVIDENCE_CLASSES.map((item) => (
            <article className="evidence-class" key={item.title}>
              <p className="evidence-status">{item.status}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="evidence-section" aria-labelledby="findings-title">
        <p className="portrait-index">Strongest current findings</p>
        <h2 id="findings-title">Findings supported by the current record.</h2>
        <div className="finding-list">
          {VERIFIED_FINDINGS.map((finding, index) => (
            <article className="finding" key={finding.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{finding.title}</h3>
                <p>{finding.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="evidence-section audit-gaps" aria-labelledby="gaps-title">
        <p className="portrait-index">Unresolved</p>
        <h2 id="gaps-title">What remains unverified.</h2>
        <ul>
          {OPEN_GAPS.map((gap) => (
            <li key={gap}>{gap}</li>
          ))}
        </ul>
      </section>

      <section className="portrait-closing compact">
        <p className="portrait-index">Scope</p>
        <h2>What this audit can and cannot do.</h2>
        <p>
          The audit documents systems I built, operated, and repaired, along with leadership work supported
          by the available files. It does not measure my entire account history, career, or life.
        </p>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/">
            Return to the human story
          </Link>
          <Link className="portrait-link quiet" to="/path">
            Follow the path
          </Link>
        </div>
      </section>
    </main>
  );
}
