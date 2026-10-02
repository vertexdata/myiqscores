declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventValue = string | number | boolean;

export function trackEvent(name: string, params: Record<string, EventValue> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

export function trackTestStart(source = "homepage") {
  trackEvent("test_start", { test_version: "reasoning_v2", source });
}

export function trackQuestionProgress(questionNumber: number, category: string) {
  if (questionNumber === 1 || questionNumber % 5 === 0 || questionNumber === 30) {
    trackEvent("question_progress", {
      question_number: questionNumber,
      category,
      test_version: "reasoning_v2",
    });
  }
}

export function trackTestComplete(questionsAnswered: number, timeSpentSeconds: number) {
  trackEvent("test_complete", {
    questions_answered: questionsAnswered,
    time_spent_seconds: timeSpentSeconds,
    test_version: "reasoning_v2",
  });
}

export function trackResultView(scoreBand: string) {
  trackEvent("result_view", { score_band: scoreBand, test_version: "reasoning_v2" });
}

export function trackResultShare(method: "copy" | "download" | "twitter" | "facebook" | "linkedin" | "whatsapp" | "challenge") {
  trackEvent("result_share", { method, test_version: "reasoning_v2" });
}

export function trackCalculatorUse(score: number) {
  trackEvent("calculator_use", { calculator: "iq_score_interpreter", score });
}

export function trackCtaClick(label: string, location: string) {
  trackEvent("cta_click", { label, location });
}

export function trackArticleDepth(percent: 50 | 90) {
  trackEvent("article_depth", { percent });
}

export function trackReturnVisit(daysSinceLastVisit: number) {
  trackEvent("return_visit", { days_since_last_visit: daysSinceLastVisit });
}

// Compatibility aliases for older components while event names remain clean in GA4.
export const trackQuizStarted = trackTestStart;
export const trackQuizQuestionAnswered = (questionNumber: number) =>
  trackQuestionProgress(questionNumber, "unknown");
export const trackQuizCompleted = trackTestComplete;
export const trackResultViewed = (score: number) =>
  trackResultView(score >= 130 ? "130+" : score >= 115 ? "115-129" : score >= 85 ? "85-114" : "below-85");
export const trackResultShared = trackResultShare;
