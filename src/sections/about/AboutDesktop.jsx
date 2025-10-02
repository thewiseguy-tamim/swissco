import Reveal from "../../components/Reveal";
import Button from "../../components/buttons/Button";

export default function AboutDesktop({ onLearnMore, mainImg, insetImg }) {
  return (
    <div className="grid items-center gap-12 md:grid-cols-12">
      {/* Left: Rich copy */}
      <div className="md:col-span-6">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl mb-4">About Us</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-5 text-white/85 leading-relaxed">
            <p>
              We’re an industrial electronics repair company focused on the brains of automation—PLCs,
              inverters (VFD), servo drives, HMIs, and power supplies. For over 20 years we’ve helped
              production teams slash downtime with fast, component‑level diagnostics and reliable repairs.
            </p>
            <p>
              Based in Mirpur, Dhaka, Bangladesh, we serve customers nationwide. Every job is handled in an
              ESD‑safe environment with traceable parts and a clear process from intake to burn‑in testing.
            </p>
            <p>
              Our philosophy is simple: repair first when it’s safe and cost‑effective; replace only when
              it meaningfully improves reliability or lead time. This saves budgets and keeps lines moving.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-xs uppercase tracking-wider text-white/60">What you can expect</div>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1">
                  <li>Root‑cause diagnostics</li>
                  <li>Documented repairs & tests</li>
                  <li>Burn‑in under load</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-xs uppercase tracking-wider text-white/60">Why teams choose us</div>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1">
                  <li>Fast, predictable turnaround</li>
                  <li>Transparent quotes & warranty</li>
                  <li>Nationwide pickup & delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-7">
            <Button variant="primary" size="md" onClick={onLearnMore}>
              Learn More
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Right: Visual card (large) */}
      <div className="md:col-span-6">
        <Reveal>
          <div className="group relative">
            <div className="pointer-events-none absolute -inset-3 rounded-[28px] about-frame-glow" />
            <div className="relative overflow-hidden rounded-[24px] ring-1 ring-white/10 bg-white/[0.03]">
              <img
                src={mainImg}
                alt="Industrial electronics repair"
                className="h-[520px] lg:h-[560px] w-full object-cover transform-gpu transition duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="pointer-events-none absolute -inset-y-10 -left-1/3 w-1/2 rotate-12 about-sweep" />
            </div>

            {/* Inset chip */}
            <div className="absolute -bottom-8 -left-8 hidden sm:block">
              <div className="w-56 lg:w-64 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-sm transform-gpu transition duration-500 group-hover:translate-y-[-6px] group-hover:translate-x-[4px]">
                <img src={insetImg} alt="Bench diagnostics" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
