import { useEffect, useState } from "react";
import Button from "../buttons/Button";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  // Close on ESC and lock body scroll while menu is open
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open]);

  const link =
    "text-base font-medium text-white/90 hover:text-white transition-colors";

  const closeMenu = () => setOpen(false);

  return (
    <div className="md:hidden">
      {/* Top bar */}
      <div className="bg-black/35 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a
              href="#home"
              className="font-display text-xl tracking-[0.2em] uppercase text-white"
            >
              SWISSCO
            </a>

            {/* Hamburger button */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop (click to close). Starts below the 64px top bar (top-16) */}
      <div
        className={`fixed top-16 inset-x-0 bottom-0 z-30 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Slide-down menu panel */}
      <div
        id="mobile-menu"
        className={`fixed top-16 inset-x-0 z-40 transform transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-neutral-900/95 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col gap-3">
              <a href="#services" onClick={closeMenu} className={link}>
                Services
              </a>
              <a href="#about" onClick={closeMenu} className={link}>
                About
              </a>
              <a href="#contact" onClick={closeMenu} className={link}>
                Contact
              </a>

              <div className="pt-3">
                <Button
                  variant="primary"
                  size="sm"
                  href="#contact"
                  onClick={closeMenu}
                >
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}