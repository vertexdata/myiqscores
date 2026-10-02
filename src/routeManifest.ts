// Single source of truth for every indexable route on the site.
// Consumed by scripts/prerender.mjs (via the SSR bundle) to prerender pages
// and generate sitemap.xml. Keep in sync with the <Route> elements in App.tsx —
// the prerender script fails the build if any route here renders the 404 page.
const staticRoutes = [
  "/",
  "/test",
  "/blog",
  "/what-is-iq",
  "/iq-score-ranges",
  "/average-iq-by-country",
  "/iq-vs-eq",
  "/average-iq-by-state",
  "/how-to-improve-iq",
  "/types-of-iq-tests",
  "/iq-percentile-chart",
  "/iq-score-interpreter",
  "/famous-iq",
  "/iq-by-career",
  "/iq-myths",
  "/research-sources",
  "/about",
  "/methodology",
  "/editorial-policy",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/disclaimer",
  "/cookie-policy",
  "/advertising-policy",
  "/corrections-policy",
];

// Routes prerendered but kept OUT of the sitemap:
// - /unsubscribe is a noindexed utility page
// - /test canonicalizes to "/" (same quiz component), and sitemaps should
//   list only canonical URLs
export const noSitemapRoutes = [
  "/unsubscribe",
  "/test",
];

export const prerenderRoutes: string[] = [
  ...staticRoutes,
  ...noSitemapRoutes,
];
