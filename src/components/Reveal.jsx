import { useEffect, useRef, useState } from "react";

/* Wrap any block to animate it into view on scroll */
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,    // ms
  y = 24,       // px translateY distance
  once = true,
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [once]);

  const style = {
    transition: "all 700ms ease-out",
    transitionDelay: `${delay}ms`,
    transform: inView ? "translateY(0)" : `translateY(${y}px)`,
    opacity: inView ? 1 : 0,
    willChange: "transform, opacity",
  };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}