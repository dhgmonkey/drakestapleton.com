import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

function siteMetadata(mode: string): Plugin {
  const portfolio = mode === "portfolio";
  const values = {
    __SITE_MODE__: portfolio ? "portfolio" : "waitlist",
    __SITE_ROBOTS__: portfolio ? "index, follow" : "noindex, nofollow, noarchive",
    __SITE_TITLE__: portfolio
      ? "Drake Stapleton | The Life Behind the Work"
      : "Drake Stapleton | A Life in People, Systems, and Atlas",
    __SITE_DESCRIPTION__: portfolio
      ? "The human story behind Drake Stapleton's work in chemistry, manufacturing, community leadership, software, and Atlas."
      : "A human portrait and body of work by Drake Stapleton is in development. Join the waiting list for the first public release.",
  };

  return {
    name: "site-metadata",
    transformIndexHtml(html) {
      return Object.entries(values).reduce(
        (result, [token, value]) => result.replaceAll(token, value),
        html,
      );
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [siteMetadata(mode), react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
    outDir: "dist",
    emptyOutDir: true,
  },
}));
