import Button from "../buttons/Button";

export default function NavbarDesktop() {
  const link =
    "text-sm font-medium text-white/80 hover:text-white transition-colors";

  return (
    <div className="hidden md:block">
      <div className="bg-black/35 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 items-center h-16">
            {/* Left links */}
            <nav className="flex items-center gap-8">
              <a href="#services" className={link}>Services</a>
              <a href="#about" className={link}>About</a>
              <a href="#contact" className={link}>Contact</a>
            </nav>

            {/* Center brand */}
            <div className="flex justify-center">
              <a
                href="#home"
                className="font-display text-2xl tracking-[0.2em] uppercase text-white"
              >
                SWISSCO
              </a>
            </div>

            {/* Right CTA */}
            <div className="flex justify-end">
              <Button variant="primary" size="sm" href="#contact">
                Book now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}