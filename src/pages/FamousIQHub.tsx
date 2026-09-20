import { useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { famousIQData } from "@/data/famousIQData";

const CATEGORIES = ["All", "Scientists", "Business", "Athletes", "Politicians", "Musicians"] as const;
type Category = typeof CATEGORIES[number];

const categoryMap: Record<string, Category> = {
  "albert-einstein": "Scientists",
  "stephen-hawking": "Scientists",
  "nikola-tesla": "Scientists",
  "elon-musk": "Business",
  "mark-zuckerberg": "Business",
  "bill-gates": "Business",
  "jeff-bezos": "Business",
  "sam-altman": "Business",
  "jensen-huang": "Business",
  "ryan-reynolds": "Business",
  "rihanna": "Business",
  "kim-kardashian": "Business",
  "cristiano-ronaldo": "Athletes",
  "lionel-messi": "Athletes",
  "lebron-james": "Athletes",
  "michael-jordan": "Athletes",
  "tiger-woods": "Athletes",
  "donald-trump": "Politicians",
  "vladimir-putin": "Politicians",
  "joe-biden": "Politicians",
  "kamala-harris": "Politicians",
  "xi-jinping": "Politicians",
  "barron-trump": "Politicians",
  "taylor-swift": "Musicians",
  "kanye-west": "Musicians",
  "beyonce": "Musicians",
  "michael-jackson": "Musicians",
  "drake": "Musicians",
  "the-weeknd": "Musicians",
  "dua-lipa": "Musicians",
  "sabrina-carpenter": "Musicians",
  "harry-styles": "Musicians",
  "chappell-roan": "Musicians",
  "peso-pluma": "Musicians",
  "jungkook-bts": "Musicians",
};

const FamousIQHub = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const sorted = [...famousIQData].sort((a, b) => {
    const aIQ = parseInt(a.estimatedIQ);
    const bIQ = parseInt(b.estimatedIQ);
    return bIQ - aIQ;
  });

  const filtered = activeCategory === "All"
    ? sorted
    : sorted.filter((p) => categoryMap[p.slug] === activeCategory);

  return (
    <ContentPage>
      <SEOHead
        title="Famous People IQ Claims: Verified Scores vs Estimates | MyIQScores"
        description="Review widely circulated celebrity IQ claims with a clear warning: most are unauthenticated estimates, not released professional test results."
        canonicalUrl="/famous-iq"
        ogType="article"
      />

      <h1><span className="gradient-text">Famous People IQ Claims:</span> Evidence Before Numbers</h1>

      <p>
        Celebrity IQ figures spread easily and verify poorly. This index collects commonly circulated
        estimates so readers can examine the claims, not treat them as authenticated test results.
      </p>

      <p className="text-sm text-muted-foreground">
        <strong>Evidence warning:</strong> The figures below are unverified estimates. Academic records,
        career achievements, and public statements cannot be converted into a valid IQ score. Unless a
        named test and authenticated report are available, the number should be treated as speculation. See{" "}
        <Link to="/types-of-iq-tests">how IQ tests work</Link>.
      </p>

      <h2>Browse by Category</h2>
      <div className="flex flex-wrap gap-2 my-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "glass-card text-foreground hover:bg-[rgba(255,255,255,0.08)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <table>
        <thead>
          <tr><th>Name</th><th>Circulated estimate (unverified)</th><th>Known For</th></tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
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

      <h2>Related Articles</h2>
      <ul>
        <li><Link to="/genius-iq">What Is a Genius IQ?</Link> — How high does your IQ need to be to qualify as a genius?</li>
        <li><Link to="/highest-iq-ever">Highest IQ Ever Recorded</Link> — The most extreme IQ scores in history</li>
        <li><Link to="/average-iq-by-country">Average IQ by Country</Link> — How nations compare on cognitive benchmarks</li>
        <li><Link to="/good-iq-score">What Is a Good IQ Score?</Link> — Understanding the full IQ scale</li>
      </ul>
    </ContentPage>
  );
};

export default FamousIQHub;
