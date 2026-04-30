import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const Contact = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead
      title="Contact MyIQScores"
      description="Contact MyIQScores for support, privacy requests, business questions, or content corrections."
      canonicalUrl="/contact"
    />

    <h1>Contact MyIQScores</h1>
    <p>
      Have a question about the test, your result, privacy, or a content correction? Use the contact
      options below and include the page URL when your message is about a specific article.
    </p>

    <h2>Support</h2>
    <p>
      For general questions about the free IQ-style test or site functionality, email{" "}
      <a href="mailto:support@myiqscores.com">support@myiqscores.com</a>.
    </p>

    <h2>Privacy Requests</h2>
    <p>
      For data access, deletion, or privacy questions, email{" "}
      <a href="mailto:privacy@myiqscores.com">privacy@myiqscores.com</a>. You can also read our{" "}
      <Link to="/privacy-policy">Privacy Policy</Link>.
    </p>

    <h2>Content Corrections</h2>
    <p>
      For article corrections, source questions, or methodology feedback, email{" "}
      <a href="mailto:content@myiqscores.com">content@myiqscores.com</a>. We review correction
      requests and update pages when the evidence supports a change.
    </p>

    <h2>Business</h2>
    <p>
      For partnerships or business inquiries, email{" "}
      <a href="mailto:business@myiqscores.com">business@myiqscores.com</a>.
    </p>
  </ContentPage>
);

export default Contact;
