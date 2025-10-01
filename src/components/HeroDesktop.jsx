import Button from "./buttons/Button";
import heroImg from "../assets/hero.jpg";

export default function HeroDesktop() {
  return (
    <section className="relative hidden md:block min-h-screen pt-16 overflow-hidden">
      {/* BG image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <h1 className="font-display text-white leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] text-6xl lg:text-7xl">
          Advanced Industrial Handling
          <br />
          Solutions
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-white/85 leading-relaxed">
          Welcome to our hub of advanced industrial handling and processing equipment, where
          precision meets innovation. Discover cutting-edge solutions tailored to optimize
          efficiency and elevate productivity in your operations.
        </p>

        <div className="mt-8">
          <Button variant="primary" size="md" href="#contact">
            Contact Now
          </Button>
        </div>
      </div>
    </section>
  );
}