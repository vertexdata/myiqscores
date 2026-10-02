# Redirect and consolidation map

All rules are permanent Vercel redirects and execute before the SPA rewrite.

| Source | Destination | Purpose |
|---|---|---|
| `/is-:score-iq-good` | `/iq-score-interpreter?score=:score` | Replace templated score pages with one interactive tool |
| `/average-iq/:country` | `/average-iq-by-country` | Replace mixed-source country estimates with a methods guide |
| `/average-iq-by-state/:state` | `/average-iq-by-state` | Replace inferred state values with official-data guidance |
| `/iq-needed-for/:career` | `/iq-by-career` | Replace unsupported job cutoffs with skill-based guidance |
| `/iq-by-age/:group` | `/what-is-iq` | Remove unsupported age-specific estimates |
| `/famous-iq/:person` | `/famous-iq` | Replace unauthenticated individual scores with an evidence-checking guide |
| `/iq-myths/:myth` | `/iq-myths` | Consolidate near-duplicate pages into one maintained myth guide |
| `/blog/:slug` | `/research-sources` | Catch retired overlapping or unsupported article routes |

Specific duplicate blog routes redirect to their closest maintained guide before the blog wildcard. Unsupported test conversions and sensational/static score pages also redirect to `types-of-iq-tests`, `iq-score-ranges`, `famous-iq`, or the relevant evidence hub.

The complete 501-URL programmatic inventory, destination, and rationale is in `REDIRECT_INVENTORY.csv`.
