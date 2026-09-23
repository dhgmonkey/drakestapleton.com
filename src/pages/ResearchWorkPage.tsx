import { Link, Navigate, useParams } from "react-router-dom";
import { getResearchWork, researchWorks } from "../data/researchWorks";
import { usePageMeta } from "../lib/usePageMeta";

export function ResearchWorkPage() {
  const { slug } = useParams();
  const work = getResearchWork(slug);
  const fallback = researchWorks[0];

  usePageMeta({
    path: work?.route ?? "/404",
    title: work ? work.title + " | Drake Stapleton" : "Page Directory | Drake Stapleton",
    description: work?.summary ?? "Choose a page from Drake Stapleton's site.",
    robots: work ? undefined : "noindex, follow",
  });

  if (!work) return <Navigate to="/research" replace />;
  if (work.specializedReader) return <Navigate to={fallback.route} replace />;

  return (
    <main className="wrap portrait-wrap research-reader-page research-record-page">
      <nav className="research-reader-nav" aria-label="Research reader navigation">
        <Link to="/research">← Professional works</Link>
        <span>{work.type} · {work.year}</span>
      </nav>

      <article className="research-reader-shell">
        <header className="research-reader-header">
          <p className="research-reader-kicker">{work.type}</p>
          <h1>{work.title}</h1>
          <p className="research-reader-byline">{work.authors}</p>
          <p className="research-reader-venue">{work.venue}</p>

          <div className="research-reader-actions">
            <a className="portrait-link" href={work.sourceUrl} target="_blank" rel="noreferrer">
              {work.sourceLabel}
            </a>
            <button
              className="research-copy-citation"
              type="button"
              onClick={() => navigator.clipboard?.writeText(work.citation)}
            >
              Copy citation
            </button>
          </div>
        </header>

        <div className="research-reader-meta" aria-label="Publication details">
          <div>
            <span>Published</span>
            <strong>{work.year}</strong>
          </div>
          <div>
            <span>Record</span>
            <strong>{work.venue}</strong>
          </div>
          <div>
            <span>Reading mode</span>
            <strong>{work.readingLabel}</strong>
          </div>
        </div>

        <section className="research-reader-abstract" aria-labelledby="reader-overview-heading">
          <p className="research-reader-section-label">Overview</p>
          <h2 id="reader-overview-heading">At a glance.</h2>
          <p>{work.summary}</p>
        </section>

        {work.sections.map((section, index) => (
          <section className="research-reader-section" key={section.heading}>
            <p className="research-reader-section-label">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <section className="research-reader-citation" aria-labelledby="citation-heading">
          <p className="research-reader-section-label">Citation</p>
          <h2 id="citation-heading">Reference this work.</h2>
          <p>{work.citation}</p>
        </section>

        <footer className="research-reader-footer">
          <div className="research-work-topics" aria-label="Research topics">
            {work.topics.map((topic) => <span key={topic}>{topic}</span>)}
          </div>
          <div>
            <Link className="portrait-link quiet" to="/research">Back to archive</Link>
            <a className="portrait-link" href={work.sourceUrl} target="_blank" rel="noreferrer">
              Canonical source ↗
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
