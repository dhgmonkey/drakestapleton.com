import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

function siteMetadata(development: boolean): Plugin {
  const values = {
    __SITE_MODE__: "portfolio",
    __SITE_ROBOTS__: "index, follow",
    __SITE_STYLE_SRC__: development ? "style-src 'self' 'unsafe-inline'" : "style-src 'self'",
    __SITE_TITLE__: "Drake Stapleton | The Life Behind the Work",
    __SITE_DESCRIPTION__: "The human story behind Drake Stapleton's work in chemistry, manufacturing, community leadership, software, AI exploration, and independent invention.",
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

export default defineConfig(({ command }) => ({
  plugins: [siteMetadata(command === "serve"), react()],
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
