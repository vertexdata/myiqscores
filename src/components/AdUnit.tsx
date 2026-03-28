import { useEffect, useRef, useState } from "react";
import { ADSENSE_PUB_ID } from "@/config/adsense";

type AdFormat = "display" | "in-article" | "multiplex";
type AdSize = "responsive" | "728x90" | "320x50" | "300x250" | "300x600";

interface AdUnitProps {
  slotId: string;
  format?: AdFormat;
  size?: AdSize;
  className?: string;
  label?: boolean;
}

const sizeToStyle: Record<AdSize, { minWidth?: string; minHeight: string }> = {
  responsive: { minHeight: "100px" },
  "728x90": { minWidth: "728px", minHeight: "90px" },
  "320x50": { minHeight: "50px" },
  "300x250": { minWidth: "300px", minHeight: "250px" },
  "300x600": { minWidth: "300px", minHeight: "600px" },
};

const AdUnit = ({
  slotId,
  format = "display",
  size = "responsive",
  className = "",
  label = true,
}: AdUnitProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);

  // Lazy load with Intersection Observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Push ad when visible
  useEffect(() => {
    if (!isVisible || adLoaded) return;
    if (typeof window === "undefined") return;

    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
      setAdLoaded(true);
    } catch {
      // AdSense not loaded yet — that's fine
    }
  }, [isVisible, adLoaded]);

  const placeholder = sizeToStyle[size] || sizeToStyle.responsive;

  return (
    <div
      ref={containerRef}
      className={`ad-container my-6 ${className}`}
      style={{ minHeight: placeholder.minHeight }}
    >
      {label && (
        <p className="text-[8px] text-muted-foreground/40 uppercase tracking-widest mb-1">
          Advertisement
        </p>
      )}
      {isVisible && (
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            minHeight: placeholder.minHeight,
            ...(placeholder.minWidth ? { minWidth: placeholder.minWidth } : {}),
          }}
          data-ad-client={ADSENSE_PUB_ID}
          data-ad-slot={slotId}
          data-ad-format={format === "in-article" ? "fluid" : format === "multiplex" ? "autorelaxed" : "auto"}
          data-full-width-responsive="true"
          {...(format === "in-article" ? { "data-ad-layout": "in-article" } : {})}
          {...(format === "multiplex" ? { "data-ad-layout-key": "-6t+ed+2i-1n-4w" } : {})}
        />
      )}
    </div>
  );
};

export default AdUnit;
