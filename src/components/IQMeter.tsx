interface IQMeterProps {
  score: number;
  label?: string;
  className?: string;
}

const IQMeter = ({ score, label, className = "" }: IQMeterProps) => {
  const minIQ = 40;
  const maxIQ = 200;
  const clamped = Math.max(minIQ, Math.min(maxIQ, score));
  const pct = (clamped - minIQ) / (maxIQ - minIQ); // 0 to 1

  const r = 75;
  const cx = 100;
  const cy = 90;
  const strokeW = 14;

  // Calculate the arc using stroke-dasharray/dashoffset (much more reliable than arc paths)
  const halfCircumference = Math.PI * r; // length of semicircle
  const filledLength = halfCircumference * pct;
  const emptyLength = halfCircumference - filledLength;

  const getColor = () => {
    if (score >= 130) return "#8B5CF6";
    if (score >= 110) return "#00E5FF";
    if (score >= 90) return "#22C55E";
    if (score >= 70) return "#EAB308";
    return "#EF4444";
  };

  const getClassification = () => {
    if (score >= 140) return "Genius";
    if (score >= 130) return "Gifted";
    if (score >= 120) return "Superior";
    if (score >= 110) return "High Average";
    if (score >= 90) return "Average";
    if (score >= 80) return "Low Average";
    if (score >= 70) return "Borderline";
    return "Extremely Low";
  };

  const color = getColor();

  // Semicircle path from left to right (top half)
  const arcPath = `M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy}`;

  return (
    <div
      className={`w-full max-w-[220px] mx-auto ${className}`}
      role="img"
      aria-label={`IQ meter showing score of ${score} - ${getClassification()}`}
    >
      <svg viewBox="0 0 200 115" className="w-full">
        {/* Background track */}
        <path
          d={arcPath}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeW}
          strokeLinecap="round"
        />

        {/* Colored fill — using stroke-dasharray for reliable rendering */}
        <path
          d={arcPath}
          fill="none"
          stroke={color}
          strokeWidth={strokeW}
          strokeLinecap="round"
          strokeDasharray={`${filledLength} ${emptyLength}`}
          style={{ filter: `drop-shadow(0 0 6px ${color}50)` }}
        />

        {/* Score */}
        <text
          x={cx}
          y={cy - 15}
          textAnchor="middle"
          fill="white"
          fontSize="30"
          fontWeight="800"
          fontFamily="var(--font-heading)"
        >
          {score}
        </text>

        {/* Label */}
        <text x={cx} y={cy + 5} textAnchor="middle" fill={color} fontSize="10" fontWeight="600">
          {label || getClassification()}
        </text>

        {/* Min / Max */}
        <text x={cx - r} y={cy + 16} textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8">
          40
        </text>
        <text x={cx + r} y={cy + 16} textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8">
          200
        </text>
      </svg>
    </div>
  );
};

export default IQMeter;
