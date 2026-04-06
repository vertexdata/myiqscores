import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import Landing from "@/components/Landing";
import Quiz from "@/components/Quiz";
import Processing from "@/components/Processing";
import Results from "@/components/Results";
import EmailNurture from "@/components/EmailNurture";
import SEOHead from "@/components/SEOHead";

type Screen = "landing" | "quiz" | "processing" | "results";

const pageTransition = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.25 } },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MyIQScores",
  url: "https://www.myiqscores.com",
  description: "Free online IQ test with instant results. No sign-up required.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.myiqscores.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const Index = () => {
  const [screen, setScreen] = useState<Screen>("landing");
  const [userData, setUserData] = useState({ name: "", email: "", ageRange: "" });
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const [showNurture, setShowNurture] = useState(false);
  const [challengerScore, setChallengerScore] = useState<{ score: number; percentile: number } | null>(null);

  // Check for ?ref= challenge param on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) {
      const stored = localStorage.getItem(`iq_challenge_${ref}`);
      if (stored) {
        try {
          setChallengerScore(JSON.parse(stored));
        } catch {}
      }
    }
  }, []);

  const handleQuizComplete = useCallback((ans: (number | null)[], quizElapsed: number) => {
    setAnswers(ans);
    setElapsed(quizElapsed);
    setScreen("processing");
  }, []);

  const handleProcessingDone = useCallback(() => {
    setScreen("results");
    // Show nurture bar after 10 seconds on results page
    setTimeout(() => setShowNurture(true), 10000);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEOHead
        title="Free IQ Test — 30 Questions, Instant Score, No Paywall | MyIQScores"
        description="Take the most accurate free IQ test online. 30 questions, 15 minutes, instant results. No sign-up, no paywall, no email required. See how smart you really are."
        canonicalUrl="https://www.myiqscores.com"
        jsonLd={websiteSchema}
      />
      <BackgroundEffect />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div key={screen} {...pageTransition}>
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
              onShowNurture={() => setShowNurture(true)}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showNurture && screen === "results" && (
          <EmailNurture email={userData.email} onClose={() => setShowNurture(false)} />
        )}
      </AnimatePresence>

      {/* Footer — show on landing and results screens */}
      {(screen === "landing" || screen === "results") && (
        <footer className="relative z-10 border-t border-[rgba(255,255,255,0.06)] mt-8">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-sm">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-primary" />
                  <span className="font-heading font-bold text-foreground">
                    My<span className="text-primary">IQ</span>Scores<sup className="text-[8px] text-muted-foreground/50 ml-0.5">™</sup>
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  The most accurate free IQ test online. 30 questions, instant results.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Learn</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/what-is-iq" className="hover:text-foreground transition-colors">What Is IQ?</Link></li>
                  <li><Link to="/iq-score-ranges" className="hover:text-foreground transition-colors">IQ Score Ranges</Link></li>
                  <li><Link to="/famous-iq" className="hover:text-foreground transition-colors">Famous People IQs</Link></li>
                  <li><Link to="/iq-by-career" className="hover:text-foreground transition-colors">IQ by Career</Link></li>
                  <li><Link to="/average-iq-by-country" className="hover:text-foreground transition-colors">IQ by Country</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Company</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                  <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>&copy; {new Date().getFullYear()} MyIQScores™. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
                <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
                <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Index;
