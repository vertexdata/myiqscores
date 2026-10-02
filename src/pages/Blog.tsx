import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const guides = [
  ["What IQ tests measure", "/what-is-iq", "Standardization, validity, reliability, and the limits of one score."],
  ["How this quiz calculates results", "/methodology", "The exact 30-item formula, categories, and validation status."],
  ["Interpret a score", "/iq-score-interpreter", "Explore normal-curve reference calculations without confusing them with this quiz’s norm data."],
  ["Compare types of tests", "/types-of-iq-tests", "Online practice, screening, and professionally administered assessments."],
  ["Check common IQ myths", "/iq-myths", "One maintained fact-checking guide instead of dozens of repetitive pages."],
  ["Review research sources", "/research-sources", "Primary standards and official datasets used across the site."],
  ["Country ranking limitations", "/average-iq-by-country", "Why mixed national datasets should not be presented as one definitive IQ league table."],
  ["Career skills without IQ cutoffs", "/iq-by-career", "Job-relevant skills and evidence instead of unsupported occupational score ranges."],
] as const;

const Blog = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead title="IQ Learning Center: Methods, Scores and Evidence | MyIQScores" description="A curated learning center for understanding cognitive tests, score interpretation, research sources, and the limits of online IQ claims." canonicalUrl="/blog" ogType="website" />
    <h1>IQ Learning Center: <span className="gradient-text">Useful Guides, Fewer Claims</span></h1>
    <p>We consolidated older overlapping articles into a smaller set of maintained guides. Each page now has a distinct purpose, visible limitations, and a route back to primary or official sources.</p>
    <div className="grid gap-4 sm:grid-cols-2">{guides.map(([title, href, description]) => <article key={href} className="glass-card rounded-2xl p-6"><h2 className="!mt-0 text-xl"><Link to={href}>{title}</Link></h2><p className="!mb-0 text-sm text-muted-foreground">{description}</p></article>)}</div>
  </ContentPage>
);

export default Blog;
