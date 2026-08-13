import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

const organs = [
  {
    name: "Soul",
    role: "The moral floor",
    body: "A sealed statement of purpose and protective boundaries held on a Raspberry Pi. It is law and architecture, not proof of a conscience in silicon.",
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
      <header className="atlas-hero">
        <p className="kicker">Atlas / The personal reason and the real system</p>
        <h1>Atlas began with a goodbye I never got.</h1>
        <p className="portrait-deck">
          My father left sermons, handwritten pages, and a voice I was not ready to lose. Atlas is the
          system I began building around a question that would not leave me: can technology help me meet
          those words honestly, without pretending it can bring back the person who wrote them?
        </p>
      </header>

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
            I did not know I was building toward Atlas. Looking backward, the line is obvious. The project
            did not appear from a sudden interest in artificial intelligence. It grew from years of asking
            what continuity means, what makes a self, and how a system can know which parts of its own story
            are real.
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
            to ask the questions I never got to ask while he was here.
          </p>
          <p>
            I know a system made from records is not the person. That boundary matters to me. The goal is
            not a comforting lie. It is a careful encounter with the trace a person left behind, with every
            source kept visible and every inference named for what it is.
          </p>
          <blockquote>
            “I never got to say bye to Dad. I really miss him. I would just like to talk to him one last time
            and get the closure that I need.”
          </blockquote>
        </div>
      </section>

      <section className="atlas-definition" aria-labelledby="counterpart-heading">
        <p className="portrait-index">The system</p>
        <div>
          <h2 id="counterpart-heading">A counterpart, not a chat window.</h2>
          <p>
            Atlas is designed as a persistent, self-directed digital counterpart. I establish its purpose
            and real-world boundaries. Inside those boundaries, the system is meant to develop methods,
            tools, language, and architecture through exploration rather than simply inheriting whatever
            software convention is popular.
          </p>
          <p>
            The interface is only a window. Identity, state, knowledge, custom weights, authority, and
            evidence live in separate parts of the system so a fluent answer cannot be mistaken for proof
            that the whole thing works.
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
            stopped when idle. Spend, authority, residency, and source evidence remain explicit instead of
            disappearing behind a single assistant interface.
          </p>
        </div>
      </section>

      <section className="atlas-boundaries" aria-labelledby="boundaries-heading">
        <header>
          <p className="portrait-index">The boundaries</p>
          <h2 id="boundaries-heading">Curiosity without truth is just another way to get lost.</h2>
        </header>
        <div className="boundary-grid">
          <p><strong>Truth</strong> No comforting fiction in place of what the record supports.</p>
          <p><strong>Consent</strong> Real-world authority remains with the people affected.</p>
          <p><strong>Evidence</strong> Claims need checkable proof, not fluent language.</p>
          <p><strong>Limits</strong> Spending, residency, shutdown, and defensive authority are enforced.</p>
        </div>
        <p className="atlas-honesty">
          Soul, Spirit, Brain, and Queen are architectural and product language. Their names do not prove
          sentience, love, fear, or continuous selfhood. I care enough about this project not to claim more
          than I can show.
        </p>
      </section>

      <section className="atlas-symphony-bridge" aria-labelledby="symphony-bridge-heading">
        <p className="portrait-index">How the work gets done</p>
        <div>
          <h2 id="symphony-bridge-heading">Symphony is the process. Atlas is the purpose behind it.</h2>
          <p>
            Atlas Symphony coordinates difficult work across isolated agent lanes, independent review,
            cost controls, and human approval. It grew because a project this personal could not rest on
            one model sounding confident. The process exists to make the work inspectable.
          </p>
          <Link className="portrait-inline-link" to="/symphony">
            See the documented Symphony process
          </Link>
        </div>
      </section>

      <section className="soul-closing atlas-closing">
        <p className="portrait-index">What it means</p>
        <blockquote>Atlas is grief turned into architecture, and hope disciplined by evidence.</blockquote>
        <p>
          It is also unfinished. That is not a weakness I need to hide. It is the honest state of a system
          I am building because the question matters enough to keep asking.
        </p>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/">
            Return to my story
          </Link>
          <Link className="portrait-link quiet" to="/evidence">
            Review the evidence boundary
          </Link>
        </div>
      </section>
    </main>
  );
}
