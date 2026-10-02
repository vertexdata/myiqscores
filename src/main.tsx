import { createRoot, hydrateRoot } from "react-dom/client";
import type { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import CoreApp from "./CoreApp";
import { loadClientRoute } from "./clientRoutes";
import "./index.css";

const container = document.getElementById("root")!;

function mount(content: ReactNode) {
  if (container.hasChildNodes()) hydrateRoot(container, content);
  else createRoot(container).render(content);
}

// The test experience gets a small route-aware client bundle. Editorial pages
// keep their pre-rendered HTML visible while the full matching server router is
// loaded, avoiding both hydration mismatches and a blank loading flash.
const isCoreExperience = window.location.pathname === "/" || window.location.pathname === "/test";

if (isCoreExperience) {
  mount(<HelmetProvider><CoreApp /></HelmetProvider>);
} else {
  Promise.all([import("react-router-dom"), loadClientRoute(window.location.pathname)]).then(
    ([{ BrowserRouter }, { default: Page }]) =>
      mount(<HelmetProvider><BrowserRouter><Page /></BrowserRouter></HelmetProvider>),
  );
}
