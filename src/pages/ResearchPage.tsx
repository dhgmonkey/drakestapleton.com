import { Link } from "react-router-dom";
import { PageIntro, SectionLead } from "../components/PagePrimitives";
import { trackRepoOutbound } from "../lib/tracking";
import { usePageMeta } from "../lib/usePageMeta";

const kvBenchmarkData = [
  { metric: "Allocation Throughput", value: "134,338,182 blocks/sec", unit: "119.10 ns/seq (7.44 ns/block)", status: "Deterministic O(1)" },
  { metric: "Deallocation Throughput", value: "238,709,061 blocks/sec", unit: "67.03 ns/seq (4.19 ns/block)", status: "Pre-mapped pool" },
  { metric: "Copy-on-Write Append", value: "8.96 ns/mutation", unit: "Single-digit nanosecond CoW page mutation", status: "Zero-stall divergence" },
  { metric: "Continuous Batching Step (TinyLlama)", value: "553.14 tokens/sec", unit: "23.56 ms p50 step @ C=16", status: "0 GPU kernel fallback" },
];

const subagentForkData = [
  { forked: "1", zeroCopy: "1.58 µs", naiveCopy: "1.92 ms", speedup: "1,215.2x", memorySaved: "0.70 GB" },
  { forked: "10", zeroCopy: "1.82 µs", naiveCopy: "19.20 ms", speedup: "1,054.9x", memorySaved: "6.88 GB" },
  { forked: "50", zeroCopy: "1.95 µs", naiveCopy: "96.00 ms", speedup: "984.6x", memorySaved: "34.38 GB" },
  { forked: "100", zeroCopy: "2.01 µs", naiveCopy: "192.00 ms", speedup: "955.2x", memorySaved: "68.75 GB" },
  { forked: "500", zeroCopy: "2.06 µs", naiveCopy: "960.00 ms", speedup: "466.0x", memorySaved: "343.05 GB" },
];

const schedulerOverheadData = [
  { active: "1", buildTime: "1.01 µs", overhead: "0.0101%" },
  { active: "9", buildTime: "2.02 µs", overhead: "0.0202%" },
  { active: "40", buildTime: "5.20 µs", overhead: "0.0520%" },
  { active: "96", buildTime: "9.66 µs", overhead: "0.0966%" },
  { active: "192", buildTime: "17.68 µs", overhead: "0.1768%" },
];

const cortexStressData = [
  { concurrency: "10", totalCalls: "200", throughput: "1,637.21 req/s", p50: "6.03 ms", p95: "7.10 ms", p99: "11.35 ms", success: "100.0%" },
  { concurrency: "25", totalCalls: "200", throughput: "1,867.17 req/s", p50: "10.97 ms", p95: "29.68 ms", p99: "41.53 ms", success: "100.0%" },
  { concurrency: "50", totalCalls: "200", throughput: "1,960.52 req/s", p50: "11.82 ms", p95: "57.90 ms", p99: "78.56 ms", success: "100.0%" },
  { concurrency: "100", totalCalls: "200", throughput: "2,103.73 req/s", p50: "23.02 ms", p95: "68.83 ms", p99: "88.18 ms", success: "100.0%" },
];

const encoderStressData = [
  { batch: "1", texts: "20", duration: "100.21 ms", throughput: "199.59 texts/s", perText: "5.01 ms" },
  { batch: "4", texts: "80", duration: "451.71 ms", throughput: "177.11 texts/s", perText: "5.65 ms" },
  { batch: "8", texts: "160", duration: "851.81 ms", throughput: "187.84 texts/s", perText: "5.32 ms" },
  { batch: "16", texts: "320", duration: "1547.26 ms", throughput: "206.82 texts/s", perText: "4.84 ms" },
  { batch: "32", texts: "640", duration: "3165.60 ms", throughput: "202.17 texts/s", perText: "4.95 ms" },
];

const memoryStabilityData = [
  { service: "cortex-rs", baseline: "15.97 MB", peak: "18.57 MB", delta: "+2.60 MB", status: "No growth observed after stress" },
  { service: "cortex-encoder-rs", baseline: "780.02 MB", peak: "780.39 MB", delta: "+0.36 MB", status: "Stable in observed run" },
  { service: "max inference engine", baseline: "9,011.61 MB", peak: "9,013.99 MB", delta: "+2.38 MB", status: "Stable in observed run" },
  { service: "openclaw-rs daemon", baseline: "4.80 MB", peak: "4.80 MB", delta: "+0.00 MB", status: "No observed RSS drift" },
];

