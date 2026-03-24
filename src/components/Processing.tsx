import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "Analyzing your pattern recognition...",
  "Evaluating logical reasoning...",
  "Measuring verbal intelligence...",
  "Calculating your IQ score...",
];

interface ProcessingProps {
  onDone: () => void;
}

const Processing = ({ onDone }: ProcessingProps) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => Math.min(prev + 1, messages.length - 1));
    }, 1100);

    const progInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 80);

    const timeout = setTimeout(onDone, 4500);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progInterval);
      clearTimeout(timeout);
    };
  }, [onDone]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-10 sm:p-14 text-center max-w-md w-full"
      >
        {/* Animated nodes */}
        <div className="relative w-28 h-28 mx-auto mb-8">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i / 6) * Math.PI * 2;
            const x = 50 + Math.cos(angle) * 35;
            const y = 50 + Math.sin(angle) * 35;
            return (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-primary"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            );
          })}
          {/* Center node */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-secondary -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Progress ring */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
            <motion.circle
              cx="50" cy="50" r="42" fill="none" stroke="url(#grad)" strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={264}
              animate={{ strokeDashoffset: 264 - (264 * progress) / 100 }}
              transition={{ duration: 0.3 }}
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-mono text-foreground font-medium">
            {progress}%
          </span>
        </div>

        {/* Message */}
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-muted-foreground text-sm"
        >
          {messages[messageIndex]}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Processing;
