import Button from "./buttons/Button";
import heroImg from "../assets/hero.jpg";

export default function HeroMobile() {
  return (
    <section className="relative md:hidden min-h-[90vh] pt-[4.5rem] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 text-center flex flex-col items-center justify-center min-h-[calc(90vh-4.5rem)]">
        <h1 className="font-display text-white leading-tight text-4xl">
          Advanced Industrial Handling
          <br />
          Solutions
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/85">
          Welcome to our hub of advanced industrial handling and processing equipment, where
          precision meets innovation.
        </p>
        <div className="mt-6">
          <Button variant="primary" size="sm" href="#contact">
            Contact Now
          </Button>
        </div>
      </div>
    </section>
  );
}