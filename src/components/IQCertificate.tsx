import { useRef, useCallback } from "react";

interface IQCertificateProps {
  name: string;
  score: number;
  percentile: string;
  classification: string;
}

const IQCertificate = ({ name, score, percentile, classification }: IQCertificateProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getFormattedDate = () => {
    const d = new Date();
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  const drawCertificate = useCallback(
    (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const w = 900;
      const h = 636;
      canvas.width = w;
      canvas.height = h;

      // Background
      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "#0A0E1A");
      bg.addColorStop(1, "#12183B");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Gold border
      ctx.strokeStyle = "#C9A84C";
      ctx.lineWidth = 3;
      ctx.strokeRect(20, 20, w - 40, h - 40);
      ctx.strokeStyle = "#C9A84C50";
      ctx.lineWidth = 1;
      ctx.strokeRect(30, 30, w - 60, h - 60);

      // Corner decorations
      const cornerSize = 30;
      const corners = [
        [35, 35],
        [w - 35, 35],
        [35, h - 35],
        [w - 35, h - 35],
      ];
      ctx.strokeStyle = "#C9A84C";
      ctx.lineWidth = 2;
      corners.forEach(([cx, cy]) => {
        ctx.beginPath();
        ctx.arc(cx, cy, cornerSize / 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, cy, cornerSize / 4, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Header - "Certificate of Intelligence"
      ctx.fillStyle = "#C9A84C";
      ctx.font = "14px 'Inter', sans-serif";
      ctx.textAlign = "center";
      ctx.letterSpacing = "6px";
      ctx.fillText("CERTIFICATE OF INTELLIGENCE", w / 2, 80);

      // Brand
      ctx.fillStyle = "#00E5FF";
      ctx.font = "bold 28px 'Plus Jakarta Sans', sans-serif";
      ctx.letterSpacing = "0px";
      ctx.fillText("MyIQScores™", w / 2, 120);

      // Thin line
      ctx.strokeStyle = "#C9A84C40";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(200, 140);
      ctx.lineTo(w - 200, 140);
      ctx.stroke();

      // "This certifies that"
      ctx.fillStyle = "#999";
      ctx.font = "14px 'Inter', sans-serif";
      ctx.fillText("This certifies that", w / 2, 175);

      // Name
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 36px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(name || "Test Taker", w / 2, 220);

      // "has achieved a score of"
      ctx.fillStyle = "#999";
      ctx.font = "14px 'Inter', sans-serif";
      ctx.fillText("has achieved a score of", w / 2, 260);

      // IQ Score - big and gradient-like
      ctx.fillStyle = "#00E5FF";
      ctx.font = "bold 80px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(String(score), w / 2, 350);

      // Classification
      ctx.fillStyle = "#8B5CF6";
      ctx.font = "bold 20px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(classification, w / 2, 385);

      // Percentile
      ctx.fillStyle = "#999";
      ctx.font = "16px 'Inter', sans-serif";
      ctx.fillText(`${percentile} percentile — higher than ${percentile.replace(/[a-z]/g, "")}% of the population`, w / 2, 415);

      // Line
      ctx.strokeStyle = "#C9A84C40";
      ctx.beginPath();
      ctx.moveTo(200, 440);
      ctx.lineTo(w - 200, 440);
      ctx.stroke();

      // Date
      ctx.fillStyle = "#777";
      ctx.font = "13px 'Inter', sans-serif";
      ctx.fillText(`Assessed on ${getFormattedDate()}`, w / 2, 470);

      // Signature line
      ctx.strokeStyle = "#555";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(300, 530);
      ctx.lineTo(600, 530);
      ctx.stroke();

      ctx.fillStyle = "#777";
      ctx.font = "12px 'Inter', sans-serif";
      ctx.fillText("MyIQScores™ Assessment", w / 2, 550);

      // Seal circle (bottom right)
      ctx.strokeStyle = "#C9A84C";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(w - 100, h - 100, 35, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(w - 100, h - 100, 28, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = "#C9A84C";
      ctx.font = "bold 10px 'Inter', sans-serif";
      ctx.fillText("VERIFIED", w - 100, h - 103);
      ctx.font = "8px 'Inter', sans-serif";
      ctx.fillText("ASSESSMENT", w - 100, h - 92);

      // URL
      ctx.fillStyle = "#444";
      ctx.font = "10px 'Inter', sans-serif";
      ctx.fillText("www.myiqscores.com", w / 2, h - 45);
    },
    [name, score, percentile, classification],
  );

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    drawCertificate(canvas);

    const link = document.createElement("a");
    link.download = `MyIQScores-Certificate-${name || "IQ"}-${score}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="my-8">
      {/* Preview */}
      <div className="glass-card p-1 rounded-xl overflow-hidden max-w-2xl mx-auto">
        <canvas
          ref={(el) => {
            canvasRef.current = el;
            if (el) drawCertificate(el);
          }}
          className="w-full h-auto rounded-lg"
          style={{ imageRendering: "auto" }}
        />
      </div>

      {/* Download button */}
      <div className="text-center mt-4">
        <button onClick={handleDownload} className="glow-button text-sm px-6 py-3">
          Download Certificate (PNG)
        </button>
        <p className="text-xs text-muted-foreground mt-2">
          Free to download and share. Your personalized IQ certificate.
        </p>
      </div>
    </div>
  );
};

export default IQCertificate;
