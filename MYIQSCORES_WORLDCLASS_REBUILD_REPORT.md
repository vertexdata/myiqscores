# MyIQScores World-Class Rebuild Report

Date: 2026-09-20  
Release branch: `codex/worldclass-rebuild`

## Outcome

MyIQScores was rebuilt around one clear promise: a focused 30-question reasoning experience with immediate educational results, honest limitations, and high-quality learning resources. The release replaces the template-like landing page, removes advertising from the assessment, corrects misleading scoring language, consolidates the indexable footprint from 555 URLs to 103 canonical URLs, and introduces a useful IQ score interpreter.

## What changed

- New premium navy/teal/violet visual system and responsive homepage using four original Higgsfield illustrations.
- Rewritten assessment UX with back navigation, keyboard controls, progress by category, accessible radio groups, and no question-screen ads.
- Corrected ambiguous questions and published the exact scoring formula and validation limitations.
- Rebuilt results as an educational estimate with raw category performance, uncertainty, local-only history, share card, challenge link, and a clearly labeled downloadable result summary.
- Added `/iq-score-interpreter` with percentile, standard-deviation, range, rarity, bell-curve, and measurement-error context.
- Replaced unsupported authority claims in About and Methodology with accurate operating, privacy, editorial, and validation disclosures.
- Noindexed and consolidated 337 programmatic country, career, age, state, and celebrity-estimate pages; added 120 permanent legacy/duplicate redirects.
- Reduced the sitemap from 555 to 103 URLs: 33 cornerstone/hub/trust pages, 16 blog routes, and 54 substantive myth explainers.
- Upgraded React Router, Supabase JS, Vite, Vitest, and PostCSS. Production dependency audit reports zero known vulnerabilities.
- Added rate limiting, strict input validation, idempotency support, and fail-closed behavior to transactional email.
- Added security headers, immutable asset caching, canonical metadata, structured data, a local OG image, and a reproducible content crawl.
- Added canonical GA4 events: `test_start`, `question_progress`, `test_complete`, `result_view`, `result_share`, `calculator_use`, `cta_click`, `article_depth`, and `return_visit`.

## Verification

- Production build: pass; 558 routes prerendered.
- Sitemap/content crawl: 103 checked URLs, zero missing pages, zero duplicate titles, zero canonical errors, zero sitemap/noindex conflicts.
- Unit tests: pass.
- Lint: zero errors; eight pre-existing Fast Refresh warnings in shared UI/template files.
- Browser QA: desktop homepage, complete 30-question journey, results, and interactive score interpreter pass.
- Local mobile Lighthouse: Performance 100, Accessibility 100, Best Practices 100, SEO 100; FCP 1.3 s, LCP 1.7 s, CLS 0, TBT 0 ms.
- Live production Lighthouse: Performance 90, Accessibility 100, Best Practices 100, SEO 100; FCP/LCP 2.0 s, CLS 0.
- Critical homepage payload: 64.04 KB gzip JavaScript and 14.34 KB gzip CSS; assessment/results load on demand.

## Safety and deployment note

The Supabase hardening migration and Edge Function changes are committed with the release, but the live MyIQScores Supabase project is paused. The CLI correctly refused to link/apply changes. An administrator must unpause project `udrllbeleatwozmfkspc`, confirm production environment variables point to it, then apply the migration and deploy `send-transactional-email`. Until that happens, the on-screen result remains fully functional; email delivery can fail gracefully without losing the result.

## Key artifacts

- `CONTENT_ARCHITECTURE.md`
- `ADSENSE_MONETIZATION_MAP.md`
- `SEO_REDIRECT_MAP.md`
- `PERFORMANCE_BUDGET.md`
- `GROWTH_ROADMAP.md`
- `scripts/audit-dist.mjs`
- `tests/worldclass.spec.ts`

## Generated visual provenance

Original art was generated for this release through Higgsfield/Recraft V4.1 and converted to responsive WebP derivatives. Source generation jobs: hero `1ab8262c-7fc7-47fc-867e-87507828e1a4`, pattern `433a699a-c9b1-47d3-a001-724f16fb135f`, memory `0adf485b-9b57-4430-b6a7-60be6974db21`, and share card `b1d90461-9cea-46ea-8640-21d4959c9fd4`.
