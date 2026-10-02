import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const skillRows = [
  ["Healthcare", "Technical knowledge, communication, attention, judgment", "Accredited training and supervised practice"],
  ["Engineering and data", "Quantitative reasoning, modeling, debugging, collaboration", "Projects, coursework, and role-specific assessments"],
  ["Skilled trades", "Spatial reasoning, safety, diagnosis, precision", "Apprenticeships, licensing, and hands-on demonstration"],
  ["Management and sales", "Planning, communication, negotiation, domain knowledge", "Track record, structured interviews, and work samples"],
] as const;

const CareerIQHub = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead
      title="IQ and Careers: Skills Matter More Than a Cutoff | MyIQScores"
      description="There is no defensible IQ requirement for most careers. Compare job-relevant skills, training, and work samples instead of unsupported score cutoffs."
      canonicalUrl="/iq-by-career"
      ogType="article"
    />
    <h1>IQ and Careers: <span className="gradient-text">There Is No Universal Cutoff</span></h1>
    <p>MyIQScores no longer publishes a table claiming that each occupation requires a particular IQ. Those precise-looking ranges are not licensing standards and can discourage people without measuring the skills a job actually requires.</p>
    <h2>Evaluate the Work, Not a Rumored Number</h2>
    <table><thead><tr><th>Work area</th><th>Relevant capabilities</th><th>Better evidence</th></tr></thead><tbody>{skillRows.map(([area, skills, evidence]) => <tr key={area}><td>{area}</td><td>{skills}</td><td>{evidence}</td></tr>)}</tbody></table>
    <h2>What a Cognitive Test Cannot Establish</h2>
    <p>One score does not measure reliability, ethics, creativity, interpersonal skill, physical skill, experience, or motivation. Employers should use validated, job-related selection procedures and follow applicable law—not an online quiz result. Our result is explicitly not designed for hiring.</p>
    <p>Learn <Link to="/what-is-iq">what IQ tests measure</Link>, compare <Link to="/types-of-iq-tests">professional and online assessments</Link>, or review <Link to="/methodology">this quiz’s exact limitations</Link>.</p>
  </ContentPage>
);

export default CareerIQHub;
