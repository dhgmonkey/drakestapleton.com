import { Link } from "react-router-dom";
import { ChapterNav, SectionLead } from "../components/PagePrimitives";
import { usePageMeta } from "../lib/usePageMeta";

const chapters = [
  { href: "#formation", number: "01", label: "Formation" },
  { href: "#drive", number: "02", label: "Drive" },
  { href: "#people", number: "03", label: "People" },
  { href: "#work", number: "04", label: "Work" },
  { href: "#atlas", number: "05", label: "Atlas" },
];

const perseverance = [
  {
    marker: "Closed",
    title: "I grieved by building.",
    body: "When Nemesis was dissolved in 2025, I wrote a seventeen-page constitution for a better community. Then I returned and helped carry the next wounded squad.",
  },
  {
    marker: "10 weeks",
    title: "I rebuilt what other people had written off.",
    body: "I took a post-closure merger to 46 members and 85 percent activity. I retrained people after hard rounds, built the dashboards and schedules, and developed leaders who could run it on their own.",
  },
  {
    marker: "45 times",
    title: "I nearly stepped down. I kept finding a reason to stay.",
    body: "The reason was always the people: the member who needed training, the officer who was burning out, or the person who needed someone to believe another attempt was waiting.",
    quote: "Somehow I just keep finding the strength, or rather the stubbornness, to keep going.",
  },
  {
    marker: "Fix it",
    title: "I built that persistence into my systems.",
    body: "Atlas carries every broken build, difficult merge, and rejected check forward as evidence. Each result shapes the next attempt. Every repair should make the whole system stronger.",
  },
];

const lifeRecord = [
  "I survived a childhood that taught me to hide, and became a man who lives in the open.",
  "I built a marriage and opened my home to foster children who needed somewhere safe.",
  "I earned two science degrees and built a career across research, product development, and manufacturing.",
  "I protected roughly $1.2 million in supply during a global disruption and served as a HAZMAT Incident Commander.",
  "I rebuilt fractured communities and trained people who deserved another chance.",
  "I taught myself software, trained models, designed AI systems, and funded Atlas with my own money.",
  "I turned grief into a reason to preserve memory, and hard lessons into machinery that tries again.",
];

const inheritances = [
  ["My mother", "taught me to leave what hurts, keep going, and trust what I could become."],
  ["My grandparents", "gave us land, roots, food, and the belief that a life is measured by what it gives away."],
  ["The father who chose me", "gave me his name, taught me to be useful, and showed me that family can be a decision."],
  ["The people who found me", "taught me that gratitude moves forward. You turn around and reach for someone else."],
];

const values = [
  ["Truth", "I keep the source. I separate what I saw from what I inferred. I face hard facts with open eyes."],
  ["Service", "Leadership makes another person stronger and gives the title less importance."],
  ["Belonging", "I build places where people can stay fully visible."],
  ["Integrity", "I carry what is right through friendship, position, and every uncomfortable truth."],
  ["Agency", "A title describes one part of my life. I decide how far the whole life can go."],
  ["Curiosity", "I keep a question alive long enough to make it sharper."],
  ["Perseverance", "Every hard attempt gives me information. I preserve the lesson and return with a better system."],
  ["Love", "Family can be inherited, chosen, adopted, married, fostered, or found through a headset in the dark."],
];

