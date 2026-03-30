import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const TermsOfService = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead
      title="Terms of Service — MyIQScores™"
      description="Terms of Service for MyIQScores.com. Read our terms and conditions for using the free IQ test and website content."
      canonicalUrl="/terms-of-service"
    />

    <h1>Terms of Service</h1>
    <p className="text-sm !text-muted-foreground/70">Last updated: March 30, 2026</p>

    <h2>1. Acceptance of Terms</h2>
    <p>
      By accessing and using MyIQScores.com ("the Website," "we," "us," or "our"), you accept and agree
      to be bound by these Terms of Service. If you do not agree to these terms, please do not use our
      Website. We reserve the right to modify these terms at any time, and your continued use of the
      Website constitutes acceptance of any modifications.
    </p>

    <h2>2. Description of Service</h2>
    <p>
      MyIQScores provides a free online IQ assessment tool along with educational content about
      intelligence quotient, cognitive ability, and related topics. Our IQ test is designed for
      entertainment and educational purposes. It is <strong>not a clinical diagnostic tool</strong> and
      should not be used as a substitute for professional psychological evaluation.
    </p>

    <h2>3. IQ Test Disclaimer</h2>
    <p>
      The IQ scores provided by MyIQScores are <strong>estimates for entertainment and educational
      purposes only</strong>. They are not equivalent to professionally administered IQ tests such as
      the WAIS-IV or Stanford-Binet. Our test has not been clinically validated or normed on a
      representative population sample. For an accurate IQ assessment, please consult a licensed
      psychologist.
    </p>
    <p>
      We make no guarantees about the accuracy, reliability, or clinical validity of our IQ scores.
      Scores may vary based on testing conditions, time of day, fatigue, and other factors. Do not
      make important life decisions based solely on your MyIQScores result.
    </p>

    <h2>4. User Accounts and Data</h2>
    <p>
      To receive your IQ test results, you may be asked to provide personal information including
      your name, email address, and age range. By providing this information, you consent to our
      collection and use of this data as described in our{" "}
      <Link to="/privacy-policy">Privacy Policy</Link>.
    </p>
    <p>
      You are responsible for providing accurate information. You agree not to provide false or
      misleading personal information.
    </p>

    <h2>5. Intellectual Property</h2>
    <p>
      All content on MyIQScores.com — including but not limited to text, graphics, logos, images,
      test questions, data compilations, and software — is the property of MyIQScores or its content
      suppliers and is protected by international copyright and trademark laws.
    </p>
    <p>
      The MyIQScores™ name, logo, and related trademarks are the property of MyIQScores. You may not
      use our trademarks without prior written consent.
    </p>

    <h2>6. Permitted and Prohibited Use</h2>
    <p><strong>You may:</strong></p>
    <ul>
      <li>Use the Website for personal, non-commercial, educational purposes</li>
      <li>Share your IQ certificate and results on social media</li>
      <li>Link to our content from your website or social media</li>
    </ul>
    <p><strong>You may not:</strong></p>
    <ul>
      <li>Reproduce, distribute, or republish our test questions or content without permission</li>
      <li>Use automated systems (bots, scrapers) to access the Website</li>
      <li>Attempt to reverse-engineer our scoring algorithm</li>
      <li>Use the Website for any unlawful purpose</li>
      <li>Impersonate another person when taking the test</li>
      <li>Misrepresent your MyIQScores results as a clinical IQ assessment</li>
    </ul>

    <h2>7. Educational Content Disclaimer</h2>
    <p>
      The educational content on MyIQScores — including articles about IQ scores, famous people's IQs,
      career IQ requirements, and IQ myths — is provided for informational and educational purposes.
      While we strive for accuracy, IQ estimates for famous individuals are approximations based on
      published sources and should not be treated as verified measurements.
    </p>
    <p>
      National and demographic IQ data presented on our site comes from published research and includes
      important limitations regarding sample sizes, testing conditions, and socioeconomic factors. We
      encourage readers to consider these caveats when interpreting such data.
    </p>

    <h2>8. Advertising and Third-Party Links</h2>
    <p>
      MyIQScores may display advertisements from third-party advertising networks including Google
      AdSense. We are not responsible for the content of third-party advertisements or the products
      and services they promote. Clicking on an advertisement may take you to a third-party website
      that is not operated by MyIQScores.
    </p>
    <p>
      Our Website may contain links to third-party websites. We are not responsible for the content,
      privacy practices, or terms of service of these external sites.
    </p>

    <h2>9. Limitation of Liability</h2>
    <p>
      MyIQScores is provided "as is" and "as available" without warranties of any kind, express or
      implied. To the fullest extent permitted by law, we disclaim all warranties including but not
      limited to implied warranties of merchantability, fitness for a particular purpose, and
      non-infringement.
    </p>
    <p>
      In no event shall MyIQScores be liable for any indirect, incidental, special, consequential, or
      punitive damages arising from your use of the Website, including but not limited to emotional
      distress caused by IQ test results, decisions made based on test scores, or reliance on
      educational content.
    </p>

    <h2>10. Indemnification</h2>
    <p>
      You agree to indemnify and hold harmless MyIQScores and its owners, operators, and affiliates
      from any claims, damages, or expenses arising from your use of the Website or violation of
      these Terms of Service.
    </p>

    <h2>11. Governing Law</h2>
    <p>
      These Terms of Service are governed by and construed in accordance with the laws of the United
      States. Any disputes arising from these terms shall be resolved in the courts of competent
      jurisdiction.
    </p>

    <h2>12. Changes to Terms</h2>
    <p>
      We reserve the right to modify these Terms of Service at any time. Changes will be posted on
      this page with an updated "Last updated" date. Your continued use of the Website after changes
      are posted constitutes acceptance of the modified terms.
    </p>

    <h2>13. Contact</h2>
    <p>
      If you have questions about these Terms of Service, please visit our{" "}
      <Link to="/about">About &amp; Contact page</Link> or email us at{" "}
      <a href="mailto:support@myiqscores.com">support@myiqscores.com</a>.
    </p>
  </ContentPage>
);

export default TermsOfService;
