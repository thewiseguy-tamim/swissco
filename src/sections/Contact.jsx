import Reveal from "../components/Reveal";
import Button from "../components/buttons/Button";
import Container from "../components/layout/Container";

export default function Contact() {
  return (
    <section className="bg-transparent">
      <Container className="py-24 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Contact</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-white/80 max-w-2xl mb-6">
            Ready to elevate your operations? Get in touch and our team will respond promptly.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="primary" size="md" href="mailto:hello@swissco.example">
              Email Us
            </Button>
            <Button variant="outline" size="md" href="#home">
              Back to Top
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