const researchHighlights = [
  {
    label: "KV metadata allocator",
    value: "134.3M",
    unit: "blocks/sec",
    detail: "10,000-sequence allocation benchmark on the native block-table path.",
  },
  {
    label: "500-way branch run",
    value: "2.06 µs",
    unit: "median / branch",
    detail: "Copy-on-write sequence branching over a shared 32K-token prefix.",
  },
  {
    label: "Scheduler construction",
    value: "1.01–17.68 µs",
    unit: "per batch",
    detail: "Measured across 1 to 192 active streams; this is scheduler work, not model execution.",
  },
  {
    label: "Native TinyLlama run",
    value: "553.14",
    unit: "tokens/sec",
    detail: "Physical native execution result currently recorded in the benchmark table.",
  },
];

const implementationStatus = [
  {
    status: "Implemented",
    title: "Runtime spine and branch-native KV",
    body: "Scheduler, sequence lifecycle, shared KV pages, copy-on-write branching, streaming, and native transformer execution exist in the current codebase.",
  },
  {
    status: "Implemented",
    title: "World, Cortex, AEGIS, and RSI foundations",
    body: "Branchable World drafts, durable Cortex memory, policy enforcement primitives, and gated RSI evaluation are real subsystems rather than roadmap-only concepts.",
  },
  {
    status: "Partial",
    title: "Canonical composition boundaries",
    body: "MCP ownership, VaultOnly enforcement, a universal Effect Broker, signed World commits, and the portable accelerator contract are still being consolidated.",
  },
  {
    status: "Target",
    title: "Capability Graph, Fabric, J-Space, and relational paths",
    body: "These are architectural targets. They should not be read as already complete merely because supporting primitives exist elsewhere in the project.",
  },
];

