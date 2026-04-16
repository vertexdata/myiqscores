import { useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What IQ is an AFQT score of 99?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AFQT percentile score of 99 corresponds to roughly IQ 130 or above, placing you in the gifted range. The AFQT 99 means you scored better than 99% of the reference population. This is an estimate — the ASVAB AFQT is not an IQ test, but it measures overlapping cognitive abilities.",
      },
    },
    {
      "@type": "Question",
      name: "What AFQT score do you need for the military?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum AFQT requirements vary by branch: Army requires 31, Navy 35, Marines 32, Air Force 36, Coast Guard 40, and Space Force 36. These minimums are roughly equivalent to IQ 95–100. Many specialties (MOS/ratings) require significantly higher AFQT scores or specific subtest scores.",
      },
    },
    {
      "@type": "Question",
      name: "Is the ASVAB the same as an IQ test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, the ASVAB is a vocational aptitude battery, not an IQ test. However, the AFQT portion (4 of 10 subtests) correlates with IQ at roughly 0.8 — one of the strongest correlations between any standardized test and general intelligence. The AFQT is essentially a measure of cognitive ability disguised as a military aptitude test.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good AFQT score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AFQT score of 50 is exactly average (50th percentile). Scores of 65+ are considered well above average and open all military branches and most specialties. Scores of 85+ (roughly IQ 120) qualify for the most demanding and selective military programs. Scores above 93 (roughly IQ 125+) place you in the top tier of military recruits.",
      },
    },
  ],
};

// AFQT percentile to IQ mapping (lookup table)
const afqtToIQTable: { afqt: number; iq: number }[] = [
  { afqt: 99, iq: 130 },
  { afqt: 93, iq: 125 },
  { afqt: 85, iq: 120 },
  { afqt: 72, iq: 115 },
  { afqt: 50, iq: 105 },
  { afqt: 31, iq: 100 },
  { afqt: 16, iq: 95 },
  { afqt: 7, iq: 90 },
  { afqt: 3, iq: 85 },
];

const afqtToIQ = (afqt: number): number => {
  // Find closest bracket and interpolate
  for (let i = 0; i < afqtToIQTable.length - 1; i++) {
    const upper = afqtToIQTable[i];
    const lower = afqtToIQTable[i + 1];
    if (afqt <= upper.afqt && afqt >= lower.afqt) {
      const ratio = (afqt - lower.afqt) / (upper.afqt - lower.afqt);
      return Math.round(lower.iq + ratio * (upper.iq - lower.iq));
    }
  }
  if (afqt >= 99) return 130;
  if (afqt <= 3) return 85;
  return 100;
};

