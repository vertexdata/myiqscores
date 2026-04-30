import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const Methodology = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead
      title="IQ Test Methodology — How MyIQScores Estimates Results"
      description="Learn how the MyIQScores free IQ-style test is structured, what it measures, how results are estimated, and where online testing has limits."
      canonicalUrl="/methodology"
    />

    <h1>IQ Test Methodology</h1>
    <p>
      MyIQScores provides an online IQ-style reasoning estimate for educational use. The test is
      designed to help visitors practice common cognitive question formats and understand how score
      ranges work, not to replace a professionally administered assessment.
    </p>

    <h2>What the Test Measures</h2>
    <p>
      The assessment includes 30 questions across five broad cognitive domains. Each domain mirrors a
      skill commonly represented in standardized cognitive testing, while staying suitable for a
      short online format.
    </p>
    <ul>
      <li><strong>Pattern recognition:</strong> identifying visual, numerical, or symbolic rules.</li>
      <li><strong>Logical reasoning:</strong> applying rules and eliminating inconsistent answers.</li>
      <li><strong>Spatial reasoning:</strong> mentally rotating, comparing, or completing shapes.</li>
      <li><strong>Numerical reasoning:</strong> recognizing quantitative relationships and sequences.</li>
      <li><strong>Working memory:</strong> holding and manipulating information during a problem.</li>
    </ul>

    <h2>How Results Are Estimated</h2>
    <p>
      Results are based on answer accuracy, question difficulty, and completion time. The final score
      is mapped to familiar IQ score ranges so visitors can understand whether a result is around
      average, above average, gifted, or unusually high.
    </p>
    <p>
      Because this is a web-based estimate, the result should be interpreted as a learning aid. Test
      environment, fatigue, device size, prior exposure to similar questions, language background,
      and distractions can all affect performance.
    </p>

    <h2>What This Test Is Not</h2>
    <p>
      MyIQScores is not a clinical instrument and has not been normed in the same way as the
      WAIS, WISC, Stanford-Binet, or Raven's Progressive Matrices. It should not be used for medical
      diagnosis, school placement, hiring, disability evaluation, or any decision requiring a
      licensed professional.
    </p>

    <h2>Professional IQ Testing</h2>
    <p>
      A formal IQ score should come from a licensed psychologist or qualified examiner using a
      validated test battery under controlled conditions. If you need an official result, start with
      our guide to <Link to="/types-of-iq-tests">types of IQ tests</Link> and then contact a local
      licensed clinician or school psychologist.
    </p>

    <h2>How We Improve the Test</h2>
    <p>
      We review question clarity, completion patterns, user feedback, and result explanations over
      time. When a question is confusing, ambiguous, or too dependent on cultural knowledge, it can
      be revised or removed. Content corrections can be sent to{" "}
      <a href="mailto:content@myiqscores.com">content@myiqscores.com</a>.
    </p>
  </ContentPage>
);

export default Methodology;
