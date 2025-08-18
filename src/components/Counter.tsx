import React, { useEffect, useMemo, useRef, useState } from "react";

export type CounterProps = {
  value: number;
  duration?: number; // ms
  prefix?: string;
  suffix?: string;
  formatter?: (n: number) => string;
  threshold?: number; // IntersectionObserver threshold
  className?: string;
  ariaLabel?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const Counter: React.FC<CounterProps> = ({
  value,
  duration = 1400,
  prefix = "",
  suffix = "",
  formatter,
  threshold = 0.3,
  className,
  ariaLabel,
}) => {
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(0);
  const rootRef = useRef<HTMLSpanElement>(null);
  const prefersReduced = useMemo(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    // If reduced motion, render immediately
    if (prefersReduced) {
      setCurrent(value);
      setActive(true);
      return;
    }
    let observed = true;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && observed) {
            setActive(true);
            observed = false;
            io.disconnect();
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, value, prefersReduced]);

  useEffect(() => {
    if (!active) return;
    if (prefersReduced) return; // already set

    let rafId = 0;
    const start = performance.now();
    const animate = (t: number) => {
      const elapsed = t - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(p);
      setCurrent(Math.floor(value * eased));
      if (p < 1) rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [active, duration, value, prefersReduced]);

  const displayed = formatter ? formatter(current) : current.toLocaleString();
  const finalLabel =
    ariaLabel ??
    `${prefix}${
      formatter ? formatter(value) : value.toLocaleString()
    }${suffix}`;

  return (
    <span ref={rootRef} aria-label={finalLabel} className={className}>
      {prefix}
      {displayed}
      {suffix}
    </span>
  );
};

export default Counter;
