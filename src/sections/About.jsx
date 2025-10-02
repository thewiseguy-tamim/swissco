import { useState } from "react";
import Reveal from "../components/Reveal";
import Container from "../components/layout/Container";
import Button from "../components/buttons/Button";
import Modal from "../components/ui/Modal";

// Replace with your own assets
import aboutMain from "../assets/inv.png";
import aboutInset from "../assets/cnc.png";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="relative bg-transparent">
      {/* Ambient accents */}
      <div className="pointer-events-none absolute -top-24 left-[-60px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,.16),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-80px] right-[-60px] h-[360px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.16),transparent_60%)] blur-3xl" />

      <Container className="py-24 md:py-28">
        <div className="grid items-center gap-10 md:gap-12 md:grid-cols-12">
          {/* Left: Title + richer copy + CTA */}
          <div className="md:col-span-6">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4">
                About Us
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-5 text-white/85 leading-relaxed">
                <p>
                  We’re an industrial electronics repair company focused on the brains of automation—PLCs, inverters (VFD), servo drives, HMIs, and power supplies. For over 20 years we’ve helped production teams slash downtime with fast, component‑level diagnostics and reliable repairs.
                </p>
                <p>
                  Based in Mirpur, Dhaka, Bangladesh, we serve customers nationwide. Every job is handled in an ESD‑safe environment with traceable parts and a clear, step‑by‑step process from intake to burn‑in testing.
                </p>
                <p>
                  Our philosophy is simple: repair first when it’s safe and cost‑effective; replace only when it meaningfully improves reliability or lead time. This approach saves budgets and keeps lines moving.
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
                <Button variant="primary" size="md" onClick={() => setOpen(true)}>
                  Learn More
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Visual card (bigger images) */}
          <div className="md:col-span-6">
            <Reveal>
              <div className="group relative">
                <div className="pointer-events-none absolute -inset-3 rounded-[28px] about-frame-glow" />
                <div className="relative overflow-hidden rounded-[24px] ring-1 ring-white/10 bg-white/[0.03]">
                  <img
                    src={aboutMain}
                    alt="Industrial electronics repair"
                    className="h-[360px] sm:h-[480px] md:h-[560px] w-full object-cover transform-gpu transition duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="pointer-events-none absolute -inset-y-10 -left-1/3 w-1/2 rotate-12 about-sweep" />
                </div>

                {/* Bigger inset chip */}
                <div className="hidden sm:block">
                  <div className="absolute -bottom-8 -left-8 w-48 sm:w-56 md:w-64 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-sm transform-gpu transition duration-500 group-hover:translate-y-[-6px] group-hover:translate-x-[4px]">
                    <img
                      src={aboutInset}
                      alt="Bench diagnostics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Blog-style Modal (80vw x 80vh) with taller hero image */}
      <Modal open={open} onClose={() => setOpen(false)} title="About Swissco">
        <article className="mx-auto max-w-3xl">
          {/* Larger hero image in modal */}
          <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/[0.04]">
            <img
              src={aboutMain}
              alt="Shop floor"
              className="w-full h-72 sm:h-80 md:h-96 object-cover"
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
          <h1 className="mt-3 font-display text-2xl sm:text-3xl text-white">
            20 years of repairing the brains of industry
          </h1>

          {/* Body */}
          <div className="mt-4 space-y-6 text-white/85 leading-relaxed">
            <p>
              From PLC backplanes to high‑power inverter stages, our team has seen most failure modes in the field. We favor repairing over replacing: component‑level fixes, tested under load and temperature, so you get predictable uptime and lower total cost.
            </p>

            <h3 className="font-display text-xl text-white">How we work</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Intake and quick health check, then an approval quote.</li>
              <li>Root‑cause diagnostics with scope, thermal cam, and logic probes.</li>
              <li>ESD‑safe rework using traceable parts and procedures.</li>
              <li>Burn‑in and functional tests against known‑good fixtures.</li>
              <li>Return with report and warranty.</li>
            </ol>

            <h3 className="font-display text-xl text-white">Why choose us</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                <div className="font-medium">Repair‑first, cost‑smart</div>
                <p className="text-sm text-white/75 mt-1">We prioritize viable repairs to save replacement costs and lead time.</p>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                <div className="font-medium">Documented & traceable</div>
                <p className="text-sm text-white/75 mt-1">Every job is logged with parts, notes, and test results for auditability.</p>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                <div className="font-medium">Tested under load</div>
                <p className="text-sm text-white/75 mt-1">Burn‑in and functional tests mimic real operating conditions.</p>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-4">
                <div className="font-medium">Nationwide logistics</div>
                <p className="text-sm text-white/75 mt-1">Pickup and delivery options across Bangladesh reduce your downtime.</p>
              </div>
            </div>

            <h3 className="font-display text-xl text-white">Service levels</h3>
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

            <h3 className="font-display text-xl text-white">Turnaround & coverage</h3>
            <p>
              We’re based in Mirpur, Dhaka, and serve customers nationwide via courier pickup and drop‑off. Ask about scheduled maintenance windows and onsite support.
            </p>
          </div>

          {/* Footer actions */}
          <div className="mt-6 flex gap-3">
            <Button variant="primary" size="md" href="#contact">
              Get a repair quote
            </Button>
            <Button variant="outline" size="md" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </article>
      </Modal>
    </section>
  );
}