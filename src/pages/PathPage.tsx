import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

const chapters = [
  {
    years: "2016",
    title: "Bachelor of Science",
    body: "Chemistry and Biology at Western Kentucky University. The beginning of a way of thinking built around observation, mechanism, and proof.",
  },
  {
    years: "2018",
    title: "Master of Science in Chemistry",
    body: "A deeper scientific foundation at Western Kentucky University, followed by the move from controlled study into industrial consequence.",
  },
  {
    years: "2018 to 2020",
    title: "R&D Chemist, Soudal",
    body: "Silicone formulation and scale-up, quality work, UL certification, and technical coordination with the company’s Belgian headquarters.",
  },
  {
    years: "2020 to 2024",
    title: "R&D Chemist, Gold Eagle",
    body: "Product commercialization, HAZMAT incident command, technical training, and alternate sourcing work that protected about $1.2 million in supply during COVID-era disruption.",
  },
  {
    years: "Beginning 2024",
    title: "Manufacturing Engineer, 3M",
    body: "Manufacturing change control, product and process introduction, quality systems, audits, and the discipline of keeping 24-hour operations dependable.",
  },
  {
    years: "Built alongside it all",
    title: "Self-taught operator and agentic architect",
    body: "Software, automation, AI systems, research harnesses, community infrastructure, and Atlas. I learned by building systems that had to work outside a tutorial.",
  },
];

export function PathPage() {
  usePageMeta({
    title: "The Path | Drake Stapleton",
    description: "The education, industrial work, resistance, and self-directed path behind Drake Stapleton's systems.",
    path: "/path",
  });

  return (
    <main className="wrap portrait-wrap path-page">
      <header className="path-header">
        <p className="kicker">Education / work / becoming</p>
        <h1>The path was not straight. It was mine.</h1>
        <p className="portrait-deck">
          Each chapter gave me another way to understand responsibility. None of them gets to be the final
          word on who I am.
        </p>
      </header>

      <section className="path-timeline" aria-label="Education and work history">
        {chapters.map((chapter) => (
          <article className="path-chapter" key={`${chapter.years}-${chapter.title}`}>
            <p className="path-years">{chapter.years}</p>
            <div>
              <h2>{chapter.title}</h2>
              <p>{chapter.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="path-resistance" aria-labelledby="what-i-resisted">
        <p className="portrait-index">What I resisted</p>
        <h2 id="what-i-resisted">The demand to remain legible to somebody else.</h2>
        <div className="path-resistance-grid">
          <p>
            A chemistry degree can become a boundary. A company title can become an identity. A new field
            can make experience earned elsewhere look irrelevant. I rejected those reductions.
          </p>
          <p>
            I carried scientific method into manufacturing, operational discipline into software, and human
            questions into Atlas. The transitions are not breaks in the story. They are the story.
          </p>
        </div>
      </section>

      <section className="portrait-closing compact">
        <p className="portrait-index">Where that leads</p>
        <h2>Evidence without surrendering the human being.</h2>
        <p>
          The technical record remains here because claims deserve proof. It sits beside this history,
          because proof of work is not proof of a whole person.
        </p>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/">
            Return to the human story
          </Link>
          <Link className="portrait-link quiet" to="/symphony">
            Read the Symphony record
          </Link>
        </div>
      </section>
    </main>
  );
}
