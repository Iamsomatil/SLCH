import React, { useEffect, useMemo, useRef, useState } from "react";

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
};

const defaultStats: Stat[] = [
  {
    label: "Services Completed",
    value: 500,
    suffix: "+",
  },
  {
    label: "Miles Traveled",
    value: 100000,
    suffix: "+",
  },
  {
    label: "Facilities Supported",
    value: 250,
    suffix: "+",
  },
];

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number>();
  const rafId = useRef<number>();
  const isMounted = useRef(true);
  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    isMounted.current = true;
    if (prefersReduced) {
      setCount(target);
      return () => {
        isMounted.current = false;
      };
    }

    const startCounting = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out function
      const easeOutQuad = (t: number) => t * (2 - t);
      const current = Math.floor(easeOutQuad(progress) * target);

      if (isMounted.current) {
        setCount(current);
      }

      if (progress < 1) {
        rafId.current = requestAnimationFrame(startCounting);
      }
    };

    rafId.current = requestAnimationFrame(startCounting);

    return () => {
      isMounted.current = false;
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [target, duration, prefersReduced]);

  return count;
}

const StatItem: React.FC<Stat> = ({
  label,
  value,
  prefix = "",
  suffix = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(isVisible ? value : 0);
  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    // Reduced motion users see the final value immediately
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    // Immediate check in case the element is already in view (e.g., after HMR)
    const rect = el.getBoundingClientRect();
    const viewportH =
      window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportH * 0.9 && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced]);

  return (
    <div
      ref={ref}
      className="text-center"
      aria-live="polite"
      aria-atomic="true"
      onMouseEnter={() => setIsVisible(true)}
    >
      <div className="inline-flex items-baseline gap-2 rounded-full px-4 py-2 bg-white shadow-soft">
        <span
          className="text-4xl font-extrabold text-navy tabular-nums min-w-[6ch] text-center"
          aria-label={`${prefix}${value}${suffix} ${label}`.trim()}
        >
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-gray-600 text-sm">{label}</div>
    </div>
  );
};

const StatsCounter: React.FC<{ items?: Stat[] }> = ({ items }) => {
  const stats = items && items.length ? items : defaultStats;

  return (
    <section className="py-12 md:py-16 bg-white" aria-label="Our Impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-10">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
