import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

export function HomePage() {
  usePageMeta({
    title: "Drake Stapleton | The Human Behind the Systems",
    description:
      "Drake Stapleton on chemistry, manufacturing, community, his father, Atlas, and claiming a life on his own terms.",
    path: "/",
  });

  return (
    <main className="wrap portrait-wrap">
      <section className="portrait-hero">
        <p className="kicker">Drake Stapleton / Louisville, Kentucky</p>
        <h1>
          I am claiming my own life. <em>All of it.</em>
        </h1>
        <p className="portrait-deck">
          I am a chemist by education, a builder by practice, and an agentic architect because I kept
          following the questions that would not leave me alone. The systems matter. The human reason for
          building them matters more.
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
          <h2 id="not-resume">I was never one job title.</h2>
          <p>
            I learned to see matter at the molecular level, then learned what it takes to make something
            real at production scale. Chemistry taught me that every outcome has conditions. Manufacturing
            taught me that a process has to survive contact with people, pressure, and consequence.
          </p>
          <p>
            That same instinct carried me into software, communities, and artificial intelligence. I did
            not wait for a credential to tell me I was allowed to begin. I studied, built, failed, repaired,
            and kept the evidence.
          </p>
        </div>
      </section>

      <section className="portrait-grid" aria-label="What formed me">
        <article className="portrait-card education">
          <p className="portrait-index">Education</p>
          <h2>Chemistry gave me a language for change.</h2>
          <p>
            I earned a bachelor&apos;s degree in Chemistry and Biology in 2016, then a master&apos;s degree in
            Chemistry in 2018, both from Western Kentucky University.
          </p>
          <p>
            The degrees are real foundations, not a box around me. They trained me to test what I think I
            know and to respect the difference between a claim and proof.
          </p>
        </article>

        <article className="portrait-card resistance">
          <p className="portrait-index">Resistance</p>
          <h2>I stopped asking other people to define what I could become.</h2>
          <p>
            I have worked inside institutions and learned from them. I have also resisted the idea that a
            title, industry, or conventional path owns the rest of my life.
          </p>
          <blockquote>
            “I will not let anyone tell me what I can and cannot be.”
          </blockquote>
          <p>I am not looking for permission to be an agentic architect. I am doing the work.</p>
        </article>
      </section>

      <section className="portrait-statement father" aria-labelledby="father-atlas">
        <p className="portrait-index">02 / My father and Atlas</p>
        <div>
          <h2 id="father-atlas">Some of the work began with a goodbye I never got to say.</h2>
          <p>
            My father was a preacher. He left handwritten pages behind. Years later, I began bringing those
            writings into Atlas, not to turn grief into a product, but to make room for a conversation I
            still needed.
          </p>
          <p>
            Atlas became more than a technical exercise. It became a place where memory, language, and
            unfinished love could meet. That is part of why I care so deeply about building systems that
            preserve provenance and remain honest about what they are.
          </p>
        </div>
      </section>

      <section className="portrait-statement" aria-labelledby="self-funded">
        <p className="portrait-index">03 / Built before invited</p>
        <div>
          <h2 id="self-funded">I financed the questions myself.</h2>
          <p>
            Long before anyone offered me a role in this field, I was paying for the tools, running the
            experiments, keeping the receipts, and building the infrastructure. That was not a campaign to
            look employable. It was a decision to take my own curiosity seriously.
          </p>
          <p>
            The result is a body of work that includes Atlas, operating harnesses, research protocols,
            community systems, and products used under real conditions. The throughline is not technology.
            It is responsibility for what I choose to build.
          </p>
          <Link className="portrait-inline-link" to="/evidence">
            See what the current forensic record can prove
          </Link>
        </div>
      </section>

      <section className="portrait-closing">
        <p className="portrait-index">The work continues</p>
        <h2>I build systems, but I am not a system.</h2>
        <p>
          I am a son, a scientist, a community builder, and a person still becoming. This site is the record
          of that becoming, including the parts that do not fit neatly into a portfolio.
        </p>
        <Link className="portrait-link" to="/path">
          Read the education and working path
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