export function ResearchPage() {
  usePageMeta("/research");

  return (
    <main className="wrap portrait-wrap aegis-page research-page">
      <PageIntro
        eyebrow="Systems Research / Native LLM Runtime"
        title="Measuring the control-plane cost around modern LLM inference."
        className="aegis-hero research-hero"
      >
        <p>
          An implementation-backed study of scheduling, branch-native KV state, and local service overhead in the
          AIEN runtime. Author: Drake Stapleton. Primary execution platform: NVIDIA Grace Blackwell GB10
          (128 GB unified LPDDR5X memory).
        </p>
        <div className="research-hero-actions">
          <a href="#benchmarks">Jump to measured results</a>
          <Link to="/evidence">Inspect evidence</Link>
          <a
            href="https://github.com/aien-dev/aien-architecture"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackRepoOutbound("aien-architecture", "https://github.com/aien-dev/aien-architecture")}
          >
            Read architecture RFC
          </a>
        </div>
      </PageIntro>

      <div className="research-status-note" role="note">
        <strong>Research status: implementation-backed, not peer reviewed.</strong>
        <span>
          Results below mix direct measurements with explicitly labeled estimates and projections. Control-plane
          microbenchmarks are not presented as full end-to-end serving benchmarks.
        </span>
      </div>

      <nav className="research-jump-nav" aria-label="Research sections">
        <a href="#abstract">Abstract</a>
        <a href="#problem">Problem</a>
        <a href="#architecture">Architecture</a>
        <a href="#benchmarks">Benchmarks</a>
        <a href="#interpretation">Interpretation</a>
        <a href="#status">Implementation status</a>
        <a href="#conclusion">Conclusion</a>
      </nav>

      <section className="research-summary-grid" aria-label="Measured research highlights">
        {researchHighlights.map((item) => (
          <article key={item.label}>
            <p>{item.label}</p>
            <strong>{item.value}</strong>
            <span>{item.unit}</span>
            <small>{item.detail}</small>
          </article>
        ))}
      </section>

      <blockquote className="aegis-tagline research-question">
        “How much latency and memory pressure belongs to model mathematics,
        <br />
        <span>and how much belongs to the runtime around it?</span>”
      </blockquote>

      {/* 1. Abstract */}
      <section id="abstract" className="aegis-house" aria-labelledby="research-abstract-heading">
        <p className="portrait-index">Section 01</p>
        <div>
          <h2 id="research-abstract-heading">Abstract.</h2>
          <p>
            High-performance tensor kernels do not eliminate the work performed around them. Admission, batching,
            sequence bookkeeping, KV ownership, branching, tool coordination, and process boundaries can all add
            measurable latency or memory pressure. This study isolates several of those control-plane costs instead
            of treating end-to-end token latency as one indivisible number.
          </p>
          <p>
            The current AIEN implementation combines a native Rust runtime spine, paged KV management, branchable
            sequences, continuous batching, and accelerated kernel paths. The measurements on this page show that
            specific metadata and branching operations can be reduced to microsecond or nanosecond-scale work. They
            do not, by themselves, establish that every Python-based serving runtime has the same overhead or that
            AIEN is already faster end to end across every model and workload.
          </p>
        </div>
      </section>

      {/* 2. Problem Definition */}
      <section id="problem" className="aegis-response" aria-labelledby="research-problem-heading">
        <SectionLead
          eyebrow="Section 02"
          title="The Software Orchestration Tax: Deconstructing the Control Plane."
          titleId="research-problem-heading"
        >
          <p>
            Evaluating the disparity between theoretical tensor compute speed and observed end-to-end token delivery.
          </p>
        </SectionLead>

        <div className="evidence-class-grid">
          <article className="evidence-class">
            <p className="evidence-status">Bottleneck 01</p>
            <h3>Interpreted Agent Orchestration Contention</h3>
            <p>
              In conventional Python agent frameworks, request routing, tool call parsing, and context assembly
              execute in interpreted layers. Under multi-agent concurrency, thread synchronization and serialization
              introduce latency bubbles that leave accelerators idling between decode steps.
            </p>
          </article>
          <article className="evidence-class">
            <p className="evidence-status">Bottleneck 02</p>
            <h3>Unshared Multi-Agent Memory Replication</h3>
            <p>
              Autonomous multi-agent architectures require subagents to branch dynamically from a common reasoning
              trajectory. When serving engines maintain independent per-sequence block allocations or when subagents run in isolated
              process containers, runtimes duplicate KV tensor buffers across memory spaces, consuming hundreds of megabytes
              to gigabytes of physical RAM and requiring costly memory transfers.
            </p>
          </article>
          <article className="evidence-class">
            <p className="evidence-status">Bottleneck 03</p>
            <h3>Dynamic Paging Fragmentation</h3>
            <p>
              Interpreted memory management systems rely on garbage collection heuristics and dynamic heap allocations
              for tracking KV block pages. This results in unpredictable allocator stalls and non-deterministic tail latencies
              (p95 and p99 spikes) under sustained request saturation.
            </p>
          </article>
        </div>
      </section>

      {/* 3. Core Architecture */}
      <section id="architecture" className="aegis-response" aria-labelledby="research-arch-heading">
        <SectionLead
          eyebrow="Section 03"
          title="Architecture of the AIEN Sovereign Inference Stack."
          titleId="research-arch-heading"
        >
          <p>
            The runtime path under study is intentionally native: Rust owns orchestration and state, while compiled
            accelerator kernels handle tensor work where supported.
          </p>
        </SectionLead>

        <div className="evidence-class-grid">
          <article className="evidence-class">
            <p className="evidence-status">Layer 01</p>
            <h3>Async Unified Inference ABI (aien-inference-abi)</h3>
            <p>
              A unified trait boundary defining sequence lifecycle, tensor buffers, and token generation streams.
              Exposes zero-copy FFI contracts between Rust orchestration and Mojo accelerated kernels.
            </p>
          </article>
          <article className="evidence-class">
            <p className="evidence-status">Layer 02</p>
            <h3>Paged Block-Table Allocator (aien-kv-cache)</h3>
            <p>
              Manages fixed-size contiguous unified memory blocks (16 tokens/block). Implements copy-on-write
              block tables, reference counting, and O(1) bitmapped allocation free of heap allocations in the hot path.
            </p>
          </article>
          <article className="evidence-class">
            <p className="evidence-status">Layer 03</p>
            <h3>Continuous Batching Scheduler (aien-scheduler)</h3>
            <p>
              Dynamically batches active sequences at iteration boundaries. Integrates chunked prefill,
              priority preemption, and memory-budgeted admission control with microsecond-level step overhead.
            </p>
          </article>
          <article className="evidence-class">
            <p className="evidence-status">Layer 04</p>
            <h3>Grace Blackwell Accelerated Kernel Bridge</h3>
            <p>
              Bridges compiled Rust sequence scheduling directly into Mojo GPU kernels on NVIDIA GB10 silicon.
              Fused GQA QKV projections, paged attention, and batched decode execute with single-fence completion.
            </p>
          </article>
        </div>
      </section>

      {/* 4. Empirical Evaluation */}
      <section id="benchmarks" className="aegis-house research-benchmarks" aria-labelledby="research-evaluation-heading">
        <p className="portrait-index">Section 04</p>
        <div>
          <h2 id="research-evaluation-heading">Empirical Verification &amp; Silicon Benchmarks.</h2>
          <p>
            Benchmarks cover KV metadata allocation, copy-on-write branching, scheduler construction, live Cortex
            service stress, embedding throughput, and process RSS observations. Every table states what is directly
            measured; estimates and projections are labeled rather than blended into the measured column.
          </p>
        </div>

        <div className="aegis-scope-strip" style={{ margin: "24px 0" }}>
          <span>Workstation: spark-b87b (NVIDIA DGX Spark GB10)</span>
          <span>Silicon: Grace Blackwell (sm_121, 128 GB Unified LPDDR5X)</span>
          <span>Indexing: Unified Memory Pointers</span>
          <span>Physical Tensor Backing: Stage 2-4</span>
        </div>

        <p>
          Measurements were collected on workstation spark-b87b (NVIDIA Grace Blackwell GB10, aarch64). Some rows are
          direct physical measurements, while comparison columns such as naive-copy time and projected memory savings
          are analytical estimates derived from the stated workload.
        </p>

        {/* KV Cache Table */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px", color: "var(--text-bright)" }}>
          Table 1: Paged KV Cache Block-Table Allocator Throughput (Control Plane Metadata)
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>
          Workload: 10,000 sequence allocations (160,000 physical blocks, block size = 16 tokens).
        </p>
        <div className="research-table-wrap">
          <table className="evidence-table research-table">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Subsystem Metric</th>
                <th style={{ padding: "10px" }}>Measured Rate</th>
                <th style={{ padding: "10px" }}>Per-Unit Latency</th>
                <th style={{ padding: "10px" }}>Algorithmic Behavior</th>
              </tr>
            </thead>
            <tbody>
              {kvBenchmarkData.map((row) => (
                <tr key={row.metric} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "10px", fontWeight: "600" }}>{row.metric}</td>
                  <td style={{ padding: "10px", color: "var(--accent-bright)" }}>{row.value}</td>
                  <td style={{ padding: "10px" }}>{row.unit}</td>
                  <td style={{ padding: "10px", color: "var(--text-dim)" }}>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Subagent Zero-Copy Fork Table */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px", color: "var(--text-bright)" }}>
          Table 2: Subagent Zero-Copy Sequence Branching vs Unshared Memory Copy (32,768 Prefix Tokens)
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>
          Compares pointer-table reference cloning against physical unshared tensor memory duplication (~704 MB per sequence in BF16).
          Physical silicon receipt: <code>gb10_canonical_1789907893_4d762</code>.
        </p>
        <div className="research-table-wrap">
          <table className="evidence-table research-table">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Subagents Forked</th>
                <th style={{ padding: "10px" }}>Zero-Copy Fork Latency</th>
                <th style={{ padding: "10px" }}>Naive Memory Copy Est.</th>
                <th style={{ padding: "10px" }}>Measured Acceleration</th>
                <th style={{ padding: "10px" }}>Projected Tensor Memory Saved</th>
              </tr>
            </thead>
            <tbody>
              {subagentForkData.map((row) => (
                <tr key={row.forked} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "10px", fontWeight: "600" }}>{row.forked} subagents</td>
                  <td style={{ padding: "10px", color: "var(--accent-bright)" }}>{row.zeroCopy}</td>
                  <td style={{ padding: "10px" }}>{row.naiveCopy}</td>
                  <td style={{ padding: "10px", fontWeight: "600", color: "#10b981" }}>{row.speedup}</td>
                  <td style={{ padding: "10px", color: "var(--accent-amber)" }}>{row.memorySaved}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: "13px", color: "var(--text-dim)", marginBottom: "32px" }}>
          <Link to="/evidence#claim-branching-fork-gb10" style={{ color: "var(--red)", textDecoration: "underline" }}>
            View physical silicon receipt for 500-branch fork (2.06 µs p50 latency, 500.0x memory reduction)
          </Link>
        </p>

        {/* Scheduler Overhead Table */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px", color: "var(--text-bright)" }}>
          Table 3: Native Continuous Batching Scheduler Step Overhead (aien-scheduler)
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>
          Batch build duration across concurrency sweeps. Calculated as percentage of a standard 10-millisecond GPU execution step.
        </p>
        <div className="research-table-wrap">
          <table className="evidence-table research-table">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Active Sequence Batch</th>
                <th style={{ padding: "10px" }}>Batch Construction Latency</th>
                <th style={{ padding: "10px" }}>Overhead Relative to 10ms Step</th>
              </tr>
            </thead>
            <tbody>
              {schedulerOverheadData.map((row) => (
                <tr key={row.active} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "10px", fontWeight: "600" }}>{row.active} active streams</td>
                  <td style={{ padding: "10px", color: "var(--accent-bright)" }}>{row.buildTime}</td>
                  <td style={{ padding: "10px", color: "#10b981" }}>{row.overhead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cortex Vector Stress Table */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px", color: "var(--text-bright)" }}>
          Table 4: Live Cortex Vector Memory Call Stress (Port 18080, /api/cortex/search)
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>
          200 live API requests executed across concurrency sweeps against SQLite WAL + vector similarity tables.
        </p>
        <div className="research-table-wrap">
          <table className="evidence-table research-table">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Concurrent Streams</th>
                <th style={{ padding: "10px" }}>Throughput</th>
                <th style={{ padding: "10px" }}>p50 Latency</th>
                <th style={{ padding: "10px" }}>p95 Latency</th>
                <th style={{ padding: "10px" }}>p99 Latency</th>
                <th style={{ padding: "10px" }}>Success Rate</th>
              </tr>
            </thead>
            <tbody>
              {cortexStressData.map((row) => (
                <tr key={row.concurrency} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "10px", fontWeight: "600" }}>{row.concurrency} clients</td>
                  <td style={{ padding: "10px", color: "var(--accent-bright)" }}>{row.throughput}</td>
                  <td style={{ padding: "10px" }}>{row.p50}</td>
                  <td style={{ padding: "10px" }}>{row.p95}</td>
                  <td style={{ padding: "10px" }}>{row.p99}</td>
                  <td style={{ padding: "10px", color: "#10b981", fontWeight: "600" }}>{row.success}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* INT8 Transformer Embedding Stress */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px", color: "var(--text-bright)" }}>
          Table 5: INT8 Quantized Transformer Embedding Inference (cortex-encoder-rs, Port 18081)
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>
          Execution of BAAI/bge-base-en-v1.5 INT8 via ONNX Runtime C-API across batch sweeps on Grace Blackwell workstation silicon.
        </p>
        <div className="research-table-wrap">
          <table className="evidence-table research-table">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Batch Size</th>
                <th style={{ padding: "10px" }}>Total Text Records</th>
                <th style={{ padding: "10px" }}>Total Processing Duration</th>
                <th style={{ padding: "10px" }}>Effective Throughput</th>
                <th style={{ padding: "10px" }}>Per-Text Latency</th>
              </tr>
            </thead>
            <tbody>
              {encoderStressData.map((row) => (
                <tr key={row.batch} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "10px", fontWeight: "600" }}>Batch {row.batch}</td>
                  <td style={{ padding: "10px" }}>{row.texts} texts</td>
                  <td style={{ padding: "10px" }}>{row.duration}</td>
                  <td style={{ padding: "10px", color: "var(--accent-bright)" }}>{row.throughput}</td>
                  <td style={{ padding: "10px", color: "#10b981", fontWeight: "600" }}>{row.perText}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Long-Duration Memory Stability */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px", color: "var(--text-bright)" }}>
          Table 6: Operating System Process Stability &amp; Memory Allocation Drift (24-Hour Soak)
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>
          Process RSS telemetry captured directly from /proc/[pid]/status (VmRSS) before, during, and after saturation load.
        </p>
        <div className="research-table-wrap">
          <table className="evidence-table research-table">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Operating Daemon</th>
                <th style={{ padding: "10px" }}>Baseline RSS</th>
                <th style={{ padding: "10px" }}>Peak Concurrency RSS</th>
                <th style={{ padding: "10px" }}>Post-Stress Delta</th>
                <th style={{ padding: "10px" }}>Verification Classification</th>
              </tr>
            </thead>
            <tbody>
              {memoryStabilityData.map((row) => (
                <tr key={row.service} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "10px", fontWeight: "600" }}>{row.service}</td>
                  <td style={{ padding: "10px" }}>{row.baseline}</td>
                  <td style={{ padding: "10px" }}>{row.peak}</td>
                  <td style={{ padding: "10px", color: "#10b981" }}>{row.delta}</td>
                  <td style={{ padding: "10px", color: "var(--text-dim)" }}>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Interpretation */}
      <section id="interpretation" className="aegis-response" aria-labelledby="research-interpretation-heading">
        <SectionLead
          eyebrow="Section 05"
          title="Interpretation: what these benchmarks establish, and what they do not."
          titleId="research-interpretation-heading"
        >
          <p>
            The useful claim is narrower than “native beats Python.” The evidence shows where AIEN has removed
            specific sources of orchestration and memory-management cost in its own runtime.
          </p>
        </SectionLead>

        <div className="research-claim-boundary">
          <article>
            <p className="evidence-status">Supported by current evidence</p>
            <h3>Specific control-plane operations are very small.</h3>
            <ul>
              <li>KV block-table allocation and reclamation are measured directly.</li>
              <li>Shared-prefix branch creation avoids physical KV duplication in the tested path.</li>
              <li>Scheduler batch construction remains microsecond-scale across the reported sweep.</li>
              <li>Local Cortex and embedding services have repeatable stress measurements on the stated machine.</li>
            </ul>
          </article>
          <article>
            <p className="evidence-status">Not established by this page alone</p>
            <h3>System-wide superiority still requires neutral end-to-end comparison.</h3>
            <ul>
              <li>No universal claim is made about every vLLM, TGI, Ollama, or PyTorch deployment.</li>
              <li>Allocator throughput is not equivalent to end-to-end model throughput.</li>
              <li>Projected copy cost and memory savings are not direct copy benchmarks.</li>
              <li>Energy-efficiency claims require dedicated power telemetry and matched workloads.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* 6. Current implementation */}
      <section id="status" className="aegis-response research-status-section" aria-labelledby="research-status-heading">
        <SectionLead
          eyebrow="Section 06"
          title="Current implementation status."
          titleId="research-status-heading"
        >
          <p>
            The architecture is intentionally ahead of the implementation. This section separates code that exists
            today from composition layers that remain partial or planned.
          </p>
        </SectionLead>

        <div className="research-implementation-grid">
          {implementationStatus.map((item) => (
            <article key={item.title}>
              <p className={`research-status-pill research-status-${item.status.toLowerCase()}`}>{item.status}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <p className="research-status-source">
          Status is aligned with the public AIEN architecture repository and current sovereign-core implementation,
          not inferred from roadmap language alone.
        </p>
      </section>

      {/* 7. Conclusion */}
      <section id="conclusion" className="aegis-knockout" aria-labelledby="research-conclusion-heading">
        <p className="portrait-index">Section 07</p>
        <h2 id="research-conclusion-heading">Conclusion &amp; Technological Sovereignty.</h2>
        <p>
          The measurements support a narrower conclusion: orchestration and state-management costs are large enough to
          deserve first-class engineering attention, and several of those costs can be made very small with compiled,
          branch-native runtime structures.
        </p>
        <p>
          AIEN is therefore best understood as an implementation program with measurable low-level results and an
          explicit path toward a more complete local runtime. The next standard is not a stronger slogan; it is broader,
          reproducible, apples-to-apples evidence across full models, workloads, hardware, and competing runtimes.
        </p>
        <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="https://github.com/aien-dev/aien-sovereign-core"
            target="_blank"
            rel="noopener noreferrer"
            className="aegis-action-primary"
            style={{ textDecoration: "none" }}
            onClick={() => trackRepoOutbound("aien-sovereign-core", "https://github.com/aien-dev/aien-sovereign-core")}
          >
            Inspect Core Crate Code
          </a>
          <a
            href="https://github.com/aien-dev/benchmarks"
            target="_blank"
            rel="noopener noreferrer"
            className="aegis-action-secondary"
            style={{ textDecoration: "none" }}
            onClick={() => trackRepoOutbound("benchmarks", "https://github.com/aien-dev/benchmarks")}
          >
            Reproduce Live Benchmarks
          </a>
          <a
            href="https://github.com/aien-dev/aien-architecture"
            target="_blank"
            rel="noopener noreferrer"
            className="aegis-action-secondary"
            style={{ textDecoration: "none" }}
            onClick={() => trackRepoOutbound("aien-architecture", "https://github.com/aien-dev/aien-architecture")}
          >
            Read Architecture RFC
          </a>
          <Link to="/evidence" className="aegis-action-secondary" style={{ textDecoration: "none" }}>
            Inspect Evidence Hub
          </Link>
          <Link to="/aien" className="aegis-action-secondary" style={{ textDecoration: "none" }}>
            Return to AIEN Overview
          </Link>
        </div>
      </section>
    </main>
  );
}
