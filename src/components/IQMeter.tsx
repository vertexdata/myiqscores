interface IQMeterProps {
  score: number;
  label?: string;
  className?: string;
}

const IQMeter = ({ score, label, className = "" }: IQMeterProps) => {
  // Map IQ 40-200 to 0-100% for the arc
  const minIQ = 40;
  const maxIQ = 200;
  const clamped = Math.max(minIQ, Math.min(maxIQ, score));
  const pct = ((clamped - minIQ) / (maxIQ - minIQ)) * 100;

  // Arc calculation (180 degree semicircle)
  const radius = 80;
  const cx = 100;
  const cy = 95;
  const startAngle = Math.PI;
  const endAngle = Math.PI + (pct / 100) * Math.PI;
  const x1 = cx + radius * Math.cos(startAngle);
  const y1 = cy + radius * Math.sin(startAngle);
  const x2 = cx + radius * Math.cos(endAngle);
  const y2 = cy + radius * Math.sin(endAngle);
  const largeArc = pct > 50 ? 1 : 0;

  // Color based on score
  const getColor = () => {
    if (score >= 130) return "#8B5CF6"; // violet - gifted
    if (score >= 110) return "#00E5FF"; // cyan - high avg
    if (score >= 90) return "#22C55E";  // green - average
    if (score >= 70) return "#EAB308";  // yellow - low avg
    return "#EF4444"; // red - below
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

  return (
    <div className={`w-full max-w-[220px] mx-auto ${className}`} role="img" aria-label={`IQ meter showing score of ${score} - ${getClassification()}`}>
      <svg viewBox="0 0 200 120" className="w-full">
        {/* Background track */}
        <path
          d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Colored arc */}
        <path
          d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 8px ${color}40)` }}
        />
        {/* Score text */}
        <text x={cx} y={cy - 10} textAnchor="middle" fill="white" fontSize="32" fontWeight="800" fontFamily="var(--font-heading)">
          {score}
        </text>
        {/* Classification */}
        <text x={cx} y={cy + 12} textAnchor="middle" fill={color} fontSize="11" fontWeight="600">
          {label || getClassification()}
        </text>
        {/* Min/Max labels */}
        <text x={cx - radius - 2} y={cy + 16} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">40</text>
        <text x={cx + radius + 2} y={cy + 16} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">200</text>
      </svg>
    </div>
  );
};

export default IQMeter;
