import { Link } from "react-router-dom";
import { PageIntro } from "../components/PagePrimitives";
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
      <PageIntro eyebrow="Education and work" title="Chemistry became the foundation for everything that followed." className="path-header">
        <p>
          I was raised in Tennessee, went to college in Kentucky, and now live in Springfield, Missouri. I
          spent years developing products and supporting manufacturing. My work in software and AI grew
          alongside that career and carries its discipline forward.
        </p>
      </PageIntro>

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

      <section className="path-resistance" aria-labelledby="education-drive">
        <p className="portrait-index">The drive behind the grades</p>
        <h2 id="education-drive">I fought for every inch of a 3.92 GPA.</h2>
        <div className="path-resistance-grid">
          <p>
            Other students held the valedictorian and salutatorian titles. I spent high school wanting the
            kind of intelligence that seemed effortless. Autism and ADHD made focus a daily contest, and I
            moved through those years unmedicated.
          </p>
          <p>
            Determination became my advantage. I returned to the page, the problem, and the work as many
            times as it took. That 3.92 represents discipline, drive, and the habit of fighting for every
            inch. I carried the same habit through two science degrees and every field that followed.
          </p>
        </div>
      </section>

      <section className="path-resistance" aria-labelledby="how-i-grew">
        <p className="portrait-index">How I grew</p>
        <h2 id="how-i-grew">Each field gave me tools for the next one.</h2>
        <div className="path-resistance-grid">
          <p>
            My education prepared me for chemistry. Every job title added another layer of skill. Together,
            they show a career built through curiosity and the confidence to keep learning.
          </p>
          <p>
            Scientific method carried into manufacturing. Manufacturing discipline carried into software.
            Atlas brought those habits together with a personal reason to build. The fields changed, and my
            standards stayed.
          </p>
        </div>
      </section>

      <section className="portrait-closing compact">
        <p className="portrait-index">Where that leads</p>
        <h2>The same standards apply.</h2>
        <p>
          Technical claims on this site are tied to the available record. The evidence documents the work,
          while the story carries the life around it.
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
