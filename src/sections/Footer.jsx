import Container from "../components/layout/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <Container className="py-6 text-sm text-white/60">
        © {new Date().getFullYear()} Swissco. All rights reserved.
      </Container>
    </footer>
  );
}