export function HomePage() {
  usePageMeta({
    title: "Drake Stapleton | The life behind the work",
    description:
      "The human story behind Drake Stapleton's work in chemistry, manufacturing, community leadership, software, and Atlas.",
    path: "/",
  });

  return (
    <main className="portrait-page home-page">
      <section className="home-hero page-boundary">
        <div className="hero-copy">
          <p className="kicker">Drake Stapleton / Thirty-two years alive</p>
          <h1>
            I keep finding <span>the strength.</span>
          </h1>
          <blockquote>Or rather, the stubbornness.</blockquote>
          <p className="home-hero-lede">
            I am a chemist, a manufacturing engineer, a husband, a former foster parent, a community
            builder, and an AI systems architect. My work crosses fields. My drive stays.
          </p>
          <p className="home-hero-purpose">
            This is a record I made for myself. It gives me a place to see my own life whole.
          </p>
        </div>
        <aside className="hero-identity" aria-label="The life in brief">
          <span>Born 1994</span>
          <span>Raised in Tennessee</span>
          <span>College in Kentucky</span>
          <span>Springfield, Missouri today</span>
          <span>Two science degrees</span>
          <span>Builder by choice</span>
        </aside>
      </section>

      <div className="page-boundary">
        <ChapterNav links={chapters} />
      </div>

      <section className="manifesto-band">
        <div className="page-boundary manifesto-inner">
          <p className="portrait-index">In my own words</p>
          <blockquote>
            “I am living as myself. I am claiming my own life and my own purpose. I decide what I can become.”
          </blockquote>
          <p>I have spent years learning how to see my own life clearly. This site is me choosing to look.</p>
        </div>
      </section>

      <section className="home-chapter page-boundary" id="formation">
        <SectionLead eyebrow="01 / Formation" title="I learned how to fight for every inch.">
          <p>The beginning gave me love, pressure, questions, and the habit of earning my way forward.</p>
        </SectionLead>
        <div className="formation-grid">
          <article className="feature-story">
            <p className="chapter-tag">The boy I was</p>
            <h3>I learned to disappear before I learned why.</h3>
            <p>
              I grew up gay in Tennessee, in the Bible Belt. My mother fought for me. My grandparents rooted
              me. My father chose me. My little sister gave me someone to protect. I was surrounded by love
              while believing that being fully known could cost me everything.
            </p>
            <p>
              I played football, earned my place in honors classes the hard way, and learned how to look
              capable while writing my own manual for living.
            </p>
          </article>
          <article className="grade-card">
            <p className="chapter-tag">The drive behind the grades</p>
            <strong>3.92</strong>
            <h3>I fought for that GPA.</h3>
            <p>
              Other students held the valedictorian and salutatorian titles. Autism and ADHD made focus a
              daily contest, and I moved through high school unmedicated.
            </p>
            <p>
              I wanted effortless brilliance. Determination became my advantage. It carried me through high
              school and college. During my first year of graduate school, willpower finally ran out. I
              started medication. It gave me a new way to focus and keep moving.
            </p>
          </article>
          <article className="door-story">
            <div>
              <p className="chapter-tag">June 12, 2013</p>
              <h3>The worst night of my life and the best decision of my life share a date.</h3>
            </div>
            <div>
              <p>
                I was nineteen and closer to the edge than most people knew. I picked up a controller. A
                stranger named Saturn spoke to me in a Call of Duty lobby and invited me into DHG.
              </p>
              <p>
                I said yes. That answer gave me people who had my back, a place to lead, and proof that the
                person I had hidden could still be wanted. Belonging found me through a headset in the dark.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="home-chapter drive-chapter" id="drive">
        <div className="page-boundary">
          <SectionLead eyebrow="02 / Drive" title="I turn every ending into another beginning.">
            <p>
              My mother returned to school in her forties and finished what life had interrupted. I watched
              her cross the stage on May 5, 2016. Eight days later, she stood beside me at Western Kentucky.
            </p>
          </SectionLead>
          <div className="perseverance-ledger">
            {perseverance.map((item, index) => (
              <article key={item.marker}>
                <div className="ledger-number">{String(index + 1).padStart(2, "0")}</div>
                <p className="ledger-marker">{item.marker}</p>
                <div>
                  <h3>{item.title}</h3>
                  {item.quote && <blockquote>“{item.quote}”</blockquote>}
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="recovery-note">
            <p className="chapter-tag">What I know now</p>
            <p>Perseverance includes recovery. Rest brings me back to the work while keeping the person doing it whole.</p>
            <Link to="/what-i-learned">Read the lessons I carried forward</Link>
          </div>
        </div>
      </section>

      <section className="life-record" aria-labelledby="life-record-title">
        <div className="page-boundary life-record-grid">
          <div className="life-record-number" aria-hidden="true">32</div>
          <div>
            <p className="portrait-index">A life worth seeing</p>
            <h2 id="life-record-title">I have already built an extraordinary life.</h2>
            <div className="life-record-list">
              {lifeRecord.map((item, index) => (
                <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-chapter page-boundary" id="people">
        <SectionLead eyebrow="03 / People" title="My life is shaped by what gets handed forward." />
        <div className="inheritance-grid">
          {inheritances.map(([name, body]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="values-block">
          <div className="values-intro">
            <p className="chapter-tag">What I stand for</p>
            <h3>The work changes. My values stay.</h3>
          </div>
          <div className="values-grid">
            {values.map(([name, body]) => (
              <article key={name}>
                <h4>{name}</h4>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-chapter work-chapter" id="work">
        <div className="page-boundary">
          <SectionLead eyebrow="04 / Work" title="The fields changed. My standard stayed.">
            <p>
              Chemistry taught me to respect evidence. Manufacturing taught me that decisions carry real
              consequences. Community taught me to open the door when someone needs it.
            </p>
          </SectionLead>
          <div className="work-record">
            <article><strong>2016</strong><span>B.S. in Chemistry and Biology, Western Kentucky University</span></article>
            <article><strong>2018</strong><span>M.S. in Chemistry, Western Kentucky University</span></article>
            <article><strong>2018 onward</strong><span>Industrial research, product development, and manufacturing engineering</span></article>
            <article><strong>Built alongside it</strong><span>Software, communities, model training, research systems, and Atlas</span></article>
          </div>
          <Link className="text-link" to="/path">Follow the complete education and work path</Link>
        </div>
      </section>

      <section className="atlas-home" id="atlas">
        <div className="page-boundary atlas-home-grid">
          <div>
            <p className="portrait-index">05 / My father and Atlas</p>
            <h2>Atlas began with the goodbye I still carry.</h2>
          </div>
          <div>
            <p>
              My father was a preacher. He left handwritten pages and years of thought behind. He died in
              2019. I still carry the words I wanted to say and the conversations I wish we could have shared.
            </p>
            <p>
              I want one more honest encounter with the words he left, grounded in the source and faithful
              to the person who wrote them. Atlas grew around memory, truth, dignity, and a grief I chose to
              turn into work.
            </p>
            <Link to="/atlas">Read why Atlas exists and how it works</Link>
          </div>
        </div>
      </section>

      <section className="home-closing page-boundary">
        <p className="portrait-index">Self-definition</p>
        <h2>I choose the size of my own life.</h2>
        <p>
          I paid for the compute, spent the nights, trained the models, built the architecture, documented
          the lessons, and kept going. I design and operate AI systems. Those words name work already done.
          The work, its value, and the person behind it already exist.
        </p>
        <blockquote>“The people saved me. Now it&apos;s my turn.”</blockquote>
        <div className="home-closing-actions">
          <Link to="/evidence">Explore the documented record</Link>
          <a href="https://github.com/dhgmonkey">Visit GitHub</a>
        </div>
      </section>
    </main>
  );
}
