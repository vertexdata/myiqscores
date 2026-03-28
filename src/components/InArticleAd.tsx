import AdUnit from "./AdUnit";
import { AD_SLOTS } from "@/config/adsense";

interface InArticleAdProps {
  slot?: "first" | "second";
}

const InArticleAd = ({ slot = "first" }: InArticleAdProps) => (
  <AdUnit
    slotId={slot === "first" ? AD_SLOTS.inArticle1 : AD_SLOTS.inArticle2}
    format="in-article"
    size="responsive"
    className="my-8"
  />
);

export default InArticleAd;
