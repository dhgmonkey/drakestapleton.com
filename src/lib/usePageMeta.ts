import { useEffect } from "react";

export function usePageMeta(opts: { title: string; description: string; path: string }) {
  useEffect(() => {
    document.title = opts.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", opts.description);
    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.setAttribute("href", `https://www.drakestapleton.com${opts.path}`);
  }, [opts.title, opts.description, opts.path]);
}
