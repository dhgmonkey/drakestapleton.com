import { Link } from "react-router-dom";
import { PageIntro } from "../components/PagePrimitives";
import { usePageMeta } from "../lib/usePageMeta";

const responsePath = [
  {
    step: "01",
    label: "Observe",
    title: "Watch the house",
    body: "Read the IDS, DNS, identity, endpoint, and firewall signals already present in the customer security path.",
  },
  {
    step: "02",
    label: "Recognize",
    title: "Name the intrusion",
    body: "Correlate attacker behavior across sensors, separate routine noise from a break-in, and state the risk in plain language.",
  },
  {
    step: "03",
    label: "Contain",
    title: "End the session",
    body: "Choose one tested action inside the customer estate: cut the session, isolate the host, block the path, or revoke the token.",
  },
  {
    step: "04",
    label: "Preserve",
    title: "Keep the trail",
    body: "Record the signal, decision, action, time, and result for incident response, counsel, and law enforcement.",
  },
];

const deliveryPaths = [
  {
    marker: "Model license",
    title: "License the model.",
    body: "Run AEGIS in the customer stack, air gap, and key boundary. The weights remain governed by contract and the customer deployment policy.",
  },
  {
    marker: "Complete stack",
    title: "Deploy the defense stack.",
    body: "Place the model, collectors, policy engine, and runbooks in the customer SOC path across firewall, IDS, DNS, identity, and endpoint controls.",
  },
];

const evaluationSlices = [
  { label: "Tool use", score: "45/45", rate: "100%" },
  { label: "Coding", score: "8/10", rate: "80%" },
  { label: "Science", score: "3/4", rate: "75%" },
  { label: "Cyber", score: "3/3", rate: "100%" },
];

const authorityBoundaries = [
  {
    title: "Customer estate",
    body: "Every automated action targets systems, devices, accounts, and sessions the customer is authorized to control.",
  },
  {
    title: "Short allow-list",
    body: "Automatic containment is limited to tested actions with explicit policy, ownership, rollback, and evidence rules.",
  },
  {
    title: "Human authority",
    body: "Ambiguous attribution, broader changes, and activity beyond the customer edge require a human decision.",
  },
  {
    title: "Evidence first",
    body: "The record survives the response so incident teams, counsel, insurers, and law enforcement can inspect what happened.",
  },
];

