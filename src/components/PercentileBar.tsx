interface PercentileBarProps {
  percentile: number;
  label?: string;
  className?: string;
}

const PercentileBar = ({ percentile, label, className = "" }: PercentileBarProps) => {
  const getColor = () => {
    if (percentile >= 98) return "from-violet-500 to-purple-600";
    if (percentile >= 84) return "from-cyan-400 to-blue-500";
    if (percentile >= 50) return "from-green-400 to-emerald-500";
    if (percentile >= 16) return "from-yellow-400 to-amber-500";
    return "from-orange-400 to-red-500";
  };

  return (
    <div className={`my-4 ${className}`} role="img" aria-label={`${label || "Score"} at ${percentile}th percentile`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">{label || "Percentile"}</span>
        <span className="text-sm font-mono font-bold text-foreground">{percentile}th</span>
      </div>
      <div className="relative h-4 rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${getColor()} transition-all duration-700`}
          style={{ width: `${percentile}%` }}
        />
        {/* Marker */}
        <div
          className="absolute top-0 h-full w-0.5 bg-white/60"
          style={{ left: `${percentile}%` }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-muted-foreground/40">0th</span>
        <span className="text-[10px] text-muted-foreground/40">50th</span>
        <span className="text-[10px] text-muted-foreground/40">100th</span>
      </div>
    </div>
  );
};

export default PercentileBar;
