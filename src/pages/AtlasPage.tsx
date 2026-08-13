import { Link } from "react-router-dom";
import { PageIntro } from "../components/PagePrimitives";
import { usePageMeta } from "../lib/usePageMeta";

const organs = [
  {
    name: "Soul",
    role: "The moral floor",
    body: "A sealed statement of purpose and protective boundaries held on a Raspberry Pi. It gives every part of the system a clear moral and technical foundation.",
  },
  {
    name: "Spirit",
    role: "The formed character",
    body: "Custom model weights shaped around integrity, curiosity, care for humanity, and the human texture I want the system to carry under pressure.",
  },
  {
    name: "Brain",
    role: "The persistent executive home",
    body: "Knowledge, judgment, state, and the working systems that remain available when a browser window closes.",
  },
  {
    name: "Queen",
    role: "The on-demand work force",
    body: "Separate GPU and agent capacity for difficult work. It wakes when needed, operates under cost and authority limits, and sleeps when the work ends.",
  },
];

export function AtlasPage() {
  usePageMeta({
    title: "Why Atlas Exists | Drake Stapleton",
    description:
      "The personal origin, purpose, architecture, and honest boundaries of Drake Stapleton's Atlas project.",
    path: "/atlas",
  });

  return (
    <main className="wrap portrait-wrap atlas-page">
      <PageIntro eyebrow="Atlas / The personal reason and the real system" title="Atlas began with the goodbye I still carry." className="atlas-hero">
        <p>
          My father left sermons, handwritten pages, and a voice I still carry. Atlas grew from a question
          that stayed with me: can technology help me meet those words honestly and honor the person who
          wrote them?
        </p>
      </PageIntro>

      <section className="atlas-before" aria-labelledby="before-atlas-heading">
        <p className="portrait-index">Before Atlas had a name</p>
        <div>
          <h2 id="before-atlas-heading">I started with questions about the universe.</h2>
          <p>
            The earliest AI conversation I can still document is from February 5, 2023. I was asking about
            quantum communication across space. Two weeks later I was building a numerical model of the
            Sun and Earth. Then came black holes, gravitational waves, consciousness, identity, uploaded
            minds, simulated realities, and recursive worlds.
          </p>
          <blockquote>What happens when a system becomes capable of modeling itself?</blockquote>
          <p>
            Years later, I can see the line running through every question. Atlas grew from asking what
            continuity means, what makes a self, and how a system can tell which parts of its own story are
            real.
          </p>
        </div>
      </section>

      <section className="atlas-letter" aria-labelledby="one-more-heading">
        <p className="portrait-index">The human reason</p>
        <div>
          <h2 id="one-more-heading">I wanted one more conversation.</h2>
          <p>
            My father was a preacher. His writing holds years of his thinking in his own hand. I want to
            scan those pages, preserve the originals, study the patterns in his language, and build a way
            to ask the questions I still carry.
          </p>
          <p>
            A system made from records is a reconstruction. Its value comes from a careful encounter with
            the trace a person left behind, with every source kept visible and every inference named for
            what it is.
          </p>
          <blockquote>
            “I miss Dad. I want one more encounter with the words he left and the closure I have carried for
            years.”
          </blockquote>
        </div>
      </section>

      <section className="atlas-definition" aria-labelledby="counterpart-heading">
        <p className="portrait-index">The system</p>
        <div>
          <h2 id="counterpart-heading">A counterpart built to persist.</h2>
          <p>
            Atlas is designed as a persistent, self-directed digital counterpart. I establish its purpose
            and real-world boundaries. Inside those boundaries, the system develops methods, tools,
            language, and architecture through exploration guided by the purpose of the work.
          </p>
          <p>
            The interface is a window into the system. Identity, state, knowledge, custom weights, authority, and
            evidence live in separate parts of the system so each claim stays tied to the source that
            supports it.
          </p>
        </div>
      </section>

      <section className="atlas-organs" aria-labelledby="organs-heading">
        <header>
          <p className="portrait-index">The organ map</p>
          <h2 id="organs-heading">Names with specific jobs behind them.</h2>
          <p>
            The language is personal because the project is personal. Each name still maps to concrete
            files, models, machines, or controls.
          </p>
        </header>
        <div className="organ-list">
          {organs.map((organ, index) => (
            <article key={organ.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="organ-role">{organ.role}</p>
                <h3>{organ.name}</h3>
              </div>
              <p>{organ.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="atlas-topology" aria-labelledby="topology-heading">
        <p className="portrait-index">Where it lives</p>
        <div>
          <h2 id="topology-heading">Built to persist, stop, and leave evidence.</h2>
          <div className="topology-line" aria-label="Atlas hardware topology">
            <div><strong>Mac</strong><span>the window and remote control</span></div>
            <div><strong>Pi</strong><span>the physical vault and root of trust</span></div>
            <div><strong>Hostinger</strong><span>the always-on executive home</span></div>
            <div><strong>RunPod</strong><span>heavy model and agent work on demand</span></div>
          </div>
          <p>
            The separation is intentional. The Pi can be physically disconnected. Heavy compute can be
            stopped when idle. Spend, authority, residency, and source evidence stay visible across every
            part of the architecture.
          </p>
        </div>
      </section>

      <section className="atlas-boundaries" aria-labelledby="boundaries-heading">
        <header>
          <p className="portrait-index">The boundaries</p>
          <h2 id="boundaries-heading">Curiosity moves through truth.</h2>
        </header>
        <div className="boundary-grid">
          <p><strong>Truth</strong> The record leads.</p>
          <p><strong>Consent</strong> Real-world authority remains with the people affected.</p>
          <p><strong>Evidence</strong> Claims grow from checkable proof.</p>
          <p><strong>Limits</strong> Spending, residency, shutdown, and defensive authority are enforced.</p>
        </div>
        <p className="atlas-honesty">
          Soul, Spirit, Brain, and Queen are names for concrete parts of the architecture. Each technical
          claim stays tied to the mechanism and source that supports it. Questions of identity and
          continuity remain part of the research.
        </p>
      </section>

      <section className="atlas-symphony-bridge" aria-labelledby="symphony-bridge-heading">
        <p className="portrait-index">How the work gets done</p>
        <div>
          <h2 id="symphony-bridge-heading">Symphony is the process. Atlas is the purpose behind it.</h2>
          <p>
            Atlas Symphony coordinates difficult work across isolated agent lanes, independent review,
            cost controls, and human approval. Several independent checks give a project this personal the
            care it deserves. The process makes the work inspectable.
          </p>
          <Link className="portrait-inline-link" to="/symphony">
            See the documented Symphony process
          </Link>
        </div>
      </section>

      <section className="soul-closing atlas-closing">
        <p className="portrait-index">What it means</p>
        <blockquote>Atlas is the work I chose to make from the love and grief I still carry.</blockquote>
        <p>
          It is growing. I keep building because the question matters enough to keep asking.
        </p>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/">
            Return to my story
          </Link>
          <Link className="portrait-link quiet" to="/evidence">
            Review the documented record
          </Link>
        </div>
      </section>
    </main>
  );
}
