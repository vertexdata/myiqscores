import { lazy, Suspense, useState, useCallback, useEffect } from "react";
import { Link } from "@/components/StaticLink";
import { Brain } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import Landing from "@/components/Landing";
import SEOHead from "@/components/SEOHead";
import { trackReturnVisit } from "@/lib/analytics";
import PrivacyChoices from "@/components/PrivacyChoices";

type Screen = "landing" | "quiz" | "processing" | "results";

const Quiz = lazy(() => import("@/components/Quiz"));
const Processing = lazy(() => import("@/components/Processing"));
const Results = lazy(() => import("@/components/Results"));

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MyIQScores Free IQ Test",
  url: "https://www.myiqscores.com/test",
  description: "Take a free IQ-style reasoning test online with instant educational results.",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const Index = () => {
  const [screen, setScreen] = useState<Screen>("landing");
  const [userData, setUserData] = useState({ name: "", email: "", ageRange: "" });
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const [challengerScore, setChallengerScore] = useState<{ score: number; percentile: number } | null>(null);

  // Challenge data is carried in the link so it works across devices. It contains
  // only the score and percentile the sender explicitly chose to share.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const challenge = params.get("challenge");
    if (challenge) {
      const [score, percentile] = challenge.split("-").map(Number);
      if (Number.isInteger(score) && score >= 55 && score <= 160 && Number.isInteger(percentile) && percentile >= 0 && percentile <= 100) {
        setChallengerScore({ score, percentile });
      }
    }
  }, []);

  useEffect(() => {
    const key = "myiqscores:last-visit:v1";
    try {
      const now = Date.now();
      const previous = Number(localStorage.getItem(key));
      if (Number.isFinite(previous) && previous > 0) {
        const days = Math.max(0, Math.floor((now - previous) / 86_400_000));
        trackReturnVisit(days);
      }
      localStorage.setItem(key, String(now));
    } catch {
      // Storage may be unavailable in private browsing; the test still works.
    }
  }, []);

  const handleQuizComplete = useCallback((ans: (number | null)[], quizElapsed: number) => {
    setAnswers(ans);
    setElapsed(quizElapsed);
    setScreen("processing");
  }, []);

  const handleProcessingDone = useCallback(() => {
    setScreen("results");
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEOHead
        title="Free IQ Test — 30 Questions, Instant Score, No Paywall | MyIQScores"
        description="Take a free online IQ-style reasoning test. 30 questions, instant educational results, score ranges, and cognitive learning guides. No sign-up or paywall."
        canonicalUrl="https://www.myiqscores.com"
        jsonLd={websiteSchema}
      />
      <BackgroundEffect />
      <Navbar />

      <Suspense fallback={<div className="min-h-screen" aria-live="polite"><span className="sr-only">Loading test experience</span></div>}>
          <div key={screen} className="screen-enter">
            {screen === "landing" && <Landing onStart={() => setScreen("quiz")} />}
            {screen === "quiz" && <Quiz onComplete={handleQuizComplete} />}
            {screen === "processing" && <Processing onDone={handleProcessingDone} />}
            {screen === "results" && (
              <Results
                answers={answers}
                userName={userData.name}
                userEmail={userData.email}
                elapsed={elapsed}
                challengerScore={challengerScore}
              />
            )}
          </div>
      </Suspense>

      {/* Footer — show on landing and results screens */}
      {(screen === "landing" || screen === "results") && (
        <footer className="relative z-10 border-t border-[rgba(255,255,255,0.06)] mt-8">
          <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Footer CTA bar */}
            <div className="text-center mb-10 pb-10 border-b border-[rgba(255,255,255,0.06)]">
              <p className="text-muted-foreground text-sm mb-3">Ready to try the reasoning test?</p>
              <a href="/test" className="glow-button inline-block">Start the Free Reasoning Test →</a>
            </div>

            {/* 4-column link grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm mb-10">
              {/* Col 1: Learn */}
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Learn</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/what-is-iq" className="hover:text-foreground transition-colors">What Is IQ?</Link></li>
                  <li><Link to="/iq-score-ranges" className="hover:text-foreground transition-colors">IQ Score Ranges</Link></li>
                  <li><Link to="/iq-percentile-chart" className="hover:text-foreground transition-colors">IQ Bell Curve</Link></li>
                  <li><Link to="/iq-vs-eq" className="hover:text-foreground transition-colors">IQ vs EQ</Link></li>
                  <li><Link to="/how-to-improve-iq" className="hover:text-foreground transition-colors">How to Improve IQ</Link></li>
                  <li><Link to="/types-of-iq-tests" className="hover:text-foreground transition-colors">Types of IQ Tests</Link></li>
                </ul>
              </div>

              {/* Col 2: Evidence */}
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Evidence</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/research-sources" className="hover:text-foreground transition-colors">Research Sources</Link></li>
                  <li><Link to="/iq-myths" className="hover:text-foreground transition-colors">IQ Myths</Link></li>
                  <li><Link to="/famous-iq" className="hover:text-foreground transition-colors">Celebrity Claim Checks</Link></li>
                  <li><Link to="/average-iq-by-country" className="hover:text-foreground transition-colors">Country Ranking Limits</Link></li>
                  <li><Link to="/average-iq-by-state" className="hover:text-foreground transition-colors">State Ranking Limits</Link></li>
                  <li><Link to="/iq-by-career" className="hover:text-foreground transition-colors">IQ and Careers</Link></li>
                </ul>
              </div>

              {/* Col 3: Tools & Tests */}
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Tools &amp; Tests</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/" className="hover:text-foreground transition-colors">Free IQ Test</Link></li>
                  <li><Link to="/iq-score-interpreter" className="hover:text-foreground transition-colors">Score Interpreter</Link></li>
                  <li><Link to="/iq-percentile-chart" className="hover:text-foreground transition-colors">IQ Percentile Chart</Link></li>
                  <li><Link to="/average-iq-by-country" className="hover:text-foreground transition-colors">Average IQ by Country</Link></li>
                  <li><Link to="/methodology" className="hover:text-foreground transition-colors">Quiz Methodology</Link></li>
                  <li><Link to="/blog" className="hover:text-foreground transition-colors">Learning Center</Link></li>
                </ul>
              </div>

              {/* Col 4: Company */}
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Company</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                  <li><Link to="/methodology" className="hover:text-foreground transition-colors">Methodology</Link></li>
                  <li><Link to="/editorial-policy" className="hover:text-foreground transition-colors">Editorial Policy</Link></li>
                  <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                  <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>

            {/* Legal row */}
            <div className="pt-6 border-t border-[rgba(255,255,255,0.06)] mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
              <Link to="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link>
              <PrivacyChoices />
              <Link to="/advertising-policy" className="hover:text-foreground transition-colors">Advertising Policy</Link>
              <Link to="/corrections-policy" className="hover:text-foreground transition-colors">Corrections</Link>
              <Link to="/editorial-policy" className="hover:text-foreground transition-colors">Editorial Policy</Link>
              <Link to="/methodology" className="hover:text-foreground transition-colors">Methodology</Link>
            </div>

            {/* Brand row */}
            <div className="pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                <span className="font-heading font-bold text-foreground">
                  My<span className="text-primary">IQ</span>Scores<sup className="text-[8px] text-muted-foreground/50 ml-0.5">™</sup>
                </span>
                <span className="text-muted-foreground text-xs ml-2">— Free IQ estimate and learning guides.</span>
              </div>
              <span className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} MyIQScores™. All rights reserved.</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Index;
