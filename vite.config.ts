import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
const isSSR = process.argv.includes("--ssr");

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: isSSR ? undefined : {
          // Core React + Router
          "vendor-react": ["react", "react-dom", "react-router-dom", "react-helmet-async"],
          // UI framework
          "vendor-ui": ["framer-motion", "@tanstack/react-query", "lucide-react"],
          // Data files
          "data-scores": ["./src/data/iqScoreData.ts"],
          "data-countries": ["./src/data/countryIQData.ts"],
          "data-careers": ["./src/data/careerIQData.ts"],
          "data-famous": ["./src/data/famousIQData.ts"],
          "data-myths": ["./src/data/iqMythData.ts"],
          "data-states": ["./src/data/stateIQData.ts"],
          "data-age": ["./src/data/ageIQData.ts"],
          // SEO content pages (separate from core test flow)
          "pages-content": [
            "./src/pages/WhatIsIQ.tsx",
            "./src/pages/IQScoreRanges.tsx",
            "./src/pages/HighestIQEver.tsx",
            "./src/pages/GoodIQScore.tsx",
            "./src/pages/GeniusIQ.tsx",
            "./src/pages/MensaIQ.tsx",
            "./src/pages/TypesOfIQTests.tsx",
            "./src/pages/IQPercentile.tsx",
            "./src/pages/IQvsEQ.tsx",
            "./src/pages/SATtoIQ.tsx",
            "./src/pages/HowToImproveIQ.tsx",
          ],
          "pages-templates": [
            "./src/pages/IsXIQGood.tsx",
            "./src/pages/CountryIQ.tsx",
            "./src/pages/CareerIQ.tsx",
            "./src/pages/FamousIQ.tsx",
            "./src/pages/IQMyth.tsx",
            "./src/pages/AgeIQ.tsx",
            "./src/pages/StateIQ.tsx",
            "./src/pages/FamousIQHub.tsx",
            "./src/pages/CareerIQHub.tsx",
            "./src/pages/AverageIQByCountry.tsx",
          ],
        },
      },
    },
  },
}));
