import * as url from "node:url";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";

export default defineConfig({
  plugins: [alias(), react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "./src") }]
  }
});
