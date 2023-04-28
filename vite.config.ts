import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outputDir: 'dist'
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 8080,
    hmr: {
      clientPort: 443,
    },
  },
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/components/Toast/index.ts",
      name: "94Toast",
      fileName: "94-toast",
      formats: ["es"],
    },
  },
});
