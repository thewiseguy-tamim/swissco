import NavbarDesktop from "./nav/NavbarDesktop";
import NavbarMobile from "./nav/NavbarMobile";

/* Fixed header wrapper so content can pad under it (h-16) */
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50" id="home">
      <NavbarDesktop />
      <NavbarMobile />
    </header>
  );
}