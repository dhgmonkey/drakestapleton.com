import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

export function NotFoundPage() {
  usePageMeta({
    title: "Page directory | Drake Stapleton",
    description: "Choose a page from Drake Stapleton's site.",
    path: "/404",
    robots: "noindex, follow",
  });
  return (
    <main className="wrap">
      <p className="kicker">404</p>
      <h1>Choose where to go next</h1>
      <p className="lede">
        Return to the <Link to="/">home page</Link> or open the <Link to="/symphony">Symphony record</Link>.
      </p>
    </main>
  );
}
