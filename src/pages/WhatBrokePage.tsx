import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

const failures = [
  {
    when: "Community / 2025",
    title: "The squad I led was closed.",
    broke:
      "A private promise and a public decision did not match. The community I had held together was dissolved, and the story of what happened began changing around me.",
    next:
      "I documented the record, wrote a seventeen-page constitution for the kind of community I believed should exist, returned, and helped rebuild the next squad.",
  },
  {
    when: "MobHub / Production",
    title: "The deployment path fought the product.",
    broke:
      "A leftover Docker path conflicted with the real systemd service. Remote SSH found the wrong Node runtime. Standalone builds did not carry static assets where the server expected them.",
    next:
      "Each failure became a deployment rule: one service owner, an explicit runtime path, a deliberate artifact copy, migration gates, backoff, and health checks.",
  },
  {
    when: "Defiant / Production",
    title: "Security controls broke the live application.",
    broke:
      "Inherited file permissions, content-security policy, redirects, and a database safety setting each stopped real flows at different points. One release had to roll back.",
    next:
      "I treated the controls as evidence, not obstacles to disable. Permissions, policies, and migration state were repaired, and a failed release stayed failed until the system recovered.",
  },
  {
    when: "Atlas / Model training",
    title: "Training completed. The merge did not.",
    broke:
      "A personal Devstral adapter trained on an H100, then the first merge failed on Float8 promotion. A second live merge attempt failed because the model configuration did not fit the generic loader.",
    next:
      "The source was repaired and private inference reached a live endpoint through the adapter path. I still do not claim that the final merged-model export succeeded.",
  },
  {
    when: "Atlas / Evaluation",
    title: "A beautiful score turned out to be wrong.",
    broke:
      "A synthetic fixture scored 90 out of 100 because the evaluator rewarded the shape of a convincing answer more than its provenance.",
    next:
      "The method was repaired. The score fell to 58, with a human score of 54. The lower number was the better result because it told the truth.",
  },
  {
    when: "Personal / The harder lesson",
    title: "I kept going past what my body could carry.",
    broke:
      "I once treated being the person who never stops as permission to become the person who never rests. That is not strength. It is another way of disappearing.",
    next:
      "I am learning that stopping to recover is not the same as giving up. Perseverance means returning without abandoning the person doing the work.",
  },
];

export function WhatBrokePage() {
  usePageMeta({
    title: "What Broke | Drake Stapleton",
    description: "The failures, repairs, and returns that shaped Drake Stapleton's work and life.",
    path: "/what-broke",
  });

  return (
    <main className="wrap portrait-wrap broke-page">
      <header className="broke-hero">
        <p className="kicker">Failure is part of the record</p>
        <h1>What broke matters because I came back to it.</h1>
        <p className="portrait-deck">
          I do not want a website that makes the work look inevitable. The strongest evidence of who I am
          is what I did after the plan met reality and reality said no.
        </p>
      </header>

      <section className="failure-list" aria-label="Failures and repairs">
        {failures.map((failure, index) => (
          <article key={failure.title}>
            <div className="failure-label">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{failure.when}</p>
            </div>
            <div className="failure-story">
              <h2>{failure.title}</h2>
              <dl>
                <div>
                  <dt>What happened</dt>
                  <dd>{failure.broke}</dd>
                </div>
                <div>
                  <dt>What I did next</dt>
                  <dd>{failure.next}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </section>

      <section className="broke-rule">
        <p className="portrait-index">The rule I kept</p>
        <blockquote>Ordinary failure can and should be fixed.</blockquote>
        <p>
          Not hidden. Not renamed as success. Fixed, learned from, and carried into the next attempt.
        </p>
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
