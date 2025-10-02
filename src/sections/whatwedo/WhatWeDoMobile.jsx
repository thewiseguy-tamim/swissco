import Reveal from "../../components/Reveal";
import Button from "../../components/buttons/Button";
import Counter from "../../components/Counter";
import RepairPanel from "../../components/visuals/RepairPanel";

export default function WhatWeDoMobile({ items }) {
  return (
    <div className="space-y-8">
      <Reveal>
        <div className="flex justify-center">
          <RepairPanel className="w-[260px] sm:w-[300px]" />
        </div>
      </Reveal>

      <Reveal>
        <h2 className="font-display text-3xl mb-3">What we do</h2>
      </Reveal>

      <Reveal delay={80}>
        <p className="text-white/85">
          We repair PLCs, inverters (VFD), servo drives, HMIs, and power supplies. Fast diagnostics,
          quality parts, and thorough testing keep you running.
        </p>
      </Reveal>

      <Reveal delay={150}>
        <div className="grid grid-cols-1 gap-3">
          {items.map((t) => (
            <div key={t} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90">
              {t}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs uppercase tracking-wider text-white/60">Years repairing</div>
            <div className="mt-1 text-xl font-semibold"><Counter to={20} suffix="+" /></div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs uppercase tracking-wider text-white/60">Categories</div>
            <div className="mt-1 text-xl font-semibold">{items.length}</div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={240}>
        <div className="flex gap-3">
          <Button variant="primary" size="md" href="#contact">Get a repair quote</Button>
          <Button variant="outline" size="md" href="#services">See services</Button>
        </div>
      </Reveal>
    </div>
  );
}
