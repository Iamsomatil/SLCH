import React, { useEffect, useMemo, useRef, useState } from "react";
import Counter from "./Counter";

type CircleStat = { label: string; value: number; suffix?: string };
type BarStat = { label: string; percent: number };

const defaultCircles: CircleStat[] = [
  { label: "Services Completed", value: 500, suffix: "+" },
  { label: "Floors Traveled", value: 9999, suffix: "+" },
  { label: "Miles Driven", value: 10000, suffix: "+" },
];

const defaultBars: BarStat[] = [
  { label: "Service Uptime", percent: 94 },
  { label: "Customer Retention", percent: 98 },
  { label: "On‑time Completion", percent: 99 },
];

const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh * 0.9 && rect.bottom > 0) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [prefersReduced, threshold]);

  return { ref, visible, prefersReduced } as const;
};

const CircleCard: React.FC<CircleStat> = ({ label, value, suffix }) => {
  const { ref, visible } = useInView(0.2);
  return (
    <div
      ref={ref}
      className="relative mx-auto flex h-40 w-40 md:h-44 md:w-44 items-center justify-center rounded-full border-2 border-navy/20 bg-white"
    >
      <div className="text-center">
        <Counter
          value={visible ? value : 0}
          suffix={suffix}
          className="text-4xl font-extrabold text-navy tabular-nums"
          ariaLabel={`${label}: ${value}${suffix ?? ""}`}
        />
        <div className="mt-2 text-sm text-navy/80 max-w-[12ch] mx-auto leading-snug">
          {label}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-2 left-1/2 h-1 w-2/3 -translate-x-1/2 rounded-full bg-gold" />
    </div>
  );
};

const BarItem: React.FC<BarStat> = ({ label, percent }) => {
  const { ref, visible, prefersReduced } = useInView(0.2);
  const width = prefersReduced ? percent : visible ? percent : 0;
  return (
    <div ref={ref} className="space-y-1">
      <div className="flex items-center justify-between text-sm text-navy">
        <span>{label}</span>
        <span className="font-semibold">{percent}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-navy/15">
        <div
          className="h-1.5 rounded-full bg-gold transition-all duration-700"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const StatsCounter: React.FC<{ circles?: CircleStat[]; bars?: BarStat[] }> = ({
  circles,
  bars,
}) => {
  const circleStats = circles && circles.length ? circles : defaultCircles;
  const barStats = bars && bars.length ? bars : defaultBars;

  return (
    <section className="py-12 md:py-16 bg-white" aria-label="Our Impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-10">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
            {circleStats.map((c) => (
              <CircleCard key={c.label} {...c} />
            ))}
          </div>
          <div className="space-y-5">
            {barStats.map((b) => (
              <BarItem key={b.label} {...b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
