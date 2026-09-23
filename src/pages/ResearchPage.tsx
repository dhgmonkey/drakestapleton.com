import { Link } from "react-router-dom";
import { PageIntro, SectionLead } from "../components/PagePrimitives";
import { researchWorks } from "../data/researchWorks";
import { usePageMeta } from "../lib/usePageMeta";

export function ResearchPage() {
  usePageMeta("/research");

  return (
    <main className="wrap portrait-wrap research-library-page">
      <PageIntro
        eyebrow="Professional archive / Publications & research"
        title="Professional works, collected in one place."
        className="research-library-hero"
      >
        <p>
          A permanent reading room for my published research, graduate chemistry work,
          and systems papers. Each work has a stable page designed for focused reading,
          citation, and direct access to its canonical source.
        </p>
      </PageIntro>

      <section className="research-library-overview" aria-label="Archive overview">
        <div>
          <span className="research-library-number">{researchWorks.length}</span>
          <span>works currently indexed</span>
        </div>
        <div>
          <span className="research-library-number">2018–2026</span>
          <span>materials chemistry through AI systems</span>
        </div>
        <div>
          <span className="research-library-number">GitHub</span>
          <span>versioned publication home</span>
        </div>
      </section>

      <section className="research-library-section" aria-labelledby="professional-works-heading">
        <SectionLead
          eyebrow="Archive 01"
          title="Professional works."
          titleId="professional-works-heading"
        >
          <p>
            Open any entry for a distraction-light reader, publication details, citation,
            topic index, and source links.
          </p>
        </SectionLead>

        <div className="research-work-grid">
          {researchWorks.map((work, index) => (
            <article className="research-work-card" key={work.slug}>
              <div className="research-work-card-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{work.year}</span>
              </div>
              <p className="research-work-type">{work.type}</p>
              <h2>
                <Link to={work.route}>{work.title}</Link>
              </h2>
              <p className="research-work-authors">{work.authors}</p>
              <p className="research-work-summary">{work.summary}</p>
              <div className="research-work-topics" aria-label={work.title + " topics"}>
                {work.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
              <div className="research-work-card-footer">
                <span>{work.readingLabel}</span>
                <Link className="research-work-open" to={work.route}>
                  Open reader <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="research-library-note" aria-labelledby="archive-model-heading">
        <p className="portrait-index">Archive 02</p>
        <div>
          <h2 id="archive-model-heading">Built as a growing repository.</h2>
          <p>
            The archive is data-driven. A new work can be added once, then the site generates
            its library card, stable route, reader metadata, topic labels, citation, and source
            connection from the same record.
          </p>
          <p>
            Older academic works keep their university or journal source as the canonical record.
            New independent work can live here in full and remain versioned with the site on GitHub.
          </p>
        </div>
      </section>
    </main>
  );
}
