import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { questions } from "@/data/questions";
import { Check } from "lucide-react";

interface QuizProps {
  onComplete: (answers: (number | null)[]) => void;
}

const Quiz = ({ onComplete }: QuizProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(30).fill(null));
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [direction, setDirection] = useState(1);

  const handleComplete = useCallback(() => {
    onComplete(answers);
  }, [answers, onComplete]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [handleComplete]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const handleSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQ] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQ === 29) {
      handleComplete();
      return;
    }
    setDirection(1);
    setSelectedOption(answers[currentQ + 1]);
    setCurrentQ((prev) => prev + 1);
  };

  const q = questions[currentQ];
  const progress = ((currentQ + 1) / 30) * 100;
  const timerColor = timeLeft < 120 ? "text-destructive" : timeLeft < 300 ? "text-yellow-400" : "text-foreground";

  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Top bar */}
      <div className="fixed top-16 left-0 right-0 z-40 glass-card border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-sm text-muted-foreground font-medium">
            Question <span className="text-foreground">{currentQ + 1}</span> of 30
          </span>
          <span className={`font-mono text-sm font-medium ${timerColor} ${timeLeft < 120 ? "animate-pulse" : ""}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
        {/* Progress bar */}
        <div className="h-0.5 bg-[rgba(255,255,255,0.05)]">
          <motion.div
            className="h-full shimmer"
            style={{ backgroundColor: "hsl(var(--primary))" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center px-4 pt-16 pb-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentQ}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 60 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full max-w-2xl"
          >
            <div className="glass-card p-6 sm:p-8">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                {q.category}
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground leading-snug mb-8">
                {q.question}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt, i) => {
                  const isSelected = selectedOption === i;
                  return (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect(i)}
                      className={`relative text-left p-4 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                          : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.06)]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className={`text-sm sm:text-base ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                          <span className="font-medium text-foreground/60 mr-2">
                            {String.fromCharCode(65 + i)})
                          </span>
                          {opt}
                        </span>
                        {isSelected && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="shrink-0">
                            <Check className="w-5 h-5 text-primary" />
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className="glow-button text-sm px-6 py-3"
              >
                {currentQ === 29 ? "See My Results →" : "Next →"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;
