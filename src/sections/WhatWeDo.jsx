import Container from "../components/layout/Container";
import WhatWeDoDesktop from "./whatwedo/WhatWeDoDesktop";
import WhatWeDoMobile from "./whatwedo/WhatWeDoMobile";

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
    <section id="what-we-do" className="relative bg-transparent overflow-hidden">
      {/* Ambient glows (clipped) */}
      <div className="pointer-events-none absolute -top-20 -left-10 h-[320px] w-[420px] rounded-full blur-3xl opacity-30 bg-emerald-500/30" />
      <div className="pointer-events-none absolute bottom-[-60px] right-[-40px] h-[340px] w-[420px] rounded-full blur-3xl opacity-25 bg-cyan-400/30" />

      <Container className="py-24 md:py-28">
        {/* Clamp inner width to match Contact/Services */}
        <div className="mx-auto w-full max-w-[60rem] lg:max-w-[64rem]">
          <div className="hidden md:block">
            <WhatWeDoDesktop items={items} />
          </div>
          <div className="md:hidden">
            <WhatWeDoMobile items={items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
