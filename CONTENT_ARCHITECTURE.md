# Content Architecture

## Canonical indexable set: 103 URLs

| Cluster | Count | Purpose |
|---|---:|---|
| Cornerstone, tools, hubs, trust, legal | 33 | Assessment entry, score interpretation, IQ science, score ranges, converters, national/state/career hubs, methodology, and trust pages |
| Editorial articles | 16 | Distinct informational search intents without duplicate canonical targets |
| Myth explainers | 54 | Focused misconception pages backed by a central myth taxonomy |

The sitemap is generated from `src/routeManifest.ts`; `scripts/audit-dist.mjs` verifies every included URL has prerendered HTML, one H1, a unique title, a matching canonical, and no `noindex` directive.

## Inventory decisions

| Decision | URLs | Treatment |
|---|---:|---|
| KEEP / INDEX | 103 | Canonical sitemap set |
| REDIRECT | 120 | 110 score pages, six duplicate blog intents, and four legacy celebrity-detail aliases |
| CONSOLIDATE / NOINDEX | 337 | 50 country, 108 career, six age, 123 celebrity-estimate, and 50 state detail pages canonicalized to useful hubs |
| UTILITY / NOINDEX | 1 | Unsubscribe page |
| CANONICAL DUPLICATE | 1 | `/test` uses the homepage assessment and canonicalizes to `/` |
| DELETE | 0 | Existing inbound URLs remain recoverable through redirect or noindex consolidation |

## Information hierarchy

1. `/` — product promise and assessment entry.
2. `/iq-score-interpreter` — primary score-intent tool.
3. `/what-is-iq`, `/iq-score-ranges`, `/types-of-iq-tests` — foundational science and interpretation.
4. `/how-to-improve-iq`, `/iq-vs-eq`, `/good-iq-score`, `/genius-iq` — decision and learning guides.
5. `/average-iq-by-country`, `/average-iq-by-state`, `/iq-by-career`, `/famous-iq` — evidence-aware hubs.
6. `/blog/*` and `/iq-myths/*` — supporting topical depth.
7. `/about`, `/methodology`, `/editorial-policy`, `/corrections-policy`, `/advertising-policy`, `/contact`, and legal pages — trust layer.

## Editorial rules

- Treat this assessment as an educational estimate, never a clinical, employment, disability, or school-placement instrument.
- Distinguish authenticated test reports from circulated celebrity estimates. Individual celebrity pages are noindexed unless future evidence supports a defensible page.
- Cite primary sources for testing standards, named instruments, and consequential claims.
- Avoid converting achievements, school records, job titles, or nationality into a claimed IQ score.
- Prefer one authoritative hub or tool over large sets of near-identical score/location pages.
- Review high-stakes or potentially stigmatizing language before publication.

## Internal linking

Cornerstones link laterally to the score interpreter and assessment, supporting pages link back to their hub, and results recommend only a small set of contextually relevant guides. Redirected score URLs preserve user intent by pre-filling the interpreter.
