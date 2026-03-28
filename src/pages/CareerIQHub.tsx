import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { careerIQData } from "@/data/careerIQData";

const CareerIQHub = () => {
  const sorted = [...careerIQData].sort((a, b) => b.minIQ - a.minIQ);

  return (
    <ContentPage>
      <SEOHead
        title="IQ Needed for Every Career: Complete Job IQ Chart | MyIQScores"
        description="What IQ do you need for your dream career? See average IQ scores for 50+ professions from doctor to plumber, with detailed breakdowns and education paths."
        canonicalUrl="/iq-by-career"
        ogType="article"
      />

      <h1><span className="gradient-text">IQ Needed for Every Career:</span> Complete Job IQ Chart</h1>

      <p>
        What IQ do you need for your dream job? Below is our complete database of average IQ
        ranges for over 50 careers, from the most intellectually demanding (mathematician, professor)
        to practical trades (electrician, plumber). Click any career for detailed analysis including
        education paths, cognitive requirements, and FAQs.
      </p>

      <p>
        Remember: IQ is just one factor in career success. Motivation, interpersonal skills,
        domain expertise, and opportunity often matter more. See our guide on{" "}
        <Link to="/iq-myths/does-iq-determine-success">whether IQ determines success</Link>.
      </p>

      <table>
        <thead>
          <tr><th>Career</th><th>Average IQ Range</th><th>Education</th></tr>
        </thead>
        <tbody>
          {sorted.map((c) => (
            <tr key={c.slug}>
              <td><Link to={`/iq-needed-for/${c.slug}`}>{c.career}</Link></td>
              <td className="font-mono font-semibold text-foreground">{c.avgIQRange}</td>
              <td className="text-sm text-muted-foreground">{c.educationPath.split('.')[0]}.</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-8">
        Learn more about <Link to="/what-is-iq">what IQ measures</Link>,{" "}
        <Link to="/iq-score-ranges">IQ score ranges</Link>, or{" "}
        <Link to="/test">take our free IQ test</Link>.
      </p>
    </ContentPage>
  );
};

export default CareerIQHub;
