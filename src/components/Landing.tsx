import { Link } from "@/components/StaticLink";
import { trackCtaClick, trackTestStart } from "@/lib/analytics";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock3,
  Compass,
  Fingerprint,
  Grid3X3,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface LandingProps {
  onStart: () => void;
}

const domains = [
  { icon: Grid3X3, label: "Pattern recognition", detail: "Sequences, rules, and relationships" },
  { icon: Layers3, label: "Logical reasoning", detail: "Deduction and structured problems" },
  { icon: Compass, label: "Spatial reasoning", detail: "Rotation, shape, and orientation" },
  { icon: BookOpen, label: "Verbal reasoning", detail: "Meaning, analogy, and classification" },
];

const Landing = ({ onStart }: LandingProps) => {
  const start = (location: string) => {
    trackTestStart(location);
    trackCtaClick("start_test", location);
    onStart();
  };

  return (
    <main className="relative z-10 overflow-hidden">
      <section className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            A clearer look at how you reason
          </div>
          <h1 className="text-balance font-heading text-5xl font-extrabold leading-[.98] tracking-[-.045em] text-foreground sm:text-6xl lg:text-7xl">
            Intelligence is more than <span className="gradient-text">one number.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
            Explore 30 carefully written reasoning problems, see your performance across five task categories, and learn what an online score can—and cannot—tell you.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button onClick={() => start("hero")} className="glow-button group min-h-14 px-7 text-base">
              Begin the reasoning test
              <ArrowRight className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <Link
              to="/iq-score-interpreter"
              onClick={() => trackCtaClick("open_score_interpreter", "hero")}
              className="min-h-14 rounded-xl border border-white/10 px-6 py-4 text-center text-sm font-semibold text-foreground transition hover:border-primary/30 hover:bg-white/[.04]"
            >
              Interpret an existing score
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" />About 12 minutes</span>
            <span className="inline-flex items-center gap-2"><Fingerprint className="h-4 w-4 text-primary" />No account required</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />No ads during the test</span>
          </div>
        </div>

        <div className="hero-art relative mx-auto w-full max-w-2xl">
          <picture>
            <source media="(max-width: 700px)" srcSet="/images/cognition/hero-640.webp" />
            <source media="(max-width: 1400px)" srcSet="/images/cognition/hero-1280.webp" />
            <img
              src="/images/cognition/hero-1920.webp"
              width="1920"
              height="1097"
              alt="Abstract geometric pathways connecting pattern matrices and reasoning shapes"
              className="h-auto w-full rounded-[2rem]"
            />
          </picture>
          <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-[#07111f]/75 p-3 backdrop-blur-xl sm:inset-x-8 sm:bottom-8">
            {[["30", "problems"], ["5", "categories"], ["0", "paywalls"]].map(([value, label]) => (
              <div key={label} className="text-center">
                <div className="font-heading text-xl font-bold text-white sm:text-2xl">{value}</div>
                <div className="text-[10px] uppercase tracking-[.16em] text-slate-400 sm:text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[.07] bg-white/[.018]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 lg:px-8">
          {[
            [ShieldCheck, "Transparent by design", "Scoring, limits, and methodology are visible before you begin."],
            [BarChart3, "Context, not diagnosis", "Results are educational estimates, never clinical or employment advice."],
            [CheckCircle2, "Your attention stays yours", "No answer-screen advertising, forced signup, or artificial countdown."],
          ].map(([Icon, title, copy]) => {
            const ItemIcon = Icon as typeof ShieldCheck;
            return <div key={title as string} className="flex gap-4"><ItemIcon className="mt-1 h-5 w-5 shrink-0 text-primary" /><div><h2 className="font-heading text-base font-bold">{title as string}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{copy as string}</p></div></div>;
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-2xl">
          <div className="eyebrow mb-5">Inside the test</div>
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-5xl">Five kinds of tasks. One focused session.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">The category breakdown describes performance on this question set. It is not a clinical subscore or a fixed trait.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map(({ icon: Icon, label, detail }) => (
            <article
              key={label}
              className="signal-card"
            >
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-8 font-heading text-lg font-bold">{label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-24 lg:grid-cols-2 lg:px-8">
        <article className="editorial-panel group">
          <picture><source media="(max-width: 700px)" srcSet="/images/cognition/pattern-640.webp" /><img src="/images/cognition/pattern-1200.webp" width="1200" height="780" loading="lazy" alt="Layered geometric tiles illustrating pattern recognition" /></picture>
          <div className="p-7 sm:p-9"><span className="text-xs font-bold uppercase tracking-[.2em] text-primary">Understand your score</span><h2 className="mt-3 font-heading text-2xl font-bold">From number to useful context.</h2><p className="mt-3 leading-7 text-muted-foreground">Convert scores to approximate percentiles, explore the bell curve, and see why test version and uncertainty matter.</p><Link to="/iq-score-interpreter" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Open score interpreter <ArrowRight className="h-4 w-4" /></Link></div>
        </article>
        <article className="editorial-panel group">
          <picture><source media="(max-width: 700px)" srcSet="/images/cognition/memory-640.webp" /><img src="/images/cognition/memory-1200.webp" width="1200" height="780" loading="lazy" alt="Floating geometric frames illustrating information held and transformed" /></picture>
          <div className="p-7 sm:p-9"><span className="text-xs font-bold uppercase tracking-[.2em] text-violet-300">Learn the science</span><h2 className="mt-3 font-heading text-2xl font-bold">What does IQ actually measure?</h2><p className="mt-3 leading-7 text-muted-foreground">A plain-language guide to standardization, reliability, cognitive domains, and the limits of a single score.</p><Link to="/what-is-iq" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Read the guide <ArrowRight className="h-4 w-4" /></Link></div>
        </article>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-28 text-center">
        <div className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/[.09] to-violet-500/[.06] px-6 py-14 sm:px-12">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-primary">Ready when you are</p>
          <h2 className="mt-4 font-heading text-3xl font-bold sm:text-5xl">Think clearly. Answer honestly. Learn something useful.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">Choose your best answer without outside help. There is no per-question timer and you can move back before submitting.</p>
          <button onClick={() => start("final_cta")} className="glow-button mt-8 min-h-14">Start the free test <ArrowRight className="ml-2 inline h-4 w-4" /></button>
        </div>
      </section>
    </main>
  );
};

export default Landing;
