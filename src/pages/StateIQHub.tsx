import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const StateIQHub = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead
      title="Average IQ by State: Why Rankings Are Estimates | MyIQScores"
      description="Understand why state IQ rankings are inferred rather than measured and use official NAEP education data without relabeling it as IQ."
      canonicalUrl="/average-iq-by-state"
      ogType="article"
    />
    <h1>“Average IQ by State” Rankings: <span className="gradient-text">What the Data Really Show</span></h1>
    <p>The United States does not administer one representative IQ test to every state. Published state “IQ” rankings are usually transformations of education measures such as NAEP, SAT, or ACT scores. MyIQScores no longer presents those transformations as measured state IQ values.</p>
    <h2>Use the Original Measure</h2>
    <p>The <a href="https://www.nationsreportcard.gov/" rel="noopener noreferrer">National Assessment of Educational Progress (NAEP)</a> publishes state results, achievement levels, sampling information, and subject-specific trends. NAEP measures performance in defined academic subjects; it is not an IQ test. SAT and ACT results are also shaped by participation rates and college-going patterns, making state rank conversions especially fragile.</p>
    <h2>Questions to Ask Before Comparing States</h2>
    <ul>
      <li>Are participation rates similar across states?</li>
      <li>Does the comparison control for age, grade, year, and subject?</li>
      <li>Are uncertainty and sampling error reported?</li>
      <li>Is an academic achievement score being incorrectly relabeled as intelligence?</li>
    </ul>
    <p>See <Link to="/types-of-iq-tests">how a standardized IQ assessment differs</Link>, read <Link to="/average-iq-by-country">the same cautions for country rankings</Link>, or consult our <Link to="/research-sources">research sources</Link>.</p>
  </ContentPage>
);

export default StateIQHub;
