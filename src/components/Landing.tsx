import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Brain, FlaskConical, Timer, Globe, ChevronDown } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

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

interface LandingProps {
  onStart: () => void;
}

const Landing = ({ onStart }: LandingProps) => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12 relative"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      {/* Pulsing brain background */}
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
        <button onClick={onStart} className="glow-button text-lg">
          Start Free IQ Test →
        </button>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
        {[
          { icon: FlaskConical, text: "Scientifically Designed" },
          { icon: Timer, text: "Takes ~12 Minutes" },
          { icon: Globe, text: "2M+ Tests Taken" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 text-muted-foreground text-sm">
            <Icon className="w-4 h-4 text-primary" />
            <span>{text}</span>
          </div>
        ))}
      </motion.div>

      <motion.p variants={fadeUp} className="mt-16 text-muted-foreground text-sm text-center">
        Join <span className="text-foreground font-semibold"><CountUp target={2147832} /></span> people who've discovered their IQ
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-8"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </motion.div>
  );
};

export default Landing;
