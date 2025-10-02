import Button from "../../components/buttons/Button";

export default function AboutModalDesktop({ onClose, mainImg }) {
  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero image (larger on desktop) */}
      <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/[0.04]">
        <img
          src={mainImg}
          alt="Shop floor"
          className="w-full h-80 md:h-96 lg:h-[28rem] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      {/* Meta */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-white/60 text-sm">
        <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
          SC
        </div>
        <span>Swissco</span>
        <span className="h-1 w-1 rounded-full bg-white/30" />
        <span>Updated Oct 2025</span>
        <span className="h-1 w-1 rounded-full bg-white/30" />
        <span>5 min read</span>
      </div>

      {/* Title */}
      <h1 className="mt-3 font-display text-3xl md:text-4xl text-white">
        20 years of repairing the brains of industry
      </h1>

      {/* Body */}
      <div className="mt-5 space-y-7 text-white/85 leading-relaxed">
        <p>
          From PLC backplanes to high‑power inverter stages, our team has seen most
          failure modes in the field. We favor repairing over replacing: component‑level
          fixes, tested under load and temperature, so you get predictable uptime and
          lower total cost.
        </p>

        <h3 className="font-display text-2xl text-white">How we work</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Intake and quick health check, then an approval quote.</li>
          <li>Root‑cause diagnostics with scope, thermal cam, and logic probes.</li>
          <li>ESD‑safe rework using traceable parts and procedures.</li>
          <li>Burn‑in and functional tests against known‑good fixtures.</li>
          <li>Return with report and warranty.</li>
        </ol>

        <h3 className="font-display text-2xl text-white">Why choose us</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg bg-white/5 border border-white/10 p-4">
            <div className="font-medium">Repair‑first, cost‑smart</div>
            <p className="text-sm text-white/75 mt-1">
              We prioritize viable repairs to reduce replacement costs and lead time.
            </p>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-4">
            <div className="font-medium">Documented & traceable</div>
            <p className="text-sm text-white/75 mt-1">
              Every job is logged with parts, notes, and test results.
            </p>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-4">
            <div className="font-medium">Tested under load</div>
            <p className="text-sm text-white/75 mt-1">
              Burn‑in and functional tests mimic real operating conditions.
            </p>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-4">
            <div className="font-medium">Nationwide logistics</div>
            <p className="text-sm text-white/75 mt-1">
              Pickup and delivery options across Bangladesh reduce your downtime.
            </p>
          </div>
        </div>

        <h3 className="font-display text-2xl text-white">Service levels</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="rounded-lg bg-white/5 border border-white/10 p-4">
            <div className="text-sm text-white/60">Standard</div>
            <div className="font-semibold">5–10 business days</div>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-4">
            <div className="text-sm text-white/60">Expedited</div>
            <div className="font-semibold">48–72 hours</div>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-4">
            <div className="text-sm text-white/60">Emergency (Dhaka)</div>
            <div className="font-semibold">Same‑day options</div>
          </div>
        </div>

        <blockquote className="rounded-lg border-l-4 border-emerald-400/70 bg-white/[0.03] px-4 py-3 text-white/80 italic">
          “Repair first. Replace only when it saves you time or reduces risk.”
        </blockquote>

        <h3 className="font-display text-2xl text-white">Turnaround & coverage</h3>
        <p>
          We’re based in Mirpur, Dhaka, and serve customers nationwide via courier pickup and
          drop‑off. Ask about scheduled maintenance windows and onsite support.
        </p>
      </div>

      {/* Footer actions */}
      <div className="mt-7 flex gap-3">
        <Button variant="primary" size="md" href="#contact">
          Get a repair quote
        </Button>
        <Button variant="outline" size="md" onClick={onClose}>
          Close
        </Button>
      </div>
    </article>
  );
}
