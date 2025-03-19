
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Set base path for GitHub Pages
  // Use the repository name as the base path if deploying to GitHub Pages
  // e.g., if your repo is named 'portfolio', set base to '/portfolio/'
  // Change this to match your repository name or remove if deploying to custom domain
  base: '/sharmautkrisht/',
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
