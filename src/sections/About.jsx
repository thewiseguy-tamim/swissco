import Reveal from "../components/Reveal";
import Container from "../components/layout/Container";

export default function About() {
  return (
    <section className="bg-transparent">
      <Container className="py-24 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-4">About</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-white/80 max-w-3xl">
            Swissco builds advanced industrial handling and processing systems where precision
            meets innovation. Our engineering culture focuses on reliability, maintainability,
            and operator‑first design.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
