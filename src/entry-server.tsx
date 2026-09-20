import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppContent } from "./App";
import Index from "./pages/Index";

export { prerenderRoutes, noSitemapRoutes } from "./routeManifest";

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const pathname = new URL(url, "https://www.myiqscores.com").pathname;
  const content = pathname === "/" || pathname === "/test" ? <Index /> : <AppContent />;

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        {content}
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;
  if (!helmet) {
    throw new Error(`Helmet context was not populated while rendering ${url}`);
  }

  return {
    html,
    head: [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ]
      .filter(Boolean)
      .join("\n    "),
  };
}
