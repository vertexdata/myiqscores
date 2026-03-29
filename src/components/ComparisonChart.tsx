import { Link } from "react-router-dom";

interface BarItem {
  label: string;
  value: number;
  href?: string;
  highlight?: boolean;
}

interface ComparisonChartProps {
  items: BarItem[];
  maxValue?: number;
  className?: string;
  title?: string;
}

const ComparisonChart = ({ items, maxValue, className = "", title }: ComparisonChartProps) => {
  const max = maxValue || Math.max(...items.map((i) => i.value)) * 1.1;

  const getColor = (value: number, highlight?: boolean) => {
    if (highlight) return "bg-gradient-to-r from-primary to-secondary";
    if (value >= 130) return "bg-violet-500/70";
    if (value >= 110) return "bg-cyan-500/50";
    if (value >= 90) return "bg-green-500/40";
    return "bg-yellow-500/40";
  };

  return (
    <div className={`my-8 ${className}`} role="img" aria-label={title || "IQ comparison chart"}>
      {title && <p className="text-sm font-heading font-semibold text-foreground mb-4">{title}</p>}
      <div className="space-y-3">
        {items.map((item) => {
          const widthPct = Math.min((item.value / max) * 100, 100);
          const content = (
            <div key={item.label} className="group">
              <div className="flex items-center justify-between mb-1">
                <span className={`text-sm ${item.highlight ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                  {item.label}
                </span>
                <span className={`text-sm font-mono ${item.highlight ? "text-primary font-bold" : "text-muted-foreground"}`}>
                  {item.value}
                </span>
              </div>
              <div className="h-3 rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${getColor(item.value, item.highlight)}`}
                  style={{ width: `${widthPct}%` }}
                />
              </div>
            </div>
          );

          return item.href ? (
            <Link key={item.label} to={item.href} className="block no-underline hover:opacity-80 transition-opacity">
              {content}
            </Link>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonChart;
