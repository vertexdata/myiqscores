import { Link } from "react-router-dom";
import { Award, BookOpen, Mail, Shield, Users } from "lucide-react";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const About = () => (
  <ContentPage showLeaderboard={false} showSidebar={false}>
    <SEOHead title="About MyIQScores™ — Mission, Standards & Contact" description="Learn what MyIQScores is, how its reasoning test works, what it cannot establish, and how to contact the publisher." canonicalUrl="/about" />
    <h1>About <span className="gradient-text">MyIQScores™</span></h1>
    <p>MyIQScores is an independently operated educational site for reasoning practice, score interpretation, and plain-language guides to cognitive testing. Its purpose is to make a complicated subject easier to explore without presenting an online quiz as a clinical assessment.</p>

    <div className="grid grid-cols-1 gap-4 my-8 sm:grid-cols-3">
      <div className="glass-card p-5 rounded-xl text-center"><Users className="w-8 h-8 text-primary mx-auto mb-3" /><p className="font-heading font-bold text-2xl">Free</p><p className="text-sm text-muted-foreground">Core Result</p></div>
      <div className="glass-card p-5 rounded-xl text-center"><BookOpen className="w-8 h-8 text-primary mx-auto mb-3" /><p className="font-heading font-bold text-2xl">Open</p><p className="text-sm text-muted-foreground">Methodology & Limits</p></div>
      <div className="glass-card p-5 rounded-xl text-center"><Award className="w-8 h-8 text-primary mx-auto mb-3" /><p className="font-heading font-bold text-2xl">30</p><p className="text-sm text-muted-foreground">Reasoning Problems</p></div>
    </div>

    <h2>Our Mission</h2>
    <p>People deserve clear reasoning practice and honest score education without a forced account, hidden result gate, or misleading clinical language. The core test, on-screen result, category breakdown, and educational context are free. Optional paid products, when offered, are labeled separately and are never required to view the core result.</p>

    <h2>What the Test Contains</h2>
    <p>The question set contains six items in each of five categories: pattern recognition, logical reasoning, verbal reasoning, spatial reasoning, and numerical reasoning. Category bars describe performance on those items; they are not clinical subscores.</p>
    <p>The set has not undergone a representative norming or validation study. Its mapped score is an educational estimate, not a certified IQ, diagnosis, or substitute for a qualified professional using an appropriate current instrument. The exact calculation is published on our <Link to="/methodology">methodology page</Link>.</p>

    <h2>What We Publish</h2>
    <ul>
      <li><Link to="/what-is-iq">What Is IQ?</Link> — standardization, reliability, validity, and limits</li>
      <li><Link to="/iq-score-interpreter">IQ Score Interpreter</Link> — percentile and bell-curve context</li>
      <li><Link to="/types-of-iq-tests">Professional Tests</Link> — how formal assessment differs</li>
      <li><Link to="/famous-iq">Famous IQ Claims</Link> — what is documented, rumored, or unknowable</li>
    </ul>
    <p>We distinguish established psychometric concepts from disputed datasets, estimates, and internet folklore. We do not infer a precise IQ from someone’s occupation or accomplishments. Read the <Link to="/editorial-policy">editorial policy</Link> and <Link to="/corrections-policy">corrections policy</Link>.</p>

    <h2>Privacy & Trust</h2>
    <div className="glass-card p-5 rounded-xl my-6 space-y-4">
      <div className="flex gap-3"><Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-1" /><p className="text-sm text-muted-foreground"><strong className="text-foreground">No account is required.</strong> Answers remain in the browser unless a visitor explicitly requests an emailed copy.</p></div>
      <div className="flex gap-3"><Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-1" /><p className="text-sm text-muted-foreground"><strong className="text-foreground">No ads appear on answer screens.</strong> Future advertising is reserved for substantial editorial content and later result context.</p></div>
      <div className="flex gap-3"><Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-1" /><p className="text-sm text-muted-foreground"><strong className="text-foreground">Scoring is explicit.</strong> Accuracy determines the displayed result; completion time is shown but does not change it.</p></div>
    </div>
    <p>See the full <Link to="/privacy-policy">Privacy Policy</Link>, <Link to="/advertising-policy">Advertising Policy</Link>, and <Link to="/terms-of-service">Terms of Service</Link>.</p>

    <h2>Contact</h2>
    <div className="glass-card p-6 rounded-xl my-6">
      <div className="flex items-center gap-3 mb-4"><Mail className="w-6 h-6 text-primary" /><h3 className="!m-0 font-heading font-bold text-lg">Get in touch</h3></div>
      <p className="text-sm text-muted-foreground">Send question feedback, correction evidence, privacy requests, or business inquiries to the appropriate address.</p>
      <ul className="text-sm text-muted-foreground space-y-2 mt-4"><li><strong className="text-foreground">General:</strong> <a href="mailto:support@myiqscores.com">support@myiqscores.com</a></li><li><strong className="text-foreground">Corrections:</strong> <a href="mailto:content@myiqscores.com">content@myiqscores.com</a></li><li><strong className="text-foreground">Business:</strong> <a href="mailto:business@myiqscores.com">business@myiqscores.com</a></li></ul>
    </div>

    <h2>Important Limitation</h2>
    <p>MyIQScores is not a clinical provider. Do not use its result for diagnosis, educational placement, disability evaluation, or employment decisions. Claims about public figures are often unverified; career success is not evidence of a precise IQ.</p>
  </ContentPage>
);

export default About;
