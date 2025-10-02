import PixelTransition from "../components/card/serviceCard";
import Reveal from "../components/Reveal";
import Container from "../components/layout/Container";

import handlingImg from "../assets/plc1.png";
import processingImg from "../assets/inv.png";
import integrationImg from "../assets/moni.png";
import supportImg from "../assets/cnc.png";

const services = [
  {
    title: "Material Handling",
    blurb:
      "Precision conveyors, lifts, and robotics designed for consistent throughput.",
    points: ["Conveyors & lifts", "Robotic pick & place", "End-of-line packaging"],
    img: handlingImg,
    pixelColor: "rgba(56, 240, 200, 0.9)",
  },
  {
    title: "Processing Systems",
    blurb:
      "Automated processing lines tuned for quality, uptime, and efficiency.",
    points: ["Batch & continuous", "Sanitary design", "CIP-ready"],
    img: processingImg,
    pixelColor: "rgba(128, 235, 255, 0.9)",
  },
  {
    title: "Controls & Integration",
    blurb:
      "PLC/SCADA, MES, and data layers integrated for total visibility.",
    points: ["PLC/HMI", "SCADA dashboards", "Data capture & OEE"],
    img: integrationImg,
    pixelColor: "rgba(180, 200, 255, 0.9)",
  },
  {
    title: "Service & Support",
    blurb:
      "Commissioning, training, and proactive maintenance to keep you running.",
    points: ["24/7 support", "Spare parts", "On-site audits"],
    img: supportImg,
    pixelColor: "rgba(170, 255, 190, 0.9)",
  },
];

function CardFrontImage({ image, title }) {
  return (
    <div className="relative w-full h-full">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}

function CardBackText({ title, blurb, points }) {
  return (
    <div className="w-full h-full p-6 md:p-8 bg-black/70 backdrop-blur-sm">
      <h4 className="font-display text-xl md:text-2xl mb-2">{title}</h4>
      <p className="text-white/85 text-sm md:text-base">{blurb}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/80" />
            {p}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-white/60">Hover (tap on mobile) to reveal.</p>
    </div>
  );
}

export default function Services() {
  return (
    <section className="bg-transparent overflow-hidden">
      <Container className="py-24 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Services</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 100}>
              <div className="group">
                <PixelTransition
                  aspectRatio="100%"
                  gridSize={10}
                  pixelColor={s.pixelColor}
                  animationStepDuration={0.55}
                  className="bg-black/30 border-white/20 rounded-2xl"
                  style={{ width: "100%" }}
                  firstContent={<CardFrontImage image={s.img} title={s.title} />}
                  secondContent={<CardBackText title={s.title} blurb={s.blurb} points={s.points} />}
                />
                <h3 className="mt-4 text-center font-display text-xl md:text-2xl text-white">
                  {s.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}