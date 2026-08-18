import { useSearchParams } from "react-router-dom";
import { InterestForm } from "../components/InterestForm";
import { PageIntro } from "../components/PagePrimitives";
import { usePageMeta } from "../lib/usePageMeta";

export function InterestPage() {
  const [params] = useSearchParams();
  const received = params.get("received") === "1";

  usePageMeta("/interest");

  return (
    <main className="portrait-page interest-page">
      <div className="page-boundary">
        <PageIntro eyebrow="Interest" title="Drop your card here.">
          <p>
            I work with companies seeking a specialized AI Architect for full-time and contractor engagements.
          </p>
          <p>
            If this work is useful, leave a name and email. Mark a full-time or contractor interest if you
            want to hire me. Open a few questions if you want, and ask me one of yours.
          </p>
        </PageIntro>

        {received ? (
          <div className="interest-received" role="status">
            <p className="portrait-index">Received</p>
            <h2>I have your card.</h2>
            <p>I will write back from this desk.</p>
          </div>
        ) : (
          <InterestForm />
        )}
      </div>
    </main>
  );
}
