# Performance Budget

## Current release baseline

Measured locally with Lighthouse mobile emulation against the production build on 2026-09-20:

| Metric | Result | Budget |
|---|---:|---:|
| Performance | 100 | ≥ 90 |
| Accessibility | 100 | ≥ 95 |
| Best Practices | 100 | ≥ 95 |
| SEO | 100 | ≥ 95 |
| FCP | 1.3 s | ≤ 1.8 s |
| LCP | 1.7 s | ≤ 2.5 s |
| CLS | 0 | ≤ 0.10 |
| TBT | 0 ms | ≤ 200 ms |

## Asset budgets

| Asset class | Current | Budget |
|---|---:|---:|
| Initial JavaScript | 201.73 KB raw / 64.04 KB gzip | ≤ 220 KB raw / 70 KB gzip |
| Global CSS | 79.54 KB raw / 14.34 KB gzip | ≤ 90 KB raw / 18 KB gzip |
| Mobile hero | 12 KB | ≤ 25 KB |
| Desktop hero | 80 KB | ≤ 100 KB |
| Below-fold generated images | 12–36 KB each | ≤ 50 KB each |
| Route-specific article/tool chunk | typically 0.5–6.2 KB gzip | ≤ 20 KB gzip, excluding shared framework/data |

## Enforcement

- Preserve route-level dynamic imports and the standalone core assessment shell.
- Do not add third-party scripts to the critical path. Analytics waits five seconds after load; AdSense remains absent until activation.
- Use explicit image dimensions, responsive WebP sources, lazy loading below the fold, and immutable caching for fingerprinted assets.
- Run `npm run build`, `npm run qa:content`, and Lighthouse before production releases.
- Investigate any release with LCP above 2.5 s, CLS above 0.10, TBT above 200 ms, or initial JS above 70 KB gzip.
- Recheck real-user Core Web Vitals after sufficient production traffic; local Lighthouse is a lab result, not field data.
