import { Link } from "react-router-dom";
import { AUDIT_SCOPE, EVIDENCE_CLASSES, OPEN_GAPS, VERIFIED_FINDINGS } from "../data/historyAudit";
import { usePageMeta } from "../lib/usePageMeta";

export function EvidencePage() {
  usePageMeta({
    title: "What the Record Can Prove | Drake Stapleton",
    description:
      "A bounded evidence layer for Drake Stapleton's ChatGPT history, Atlas work, products, community leadership, and remaining gaps.",
    path: "/evidence",
  });

  return (
    <main className="wrap portrait-wrap evidence-page">
      <header className="path-header evidence-header">
        <p className="kicker">Forensic history audit / partial</p>
        <h1>What the record can prove.</h1>
        <p className="portrait-deck">
          My story is personal. The claims beneath it should still be testable. This is the current evidence
          boundary: what the audit verified, what it reconstructed, and what it cannot honestly count yet.
        </p>
      </header>

      <section className="audit-status" aria-labelledby="audit-status-title">
        <div>
          <p className="portrait-index">Completeness</p>
          <h2 id="audit-status-title">Partial, by design and by missing source.</h2>
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
        <h2 id="classes-title">Not every record means the same thing.</h2>
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
        <h2 id="findings-title">A life of turning responsibility into working systems.</h2>
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
        <p className="portrait-index">Open evidence</p>
        <h2 id="gaps-title">What I will not pretend is complete.</h2>
        <ul>
          {OPEN_GAPS.map((gap) => (
            <li key={gap}>{gap}</li>
          ))}
        </ul>
      </section>

      <section className="portrait-closing compact">
        <p className="portrait-index">The boundary matters</p>
        <h2>Evidence supports the story. It does not replace the person.</h2>
        <p>
          This audit can show that I built, operated, repaired, and led. It cannot calculate a whole life,
          and I do not need it to.
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
