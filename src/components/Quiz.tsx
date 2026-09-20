import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Keyboard, TimerReset } from "lucide-react";
import { questions } from "@/data/questions";
import { trackQuestionProgress, trackTestComplete } from "@/lib/analytics";

interface QuizProps {
  onComplete: (answers: (number | null)[], elapsed: number) => void;
}

const sectionNames = ["Patterns", "Logic", "Verbal", "Spatial", "Numerical"];

const Quiz = ({ onComplete }: QuizProps) => {
  const reduceMotion = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => new Array(questions.length).fill(null));
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setElapsed((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    headingRef.current?.focus();
  }, [currentQ]);

  const selected = answers[currentQ];
  const question = questions[currentQ];
  const progress = ((currentQ + 1) / questions.length) * 100;
  const sectionIndex = Math.floor(currentQ / 6);

  const choose = useCallback((optionIndex: number) => {
    setAnswers((previous) => {
      const next = [...previous];
      next[currentQ] = optionIndex;
      return next;
    });
    trackQuestionProgress(currentQ + 1, questions[currentQ].category);
  }, [currentQ]);

  const next = useCallback(() => {
    if (answers[currentQ] === null) return;
    if (currentQ === questions.length - 1) {
      trackTestComplete(answers.filter((answer) => answer !== null).length, elapsed);
      onComplete(answers, elapsed);
      return;
    }
    setCurrentQ((value) => value + 1);
  }, [answers, currentQ, elapsed, onComplete]);

  const previous = useCallback(() => {
    if (currentQ > 0) setCurrentQ((value) => value - 1);
  }, [currentQ]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (["1", "2", "3", "4"].includes(event.key)) choose(Number(event.key) - 1);
      if (event.key === "Enter" && answers[currentQ] !== null) next();
      if (event.key === "ArrowLeft") previous();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [answers, choose, currentQ, next, previous]);

  const minutes = Math.floor(elapsed / 60);
  const seconds = String(elapsed % 60).padStart(2, "0");

  return (
    <main className="relative z-10 min-h-screen px-4 pb-12 pt-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
          <span aria-live="polite">Question <strong className="text-white">{currentQ + 1}</strong> of {questions.length}</span>
          <span className="inline-flex items-center gap-2 font-mono"><TimerReset className="h-4 w-4" aria-hidden="true" />{minutes}:{seconds}</span>
        </div>
        <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-white/[.06]" aria-label={`${Math.round(progress)} percent complete`} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
          <motion.div className="h-full rounded-full bg-gradient-to-r from-teal-300 to-violet-400" animate={{ width: `${progress}%` }} transition={reduceMotion ? { duration: 0 } : { duration: .3 }} />
        </div>
        <div className="mb-8 grid grid-cols-5 gap-1" aria-hidden="true">
          {sectionNames.map((name, index) => <div key={name} className={`truncate text-center text-[10px] uppercase tracking-wider ${index === sectionIndex ? "text-primary" : index < sectionIndex ? "text-slate-500" : "text-slate-700"}`}>{name}</div>)}
        </div>

        <AnimatePresence mode="wait">
          <motion.section
            key={currentQ}
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
            transition={{ duration: .18 }}
            className="rounded-[1.75rem] border border-white/[.09] bg-white/[.028] p-5 shadow-2xl shadow-black/20 sm:p-9"
          >
            <div className="mb-7 flex items-center justify-between gap-4">
              <span className="rounded-full border border-primary/20 bg-primary/[.07] px-3 py-1.5 text-xs font-bold text-primary">{question.category}</span>
              <span className="hidden items-center gap-1.5 text-xs text-muted-foreground sm:inline-flex"><Keyboard className="h-4 w-4" />Keys 1–4 select · Enter continues</span>
            </div>
            <h1 ref={headingRef} tabIndex={-1} className="text-pretty font-heading text-2xl font-bold leading-snug outline-none sm:text-3xl">{question.question}</h1>
            <div className="mt-8 grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label={`Answers for question ${currentQ + 1}`}>
              {question.options.map((option, optionIndex) => {
                const active = selected === optionIndex;
                return (
                  <button key={option} onClick={() => choose(optionIndex)} role="radio" aria-checked={active} className={`group min-h-16 rounded-2xl border p-4 text-left transition ${active ? "border-primary/60 bg-primary/[.09] shadow-[0_0_0_1px_rgba(94,234,212,.12)]" : "border-white/[.08] bg-white/[.025] hover:border-white/[.18] hover:bg-white/[.045]"}`}>
                    <span className="flex items-center gap-3"><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sm font-bold ${active ? "bg-primary text-slate-950" : "bg-white/[.06] text-slate-400"}`}>{optionIndex + 1}</span><span className="flex-1 text-sm leading-6 text-slate-200 sm:text-base">{option}</span>{active && <Check className="h-5 w-5 shrink-0 text-primary" />}</span>
                  </button>
                );
              })}
            </div>
          </motion.section>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-between gap-3">
          <button onClick={previous} disabled={currentQ === 0} className="min-h-12 rounded-xl border border-white/10 px-4 text-sm font-semibold text-muted-foreground transition hover:bg-white/[.04] hover:text-white disabled:pointer-events-none disabled:opacity-30"><ArrowLeft className="mr-2 inline h-4 w-4" />Back</button>
          <button onClick={next} disabled={selected === null} className="glow-button min-h-12 px-6 py-3 text-sm">{currentQ === questions.length - 1 ? "View results" : "Continue"}<ArrowRight className="ml-2 inline h-4 w-4" /></button>
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-muted-foreground">No advertising is shown while you answer. Your choices remain in this browser unless you explicitly request an emailed copy later.</p>
      </div>
    </main>
  );
};

export default Quiz;
