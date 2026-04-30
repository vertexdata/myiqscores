import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const EditorialPolicy = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead
      title="Editorial Policy — MyIQScores"
      description="Read the MyIQScores editorial policy for IQ guides, score explanations, estimates, corrections, and responsible content standards."
      canonicalUrl="/editorial-policy"
    />

    <h1>Editorial Policy</h1>
    <p>
      MyIQScores publishes educational content about IQ scores, cognitive testing, score ranges,
      famous IQ estimates, and related psychology topics. Our goal is to make the subject easier to
      understand while being clear about uncertainty and limits.
    </p>

    <h2>Our Standards</h2>
    <ul>
      <li>We separate educational explanation from clinical advice.</li>
      <li>We avoid presenting online quiz results as official diagnoses or certified IQ scores.</li>
      <li>We label famous-person IQ figures as estimates unless a verified score is public.</li>
      <li>We update pages when we find unclear wording, broken links, or better source material.</li>
      <li>We prioritize plain-language explanations over sensational score claims.</li>
    </ul>

    <h2>Sources and Estimates</h2>
    <p>
      Some IQ-related topics have strong public research behind them, while others rely on estimates
      or imperfect public records. Pages about score ranges, percentiles, and test types are written
      from standard psychometric concepts. Pages about public figures, careers, countries, and states
      are interpretive and should be read as educational context rather than verified measurements.
    </p>

    <h2>Corrections</h2>
    <p>
      If you notice a factual problem, unclear explanation, or page that needs more context, email{" "}
      <a href="mailto:content@myiqscores.com">content@myiqscores.com</a>. Include the page URL and a
      short explanation of the issue. We review correction requests and update content when the
      evidence supports a change.
    </p>

    <h2>Advertising Independence</h2>
    <p>
      Ads do not determine what we write or how we explain IQ scores. Advertising helps support the
      free test and educational guides, but the editorial goal remains to provide useful, responsible
      information. Learn more about the site on our <Link to="/about">About page</Link>.
    </p>
  </ContentPage>
);

export default EditorialPolicy;
