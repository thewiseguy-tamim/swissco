import { useEffect, useState } from "react";
import Particles from "../card/part";

export default function GlobalParticles() {
  // Measure hero height to hide particles behind hero
  const [clipTop, setClipTop] = useState(0);

  useEffect(() => {
    const hero = document.getElementById("hero");

    const update = () => {
      if (!hero) {
        setClipTop(0);
        return;
      }
      // Use offsetHeight for stable value; fallback to getBoundingClientRect
      const h = hero.offsetHeight || Math.round(hero.getBoundingClientRect().height || 0);
      setClipTop(h);
    };

    update();

    const ro = new ResizeObserver(update);
    if (hero) ro.observe(hero);

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    if (document.fonts?.ready) document.fonts.ready.then(update);
    const id = setTimeout(update, 0);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      clearTimeout(id);
    };
  }, []);

  return (
    // Fixed layer behind content
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Clip out the hero height from the top */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(${clipTop}px 0 0 0)`,
          WebkitClipPath: `inset(${clipTop}px 0 0 0)`,
        }}
      >
        {/* Fallback dark fill behind particles so you never see white */}
        <div className="absolute inset-0 bg-neutral-950" />

        {/* Particles overlay (transparent canvas) */}
        <Particles
          className="absolute inset-0"
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}  // listens on window inside part.jsx
          alphaParticles={true}        // IMPORTANT: transparent particles
          disableRotation={false}
        />
      </div>
    </div>
  );
}