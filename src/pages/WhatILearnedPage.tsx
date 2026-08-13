import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

const lessons = [
  {
    when: "Community / 2025",
    title: "I carried the truth through a community ending.",
    experience:
      "A private promise and a public decision pointed in different directions. The community I had held together was dissolved, and the story began changing around me.",
    lesson:
      "I documented the record, wrote a seventeen-page constitution for the community I believed should exist, returned, and helped rebuild the next squad.",
  },
  {
    when: "MobHub / Production",
    title: "Production taught me to make every path explicit.",
    experience:
      "The live service used systemd while an older Docker path still existed. Remote SSH found a different Node runtime. Standalone builds needed an explicit static asset step.",
    lesson:
      "Each lesson became a deployment rule: one service owner, an explicit runtime path, a deliberate artifact copy, migration gates, backoff, and health checks.",
  },
  {
    when: "Defiant / Production",
    title: "Security controls made the application stronger.",
    experience:
      "Inherited file permissions, content-security policy, redirects, and a database safety setting interrupted real flows at different points. One release returned to its prior version.",
    lesson:
      "I treated every control as a useful signal. I repaired the permissions, policies, and migration state, then verified the recovery before moving forward.",
  },
  {
    when: "Atlas / Model training",
    title: "Model training gave me two deeper loader lessons.",
    experience:
      "A personal Devstral adapter trained on an H100. The first merge exposed Float8 promotion behavior. The second showed how the model configuration differed from the generic loader.",
    lesson:
      "I repaired the source and brought private inference live through the adapter path. A final merged export remains a future milestone.",
  },
  {
    when: "Atlas / Evaluation",
    title: "A score of 90 invited a closer look.",
    experience:
      "A synthetic fixture scored 90 out of 100 because the evaluator rewarded the shape of a convincing answer more than the source behind it.",
    lesson:
      "I repaired the method. The score became 58, with a human score of 54. The lower number gave me a truer picture of the system.",
  },
  {
    when: "Personal / The harder lesson",
    title: "I learned the cost of carrying too much.",
    experience:
      "I once carried the work past my body’s limits. Recovery taught me to include myself among the people I am responsible for protecting.",
    lesson:
      "Perseverance now means returning with my health, judgment, and sense of self intact.",
  },
];

export function WhatILearnedPage() {
  usePageMeta({
    title: "What I Learned | Drake Stapleton",
    description: "The experiences, lessons, and returns that shaped Drake Stapleton's work and life.",
    path: "/what-i-learned",
  });

  return (
    <main className="wrap portrait-wrap learned-page">
      <header className="learned-hero">
        <p className="kicker">Learning is part of the record</p>
        <h1>Every hard turn taught me how to return.</h1>
        <p className="portrait-deck">
          The strongest evidence of who I am lives in the choices I made when a plan met reality. I learned,
          repaired what I could, and carried the lesson forward.
        </p>
      </header>

      <section className="lesson-list" aria-label="Lessons and repairs">
        {lessons.map((lesson, index) => (
          <article key={lesson.title}>
            <div className="lesson-label">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{lesson.when}</p>
            </div>
            <div className="lesson-story">
              <h2>{lesson.title}</h2>
              <dl>
                <div>
                  <dt>The experience</dt>
                  <dd>{lesson.experience}</dd>
                </div>
                <div>
                  <dt>What I carried forward</dt>
                  <dd>{lesson.lesson}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </section>

      <section className="learned-rule">
        <p className="portrait-index">The rule I carry</p>
        <blockquote>Every problem deserves an honest repair.</blockquote>
        <p>I preserve the lesson, strengthen the system, and carry both into the next attempt.</p>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/">
            Return to the whole story
          </Link>
          <Link className="portrait-link quiet" to="/evidence">
            Review the evidence record
          </Link>
        </div>
      </section>
    </main>
  );
}
