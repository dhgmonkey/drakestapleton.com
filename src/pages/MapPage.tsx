import { usePageMeta } from "../lib/usePageMeta";

export function MapPage() {
  usePageMeta({
    title: "Atlas Symphony — bird’s-eye map",
    description: "Six-track map of Atlas development, June–August 2026. Public view of the Symphony desk.",
    path: "/symphony/map",
  });

  return (
    <main className="wrap wide">
      <p className="kicker">Diagram · 18 Jun – 13 Aug 2026</p>
      <h1>Bird’s-eye</h1>
      <p className="lede">
        Six tracks ran at once. Time goes left to right. This is the overview; the first-run page is the
        origin story.
      </p>
      <iframe className="diagram-frame" title="Atlas bird’s-eye development map" src="/diagrams/map.html" />
    </main>
  );
}
