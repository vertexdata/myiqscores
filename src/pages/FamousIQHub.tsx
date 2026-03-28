import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { famousIQData } from "@/data/famousIQData";

const FamousIQHub = () => {
  const sorted = [...famousIQData].sort((a, b) => {
    const aIQ = parseInt(a.estimatedIQ);
    const bIQ = parseInt(b.estimatedIQ);
    return bIQ - aIQ;
  });

  return (
    <ContentPage>
      <SEOHead
        title="Famous People IQ Scores: Complete List with Estimates | MyIQScores"
        description="See the estimated IQ scores of famous people — scientists, entrepreneurs, athletes, actors, and more. From Einstein (160) to everyday celebrities."
        canonicalUrl="/famous-iq"
        ogType="article"
      />

      <h1><span className="gradient-text">Famous People IQ Scores:</span> Complete List</h1>

      <p>
        How smart are the world's most famous people? Below is our complete database of estimated IQ
        scores for celebrities, scientists, entrepreneurs, athletes, and historical figures. Click any
        name for a detailed analysis of their cognitive abilities and achievements.
      </p>

      <p className="text-sm text-muted-foreground">
        <strong>Note:</strong> Most celebrity IQ scores are estimates based on academic records,
        career achievements, and public statements. Very few have verified, professionally
        administered IQ test results. See our guide on{" "}
        <Link to="/types-of-iq-tests">how IQ tests work</Link>.
      </p>

      <table>
        <thead>
          <tr><th>Name</th><th>Estimated IQ</th><th>Known For</th></tr>
        </thead>
        <tbody>
          {sorted.map((p) => (
            <tr key={p.slug}>
              <td><Link to={`/famous-iq/${p.slug}`}>{p.name}</Link></td>
              <td className="font-mono font-semibold text-foreground">{p.estimatedIQ}</td>
              <td className="text-sm">{p.knownFor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-8">
        See also: <Link to="/highest-iq-ever">Highest IQ scores ever recorded</Link>,{" "}
        <Link to="/genius-iq">What IQ makes you a genius</Link>, or{" "}
        <Link to="/test">take our free IQ test</Link> to see where you stand.
      </p>
    </ContentPage>
  );
};

export default FamousIQHub;
