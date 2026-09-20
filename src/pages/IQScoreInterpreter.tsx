import { FormEvent, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AlertTriangle, ArrowRight, Calculator, Info, SlidersHorizontal } from "lucide-react";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { trackCalculatorUse } from "@/lib/analytics";

const clampScore = (value: number) => Math.min(160, Math.max(55, Math.round(value)));

function normalCdf(z: number) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804 * Math.exp(-(z * z) / 2);
  const tail = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z >= 0 ? 1 - tail : tail;
}

function ordinal(value: number) {
  const rounded = Math.round(value * 10) / 10;
  return `${rounded}${rounded === 1 ? "st" : rounded === 2 ? "nd" : rounded === 3 ? "rd" : "th"}`;
}

function interpretation(score: number) {
  if (score >= 130) return { label: "Very high range", copy: "At or above the conventional two-standard-deviation point on many modern IQ scales." };
  if (score >= 120) return { label: "High range", copy: "Above most scores on a scale standardized to a mean of 100 and standard deviation of 15." };
  if (score >= 110) return { label: "High-average range", copy: "Above the center of the reference distribution." };
  if (score >= 90) return { label: "Average range", copy: "Within the broad central range where about half of standardized scores fall." };
  if (score >= 80) return { label: "Low-average range", copy: "Below the center of the reference distribution, but interpretation depends heavily on the test and context." };
  return { label: "Low range", copy: "A score in this area warrants careful interpretation by a qualified professional when decisions matter." };
}

function BellCurveExplorer({ score }: { score: number }) {
  const width = 720;
  const height = 220;
  const points = Array.from({ length: 181 }, (_, index) => {
    const x = (index / 180) * width;
    const iq = 55 + (index / 180) * 105;
    const z = (iq - 100) / 15;
    const y = height - Math.exp(-(z * z) / 2) * 180;
    return `${x},${y}`;
  }).join(" ");
  const markerX = ((score - 55) / 105) * width;

  return (
    <div className="rounded-2xl border border-white/[.08] bg-[#07111f]/70 p-4 sm:p-6">
      <svg role="img" aria-label={`Bell curve with a marker at score ${score}`} viewBox={`0 0 ${width} ${height + 42}`} className="w-full">
        <defs><linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5eead4" stopOpacity=".32"/><stop offset="1" stopColor="#5eead4" stopOpacity="0"/></linearGradient></defs>
        <polygon points={`0,${height} ${points} ${width},${height}`} fill="url(#curveFill)" />
        <polyline points={points} fill="none" stroke="#8fe9da" strokeWidth="3" />
        {[70, 85, 100, 115, 130, 145].map((tick) => {
          const x = ((tick - 55) / 105) * width;
          return <g key={tick}><line x1={x} y1={height} x2={x} y2={height + 7} stroke="rgba(255,255,255,.35)"/><text x={x} y={height + 27} textAnchor="middle" fill="#94a3b8" fontSize="14">{tick}</text></g>;
        })}
        <line x1={markerX} x2={markerX} y1="20" y2={height} stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 7" />
        <circle cx={markerX} cy="20" r="7" fill="#f59e0b" />
      </svg>
    </div>
  );
}

