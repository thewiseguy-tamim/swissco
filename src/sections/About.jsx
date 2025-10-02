import { useState } from "react";
import Container from "../components/layout/Container";
import Modal from "../components/ui/Modal";
import AboutDesktop from "./about/AboutDesktop";
import AboutMobile from "./about/AboutMobile";
import AboutModalDesktop from "./about/AboutModalDesktop";
import AboutModalMobile from "./about/AboutModalMobile";
import useMediaQuery from "../hooks/useMediaQuery";

// Replace with your own assets
import aboutMain from "../assets/plc1.png";
import aboutInset from "../assets/plc1.png";

export default function About() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section id="about" className="relative bg-transparent overflow-hidden">
      {/* Ambient accents (clipped by overflow-hidden) */}
      <div className="pointer-events-none absolute -top-24 left-[-60px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,.16),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-80px] right-[-60px] h-[360px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,.16),transparent_60%)] blur-3xl" />

      <Container className="py-24 md:py-28">
        {/* Desktop */}
        <div className="hidden md:block">
          <AboutDesktop
            onLearnMore={() => setOpen(true)}
            mainImg={aboutMain}
            insetImg={aboutInset}
          />
        </div>
        {/* Mobile */}
        <div className="md:hidden">
          <AboutMobile
            onLearnMore={() => setOpen(true)}
            mainImg={aboutMain}
            insetImg={aboutInset}
          />
        </div>
      </Container>

      {/* Device-specific modal (80% screen) */}
      <Modal open={open} onClose={() => setOpen(false)} title="About Swissco">
        {isDesktop ? (
          <AboutModalDesktop onClose={() => setOpen(false)} mainImg={aboutMain} />
        ) : (
          <AboutModalMobile onClose={() => setOpen(false)} mainImg={aboutMain} />
        )}
      </Modal>
    </section>
  );
}