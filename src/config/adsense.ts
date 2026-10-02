// ─── AdSense configuration ───────────────────────────────────────────────
// ADSENSE_PUB_ID is the site's real publisher ID. It must match:
//   - public/ads.txt          (google.com, pub-… — ads.txt uses the "pub-"
//                              form WITHOUT the "ca-" prefix, per Google docs)
//   - index.html              (when the approval-gated script is restored)
//
// ACTIVATION (after AdSense approval):
//   1. Create ad units in the AdSense dashboard and copy each numeric slot ID.
//   2. Replace the "slot-XXXXXXXXX…" placeholders below with the numeric IDs.
//   3. Flip ADSENSE_ENABLED to true.
// Until then, every AdUnit renders nothing (no empty boxes, no fake requests).
export const ADSENSE_PUB_ID = "ca-pub-5051305701488211";
export const ADSENSE_ENABLED = false;

export const AD_SLOTS = {
  inArticle1: "slot-XXXXXXXXX2",
  inArticle2: "slot-XXXXXXXXX3",
  resultsBottom: "slot-XXXXXXXXX7",
  multiplex: "slot-XXXXXXXXX8",
  resultsMid: "slot-XXXXXXXXXD",
};