const IQScoreInterpreter = () => {
  const [params] = useSearchParams();
  const initial = clampScore(Number(params.get("score")) || 100);
  const [score, setScore] = useState(initial);
  const [draft, setDraft] = useState(String(initial));
  const percentile = useMemo(() => normalCdf((score - 100) / 15) * 100, [score]);
  const upperTail = Math.max(0.001, 100 - percentile);
  const rarity = Math.max(1, Math.round(100 / upperTail));
  const range = interpretation(score);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next = clampScore(Number(draft) || 100);
    setScore(next);
    setDraft(String(next));
    trackCalculatorUse(next);
  };

  return (
    <ContentPage relatedPages={[{ title: "How IQ tests work", href: "/what-is-iq" }, { title: "IQ score ranges", href: "/iq-score-ranges" }, { title: "Online vs professional testing", href: "/types-of-iq-tests" }]}>
      <SEOHead
        title="IQ Score Interpreter: Percentile, Range & Bell Curve | MyIQScores"
        description="Enter an IQ score to see its approximate percentile, range, rarity, bell-curve position, uncertainty, and important interpretation limits."
        canonicalUrl="/iq-score-interpreter"
        ogImage="https://www.myiqscores.com/images/cognition/result-share.webp"
      />
      <div className="eyebrow mb-5"><Calculator className="h-3.5 w-3.5" /> Interactive tool</div>
      <h1>What Does My <span className="gradient-text">IQ Score Mean?</span></h1>
      <p className="text-lg">Enter a score from a modern scale with a mean of 100 and standard deviation of 15. The results are mathematical context—not a diagnosis, validation of an online quiz, or substitute for the report that came with a professional assessment.</p>

      <section className="not-prose my-10 rounded-[1.75rem] border border-primary/20 bg-white/[.025] p-5 sm:p-8">
        <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="flex-1 text-sm font-semibold text-foreground">IQ score
            <input inputMode="numeric" min="55" max="160" value={draft} onChange={(event) => setDraft(event.target.value)} className="mt-2 min-h-14 w-full rounded-xl border border-white/10 bg-[#07111f] px-4 text-xl font-bold text-white focus:border-primary" aria-describedby="score-limits" />
          </label>
          <button className="glow-button min-h-14 px-6" type="submit">Interpret score</button>
        </form>
        <p id="score-limits" className="mt-2 text-xs text-muted-foreground">Supported range: 55–160. Scores at the extremes are less stable and more test-dependent.</p>
        <label className="mt-7 block text-sm font-semibold text-foreground"><span className="inline-flex items-center gap-2"><SlidersHorizontal className="h-4 w-4 text-primary" />Explore the curve</span>
          <input type="range" min="55" max="160" value={score} onChange={(event) => { const next = Number(event.target.value); setScore(next); setDraft(String(next)); }} onPointerUp={() => trackCalculatorUse(score)} className="mt-4 w-full accent-[#5eead4]" />
        </label>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/[.08] bg-white/[.03] p-5"><div className="text-xs uppercase tracking-[.16em] text-muted-foreground">Approx. percentile</div><div className="mt-2 text-3xl font-bold text-white">{ordinal(percentile)}</div></div>
          <div className="rounded-2xl border border-white/[.08] bg-white/[.03] p-5"><div className="text-xs uppercase tracking-[.16em] text-muted-foreground">Score range</div><div className="mt-2 text-xl font-bold text-white">{range.label}</div></div>
          <div className="rounded-2xl border border-white/[.08] bg-white/[.03] p-5"><div className="text-xs uppercase tracking-[.16em] text-muted-foreground">At or above</div><div className="mt-2 text-3xl font-bold text-white">~1 in {rarity.toLocaleString()}</div></div>
        </div>
        <div className="mt-6"><BellCurveExplorer score={score} /></div>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">A score of <strong className="text-white">{score}</strong> is about {Math.abs((score - 100) / 15).toFixed(2)} standard deviations {score >= 100 ? "above" : "below"} the conventional mean. {range.copy}</p>
        <div className="mt-5 flex gap-3 rounded-xl border border-amber-400/20 bg-amber-400/[.06] p-4 text-sm leading-6 text-slate-300"><AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-amber-300" /><p><strong className="text-white">Allow for measurement error.</strong> A single reported score is usually best understood as a range. The exact confidence interval belongs to the specific test manual and administration—not a universal ± number.</p></div>
      </section>

      <h2>How to read the result</h2>
      <p>Percentiles compare a score with a reference group. They are not the percentage of questions answered correctly. A 90th-percentile result means a score was higher than roughly 90% of the standardization group, assuming the stated scoring scale applies.</p>
      <h2>Why the source of the score matters</h2>
      <p>Professionally administered instruments use age-based norms, standardized instructions, multiple subtests, and documented reliability evidence. Online quizzes vary widely. Converting an unvalidated quiz result through a bell-curve formula cannot make the original result clinically valid.</p>
      <h2>Useful next steps</h2>
      <ul><li>Check the name, edition, date, and standard deviation of the test.</li><li>Read the confidence interval and subtest profile in the original report.</li><li>For school, clinical, disability, or employment decisions, consult a qualified professional.</li><li>Use online results for curiosity and practice, not diagnosis or self-worth.</li></ul>
      <p><Link to="/test">Try our reasoning test</Link> for an educational category breakdown, or read the <Link to="/methodology">scoring methodology and limitations</Link>.</p>
    </ContentPage>
  );
};

export default IQScoreInterpreter;
