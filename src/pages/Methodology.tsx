import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const Methodology = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead title="Test Methodology — How MyIQScores Calculates Results" description="See the exact MyIQScores scoring formula, question categories, known limitations, and the difference between this online reasoning test and professional assessment." canonicalUrl="/methodology" />
    <h1>Test Methodology</h1>
    <p>MyIQScores provides a short online reasoning estimate for education and practice. This page states exactly how the current version works and where interpretation must stop.</p>

    <h2>Question Structure</h2>
    <p>The test contains 30 multiple-choice questions, six in each task category:</p>
    <ul><li><strong>Pattern recognition:</strong> numerical sequences and rules.</li><li><strong>Logical reasoning:</strong> deduction and structured problems.</li><li><strong>Verbal reasoning:</strong> vocabulary, analogy, classification, and simple coding.</li><li><strong>Spatial reasoning:</strong> shape facts, rotation, orientation, and spatial calculation.</li><li><strong>Numerical reasoning:</strong> arithmetic relationships and applied calculation.</li></ul>
    <p>The labels describe the content of this question set. They are not equivalent to index scores from a professional test battery. The test does not currently include a defensible working-memory subscore.</p>

    <h2>Exact Scoring Formula</h2>
    <p>Each correct answer contributes one raw point. Accuracy from 0 to 30 is mapped linearly to a displayed range from 70 to 130:</p>
    <div className="glass-card my-6 rounded-xl p-5 text-center font-mono text-sm sm:text-base">displayed score = round(70 + correct answers ÷ 30 × 60)</div>
    <p>Completion time is displayed for personal context but <strong>does not affect the score</strong>. Each category bar reports correct answers out of six and is not standardized against a reference sample.</p>

    <h2>Validation Status</h2>
    <p>This question set has not been normed on a representative population and has not established test-retest reliability, criterion validity, diagnostic accuracy, or equivalence with the WAIS, Stanford-Binet, or Raven’s Progressive Matrices. The familiar-looking scale is a presentation mapping, not evidence that the result is interchangeable with a professional Full Scale IQ.</p>
    <p>The <a href="https://www.apa.org/science/programs/testing/standards" rel="noopener noreferrer">Standards for Educational and Psychological Testing</a> emphasize evidence for reliability, validity, fairness, and appropriate score use. Because MyIQScores has not completed that work, we do not describe its result as certified, diagnostic, or official.</p>

    <h2>Sources of Uncertainty</h2>
    <p>Device size, language background, fatigue, distraction, prior exposure to similar questions, and the limited number of items can all change performance. A universal confidence interval cannot be responsibly attached to this quiz without empirical reliability data.</p>

    <h2>Professional Assessment</h2>
    <p>Professional instruments use standardized administration, multiple subtests, current normative samples, documented reliability evidence, and qualified interpretation. For example, the current <a href="https://www.pearsonassessments.com/en-us/Store/Professional-Assessments/Cognition-%26-Neuro/Wechsler-Adult-Intelligence-Scale-%7C-Fifth-Edition/p/P100071002" rel="noopener noreferrer">WAIS-5</a> includes multiple cognitive domains and updated norms. If a result matters for healthcare, school, disability, or legal decisions, consult a qualified professional. Our <Link to="/types-of-iq-tests">professional testing guide</Link> explains common options.</p>

    <h2>Version and Corrections</h2>
    <p>The current scoring version is <strong>reasoning_v2</strong>. Ambiguous items 7, 11, and 19 were clarified in September 2026. Future material scoring changes should update the version label so analytics and result interpretation do not mix unlike forms. Report a concern to <a href="mailto:content@myiqscores.com">content@myiqscores.com</a>.</p>
  </ContentPage>
);

export default Methodology;
