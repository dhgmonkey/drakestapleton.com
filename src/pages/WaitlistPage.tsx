import { FormEvent, useMemo, useState } from "react";
import { usePageMeta } from "../lib/usePageMeta";

const WAITLIST_ENDPOINT =
  import.meta.env.VITE_WAITLIST_ENDPOINT ||
  "https://waitlist-api.drakestapleton.com:8443/api/signup";

type FormState = "idle" | "submitting" | "success" | "error";

export function WaitlistPage() {
  usePageMeta({
    title: "Drake Stapleton | A Life in People, Systems, and Atlas",
    description:
      "A human portrait and body of work by Drake Stapleton is in development. Join the waiting list for the first public release.",
    path: "/",
  });

  const openedAt = useMemo(() => Date.now(), []);
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function joinWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim();
    const consent = form.get("consent") === "on";
    const website = String(form.get("website") || "");

    if (!email || !consent) {
      setState("error");
      setMessage("Enter your email and confirm how it will be used.");
      return;
    }

    setState("submitting");
    setMessage("");

    try {
      const response = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          consent,
          consentVersion: "2026-08-13-v1",
          website,
          elapsedMs: Date.now() - openedAt,
        }),
      });

      if (!response.ok) {
        throw new Error(`waitlist request failed with ${response.status}`);
      }

      setState("success");
      setMessage("You are on the list. I will write when the first public release is ready.");
      event.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("The list could not save your email. Please try again in a moment.");
    }
  }

  return (
    <main className="waitlist-shell">
      <section className="waitlist-copy">
        <p className="waitlist-kicker">Drake Stapleton / Agentic architect</p>
        <h1>
          A life in people, systems, and <em>Atlas.</em>
        </h1>
        <p className="waitlist-lede">
          I am writing the full story now: chemistry, manufacturing, communities, my father, the path into
          agent architecture, and why I kept building when nobody was asking me to.
        </p>
        <p className="waitlist-rule">The work is technical. The reason is human.</p>
      </section>

      <aside className="waitlist-panel" aria-labelledby="waitlist-title">
        <p className="waitlist-number">Private development / 2026</p>
        <h2 id="waitlist-title">Join the waiting list.</h2>
        <p>
          The portfolio is intentionally closed while I reconcile the record and finish telling it in my
          own voice. Leave one email and I will let you know when it opens.
        </p>

        {state === "success" ? (
          <div className="waitlist-success" role="status">
            <span>Received</span>
            <p>{message}</p>
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={joinWaitlist} noValidate>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={254}
              required
              disabled={state === "submitting"}
            />
            <div className="waitlist-honeypot" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <label className="waitlist-consent">
              <input name="consent" type="checkbox" required disabled={state === "submitting"} />
              <span>
                Use my email only to tell me when this portfolio opens. Do not sell or share it.
              </span>
            </label>
            <button type="submit" disabled={state === "submitting"}>
              {state === "submitting" ? "Joining..." : "Join the list"}
            </button>
            {message ? (
              <p className="waitlist-message" role="alert">
                {message}
              </p>
            ) : null}
          </form>
        )}

        <p className="waitlist-privacy">
          Stored: email, consent version, and signup time. No tracking pixels, advertising profile, or
          public list. You can ask to be removed at any time.
        </p>
      </aside>

      <footer className="waitlist-footer">
        <span>Drake Stapleton</span>
        <span>Louisville, Kentucky</span>
      </footer>
    </main>
  );
}
