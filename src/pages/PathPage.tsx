import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

const chapters = [
  {
    years: "2016",
    title: "B.S. in Chemistry and Biology",
    body: "Graduated from Western Kentucky University with undergraduate training in chemistry and biology.",
  },
  {
    years: "2018",
    title: "Master of Science in Chemistry",
    body: "Completed graduate study at Western Kentucky University before moving into industrial research and product development.",
  },
  {
    years: "2018 to 2020",
    title: "R&D Chemist, Soudal",
    body: "Worked on silicone formulation and scale-up, quality systems, UL certification, and technical coordination with the company’s Belgian headquarters.",
  },
  {
    years: "2020 to 2024",
    title: "R&D Chemist, Gold Eagle",
    body: "Commercialized products, served as a HAZMAT Incident Commander, delivered technical training, and identified alternate sources that protected about $1.2 million in supply during COVID-era disruption.",
  },
  {
    years: "Beginning 2024",
    title: "Manufacturing Engineer, 3M",
    body: "Managed manufacturing change control, introduced products and processes, supported quality systems and audits, and worked in a continuous manufacturing environment.",
  },
  {
    years: "Built alongside it all",
    title: "Independent software and AI work",
    body: "Built software, automation, AI systems, research harnesses, community infrastructure, and Atlas alongside my industrial career.",
  },
];

export function PathPage() {
  usePageMeta({
    title: "The Path | Drake Stapleton",
    description: "Drake Stapleton's education, industrial career, and independent work in software and AI.",
    path: "/path",
  });

  return (
    <main className="wrap portrait-wrap path-page">
      <header className="path-header">
        <p className="kicker">Education and work</p>
        <h1>Chemistry was the beginning, not the boundary.</h1>
        <p className="portrait-deck">
          I spent years developing products and supporting manufacturing. My work in software and AI grew
          alongside that career rather than replacing it.
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
        <h2 id="what-i-resisted">Why I moved beyond the expected path.</h2>
        <div className="path-resistance-grid">
          <p>
            My education prepared me for chemistry, but it did not require me to stop there. The same is
            true of every job title I have held. Each one describes work I did, not the full range of work I
            can do.
          </p>
          <p>
            Scientific method carried into manufacturing. Manufacturing discipline carried into software.
            Atlas brought those habits together with a personal reason to build. The fields changed, but my
            standards did not.
          </p>
        </div>
      </section>

      <section className="portrait-closing compact">
        <p className="portrait-index">Where that leads</p>
        <h2>The same standards apply.</h2>
        <p>
          Technical claims on this site are tied to the available record. That evidence documents the work;
          it is not meant to reduce a career or a life to metrics.
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
