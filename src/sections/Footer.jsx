import Container from "../components/layout/Container";

export default function Footer() {
  return (
    <footer className=" border-t border-white/10 bg-black/30">
      <Container className=" flex justify-center py-6 text-sm text-white/60">
        © 2024 Swissco. All rights reserved.
      </Container>
    </footer>
  );
}
