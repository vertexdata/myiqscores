import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const sources = [
  ["Standards for Educational and Psychological Testing", "American Educational Research Association, American Psychological Association, and National Council on Measurement in Education", "https://www.testingstandards.net/open-access-files.html", "Validity, reliability, fairness, and appropriate score use."],
  ["APA testing resources", "American Psychological Association", "https://www.apa.org/science/programs/testing", "Professional standards and testing-policy context."],
  ["WAIS-5 product and technical overview", "Pearson Assessments", "https://www.pearsonassessments.com/en-us/Store/Professional-Assessments/Cognition-%26-Neuro/Wechsler-Adult-Intelligence-Scale-%7C-Fifth-Edition/p/P100071002", "Example of a current professionally administered adult cognitive battery."],
  ["PISA", "Organisation for Economic Co-operation and Development", "https://www.oecd.org/pisa/", "Documented cross-country student assessment; not a country IQ table."],
  ["TIMSS", "International Association for the Evaluation of Educational Achievement", "https://www.iea.nl/studies/iea/timss", "International mathematics and science assessment with published methods."],
  ["The Nation’s Report Card (NAEP)", "National Center for Education Statistics", "https://www.nationsreportcard.gov/", "Official US academic achievement data; not an IQ test."],
] as const;

const ResearchSources = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead title="Research Sources and Evidence Standards | MyIQScores" description="Primary and official sources used to explain psychological testing, international assessment data, and the limits of the MyIQScores quiz." canonicalUrl="/research-sources" ogType="article" />
    <h1>Research Sources and <span className="gradient-text">Evidence Standards</span></h1>
    <p>MyIQScores prioritizes original standards, official assessment publishers, and institutions that publish their methods. A link here supports a defined factual point; it does not imply that an external organization endorses this quiz.</p>
    <h2>Core Sources</h2>
    <ul className="space-y-5">{sources.map(([title, publisher, href, use]) => <li key={href}><a href={href} rel="noopener noreferrer"><strong>{title}</strong></a><br /><span className="text-sm text-muted-foreground">{publisher}. Used for: {use}</span></li>)}</ul>
    <h2>How We Handle Claims</h2>
    <ul>
      <li>Claims about this quiz must match the current code and published <Link to="/methodology">methodology</Link>.</li>
      <li>Precise figures require an identifiable source and enough context to interpret them.</li>
      <li>Celebrity estimates, job-IQ cutoffs, and transformed state or country rankings are not treated as measured IQ.</li>
      <li>Corrections are documented through the <Link to="/corrections-policy">corrections policy</Link>.</li>
    </ul>
    <p>Last evidence review: October 2, 2026.</p>
  </ContentPage>
);

export default ResearchSources;
