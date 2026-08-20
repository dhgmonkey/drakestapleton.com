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
        <PageIntro eyebrow="Partnership" title="Put your card on my desk.">
          <p>
            I work with companies and builders as an independent AI architecture partner. We define the
            problem, authority, evidence, and finish line together.
          </p>
          <p>
            If this work fits what you are building, leave a name and email. Choose the shape of the
            partnership, open a few questions if you want, and ask me one of yours.
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
