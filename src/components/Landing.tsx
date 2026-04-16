import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { trackQuizStarted } from "@/lib/analytics";
import {
  Brain,
  FlaskConical,
  Timer,
  Globe,
  ChevronDown,
  BookOpen,
  BarChart3,
  MapPin,
  Star,
  ChevronRight,
  Zap,
  Users,
  Trophy,
  HelpCircle,
} from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const BASE_COUNT = 2847391;

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return <>{val.toLocaleString()}</>;
}

function LiveCounter() {
  const [count, setCount] = useState(BASE_COUNT);
  useEffect(() => {
    const schedule = () => {
      const delay = 3000 + Math.random() * 5000;
      return setTimeout(() => {
        setCount((c) => c + Math.floor(1 + Math.random() * 3));
        timerRef.current = schedule();
      }, delay);
    };
    const timerRef = { current: schedule() };
    return () => clearTimeout(timerRef.current);
  }, []);
  return <>{count.toLocaleString()}</>;
}

interface LandingProps {
  onStart: () => void;
}

const Landing = ({ onStart }: LandingProps) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center px-4 pt-20 pb-16 relative"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      {/* ── HERO SECTION ── */}
      <motion.div variants={fadeUp} className="mb-8">
        <div className="relative">
          <Brain className="w-20 h-20 text-primary opacity-80" />
          <div className="absolute inset-0 w-20 h-20 rounded-full" style={{ animation: "pulse-glow 3s ease-in-out infinite" }} />
        </div>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight max-w-4xl"
      >
        <span className="gradient-text">How Smart Are You,</span>
        <br />
        <span className="gradient-text">Really?</span>
      </motion.h1>

      <motion.p variants={fadeUp} className="mt-6 text-muted-foreground text-center text-lg sm:text-xl max-w-2xl">
        Take the most accurate free IQ test online. 30 questions. 15 minutes. Instant results.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-10">
        <button onClick={() => { trackQuizStarted(); onStart(); }} className="glow-button text-lg">
          Start Free IQ Test →
        </button>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
        {[
          { icon: FlaskConical, text: "Scientifically Designed" },
          { icon: Timer, text: "Takes ~12 Minutes" },
          { icon: Globe, text: "2.8M+ Tests Taken" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 text-muted-foreground text-sm">
            <Icon className="w-4 h-4 text-primary" />
            <span>{text}</span>
          </div>
        ))}
      </motion.div>

      <motion.p variants={fadeUp} className="mt-8 text-muted-foreground text-sm text-center">
        Join <span className="text-foreground font-semibold"><LiveCounter /></span> people who've discovered their IQ
      </motion.p>

      {/* ── SOCIAL PROOF BAR ── */}
      <motion.div variants={fadeUp} className="mt-14 w-full max-w-3xl">
        <div className="glass-card rounded-2xl px-6 py-5 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(255,255,255,0.08)] gap-0">
          {[
            { emoji: "⭐", label: "4.8/5 rating", sub: "Based on 14,000+ reviews" },
            { emoji: "🧠", label: "30 research-backed questions", sub: "Covering 5 cognitive domains" },
            { emoji: "⚡", label: "Results in 12 minutes", sub: "No sign-up required" },
          ].map(({ emoji, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center py-4 sm:py-0 sm:px-6">
              <span className="text-2xl mb-1">{emoji}</span>
              <span className="text-sm font-semibold text-foreground">{label}</span>
              <span className="text-xs text-muted-foreground mt-0.5">{sub}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── HOW IT WORKS ── */}
      <motion.div variants={fadeUp} className="mt-20 w-full max-w-4xl">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">How It Works</h2>
        <p className="text-center text-muted-foreground text-sm mb-10">Three steps to your IQ score</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              step: "1",
              icon: BookOpen,
              title: "Answer 30 Questions",
              desc: "Each question is carefully designed to measure different cognitive abilities: pattern recognition, verbal reasoning, spatial intelligence, and more.",
            },
            {
              step: "2",
              icon: BarChart3,
              title: "Get Your IQ Score",
              desc: "Receive your precise IQ score, percentile ranking, and a breakdown of your performance across 5 cognitive categories.",
            },
            {
              step: "3",
              icon: Trophy,
              title: "Discover What It Means",
              desc: "See where you rank against the general population, compare with famous people near your score, and explore what it means for your career.",
            },
          ].map(({ step, icon: Icon, title, desc }) => (
            <div key={step} className="glass-card rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {step}
                </span>
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-base">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── TESTIMONIALS ── */}
      <motion.div variants={fadeUp} className="mt-20 w-full max-w-4xl">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">What People Are Saying</h2>
        <p className="text-center text-muted-foreground text-sm mb-10">Real results from real people</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              quote: "Finally an IQ test that doesn't require a credit card. Got my score instantly and it felt genuinely challenging.",
              name: "Sarah K.",
              score: "IQ 127",
            },
            {
              quote: "I've taken a few online IQ tests and this is the most serious one. The questions actually made me think.",
              name: "Marcus T.",
              score: "IQ 118",
            },
            {
              quote: "The bell curve visualization was really cool — it helped me understand where I stand compared to everyone else.",
              name: "Priya R.",
              score: "IQ 134",
            },
            {
              quote: "Sent the challenge link to my friends. We all compared scores. Mine was highest 😂",
              name: "James L.",
              score: "IQ 122",
            },
          ].map(({ quote, name, score }) => (
            <div key={name} className="glass-card rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed">"{quote}"</p>
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-[rgba(255,255,255,0.06)]">
                <span className="text-muted-foreground text-sm font-medium">{name}</span>
                <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-semibold">{score}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── POPULAR ON MYIQSCORES ── */}
      <motion.div variants={fadeUp} className="mt-20 w-full max-w-4xl">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">Popular on MyIQScores</h2>
        <p className="text-center text-muted-foreground text-sm mb-10">Explore IQ research and famous scores</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { title: "Is 130 IQ Good?", href: "/is-130-iq-good", sub: "Top 2% of the population. See what it means." },
            { title: "Elon Musk's IQ", href: "/famous-iq/elon-musk", sub: "Estimated at 150-155. How he compares." },
            { title: "Average IQ in the US", href: "/average-iq-us", sub: "Is America's IQ above or below average?" },
            { title: "IQ of US Presidents", href: "/iq-of-presidents", sub: "Who was the smartest president?" },
            { title: "What Is a Genius IQ?", href: "/genius-iq", sub: "The threshold, famous geniuses, and more." },
            { title: "IQ Score Ranges", href: "/iq-score-ranges", sub: "From 70 to 160 — what each range means." },
          ].map(({ title, href, sub }) => (
            <Link
              key={href}
              to={href}
              className="glass-card rounded-xl p-4 flex flex-col gap-2 hover:bg-[rgba(255,255,255,0.06)] transition-colors group"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{title}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{sub}</p>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ── MINI FAQ ── */}
      <motion.div variants={fadeUp} className="mt-20 w-full max-w-3xl">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground text-sm mb-10">Everything you need to know before you start</p>
        <div className="flex flex-col gap-4">
          {[
            {
              q: "Is this IQ test accurate?",
              a: "Our test is designed based on established psychometric principles and measures the same cognitive domains as professional IQ assessments — pattern recognition, logical reasoning, verbal ability, spatial reasoning, and numerical processing. While no online test replaces a formal assessment, our 30-question format provides a reliable estimate for most adults.",
            },
            {
              q: "How long does the test take?",
              a: "Most people complete the test in 10-15 minutes. There's no time limit per question, but the test measures processing efficiency as well as accuracy, so working at a natural pace gives the most accurate results.",
            },
            {
              q: "Do I need to create an account?",
              a: "No. The test is completely free with no sign-up required. You start immediately and get your full results instantly — no email gate, no paywall, no credit card.",
            },
            {
              q: "What does my IQ score mean?",
              a: "IQ scores follow a bell curve with an average of 100. About 68% of people score between 85-115. Scores above 130 are in the top 2%, and scores below 70 occur in about 2% of the population. After your test, we'll show you exactly where you stand and link you to detailed explanations.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base">{q}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-8">{a}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── SECOND CTA / CONTENT LINKS ── */}
      <motion.div variants={fadeUp} className="mt-20 w-full max-w-3xl">
        <p className="text-center text-sm text-muted-foreground mb-6">Learn more about IQ</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link to="/what-is-iq" className="glass-card p-5 rounded-xl hover:bg-[rgba(255,255,255,0.06)] transition-colors text-center group">
            <BookOpen className="w-6 h-6 text-primary mx-auto mb-3" />
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">What Is IQ?</span>
            <span className="text-xs text-muted-foreground">The science behind intelligence testing</span>
          </Link>
          <Link to="/iq-score-ranges" className="glass-card p-5 rounded-xl hover:bg-[rgba(255,255,255,0.06)] transition-colors text-center group">
            <BarChart3 className="w-6 h-6 text-primary mx-auto mb-3" />
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">IQ Score Ranges</span>
            <span className="text-xs text-muted-foreground">From borderline to genius — explained</span>
          </Link>
          <Link to="/average-iq-by-country" className="glass-card p-5 rounded-xl hover:bg-[rgba(255,255,255,0.06)] transition-colors text-center group">
            <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">IQ by Country</span>
            <span className="text-xs text-muted-foreground">See how your country compares globally</span>
          </Link>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-12"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </motion.div>
  );
};

export default Landing;
