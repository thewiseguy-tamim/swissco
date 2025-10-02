import Reveal from "../../components/Reveal";
import Button from "../../components/buttons/Button";
import Counter from "../../components/Counter";
import RepairPanel from "../../components/visuals/RepairPanel";

export default function WhatWeDoDesktop({ items }) {
  return (
    <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
      {/* Left content */}
      <div>
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl mb-4">What we do</h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-white/85 max-w-2xl">
            We repair industrial electronics — from PLCs and inverters (VFD) to servo
            drives, HMIs, and power supplies. With more than two decades of hands‑on
            experience, we restore reliability to your production lines with fast
            diagnostics, genuine parts, and rigorous testing. Based in Mirpur, Dhaka,
            Bangladesh — serving nationwide.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-6 grid grid-cols-2 gap-3 max-w-xl">
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
              <div className="text-xs uppercase tracking-wider text-white/60">Years repairing</div>
              <div className="mt-1 text-2xl font-semibold"><Counter to={20} suffix="+" /></div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <div className="text-xs uppercase tracking-wider text-white/60">Categories covered</div>
              <div className="mt-1 text-2xl font-semibold"><Counter to={items.length} /></div>
            </div>
           
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-8 flex gap-3">
            <Button variant="primary" size="md" href="#contact">Get a repair quote</Button>
            <Button variant="outline" size="md" href="#services">See services</Button>
          </div>
        </Reveal>
      </div>

      {/* Right visual — explicitly sized so it never pushes the layout wider */}
      <Reveal>
        <div className="flex justify-end">
          <RepairPanel className="w-[360px] lg:w-[420px]" />
        </div>
      </Reveal>
    </div>
  );
}
