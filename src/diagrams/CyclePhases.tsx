function Phase({
  n,
  title,
  lines,
  x,
  y,
  stroke,
}: {
  n: string;
  title: string;
  lines: string[];
  x: number;
  y: number;
  stroke: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={220} height={110} rx="14" fill="#161b36" stroke={stroke} />
      <text x={x + 110} y={y + 28} textAnchor="middle" fill="#8b93b8" fontSize="11">
        {n}
      </text>
      <text x={x + 110} y={y + 50} textAnchor="middle" fill="#e8ecff" fontSize="14" fontWeight="700">
        {title}
      </text>
      {lines.map((l, i) => (
        <text key={l} x={x + 110} y={y + 72 + i * 16} textAnchor="middle" fill="#8b93b8" fontSize="11">
          {l}
        </text>
      ))}
    </g>
  );
}

export function CyclePhases() {
  return (
    <svg viewBox="0 0 1180 280" role="img" aria-label="Atlas Symphony cycle phases">
      <Phase n="1 · A-Intake" title="Classify the goal" lines={["name primary R | T | P"]} x={20} y={80} stroke="#5eead4" />
      <Phase n="2 · A-Children" title="Three in parallel" lines={["B measure", "H route ≤3", "F standby"]} x={270} y={80} stroke="#a78bfa" />
      <Phase n="3 · H-Conductors" title="Three in parallel" lines={["R implements", "T evidence", "P docs"]} x={520} y={80} stroke="#5eead4" />
      <Phase n="4 · optional" title="Market-Fanout" lines={["mode=market only"]} x={770} y={80} stroke="#fbbf24" />
      <Phase n="5–7" title="Kill · Hist · Seal" lines={["F only if R fails", "Historian offline", "A seals the cycle"]} x={940} y={80} stroke="#fb7185" />
      <path d="M240 135 H270 M490 135 H520 M740 135 H770 M990 135" stroke="rgba(94,234,212,.6)" fill="none" />
    </svg>
  );
}