const ASVABtoIQ = () => {
  const [afqtScore, setAfqtScore] = useState<string>("");
  const score = Number(afqtScore);
  const estimatedIQ = afqtScore !== "" && score >= 1 && score <= 99 ? afqtToIQ(score) : null;

  return (
    <ContentPage>
      <SEOHead
        title="ASVAB Score to IQ Score: AFQT to IQ Conversion | MyIQScores"
        description="Convert your ASVAB AFQT score to an estimated IQ. An AFQT of 99 corresponds roughly to an IQ of 130+. See the full ASVAB to IQ conversion table."
        canonicalUrl="/asvab-to-iq"
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        ASVAB to IQ Conversion: <span className="gradient-text">Estimate Your IQ from Your AFQT Score</span>
      </h1>

      <p>
        The ASVAB (Armed Services Vocational Aptitude Battery) is one of the most widely administered
        standardized tests in the United States, taken by approximately 1 million people annually.
        Its AFQT (Armed Forces Qualification Test) component — derived from four cognitive subtests —
        correlates with IQ at approximately 0.8, making it one of the strongest non-IQ proxies for
        general intelligence available. This page explains how to estimate your IQ from your AFQT
        percentile score.
      </p>

      <h2>AFQT to IQ Calculator</h2>
      <p>Enter your AFQT percentile score (1–99) to see an estimated IQ:</p>

      <div className="glass-card p-6 rounded-xl my-6 max-w-sm">
        <label className="block text-sm font-semibold mb-2 text-white/80" htmlFor="afqtInput">
          AFQT Percentile Score
        </label>
        <input
          id="afqtInput"
          type="number"
          min={1}
          max={99}
          value={afqtScore}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "" || (Number(val) >= 1 && Number(val) <= 99)) {
              setAfqtScore(val);
            }
          }}
          placeholder="e.g. 72"
          className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary text-lg"
        />
        {estimatedIQ !== null && (
          <div className="mt-4 p-4 rounded-lg bg-primary/20 border border-primary/30 text-center">
            <p className="text-white/70 text-sm mb-1">AFQT {afqtScore}th percentile</p>
            <p className="text-white/70 text-sm mb-1">Estimated IQ</p>
            <p className="text-3xl font-bold gradient-text">~{estimatedIQ}</p>
            <p className="text-white/60 text-xs mt-1">
              Approximate range: IQ {estimatedIQ - 3}–{estimatedIQ + 3}
            </p>
          </div>
        )}
      </div>

      <h2>AFQT to IQ Conversion Table</h2>
      <p>
        These are estimated IQ equivalents for AFQT percentile scores, based on the correlation
        between AFQT and standardized IQ assessments from military and civilian research.
      </p>
      <table>
        <thead>
          <tr>
            <th>AFQT Percentile</th>
            <th>Estimated IQ</th>
            <th>IQ Classification</th>
            <th>Military Category</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>99</td><td>130+</td><td>Gifted</td><td>Category I</td></tr>
          <tr><td>93</td><td>~125</td><td>Superior</td><td>Category I</td></tr>
          <tr><td>85</td><td>~120</td><td>Superior</td><td>Category II</td></tr>
          <tr><td>72</td><td>~115</td><td>High Average</td><td>Category IIIA</td></tr>
          <tr><td>50</td><td>~105</td><td>Average</td><td>Category IIIB</td></tr>
          <tr><td>31</td><td>~100</td><td>Average</td><td>Category IIIB</td></tr>
          <tr><td>16</td><td>~95</td><td>Average</td><td>Category IVA</td></tr>
          <tr><td>7</td><td>~90</td><td>Average</td><td>Category IVB</td></tr>
          <tr><td>3</td><td>~85</td><td>Low Average</td><td>Category IVC</td></tr>
        </tbody>
      </table>

      <h2>What Is the ASVAB?</h2>
      <p>
        The ASVAB consists of 10 subtests measuring a range of cognitive and technical skills:
      </p>
      <ul>
        <li><strong>General Science (GS)</strong> — physical, biological, and earth sciences</li>
        <li><strong>Arithmetic Reasoning (AR)</strong> — word problems requiring mathematical reasoning</li>
        <li><strong>Word Knowledge (WK)</strong> — vocabulary and word meanings</li>
        <li><strong>Paragraph Comprehension (PC)</strong> — reading passage understanding</li>
        <li><strong>Mathematics Knowledge (MK)</strong> — high school math concepts</li>
        <li><strong>Electronics Information (EI)</strong> — electrical and electronic principles</li>
        <li><strong>Auto and Shop Information (AS)</strong> — automotive and shop procedures</li>
        <li><strong>Mechanical Comprehension (MC)</strong> — mechanical principles and devices</li>
        <li><strong>Assembling Objects (AO)</strong> — spatial reasoning and assembly</li>
        <li><strong>Verbal Expression (VE)</strong> — combined WK + PC score</li>
      </ul>

      <h2>What Is the AFQT?</h2>
      <p>
        The AFQT is not a separate test — it is a percentile score calculated from four specific ASVAB
        subtests:
      </p>
      <ul>
        <li><strong>Arithmetic Reasoning (AR)</strong></li>
        <li><strong>Mathematics Knowledge (MK)</strong></li>
        <li><strong>Paragraph Comprehension (PC)</strong></li>
        <li><strong>Word Knowledge (WK)</strong></li>
      </ul>
      <p>
        These four subtests were selected precisely because they measure cognitive abilities that
        most closely resemble general intelligence (g). The AFQT score is expressed as a percentile
        relative to a 1997 nationally representative reference sample of 18–23-year-olds.
      </p>

      <h2>Military Branch Minimum AFQT Requirements</h2>
      <table>
        <thead>
          <tr>
            <th>Branch</th>
            <th>Minimum AFQT</th>
            <th>With GED</th>
            <th>Typical IQ Range</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Army</td><td>31</td><td>50</td><td>~100+</td></tr>
          <tr><td>Navy</td><td>35</td><td>50</td><td>~101+</td></tr>
          <tr><td>Marine Corps</td><td>32</td><td>50</td><td>~100+</td></tr>
          <tr><td>Air Force</td><td>36</td><td>65</td><td>~101+</td></tr>
          <tr><td>Coast Guard</td><td>40</td><td>50</td><td>~102+</td></tr>
          <tr><td>Space Force</td><td>36</td><td>65</td><td>~101+</td></tr>
        </tbody>
      </table>
      <p>
        These are general enlistment minimums. Many Military Occupational Specialties (MOS),
        Navy ratings, and officer programs require significantly higher scores. Special operations
        roles, intelligence work, and technical specialties often require AFQT 85+ (estimated IQ 120+).
      </p>

      <h2>ASVAB vs. IQ: Key Similarities and Differences</h2>
      <ul>
        <li>
          <strong>Correlation with g</strong> — the AFQT correlates with general intelligence
          at ~0.8, comparable to the best IQ subtests. This is higher than the SAT (~0.77) or
          ACT (~0.70).
        </li>
        <li>
          <strong>Normed on a large population</strong> — unlike many standardized tests, the
          AFQT is normed on a nationally representative sample, making percentile-to-IQ
          conversions more reliable.
        </li>
        <li>
          <strong>Content knowledge required</strong> — like the SAT/ACT, the ASVAB tests
          specific learned content (math formulas, vocabulary), not just pure reasoning.
        </li>
        <li>
          <strong>Ceiling effects</strong> — very high scorers (99th percentile) are compressed
          into a narrow band, making it hard to distinguish between IQ 130 and IQ 145+.
        </li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>What IQ is an AFQT score of 99?</h3>
      <p>
        An AFQT of 99 corresponds to roughly IQ 130 or above — the gifted range. This means you
        scored better than 99% of the reference population on cognitive tasks.
      </p>

      <h3>What AFQT score do you need for the military?</h3>
      <p>
        Minimums range from AFQT 31 (Army) to AFQT 40 (Coast Guard). Most branches require
        higher scores for technical or officer roles. An AFQT of 50+ opens all branches and
        most specialties.
      </p>

      <h3>Is the ASVAB the same as an IQ test?</h3>
      <p>
        No, but the AFQT component is one of the best non-IQ proxies for general intelligence
        available, with a correlation of ~0.8. It's more predictive of g than many individually
        administered IQ subtests.
      </p>

      <h3>What is a good AFQT score?</h3>
      <p>
        A score of 50 is average. Scores of 65+ (estimated IQ 112+) are well above average and
        open the most opportunities. Scores of 85+ (estimated IQ 120+) qualify for the most
        selective programs.
      </p>

      <p className="mt-8">
        Compare other standardized tests:{" "}
        <Link to="/sat-to-iq">SAT to IQ converter</Link> |{" "}
        <Link to="/act-to-iq">ACT to IQ converter</Link>. Learn more about{" "}
        <Link to="/iq-score-ranges">IQ score ranges and classifications</Link> or{" "}
        <Link to="/test">take our free IQ test</Link>.
      </p>
    </ContentPage>
  );
};

export default ASVABtoIQ;
