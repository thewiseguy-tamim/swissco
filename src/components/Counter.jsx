import { useEffect, useRef, useState } from "react";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function Counter({
  to = 0,
  duration = 1200,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}) {
  const [val, setVal] = useState(0);
  const startedRef = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let startTime = 0;

    function start() {
      if (startedRef.current) return;
      startedRef.current = true;

      if (prefersReduced || duration <= 0) {
        setVal(to);
        return;
      }

      const from = 0;
      const toVal = Number(to);

      const tick = (ts) => {
        if (!startTime) startTime = ts;
        const t = Math.min(1, (ts - startTime) / duration);
        const eased = easeOutCubic(t);
        const current = from + (toVal - from) * eased;
        setVal(current);
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        }
      };

      raf = requestAnimationFrame(tick);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) start();
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  const formatted =
    Number(val).toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) || "0";

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
