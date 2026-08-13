const box = (x: number, y: number, w: number, h: number, title: string, sub: string, fill: string, stroke: string) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="14" fill={fill} stroke={stroke} strokeWidth="1.8" />
    <text x={x + w / 2} y={y + 22} textAnchor="middle" fill="#e8ecff" fontSize="13" fontWeight="700">
      {title}
    </text>
    <text x={x + w / 2} y={y + 40} textAnchor="middle" fill="#8b93b8" fontSize="11">
      {sub}
    </text>
  </g>
);

export function CommandTree() {
  return (
    <svg viewBox="0 0 1180 520" role="img" aria-label="Atlas Symphony command tree">
      <defs>
        <marker id="ct" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(167,139,250,.75)" />
        </marker>
      </defs>
      <line x1="590" y1="70" x2="590" y2="100" stroke="rgba(167,139,250,.55)" markerEnd="url(#ct)" />
      <line x1="590" y1="168" x2="590" y2="198" stroke="rgba(167,139,250,.55)" markerEnd="url(#ct)" />
      <line x1="520" y1="258" x2="300" y2="300" stroke="rgba(167,139,250,.55)" markerEnd="url(#ct)" />
      <line x1="590" y1="258" x2="590" y2="300" stroke="rgba(167,139,250,.55)" markerEnd="url(#ct)" />
      <line x1="660" y1="258" x2="880" y2="300" stroke="rgba(167,139,250,.55)" markerEnd="url(#ct)" />
      <line x1="240" y1="364" x2="140" y2="410" stroke="rgba(167,139,250,.55)" markerEnd="url(#ct)" />
      <line x1="300" y1="364" x2="300" y2="410" stroke="rgba(167,139,250,.55)" markerEnd="url(#ct)" />
      <line x1="360" y1="364" x2="460" y2="410" stroke="rgba(167,139,250,.55)" markerEnd="url(#ct)" />
      <line x1="880" y1="364" x2="880" y2="410" stroke="rgba(251,113,133,.7)" />
      <text x="720" y="400" fill="#8b93b8" fontSize="11">
        F executes only if R fails
      </text>
      {box(478, 16, 224, 54, "Drake Stapleton", "only human GO", "#1a1438", "#a78bfa")}
      {box(478, 100, 224, 68, "Talking sub-agent", "the live session · middle of the chat", "#12202a", "#5eead4")}
      {box(455, 198, 270, 60, "A · Atlas Symphony", "Master face · intake + seal", "#161b36", "#5eead4")}
      {box(188, 310, 224, 54, "H · Hive Steward", "routes only · never implements", "#161b36", "#a78bfa")}
      {box(478, 310, 224, 54, "B · Heartbeat", "measure only · H1 / F1", "#161b36", "#34d399")}
      {box(768, 310, 224, 54, "F · Kill Squad", "standby · fail-fast · not a nurse", "#261018", "#fb7185")}
      {box(38, 420, 204, 52, "R · Runtime", "implements · ≤3 workers", "#12182e", "#5eead4")}
      {box(198, 420, 204, 52, "T · Trust", "evidence · ≤3 workers", "#12182e", "#5eead4")}
      {box(358, 420, 204, 52, "P · Product", "docs · ≤3 workers", "#12182e", "#5eead4")}
    </svg>
  );
}
