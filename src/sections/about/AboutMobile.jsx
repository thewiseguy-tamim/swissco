import Reveal from "../../components/Reveal";
import Button from "../../components/buttons/Button";

export default function AboutMobile({ onLearnMore, mainImg, insetImg }) {
  return (
    <div className="space-y-8">
      {/* Visual first on mobile */}
      <Reveal>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-3 rounded-[24px] about-frame-glow" />
          <div className="relative overflow-hidden rounded-[20px] ring-1 ring-white/10 bg-white/[0.03]">
            <img
              src={mainImg}
              alt="Industrial electronics repair"
              className="h-[320px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="pointer-events-none absolute -inset-y-10 -left-1/3 w-1/2 rotate-12 about-sweep" />
          </div>

          {/* Tiny inset chip on mobile */}
          <div className="absolute -bottom-5 -left-5">
            <div className="w-28 rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-sm">
              <img src={insetImg} alt="Bench diagnostics" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Copy */}
      <Reveal>
        <h2 className="font-display text-3xl mb-3">About Us</h2>
      </Reveal>

      <Reveal delay={80}>
        <div className="space-y-4 text-white/85 leading-relaxed">
          <p>
            We repair the core of automation — PLCs, inverters (VFD), servo drives, HMIs, and power supplies.
            20+ years of component‑level experience keeps your lines running.
          </p>
          <p>
            Based in Mirpur, Dhaka, we serve customers nationwide with traceable parts,
            documented testing, and warranty-backed work.
          </p>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="grid grid-cols-1 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs uppercase tracking-wider text-white/60">Highlights</div>
            <ul className="mt-2 text-sm list-disc list-inside space-y-1">
              <li>Root‑cause diagnostics</li>
              <li>Burn‑in under load</li>
              <li>Fast turnaround</li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <Button variant="primary" size="md" onClick={onLearnMore}>
          Learn More
        </Button>
      </Reveal>
    </div>
  );
}
