import { useEffect } from "react";

export function usePageMeta(opts: { title: string; description: string; path: string; robots?: string }) {
  useEffect(() => {
    document.title = opts.title;
    const url = `https://www.drakestapleton.com${opts.path}`;
    const setMeta = (selector: string, content: string) => {
      document.querySelector(selector)?.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', opts.description);
    setMeta('meta[property="og:title"]', opts.title);
    setMeta('meta[property="og:description"]', opts.description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[name="twitter:title"]', opts.title);
    setMeta('meta[name="twitter:description"]', opts.description);
    setMeta(
      'meta[name="robots"]',
      opts.robots || (import.meta.env.MODE === "portfolio" ? "index, follow" : "noindex, nofollow, noarchive"),
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [opts.title, opts.description, opts.path, opts.robots]);
}
