import Button from "../../components/buttons/Button";

export default function AboutModalMobile({ onClose, mainImg }) {
  return (
    <article className="mx-auto max-w-2xl">
      {/* Smaller hero for mobile */}
      <div className="relative overflow-hidden rounded-lg ring-1 ring-white/10 bg-white/[0.04]">
        <img
          src={mainImg}
          alt="Shop floor"
          className="w-full h-56 sm:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      <h1 className="mt-3 font-display text-2xl text-white">
        20 years of repairing the brains of industry
      </h1>

      <div className="mt-4 space-y-5 text-white/85 leading-relaxed">
        <p>
          We repair PLCs, inverters (VFD), servo drives, HMIs, and power supplies with
          component‑level precision—keeping your lines running and costs under control.
        </p>

        <h3 className="font-display text-xl text-white">How we work</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Intake, quick check, and approval quote.</li>
          <li>Root‑cause diagnostics (scope/thermal/logic).</li>
          <li>ESD‑safe rework with traceable parts.</li>
          <li>Burn‑in and functional testing.</li>
          <li>Return, report, and warranty.</li>
        </ol>

        <h3 className="font-display text-xl text-white">Why choose us</h3>
        <ul className="space-y-2">
          <li className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm">
            Repair‑first, cost‑smart approach
          </li>
          <li className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm">
            Documented repairs and test results
          </li>
          <li className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm">
            Burn‑in under real‑world loads
          </li>
          <li className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm">
            Nationwide pickup and delivery
          </li>
        </ul>

        <h3 className="font-display text-xl text-white">Service levels</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="rounded-md bg-white/5 border border-white/10 p-3 text-sm">
            <div className="text-white/60">Standard</div>
            <div className="font-semibold">5–10 days</div>
          </div>
          <div className="rounded-md bg-white/5 border border-white/10 p-3 text-sm">
            <div className="text-white/60">Expedited</div>
            <div className="font-semibold">48–72 hrs</div>
          </div>
          <div className="rounded-md bg-white/5 border border-white/10 p-3 text-sm">
            <div className="text-white/60">Emergency</div>
            <div className="font-semibold">Same‑day (Dhaka)</div>
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="mt-6 flex gap-3">
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