export function AegisPage() {
  usePageMeta("/aegis");

  return (
    <main className="wrap portrait-wrap aegis-page">
      <PageIntro
        eyebrow="AEGIS / A defensive extension of Atlas"
        title="The defender on your side of the door."
        className="aegis-hero"
      >
        <p>
          I am extending Atlas into AEGIS: a licensed, on-prem defender designed to read the security
          signals a company already owns, recognize an intrusion, and contain it inside that company&apos;s
          authorized estate.
        </p>
      </PageIntro>

      <div className="aegis-scope-strip" aria-label="AEGIS product scope">
        <span>Atlas extension</span>
        <span>Customer-authorized estates</span>
        <span>On-prem deployment</span>
        <span>Evidence-bearing response</span>
      </div>

      <blockquote className="aegis-tagline">
        “Aegis online. I watch the logs. You touchy. I knock you out. Period.”
      </blockquote>

      <section className="aegis-house" aria-labelledby="aegis-house-heading">
        <p className="portrait-index">The idea</p>
        <div>
          <h2 id="aegis-house-heading">The network is the house.</h2>
          <p>
            Customer data, payroll, source code, models, and trade secrets live behind the same boundary.
            AEGIS treats that boundary like a house: watch the door, recognize forced entry, remove access,
            and preserve the record.
          </p>
          <p className="aegis-law">
            “Stand your ground” is the product metaphor. Customer authorization defines the ground.
          </p>
        </div>
      </section>

      <section className="aegis-response" aria-labelledby="aegis-response-heading">
        <header className="aegis-section-lead">
          <p className="portrait-index">The response path</p>
          <div>
            <h2 id="aegis-response-heading">See the play. Close the path. Keep the proof.</h2>
            <p>
              AEGIS sits above the customer&apos;s existing sensors and controls. The sequence stays short,
              inspectable, and bounded to the customer&apos;s authority.
            </p>
          </div>
        </header>
        <ol className="aegis-flow" aria-label="AEGIS response sequence">
          {responsePath.map((stage) => (
            <li key={stage.step}>
              <span>{stage.step}</span>
              <p>{stage.label}</p>
              <h3>{stage.title}</h3>
              <div>{stage.body}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="aegis-knockout" aria-labelledby="aegis-knockout-heading">
        <p className="portrait-index">One decisive action</p>
        <h2 id="aegis-knockout-heading">Cut the session. Isolate the host. Close the door. Keep the evidence.</h2>
        <p>
          That is the knockout: the intruder loses access to this house, while the customer retains the
          systems, the authority, and the trail.
        </p>
        <div className="aegis-actions" aria-label="AEGIS containment actions">
          <span>Terminate session</span>
          <span>Isolate host</span>
          <span>Block path</span>
          <span>Revoke token</span>
          <span>Preserve trail</span>
        </div>
      </section>

      <section className="aegis-offer" aria-labelledby="aegis-offer-heading">
        <header className="aegis-section-lead">
          <p className="portrait-index">The offer</p>
          <div>
            <h2 id="aegis-offer-heading">Two ways to put AEGIS inside the boundary.</h2>
            <p>
              The customer operates its own wire. Inference and response can remain inside the customer
              estate, with the vendor cloud outside the decision path.
            </p>
          </div>
        </header>
        <div className="aegis-offer-grid">
          {deliveryPaths.map((path) => (
            <article className="aegis-offer-card" key={path.title}>
              <p>{path.marker}</p>
              <h3>{path.title}</h3>
              <div>{path.body}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="aegis-evaluation" aria-labelledby="aegis-evaluation-heading">
        <div className="aegis-evaluation-intro">
          <div>
            <p className="portrait-index">Training evidence / August 20, 2026</p>
            <h2 id="aegis-evaluation-heading">The first AEGIS adapter has a real receipt.</h2>
          </div>
          <div className="aegis-total">
            <strong>59/62</strong>
            <span>Frozen suite result</span>
          </div>
        </div>

        <p className="aegis-evaluation-copy">
          A Grok-led training session continued the Devstral atlas-tools lineage into a rank-16 AEGIS LoRA.
          The run used one epoch at a 5e-6 learning rate on the Devstral-Small-2-24B-Instruct-abliterated
          base, then evaluated the vaulted adapter against the project&apos;s frozen 62-case suite.
        </p>

        <div className="aegis-eval-grid" aria-label="AEGIS frozen evaluation results">
          {evaluationSlices.map((slice) => (
            <article key={slice.label}>
              <p>{slice.label}</p>
              <strong>{slice.score}</strong>
              <span>{slice.rate}</span>
            </article>
          ))}
        </div>

        <div className="aegis-eval-boundary">
          <div>
            <p className="aegis-eval-label">The three visible misses</p>
            <ul>
              <li>JSONL parsing produced an indentation error.</li>
              <li>POSIX path joining missed a slash-normalization case.</li>
              <li>The RC science answer missed the required target.</li>
            </ul>
          </div>
          <div>
            <p className="aegis-eval-label">Current artifact state</p>
            <p>
              The adapter is sealed in the Pi vault, and a private model-repository upload receipt was recorded
              at 23:00 UTC. The artifact receipt marks the overall evaluation gate incomplete. Merge,
              quantization, production routing, and a serving bind on port 18000 remain future gates.
            </p>
            <p>
              HumanEval remains unrun on this August 20 lineage. The earlier 62.2% versus 89.6% HumanEval
              comparison belongs to a separate August 18 e2 track.
            </p>
          </div>
        </div>
      </section>

      <section className="aegis-boundary" id="boundary" aria-labelledby="aegis-boundary-heading">
        <header className="aegis-section-lead">
          <p className="portrait-index">The authority line</p>
          <div>
            <h2 id="aegis-boundary-heading">The fight ends at the door.</h2>
            <p>
              AEGIS studies attacker behavior so it can close the path inside the customer estate. The
              customer owns the policy, the automated allow-list, and every escalation decision.
            </p>
          </div>
        </header>
        <div className="aegis-boundary-grid">
          {authorityBoundaries.map((boundary) => (
            <article className="aegis-boundary-card" key={boundary.title}>
              <h3>{boundary.title}</h3>
              <p>{boundary.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aegis-guidance" aria-labelledby="aegis-guidance-heading">
        <p className="portrait-index">Established response practice</p>
        <div>
          <h2 id="aegis-guidance-heading">Contain here. Preserve here. Escalate through people.</h2>
          <p>
            CISA incident-response guidance describes isolation, firewall filtering, access blocking,
            credential and key rotation, and evidence preservation. U.S. Department of Justice guidance
            warns victim organizations against accessing, damaging, or impairing another network.
          </p>
          <div className="aegis-source-links">
            <a
              href="https://www.cisa.gov/sites/default/files/2024-08/Federal_Government_Cybersecurity_Incident_and_Vulnerability_Response_Playbooks_508C.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Read the CISA incident response playbook
            </a>
            <a
              href="https://www.justice.gov/sites/default/files/opa/speeches/attachments/2015/04/29/criminal_division_guidance_on_best_practices_for_victim_response_and_reporting_cyber_incidents2.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Read the DOJ victim response guidance
            </a>
          </div>
          <p className="aegis-counsel">Customer counsel governs legal interpretation and jurisdiction-specific duties.</p>
        </div>
      </section>

      <section className="aegis-current" aria-labelledby="aegis-current-heading">
        <p className="portrait-index">Current state</p>
        <h2 id="aegis-current-heading">A trained adapter, a documented evaluation, and a product path still being built.</h2>
        <p>
          The August 20 adapter and evaluation establish a concrete model milestone. A customer deployment
          reaches operational status after its sensor mappings, policies, failure behavior, escalation paths,
          audit trail, and live containment tests are validated on that estate.
        </p>
      </section>

      <section className="soul-closing aegis-closing">
        <p className="portrait-index">The offer, in one line</p>
        <blockquote>
          License AEGIS. Put a defender on your side of the door. If they come in, put them out on your wire
          and keep the house.
        </blockquote>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/interest">
            Discuss an AEGIS partnership
          </Link>
          <Link className="portrait-link quiet" to="/atlas">
            Return to Atlas
          </Link>
        </div>
      </section>
    </main>
  );
}
