import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

export function NotFoundPage() {
  usePageMeta({
    title: "Not found — Drake Stapleton",
    description: "That path is not on this site.",
    path: "/404",
  });
  return (
    <main className="wrap">
      <p className="kicker">404</p>
      <h1>Nothing at this path</h1>
      <p className="lede">
        Return to the <Link to="/">home page</Link> or open the <Link to="/symphony">Symphony record</Link>.
      </p>
    </main>
  );
}
