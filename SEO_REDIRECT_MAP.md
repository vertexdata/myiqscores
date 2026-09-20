# SEO Redirect and Consolidation Map

All redirects below are permanent Vercel redirects.

| Source | Destination | Coverage | Reason |
|---|---|---:|---|
| `/is-:score-iq-good` | `/iq-score-interpreter?score=:score` | 110 known score URLs | Replaces templated score pages with one interactive intent match |
| `/blog/what-is-iq-score` | `/what-is-iq` | 1 | Duplicate foundational intent |
| `/blog/what-is-genius-iq` | `/genius-iq` | 1 | Duplicate genius-range intent |
| `/blog/how-to-increase-iq` | `/how-to-improve-iq` | 1 | Duplicate improvement intent |
| `/blog/iq-by-country` | `/average-iq-by-country` | 1 | Duplicate country hub |
| `/blog/famous-iq-scores` | `/famous-iq` | 1 | Duplicate celebrity-claim hub |
| `/blog/emotional-intelligence-vs-iq` | `/iq-vs-eq` | 1 | Duplicate comparison intent |
| `/famous-iq/einstein-iq-detailed` | `/famous-iq/albert-einstein` | 1 | Legacy alias |
| `/famous-iq/aoc-detailed` | `/famous-iq/alexandria-ocasio-cortez` | 1 | Legacy alias |
| `/famous-iq/steph-curry-detailed` | `/famous-iq/stephen-curry` | 1 | Legacy alias |
| `/famous-iq/rihanna-detailed` | `/famous-iq/rihanna` | 1 | Legacy alias |

## Noindex consolidation families

These URLs remain reachable to protect existing links but are excluded from the sitemap and canonicalized to the stronger hub:

- `/average-iq/:country` → canonical `/average-iq-by-country` (50)
- `/iq-needed-for/:career` → canonical `/iq-by-career` (108)
- `/iq-by-age/:group` → canonical `/what-is-iq` (6)
- `/average-iq-by-state/:state` → canonical `/average-iq-by-state` (50)
- `/famous-iq/:person` → canonical `/famous-iq` and `noindex` (123)

## Validation

`public/sitemap.xml` contains only canonical indexable URLs. The build-time content audit found zero canonical mismatches, duplicate titles, missing HTML files, or noindexed sitemap entries.
