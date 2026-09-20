# AdSense Monetization Map

## Release state

AdSense is intentionally disabled. `ADSENSE_ENABLED` is `false`, all slot IDs are placeholders, and the AdSense loader is absent from `index.html`. This avoids invalid requests, blank inventory, policy risk, and performance cost before approval and real units exist.

## Approved future placements

| Surface | Placement | Rule |
|---|---|---|
| Long-form article | In-article unit 1 | Only after the introduction and at least one substantive section |
| Long-form article | In-article unit 2 | Only on sufficiently long content, separated from unit 1 by meaningful content |
| Article footer | Multiplex | After related links and the primary CTA; never mistaken for navigation |
| Results | Mid-result display | After score meaning, limitations, category detail, and device history |
| Results | Bottom responsive | After recommendations, optional email, and retake controls |

## Prohibited placements

- Homepage hero or primary CTA area.
- Before meaningful article content.
- Between assessment questions, over answer controls, or during processing.
- Above the free result or in a way that implies payment/ad interaction is required to reveal it.
- Sticky mobile overlays, accidental-click zones, misleading download buttons, or navigation-lookalike units.
- Pages with thin, duplicated, speculative, or noindexed content.

## Activation checklist

1. Obtain AdSense approval and create real units matching the approved map.
2. Replace placeholder slots in `src/config/adsense.ts`.
3. Restore the official loader with the existing publisher ID.
4. Confirm the consent platform updates Consent Mode before personalized advertising.
5. Set `ADSENSE_ENABLED` to `true` in a reviewed release.
6. Validate desktop/mobile spacing, cumulative layout shift, ads.txt, policy labels, and no-ad assessment flow.
7. Monitor viewability and revenue without increasing density above these limits.

## Revenue hierarchy

The free assessment and educational content remain complete without payment. The existing optional Stripe report is visually separate, links to secure checkout, and tells users to review current product/delivery details before paying. Advertising is a secondary revenue stream and must not compromise task completion or trust.
