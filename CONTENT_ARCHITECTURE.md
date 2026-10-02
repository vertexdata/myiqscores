# Content architecture

## Canonical indexable set: 25 URLs

The sitemap now contains a deliberately maintained core instead of hundreds of generated detail pages.

| Cluster | Count | Purpose |
|---|---:|---|
| Assessment and interpretation | 5 | Homepage/test entry, score interpreter, ranges, percentile context, and methodology |
| Learning and evidence | 10 | IQ fundamentals, test types, improvement, IQ/EQ, four evidence-aware data/claim hubs, myths, and sources |
| Publisher trust and legal | 10 | About, editorial/corrections policies, contact, privacy, terms, disclaimer, cookies, advertising, and learning-center navigation |

`src/routeManifest.ts` is the sitemap/prerender source of truth. `scripts/audit-dist.mjs` verifies one H1, unique titles, matching canonicals, the AdSense ownership meta tag, and the absence of retired programmatic families from the sitemap.

## Consolidation decisions

| Decision | URLs | Treatment |
|---|---:|---|
| KEEP / INDEX | 25 | Distinct maintained tools, guides, and trust pages |
| REDIRECT | 501 | Score, country, career, age, celebrity, myth, and state details consolidated into useful hubs |
| REDIRECT (legacy static/article) | 27 patterns/paths | Unsupported converters and overlapping/clickbait articles consolidated into the closest maintained guide |
| UTILITY / NOINDEX | 1 | Unsubscribe page |
| CANONICAL DUPLICATE | 1 | `/test` remains the full assessment but canonicalizes to `/` |
| DELETE | 0 | Existing inbound paths resolve through permanent redirects |

Every programmatic source URL and rationale is recorded in `REDIRECT_INVENTORY.csv`. Search Console showed zero clicks to those families during the inspected three-month period; all 29 Google Search clicks went to the homepage.

## Editorial rules

- Match every statement about the quiz to the actual code and published formula.
- Do not present the mapped result as normed, validated, certified, diagnostic, or official.
- Do not infer precise IQ from nationality, state, occupation, achievement, or celebrity biography.
- Link to primary standards or official datasets for consequential claims.
- Keep limitations beside the result, not only in a footer.
- Prefer one maintained guide or tool over large sets of templated pages.
