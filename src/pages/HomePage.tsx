import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

export function HomePage() {
  usePageMeta({
    title: "Drake Stapleton | Chemist, Builder, Agentic Architect",
    description:
      "Drake Stapleton's education, work in chemistry and manufacturing, independent software projects, and the personal history behind Atlas.",
    path: "/",
  });

  return (
    <main className="wrap portrait-wrap">
      <section className="portrait-hero">
        <p className="kicker">Drake Stapleton / Louisville, Kentucky</p>
        <h1>
          I am claiming <em>my own life.</em>
        </h1>
        <p className="portrait-deck">
          I trained as a chemist and built a career in research and manufacturing. Along the way, I taught
          myself to build software and AI systems. This site explains the work, how I got here, and why Atlas
          became personal.
        </p>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/path">
            Follow the path
          </Link>
          <Link className="portrait-link quiet" to="/symphony">
            Enter Atlas Symphony
          </Link>
        </div>
      </section>

      <section className="portrait-statement" aria-labelledby="not-resume">
        <p className="portrait-index">01 / Not a resume</p>
        <div>
          <h2 id="not-resume">My work did not stop with chemistry.</h2>
          <p>
            Chemistry taught me to work from evidence. Manufacturing taught me to make decisions that hold
            up under cost, schedule, safety, and quality requirements. I carried those habits into software
            and artificial intelligence.
          </p>
          <p>
            I learned the rest by doing it: writing software, running communities, paying for infrastructure,
            and documenting failures as carefully as successes. I did not wait for a new title before I
            started.
          </p>
        </div>
      </section>

      <section className="portrait-grid" aria-label="What formed me">
        <article className="portrait-card education">
          <p className="portrait-index">Education</p>
          <h2>A scientific foundation.</h2>
          <p>
            I earned a bachelor&apos;s degree in Chemistry and Biology in 2016, then a master&apos;s degree in
            Chemistry in 2018, both from Western Kentucky University.
          </p>
          <p>
            That education taught me how to frame a question, test an explanation, and separate a result
            from the conclusion I might prefer.
          </p>
        </article>

        <article className="portrait-card resistance">
          <p className="portrait-index">Resistance</p>
          <h2>A job title is a description, not a limit.</h2>
          <p>
            I value what I learned inside established organizations. I do not accept the idea that one
            degree, employer, or industry gets to define the rest of my working life.
          </p>
          <blockquote>
            “I will not let anyone tell me what I can and cannot be.”
          </blockquote>
          <p>
            Agentic architect is the most accurate description of the work I do now. I do not need someone
            else to grant me the title before I use it.
          </p>
        </article>
      </section>

      <section className="portrait-statement father" aria-labelledby="father-atlas">
        <p className="portrait-index">02 / My father and Atlas</p>
        <div>
          <h2 id="father-atlas">Atlas began, in part, with my father&apos;s writing.</h2>
          <p>
            My father was a preacher, and he left handwritten pages behind. I never got to say goodbye.
            Years later, I brought those pages into Atlas because I wanted to spend time with his words and
            respond to them.
          </p>
          <p>
            Atlas cannot bring him back, and I do not claim that it contains him. The project gave me a way
            to preserve the source material, study his language, and work through a conversation I had
            carried for years. That purpose shaped my insistence on provenance and honest claims.
          </p>
        </div>
      </section>

      <section className="portrait-statement" aria-labelledby="self-funded">
        <p className="portrait-index">03 / Built before invited</p>
        <div>
          <h2 id="self-funded">I paid for the work before anyone paid me to do it.</h2>
          <p>
            I bought the tools and compute, ran the experiments, kept the receipts, and built the
            infrastructure myself. I was not assembling an application packet. I was trying to find out
            what these systems could do and where they failed.
          </p>
          <p>
            That work now includes Atlas, agent-control software, research protocols, community systems,
            and production products. The evidence page distinguishes what the current audit supports from
            what still needs original source material.
          </p>
          <Link className="portrait-inline-link" to="/evidence">
            Review the audit and its sources
          </Link>
        </div>
      </section>

      <section className="portrait-closing">
        <p className="portrait-index">About this site</p>
        <h2>This is the fuller record.</h2>
        <p>
          This site includes my education and technical record. It also includes my father, the communities
          I have helped lead, and my decision to build beyond the role I already had. Those parts belong
          together, even when they do not fit a conventional portfolio.
        </p>
        <Link className="portrait-link" to="/path">
          See my education and work history
        </Link>
      </section>

      <footer className="footer portrait-footer">
        Drake Stapleton · <a href="https://github.com/dhgmonkey">github.com/dhgmonkey</a>
        <br />
        Personal history is included by choice. Private records, credentials, and third-party stories remain
        private.
      </footer>
    </main>
  );
}
