import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const FamousIQHub = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead
      title="Celebrity IQ Claims: How to Check the Evidence | MyIQScores"
      description="Learn why most celebrity IQ numbers cannot be verified, what credible evidence would look like, and how to evaluate a circulated score claim."
      canonicalUrl="/famous-iq"
      ogType="article"
    />
    <h1>Celebrity IQ Claims: <span className="gradient-text">Check the Evidence First</span></h1>
    <p>Most IQ numbers attached to celebrities, politicians, athletes, and historical figures are not authenticated test results. MyIQScores no longer publishes a ranking table of those estimates. Repeating an unsupported number—even with an “unverified” label—does not make it useful evidence.</p>
    <h2>What Would Count as Credible Evidence?</h2>
    <ol>
      <li><strong>A named assessment:</strong> the exact instrument and edition are identified.</li>
      <li><strong>A reliable source:</strong> an authenticated report or direct, attributable statement—not a listicle citing another listicle.</li>
      <li><strong>Enough context:</strong> the date, age at testing, score type, and testing conditions are known.</li>
      <li><strong>No achievement conversion:</strong> education, wealth, chess rating, vocabulary, or career success are not converted into a precise IQ.</li>
    </ol>
    <h2>Why Retrospective Estimates Fail</h2>
    <p>A standardized score depends on a particular test, normative sample, administration, and scoring procedure. Biographical accomplishments do not supply those missing ingredients. Historical estimates are therefore stories about reputation, not measurements comparable with a modern professionally administered score.</p>
    <div className="glass-card my-8 rounded-xl border-l-4 border-primary/40 p-5"><p className="m-0 text-sm text-muted-foreground"><strong className="text-foreground">Editorial rule:</strong> We will add an individual score only when a primary or otherwise authenticated source identifies the assessment and result. Readers can send evidence through our <Link to="/corrections-policy">corrections process</Link>.</p></div>
    <h2>Use Scores Responsibly</h2>
    <p>Even a genuine score is a result from one assessment at one time. It is not a complete measure of judgment, creativity, character, expertise, or future achievement. Read <Link to="/what-is-iq">what IQ tests measure</Link>, compare <Link to="/types-of-iq-tests">professional and online assessments</Link>, or review our <Link to="/research-sources">research sources</Link>.</p>
  </ContentPage>
);

export default FamousIQHub;
