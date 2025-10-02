import Reveal from "../components/Reveal";
import Button from "../components/buttons/Button";
import Counter from "../components/Counter";
import RepairPanel from "../components/visuals/RepairPanel";
import Container from "../components/layout/Container";

const items = [
  "PLC & I/O modules",
  "Inverters (VFD) & soft-starters",
  "Servo drives & motors",
  "HMI panels & IPCs",
  "Power supplies (SMPS)",
  "PCB-level diagnostics & rework",
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative bg-transparent">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-20 -left-10 h-[320px] w-[420px] rounded-full blur-3xl opacity-30 bg-emerald-500/30" />
      <div className="pointer-events-none absolute bottom-[-60px] right-[-40px] h-[340px] w-[420px] rounded-full blur-3xl opacity-25 bg-cyan-400/30" />

      <Container className="py-24 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left content */}
          <div>
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">
                What we do
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-white/85 max-w-2xl">
                We repair industrial electronics — from PLCs and inverters (VFD) to servo
                drives, HMIs, and power supplies. With more than two decades of hands‑on
                experience, we restore reliability to your production lines with fast
                diagnostics, genuine parts, and rigorous testing.
                Based in Mirpur, Dhaka, Bangladesh — serving nationwide.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {items.map((t) => (
                  <div
                    key={t}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Stats + CTA */}
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <div className="text-xs uppercase tracking-wider text-white/60">
                    Years repairing
                  </div>
                  <div className="mt-1 text-2xl font-semibold">
                    <Counter to={20} suffix="+" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <div className="text-xs uppercase tracking-wider text-white/60">
                    Categories covered
                  </div>
                  <div className="mt-1 text-2xl font-semibold">
                    <Counter to={items.length} />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <div className="text-xs uppercase tracking-wider text-white/60">
                    Location
                  </div>
                  <div className="mt-1 text-lg font-semibold">
                    Mirpur, Dhaka
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex gap-3">
                <Button variant="primary" size="md" href="#contact">
                  Get a repair quote
                </Button>
                <Button variant="outline" size="md" href="#services">
                  See services
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right visual */}
          <Reveal>
            <RepairPanel />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
