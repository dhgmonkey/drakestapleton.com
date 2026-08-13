import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

export function HomePage() {
  usePageMeta({
    title: "Drake Stapleton | The life behind the work",
    description:
      "The human story behind Drake Stapleton's work in chemistry, manufacturing, community leadership, software, and Atlas.",
    path: "/",
  });

  return (
    <main className="wrap portrait-wrap soul-page">
      <section className="soul-hero">
        <p className="kicker">Drake Stapleton / A human record</p>
        <h1>
          I keep finding the strength. <em>Or rather, the stubbornness.</em>
        </h1>
        <p className="soul-hero-lede">
          I have lost people, watched things I built fall apart, learned, rebuilt, and started again. I am a
          chemist, a manufacturing engineer, a husband, a former foster parent, a community builder, and an
          AI systems architect. The title changes. My drive stays.
        </p>
        <p className="soul-audience">
          This site is a record I made for myself. It gives me a place to see my own life whole.
        </p>
        <div className="portrait-actions">
          <a className="portrait-link" href="#the-life">
            Read the life behind the work
          </a>
          <Link className="portrait-link quiet" to="/atlas">
            Why I built Atlas
          </Link>
        </div>
      </section>

      <section className="claim-band" aria-labelledby="claim-heading">
        <p className="portrait-index">In my own words</p>
        <h2 id="claim-heading">This is my witness.</h2>
        <blockquote>
          “I am living as myself. I am claiming my own life and my own purpose. I decide what I can become.”
        </blockquote>
        <p>
          I have spent years learning how to see my own life clearly. This site is me choosing to look at
          everything already here.
        </p>
      </section>

      <section className="perseverance-section" aria-labelledby="perseverance-heading">
        <header>
          <p className="portrait-index">00 / The thing that carries me</p>
          <h2 id="perseverance-heading">I turn every ending into another beginning.</h2>
        </header>
        <div className="perseverance-intro">
          <p>
            I inherited that from my mother. She left high school one year short and returned in her
            forties to finish what life had interrupted. On May 5, 2016, I watched her cross the stage. Eight
            days later, she stood beside me when I received my own honors certificate at Western Kentucky.
          </p>
          <p>
            She taught me “keep going” by taking more than twenty years to finish something, and then
            finishing it.
          </p>
        </div>
        <div className="perseverance-record" aria-label="A record of rebuilding">
          <article>
            <p className="record-marker">Closed</p>
            <div>
              <h3>I grieved by building.</h3>
              <p>
                When Nemesis was dissolved in 2025, I wrote a seventeen-page constitution for a better
                community. Then I went back and helped carry the next wounded squad.
              </p>
            </div>
          </article>
          <article>
            <p className="record-marker">10 weeks</p>
            <div>
              <h3>I rebuilt what other people had written off.</h3>
              <p>
                I took a post-closure merger to 46 members and 85 percent activity. I retrained people after
                hard rounds, built the dashboards and schedules, and developed leaders who could run it on
                their own.
              </p>
            </div>
          </article>
          <article className="record-forty-five">
            <p className="record-marker">45 times</p>
            <div>
              <h3>I nearly stepped down. I kept finding a reason to stay.</h3>
              <blockquote>
                “Somehow I just keep finding the strength, or rather the stubbornness, to keep going.”
              </blockquote>
              <p>
                The reason was always the people: the person who still needed training, the officer who was
                burning out, or the member who needed someone to believe another attempt was waiting.
              </p>
            </div>
          </article>
          <article>
            <p className="record-marker">Fix it</p>
            <div>
              <h3>I built that persistence into my systems.</h3>
              <p>
                Atlas carries every broken build, difficult merge, and rejected check forward as evidence.
                Each result shapes the next attempt. My rule is plain: every repair should make the whole
                system stronger.
              </p>
            </div>
          </article>
        </div>
        <p className="perseverance-coda">
          Perseverance includes recovery. I have run myself into the ground before. Rest brings me back to
          the work while keeping the person doing it whole.
        </p>
        <Link className="portrait-inline-link perseverance-link" to="/what-i-learned">
          See what experience taught me
        </Link>
      </section>

      <section className="years-section" aria-labelledby="years-heading">
        <div className="years-number" aria-hidden="true">32</div>
        <div className="years-content">
          <p className="portrait-index">Thirty-two years alive</p>
          <h2 id="years-heading">I have already lived a life worth seeing.</h2>
          <p className="years-lede">
            Its value comes from everything I kept turning into something that could help someone else.
          </p>
          <div className="years-record">
            <p>I survived a childhood that taught me to hide, and became a man who is done hiding.</p>
            <p>I built a marriage and opened my home to foster children who needed somewhere safe.</p>
            <p>I earned two science degrees and built a career across research, product development, and manufacturing.</p>
            <p>I protected roughly $1.2 million in supply during a global disruption and served as a HAZMAT Incident Commander.</p>
            <p>I rebuilt communities after they fractured and trained people who deserved another chance.</p>
            <p>I taught myself software, trained models, designed agent systems, and funded Atlas with my own money.</p>
            <p>I turned grief into a reason to preserve memory, and hard lessons into machinery that tries again.</p>
          </div>
          <p className="years-close">
            Every choice belongs to the road that brought me here. What I have done in 32 years is
            extraordinary, and it is mine.
          </p>
        </div>
      </section>

      <section className="story-section" id="the-life" aria-labelledby="the-boy-heading">
        <div className="story-label">
          <p className="portrait-index">01 / The boy I was</p>
          <p className="story-aside">Bible Belt. Farm country. Loved, closeted, and alone.</p>
        </div>
        <div className="story-copy">
          <h2 id="the-boy-heading">I learned to disappear before I learned why.</h2>
          <p>
            I grew up gay in the Bible Belt. I was loved by a mother who fought for me, grandparents who
            rooted me, a father who chose me, and a little sister I wanted to protect from the moment I
            held her. I was surrounded by people who loved me, and I still believed that being fully known
            could cost me all of them.
          </p>
          <p>
            I worked hard at becoming the version of me each room would accept. I played football. I
            earned my place in honors classes the hard way. Other students held the valedictorian and
            salutatorian titles. I graduated with a 3.92 GPA and fought for every inch of it while moving
            through high school with autism, ADHD, and an unmedicated mind that made focus a daily contest.
          </p>
          <p>
            I wanted effortless brilliance. My own strength arrived as determination and drive. I learned
            how to return my attention to the work, ask more of myself, and keep going until the result
            reflected the effort. That habit has followed me into every field since.
          </p>
          <p className="story-emphasis">
            A person can receive love every day and still spend years unseen.
          </p>
        </div>
      </section>

      <section className="story-section story-section-blue" aria-labelledby="door-heading">
        <div className="story-label">
          <p className="portrait-index">02 / The door</p>
          <p className="story-aside">June 12, 2013</p>
        </div>
        <div className="story-copy">
          <h2 id="door-heading">The worst night of my life and the best decision of my life share a date.</h2>
          <p>
            I was nineteen, home after my first year of college, and closer to the edge than most people
            knew. I picked up a controller because it gave my hands something to do. Then a stranger named
            Saturn spoke to me in a Call of Duty lobby and invited me into a community called DHG.
          </p>
          <p>
            I said yes. That small answer gave me people who had my back, a place to lead, and the first
            proof that the person I had hidden might still be wanted. I entered as Monkey, found mentors
            and brothers, and eventually became responsible for opening that same door for other people.
          </p>
          <p className="story-emphasis light">
            Belonging found me in the last place I would have thought to look for it.
          </p>
        </div>
      </section>

      <section className="inheritance-section" aria-labelledby="inheritance-heading">
        <header>
          <p className="portrait-index">03 / What I was given</p>
          <h2 id="inheritance-heading">My life has always been about what gets handed forward.</h2>
        </header>
        <div className="inheritance-lines">
          <article>
            <p className="inheritance-name">My mother</p>
            <p>taught me to leave what hurts, keep going, and trust what I could become.</p>
          </article>
          <article>
            <p className="inheritance-name">My grandparents</p>
            <p>gave us land, roots, food, and the belief that a life is measured by what it gives away.</p>
          </article>
          <article>
            <p className="inheritance-name">The father who chose me</p>
            <p>gave me his name, taught me to be useful to other people, and showed me that family can be a decision.</p>
          </article>
          <article>
            <p className="inheritance-name">The people who found me</p>
            <p>taught me that gratitude moves forward. You turn around and reach for someone else.</p>
          </article>
        </div>
      </section>

      <section className="values-section" aria-labelledby="values-heading">
        <header>
          <p className="portrait-index">04 / What I stand for</p>
          <h2 id="values-heading">The work changes. My values stay.</h2>
        </header>
        <div className="values-list">
          <article>
            <h3>Truth</h3>
            <p>I keep the source. I separate what I saw from what I inferred. I would rather face a hard fact than live inside a soft lie.</p>
          </article>
          <article>
            <h3>Service</h3>
            <p>I believe a life is measured by what it gives away. Leadership makes another person stronger and gives the title less importance.</p>
          </article>
          <article>
            <h3>Belonging</h3>
            <p>I know what it costs to be surrounded by love and still feel unseen. I build places where people can stay fully visible.</p>
          </article>
          <article>
            <h3>Integrity</h3>
            <p>I carry what is right through friendship, position, and every uncomfortable truth.</p>
          </article>
          <article>
            <h3>Agency</h3>
            <p>A degree, employer, industry, or job title describes one part of my life. I decide how far the whole life can go.</p>
          </article>
          <article>
            <h3>Curiosity</h3>
            <p>I keep a question alive long enough to make it sharper. I want to know how the universe, a machine, a community, and a mind work from the inside.</p>
          </article>
          <article>
            <h3>Perseverance</h3>
            <p>Every hard attempt gives me information. I preserve the lesson and return with a better system.</p>
          </article>
          <article>
            <h3>Love</h3>
            <p>Family can be inherited, chosen, adopted, married, fostered, or found through a headset in the dark. Love is the reason I reach back.</p>
          </article>
        </div>
      </section>

      <section className="atlas-origin" aria-labelledby="atlas-origin-heading">
        <p className="portrait-index">05 / My father and Atlas</p>
        <div>
          <h2 id="atlas-origin-heading">Atlas began with the goodbye I still carry.</h2>
          <p>
            My father was a preacher. He left handwritten pages and years of thought behind. He died in
            2019. I still carry the words I wanted to say and the conversations I wish we could have shared.
          </p>
          <p>
            I want to scan his writing, preserve its source, and build a system capable of studying his
            language and intent. I want one more honest encounter with the words he left, grounded in the
            source and faithful to the person who wrote them. I want the closure I have carried for years.
          </p>
          <p>
            That is why Atlas is personal. The architecture grew around a human need: memory with
            sources kept visible, conversation grounded in truth, and technology that protects dignity and
            handles grief with care.
          </p>
          <Link className="portrait-inline-link" to="/atlas">
            Read what Atlas means and how it works
          </Link>
        </div>
      </section>

      <section className="work-section" aria-labelledby="work-heading">
        <header>
          <p className="portrait-index">06 / The work</p>
          <h2 id="work-heading">The fields changed. My standard stayed.</h2>
        </header>
        <div className="work-thesis">
          <p>
            Chemistry taught me to respect evidence. Manufacturing taught me that decisions have real
            consequences for safety, quality, cost, and the people doing the work. Community taught me that
            leadership opens the door when someone needs it.
          </p>
          <p>
            I carried all three into software and artificial intelligence. I earned a bachelor&apos;s degree in
            Chemistry and Biology and a master&apos;s degree in Chemistry from Western Kentucky University. I
            spent years in industrial research and manufacturing, then taught myself to build systems that
            went beyond the title on my badge.
          </p>
        </div>
        <div className="work-proof" aria-label="Selected record">
          <div>
            <strong>2016 and 2018</strong>
            <span>B.S. and M.S., Western Kentucky University</span>
          </div>
          <div>
            <strong>2018 onward</strong>
            <span>Industrial chemistry, product development, and manufacturing engineering</span>
          </div>
          <div>
            <strong>Built alongside it</strong>
            <span>Software, communities, model training, research systems, and Atlas</span>
          </div>
        </div>
        <Link className="portrait-inline-link" to="/path">
          Follow the complete education and work path
        </Link>
      </section>

      <section className="self-definition-section" aria-labelledby="self-definition-heading">
        <p className="portrait-index">07 / Self-definition</p>
        <div>
          <h2 id="self-definition-heading">I choose the size of my own life.</h2>
          <p>
            The scale of what I have built is extraordinary. I paid for the compute, spent the nights,
            trained the models, built the architecture, documented the lessons, and kept going before
            anyone had hired me to do it. This is serious work, built through my own commitment.
          </p>
          <p>
            I design and operate AI systems. Those words name work already done. The work, its value, and
            the person behind it already exist.
          </p>
        </div>
      </section>

      <section className="soul-closing">
        <p className="portrait-index">The purpose</p>
        <blockquote>“The people saved me. Now it&apos;s my turn.”</blockquote>
        <p>
          Everything else is implementation: the degrees, the products, the systems, the communities, the
          models, the infrastructure. The purpose is to reach back.
        </p>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/atlas">
            Enter the Atlas story
          </Link>
          <Link className="portrait-link quiet" to="/evidence">
            Review the documented record
          </Link>
        </div>
      </section>

      <footer className="footer portrait-footer">
        Drake Stapleton · <a href="https://github.com/dhgmonkey">github.com/dhgmonkey</a>
        <br />
        This story is shared by choice. Private records, credentials, and other people&apos;s private lives remain private.
      </footer>
    </main>
  );
}
