import type { ComponentType } from "react";

type PageModule = Promise<{ default: ComponentType }>;
type Loader = () => PageModule;

const routes: Record<string, Loader> = {
  "/what-is-iq": () => import("@/pages/WhatIsIQ"),
  "/iq-score-ranges": () => import("@/pages/IQScoreRanges"),
  "/iq-score-interpreter": () => import("@/pages/IQScoreInterpreter"),
  "/average-iq-by-country": () => import("@/pages/AverageIQByCountry"),
  "/iq-vs-eq": () => import("@/pages/IQvsEQ"),
  "/sat-to-iq": () => import("@/pages/SATtoIQ"),
  "/act-to-iq": () => import("@/pages/ACTtoIQ"),
  "/gre-to-iq": () => import("@/pages/GREtoIQ"),
  "/asvab-to-iq": () => import("@/pages/ASVABtoIQ"),
  "/average-iq-by-state": () => import("@/pages/StateIQHub"),
  "/how-to-improve-iq": () => import("@/pages/HowToImproveIQ"),
  "/highest-iq-ever": () => import("@/pages/HighestIQEver"),
  "/good-iq-score": () => import("@/pages/GoodIQScore"),
  "/genius-iq": () => import("@/pages/GeniusIQ"),
  "/mensa-iq-test": () => import("@/pages/MensaIQ"),
  "/types-of-iq-tests": () => import("@/pages/TypesOfIQTests"),
  "/iq-percentile-chart": () => import("@/pages/IQPercentile"),
  "/famous-iq": () => import("@/pages/FamousIQHub"),
  "/iq-by-career": () => import("@/pages/CareerIQHub"),
  "/iq-myths": () => import("@/pages/IQMythsHub"),
  "/research-sources": () => import("@/pages/ResearchSources"),
  "/privacy-policy": () => import("@/pages/PrivacyPolicy"),
  "/terms-of-service": () => import("@/pages/TermsOfService"),
  "/disclaimer": () => import("@/pages/Disclaimer"),
  "/cookie-policy": () => import("@/pages/CookiePolicy"),
  "/advertising-policy": () => import("@/pages/AdvertisingPolicy"),
  "/corrections-policy": () => import("@/pages/CorrectionsPolicy"),
  "/about": () => import("@/pages/About"),
  "/methodology": () => import("@/pages/Methodology"),
  "/editorial-policy": () => import("@/pages/EditorialPolicy"),
  "/contact": () => import("@/pages/Contact"),
  "/unsubscribe": () => import("@/pages/Unsubscribe"),
  "/average-iq-us": () => import("@/pages/AverageIQUS"),
  "/iq-of-presidents": () => import("@/pages/PresidentIQ"),
  "/low-iq": () => import("@/pages/LowIQ"),
  "/blog": () => import("@/pages/Blog"),
  "/blog/what-is-iq-score": () => import("@/pages/blog/WhatIsIQScore"),
  "/blog/how-to-increase-iq": () => import("@/pages/blog/HowToIncreaseIQ"),
  "/blog/iq-vs-success": () => import("@/pages/blog/IQvsSuccess"),
  "/blog/famous-iq-scores": () => import("@/pages/blog/FamousIQScores"),
  "/blog/iq-by-country": () => import("@/pages/blog/IQByCountry"),
  "/blog/what-is-genius-iq": () => import("@/pages/blog/WhatIsGeniusIQ"),
  "/blog/iq-tests-accurate": () => import("@/pages/blog/IQTestsAccurate"),
  "/blog/emotional-intelligence-vs-iq": () => import("@/pages/blog/EmotionalIntelligenceVsIQ"),
  "/blog/fluid-vs-crystallized-intelligence": () => import("@/pages/blog/FluidVsCrystallizedIntelligence"),
  "/blog/flynn-effect": () => import("@/pages/blog/FlynnEffect"),
  "/blog/iq-genetics-nature-vs-nurture": () => import("@/pages/blog/IQGeneticsNatureVsNurture"),
  "/blog/sleep-and-iq": () => import("@/pages/blog/SleepAndIQ"),
  "/blog/nutrition-and-iq": () => import("@/pages/blog/NutritionAndIQ"),
  "/blog/iq-and-mental-health": () => import("@/pages/blog/IQAndMentalHealth"),
  "/blog/iq-and-workplace": () => import("@/pages/blog/IQAndWorkplace"),
  "/blog/working-memory-and-iq": () => import("@/pages/blog/WorkingMemoryAndIQ"),
  "/blog/iq-testing-in-children": () => import("@/pages/blog/IQTestingInChildren"),
  "/blog/exercise-and-iq": () => import("@/pages/blog/ExerciseAndIQ"),
  "/blog/multiple-intelligences-theory": () => import("@/pages/blog/MultipleIntelligences"),
  "/blog/iq-and-creativity": () => import("@/pages/blog/IQAndCreativity"),
  "/blog/iq-and-leadership": () => import("@/pages/blog/IQAndLeadership"),
};

export function loadClientRoute(pathname: string): PageModule {
  const exact = routes[pathname];
  if (exact) return exact();
  if (/^\/is-\d+-iq-good$/.test(pathname)) return import("@/pages/IsXIQGood");
  if (pathname.startsWith("/average-iq/")) return import("@/pages/CountryIQ");
  if (pathname.startsWith("/iq-needed-for/")) return import("@/pages/CareerIQ");
  if (pathname.startsWith("/iq-by-age/")) return import("@/pages/AgeIQ");
  if (pathname.startsWith("/famous-iq/")) return import("@/pages/FamousIQ");
  if (pathname.startsWith("/iq-myths/")) return import("@/pages/IQMyth");
  if (pathname.startsWith("/average-iq-by-state/")) return import("@/pages/StateIQ");
  return import("@/pages/NotFound");
}
